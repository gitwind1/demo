"use strict";(self.webpackChunkmapdev=self.webpackChunkmapdev||[]).push([[9130],{59130:function(t,e,n){n.r(e),n.d(e,{submitValidateNetworkTopologyJob:function(){return p},validateNetworkTopology:function(){return c}});var r=n(74165),a=n(1413),i=n(15861),o=n(76200),u=n(10064),s=n(23084),d=n(64267);function c(t,e,n){return l.apply(this,arguments)}function l(){return l=(0,i.Z)((0,r.Z)().mark((function t(e,n,i){var u,c,l,p,v,f,Z,y,h,b,k;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=(0,s.en)(e),p=n.toJSON(),n.validationSet&&(p.validationSet=JSON.stringify(n.validationSet)),v=(0,a.Z)((0,a.Z)({},p),{},{returnEdits:!0,f:"json"}),f=(0,s.cv)((0,a.Z)((0,a.Z)({},l.query),v)),Z=(0,s.lA)(f,(0,a.Z)((0,a.Z)({},i),{},{method:"post"})),y="".concat(l.path,"/validateNetworkTopology"),t.next=8,(0,o.default)(y,Z);case 8:if(h=t.sent,b=h.data){t.next=12;break}return t.abrupt("return",null);case 12:return k=d.Z.fromJSON(b),t.abrupt("return",(k.serviceEdits=null!==(u=null===(c=k.serviceEdits)||void 0===c?void 0:c.map((function(t){return{layerId:t.id,editedFeatures:t.editedFeatures}})))&&void 0!==u?u:[],k));case 14:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function p(t,e,n){return v.apply(this,arguments)}function v(){return v=(0,i.Z)((0,r.Z)().mark((function t(e,n,i){var d,c,l,p,v,f;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.gdbVersion){t.next=2;break}throw new u.Z("submit-validate-network-topology-job:missing-gdb-version","version is missing");case 2:return d=(0,s.en)(e),c=n.toJSON(),n.validationSet&&(c.validationSet=JSON.stringify(n.validationSet)),l=(0,s.lA)(d.query,(0,a.Z)((0,a.Z)({query:(0,s.cv)((0,a.Z)((0,a.Z)({},c),{},{returnEdits:!0,async:!0,f:"json"}))},i),{},{method:"post"})),p="".concat(d.path,"/validateNetworkTopology"),t.next=8,(0,o.default)(p,l);case 8:return v=t.sent,f=v.data,t.abrupt("return",f?f.statusUrl:null);case 11:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}}}]);
//# sourceMappingURL=9130.f1285b2e.chunk.js.map