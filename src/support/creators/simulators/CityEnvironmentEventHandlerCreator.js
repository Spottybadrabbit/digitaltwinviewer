export const CityContourDataHandler=(parameters)=>{

    parameters.map.addSource('contour',{
        'type': 'vector',
        'scheme': 'tms',
        'tiles': [
            'http://localhost:8086/geoserver/gwc/service/tms/1.0.0/cite%3AXianContour@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf'
    ]
});
    parameters.map.addLayer({
        'id': 'contour-layer',
        'source': 'contour',
        'type': 'line',
        'source-layer': 'XianContour',
        'paint': {
            'line-color':[
                'interpolate',
                ['linear'],
                ['get', 'Contour'],
                380, 'rgb(127,25,65)',
                385, 'rgb(213,2,85)',
                410, 'rgb(254,173,84)',
                411, 'rgb(254,237,177)',
                415, 'rgb(232,254,181)',
                420, 'rgb(73,227,206)',
                430, 'rgb(1,152,189)',
                445, 'rgb(0,122,153)'
            ],
            'line-width':2
        }
    });
}