function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,s=a||f||Function("return this")(),l=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return s.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?c(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,c,a,f=0,s=!1,l=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,f=e,u=t.apply(i,n)}function h(t){return f=t,c=setTimeout(T,e),s?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||l&&t-f>=i}function T(){var t=y();if(j(t))return k(t);c=setTimeout(T,function(t){var n=e-(t-a);return l?p(n,i-(t-f)):n}(t))}function k(t){return c=void 0,b&&o?g(t):(o=r=void 0,u)}function $(){var t=y(),n=j(t);if(o=arguments,r=this,a=t,n){if(void 0===c)return h(a);if(l)return c=setTimeout(T,e),g(a)}return void 0===c&&(c=setTimeout(T,e)),u}return e=m(e)||0,v(n)&&(s=!!n.leading,i=(l="maxWait"in n)?d(m(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b),$.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=r=c=void 0},$.flush=function(){return void 0===c?u:k(y())},$};const b=document.querySelector(".calendar-table");fetch("https://api.polygon.io/v1/marketstatus/upcoming?apiKey=UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP").then((t=>t.json())).then((t=>function(t){b.innerHTML=t.map((({date:t,exchange:e,name:n,status:o})=>`<tr>\n                    <td>${t}</td>\n                    <td>${e}</td>\n                    <td>${n}</td>\n                    <td>${o}</td>\n                </tr>`)).join("")}(t))).catch(console.log);const g=document.querySelector("#stock-list"),h=(document.querySelector(".button"),document.querySelector(".stock-list"));document.querySelector(".form");g.addEventListener("input",t(e)((function(t){t.preventDefault();return(e=t.target.value.toUpperCase(),fetch(`https://api.polygon.io/v2/aggs/ticker/${e}/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP`).then((t=>t.json()))).then((t=>{if(0!==t.queryCount)return function(t){return console.log(t),h.innerHTML=function(t){const{ticker:e}=t;return`<li class="searced__stock list"><p>${e}</p></li>`}(t)}(t)}));var e}),1e3));
//# sourceMappingURL=holidays.e4f727dd.js.map
