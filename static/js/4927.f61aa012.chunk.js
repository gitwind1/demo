"use strict";(self.webpackChunkmapdev=self.webpackChunkmapdev||[]).push([[4927],{45956:function(e,t,r){r.d(t,{JZ:function(){return Z},RL:function(){return w},eY:function(){return R}});var i=r(29439),n=r(74165),a=r(15861),s=r(15671),o=r(43144),u=r(97326),c=r(11752),h=r(61120),l=r(60136),d=r(29388),p=r(92026),f=r(66978),v=r(22753),x=r(23588),_=r(15245),g=r(87422),m=r(10978),k=r(49800),y=r(8548),b=r(371);function Z(e){return e&&"render"in e}function w(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}var R=function(e){(0,l.Z)(r,e);var t=(0,d.Z)(r);function r(){var e,i,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1?arguments[1]:void 0;return(0,s.Z)(this,r),(n=t.call(this)).blendFunction="standard",n._sourceWidth=0,n._sourceHeight=0,n._textureInvalidated=!1,n._texture=null,n.stencilRef=0,n.coordScale=[1,1],n._height=void 0,n.pixelRatio=1,n.resolution=0,n.rotation=0,n._source=null,n._width=void 0,n.x=0,n.y=0,n.immutable=null!==(e=o.immutable)&&void 0!==e&&e,n.requestRenderOnSourceChangedEnabled=null===(i=o.requestRenderOnSourceChangedEnabled)||void 0===i||i,n.source=a,n.requestRender=n.requestRender.bind((0,u.Z)(n)),n}return(0,o.Z)(r,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),(0,p.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){(0,c.Z)((0,h.Z)(r.prototype),"beforeRender",this).call(this,e),this.updateTexture(e)}},{key:"setSourceAsync",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var i,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,p.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort(),i=new AbortController,a=(0,f.hh)(),e.abrupt("return",((0,f.$F)(r,(function(){return i.abort()})),(0,f.$F)(i,(function(e){return a.reject(e)})),this._uploadStatus={controller:i,resolver:a},this.source=t,a.promise));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,c.Z)((0,h.Z)(r.prototype),"updateTransitionProperties",this).call(this,e,t)}},{key:"setTransform",value:function(e){var t=(0,v.g)(this.transforms.dvs),r=e.toScreenNoRotation([0,0],[this.x,this.y]),n=(0,i.Z)(r,2),a=n[0],s=n[1],o=this.resolution/this.pixelRatio/e.resolution,u=o*this.width,c=o*this.height,h=Math.PI*this.rotation/180;(0,v.h)(t,t,(0,_.f)(a,s)),(0,v.h)(t,t,(0,_.f)(u/2,c/2)),(0,v.r)(t,t,-h),(0,v.h)(t,t,(0,_.f)(-u/2,-c/2)),(0,v.k)(t,t,(0,_.f)(u,c)),(0,v.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,i,a,s,o,u,c,h,l,d,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.context,i=t.painter,this._textureInvalidated){e.next=3;break}return e.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(r)),this.source){e.next=5;break}return e.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),n=this.source,a=Z(n)?n instanceof m.Z?(0,p.yw)(n.getRenderedRasterPixels(),(function(e){return e.renderedRasterPixels})):w(n):n,e.prev=7,!(0,p.pC)(this._uploadStatus)){e.next=16;break}return s=this._uploadStatus,o=s.controller,u=s.resolver,c={signal:o.signal},h=this.width,l=this.height,d=this._texture,v=i.textureUploadManager,e.next=12,v.enqueueTextureUpdate({data:a,texture:d,width:h,height:l},c);case 12:u.resolve(),this._uploadStatus=null,e.next=17;break;case 16:this._texture.setData(a);case 17:this.ready(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),(0,f.H9)(e.t0);case 23:case"end":return e.stop()}var n}),e,this,[[7,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{dvs:(0,x.c)()}}},{key:"_createTexture",value:function(e){var t=this.immutable&&e.type===k.zO.WEBGL2;return new b.x(e,{target:y.No.TEXTURE_2D,pixelFormat:y.VI.RGBA,internalFormat:t?y.lP.RGBA8:y.VI.RGBA,dataType:y.Br.UNSIGNED_BYTE,wrapMode:y.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}]),r}(g.s)},90110:function(e,t,r){r.d(t,{c:function(){return d}});var i=r(93433),n=r(15671),a=r(43144),s=r(11752),o=r(61120),u=r(60136),c=r(29388),h=r(62272),l=r(80613),d=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;return(0,n.Z)(this,r),(e=t.apply(this,arguments))._hasCrossfade=!1,e}return(0,a.Z)(r,[{key:"requiresDedicatedFBO",get:function(){return this._hasCrossfade}},{key:"beforeRender",value:function(e){(0,s.Z)((0,o.Z)(r.prototype),"beforeRender",this).call(this,e),this._manageFade()}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[h.U.bitmap],target:function(){return t.children},drawPhase:l.jx.MAP});return[].concat((0,i.Z)((0,s.Z)((0,o.Z)(r.prototype),"prepareRenderPasses",this).call(this,e)),[n])}},{key:"_manageFade",value:function(){this.children.reduce((function(e,t){return e+(t.inFadeTransition?1:0)}),0)>=2?(this.children.forEach((function(e){return e.blendFunction="additive"})),this._hasCrossfade=!0):(this.children.forEach((function(e){return e.blendFunction="standard"})),this._hasCrossfade=!1)}}]),r}(r(64510).Z)},10978:function(e,t,r){r.d(t,{Z:function(){return s}});var i=r(15671),n=r(43144),a=r(92026),s=function(){function e(t,r,n){(0,i.Z)(this,e),this.pixelBlock=t,this.extent=r,this.originalPixelBlock=n}return(0,n.Z)(e,[{key:"width",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,a.pC)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t,r=this.pixelBlock;if(!(0,a.Wi)(r)){var i=this.filter({extent:this.extent,pixelBlock:null!==(t=this.originalPixelBlock)&&void 0!==t?t:r});if(!(0,a.Wi)(i.pixelBlock)){i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);var n=i.pixelBlock.getAsRGBA(),s=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);s.data.set(n),e.putImageData(s,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,a.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}]),e}()},9229:function(e,t,r){r.d(t,{Z:function(){return A}});var i=r(74165),n=r(37762),a=r(15861),s=r(15671),o=r(43144),u=r(60136),c=r(29388),h=r(27366),l=r(85015),d=(r(93169),r(66978)),p=r(49861),f=(r(25243),r(63780),r(69912)),v=r(65156),x=r(92975),_=r(22824),g=r(29439),m=Math.PI/180;function k(e){return e*m}function y(e,t){var r=k(t.rotation),i=Math.abs(Math.cos(r)),n=Math.abs(Math.sin(r)),a=(0,g.Z)(t.size,2),s=a[0],o=a[1];return e[0]=Math.round(o*n+s*i),e[1]=Math.round(o*i+s*n),e}function b(e,t,r,i){var n=(0,g.Z)(t,2),a=n[0],s=n[1],o=(0,g.Z)(i,2),u=o[0],c=o[1],h=.5*r;return e[0]=a-h*u,e[1]=s-h*c,e[2]=a+h*u,e[3]=s+h*c,e}var Z=r(45956),w=r(37995),R=r(73828),S=(0,v.Ue)(),C=[0,0],B=new R.Z(0,0,0,0),P=2048,M=2048,T=!1,E=!1,W=!1,I=function(e){(0,u.Z)(r,e);var t=(0,c.Z)(r);function r(e){var o;return(0,s.Z)(this,r),(o=t.call(this,e))._imagePromise=null,o.bitmaps=[],o.hidpi=W,o.imageMaxWidth=P,o.imageMaxHeight=M,o.imageRotationSupported=T,o.imageNormalizationSupported=E,o.update=(0,d.Ds)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r){var a,s,u,c,h,l,p,f,v,_,g,m,k,b,Z,w,R,S,B,P,M,T,E,W,I;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,d.k_)(r),t.stationary&&!o.destroyed){e.next=2;break}return e.abrupt("return");case 2:return u=t.state,c=(0,x.C5)(u.spatialReference),h=o.hidpi?t.pixelRatio:1,l=o.imageNormalizationSupported&&u.worldScreenWidth&&u.worldScreenWidth<u.size[0],p=null!==(a=o.imageMaxWidth)&&void 0!==a?a:0,f=null!==(s=o.imageMaxHeight)&&void 0!==s?s:0,l?(C[0]=u.worldScreenWidth,C[1]=u.size[1]):o.imageRotationSupported?(C[0]=u.size[0],C[1]=u.size[1]):y(C,u),v=Math.floor(C[0]*h)>p||Math.floor(C[1]*h)>f,_=c&&(u.extent.xmin<c.valid[0]||u.extent.xmax>c.valid[1]),g=!o.imageNormalizationSupported&&_,m=!v&&!g,k=o.imageRotationSupported?u.rotation:0,b=o.container.children.slice(),m?(Z=l?u.paddedViewState.center:u.center,o._imagePromise&&console.error("Image promise was not defined!"),o._imagePromise=o._singleExport(u,C,Z,u.resolution,k,h,r)):(w=Math.min(p,f),g&&(w=Math.min(u.worldScreenWidth,w)),o._imagePromise=o._tiledExport(u,w,h,r)),e.prev=6,e.next=9,o._imagePromise;case 9:if(e.t1=R=e.sent,e.t0=null!==e.t1,!e.t0){e.next=13;break}e.t0=void 0!==R;case 13:if(!e.t0){e.next=17;break}e.t2=R,e.next=18;break;case 17:e.t2=[];case 18:if(S=e.t2,(0,d.k_)(r),B=[],o._imagePromise=null,!o.destroyed){e.next=23;break}return e.abrupt("return");case 23:o.bitmaps=S,P=(0,n.Z)(b),e.prev=25,T=(0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=M.value,S.includes(t)||B.push(t.fadeOut().then((function(){t.remove(),t.destroy()})));case 2:case"end":return e.stop()}}),e)})),P.s();case 28:if((M=P.n()).done){e.next=32;break}return e.delegateYield(T(),"t3",30);case 30:e.next=28;break;case 32:e.next=37;break;case 34:e.prev=34,e.t4=e.catch(25),P.e(e.t4);case 37:return e.prev=37,P.f(),e.finish(37);case 40:E=(0,n.Z)(S);try{for(E.s();!(W=E.n()).done;)I=W.value,B.push(I.fadeIn())}catch(A){E.e(A)}finally{E.f()}return e.next=44,Promise.all(B);case 44:e.next=49;break;case 46:e.prev=46,e.t5=e.catch(6),o._imagePromise=null,(0,d.r9)(e.t5);case 49:case"end":return e.stop()}}),e,null,[[6,46],[25,34,37,40]])})));return function(t,r){return e.apply(this,arguments)}}(),5e3),o.updateExports=(0,d.Ds)(function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,a,s,u,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=(0,n.Z)(o.container.children),e.prev=2,u=(0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=s.value).visible&&n.stage){e.next=3;break}return e.abrupt("return",{v:void 0});case 3:r.push(t(n).then((function(){n.invalidateTexture(),n.requestRender()})));case 4:case"end":return e.stop()}}),e)})),a.s();case 5:if((s=a.n()).done){e.next=12;break}return e.delegateYield(u(),"t0",7);case 7:if("object"!==typeof(c=e.t0)){e.next=10;break}return e.abrupt("return",c.v);case 10:e.next=5;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(2),a.e(e.t1);case 17:return e.prev=17,a.f(),e.finish(17);case 20:return o._imagePromise=(0,d.as)(r).then((function(){return o._imagePromise=null})),e.next=23,o._imagePromise;case 23:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(t){return e.apply(this,arguments)}}()),o}return(0,o.Z)(r,[{key:"destroy",value:function(){this.bitmaps.forEach((function(e){return e.destroy()})),this.bitmaps=[]}},{key:"updating",get:function(){return!this.destroyed&&null!==this._imagePromise}},{key:"_export",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,s,o){var u,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchSource(t,Math.floor(r*s),Math.floor(n*s),{rotation:a,pixelRatio:s,signal:o});case 2:return u=e.sent,(0,d.k_)(o),(c=new Z.eY(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0})).x=t.xmin,c.y=t.ymax,c.resolution=t.width/r,c.rotation=a,c.pixelRatio=s,c.opacity=0,this.container.addChild(c),e.next=14,c.setSourceAsync(u,o);case 14:return(0,d.k_)(o),e.abrupt("return",c);case 16:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a,s){return e.apply(this,arguments)}}()},{key:"_singleExport",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a,s,o,u){var c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(S,n,a,r),c=(0,v.HH)(S,t.spatialReference),e.next=4,this._export(c,r[0],r[1],s,o,u);case 4:return e.t0=e.sent,e.abrupt("return",[e.t0]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,i,n,a,s,o){return e.apply(this,arguments)}}()},{key:"_tiledExport",value:function(e,t,r,i){var n=this,a=_.Z.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),s=new w.Z(a),o=s.getTileCoverage(e);if(!o)return null;var u=[];return o.forEach((function(a,o,c,h){B.set(a,o,c,0),s.getTileBounds(S,B);var l=(0,v.HH)(S,e.spatialReference);u.push(n._export(l,t,t,0,r,i).then((function(e){return 0!==h&&(B.set(a,o,c,h),s.getTileBounds(S,B),e.x=S[0],e.y=S[3]),e})))})),Promise.all(u)}}]),r}(l.Z);(0,h._)([(0,p.Cb)()],I.prototype,"_imagePromise",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"bitmaps",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"container",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"fetchSource",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"hidpi",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"imageMaxWidth",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"imageMaxHeight",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"imageRotationSupported",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"imageNormalizationSupported",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"requestUpdate",void 0),(0,h._)([(0,p.Cb)()],I.prototype,"updating",null);var A=I=(0,h._)([(0,f.j)("esri.views.2d.layers.support.ExportStrategy")],I)},13107:function(e,t,r){r.d(t,{Z:function(){return p}});var i=r(15671),n=r(43144),a=r(60136),s=r(29388),o=r(27366),u=r(32718),c=r(66978),h=r(94172),l=r(49861),d=(r(25243),r(63780),r(69912)),p=function(e){var t=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,h.on)((function(){return e.layer}),"refresh",(function(t){e.doRefresh(t.dataChanged).catch((function(t){(0,c.D_)(t)||u.Z.getLogger(e.declaredClass).error(t)}))})),"RefreshableLayerView")}}]),r}(e);return(0,o._)([(0,l.Cb)()],t.prototype,"layer",void 0),t=(0,o._)([(0,d.j)("esri.layers.mixins.RefreshableLayerView")],t)}}}]);
//# sourceMappingURL=4927.f61aa012.chunk.js.map