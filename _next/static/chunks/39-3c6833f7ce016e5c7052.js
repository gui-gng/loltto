(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39],{14:function(e,t,n){"use strict";n.d(t,{AK:function(){return se},eh:function(){return Y},Hf:function(){return fe},xf:function(){return oe}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2),u=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,f=new Set;function s(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of f)e();f.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s));"undefined"!==typeof window&&window.visualViewport;new Map;function d(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function p(){return d(/^Mac/)}function l(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const y=a.createContext(null);y.displayName="PressResponderContext";let v=null,h=new Set,m=!1,b=!1;function w(e,t){for(let n of h)n(e,t)}function g(e){b=!0,function(e){return!(e.metaKey||!p()&&e.altKey||e.ctrlKey)}(e)&&(v="keyboard",w("keyboard",e))}function O(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,w("pointer",e))}function j(e){l(e)&&(b=!0,v="virtual")}function x(e){e.target!==window&&e.target!==document&&(b||(v="virtual",w("virtual",e)),b=!1)}function S(){b=!1}function E(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",g,!0),document.addEventListener("keyup",g,!0),document.addEventListener("click",j,!0),window.addEventListener("focus",x,!0),window.addEventListener("blur",S,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),m=!0}"undefined"!==typeof document&&("loading"!==document.readyState?E():document.addEventListener("DOMContentLoaded",E));new Set;const A=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];A.join(":not([hidden]),");A.push('[tabindex]:not([tabindex="-1"]):not([disabled])');A.join(':not([hidden]):not([tabindex="-1"]),');function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function k(e){return null!=e}function L(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in e&&(t[u]=e[u])}return t}function I(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];r.includes(u)||(t[u]=e[u])}return t}function T(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=P(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var H="undefined"!==typeof window,N=Symbol("NONE"),D=H?a.useLayoutEffect:a.useEffect;function $(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function R(e){for(var t=M({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,f=Object.keys(u);c<f.length;c++){var s=f[c];t[s]=W(s,t[s],u[s])}return t}function U(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=P(t);!(n=r()).done;){U(n.value,e)}}}function W(e,t,n){return t===N||n===N?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?M({},t,n):"ref"===e?z(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function B(e,t,n,r){var o=t.children,a=_(t,["children"]),i=V(o,null!=n&&n);return $(e,M({ref:r},a),i)}function F(e,t){var n=e.as,r=e.hasGap;return B(null!=n?n:"div",_(e,["as","hasGap"]),r,t)}var G=(0,a.forwardRef)(F),J=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=_(t,["hasGap"]);return B(e,o,r,n)}))},K=Object.assign(G,{div:J("div"),a:J("a"),button:J("button"),h1:J("h1"),h2:J("h2"),h3:J("h3"),h4:J("h4"),h5:J("h5"),h6:J("h6"),label:J("label"),form:J("form"),section:J("section"),head:J("head"),main:J("main"),nav:J("nav")});function V(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function Z(e,t,n,r){var o=te(e),i=ee(n,o.props);if("render"===o.type)return o.render(i,t);var u=t;"as"===o.type&&o.as&&(t===K?i.as=o.as:u=o.as);var c=i.children;o.wrapChildren&&(c=o.wrapChildren(function(e){return Array.isArray(e)?a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}(c))),r&&(c=V(c,!0));var f=$(u,i,c);return o.wrap&&(f=o.wrap(f)),f}var q=new Map;function Y(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=Q.apply(void 0,[e,t].concat(i));if(n&&q.set(n,c),r){var f,s=o?null!=(f=q.get(o))?f:null:c;return q.clear(),s}return c}function Q(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return Z(r,e,R.apply(void 0,[t,0===u.length?{}:{children:u}].concat(a)),o)}var X=Symbol("UNSET");function ee(e,t){if(!t)return e;for(var n=M({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],u=t[a];u===X?delete n[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(u=N),n[a]=W(a,i,u))}return n}function te(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?M({},e,{props:e.props||{},type:"as"}):"render"in e?M({},e,{type:"render"}):"props"in e?M({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?M({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function ne(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=re(e[a],t[a])}return n}function re(e,t){var n,r;if(!e)return t;if(!t)return e;var o=te(e),a=te(t),i=T.apply(void 0,[o.wrap,a.wrap].filter(k)),u=T.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(k)),c=ee(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var f=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return M({props:c,wrap:i,wrapChildren:u},f?{as:f}:{})}function oe(e,t){var n,r,o,a,i,u,c,f,s=t.name,d=t.descendantNames,p=t.internalVariantPropNames,l=t.internalArgPropNames,y=["variants","args","overrides"],v=(a=I.apply(void 0,[L.apply(void 0,[e].concat(p))].concat(y)),i=null!=(n=e.variants)?n:{},M({},a,i)),h=(u=I.apply(void 0,[L.apply(void 0,[e].concat(l))].concat(y)),c=null!=(r=e.args)?r:{},M({},u,c)),m=ne(I.apply(void 0,[L.apply(void 0,[e].concat(d))].concat(l,p,y)),null!=(o=e.overrides)?o:{}),b=I.apply(void 0,[e,"variants","args","overrides"].concat(d,p,l));Object.keys(b).length>0&&(m=ne(m,((f={})[s]={props:b},f)));return{variants:v,args:h,overrides:m}}var ae=[],ie={};function ue(){return H?Object.entries(ie).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ce=void 0;function fe(e,t){return Object.assign(ie,t),function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(ce||[]);return D((function(){var e=function(){ce&&n.current.join("")!==ce.join("")&&(n.current=ce,t({}))};return ae.push(e),void 0===ce&&(ce=ue()),e(),function(){ae.splice(ae.indexOf(e),1)}}),[]),e?ce||[]:ce?ce[ce.length-1]:void 0}}H&&window.addEventListener("resize",(function(){var e=ue();ce&&e.join("")===ce.join("")||(ce=e,u.unstable_batchedUpdates((function(){return ae.forEach((function(e){return e()}))})))}));var se=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},18:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),o=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},9489:function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},8:function(e){function t(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},110:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d}});var r=n(7294),o=n(9610),a=n(8840);const i={Homepage:o.ZP},u={Screen:{component:a.wd,isContext:!Boolean("ScreenVariantProvider")}},c={Homepage:{a1YB7yhggR6a8UDUfJzSPJ:o.ZP}},f={Screen:{a1YB7yhggR6a8UDUfJzSPJ:{component:a.wd,isContext:!Boolean(void 0)}}};function s(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(u[e]){const{component:t,isContext:r}=u[e];return[r?t.Provider:t,n]}if(!f[e])throw new Error(`The provider ${e} could not be found.`);if(!f[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(f[e])}`);const{component:r,isContext:o}=f[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function d({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(i[t])return i[t];if(!c[t])throw new Error(`The component ${t} could not be found.`);if(!c[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(c[t])}`);return c[t][e]}(e,t);return s(r.createElement(a,n),e,o)}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),f=n(4287),s=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,f=y.length;c<f;c++){var s=y[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=o.props[s],p=r[s]||new Set;"name"===s&&i||!p.has(d)?(p.add(d),r[s]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function h(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(f.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),u=n(8585),c=n(9754);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),d=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},1859:function(){},9008:function(e,t,n){e.exports=n(7947)}}]);