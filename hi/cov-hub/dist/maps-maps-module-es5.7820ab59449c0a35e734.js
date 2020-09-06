!function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MWin:function(t,a,o){"use strict";o.r(a),o.d(a,"MapsModule",(function(){return W}));var r=o("OwhE"),i=o("aceb"),l=o("z+eI"),s=o("DKVz"),c=o("fXoL"),d=o("4R65");o("ufYB");var u,p,h=o("pryy"),g=o("vTDv"),f=o("tyNb"),m=((p=function t(){n(this,t)}).\u0275fac=function(t){return new(t||p)},p.\u0275cmp=c["\u0275\u0275defineComponent"]({type:p,selectors:[["ngx-maps"]],decls:1,vars:0,template:function(t,e){1&t&&c["\u0275\u0275element"](0,"router-outlet")},directives:[f.h],styles:[".leaflet-control-zoom a{text-decoration:none}"]}),p),v=((u=function(){function t(e){n(this,t),this.theme=e}return e(t,[{key:"ngOnInit",value:function(){var t=this;this.themeSubscription=this.theme.getJsTheme().subscribe((function(e){var n,a=(null===(n=null==e?void 0:e.variables)||void 0===n?void 0:n.chartjs)||null;t.data={labels:t.labels,datasets:t.dataSets},t.options={maintainAspectRatio:!0,responsive:!0,legend:{labels:{fontColor:a.textColor}},scales:{xAxes:[{gridLines:{display:!1,color:a.axisLineColor},ticks:{fontColor:a.textColor}}],yAxes:[{gridLines:{display:!0,color:a.axisLineColor},ticks:{fontColor:a.textColor}}]}}}))}},{key:"ngOnDestroy",value:function(){this.themeSubscription.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||u)(c["\u0275\u0275directiveInject"](i.Eb))},u.\u0275cmp=c["\u0275\u0275defineComponent"]({type:u,selectors:[["ngx-district-bar"]],inputs:{dataSets:"dataSets",labels:"labels"},decls:1,vars:2,consts:[["type","bar",3,"data","options"]],template:function(t,e){1&t&&c["\u0275\u0275element"](0,"chart",0),2&t&&c["\u0275\u0275property"]("data",e.data)("options",e.options)},directives:[l.ChartComponent],encapsulation:2}),u),b=o("mrSG"),y=(o("JXP8"),o("lcx6")),C=o.n(y),S=o("2Vo4"),k=o("VRyK"),x=o("Cfvw"),P=(o("tl+D"),o("heiT")),_=o("GLUW"),O=o("vDzp"),w=o("+2/m"),M=o("lLtB"),D=o("ofXK"),F=function(t){return[t]};function R(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2,"+ve Sero Prevalence Ranking"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275element"](4,"ngx-district-bar",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("dataSets",c["\u0275\u0275pureFunction1"](2,F,n.districtPcrDataSets[0]))("labels",n.districtNamesSero)}}function L(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2,"+ve PCR Result Ratio Ranking"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275element"](4,"ngx-district-bar",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){var n=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("dataSets",c["\u0275\u0275pureFunction1"](2,F,n.districtPcrDataSets[1]))("labels",n.districtNamesRatio)}}var E,N,j,T,A=((E=function(){function t(e,a,o,r){var l=this;n(this,t),this.mapUtilsService=e,this.regionService=a,this.returneeService=o,this.themeService=r,this.title="National Covid Map",this.mapLayerDistrict={bucket:"gov_districts",label:"Districts"},this.mapLayerProvince={bucket:"gov_provinces",label:"Provinces"},this.mapLayerRoads={bucket:"roads_major",label:"Major Roads"},this.districtNameValPairsSero=[],this.districtNameValPairsRatio=[],this.districtPcrDataSets=[{label:"",data:[],backgroundColor:""},{label:"",data:[],backgroundColor:""}],this.quadDataCounter=new S.a(0),this.loading=!0,this.mapReady=new S.a(!1),this.options={layers:[this.mapUtilsService.openStreetMaps],zoom:7,crs:d.CRS.EPSG3857,center:d.latLng({lat:27.700769,lng:85.30014}),zoomControl:!0,preferCanvas:!1},this.geoJsonLayerOptions={onEachFeature:function(t,e){var n=l.map;e.on({click:function(t){n.fitBounds(t.target.getBounds())}})},style:{color:"#33A8FF",weight:4,opacity:.65}},this.readyToRenderChart=!1,this.themeSubscription=this.themeService.getJsTheme().subscribe((function(t){var e,n;l.districtPcrDataSets=[Object.assign(Object.assign({},l.districtPcrDataSets[0]),{backgroundColor:i.B.hexToRgbA(null===(e=null==t?void 0:t.variables)||void 0===e?void 0:e.primaryLight,.8)}),Object.assign(Object.assign({},l.districtPcrDataSets[1]),{backgroundColor:i.B.hexToRgbA(null===(n=null==t?void 0:t.variables)||void 0===n?void 0:n.infoLight,.8)})]}))}return e(t,[{key:"ngOnInit",value:function(){this.layersControl=Object.assign(Object.assign({},this.mapUtilsService.baseLayers),{overlays:{}}),this.fetchLabelFeatures(),this.receiveAndSetStats()}},{key:"fetchLabelFeatures",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setLayerFromBucket(this.mapLayerDistrict),this.setLayerFromBucket(this.mapLayerProvince,{color:"#043EB9",weight:5,opacity:.65}),this.setLayerFromBucket(this.mapLayerRoads,{color:"#2E70E4",weight:3,opacity:.65});case 1:case"end":return t.stop()}}),t,this)})))}},{key:"setLayerFromBucket",value:function(t,e){var n=this;this.regionService.getAndCache(t.bucket).subscribe((function(a){n.layersControl.overlays[t.label]=d.geoJSON(a,{style:e}),t.bucket===n.mapLayerDistrict.bucket&&(n.districtsGeoJson=a,n.layersControl.overlays.Districts=d.geoJSON(a,n.geoJsonLayerOptions),n.raiseQuadDataCount())}))}},{key:"raiseQuadDataCount",value:function(){this.quadDataCounter.next(this.quadDataCounter.getValue()+1)}},{key:"receiveAndSetStats",value:function(){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(k.a)(this.regionService.getCacheDistrictHealthStats(),this.regionService.getCacheDistrictWiseCensus(),Object(x.a)(this.returneeService.getAllWards())).subscribe((function(t){_.a.isDistrictHealthStats(t)?(e.districtsHealthStats=t,e.raiseQuadDataCount()):P.a.isDistrictCensus(t)?(e.districtPopulation=t,e.raiseQuadDataCount()):(e.returneeStats=t,e.raiseQuadDataCount())})),this.quadDataCounter.subscribe((function(t){4===t&&e.setStats()}));case 1:case"end":return t.stop()}}),t,this)})))}},{key:"findByNameFromReturneeStats",value:function(t){var e;return null===(e=this.returneeStats)||void 0===e?void 0:e.find((function(e){var n,a;return null===(n=null==t?void 0:t.toLowerCase())||void 0===n?void 0:n.startsWith(null===(a=e[2])||void 0===a?void 0:a.toLowerCase())}))}},{key:"findByNameFromCensusStats",value:function(t){var e,n;return null===(n=null===(e=this.districtPopulation)||void 0===e?void 0:e.values)||void 0===n?void 0:n.find((function(e){var n,a;return null===(n=null==t?void 0:t.toLowerCase())||void 0===n?void 0:n.startsWith(null===(a=null==e?void 0:e.district)||void 0===a?void 0:a.toLowerCase())}))}},{key:"setStats",value:function(){var t=this;this.markerClusterGroup=d.markerClusterGroup(),this.featureGroup=d.featureGroup(),this.featureGroup.addLayer(this.markerClusterGroup),this.districtsHealthStats.values.forEach((function(e){var n=t.districtsGeoJson.features.find((function(t){return e.district.toUpperCase().startsWith(t.properties.FIRST_DIST)}));if(n){var a=C()(n.geometry.coordinates),o=t.mapUtilsService.getDefaultMarker(a);t.setPopup(o,e),t.markerClusterGroup.addLayer(o)}})),this.layersControl.overlays.Stats=this.markerClusterGroup,this.sortAndAddSetRankingChartData(),this.readyToRenderChart=!0,this.mapReady.subscribe((function(e){e&&(t.featureGroup.addTo(t.map),t.loading=!1)}))}},{key:"sortAndAddSetRankingChartData",value:function(){var t=function(t,e){return e[1]-t[1]},e=function(t){return t[0]},n=function(t){return t[1]};this.districtNameValPairsSero.sort(t),this.districtNameValPairsRatio.sort(t),this.districtNamesSero=this.districtNameValPairsSero.map(e),this.districtPcrDataSets[0].data=this.districtNameValPairsSero.map(n),this.districtNamesRatio=this.districtNameValPairsRatio.map(e),this.districtPcrDataSets[1].data=this.districtNameValPairsRatio.map(n)}},{key:"appendSeroRankingChartData",value:function(t,e){this.districtNameValPairsSero.push([t,e])}},{key:"appendRatioRankingChartData",value:function(t,e){this.districtNameValPairsRatio.push([t,e])}},{key:"setPopup",value:function(t,e){var n=this.findByNameFromReturneeStats(e.district),a=this.findByNameFromCensusStats(e.district),o=n?n[5]:0,r=a?a.total:1e5,i=e.total_swab_collection,l=e.total_rdt_tests,s=e.negatives,c=e.negatives_1,u=(o/r).toFixed(4),p=(l/r).toFixed(4),h=((l-c)/l).toFixed(4),g=(i/r).toFixed(4),f=(i-s)/i,m=f.toFixed(4),v=(i-s)/r,b=v.toFixed(4);0===v||Number.isNaN(v)||this.appendSeroRankingChartData(e.district,100*v),0===f||Number.isNaN(f)||this.appendRatioRankingChartData(e.district,100*f);var y=d.popup({maxWidth:100});y.setContent('\n      <div>\n      <style type="text/css">\n        .tg  {border-collapse:collapse;border-spacing:0;}\n        .tg td {\n          border-color:black;\n          border-style:solid;\n          border-width:1px;\n          font-family:Arial, sans-serif;\n          font-size:12px;\n          overflow:hidden;\n          padding:10px 8px;\n          word-break:normal;\n        }\n        .tg th {\n          border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n          font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;\n        }\n        .tg .tg-x5oc{background-color:#fe996b;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-0cjc{background-color:#67fd9a;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-266k{background-color:#9b9b9b;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-d52n{background-color:#32cb00;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-7od5{background-color:#9aff99;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-tw5s{background-color:#fe0000;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-pidv{background-color:#ffce93;border-color:inherit;text-align:left;vertical-align:top}\n      </style>\n      <table class="tg">\n        <thead>\n          <tr>\n            <th class="tg-y698" colspan="2">District</th>\n            <th class="tg-y698" colspan="3">'.concat(e.district,'</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="tg-0pky" colspan="2">+ve Sero Prev.</td>\n            <td class="tg-0pky" colspan="3">').concat(b,'</td>\n          </tr>\n          <tr>\n            <td class="tg-y698" colspan="2">PCR coverage</td>\n            <td class="tg-y698" colspan="3">').concat(g,'</td>\n          </tr>\n          <tr>\n            <td class="tg-0pky" colspan="2">PCR +ve ratio</td>\n            <td class="tg-0pky" colspan="3">').concat(m,'</td>\n          </tr>\n          <tr>\n            <td class="tg-y698" colspan="2">RDT coverage</td>\n            <td class="tg-y698" colspan="3">').concat(p,'</td>\n          </tr>\n          <tr>\n            <td class="tg-0pky" colspan="2">RDT +ve ratio</td>\n            <td class="tg-0pky" colspan="3">').concat(h,'</td>\n          </tr>\n          <tr>\n            <td class="tg-0pky" colspan="2">Returnee ratio</td>\n            <td class="tg-0pky" colspan="3">').concat(u,'</td>\n          </tr>\n          <tr>\n            <td class="tg-266k" colspan="2">Returnee</td>\n            <td class="tg-266k">Test</td>\n            <td class="tg-266k">PCR</td>\n            <td class="tg-266k">RDT</td>\n          </tr>\n          <tr>\n            <td class="tg-pidv">Isolated</td>\n            <td class="tg-pidv">').concat(e.isolated_total,'</td>\n            <td class="tg-x5oc">Positive</td>\n            <td class="tg-x5oc">').concat(e.total_positives,'</td>\n            <td class="tg-x5oc">').concat(e.positives,'</td>\n          </tr>\n          <tr>\n            <td class="tg-pidv">Quarantined</td>\n            <td class="tg-pidv">').concat(e.quarantined_total,'</td>\n            <td class="tg-0cjc">Negative</td>\n            <td class="tg-0cjc">').concat(s,'</td>\n            <td class="tg-0cjc">').concat(c,'</td>\n          </tr>\n          <tr>\n            <td class="tg-y698">Total</td>\n            <td class="tg-y698">').concat(o,'</td>\n            <td class="tg-y698"> </td>\n            <td class="tg-y698">').concat(i,'</td>\n            <td class="tg-y698">').concat(l,"</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>")),t.bindPopup(y)}},{key:"ngOnDestroy",value:function(){this.map.remove(),this.themeSubscription.unsubscribe()}},{key:"onMapReady",value:function(t){var e=this;this.map=t,this.mapUtilsService.fullScreenControl.addTo(this.map),this.mapReady.next(!0),setTimeout((function(){e.map.invalidateSize()}),0)}}]),t}()).\u0275fac=function(t){return new(t||E)(c["\u0275\u0275directiveInject"](O.a),c["\u0275\u0275directiveInject"](w.a),c["\u0275\u0275directiveInject"](M.a),c["\u0275\u0275directiveInject"](i.Eb))},E.\u0275cmp=c["\u0275\u0275defineComponent"]({type:E,selectors:[["ngx-leaflet"]],decls:8,vars:7,consts:[["leaflet","",3,"leafletOptions","leafletLayersControl","leafletMapReady"],[4,"ngIf"],[3,"dataSets","labels"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2),c["\u0275\u0275pipe"](3,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275elementStart"](5,"div",0),c["\u0275\u0275listener"]("leafletMapReady",(function(t){return e.onMapReady(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](6,R,5,4,"nb-card",1),c["\u0275\u0275template"](7,L,5,4,"nb-card",1)),2&t&&(c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](3,5,e.title)," "),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("leafletOptions",e.options)("leafletLayersControl",e.layersControl),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.readyToRenderChart),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",e.readyToRenderChart))},directives:[i.u,i.x,i.t,r.a,r.c,D.m,v],pipes:[D.t],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-default   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-default   [_nghost-%COMP%]     .leaflet-container{width:100%;height:60vh}.nb-theme-default   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-dark   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-dark   [_nghost-%COMP%]     .leaflet-container{width:100%;height:60vh}.nb-theme-dark   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-container{width:100%;height:60vh}.nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-corporate   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-corporate   [_nghost-%COMP%]     .leaflet-container{width:100%;height:60vh}.nb-theme-corporate   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-container{width:100%;height:60vh}.nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-material-light   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-light   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-material-light   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-material-light   [_nghost-%COMP%]     .leaflet-container{width:100%;height:60vh}.nb-theme-material-light   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}"]}),E),z=o("GJmQ"),G=((N=function(){function t(e,a,o){var r=this;n(this,t),this.route=e,this.regionService=a,this.mapUtilsService=o,this.region="Kathmandu Valley",this.loading=!0,this.componentAlive=!0,this.mapReady=new S.a(!1),this.options={layers:[this.mapUtilsService.openStreetMaps],zoom:12,crs:d.CRS.EPSG3857,center:d.latLng({lat:27.700769,lng:85.33014}),zoomControl:!0,preferCanvas:!1},this.geoJsonLayerOptions={onEachFeature:function(t,e){var n=r.map;e.on({click:function(t){n.fitBounds(t.target.getBounds())}})}},this.wardDataReceived=new S.a(!1),this.isAlive=function(){return r.componentAlive}}return e(t,[{key:"ngOnInit",value:function(){var t=this;this.route.paramMap.pipe(Object(z.a)(this.isAlive)).subscribe((function(e){var n=null==e?void 0:e.get("name");t.region=(null==n?void 0:n.replace(/_/g," "))||t.region,t.type=(null==e?void 0:e.get("type"))||"returnees"})),this.layersControl=Object.assign(Object.assign({},this.mapUtilsService.baseLayers),{overlays:{}}),this.receiveAndSetWards(),this.receiveAndSetStats()}},{key:"receiveAndSetWards",value:function(){var t=this;this.getWards().subscribe((function(e){t.wards=e,t.layersControl.overlays.Wards=d.geoJSON(e,t.geoJsonLayerOptions),t.wardDataReceived.next(!0)}))}},{key:"receiveAndSetStats",value:function(){var t=this;this.getStats().subscribe((function(e){t.stats=e,t.wardDataReceived.subscribe((function(e){e&&t.setStats()}))}))}},{key:"setStats",value:function(){var t=this;this.markerClusterGroup=d.markerClusterGroup(),this.featureGroup=d.featureGroup(),this.featureGroup.addLayer(this.markerClusterGroup),this.stats.data.forEach((function(e){var n,a,o,r,i,l=null===(a=null===(n=t.wards)||void 0===n?void 0:n.features)||void 0===a?void 0:a.find((function(t){var n;return(null==e?void 0:e.DDGNWW)===(null===(n=null==t?void 0:t.properties)||void 0===n?void 0:n.DDGNWW)}));if(l||(null==l?void 0:l.geometry)){var s=C()(null===(o=null==l?void 0:l.geometry)||void 0===o?void 0:o.coordinates),c=null===(r=t.mapUtilsService)||void 0===r?void 0:r.getDefaultMarker(s);t.setPopup(c,e,l),null===(i=t.markerClusterGroup)||void 0===i||i.addLayer(c)}})),this.layersControl.overlays.Stats=this.markerClusterGroup,this.mapReady.subscribe((function(e){e&&(t.featureGroup.addTo(t.map),t.loading=!1)}))}},{key:"getWards",value:function(){return this.regionService.getCacheAreaWards(this.regionKey||"kathmandu_valley")}},{key:"getStats",value:function(){return this.regionService.getCacheAreaStats(this.regionKey||"kathmandu_valley")}},{key:"ngOnDestroy",value:function(){this.componentAlive=!1,this.map.remove()}},{key:"onMapReady",value:function(t){var e=this;this.map=t,this.mapUtilsService.fullScreenControl.addTo(this.map),this.mapReady.next(!0),setTimeout((function(){e.map.invalidateSize()}),0)}},{key:"setPopup",value:function(t,e,n){var a,o,r,i=d.popup({maxWidth:100}),l='\n      <div>\n      <style type="text/css">\n        .tg  {border-collapse:collapse;border-spacing:0;}\n        .tg td {\n          border-color:black;\n          border-style:solid;\n          border-width:1px;\n          font-family:Arial, sans-serif;\n          font-size:14px;\n          overflow:hidden;\n          padding:10px 5px;\n          word-break:normal;\n        }\n        .tg th {\n          border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n          font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;\n        }\n        .tg .tg-x5oc{background-color:#fe996b;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-0cjc{background-color:#67fd9a;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-266k{background-color:#9b9b9b;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-d52n{background-color:#32cb00;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-7od5{background-color:#9aff99;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-tw5s{background-color:#fe0000;border-color:inherit;text-align:left;vertical-align:top}\n        .tg .tg-pidv{background-color:#ffce93;border-color:inherit;text-align:left;vertical-align:top}\n      </style>\n      <table class="tg">\n        <thead>\n          <tr>\n            <th class="tg-y698" colspan="2">District</th>\n            <th class="tg-y698" colspan="3">'.concat(null===(a=null==n?void 0:n.properties)||void 0===a?void 0:a.DISTRICT,'</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td class="tg-0pky" colspan="2">Palika</td>\n            <td class="tg-0pky" colspan="3">').concat(null===(o=null==n?void 0:n.properties)||void 0===o?void 0:o.GaPa_NaPa,'</td>\n          </tr>\n          <tr>\n            <td class="tg-y698" colspan="2">Ward No</td>\n            <td class="tg-y698" colspan="3">').concat(null===(r=null==n?void 0:n.properties)||void 0===r?void 0:r.NEW_WARD_N,'</td>\n          </tr>\n          <tr>\n            <td class="tg-266k" colspan="2">Returnee</td>\n            <td class="tg-266k">Test</td>\n            <td class="tg-266k">PCR</td>\n            <td class="tg-266k">RDT</td>\n          </tr>\n          <tr>\n            <td class="tg-pidv">Isolated</td>\n            <td class="tg-pidv">').concat(e.Returnee.Not_Quarantined,'</td>\n            <td class="tg-x5oc">Positive</td>\n            <td class="tg-x5oc">').concat(e.PCR.Positive,'</td>\n            <td class="tg-x5oc">').concat(e.RDT.Positive,'</td>\n          </tr>\n          <tr>\n            <td class="tg-pidv">Quarantined</td>\n            <td class="tg-pidv">').concat(e.Returnee.Quarantined,'</td>\n            <td class="tg-0cjc">Negative</td>\n            <td class="tg-0cjc">').concat(e.PCR.Negative,'</td>\n            <td class="tg-0cjc">').concat(e.RDT.Negative,'</td>\n          </tr>\n          <tr>\n            <td class="tg-y698">Total</td>\n            <td class="tg-y698">').concat(e.Returnee.Quarantined+e.Returnee.Not_Quarantined,'</td>\n            <td class="tg-y698"> </td>\n            <td class="tg-y698">').concat(e.PCR.Positive+e.PCR.Negative,'</td>\n            <td class="tg-y698">').concat(e.RDT.Positive+e.RDT.Negative,"</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>");i.setContent(l),t.bindPopup(i)}},{key:"regionKey",get:function(){return this.region?this.region.trim().replace(/ /g,"_").toLowerCase():null}}]),t}()).\u0275fac=function(t){return new(t||N)(c["\u0275\u0275directiveInject"](f.a),c["\u0275\u0275directiveInject"](w.a),c["\u0275\u0275directiveInject"](O.a))},N.\u0275cmp=c["\u0275\u0275defineComponent"]({type:N,selectors:[["ngx-region"]],decls:7,vars:9,consts:[["nbSpinnerSize","giant","nbSpinnerStatus","primary",3,"nbSpinner"],["leaflet","",3,"leafletOptions","leafletLayersControl","leafletMapReady"]],template:function(t,e){1&t&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2),c["\u0275\u0275pipe"](3,"titlecase"),c["\u0275\u0275pipe"](4,"titlecase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"nb-card-body",0),c["\u0275\u0275elementStart"](6,"div",1),c["\u0275\u0275listener"]("leafletMapReady",(function(t){return e.onMapReady(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t&&(c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate2"]("",c["\u0275\u0275pipeBind1"](3,5,e.region)," : ",c["\u0275\u0275pipeBind1"](4,7,e.type)," Map"),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("nbSpinner",e.loading),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("leafletOptions",e.options)("leafletLayersControl",e.layersControl))},directives:[i.u,i.x,i.t,i.sb,r.a,r.c],pipes:[D.t],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-default   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-default   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-default   [_nghost-%COMP%]     .leaflet-container{width:100%;height:75vh}.nb-theme-default   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-dark   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-dark   [_nghost-%COMP%]     .leaflet-container{width:100%;height:75vh}.nb-theme-dark   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-container{width:100%;height:75vh}.nb-theme-cosmic   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-corporate   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-corporate   [_nghost-%COMP%]     .leaflet-container{width:100%;height:75vh}.nb-theme-corporate   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-material-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-container{width:100%;height:75vh}.nb-theme-material-dark   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}.nb-theme-material-light   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-material-light   [_nghost-%COMP%]     .leaflet-bottom, .nb-theme-material-light   [_nghost-%COMP%]     .leaflet-top{z-index:997}.nb-theme-material-light   [_nghost-%COMP%]     .leaflet-container{width:100%;height:75vh}.nb-theme-material-light   [_nghost-%COMP%]     .leaflet-popup-content-wrapper{width:315px}"]}),N),I=[{path:"",component:m,children:[{path:"area/:name",component:G},{path:"area/:name/:type",component:G},{path:"nepal",component:A}]}],B=((T=function t(){n(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:T}),T.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||T)},imports:[[f.g.forChild(I)],f.g]}),T),W=((j=function t(){n(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||j)},imports:[[g.a,r.d,h.a,B,s.b,i.y,i.tb,l.ChartModule]]}),j)},ufYB:function(t,e){!function(){L.Control.FullScreen=L.Control.extend({options:{position:"topleft",title:"Full Screen",titleCancel:"Exit Full Screen",forceSeparateButton:!1,forcePseudoFullscreen:!1,fullscreenElement:!1},onAdd:function(t){var e,n="leaflet-control-zoom-fullscreen",a="";return e=t.zoomControl&&!this.options.forceSeparateButton?t.zoomControl._container:L.DomUtil.create("div","leaflet-bar"),this.options.content?a=this.options.content:n+=" fullscreen-icon",this._createButton(this.options.title,n,a,e,this.toggleFullScreen,this),this._map.fullscreenControl=this,this._map.on("enterFullscreen exitFullscreen",this._toggleTitle,this),e},onRemove:function(e){L.DomEvent.off(this.link,"click",L.DomEvent.stopPropagation).off(this.link,"click",L.DomEvent.preventDefault).off(this.link,"click",this.toggleFullScreen,this),L.DomEvent.off(this._container,t.fullScreenEventName,L.DomEvent.stopPropagation).off(this._container,t.fullScreenEventName,L.DomEvent.preventDefault).off(this._container,t.fullScreenEventName,this._handleFullscreenChange,this),L.DomEvent.off(document,t.fullScreenEventName,L.DomEvent.stopPropagation).off(document,t.fullScreenEventName,L.DomEvent.preventDefault).off(document,t.fullScreenEventName,this._handleFullscreenChange,this)},_createButton:function(e,n,a,o,r,i){return this.link=L.DomUtil.create("a",n,o),this.link.href="#",this.link.title=e,this.link.innerHTML=a,this.link.setAttribute("role","button"),this.link.setAttribute("aria-label",e),L.DomEvent.on(this.link,"click",L.DomEvent.stopPropagation).on(this.link,"click",L.DomEvent.preventDefault).on(this.link,"click",r,i),L.DomEvent.on(o,t.fullScreenEventName,L.DomEvent.stopPropagation).on(o,t.fullScreenEventName,L.DomEvent.preventDefault).on(o,t.fullScreenEventName,this._handleFullscreenChange,i),L.DomEvent.on(document,t.fullScreenEventName,L.DomEvent.stopPropagation).on(document,t.fullScreenEventName,L.DomEvent.preventDefault).on(document,t.fullScreenEventName,this._handleFullscreenChange,i),this.link},toggleFullScreen:function(){var e=this._map;e._exitFired=!1,e._isFullscreen?(t.supportsFullScreen&&!this.options.forcePseudoFullscreen?t.cancelFullScreen():L.DomUtil.removeClass(this.options.fullscreenElement?this.options.fullscreenElement:e._container,"leaflet-pseudo-fullscreen"),e.fire("exitFullscreen"),e._exitFired=!0,e._isFullscreen=!1):(t.supportsFullScreen&&!this.options.forcePseudoFullscreen?t.requestFullScreen(this.options.fullscreenElement?this.options.fullscreenElement:e._container):L.DomUtil.addClass(this.options.fullscreenElement?this.options.fullscreenElement:e._container,"leaflet-pseudo-fullscreen"),e.fire("enterFullscreen"),e._isFullscreen=!0)},_toggleTitle:function(){this.link.title=this._map._isFullscreen?this.options.title:this.options.titleCancel},_handleFullscreenChange:function(){var e=this._map;e.invalidateSize(),t.isFullScreen()||e._exitFired||(e.fire("exitFullscreen"),e._exitFired=!0,e._isFullscreen=!1)}}),L.Map.include({toggleFullscreen:function(){this.fullscreenControl.toggleFullScreen()}}),L.Map.addInitHook((function(){this.options.fullscreenControl&&this.addControl(L.control.fullscreen(this.options.fullscreenControlOptions))})),L.control.fullscreen=function(t){return new L.Control.FullScreen(t)};var t={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",prefix:""},e="webkit moz o ms khtml".split(" ");if(void 0!==document.exitFullscreen)t.supportsFullScreen=!0;else{for(var n=0,a=e.length;n<a;n++)if(t.prefix=e[n],void 0!==document[t.prefix+"CancelFullScreen"]){t.supportsFullScreen=!0;break}void 0!==document.msExitFullscreen&&(t.prefix="ms",t.supportsFullScreen=!0)}t.supportsFullScreen&&(t.fullScreenEventName="ms"===t.prefix?"MSFullscreenChange":t.prefix+"fullscreenchange",t.isFullScreen=function(){switch(this.prefix){case"":return document.fullscreen;case"webkit":return document.webkitIsFullScreen;case"ms":return document.msFullscreenElement;default:return document[this.prefix+"FullScreen"]}},t.requestFullScreen=function(t){switch(this.prefix){case"":return t.requestFullscreen();case"ms":return t.msRequestFullscreen();default:return t[this.prefix+"RequestFullScreen"]()}},t.cancelFullScreen=function(){switch(this.prefix){case"":return document.exitFullscreen();case"ms":return document.msExitFullscreen();default:return document[this.prefix+"CancelFullScreen"]()}}),"undefined"!=typeof jQuery&&(jQuery.fn.requestFullScreen=function(){return this.each((function(){var e=jQuery(this);t.supportsFullScreen&&t.requestFullScreen(e)}))}),window.fullScreenApi=t}()}}])}();
//# sourceMappingURL=maps-maps-module-es5.7820ab59449c0a35e734.js.map