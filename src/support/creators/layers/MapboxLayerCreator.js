/**
 * Mapbox图层创建
 */
export default class MapboxLayerCreator {


    /**
     * 
     * @param {*} layer 
     * @param {*} map 
     */
    static createMapboxLayer(layerOption, map) {
        try {
            if (layerOption.isLoadImage) {
                map.loadImage(layerOption.source.optionos.imgUrl, (error, image) => {
                    map.addImage(layerOption.source.optionos.imgTag, image);
                    map.addSource(layerOption.source.id, {
                        "type": layerOption.source.type,
                        "data": layerOption.source.optionos.data
                    });
                    if(layerOption.source.hasOwnProperty('cluster')){
                        map.getSource(layerOption.source.id).cluster=layerOption.source.cluster;
                        map.getSource(layerOption.source.id).clusterRadius=layerOption.source.clusterRadius;
                    }
                    map.addLayer({
                        "id": layerOption.layer.id,
                        "type": layerOption.layer.type,
                        "source": layerOption.source.id,
                        "layout": {
                            "icon-image": layerOption.source.optionos.imgTag,
                            "icon-size": layerOption.layer.layout.size
                        }
                    });
                });
            } 
            else {
                map.addSource(layerOption.source.id,{
                    "type": layerOption.source.type,
                    "data": layerOption.source.optionos.data
                });
                map.addLayer(
                    {
                        "id":layerOption.layer.id,
                        "source": layerOption.source.id,
                        "type": layerOption.layer.type
                    }
                );
                if(layerOption.layer.hasOwnProperty('paint')){
                    // eslint-disable-next-line no-unused-vars
                    for (let option in layerOption.layer.paint) {
                        map.setPaintProperty(layerOption.layer.id,option,layerOption.layer.paint[option]);
                    }
                }
            }
        } catch (error) {
            console.error(error.message);
        }
    }
}