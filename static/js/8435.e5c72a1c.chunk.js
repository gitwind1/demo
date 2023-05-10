"use strict";(self.webpackChunkmapdev=self.webpackChunkmapdev||[]).push([[8435],{98435:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(37762),o=r(74165),i=r(15861),s=r(1413),a=r(15671),u=r(43144),c=r(11752),l=r(61120),p=r(60136),d=r(29388),y=r(27366),f=(r(59486),r(10064)),v=r(92026),h=r(66978),m=r(35995),g=r(49861),Z=(r(25243),r(63780),r(38511)),b=r(69912),w=r(64326),k=r(93169),C=r(54472),S=r(31009),x=r(49818),_=r(53866),F=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,a.Z)(this,r),(n=t.call(this,e)).type="csv",n.refresh=(0,h.Ds)(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,i,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.load();case 2:return e.next=4,n._connection.invoke("refresh",t);case 4:return r=e.sent,i=r.extent,s=r.timeExtent,e.abrupt("return",(i&&(n.sourceJSON.extent=i),s&&(n.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:n.sourceJSON.extent,timeInfo:n.sourceJSON.timeInfo}}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n}return(0,u.Z)(r,[{key:"load",value:function(e){var t=(0,v.pC)(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}},{key:"destroy",value:function(){var e;null!==(e=this._connection)&&void 0!==e&&e.close(),this._connection=null}},{key:"openPorts",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this._connection.openPorts());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n,i=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryFeatures",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",x.Z.fromJSON(n));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeaturesJSON",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatures",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryFeatureCount",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("queryObjectIds",t?t.toJSON():null,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n,i=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this.load(r);case 3:return e.next=5,this._connection.invoke("queryExtent",t?t.toJSON():null,r);case 5:return n=e.sent,e.abrupt("return",{count:n.count,extent:_.Z.fromJSON(n.extent)});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},e.next=3,this.load(r);case 3:return e.abrupt("return",this._connection.invoke("querySnapping",t,r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_startWorker",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n,i,s,a,u,c,l,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,S.bA)("CSVSourceWorker",{strategy:(0,k.Z)("feature-layers-workers")?"dedicated":"local",signal:t});case 2:return this._connection=e.sent,r=this.loadOptions,n=r.url,i=r.delimiter,s=r.fields,a=r.latitudeField,u=r.longitudeField,c=r.spatialReference,l=r.timeInfo,e.next=13,this._connection.invoke("load",{url:n,customParameters:this.customParameters,parsingOptions:{delimiter:i,fields:null===s||void 0===s?void 0:s.map((function(e){return e.toJSON()})),latitudeField:a,longitudeField:u,spatialReference:null===c||void 0===c?void 0:c.toJSON(),timeInfo:null===l||void 0===l?void 0:l.toJSON()}},{signal:t});case 13:p=e.sent,this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter;case 15:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(C.Z);(0,y._)([(0,g.Cb)()],F.prototype,"type",void 0),(0,y._)([(0,g.Cb)()],F.prototype,"loadOptions",void 0),(0,y._)([(0,g.Cb)()],F.prototype,"customParameters",void 0),(0,y._)([(0,g.Cb)()],F.prototype,"locationInfo",void 0),(0,y._)([(0,g.Cb)()],F.prototype,"sourceJSON",void 0),(0,y._)([(0,g.Cb)()],F.prototype,"delimiter",void 0),F=(0,y._)([(0,b.j)("esri.layers.graphics.sources.CSVSource")],F);var O=r(63543),I=r(86638),q=r(53283),N=r(78952);function P(e,t){throw new f.Z(t,"CSVLayer (title: ".concat(e.title,", id: ").concat(e.id,") cannot be saved to a portal item"))}var D=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).geometryType="point",e.capabilities=(0,O.MS)(!1,!1),e.delimiter=null,e.editingEnabled=!1,e.fields=null,e.latitudeField=null,e.locationType="coordinates",e.longitudeField=null,e.operationalLayerType="CSV",e.outFields=["*"],e.path=null,e.spatialReference=N.Z.WGS84,e.source=null,e.type="csv",e}return(0,u.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,s.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=(0,v.pC)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(h.r9).then((0,i.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,t.createGraphicsSource(r);case 3:return e.t1=e.sent,e.abrupt("return",e.t0.initLayerProperties.call(e.t0,e.t1));case 5:case"end":return e.stop()}}),e)}))));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"readWebMapLabelsVisible",value:function(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}},{key:"url",set:function(e){if(e){var t=(0,m.mN)(e);this._set("url",t.path),t.query&&(this.customParameters=(0,s.Z)((0,s.Z)({},this.customParameters),t.query))}else this._set("url",e)}},{key:"createGraphicsSource",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){var r,n,i,s,a,u;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=new F({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:null!==(r=this.latitudeField)&&void 0!==r?r:void 0,longitudeField:null!==(n=this.longitudeField)&&void 0!==n?n:void 0,spatialReference:null!==(i=this.spatialReference)&&void 0!==i?i:void 0,timeInfo:null!==(s=this.timeInfo)&&void 0!==s?s:void 0,url:this.url},customParameters:null!==(a=this.customParameters)&&void 0!==a?a:void 0}),this._set("source",u),e.next=4,u.load({signal:t});case 4:return this.read({locationInfo:u.locationInfo,columnDelimiter:u.delimiter},{origin:"service",url:this.parsedUrl}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(I.Z.from(e)||r.createQuery())})).then((function(e){if(null!==e&&void 0!==e&&e.features){var t,o=(0,n.Z)(e.features);try{for(o.s();!(t=o.n()).done;){var i=t.value;i.layer=i.sourceLayer=r}}catch(s){o.e(s)}finally{o.f()}}return e}))}},{key:"queryObjectIds",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryObjectIds(I.Z.from(e)||r.createQuery())}))}},{key:"queryFeatureCount",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatureCount(I.Z.from(e)||r.createQuery())}))}},{key:"queryExtent",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryExtent(I.Z.from(e)||r.createQuery())}))}},{key:"read",value:function(e,t){(0,c.Z)((0,l.Z)(r.prototype),"read",this).call(this,e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service")}},{key:"write",value:function(e,t){return(0,c.Z)((0,l.Z)(r.prototype),"write",this).call(this,e,(0,s.Z)((0,s.Z)({},t),{},{writeLayerSchema:!0}))}},{key:"clone",value:function(){throw new f.Z("csv-layer:clone","CSVLayer (title: ".concat(this.title,", id: ").concat(this.id,") cannot be cloned"))}},{key:"save",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(this,"csv-layer:save"));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,r){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(this,"csv-layer:save-as"));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"hasDataChanged",value:function(){var e=(0,i.Z)((0,o.Z)().mark((function e(){var t,r,n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.source.refresh(this.customParameters);case 3:return t=e.sent,r=t.dataChanged,n=t.updates,e.abrupt("return",((0,v.pC)(n)&&this.read(n,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),r));case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"_verifyFields",value:function(){}},{key:"_verifySource",value:function(){}},{key:"_hasMemorySource",value:function(){return!1}}]),r}(w.default);(0,y._)([(0,g.Cb)({readOnly:!0,json:{read:!1,write:!1}})],D.prototype,"capabilities",void 0),(0,y._)([(0,g.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],D.prototype,"delimiter",void 0),(0,y._)([(0,g.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],D.prototype,"editingEnabled",void 0),(0,y._)([(0,g.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],D.prototype,"fields",void 0),(0,y._)([(0,g.Cb)({type:Boolean,readOnly:!0})],D.prototype,"isTable",null),(0,y._)([(0,Z.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],D.prototype,"readWebMapLabelsVisible",null),(0,y._)([(0,g.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],D.prototype,"latitudeField",void 0),(0,y._)([(0,g.Cb)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,y._)([(0,g.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],D.prototype,"locationType",void 0),(0,y._)([(0,g.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],D.prototype,"longitudeField",void 0),(0,y._)([(0,g.Cb)({type:["CSV"]})],D.prototype,"operationalLayerType",void 0),(0,y._)([(0,g.Cb)()],D.prototype,"outFields",void 0),(0,y._)([(0,g.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],D.prototype,"path",void 0),(0,y._)([(0,g.Cb)({json:{read:!1},cast:null,type:F,readOnly:!0})],D.prototype,"source",void 0),(0,y._)([(0,g.Cb)({json:{read:!1},value:"csv",readOnly:!0})],D.prototype,"type",void 0),(0,y._)([(0,g.Cb)({json:{read:q.r,write:{isRequired:!0,ignoreOrigin:!0,writer:q.w}}})],D.prototype,"url",null);var R=D=(0,y._)([(0,b.j)("esri.layers.CSVLayer")],D)},60480:function(e,t,r){r.d(t,{g:function(){return n}});var n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:function(e,t,r){r.d(t,{Dm:function(){return d},Hq:function(){return y},MS:function(){return f},bU:function(){return c}});var n=r(4942),o=r(1413),i=r(93169),s=r(84652),a=r(60480),u=r(76115);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?u.I4:"esriGeometryPolyline"===e?u.ET:u.lF}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return function(){return(0,o.Z)((0,n.Z)({},t,null),e)};try{var r="this.".concat(t," = null;");for(var s in e)r+="this".concat(l.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var a=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return function(){return new a}}catch(u){return function(){return(0,o.Z)((0,n.Z)({},t,null),e)}}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function f(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:a.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=8435.e5c72a1c.chunk.js.map