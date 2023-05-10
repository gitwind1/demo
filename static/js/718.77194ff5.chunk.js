"use strict";(self.webpackChunkmapdev=self.webpackChunkmapdev||[]).push([[718],{718:function(e,n,t){t.r(n),t.d(n,{registerFunctions:function(){return j}});var r=t(74165),a=t(37762),i=t(15861),s=t(51064),l=t(72741),u=t(62357),c=t(22564),o=t(5431),f=t(97879),d=t(31786),p=t(97246),m=t(44715),y=t(93249),b=t(12829),x=t(67820),h=t(89066),v=t(45184),k=t(73954),w=t(84272),g=t(82279),F=t(29876),I=t(65247),Z=t(93106),E=t(66978),D=t(48562),A=t(64326),T=t(83040);function N(e,n,t,r){if(1===r.length){if((0,m.m)(r[0]))return(0,Z.t)(e,r[0],-1);if((0,m.x)(r[0]))return(0,Z.t)(e,r[0].toArray(),-1)}return(0,Z.t)(e,r,-1)}function S(e,n,t){return L.apply(this,arguments)}function L(){return(L=(0,i.Z)((0,r.Z)().mark((function e(n,t,a){var i,s,l,u,c,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=n.getVariables()).length>0)){e.next=17;break}s=[],l=0;case 4:if(!(l<i.length)){e.next=14;break}return u={name:i[l]},e.t0=s,e.next=9,t.evaluateIdentifier(a,u);case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 11:l++,e.next=4;break;case 14:for(c={},o=0;o<i.length;o++)c[i[o]]=s[o];return e.abrupt("return",(n.parameters=c,n));case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var r in e)if(r.toLowerCase()===n.toLowerCase())return e[r];return t}function H(e){if(null===e)return null;var n={type:C(e,"type",""),name:C(e,"name","")};if("range"===n.type)n.range=C(e,"range",[]);else{n.codedValues=[];var t,r=(0,a.Z)(C(e,"codedValues",[]));try{for(r.s();!(t=r.n()).done;){var i=t.value;n.codedValues.push({name:C(i,"name",""),code:C(i,"code",null)})}}catch(s){r.e(s)}finally{r.f()}}return n}function P(e){if(null===e)return null;var n={},t=C(e,"wkt",null);null!==t&&(n.wkt=t);var r=C(e,"wkid",null);return null!==r&&(n.wkid=r),n}function V(e){if(null===e)return null;var n={hasZ:C(e,"hasz",!1),hasM:C(e,"hasm",!1)},t=C(e,"spatialreference",null);t&&(n.spatialReference=P(t));var r=C(e,"x",null);if(null!==r)return n.x=r,n.y=C(e,"y",null),n;var a=C(e,"rings",null);if(null!==a)return n.rings=a,n;var i=C(e,"paths",null);if(null!==i)return n.paths=i,n;var s=C(e,"points",null);if(null!==s)return n.points=s,n;for(var l=0,u=["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"];l<u.length;l++){var c=u[l],o=C(e,c,null);null!==o&&(n[c]=o)}return n}function R(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,n){var t,r=(0,a.Z)(n);try{for(r.s();!(t=r.n()).done;)if(t.value===e)return!0}catch(i){r.e(i)}finally{r.f()}return!1}(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==(0,m.m)(e.layerDefinition.fields)&&!1!==(0,m.m)(e.featureSet.features)}function j(e){"async"===e.mode&&(e.functions.timezone=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,l){var o,f,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(l,1,2,n,t),!(0,m.T)(l[0])){e.next=19;break}return e.next=3,l[0].load();case 3:if(1!==l.length&&null!==l[1]){e.next=5;break}return e.abrupt("return",l[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone);case 5:if(l[1]instanceof u.Z&&!1!==l[1].hasField("type")){e.next=7;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 7:if(o=l[1].field("type"),!1!==(0,m.c)(o)){e.next=10;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 10:e.t0=(0,m.j)(o).toLowerCase(),e.next="preferredtimezone"===e.t0?13:"editfieldsinfo"===e.t0?14:"timeinfo"===e.t0?15:"field"===e.t0?16:18;break;case 13:return e.abrupt("return",l[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone);case 14:return e.abrupt("return",l[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone);case 15:return e.abrupt("return",l[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone);case 16:if(!l[1].hasField("fieldname")||!(0,m.c)(l[1].field("fieldname"))){e.next=18;break}return e.abrupt("return",l[0].dateTimeReferenceFieldIndex.fieldTimeZone((0,m.j)(l[1].field("fieldname"))));case 18:throw new c.aV(n,c.rH.InvalidParameter,t);case 19:if(null!==(f=(0,m.l)(l[0],(0,m.C)(n)))){e.next=22;break}return e.abrupt("return",null);case 22:return d=f.timeZone,e.abrupt("return","system"===d?s.iG.systemTimeZoneCanonicalName:d);case 24:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.functions.sqltimestamp=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,s){var l,u,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(s,1,3,n,t),l=s[0],!(0,m.k)(l)){e.next=8;break}if(1!==s.length){e.next=5;break}return e.abrupt("return",l.toSQLString());case 5:if(2!==s.length){e.next=7;break}return e.abrupt("return",l.changeTimeZone((0,m.j)(s[1])).toSQLString());case 7:case 18:throw new c.aV(n,c.rH.InvalidParameter,t);case 8:if(!(0,m.T)(l)){e.next=18;break}if(3===s.length){e.next=11;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 11:return e.next=13,l.load();case 13:if(u=(0,m.j)(s[1]),!1!==(0,m.k)(s[2])){e.next=16;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 16:return o=l.fieldTimeZone(u),e.abrupt("return",null===o?s[2].toSQLString():s[2].changeTimeZone(o).toSQLString());case 19:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(n,t){return e.standardFunctionAsync(n,t,(function(e,r,a){if((0,m.y)(a,2,4,n,t),a[0]instanceof f.Z){var i=(0,m.j)(a[1]),s=(0,m.A)(a[2],null),l=(0,m.h)((0,m.A)(a[3],!0));if(null===s&&(s=["*"]),!1===(0,m.m)(s))throw new c.aV(n,c.rH.InvalidParameter,t);return a[0].featureSetById(i,l,s)}throw new c.aV(n,c.rH.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(n,t){return e.standardFunctionAsync(n,t,(function(e,r,a){if((0,m.y)(a,1,2,n,t),(0,m.w)(a[0])){var i=(0,m.A)(a[1],"datasource");return null===i&&(i="datasource"),i=(0,m.j)(i).toLowerCase(),(0,d.convertToFeatureSet)(a[0].fullSchema(),i,n.lrucache,n.interceptor,n.spatialReference)}throw new c.aV(n,c.rH.InvalidParameter,t)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(n,t){return e.standardFunctionAsync(n,t,(function(e,r,a){if((0,m.y)(a,2,5,n,t),null===a[0])throw new c.aV(n,c.rH.PortalRequired,t);if(a[0]instanceof l.Z){var i=(0,m.j)(a[1]),s=(0,m.j)(a[2]),u=(0,m.A)(a[3],null),o=(0,m.h)((0,m.A)(a[4],!0));if(null===u&&(u=["*"]),!1===(0,m.m)(u))throw new c.aV(n,c.rH.InvalidParameter,t);var f=null;return n.services&&n.services.portal&&(f=n.services.portal),f=(0,y._)(a[0],f),(0,d.constructFeatureSetFromPortalItem)(i,s,n.spatialReference,u,o,f,n.lrucache,n.interceptor)}if(!1===(0,m.c)(a[0]))throw new c.aV(n,c.rH.PortalRequired,t);var p=(0,m.j)(a[0]),b=(0,m.j)(a[1]),x=(0,m.A)(a[2],null),h=(0,m.h)((0,m.A)(a[3],!0));if(null===x&&(x=["*"]),!1===(0,m.m)(x))throw new c.aV(n,c.rH.InvalidParameter,t);if(n.services&&n.services.portal)return(0,d.constructFeatureSetFromPortalItem)(p,b,n.spatialReference,x,h,n.services.portal,n.lrucache,n.interceptor);throw new c.aV(n,c.rH.PortalRequired,t)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(n,t){return e.standardFunctionAsync(n,t,(function(e,r,a){if((0,m.y)(a,2,4,n,t),a[0]instanceof f.Z){var i=(0,m.j)(a[1]),s=(0,m.A)(a[2],null),l=(0,m.h)((0,m.A)(a[3],!0));if(null===s&&(s=["*"]),!1===(0,m.m)(s))throw new c.aV(n,c.rH.InvalidParameter,t);return a[0].featureSetByName(i,l,s)}throw new c.aV(n,c.rH.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(n,t){return e.standardFunction(n,t,(function(e,r,i){var s;(0,m.y)(i,1,1,n,t);var l=i[0],o={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,m.c)(l))void 0!==(l=JSON.parse(l)).layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName,o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(i[0]instanceof u.Z))throw new c.aV(n,c.rH.InvalidParameter,t);var f=C(l=JSON.parse(i[0].castToText(!0)),"layerdefinition");if(null!==f){o.layerDefinition.geometryType=C(f,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=C(f,"globalidfield",""),o.layerDefinition.objectIdField=C(f,"objectidfield",""),o.layerDefinition.typeIdField=C(f,"typeidfield","");var d=C(f,"spatialreference",null);d&&(o.layerDefinition.spatialReference=P(d));var p,y=(0,a.Z)(C(f,"fields",[]));try{for(y.s();!(p=y.n()).done;){var b=p.value,x={name:C(b,"name",""),alias:C(b,"alias",""),type:C(b,"type",""),nullable:C(b,"nullable",!0),editable:C(b,"editable",!0),length:C(b,"length",null),domain:H(C(b,"domain"))};o.layerDefinition.fields.push(x)}}catch(B){y.e(B)}finally{y.f()}var h=C(l,"featureset",null);if(h){var v,k={},g=(0,a.Z)(o.layerDefinition.fields);try{for(g.s();!(v=g.n()).done;){var F=v.value;k[F.name.toLowerCase()]=F.name}}catch(B){g.e(B)}finally{g.f()}var I,Z=(0,a.Z)(C(h,"features",[]));try{for(Z.s();!(I=Z.n()).done;){var E=I.value,D={},A=C(E,"attributes",{});for(var T in A)D[k[T.toLowerCase()]]=A[T];o.featureSet.features.push({attributes:D,geometry:V(C(E,"geometry",null))})}}catch(B){Z.e(B)}finally{Z.f()}}}else{o.layerDefinition.geometryType=C(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=C(l,"objectidfieldname",""),o.layerDefinition.typeIdField=C(l,"typeidfieldname","");var N=C(l,"spatialreference",null);N&&(o.layerDefinition.spatialReference=P(N));var S,L=(0,a.Z)(C(l,"fields",[]));try{for(L.s();!(S=L.n()).done;){var j=S.value,W={name:C(j,"name",""),alias:C(j,"alias",""),type:C(j,"type",""),nullable:C(j,"nullable",!0),editable:C(j,"editable",!0),length:C(j,"length",null),domain:H(C(j,"domain"))};o.layerDefinition.fields.push(W)}}catch(B){L.e(B)}finally{L.f()}var O,M={},z=(0,a.Z)(o.layerDefinition.fields);try{for(z.s();!(O=z.n()).done;){var X=O.value;M[X.name.toLowerCase()]=X.name}}catch(B){z.e(B)}finally{z.f()}var G,_=(0,a.Z)(C(l,"features",[]));try{for(_.s();!(G=_.n()).done;){var U=G.value,q={},J=C(U,"attributes",{});for(var Q in J)q[M[Q.toLowerCase()]]=J[Q];o.featureSet.features.push({attributes:q,geometry:V(C(U,"geometry",null))})}}catch(B){_.e(B)}finally{_.f()}}}if(!1===R(o))throw new c.aV(n,c.rH.InvalidParameter,t);return""===((null===o||void 0===o||null===(s=o.layerDefinition)||void 0===s?void 0:s.geometryType)||"")&&(o.layerDefinition.geometryType="esriGeometryNull"),w.Z.create(o,n.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(n,t){return e.standardFunctionAsync(n,t,function(){var s=(0,i.Z)((0,r.Z)().mark((function i(s,l,u){var o,f,d,y,b,h,v,k,w,g,F,I,Z,A,T;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((0,m.y)(u,2,2,n,t),!(0,m.m)(u[0])&&!(0,m.x)(u[0])){r.next=36;break}if(o=[],(f=u[0])instanceof p.Z&&(f=f.toArray()),d=null,(0,m.i)(u[1])){r.next=7;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 7:d=u[1].createFunction(n),y=(0,a.Z)(f),r.prev=9,y.s();case 11:if((b=y.n()).done){r.next=27;break}if(h=b.value,v=d(h),!(0,E.y8)(v)){r.next=24;break}return r.t0=!0,r.next=18,v;case 18:if(r.t1=r.sent,r.t2=r.t0===r.t1,!r.t2){r.next=22;break}o.push(h);case 22:r.next=25;break;case 24:!0===v&&o.push(h);case 25:r.next=11;break;case 27:r.next=32;break;case 29:r.prev=29,r.t3=r.catch(9),y.e(r.t3);case 32:return r.prev=32,y.f(),r.finish(32);case 35:return r.abrupt("return",o);case 36:if(!(0,m.T)(u[0])){r.next=59;break}return r.next=39,u[0].load();case 39:if(k=r.sent,w=D.WhereClause.create(u[1],k.getFieldsIndex()),!((g=w.getVariables()).length>0)){r.next=58;break}F=[],I=0;case 45:if(!(I<g.length)){r.next=55;break}return Z={name:g[I]},r.t4=F,r.next=50,e.evaluateIdentifier(n,Z);case 50:r.t5=r.sent,r.t4.push.call(r.t4,r.t5);case 52:I++,r.next=45;break;case 55:for(A={},T=0;T<g.length;T++)A[g[T]]=F[T];return r.abrupt("return",(w.parameters=A,new x.Z({parentfeatureset:u[0],whereclause:w})));case 58:return r.abrupt("return",new x.Z({parentfeatureset:u[0],whereclause:w}));case 59:throw new c.aV(n,c.rH.InvalidParameter,t);case 60:case"end":return r.stop()}}),i,null,[[9,29,32,35]])})));return function(e,n,t){return s.apply(this,arguments)}}())},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,s){var l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(s,2,2,n,t),!(0,m.T)(s[0])){e.next=3;break}return l=new g.Z(s[1]),e.abrupt("return",new h.Z({parentfeatureset:s[0],orderbyclause:l}));case 3:throw new c.aV(n,c.rH.InvalidParameter,t);case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(s,2,2,n,t),!(0,m.T)(s[0])){e.next=2;break}return e.abrupt("return",new v.Z({parentfeatureset:s[0],topnum:s[1]}));case 2:if(!(0,m.m)(s[0])){e.next=4;break}return e.abrupt("return",(0,m.g)(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,(0,m.g)(s[1])));case 4:if(!(0,m.x)(s[0])){e.next=6;break}return e.abrupt("return",(0,m.g)(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,(0,m.g)(s[1])));case 6:throw new c.aV(n,c.rH.InvalidParameter,t);case 7:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,s){var l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(s,1,1,n,t),!(0,m.T)(s[0])){e.next=8;break}return e.next=3,s[0].first(a.abortSignal);case 3:if(null===(l=e.sent)){e.next=7;break}return u=o.Z.createFromGraphicLikeObject(l.geometry,l.attributes,s[0],n.timeReference),e.abrupt("return",(u._underlyingGraphic=l,u));case 7:return e.abrupt("return",l);case 8:return e.abrupt("return",(0,m.m)(s[0])?0===s[0].length?null:s[0][0]:(0,m.x)(s[0])?0===s[0].length()?null:s[0].get(0):null);case 9:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,s){var l,o,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(s,1,2,n,t),l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1},!(s.length>1)){e.next=9;break}if(!(s[1]instanceof u.Z)){e.next=7;break}s[1].hasField("minsize")&&(l.minsize=(0,m.g)(s[1].field("minsize"))),s[1].hasField("metadata")&&(l.returnMetadata=(0,m.h)(s[1].field("metadata"))),s[1].hasField("maxsize")&&(l.maxsize=(0,m.g)(s[1].field("maxsize"))),s[1].hasField("types")&&(o=(0,m.X)(s[1].field("types"),!1)).length>0&&(l.types=o),e.next=9;break;case 7:if(null===s[1]){e.next=9;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 9:if(!(0,m.w)(s[0])){e.next=25;break}if((f=s[0]._layer)instanceof A.default&&(f=(0,d.constructFeatureSet)(f,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null!==f){e.next=16;break}e.t0=[],e.next=24;break;case 16:if(!1!==(0,m.T)(f)){e.next=20;break}e.t1=[],e.next=23;break;case 20:return e.next=22,f.load();case 22:e.t1=f.queryAttachments(s[0].field(f.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata);case 23:e.t0=e.t1;case 24:return e.abrupt("return",e.t0);case 25:if(null!==s[0]){e.next=27;break}return e.abrupt("return",[]);case 27:throw new c.aV(n,c.rH.InvalidParameter,t);case 28:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(a,i,s){var l,u,o,f,p,y,b,x,h,v,w,g;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(s,2,4,n,t),l=s[0],u=(0,m.j)(s[1]),o=(0,m.A)(s[2],null),f=(0,m.h)((0,m.A)(s[3],!0)),null===o&&(o=["*"]),!1!==(0,m.m)(o)){e.next=6;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 6:if(null!==s[0]){e.next=8;break}return e.abrupt("return",null);case 8:if((0,m.w)(s[0])){e.next=10;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 10:if((p=l._layer)instanceof A.default&&(p=(0,d.constructFeatureSet)(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null!==p){e.next=13;break}return e.abrupt("return",null);case 13:if(!1!==(0,m.T)(p)){e.next=15;break}return e.abrupt("return",null);case 15:return e.next=17,p.load();case 17:if(p=e.sent,y=p.relationshipMetaData().filter((function(e){return e.name===u})),0!==y.length){e.next=21;break}return e.abrupt("return",null);case 21:if(!(void 0!==y[0].relationshipTableId&&null!==y[0].relationshipTableId&&y[0].relationshipTableId>-1)){e.next=23;break}return e.abrupt("return",(0,d.constructFeatureSetFromRelationship)(p,y[0],l.field(p.objectIdField),p.spatialReference,o,f,n.lrucache,n.interceptor));case 23:if(b=p.serviceUrl()){e.next=26;break}return e.abrupt("return",null);case 26:return b="/"===b.charAt(b.length-1)?b+y[0].relatedTableId.toString():b+"/"+y[0].relatedTableId.toString(),e.next=29,(0,d.constructFeatureSetFromUrl)(b,p.spatialReference,o,f,n.lrucache,n.interceptor);case 29:return x=e.sent,e.next=32,x.load();case 32:if(h=(h=x.relationshipMetaData()).filter((function(e){return e.id===y[0].id})),!1!==l.hasField(y[0].keyField)&&null!==l.field(y[0].keyField)){e.next=41;break}return e.next=36,p.getFeatureByObjectId(l.field(p.objectIdField),[y[0].keyField]);case 36:if(!(v=e.sent)){e.next=40;break}return w=D.WhereClause.create(h[0].keyField+"= @id",x.getFieldsIndex()),e.abrupt("return",(w.parameters={id:v.attributes[y[0].keyField]},x.filter(w)));case 40:return e.abrupt("return",new k.Z({parentfeatureset:x}));case 41:return g=D.WhereClause.create(h[0].keyField+"= @id",x.getFieldsIndex()),e.abrupt("return",(g.parameters={id:l.field(y[0].keyField)},x.filter(g)));case 43:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(n,t){return e.standardFunctionAsync(n,t,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(i,s,l){var u,o,f,p,y,x,h,v,k,w,g,I,Z,E,N,S,L,C,H,P,V,R,j,W,O,M,z,X,G,_,U,q,J,Q,B,$,K,Y,ee,ne,te;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,m.y)(l,2,3,n,t),u=l[0],o=(0,m.j)((0,m.A)(l[1],"")).toLowerCase(),f=(0,m.c)(l[2])?(0,m.j)(l[2]):null,null!==l[0]){e.next=4;break}return e.abrupt("return",null);case 4:if((0,m.w)(l[0])){e.next=6;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 6:if((p=u._layer)instanceof A.default&&(p=(0,d.constructFeatureSet)(p,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null!==p){e.next=9;break}return e.abrupt("return",null);case 9:if(!1!==(0,m.T)(p)){e.next=11;break}return e.abrupt("return",null);case 11:return e.next=13,p.load();case 13:return y=p.serviceUrl(),e.next=16,(0,d.constructAssociationMetaDataFeatureSetFromUrl)(y,n.spatialReference);case 16:if(x=e.sent,h=null,v=null,k=!1,null!==f&&""!==f&&void 0!==f){w=(0,a.Z)(x.terminals);try{for(w.s();!(g=w.n()).done;)(I=g.value).terminalName===f&&(v=I.terminalId)}catch(r){w.e(r)}finally{w.f()}null===v&&(k=!0)}Z=x.associations.getFieldsIndex(),E=Z.get("TOGLOBALID").name,N=Z.get("FROMGLOBALID").name,S=Z.get("TOTERMINALID").name,L=Z.get("FROMTERMINALID").name,C=Z.get("FROMNETWORKSOURCEID").name,H=Z.get("TONETWORKSOURCEID").name,P=Z.get("ASSOCIATIONTYPE").name,V=Z.get("ISCONTENTVISIBLE").name,R=Z.get("OBJECTID").name,j=(0,a.Z)(p.fields),e.prev=21,j.s();case 23:if((W=j.n()).done){e.next=30;break}if("global-id"!==(O=W.value).type){e.next=28;break}return h=u.field(O.name),e.abrupt("break",30);case 28:e.next=23;break;case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(21),j.e(e.t0);case 35:return e.prev=35,j.f(),e.finish(35);case 38:for(q in M=null,z=new b.yN(new T.Z({name:"percentalong",alias:"percentalong",type:"double"}),D.WhereClause.create("0",x.associations.getFieldsIndex())),X=new b.yN(new T.Z({name:"side",alias:"side",type:"string"}),D.WhereClause.create("''",x.associations.getFieldsIndex())),G="globalid",_="globalId",U={},x.lkp)U[q]=x.lkp[q].sourceId;J=new b.TO(new T.Z({name:"classname",alias:"classname",type:"string"}),null,U),Q="",e.t1=o,e.next="midspan"===e.t1?46:"junctionedge"===e.t1?50:"connected"===e.t1?54:"container"===e.t1?59:"content"===e.t1?61:"structure"===e.t1?63:"attached"===e.t1?65:67;break;case 46:return Q="((".concat(E,"='").concat(h,"') OR ( ").concat(N,"='").concat(h,"')) AND (").concat(P," IN (5))"),J.codefield=D.WhereClause.create("CASE WHEN (".concat(E,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(H," END"),x.associations.getFieldsIndex()),(B=(0,F.JW)(b.Xx.findField(x.associations.fields,N))).name=G,B.alias=G,M=new b.yN(B,D.WhereClause.create("CASE WHEN (".concat(N,"='").concat(h,"') THEN ").concat(E," ELSE ").concat(N," END"),x.associations.getFieldsIndex())),z=x.unVersion>=4?new b.$X(b.Xx.findField(x.associations.fields,Z.get("PERCENTALONG").name)):new b.yN(new T.Z({name:"percentalong",alias:"percentalong",type:"double"}),D.WhereClause.create("0",x.associations.getFieldsIndex())),e.abrupt("break",68);case 50:return Q="((".concat(E,"='").concat(h,"') OR ( ").concat(N,"='").concat(h,"')) AND (").concat(P," IN (4,6))"),J.codefield=D.WhereClause.create("CASE WHEN (".concat(E,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(H," END"),x.associations.getFieldsIndex()),($=(0,F.JW)(b.Xx.findField(x.associations.fields,N))).name=G,$.alias=G,M=new b.yN($,D.WhereClause.create("CASE WHEN (".concat(N,"='").concat(h,"') THEN ").concat(E," ELSE ").concat(N," END"),x.associations.getFieldsIndex())),X=new b.yN(new T.Z({name:"side",alias:"side",type:"string"}),D.WhereClause.create("CASE WHEN (".concat(P,"=4) THEN 'from' ELSE 'to' END"),x.associations.getFieldsIndex())),e.abrupt("break",68);case 54:return ee="".concat(E,"='@T'"),ne="".concat(N,"='@T'"),null!==v&&(ee+=" AND ".concat(S,"=@A"),ne+=" AND ".concat(L,"=@A")),Q="(("+ee+") OR ("+ne+"))",Q=(0,m.L)(Q,"@T",null!==(K=h)&&void 0!==K?K:""),ee=(0,m.L)(ee,"@T",null!==(Y=h)&&void 0!==Y?Y:""),null!==v&&(ee=(0,m.L)(ee,"@A",v.toString()),Q=(0,m.L)(Q,"@A",v.toString())),J.codefield=D.WhereClause.create("CASE WHEN "+ee+" THEN ".concat(C," ELSE ").concat(H," END"),x.associations.getFieldsIndex()),(te=(0,F.JW)(b.Xx.findField(x.associations.fields,N))).name=G,te.alias=G,M=new b.yN(te,D.WhereClause.create("CASE WHEN "+ee+" THEN ".concat(N," ELSE ").concat(E," END"),x.associations.getFieldsIndex())),e.abrupt("break",68);case 59:return Q="".concat(E,"='").concat(h,"' AND ").concat(P," = 2"),null!==v&&(Q+=" AND ".concat(S," = ")+v.toString()),J.codefield=C,Q="( "+Q+" )",M=new b.QP(b.Xx.findField(x.associations.fields,N),G,G),e.abrupt("break",68);case 61:return Q="(".concat(N,"='").concat(h,"' AND ").concat(P," = 2)"),null!==v&&(Q+=" AND ".concat(L," = ")+v.toString()),J.codefield=H,Q="( "+Q+" )",M=new b.QP(b.Xx.findField(x.associations.fields,E),G,G),e.abrupt("break",68);case 63:return Q="(".concat(E,"='").concat(h,"' AND ").concat(P," = 3)"),null!==v&&(Q+=" AND ".concat(S," = ")+v.toString()),J.codefield=C,Q="( "+Q+" )",M=new b.QP(b.Xx.findField(x.associations.fields,N),G,_),e.abrupt("break",68);case 65:return Q="(".concat(N,"='").concat(h,"' AND ").concat(P," = 3)"),null!==v&&(Q+=" AND ".concat(L," = ")+v.toString()),J.codefield=H,Q="( "+Q+" )",M=new b.QP(b.Xx.findField(x.associations.fields,E),G,_),e.abrupt("break",68);case 67:throw new c.aV(n,c.rH.InvalidParameter,t);case 68:return k&&(Q="1 <> 1"),e.abrupt("return",new b.Xx({parentfeatureset:x.associations,adaptedFields:[new b.$X(b.Xx.findField(x.associations.fields,R)),new b.$X(b.Xx.findField(x.associations.fields,V)),M,X,J,z],extraFilter:Q?D.WhereClause.create(Q,x.associations.getFieldsIndex()):null}));case 70:case"end":return e.stop()}}),e,null,[[21,32,35,38]])})));return function(n,t,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(n,t){return e.standardFunctionAsync(n,t,function(){var s=(0,i.Z)((0,r.Z)().mark((function i(s,l,o){var f,d,p,y,b,x,h,v,k,w,g,F,Z,E,A,T,N,L,C,H,P,V,R,j,W,O,M,z,X,G,_,U,q,J,Q,B,$,K;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if((0,m.y)(o,3,3,n,t),(0,m.T)(o[0])){r.next=2;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 2:return r.next=4,o[0].load();case 4:if(f=r.sent,d=[],p=[],y=!1,b=[],!(0,m.c)(o[1])){r.next=12;break}b.push(o[1]),r.next=23;break;case 12:if(!(o[1]instanceof u.Z)){r.next=16;break}b.push(o[1]),r.next=23;break;case 16:if(!(0,m.m)(o[1])){r.next=20;break}b=o[1],r.next=23;break;case 20:if((0,m.x)(o[1])){r.next=22;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 22:b=o[1].toArray();case 23:x=(0,a.Z)(b),r.prev=24,x.s();case 26:if((h=x.n()).done){r.next=41;break}if(v=h.value,!(0,m.c)(v)){r.next=33;break}k=D.WhereClause.create((0,m.j)(v),f.getFieldsIndex()),w=!0===(0,I.y5)(k)?(0,m.j)(v):"%%%%FIELDNAME",d.push({name:w,expression:k}),"%%%%FIELDNAME"===w&&(y=!0),r.next=39;break;case 33:if(v instanceof u.Z){r.next=35;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 35:if(g=v.hasField("name")?v.field("name"):"%%%%FIELDNAME",F=v.hasField("expression")?v.field("expression"):"","%%%%FIELDNAME"===g&&(y=!0),g){r.next=38;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 38:d.push({name:g,expression:D.WhereClause.create(F||g,f.getFieldsIndex())});case 39:r.next=26;break;case 41:r.next=46;break;case 43:r.prev=43,r.t0=r.catch(24),x.e(r.t0);case 46:return r.prev=46,x.f(),r.finish(46);case 49:if(b=[],!(0,m.c)(o[2])){r.next=53;break}b.push(o[2]),r.next=64;break;case 53:if(!(0,m.m)(o[2])){r.next=57;break}b=o[2],r.next=64;break;case 57:if(!(0,m.x)(o[2])){r.next=61;break}b=o[2].toArray(),r.next=64;break;case 61:if(o[2]instanceof u.Z){r.next=63;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 63:b.push(o[2]);case 64:Z=(0,a.Z)(b),r.prev=65,Z.s();case 67:if((E=Z.n()).done){r.next=77;break}if((A=E.value)instanceof u.Z){r.next=71;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 71:if(T=A.hasField("name")?A.field("name"):"",N=A.hasField("statistic")?A.field("statistic"):"",L=A.hasField("expression")?A.field("expression"):"",T&&N&&L){r.next=74;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 74:p.push({name:T,statistic:N.toLowerCase(),expression:D.WhereClause.create(L,f.getFieldsIndex())});case 75:r.next=67;break;case 77:r.next=82;break;case 79:r.prev=79,r.t1=r.catch(65),Z.e(r.t1);case 82:return r.prev=82,Z.f(),r.finish(82);case 85:if(y){C={},H=(0,a.Z)(f.fields);try{for(H.s();!(P=H.n()).done;)V=P.value,C[V.name.toLowerCase()]=1}catch(i){H.e(i)}finally{H.f()}R=(0,a.Z)(d);try{for(R.s();!(j=R.n()).done;)"%%%%FIELDNAME"!==(W=j.value).name&&(C[W.name.toLowerCase()]=1)}catch(i){R.e(i)}finally{R.f()}O=(0,a.Z)(p);try{for(O.s();!(M=O.n()).done;)"%%%%FIELDNAME"!==(z=M.value).name&&(C[z.name.toLowerCase()]=1)}catch(i){O.e(i)}finally{O.f()}X=0,G=(0,a.Z)(d);try{for(G.s();!(_=G.n()).done;)if("%%%%FIELDNAME"===(U=_.value).name){for(;1===C["field_"+X.toString()];)X++;C["field_"+X.toString()]=1,U.name="FIELD_"+X.toString()}}catch(i){G.e(i)}finally{G.f()}}q=0,J=d;case 87:if(!(q<J.length)){r.next=94;break}return Q=J[q],r.next=91,S(Q.expression,e,n);case 91:q++,r.next=87;break;case 94:B=0,$=p;case 95:if(!(B<$.length)){r.next=102;break}return K=$[B],r.next=99,S(K.expression,e,n);case 99:B++,r.next=95;break;case 102:return r.abrupt("return",o[0].groupby(d,p));case 103:case"end":return r.stop()}}),i,null,[[24,43,46,49],[65,79,82,85]])})));return function(e,n,t){return s.apply(this,arguments)}}())},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(n,t){return e.standardFunctionAsync(n,t,function(){var s=(0,i.Z)((0,r.Z)().mark((function i(s,l,o){var f,d,p,y,b,x,h,v,k,w,g,F,Z,E,A,T,L,C,H,P,V,R,j,W,O;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(0,m.T)(o[0])){r.next=59;break}return(0,m.y)(o,2,2,n,t),r.next=4,o[0].load();case 4:if(f=r.sent,d=[],p=[],!(0,m.c)(o[1])){r.next=11;break}p.push(o[1]),r.next=22;break;case 11:if(!(o[1]instanceof u.Z)){r.next=15;break}p.push(o[1]),r.next=22;break;case 15:if(!(0,m.m)(o[1])){r.next=19;break}p=o[1],r.next=22;break;case 19:if((0,m.x)(o[1])){r.next=21;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 21:p=o[1].toArray();case 22:y=!1,b=(0,a.Z)(p),r.prev=24,b.s();case 26:if((x=b.n()).done){r.next=41;break}if(h=x.value,!(0,m.c)(h)){r.next=33;break}v=D.WhereClause.create((0,m.j)(h),f.getFieldsIndex()),k=!0===(0,I.y5)(v)?(0,m.j)(h):"%%%%FIELDNAME",d.push({name:k,expression:v}),"%%%%FIELDNAME"===k&&(y=!0),r.next=39;break;case 33:if(h instanceof u.Z){r.next=35;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 35:if(w=h.hasField("name")?h.field("name"):"%%%%FIELDNAME",g=h.hasField("expression")?h.field("expression"):"","%%%%FIELDNAME"===w&&(y=!0),w){r.next=38;break}throw new c.aV(n,c.rH.InvalidParameter,t);case 38:d.push({name:w,expression:D.WhereClause.create(g||w,f.getFieldsIndex())});case 39:r.next=26;break;case 41:r.next=46;break;case 43:r.prev=43,r.t0=r.catch(24),b.e(r.t0);case 46:return r.prev=46,b.f(),r.finish(46);case 49:if(y){F={},Z=(0,a.Z)(f.fields);try{for(Z.s();!(E=Z.n()).done;)A=E.value,F[A.name.toLowerCase()]=1}catch(i){Z.e(i)}finally{Z.f()}T=(0,a.Z)(d);try{for(T.s();!(L=T.n()).done;)"%%%%FIELDNAME"!==(C=L.value).name&&(F[C.name.toLowerCase()]=1)}catch(i){T.e(i)}finally{T.f()}H=0,P=(0,a.Z)(d);try{for(P.s();!(V=P.n()).done;)if("%%%%FIELDNAME"===(R=V.value).name){for(;1===F["field_"+H.toString()];)H++;F["field_"+H.toString()]=1,R.name="FIELD_"+H.toString()}}catch(i){P.e(i)}finally{P.f()}}j=0,W=d;case 51:if(!(j<W.length)){r.next=58;break}return O=W[j],r.next=55,S(O.expression,e,n);case 55:j++,r.next=51;break;case 58:return r.abrupt("return",o[0].groupby(d,[]));case 59:return r.abrupt("return",N("distinct",0,0,o));case 60:case"end":return r.stop()}}),i,null,[[24,43,46,49]])})));return function(e,n,t){return s.apply(this,arguments)}}())})}},93249:function(e,n,t){t.d(n,{_:function(){return c},q:function(){return o}});var r=t(74165),a=t(1413),i=t(15861),s=t(19545),l=t(76200),u=t(70032);function c(e,n){return null===e?n:new u.Z({url:e.field("url")})}function o(e,n,t){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var u,c,o,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===s.id||void 0===s.id?void 0:s.id.findCredential(n.restUrl)){e.next=3;break}return e.abrupt("return",null);case 3:if("loaded"!==n.loadStatus||""!==t||!n.user||!n.user.sourceJSON||!1!==i){e.next=5;break}return e.abrupt("return",n.user.sourceJSON);case 5:if(""!==t){e.next=14;break}return e.next=8,(0,l.default)(n.restUrl+"/community/self",{responseType:"json",query:(0,a.Z)({f:"json"},!1===i?{}:{returnUserLicenseTypeExtensions:!0})});case 8:if(!(u=e.sent).data){e.next=13;break}if(!(c=u.data)||!c.username){e.next=13;break}return e.abrupt("return",c);case 13:case 20:return e.abrupt("return",null);case 14:return e.next=16,(0,l.default)(n.restUrl+"/community/users/"+t,{responseType:"json",query:{f:"json"}});case 16:if(!(o=e.sent).data){e.next=20;break}return f=o.data,e.abrupt("return",f.error?null:f);case 21:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}}}]);
//# sourceMappingURL=718.77194ff5.chunk.js.map