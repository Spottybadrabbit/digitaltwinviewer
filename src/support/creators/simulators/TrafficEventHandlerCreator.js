import { Marker, Popup } from 'mapbox-gl';
import * as d3 from 'd3';
import turf from 'turf';
import { polyfill, geoToH3, h3Distance } from "h3-js";
import { H3HexagonLayer, ArcLayer,ScreenGridLayer,ColumnLayer} from 'deck.gl';
import * as AppEvent from '../../../core/AppEvent';
import EventManager from '../../../core/managers/EventManager';
import { Server } from '../../../config';

let httpAddr = 'http://' + Server.host + ':' + Server.port + '/' + (Server.projectName !== 'dev' ? (Server.projectName + '/') : '');
/**
 * 交通事故模拟逻辑
 * @param {*} parameters 
 */
export const TrafficStrikeHandler = (parameters) => {
    setTimeout(function () {
        parameters.map.loadImage(httpAddr + 'icon/traffic_point.png', (error, image) => {
            parameters.map.addImage('traffic', image);
            parameters.map.addSource('traffic-source', {
                "type": 'geojson',
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "properties": {
                            "name": 'test'
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": parameters.simulator.coordinates
                        }
                    }]
                }
            });
            parameters.map.addLayer({
                "id": "traffic-layer",
                "type": "symbol",
                "source": "traffic-source",
                "layout": {
                    "icon-image": 'traffic',
                    "icon-size": 0.13,
                    "icon-offset": [-100, -400]
                }
            });
        });
        //标识事故地点
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.background = 'url(' + httpAddr + 'icon/loc.png) no-repeat';
        var el1 = document.createElement('p');
        el.appendChild(el1);
        var el2 = document.createElement('span');
        el1.appendChild(el2);
        new Marker(el)
            .setLngLat(parameters.simulator.coordinates)
            .addTo(parameters.map);
    }, 10000);

    setTimeout(function () {
        parameters.map.flyTo({
            center: parameters.simulator.coordinates,
            zoom: 18,
            speed: 0.5,
            curve: 1,
            easing(t) {
                return t;
            }
        });
    }, 3000);

    setTimeout(function () {
        //显示气泡窗体
        let trafficPopup = new Popup({
            closeOnClick: false,
            closeButton: false,
            className: 'popup',
            anchor: 'left'
        });
        //自定义事故气泡窗体内容    
        var div = window.document.createElement('div');
        div.style.width = '450px';
        div.style.height = '250px';
        div.style.background = 'url(' + httpAddr + 'icon/popupBg.png) no-repeat';
        div.style.backgroundSize = '100%';
        //显示弹窗
        trafficPopup.setLngLat(parameters.simulator.coordinates)
        trafficPopup.setDOMContent(div);
        //trafficPopup.addTo(parameters.map);
    }, 15000);

    setTimeout(function () {
        //道路影响范围内的H3Index数组
        let unionIndex = [];
        //道路缓冲区多边形
        let roadBuffer;
        //计算事故点的H3Index
        let accidentH3Index = geoToH3(parameters.simulator.coordinates[1], parameters.simulator.coordinates[0], 13);
        //标识拥堵路况
        d3.json(httpAddr + 'Dataes/AccientRoadSegment.geojson').then((data) => {
            //对交通事故影响的道路做缓冲区分析
            roadBuffer = turf.buffer(data, 10, 'meters');
            //计算缓冲区内填充的H3Index
            roadBuffer.features.forEach(feature => {
                let indexIDs = polyfill(feature.geometry.coordinates[0], 13, true);
                unionIndex = [...indexIDs];
            });
            //构建图层数据
            let provider = unionIndex.map((item) => {
                //计算当前索引距离事故点索引的距离
                let distance = h3Distance(item, accidentH3Index);
                return {
                    hex: item,
                    distance: 1 / distance
                }
            });
            //实例化交通拥堵热力图图层
            let accidentRoadHexagonLayer = new H3HexagonLayer({
                id: 'accidentRoadHexagonLayer',
                data: provider,
                pickable: true,
                wireframe: false,
                filled: true,
                extruded: true,
                elevationScale: 20,
                opacity: 0.8,
                getHexagon: d => d.hex,
                getFillColor: d => {
                    if (1 / (d.distance) >= 0 && 1 / (d.distance) < 10) {
                        return [255, 0, 0];
                    } else if (1 / (d.distance) >= 10 && 1 / (d.distance) < 15) {
                        return [255, 48, 48];
                    } else if (1 / (d.distance) >= 15 && 1 / (d.distance) < 20) {
                        return [210, 105, 30];
                    } else if (1 / (d.distance) >= 20) {
                        return [0, 206, 209];
                    }
                },
                getElevation: d => d.distance
            });
            //派发事件 通知DeckGL执行渲染
            //EventManager.dispatchEvent(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS, accidentRoadHexagonLayer);
        });
    }, 20000);

}

