"use strict";(self.webpackChunkmapdev=self.webpackChunkmapdev||[]).push([[8023],{28023:function(e,t,r){r.r(t),r.d(t,{execute:function(){return c}});var a,n=r(74165),s=r(1413),u=r(15861),i=r(10064),o=r(92026);function c(e,t){var r=t.responseType;r?"array-buffer"!==r&&"blob"!==r&&"json"!==r&&"native"!==r&&"native-request-init"!==r&&"text"!==r&&(r="text"):r="json",t.responseType=r;var c=(0,o.Wg)(t.signal);return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:c}).then(function(){var o=(0,u.Z)((0,n.Z)().mark((function u(o){var p,b,l,f,k,v,x;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o.data){n.next=23;break}if(!(o.data instanceof ArrayBuffer)){n.next=16;break}if("json"!==r&&"text"!==r&&"blob"!==r||(p=new Blob([o.data]),"json"!==r&&"text"!==r||(a||(a=new FileReaderSync),f=a.readAsText(p),"json"!==r))){n.next=14;break}n.prev=3,b=JSON.parse(f||null),n.next=11;break;case 7:throw n.prev=7,n.t0=n.catch(3),v=(0,s.Z)((0,s.Z)({},n.t0),{},{url:e,requestOptions:t}),new i.Z("request:server",n.t0.message,v);case 11:if(!b.error){n.next=14;break}throw x=(0,s.Z)((0,s.Z)({},b.error),{},{url:e,requestOptions:t}),new i.Z("request:server",b.error.message,x);case 14:n.next=23;break;case 16:if(n.t1="native"===r,!n.t1){n.next=23;break}return o.data.signal=c,n.next=21,fetch(o.data.url,o.data);case 21:l=n.sent,o.httpStatus=l.status;case 23:n.t2=r,n.next="blob"===n.t2?26:"json"===n.t2?28:"native"===n.t2?30:"text"===n.t2?32:34;break;case 26:return k=p,n.abrupt("break",35);case 28:return k=b,n.abrupt("break",35);case 30:return k=l,n.abrupt("break",35);case 32:return k=f,n.abrupt("break",35);case 34:k=o.data;case 35:return n.abrupt("return",{data:k,httpStatus:o.httpStatus,requestOptions:t,ssl:o.ssl,url:e});case 36:case"end":return n.stop()}}),u,null,[[3,7]])})));return function(e){return o.apply(this,arguments)}}())}}}]);
//# sourceMappingURL=8023.d83221fd.chunk.js.map