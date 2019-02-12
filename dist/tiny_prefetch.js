var TinyPrefetch=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}Object.defineProperty(e,"__esModule",{value:!0}),n(r(1)),n(r(2)),n(r(3))},function(t,e,r){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.queryString=t}return t.prototype.asMap=function(){return new Map(this.queryString.split("&").map(function(t){return t.split("=")}))},t.prototype.equals=function(t){return this.queryString===t.queryString},t}();e.Query=i;var u=function(t){function e(e){return void 0===e&&(e=window.location),t.call(this,e.hash.split("?")[1])||this}return o(e,t),e}(i);e.HashQuery=u;var s=function(t){function e(e){return void 0===e&&(e=window.location),t.call(this,e.search.substr(1))||this}return o(e,t),e}(i);e.SearchQuery=s},function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function u(t){try{c(n.next(t))}catch(t){i(t)}}function s(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(u,s)}c((n=n.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var r,n,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,n=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,r,n){void 0===r&&(r=""),void 0===n&&(n=window.fetch.bind(window)),this.url=t,this.headers=e,this.errorMessage=r,this._fetch=n,this._results=this.fetch()}return t.prototype.fetch=function(){return n(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this._fetch(this.url,{mode:"cors",headers:this.headers})];case 1:return[2,t.sent().text()];case 2:return t.sent(),[2,this.errorMessage];case 3:return[2]}})})},t.prototype.toPromise=function(){return this._results},t}();e.Url=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){void 0===t&&(t=[]),this._results=new Map,this._results=new Map(t.map(function(t){return[t.url,t.toPromise()]}))}return t.prototype.get=function(t){return this._results.get(t)},t.prototype.has=function(t){return this._results.has(t)},Object.defineProperty(t.prototype,Symbol.toStringTag,{get:function(){return this._results[Symbol.toStringTag]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._results.size},enumerable:!0,configurable:!0}),t.prototype[Symbol.iterator]=function(){return this._results[Symbol.iterator]()},t.prototype.clear=function(){this._results.clear()},t.prototype.delete=function(t){return this._results.delete(t)},t.prototype.entries=function(){return this._results.entries()},t.prototype.forEach=function(t,e){this._results.forEach(t)},t.prototype.keys=function(){return this._results.keys()},t.prototype.set=function(t,e){return this._results.set(t,e.toPromise()),this},t.prototype.values=function(){return this._results.values()},t}();e.Urls=n}]);