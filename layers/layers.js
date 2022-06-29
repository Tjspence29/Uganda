var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_UNHCR_Districts_1 = new ol.format.GeoJSON();
var features_UNHCR_Districts_1 = format_UNHCR_Districts_1.readFeatures(json_UNHCR_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNHCR_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNHCR_Districts_1.addFeatures(features_UNHCR_Districts_1);
var lyr_UNHCR_Districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNHCR_Districts_1, 
                style: style_UNHCR_Districts_1,
                interactive: true,
                title: '<img src="styles/legend/UNHCR_Districts_1.png" /> UNHCR_Districts'
            });
var format_UpdatedUgandaFinal_2 = new ol.format.GeoJSON();
var features_UpdatedUgandaFinal_2 = format_UpdatedUgandaFinal_2.readFeatures(json_UpdatedUgandaFinal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UpdatedUgandaFinal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UpdatedUgandaFinal_2.addFeatures(features_UpdatedUgandaFinal_2);
var lyr_UpdatedUgandaFinal_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UpdatedUgandaFinal_2, 
                style: style_UpdatedUgandaFinal_2,
                interactive: true,
    title: 'UpdatedUgandaFinal<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_0.png" /> 10<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_1.png" /> 13<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_2.png" /> 14<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_3.png" /> 15<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_4.png" /> 16<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_5.png" /> 17<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_6.png" /> 18<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_7.png" /> 21<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_8.png" /> 22<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_9.png" /> 24<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_10.png" /> 25<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_11.png" /> 26<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_12.png" /> 27<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_13.png" /> 28<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_14.png" /> 29<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_15.png" /> 31<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_16.png" /> 32<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_17.png" /> 33<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_18.png" /> 34<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_19.png" /> 35<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_20.png" /> 36<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_21.png" /> 37<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_22.png" /> 39<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_23.png" /> 40<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_24.png" /> 42<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_25.png" /> 43<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_26.png" /> 44<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_27.png" /> 45<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_28.png" /> 47<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_29.png" /> 48<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_30.png" /> 49<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_31.png" /> 50<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_32.png" /> 51<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_33.png" /> 52<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_34.png" /> 53<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_35.png" /> 54<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_36.png" /> 55<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_37.png" /> 56<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_38.png" /> 57<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_39.png" /> 58<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_40.png" /> 59<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_41.png" /> 60<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_42.png" /> 61<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_43.png" /> 62<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_44.png" /> 63<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_45.png" /> 64<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_46.png" /> 65<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_47.png" /> 67<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_48.png" /> 68<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_49.png" /> 71<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_50.png" /> 77<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_51.png" /> 84<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_52.png" /> 89<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_53.png" /> 101<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_54.png" /> 109<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_55.png" /> 112<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_56.png" /> 117<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_57.png" /> 118<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_58.png" /> 127<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_59.png" /> 130<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_60.png" /> 132<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_61.png" /> 140<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_62.png" /> 144<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_63.png" /> 145<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_64.png" /> 147<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_65.png" /> 148<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_66.png" /> 152<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_67.png" /> 158<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_68.png" /> 168<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_69.png" /> 172<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_70.png" /> 175<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_71.png" /> 178<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_72.png" /> 195<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_73.png" /> 199<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_74.png" /> 201<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_75.png" /> 202<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_76.png" /> 222<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_77.png" /> 223<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_78.png" /> 227<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_79.png" /> 230<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_80.png" /> 234<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_81.png" /> 237<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_82.png" /> 244<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_83.png" /> 246<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_84.png" /> 260<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_85.png" /> 266<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_86.png" /> 267<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_87.png" /> 273<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_88.png" /> 279<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_89.png" /> 285<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_90.png" /> 288<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_91.png" /> 294<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_92.png" /> 296<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_93.png" /> 305<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_94.png" /> 316<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_95.png" /> 324<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_96.png" /> 328<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_97.png" /> 332<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_98.png" /> 341<br />\
    <img src="styles/legend/UpdatedUgandaFinal_2_99.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_UNHCR_Districts_1.setVisible(true);lyr_UpdatedUgandaFinal_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_UNHCR_Districts_1,lyr_UpdatedUgandaFinal_2];
lyr_UNHCR_Districts_1.set('fieldAliases', {'dname2019': 'dname2019', 'd': 'd', 'total2020': 'total2020', 'ttotal2020': 'ttotal2020', '2010': '2010', '2016': '2016', '2017': '2017', '2018': '2018', '2020': 'District', });
lyr_UpdatedUgandaFinal_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SI': 'CLUSTER_SI', 'SumClstPop': 'Population', 'x': 'Longitude', 'y': 'Latitude', '2020': 'District', 'ca_id': 'ca_id', 'ca_id2': 'Catchment', });
lyr_UNHCR_Districts_1.set('fieldImages', {'dname2019': 'Hidden', 'd': 'Hidden', 'total2020': 'Hidden', 'ttotal2020': 'Hidden', '2010': 'Hidden', '2016': 'Hidden', '2017': 'Hidden', '2018': 'Hidden', '2020': 'TextEdit', });
lyr_UpdatedUgandaFinal_2.set('fieldImages', {'fid': 'Hidden', 'DN': 'Hidden', 'CLUSTER_ID': 'Hidden', 'CLUSTER_SI': 'Hidden', 'SumClstPop': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', '2020': 'Hidden', 'ca_id': 'Hidden', 'ca_id2': 'TextEdit', });
lyr_UNHCR_Districts_1.set('fieldLabels', {'2020': 'header label', });
lyr_UpdatedUgandaFinal_2.set('fieldLabels', {'SumClstPop': 'header label', 'x': 'header label', 'y': 'header label', 'ca_id2': 'header label', });
lyr_UpdatedUgandaFinal_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});