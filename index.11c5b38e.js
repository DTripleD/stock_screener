!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=f||l||Function("return this")(),s=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return d.Date.now()};function m(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==s.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var f=u.test(n);return f||c.test(n)?a(n.slice(2),f?2:8):i.test(n)?NaN:+n}function g(t){return fetch("https://api.polygon.io/v2/aggs/ticker/".concat(t,"/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=").concat("UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP")).then((function(t){return t.json()}))}n=function(t,n,e){var o,r,i,u,c,a,f=0,l=!1,d=!1,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,i=r;return o=r=void 0,f=n,u=t.apply(i,e)}function h(t){return f=t,c=setTimeout(T,n),l?g(t):u}function j(t){var e=t-a;return void 0===a||e>=n||e<0||d&&t-f>=i}function T(){var t=y();if(j(t))return k(t);c=setTimeout(T,function(t){var e=n-(t-a);return d?v(e,i-(t-f)):e}(t))}function k(t){return c=void 0,s&&o?g(t):(o=r=void 0,u)}function w(){var t=y(),e=j(t);if(o=arguments,r=this,a=t,e){if(void 0===c)return h(a);if(d)return c=setTimeout(T,n),g(a)}return void 0===c&&(c=setTimeout(T,n)),u}return n=b(n)||0,m(e)&&(l=!!e.leading,i=(d="maxWait"in e)?p(b(e.maxWait)||0,n):i,s="trailing"in e?!!e.trailing:s),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=r=c=void 0},w.flush=function(){return void 0===c?u:k(y())},w};var h=document.querySelector("#stock-list"),j=(document.querySelector(".button"),document.querySelector(".stock-list")),T=(document.querySelector(".form"),document.querySelector(".calendar-list"),document.querySelector(".calendar-table"));h.addEventListener("input",t(n)((function(t){return t.preventDefault(),g(t.target.value.toUpperCase()).then((function(t){if(0!==t.queryCount)return function(t){return console.log(t),j.innerHTML=function(t){var n=t.ticker;return"<li><p>".concat(n,"</p></li>")}(t)}(t)}))}),1e3)),fetch("https://api.polygon.io/v1/marketstatus/upcoming?apiKey=".concat("UCdhsV2m_RTmkwybpkta6ZvaKFF7ZTpP")).then((function(t){return t.json()})).then((function(t){return function(t){T.innerHTML=t.map((function(t){var n=t.date,e=t.exchange,o=t.name,r=t.status;return"<tr>\n                    <td>".concat(n,"</td>\n                    <td>").concat(e,"</td>\n                    <td>").concat(o,"</td>\n                    <td>").concat(r,"</td>\n                </tr>")})).join("")}(t)})).catch(console.log)}();
//# sourceMappingURL=index.11c5b38e.js.map
