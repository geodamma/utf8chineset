var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975年",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13170261.546233, 2805721.072196, 13171773.767806, 2806912.362460]
                            })
                        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
    title: '建築物<br />\
    <img src="styles/legend/_2_0.png" /> 中<br />\
    <img src="styles/legend/_2_1.png" /> 廢<br />\
    <img src="styles/legend/_2_2.png" /> B<br />\
    <img src="styles/legend/_2_3.png" /> M<br />\
    <img src="styles/legend/_2_4.png" /> R<br />\
    <img src="styles/legend/_2_5.png" /> T<br />\
    <img src="styles/legend/_2_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr__2];
lyr__2.set('fieldAliases', {'Build_STR': '類型', 'Build_NO': '樓高', });
lyr__2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__2.set('fieldLabels', {'Build_STR': 'header label', 'Build_NO': 'header label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});