/**
 * 地铁交通流量场景模拟
 * @param {*} parameters 
 */
export const TrafficHeatmapEffectHandler = (parameters) => {
    //加载数据
    d3.json(parameters.simulator.data)
        .then((rsponse) => {
            //加载source
            parameters.map.addSource('subways', {
                "type": "geojson",
                "data": rsponse
            });
            //加载layer
            parameters.map.addLayer({
                "id": "subways-heat",
                "type": "heatmap",
                "source": "subways",
                "paint": {
                    "heatmap-weight": [
                        "interpolate",
                        ["linear"],
                        ["get", "weight"],
                        0.1, 0.5,
                        0.2, 0.8,
                        0.3, 1.2,
                        0.4, 1.5,
                        0.5, 1.8,
                        0.6, 2.0,
                        0.7, 2.2,
                        0.8, 2.5,
                        0.9, 3.0,
                        1.0, 3.5
                    ],
                    "heatmap-color": [
                        "interpolate",
                        ["linear"],
                        ["heatmap-density"],
                        0.0, "rgba(33,102,172,0)",
                        0.2, "rgb(103,169,207)",
                        0.4, "rgb(209,229,240)",
                        0.6, "rgb(253,219,199)",
                        0.8, "rgb(239,138,98)",
                        1.0, "rgb(178,24,43)"
                    ],
                    "heatmap-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        0, 25,
                        5, 35,
                        9, 46,
                        15, 56,
                        18, 66,
                        20, 86
                    ]
                }
            });
        });
    setInterval(function () {
        //热力图数据更新
        let source = parameters.map.getSource('subways');
        if (source !== undefined) {
            let currentData = source._data;
            for (let index = 0; index < currentData.features.length; index++) {
                currentData.features[index].properties.weight = Math.random();
            }
            source.setData(currentData);
        }
    }, 30000);
}

/**
 * 峰时人口流动
 * @param {*} parameters 
 */
export const PopulationMobilityEffectHandler = (parameters) => {
    //加载数据
    d3.json(parameters.simulator.data)
        .then((data) => {
            const PopulationMobilityLayer = new ArcLayer({
                id: 'populationMobilityLayer',
                data,
                pickable: false,
                getWidth: 1,
                widthScale: 1,
                widthMinPixels: 1,
                widthMaxPixels: 5,
                getSourcePosition: d => d.from.coordinates,
                getTargetPosition: d => d.to.coordinates,
                getSourceColor: [0, 255, 255],
                getTargetColor: [148, 0, 211],
                opacity: 1.0
            });
            //派发事件 通知DeckGL执行渲染
            EventManager.dispatchEvent(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS, PopulationMobilityLayer);
        });
}

/**
 * 城市重点监控区域
 * @param {*} parameters 
 */
export const CityCongestionZoneHandler = (parameters) => {
    d3.json(parameters.simulator.data)
      .then((data)=>{
        let accidentRoadHexagonLayer = new H3HexagonLayer({
            id: 'accidentRoadHexagonLayer',
            data: data,
            pickable: false,
            wireframe: false,
            filled: true,
            extruded: false,
            opacity: 1.0,
            getHexagon: d => d.index,
            getFillColor: d=>[255,215,0],
            getLineColor:[255,255,255],
            getLineWidth:3
        });
        //派发事件 通知DeckGL执行渲染
        EventManager.dispatchEvent(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS, accidentRoadHexagonLayer);
        /**
         * 可疑人员追踪
         */
        
      });
}

/**
 * 城市违法违章统计
 * @param {*} parameters 
 */
export const CityIllegalStatistica=(parameters)=>{
    d3.json(parameters.simulator.data)
      .then((data)=>{
        let screenGridLayer = new ScreenGridLayer({
            id: 'grid-heatmap-layer',
            data,
            getPosition: d => d.coordinates,
            getWeight: d => d.weights,
            cellSizePixels: 10,
            cellMarginPixels:2,
            colorRange:[
                [1,152,189],
                [73,227,206],
                [232,254,181],
                [254,237,177],
                [254,173,84],
                [213,2,85]
              ],
            gpuAggregation:false,
            aggregation: 'Sum'
          });
        //派发事件 通知DeckGL执行渲染
        EventManager.dispatchEvent(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS, screenGridLayer);
      });
    d3.json(httpAddr+'Dataes/ColumData.json')
      .then((data)=>{
          console.dir(data);
        let screenGridLayer = new ColumnLayer({
            id: 'column-layer',
            data,
            diskResolution: 12,
            radius: 15,
            extruded: true,
            pickable: true,
            elevationScale: 200,
            getPosition: d => d.coordinates,
            getFillColor: d => [255,165,0],
            getLineColor: [0, 0, 0],
            getElevation: d => d.weight
          });
        //派发事件 通知DeckGL执行渲染
        EventManager.dispatchEvent(AppEvent.MAP_DYNAMIC_LOAD_DECK_LAYERS, screenGridLayer);
      });
}