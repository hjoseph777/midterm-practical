!function(){"use strict";var e,r,_,t,n,i,u,c={},a={};function __webpack_require__(e){var r=a[e];if(void 0!==r)return r.exports;var _=a[e]={exports:{}},t=!0;try{c[e](_,_.exports,__webpack_require__),t=!1}finally{t&&delete a[e]}return _.exports}__webpack_require__.m=c,e=[],__webpack_require__.O=function(r,_,t,n){if(_){n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[_,t,n];return}for(var u=1/0,i=0;i<e.length;i++){for(var _=e[i][0],t=e[i][1],n=e[i][2],c=!0,a=0;a<_.length;a++)u>=n&&Object.keys(__webpack_require__.O).every(function(e){return __webpack_require__.O[e](_[a])})?_.splice(a--,1):(c=!1,n<u&&(u=n));if(c){e.splice(i--,1);var o=t()}}return o},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=function(e,r){for(var _ in r)__webpack_require__.o(r,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},__webpack_require__.f={},__webpack_require__.e=function(e){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(r,_){return __webpack_require__.f[_](e,r),r},[]))},__webpack_require__.u=function(e){},__webpack_require__.miniCssF=function(e){return"static/css/"+({405:"fa4ec53c4d21b116",888:"10016292c8945e1c"})[e]+".css"},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r={},_="_N_E:",__webpack_require__.l=function(e,t,n,i){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var u,c,a=document.getElementsByTagName("script"),o=0;o<a.length;o++){var p=a[o];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==_+n){u=p;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,__webpack_require__.nc&&u.setAttribute("nonce",__webpack_require__.nc),u.setAttribute("data-webpack",_+n),u.src=__webpack_require__.tu(e)),r[e]=[t];var onScriptComplete=function(_,t){u.onerror=u.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach(function(e){return e(t)}),_)return _(t)},f=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=onScriptComplete.bind(null,u.onerror),u.onload=onScriptComplete.bind(null,u.onload),c&&document.head.appendChild(u)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.tt=function(){return void 0===t&&(t={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("nextjs#bundler",t))),t},__webpack_require__.tu=function(e){return __webpack_require__.tt().createScriptURL(e)},__webpack_require__.p="/midterm-practical/_next/",n={272:0},__webpack_require__.f.j=function(e,r){var _=__webpack_require__.o(n,e)?n[e]:void 0;if(0!==_){if(_)r.push(_[2]);else if(272!=e){var t=new Promise(function(r,t){_=n[e]=[r,t]});r.push(_[2]=t);var i=__webpack_require__.p+__webpack_require__.u(e),u=Error();__webpack_require__.l(i,function(r){if(__webpack_require__.o(n,e)&&(0!==(_=n[e])&&(n[e]=void 0),_)){var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+t+": "+i+")",u.name="ChunkLoadError",u.type=t,u.request=i,_[1](u)}},"chunk-"+e,e)}else n[e]=0}},__webpack_require__.O.j=function(e){return 0===n[e]},i=function(e,r){var _,t,i=r[0],u=r[1],c=r[2],a=0;if(i.some(function(e){return 0!==n[e]})){for(_ in u)__webpack_require__.o(u,_)&&(__webpack_require__.m[_]=u[_]);if(c)var o=c(__webpack_require__)}for(e&&e(r);a<i.length;a++)t=i[a],__webpack_require__.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return __webpack_require__.O(o)},(u=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(i.bind(null,0)),u.push=i.bind(null,u.push.bind(u))}();