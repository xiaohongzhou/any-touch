(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4afe8d19"],{"159b":function(t,n,e){var r=e("da84"),i=e("fdbc"),o=e("17c2"),a=e("9112");for(var u in i){var c=r[u],s=c&&c.prototype;if(s&&s.forEach!==o)try{a(s,"forEach",o)}catch(p){s.forEach=o}}},2532:function(t,n,e){"use strict";var r=e("23e7"),i=e("5a34"),o=e("1d80"),a=e("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"2e66":function(t,n,e){},"44e7":function(t,n,e){var r=e("861d"),i=e("c6b6"),o=e("b622"),a=o("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[a])?!!n:"RegExp"==i(t))}},"5a34":function(t,n,e){var r=e("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"88cc":function(t,n,e){"use strict";var r=e("2e66"),i=e.n(r);i.a},ab13:function(t,n,e){var r=e("b622"),i=r("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[i]=!1,"/./"[t](n)}catch(r){}}return!1}},bc42:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("section",{ref:"child"},[t._v("Child")])])},i=[],o=(e("a623"),e("4160"),e("a630"),e("d81d"),e("13d5"),e("a434"),e("b0c0"),e("a9e3"),e("aff5"),e("dca8"),e("d3b7"),e("ac1f"),e("3ca3"),e("5319"),e("159b"),e("ddb0"),function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},o(t,n)});function a(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var u=function(){return u=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e],n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},u.apply(this,arguments)};function c(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]])}return e}function s(t){var n="function"===typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(t,n){var e="function"===typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,i,o=e.call(t),a=[];try{while((void 0===n||n-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(u){i={error:u}}finally{try{r&&!r.done&&(e=o["return"])&&e.call(o)}finally{if(i)throw i.error}}return a}e("c740");var f=function(){function t(){this.listenersMap={}}return t.prototype.target=function(t){var n=this;return{on:function(e,r){n.on(e,r,{target:t})}}},t.prototype.on=function(t,n,e){var r=(void 0===e?{}:e).target;void 0===this.listenersMap[t]&&(this.listenersMap[t]=[]),void 0!==r&&(n.target=r),this.listenersMap[t].push(n)},t.prototype.off=function(t,n){var e=this.listenersMap[t];if(void 0!==e)if(void 0===n)delete this.listenersMap[t];else{var r=e.findIndex((function(t){return t===n}));e.splice(r,1)}},t.prototype.emit=function(t,n,e){var r,i;void 0===e&&(e=function(){return!0});var o=this.listenersMap[t];if(void 0!==o&&0<o.length)try{for(var a=s(o),u=a.next();!u.done;u=a.next()){var c=u.value,p=c.target;e({target:p})&&c(n)}}catch(f){r={error:f}}finally{try{u&&!u.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}},t.prototype.destroy=function(){this.listenersMap={}},t}(),l=f,d=(e("25f0"),Object.prototype.toString);function v(t){return"[object RegExp]"===d.call(t)}function h(t){return"[object Function]"===d.call(t)}var y="clientX",g="clientY",m=16,b="start",M="move",E="cancel",w="end",x="left",z="right",O="up",T="down",P="none",L="touch",I="mouse",_=L+b,j=L+M,X=L+w,Y=L+E,S=I+O,C=I+M,D=I+T,F="on"+_ in window,A="p",R=b,k=M,G=w,N="r",V="f",H=E;var U=function(){function t(){}return t}(),$=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return a(n,t),n.prototype.load=function(t){var n=[],e=Array.from(t.touches).map((function(t){var e=t.clientX,r=t.clientY,i=t.target;return n.push(i),{clientX:e,clientY:r,target:i}})),r=Array.from(t.changedTouches).map((function(t){var n=t.clientX,e=t.clientY,r=t.target;return{clientX:n,clientY:e,target:r}}));return{inputType:t.type.replace("touch",""),changedPoints:r,points:e,nativeEvent:t,target:t.target,targets:n}},n}(U),q=function(t){function n(){var n=t.call(this)||this;return n.target=null,n.isPressed=!1,n}return a(n,t),n.prototype.load=function(t){var n,e=t.clientX,r=t.clientY,i=t.type,o=t.button,a=t.target,u=[{clientX:e,clientY:r,target:a}];D===i&&0===o?(this.target=a,this.isPressed=!0,n=b):this.isPressed&&(C===i?n=M:S===i&&(u=[],n=w,this.isPressed=!1));var c=this.prevPoints||[{clientX:e,clientY:r,target:a}];if(this.prevPoints=[{clientX:e,clientY:r,target:a}],void 0!==n)return{inputType:n,changedPoints:c,points:u,target:this.target,targets:[this.target],nativeEvent:t}},n}(U),B=function(){function t(){var t=F?$:q;this.adapter=new t,this.id=0}return t.prototype.transform=function(t){this.prevInput=this.activeInput;var n=this.adapter.load(t);if(void 0!==n){var e=Number.MAX_SAFE_INTEGER>this.id?++this.id:1,r=u(u({},n),{id:e}),i=K(r);this.activeInput=i;var o=i.isStart,a=i.pointLength;return o&&(this.startInput=i,this.prevInput=void 0,this.startMultiInput=1<a?i:void 0),u(u({},i),{prevInput:this.prevInput,startMultiInput:this.startMultiInput,startInput:this.startInput})}},t}();function J(t){var n=t.length;if(0<n){if(1===n){var e=t[0],r=e.clientX,i=e.clientY;return{x:Math.round(r),y:Math.round(i)}}var o=t.reduce((function(t,n){return t.x+=n[y],t.y+=n[g],t}),{x:0,y:0});return{x:Math.round(o.x/n),y:Math.round(o.y/n)}}}function K(t){var n=t.inputType,e=t.points,r=t.changedPoints,i=t.nativeEvent,o=e.length,a=b===n,c=w===n&&0===o||E===n,s=performance.now(),p=J(e)||J(r),f=p.x,l=p.y,d=i.currentTarget;return u(u({},t),{x:f,y:l,timestamp:s,isStart:a,isEnd:c,pointLength:o,currentTarget:d,getOffset:function(t){void 0===t&&(t=d);var n=t.getBoundingClientRect();return{x:f-Math.round(n.left),y:l-Math.round(n.top)}}})}function Q(t,n,e){n.target,n.currentTarget;var r,i=n.type,o=c(n,["target","currentTarget","type"]);return"createEvent"in document?(r=document.createEvent("HTMLEvents"),r.initEvent(i,null===e||void 0===e?void 0:e.bubbles,null===e||void 0===e?void 0:e.cancelable)):r=new Event(i,e),Object.assign(r,o,{match:function(){return n.targets.every((function(t){return r.currentTarget.contains(t)}))}}),t.dispatchEvent(r)}function W(t,n){if(!n.isPreventDefault)return!1;var e=!0;if(null!==t.target){var r=n.preventDefaultExclude;if(v(r)){if("tagName"in t.target){var i=t.target.tagName;e=!r.test(i)}}else h(r)&&(e=!r(t))}return e}var Z=[_,j,X,Y];function tt(t,n,e){return F?(Z.forEach((function(r){t.addEventListener(r,n,e)})),function(){Z.forEach((function(e){t.removeEventListener(e,n)}))}):(t.addEventListener(D,n,e),window.addEventListener(C,n,e),window.addEventListener(S,n,e),function(){t.removeEventListener(D,n),window.removeEventListener(C,n),window.removeEventListener(S,n)})}function nt(t,n,e){var r=null===e||void 0===e?void 0:e.name;if(void 0===r||void 0===t.recognizerMap[r]){var i=new n(e);t.recognizerMap[i.name]=i,i.recognizerMap=t.recognizerMap,t.recognizers.push(t.recognizerMap[i.name])}}function et(t,n){var e,r;if(void 0===n)t.recognizers=[],t.recognizerMap={};else try{for(var i=s(t.recognizers.entries()),o=i.next();!o.done;o=i.next()){var a=p(o.value,2),u=a[0],c=a[1];if(n===c.options.name){t.recognizers.splice(u,1),delete t.recognizerMap[n];break}}}catch(f){e={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(e)throw e.error}}}function rt(t,n){var e=n.type,r=n.target,i=n.targets;t.emit(e,n,(function(t){if(void 0!==(null===t||void 0===t?void 0:t.target)){var n=t.target;return i.every((function(t){return n.contains(t)}))}return!0}));var o="at:after";t.emit(o,n),t.options.domEvents&&void 0!==t.el&&null!==r&&(Q(r,n,t.options.domEvents),Q(r,u(u({},n),{type:o}),t.options.domEvents))}var it={domEvents:{bubbles:!0,cancelable:!0},isPreventDefault:!0,preventDefaultExclude:/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/},ot=function(t){function n(e,r){var i=t.call(this)||this;if(i.recognizerMap={},i.recognizers=[],i.cacheComputedFunctionGroup=Object.create(null),i.el=e,i.input=new B,i.options=u(u({},it),r),i.recognizerMap=n.recognizerMap,i.recognizers=n.recognizers,void 0!==e){e.style.webkitTapHighlightColor="rgba(0,0,0,0)";var o=!1;try{var a={};Object.defineProperty(a,"passive",{get:function(){o=!0}}),window.addEventListener("_",(function(){}),a)}catch(c){}i.on("unbind",tt(e,i.catchEvent.bind(i),!(i.options.isPreventDefault||!o)&&{passive:!0}))}return i}return a(n,t),n.prototype.use=function(t,n){nt(this,t,n)},n.prototype.removeUse=function(t){et(this,t)},n.prototype.catchEvent=function(t){var n,e,r=this;W(t,this.options)&&t.preventDefault();var i=this.input.transform(t);if(void 0!==i){var o="at:"+L,a=o+i.inputType;this.emit(o,i),this.emit(a,i);var c=this.options.domEvents;if(!1!==c){var p=t.target;null!==p&&(Q(p,u(u({},i),{type:o}),c),Q(p,u(u({},i),{type:a}),c))}var f=Object.create(null),l=function(t){if(t.disabled)return"continue";t.computedGroup=f,t.computeFunctionMap=d.cacheComputedFunctionGroup,t.recognize(i,(function(n,e){var o=u(u(u({},i),e),{type:n,baseType:t.name});Object.freeze(o),void 0===r.beforeEachHook?rt(r,o):r.beforeEachHook(t,(function(){rt(r,o)}))})),f=t.computedGroup,d.cacheComputedFunctionGroup=t.computeFunctionMap},d=this;try{for(var v=s(this.recognizers),h=v.next();!h.done;h=v.next()){var y=h.value;l(y)}}catch(g){n={error:g}}finally{try{h&&!h.done&&(e=v.return)&&e.call(v)}finally{if(n)throw n.error}}}},n.prototype.beforeEach=function(t){this.beforeEachHook=t},n.prototype.get=function(t){return this.recognizerMap[t]},n.prototype.set=function(t){this.options=u(u({},this.options),t)},n.prototype.destroy=function(){this.emit("unbind"),this.listenersMap={}},n.version="0.7.2",n.recognizers=[],n.recognizerMap={},n.use=function(t,e){nt(n,t,e)},n.removeUse=function(t){et(n,t)},n}(l),at=ot,ut=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},ct=function(t){return t/Math.PI*180},st=function(t,n){return t===n?P:Math.abs(t)>Math.abs(n)?0<t?z:x:0<n?T:O};function pt(){return function(t){var n=t.prevInput,e=0,r=0,i=0;if(void 0!==n&&(e=t.x-n.x,r=t.y-n.y,0!==e||0!==r)){var o=Math.sqrt(Math.pow(e,2)+Math.pow(r,2));i=Math.round(ct(Math.acos(Math.abs(e)/o)))}return{deltaX:e,deltaY:r,deltaXYAngle:i}}}function ft(){var t=0,n=0,e=0,r=0,i=0,o=P;return function(a){var u=a.inputType,c=a.startInput;return b===u?(t=0,n=0,e=0,r=0,i=0,o=P):M===u&&(t=Math.round(a.points[0][y]-c.points[0][y]),n=Math.round(a.points[0][g]-c.points[0][g]),e=Math.abs(t),r=Math.abs(n),i=Math.round(ut({x:e,y:r})),o=st(t,n)),{displacementX:t,displacementY:n,distanceX:e,distanceY:r,distance:i,overallDirection:o}}}function lt(){var t=0;return function(n){var e=n.inputType;return b===e&&(t=n.pointLength),{maxPointLength:t}}}function dt(){var t,n,e=0,r=0,i=0,o=0;return function(a){if(void 0!==a){var u=a.inputType;n=n||a.startInput;var c=a.timestamp-n.timestamp;if(M===u&&m<c){var s=a.x-n.x,p=a.y-n.y;i=Math.round(s/c*100)/100,o=Math.round(p/c*100)/100,e=Math.abs(i),r=Math.abs(o),t=st(s,p)||t,n=a}}return{velocityX:e,velocityY:r,speedX:i,speedY:o,direction:t}}}function vt(t){return{x:t.points[1][y]-t.points[0][y],y:t.points[1][g]-t.points[0][g]}}function ht(){return function(t){var n=t.prevInput,e=t.startMultiInput;if(void 0!==e&&void 0!==n&&t.id!==e.id&&1<t.pointLength)return{startV:vt(e),prevV:vt(n),activeV:vt(t)}}}pt._id="ComputeDeltaXY",ft._id="computeDistance",lt._id="computeMaxLength",dt._id="ComputeVAndDir",ht._id="ComputeVectorForMutli";e("caad"),e("c975"),e("2532");function yt(t){-1!==[G,H,N,V].indexOf(t.status)&&(t.status=A)}function gt(t,n,e){var r,i,o,a,u,c,s,p={1:(r={},r[A]=(i={},i[M]=R,i),r[R]=(o={},o[M]=k,o[w]=G,o[E]=H,o),r[k]=(a={},a[M]=k,a[w]=G,a[E]=H,a),r),0:(u={},u[R]=(c={},c[M]=H,c[w]=G,c[E]=H,c),u[k]=(s={},s[b]=V,s[M]=H,s[w]=G,s[E]=H,s),u)};return void 0!==p[Number(t)][n]&&p[Number(t)][n][e]||n}function mt(t,n,e){var r=t.test(n);yt(t);var i=n.inputType;t.status=gt(r,t.status,i);var o=t.computed;t.isRecognized=[R,k].includes(t.status);var a=t.name,u=t.status,c=t.isRecognized;return c&&e(a,o),(c||[G,H].includes(t.status))&&e(a+u,o),r}var bt=function(){function t(t){this.disabled=!1,this.status=A,this.isRecognized=!1,this.recognizerMap={},this.computedGroup={},this.computed={},this.computeFunctionMap={},this.options=t,this.name=this.options.name}return t.prototype.set=function(t){return void 0!==t&&(this.options=u(u({},this.options),t)),this},t.prototype.isValidPointLength=function(t){return 0===this.options.pointLength||this.options.pointLength===t},t.prototype.compute=function(t,n){var e,r,i=Object.create(null);try{for(var o=s(t),a=o.next();!a.done;a=o.next()){var u=a.value,c=u._id,p=this,f=p.computedGroup,l=p.computeFunctionMap;for(var d in void 0===l[c]&&(l[c]=u()),f[c]=f[c]||l[c](n),f[c])i[d]=f[c][d]}}catch(v){e={error:v}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}return i},t}(),Mt=bt,Et={name:"pan",threshold:10,pointLength:1},wt=function(t){function n(n){return t.call(this,u(u({},Et),n))||this}return a(n,t),n.prototype.test=function(t){var n=t.pointLength,e=this.computed.distance;return(this.isRecognized||this.options.threshold<=e)&&this.isValidPointLength(n)},n.prototype.recognize=function(t,n){this.computed=this.compute([dt,ft,pt],t);var e=void 0!==this.computed.direction&&mt(this,t,n);e&&n(this.options.name+this.computed.direction,this.computed)},n}(Mt),xt=wt;at.use(xt);var zt={name:"Map",data:function(){return{}},mounted:function(){var t=new at(this.$refs.child);t.on("pandown",(function(t){console.log("pandown")}))},methods:{onPan:function(t){}}},Ot=zt,Tt=(e("88cc"),e("2877")),Pt=Object(Tt["a"])(Ot,r,i,!1,null,null,null);n["default"]=Pt.exports}}]);
//# sourceMappingURL=chunk-4afe8d19.784ecc14.js.map