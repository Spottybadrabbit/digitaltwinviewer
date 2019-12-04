/**
 * DigitalTwinViewer全局配置项
 * 1 viewpoint：地图初始化显示配置信息
 *   (1)accessToken maobox地图访问令牌
 *   (2)language_script 本地化脚本
 *   (3)default_style 默认地图风格 
 *   (4)zoom 初始化缩放级别
 *   (5)min_zoom 最小缩放级别
 *   (6)max_zoom 最大缩放级别
 *   (7)bearingSnap 正北方向自动校正角度
 *   (8)attributionControl 是否显示AttributionControl
 *   (9)dragRotate 是否允许旋转
 *   (10)center 初始化中心视角
 *   (11)pitch  初始化垂直角度
 *   (12)bearing 初始化视角方位角
 *   (13)bounds 地图边界
 * 2 layers：地图图层信息配置项
 *   (1)baselayers 初始化加载图层配置,重要配置：
 *      1>framework：Deck/MapBox/WebGL
 *   (2)environment 三维场景环境参数配置
 *   (3)widgets 业务组件配置
 * 3 environment：3D场景环境配置项
 * 4 widgets：业务组件配置
 */
import * as AppEvent from './core/AppEvent';
import { LayerFrameworkType } from './support/others/LayerInfos';
import { ChartWidgetType } from './support/others/WidgetInfos';
const Server = {
    host: 'localhost',
    port: 3000,
    projectName: 'dev',//值等于dev时开发环境
};

let httpAddr = 'http://' + Server.host + ':' + Server.port + '/' + (Server.projectName !== 'dev' ? (Server.projectName + '/') : '');

export { Server };


