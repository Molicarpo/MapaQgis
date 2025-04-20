ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-695117.661968, 4489510.118798, -650311.518243, 4513808.835203]);
var wms_layers = [];


        var lyr_Google_satelite_0 = new ol.layer.Tile({
            'title': 'Google_satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TMSalteras_2 = new ol.format.GeoJSON();
var features_TMSalteras_2 = format_TMSalteras_2.readFeatures(json_TMSalteras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TMSalteras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TMSalteras_2.addFeatures(features_TMSalteras_2);
var lyr_TMSalteras_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TMSalteras_2, 
                style: style_TMSalteras_2,
                popuplayertitle: 'T.M.Salteras',
                interactive: false,
                title: '<img src="styles/legend/TMSalteras_2.png" /> T.M.Salteras'
            });
var format_Camino_3 = new ol.format.GeoJSON();
var features_Camino_3 = format_Camino_3.readFeatures(json_Camino_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino_3.addFeatures(features_Camino_3);
var lyr_Camino_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino_3, 
                style: style_Camino_3,
                popuplayertitle: 'Camino',
                interactive: true,
                title: '<img src="styles/legend/Camino_3.png" /> Camino'
            });

lyr_Google_satelite_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_TMSalteras_2.setVisible(true);lyr_Camino_3.setVisible(true);
var layersList = [lyr_Google_satelite_0,lyr_OpenStreetMap_1,lyr_TMSalteras_2,lyr_Camino_3];
lyr_TMSalteras_2.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Camino_3.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'ETIQUETA': 'ETIQUETA', 'FIRME_0623': 'FIRME_0623', 'SITUA_0623': 'SITUA_0623', 'ID_VIAL': 'ID_VIAL', 'ID_TRAMO': 'ID_TRAMO', 'ID_BIC': 'ID_BIC', 'ID_BICCA': 'ID_BICCA', 'ID_NG': 'ID_NG', 'PRIORIDAD': 'PRIORIDAD', 'F_ALTA': 'F_ALTA', 'NOM_ALTERN': 'NOM_ALTERN', 'TIPVE_0623': 'TIPVE_0623', 'TITUL_0623': 'TITUL_0623', 'Foto': 'Foto', });
lyr_TMSalteras_2.set('fieldImages', {'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', });
lyr_Camino_3.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'FIRME_0623': 'TextEdit', 'SITUA_0623': 'TextEdit', 'ID_VIAL': 'TextEdit', 'ID_TRAMO': 'TextEdit', 'ID_BIC': 'TextEdit', 'ID_BICCA': 'TextEdit', 'ID_NG': 'TextEdit', 'PRIORIDAD': 'Range', 'F_ALTA': 'TextEdit', 'NOM_ALTERN': 'TextEdit', 'TIPVE_0623': 'TextEdit', 'TITUL_0623': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_TMSalteras_2.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', });
lyr_Camino_3.set('fieldLabels', {'ID': 'hidden field', 'NOMBRE': 'no label', 'ETIQUETA': 'hidden field', 'FIRME_0623': 'hidden field', 'SITUA_0623': 'hidden field', 'ID_VIAL': 'no label', 'ID_TRAMO': 'hidden field', 'ID_BIC': 'hidden field', 'ID_BICCA': 'hidden field', 'ID_NG': 'hidden field', 'PRIORIDAD': 'hidden field', 'F_ALTA': 'hidden field', 'NOM_ALTERN': 'hidden field', 'TIPVE_0623': 'hidden field', 'TITUL_0623': 'hidden field', 'Foto': 'no label', });
lyr_Camino_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});