const config = {
    layerData: [
        {
            id: 'arcLayer-line',
            type: 'arcLayer1',
            data: 'http://localhost:3000/upload/upload.json',
            pickable: true,
            getWidth: 1,
            title: 'test1',
            url: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            content: 'testtest',
            pop: '111',
            center: [108.8798, 34.199]
        },
        {
            id: 'arcLayer-line2',
            type: 'arcLayer2',
            data: 'http://localhost:3000/upload/upload.json',
            pickable: true,
            getWidth: 12,
            title: 'test1',
            url: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            content: 'testtest',
            pop: '111',
            center: [108.8798, 34.199]
        },
        {

            id: 'mapbox-scenegraphLayer-build',
            type: 'mapbox-scenegraphLayer-yhgj',
            position: [108.9424, 34.2609],
            altitude: 0,
            offsets: [0.0000565, 0.00000001, -0.0000006],
            rotate: [Math.PI / 2, 0, 0],
            scale: 15.41843220338983e-8,
            scenegraph: 'http://localhost:3000/model/yhgj/YHGJ.gltf',
            title: 'test2',
            url: '//upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            content: 'testtest',
            pop: '222',
            center: [108.8798, 34.199]
        }, {
            id: 'scenegraphLayer-7floor',
            type: 'mapbox-scenegraphLayer-yhgj-7floor',
            position: [108.9424, 34.2609],
            altitude: 0,
            offsets: [0.0000565, 0.00000001, -0.0000006],
            rotate: [Math.PI / 2, 0, 0],
            scale: 15.41843220338983e-8,
            scenegraph: 'http://localhost:3000/model/7floor/7floor.gltf',
            title: 'test3',
            url: '//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            content: 'testtest',
            pop: '333',
            center: [108.8798, 34.199]
        }
    ],










    title: '中移超脑平台智慧交通驾驶舱',
    //初始化地图显示
    viewpoint: {
        accessToken: 'pk.eyJ1IjoibGVubm94Y3kiLCJhIjoiY2p2cWsxazJwMmt2ODQzb2p3bTU5YzhzMiJ9.Cidm3GWoWBPccJ_s0i3qtw',
        language_script: 'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.2/mapbox-gl-rtl-text.js',
        default_style: 'mapbox://styles/mapbox/dark-v9',
        autoRotate: false,
        zoom: 15,
        min_zoom: 0,
        max_zoom: 22,
        bearingSnap: 15,
        attributionControl: false,
        dragRotate: true,
        center: [108.9416911868139, 34.26052401009258],
        pitch: 45,
        bearing: 30,
        bounds: [
            [-180, -90], //西南坐标
            [180, 90] //东北坐标
        ]
    },
    //图层配置
    layers: {
        baselayers: [
            //基于Deckgl的三维建筑场景
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                id: 'commons-buildings',
                type: 'building',
                extruded: true,
                extrudedField: 'Height',
                wireframe: false,
                opacity: 1.0,
                getFillColor: f => {
                    if (f.properties['Height'] > 5 && f.properties['Height'] < 50) {
                        return [37, 59, 77];
                    }
                    if (f.properties['Height'] > 50 && f.properties['Height'] < 100) {
                        return [78, 115, 146];
                    }
                    if (f.properties['Height'] > 100 && f.properties['Height'] < 300) {
                        return [46, 70, 91];
                    }
                },
                //data: httpAddr + 'Dataes/Buildings2.geojson'
                data: httpAddr + 'Dataes/XianBuildings.geojson'
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                id: 'important-buildings',
                type: 'building',
                extruded: true,
                extrudedField: 'Height',
                wireframe: false,
                opacity: 1.0,
                getFillColor: [74, 80, 87],
                data: httpAddr + 'Dataes/ImportantBuildings.geojson'
            },
            //基于Deckgl的城市道路
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                type: 'roads',
                color: [253, 128, 93],
                opacity: 1.0,
                widthMinPixels: 2,
                rounded: true,
                trailLength: 200,
                currentTime: 0,
                data: httpAddr + 'Dataes/Roads.json'
            },
            {
                framework: LayerFrameworkType.FLOWMAP,
                isLoad: false,
                data: httpAddr + 'Dataes/Roads.json'
            }
        ],
        operationlayers: [
            //基于Mapbox的城市内 摄像头分布图层
            {
                framework: LayerFrameworkType.MAPBOX,
                isLoad: false,
                isLoadImage: false,
                source: {
                    id: 'camera-source',
                    type: 'geojson',
                    optionos: {
                        data: httpAddr + 'Dataes/Camera.geojson',
                        imgUrl: httpAddr + 'icon/city_camera.png',
                        imgTag: 'camera-symbol',
                        cluster: true,
                        clusterRadius: 200
                    }
                },
                layer: {
                    id: 'camera-layer',
                    type: 'symbol',
                    layout: {
                        image: 'camera',
                        size: 0.1
                    }
                }
            },
            {
                framework: LayerFrameworkType.MAPBOX,
                isLoad: false,
                isLoadImage: false,
                source: {
                    id: 'subway-source',
                    type: 'geojson',
                    optionos: {
                        data: httpAddr + 'Dataes/Subway.geojson'
                    }
                },
                layer: {
                    id: 'subway-layer',
                    type: 'circle',
                    paint: {
                        'circle-radius': 3,
                        'circle-color': "#FFFF00"
                    }
                }
            },
            //地铁站点位置
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                id: 'subway-icon-layer',
                type: 'icon',
                data: httpAddr + 'Dataes/XianSubways.json',
                pickable: false,
                iconAtlas: httpAddr + 'icon/subway.png',
                iconMapping: {
                    marker: { x: 0, y: 0, width: 198, height: 200, mask: false }
                },
                getIcon: d => 'marker',
                getPosition: function (d) {
                    return d.geometry.coordinates;
                },
                getSize: 1.8,
                sizeScale: 25
            },
            //重点区域内突发事件
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                id: 'event-icon-layer',
                type: 'icon',
                data: httpAddr + 'Dataes/ImportantZone/EventsPosition.json',
                pickable: false,
                iconAtlas: httpAddr + 'icon/events/events.png',
                iconMapping: {
                    marker: { x: 130, y: 0, width: 140, height: 135, mask: false, anchorY: 140 }
                },
                getIcon: d => 'marker',
                getPosition: function (d) {
                    return d.geometry.coordinates;
                },
                getSize: 10,
                sizeUnits: 'pixels',
                sizeScale: 10,
                sizeMinPixels: 1,
                sizeMaxPixels: 100,
                alphaCutoff: 1
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                id: 'subway-path-layer',
                type: 'path',
                data: httpAddr + 'Dataes/SubWayLine.json',
                pickable: false,
                widthScale: 5,
                widthMinPixels: 2.0,
                getPath: d => d.geometry.coordinates[0],
                getColor: d => [0, 255, 127],
                getWidth: d => 1,
                opacity: 1.0
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                id: 'cross-road-layer',
                type: 'path',
                data: httpAddr + 'Dataes/TrafficLightsControl/Roads/Road_01.json',
                pickable: false,
                widthScale: 1,
                widthMinPixels: 3.0,
                getPath: d => d.geometry.coordinates[0],
                getColor: d => {
                    if (d.properties.TYPE === '0') {
                        return [240, 5, 10]
                    }
                    if (d.properties.TYPE === '1') {
                        return [0, 195, 251]
                    }
                },
                getWidth: d => 0.1,
                opacity: 1.0
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                type: 'scenegraph',
                id: 'truck-layer',
                _animations: {},
                data: httpAddr + 'Dataes/TrafficLightsControl/position.json',
                scenegraph: httpAddr + 'CarModel/dahuoche/dakache.gltf',
                getScale: [1, 1, 1],
                sizeScale: 1.0,
                getOrientation: d => {
                    if (d.type === 'east-west') {
                        return [0, 90, 90];
                    }
                    else {
                        return [0, 270, 90];
                    }
                }
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                type: 'scenegraph',
                id: 'bus-layer',
                _animations: {},
                data: httpAddr + 'Dataes/TrafficLightsControl/position02.json',
                scenegraph: httpAddr + 'CarModel/gongjiaoche/gongjiaoche.gltf',
                getScale: [1, 1, 1],
                sizeScale: 1.0,
                getOrientation: d => {
                    if (d.type === 'west-east') {
                        return [0, -270, 90];
                    }
                    else {
                        return [0, 270, 90];
                    }
                }
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                type: 'scenegraph',
                id: 'aperture-mark-layer',
                _animations: {
                    '*': {
                        speed: 1,
                        playing: true,
                    }
                },
                //data: httpAddr + 'Dataes/AnimationLine.json',
                data: httpAddr + 'Dataes/ImprotantZonePoint.json',
                //scenegraph: httpAddr + 'effect/2/2.gltf',
                scenegraph: httpAddr + 'yhgj/YHGJ.gltf',
                //httpAddr + 'yuan/ks.gltf',
                getScale: [1, 1, 1],
                sizeScale: 3,
                getColor: d => d.color,
                getOrientation: [0, 0, 90]
            },
            {
                framework: LayerFrameworkType.DECK,
                isLoad: false,
                isOperate: true,
                type: 'ploygon',
                extruded: false,
                extrudedField: 'Height',
                wireframe: false,
                opacity: 1.0,
                data: httpAddr + 'Dataes/ImportantZone/Border.json'
            },
        ]
    },
    //场景配置
    environment: {
        //光源配置
        lights: {
            //点光源
            pointlights: [{
                id: "center",
                color: [255, 255, 255],
                intensity: 5.0,
                position: [108.9416911868139, 34.26052401009258, 800]
            }],
            //环境光
            ambientlight: {
                color: [255, 255, 255],
                intensity: 0.2
            }
        },
        //材质
        materials: [
            //建筑表现材质
            {
                id: "building",
                ambient: 0.5,
                diffuse: 0.8,
                shininess: 10,
                specularColor: [255, 255, 240]
            }
        ],
        //外部三维模型
        models3D: {
            landmarks: [{
                url: httpAddr + 'tower/tower.gltf',
                position: [108.942412, 34.260945],
                altitude: 0,
                offsets: [0.0000565, 0.00000001, -0.0000006],
                rotate: [Math.PI / 2, 0, 0],
                scale: 5.41843220338983e-8,
                lights: [{
                    type: 'DirectionalLight',
                    color: 0xffffff,
                    intensity: 5.0
                }],
                isImmediate: true
            },
            {
                url: httpAddr + 'model/yhgj/YHGJ.gltf',
                position: [108.8798, 34.199],
                altitude: 0,
                offsets: [0.0000565, 0.00000001, -0.0000006],
                rotate: [Math.PI / 2, 0, 0],
                scale: 5.41843220338983e-8,
                lights: [{
                    type: 'DirectionalLight',
                    color: 0xffffff,
                    intensity: 5.0
                }],
                isImmediate: true
            }
        ]
        }
    },
    //组件配置
    widgets: [
        //城市大型事件
        {
            id: 'cityBigEvent',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.TITLE_TEXT,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${100 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //道路概况
        {
            id: 'roadSummary',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.PROGRESS_BAR,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${210 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${187 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //车牌类型
        {
            id: 'carLicense',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_PIE,
            style: {
                appearance: {
                    common: {
                        width: '197px',
                        height: `${210 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${416 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //车辆类型
        {
            id: 'carType',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_PIE_PROPRESS,
            style: {
                appearance: {
                    common: {
                        width: '254px',
                        height: `${210 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${416 * 100 / 1080}vh`,
                        left: '225px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //拥堵变化
        {
            id: 'congestion',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_BAR_GRADIENT,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${210 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${650 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //车速变化
        {
            id: 'carSpeed',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_LINE_AREA,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${167 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${885 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //重点路口流量
        {
            id: 'FlowDetection',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_LINE_STACKED,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${269 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //常见交通违规项目
        {
            id: 'TrafficViolation',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_BAR_MULTIPLE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${242 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${351 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //地铁实时流量监控
        {
            id: 'subwayFlowDetection',
            simulatorID: 'traffic-index',
            type: ChartWidgetType.CHART_lINE_MULTIPLE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${436 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${616 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },

        //路口信息列表
        {
            id: 'roadInforList',
            simulatorID: 'traffic-light-control',
            type: ChartWidgetType.ROAD_INFOR_LIST,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${999 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${60 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //仪表盘
        {
            id: 'performanceGauge',
            simulatorID: 'traffic-light-control',
            type: ChartWidgetType.PERFORMANCE_GAUGE,
            style: {
                appearance: {
                    common: {
                        width: 'calc(100vw - 1020px)',
                        // height: `${210 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${93 * 100 / 1080}vh`,
                        left: '508px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //路口名
        {
            id: 'roadName',
            simulatorID: 'traffic-light-control',
            type: ChartWidgetType.ROAD_NAME,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${70 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${60 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //路口队列长度
        {
            id: 'queueLength',
            simulatorID: 'traffic-light-control',
            type: ChartWidgetType.QUEUE_LENGTH_LINE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${290 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${151 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //路口直行速度
        {
            id: 'straightSpeed',
            simulatorID: 'traffic-light-control',
            type: ChartWidgetType.STRAIGHT_SPEED_LINE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${290 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${461 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //路口转弯侧速度
        {
            id: 'turningSpeed',
            simulatorID: 'traffic-light-control',
            type: ChartWidgetType.TURN_SPEED_LINE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${290 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${770 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },

        //检测到可疑人员
        {
            id: 'suspiciousPerson',
            simulatorID: 'city-congestion-zone',
            type: ChartWidgetType.SUSPICIOUS_PERSON,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${394 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //违章车辆数量
        {
            id: 'violationCar',
            simulatorID: 'city-congestion-zone',
            type: ChartWidgetType.VIOLATION_CAR,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${280 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${476 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //检测到车祸
        {
            id: 'trafficAccident',
            simulatorID: 'city-congestion-zone',
            type: ChartWidgetType.TRAFFIC_ACCIDENT,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${280 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${778 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //公交运行载荷
        {
            id: 'busLoad',
            simulatorID: 'city-congestion-zone',
            type: ChartWidgetType.BUS_LOAD,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${330 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //路口人流车流检测
        {
            id: 'roadFlowDetection',
            simulatorID: 'city-congestion-zone',
            type: ChartWidgetType.TRAFFIC_CHART_BAR,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${353 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${410 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        //重点区域事件统计
        {
            id: 'eventCount',
            simulatorID: 'city-congestion-zone',
            type: ChartWidgetType.EVENT_COUNT,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${276 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${783 * 100 / 1080}vh`,
                        left: '',
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },

        /**
         * 交通事故
         */
        // 交通事故实时报警
        {
            id: 'trafficPolice',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_POLICE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${280 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 当前事故处理
        {
            id: 'trafficAccidentDeal',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_ACCIDENT_DEAL,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${340 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${361 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 月事故类型Top5占比
        {
            id: 'trafficAccidentType',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_ACCIDENT_TYPE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${340 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${721 * 100 / 1080}vh`,
                        left: '20px',
                        right: '',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 月事故高发路段
        {
            id: 'trafficAccidentHeight',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_ACCIDENT_HEIGHT,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${340 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 事故等级占比
        {
            id: 'trafficAccidentLevel',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_ACCIDENT_LEVEL,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${200 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${409 * 100 / 1080}vh`,
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 事故车辆来源占比
        {
            id: 'trafficAccidentCarSource',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_ACCIDENT_CAR_SOURCE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${150 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${629 * 100 / 1080}vh`,
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 事故车辆类型占比
        {
            id: 'trafficAccidentCarType',
            simulatorID: 'traffic-strike',
            type: ChartWidgetType.TRAFFIC_ACCIDENT_CAR_TYPE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${260 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${799 * 100 / 1080}vh`,
                        right: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },

        /**
         * 人流/非机动车监测
         */
        // 违法top5
        {
            id: 'illegalTypeTop5',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_Type_TOP5,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${300 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        left: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 违法类型占比
        {
            id: 'illegalTypeAccounted',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_Type_ACCOUNTED,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${300 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${371 * 100 / 1080}vh`,
                        left: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 违法时间高发路段分布
        {
            id: 'illegalTime',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_Time,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${380 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${684 * 100 / 1080}vh`,
                        left: '20px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 本月车辆违法总量
        {
            id: 'illegalCarTotal',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_CAR_TOTAL,
            style: {
                appearance: {
                    common: {
                        // width: '900px',
                        width: 'calc(100vw - 1020px)',
                        height: `${170 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${102 * 100 / 1080}vh`,
                        left: '509px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 路口名字
        {
            id: 'illegalRoad',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ITLEGAL_ROAD,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${70 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${61 * 100 / 1080}vh`,
                        right: '21px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 视频播放
        {
            id: 'illegalVideo',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_VIDEO,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${300 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${143 * 100 / 1080}vh`,
                        right: '21px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 行人
        {
            id: 'illegaPeople',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_PEOPLE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${290 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${458 * 100 / 1080}vh`,
                        right: '21px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 非机动车
        {
            id: 'illegalNomotorVehicle',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_NOMOTOR_VEHICLE,
            style: {
                appearance: {
                    common: {
                        width: '460px',
                        height: `${290 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${774 * 100 / 1080}vh`,
                        right: '21px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },
        // 近七天违法趋势图
        {
            id: 'illegalTrend',
            simulatorID: 'break-rules',
            type: ChartWidgetType.ILLEGAL_TREND,
            style: {
                appearance: {
                    common: {
                        // width: '900px',
                        width: 'calc(100vw - 1020px)',
                        height: `${356 * 100 / 1080}vh`,
                        position: 'absolute',
                        display: 'block',
                        zIndex: '2000',
                        top: `${709 * 100 / 1080}vh`,
                        left: '509px',
                    },
                    custom: {

                    }
                }
            },
            data: {

            }
        },

    ],
    simulator: [

        //普通监控
        {
            id: 'traffic-index',
            isTrigger: false
        },

        //交通事故
        {
            id: 'traffic-strike',
            isTrigger: false,
            eventName: AppEvent.EMERGENCY_ACCIDENT_TRAFFIC_EVENT,
            coordinates: [108.9414913, 34.2608370]
        },
        //地铁人流量
        {
            id: 'traffic-heatmap',
            isTrigger: false,
            eventName: AppEvent.EMERGENCY_TRAFFIC_HEATMAP_EVENT,
            data: httpAddr + 'Dataes/Subway.geojson',
        },
        //人口迁徙
        {
            id: 'population-mobility',
            isTrigger: false,
            eventName: AppEvent.EMERGENCY_POPULATION_MOBILITY_EVENT,
            data: httpAddr + 'Dataes/PopulationMobility.json',
        },
        //实时违章监控
        {
            id: 'break-rules',
            isTrigger: false,
            eventName: AppEvent.BREAK_RULES_EVENT,
            data: httpAddr + 'Dataes/PopulationMobility.json',
        },
        //重点监控
        {
            id: 'city-congestion-zone',
            isTrigger: false,
            eventName: AppEvent.EMERGENCY_CITY_CONGESTION_ZONE_EVENT,
            data: httpAddr + 'Dataes/CongestionZone.json',
        },
        //交通信号灯
        {
            id: 'traffic-light-control',
            isTrigger: false,
        }
    ]
}
export default config;