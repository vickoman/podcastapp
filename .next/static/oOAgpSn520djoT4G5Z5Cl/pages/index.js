(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,t,r){e.exports=r(244)},15:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(45),o=r.n(n);function i(e){return o()(e,{lowercase:!0}).replace(/[^\w\-]+/g,"")}},242:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(243),{page:e.exports.default}})},243:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return g});var n=r(18),o=r.n(n),i=r(2),a=r.n(i),s=r(0),u=r.n(s),c=(r(89),r(10),r(14)),l=r(46),f=r(124),p=r.n(f);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,m(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,u.a.Component),r=t,n=[{key:"render",value:function(){var e=this.props,t=e.channels,r=e.statusCode;return 200!==r?u.a.createElement(p.a,{statusCode:r}):u.a.createElement(c.a,{title:"VCK PODCAST"},u.a.createElement(l.a,{channels:t}),u.a.createElement(a.a,{styleId:"322805263",css:["body{margin:0;font-family:system-ui;background:white;}"]}))}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var r,n,i,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.res,e.prev=1,e.next=4,fetch("https://api.audioboom.com/channels/recommended");case 4:return n=e.sent,e.next=7,n.json();case 7:return i=e.sent,a=i.body,e.abrupt("return",{channels:a,statusCode:200});case 13:e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(1),r.statusCode=503,e.abrupt("return",{channels:null,statusCode:503});case 19:case"end":return e.stop()}},e,this,[[1,15]])}),function(){var t=this,r=arguments;return new Promise(function(n,o){var i=e.apply(t,r);function a(e){h(i,n,o,a,s,"next",e)}function s(e){h(i,n,o,a,s,"throw",e)}a(void 0)})});return function(e){return t.apply(this,arguments)}}()}],n&&y(r.prototype,n),i&&y(r,i),t}()},244:function(e,t,r){"use strict";var n=r(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(8)),i=n(r(9)),a=n(r(21)),s=n(r(22)),u=n(r(23)),c=n(r(0)),l=(n(r(35)),n(r(245))),f=n(r(122)),p=function(e){function t(){return(0,o.default)(this,t),(0,a.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":l.default[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:d.error},c.default.createElement(f.default,null,c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:d.h1},e):null,c.default.createElement("div",{style:d.desc},c.default.createElement("h2",{style:d.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,r=e.err;return{statusCode:t?t.statusCode:r?r.statusCode:null}}}]),t}(c.default.Component);t.default=p;var d={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},245:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},30:function(e,t,r){var n=r(87);e.exports=n().add("index").add("channel","/:slug.:id","channel").add("podcast","/:slugChannel.:idChannel/:slug.:id","podcast")},45:function(e,t,r){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,r){if("string"!=typeof t)throw new Error("slugify: string argument expected");r="string"==typeof r?{replacement:r}:r||{};var n=t.split("").reduce(function(t,n){return t+(e[n]||n).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,r.replacement||"-");return r.lower?n.toLowerCase():n}return t.extend=function(t){for(var r in t)e[r]=t[r]},t},e.exports=n(),e.exports.default=n()},46:function(e,t,r){"use strict";r.d(t,"a",function(){return h});var n=r(2),o=r.n(n),i=r(0),a=r.n(i),s=r(30),u=r(15);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,a.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.channels;return a.a.createElement("div",{className:"jsx-3281768643 channels"},e.map(function(e){return a.a.createElement(s.Link,{route:"channel",params:{slug:Object(u.a)(e.title),id:e.id},prefetch:!0},a.a.createElement("a",{className:"jsx-3281768643 channel"},a.a.createElement("img",{src:e.urls.logo_image.original,alt:"",className:"jsx-3281768643"}),a.a.createElement("h2",{className:"jsx-3281768643"},e.title)))}),a.a.createElement(o.a,{styleId:"3281768643",css:[".channels.jsx-3281768643{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}","a.channel.jsx-3281768643{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}",".channel.jsx-3281768643 img.jsx-3281768643{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}",".channel.jsx-3281768643{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}","h2.jsx-3281768643{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]}))}}])&&l(r.prototype,n),i&&l(r,i),t}()},87:function(e,t,r){"use strict";var n=u(r(88)),o=u(r(0)),i=r(58),a=u(r(10)),s=u(r(36));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}e.exports=function(e){return new h(e)};var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.Link,n=void 0===r?a.default:r,o=t.Router,i=void 0===o?s.default:o;f(this,e),this.routes=[],this.Link=this.getLink(n),this.Router=this.getRouter(i)}return d(e,[{key:"add",value:function(e,t,r){var n;if(e instanceof Object?e=(n=e).name:("/"===e[0]&&(r=t,t=e,e=null),n={name:e,pattern:t,page:r}),this.findByName(e))throw new Error('Route "'.concat(e,'" already exists'));return this.routes.push(new y(n)),this}},{key:"findByName",value:function(e){if(e)return this.routes.filter(function(t){return t.name===e})[0]}},{key:"match",value:function(e){var t=(0,i.parse)(e,!0),r=t.pathname,n=t.query;return this.routes.reduce(function(e,t){if(e.route)return e;var o=t.match(r);return o?c({},e,{route:t,params:o,query:c({},n,o)}):e},{query:n,parsedUrl:t})}},{key:"findAndGetUrls",value:function(e,t){var r=this.findByName(e);if(r)return{route:r,urls:r.getUrls(t),byName:!0};var n=this.match(e),o=n.route,i=n.query,a=o?o.getHref(i):e;return{route:o,urls:{href:a,as:e}}}},{key:"getRequestHandler",value:function(e,t){var r=this,n=e.getRequestHandler();return function(o,i){var a=r.match(o.url),s=a.route,u=a.query,c=a.parsedUrl;s?t?t({req:o,res:i,route:s,query:u}):e.render(o,i,s.page,u):n(o,i,c)}}},{key:"getLink",value:function(e){var t=this;return function(r){var n=r.route,i=r.params,a=r.to,s=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,["route","params","to"]),u=n||a;return u&&Object.assign(s,t.findAndGetUrls(u,i).urls),o.default.createElement(e,s)}}},{key:"getRouter",value:function(e){var t=this,r=function(r){return function(n,o,i){var a=t.findAndGetUrls(n,o),s=a.byName,u=a.urls,c=u.as,l=u.href;return e[r](l,c,s?i:o)}};return e.pushRoute=r("push"),e.replaceRoute=r("replace"),e.prefetchRoute=r("prefetch"),e}}]),e}(),y=function(){function e(t){var r=t.name,o=t.pattern,i=t.page,a=void 0===i?r:i;if(f(this,e),!r&&!a)throw new Error('Missing page to render for route "'.concat(o,'"'));this.name=r,this.pattern=o||"/".concat(r),this.page=a.replace(/(^|\/)index$/,"").replace(/^\/?/,"/"),this.regex=(0,n.default)(this.pattern,this.keys=[]),this.keyNames=this.keys.map(function(e){return e.name}),this.toPath=n.default.compile(this.pattern)}return d(e,[{key:"match",value:function(e){var t=this.regex.exec(e);if(t)return this.valuesToParams(t.slice(1))}},{key:"valuesToParams",value:function(e){var t=this;return e.reduce(function(e,r,n){return void 0===r?e:Object.assign(e,l({},t.keys[n].name,decodeURIComponent(r)))},{})}},{key:"getHref",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"".concat(this.page,"?").concat(E(e))}},{key:"getAs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.toPath(t)||"/",n=Object.keys(t).filter(function(t){return-1===e.keyNames.indexOf(t)});if(!n.length)return r;var o=n.reduce(function(e,r){return Object.assign(e,l({},r,t[r]))},{});return"".concat(r,"?").concat(E(o))}},{key:"getUrls",value:function(e){return{as:this.getAs(e),href:this.getHref(e)}}}]),e}(),E=function(e){return Object.keys(e).filter(function(t){return null!==e[t]&&void 0!==e[t]}).map(function(t){var r=e[t];return Array.isArray(r)&&(r=r.join("/")),[encodeURIComponent(t),encodeURIComponent(r)].join("=")}).join("&")}},88:function(e,t){e.exports=f,e.exports.parse=i,e.exports.compile=function(e,t){return a(i(e,t))},e.exports.tokensToFunction=a,e.exports.tokensToRegExp=l;var r="/",n="./",o=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function i(e,t){for(var i,a=[],c=0,l=0,f="",p=t&&t.delimiter||r,d=t&&t.delimiters||n,h=!1;null!==(i=o.exec(e));){var y=i[0],E=i[1],m=i.index;if(f+=e.slice(l,m),l=m+y.length,E)f+=E[1],h=!0;else{var b="",g=e[l],v=i[2],O=i[3],T=i[4],A=i[5];if(!h&&f.length){var w=f.length-1;d.indexOf(f[w])>-1&&(b=f[w],f=f.slice(0,w))}f&&(a.push(f),f="",h=!1);var R=""!==b&&void 0!==g&&g!==b,_="+"===A||"*"===A,x="?"===A||"*"===A,I=b||p,N=O||T;a.push({name:v||c++,prefix:b,delimiter:I,optional:x,repeat:_,partial:R,pattern:N?u(N):"[^"+s(I)+"]+?"})}}return(f||l<e.length)&&a.push(f+e.substr(l)),a}function a(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",i=n&&n.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var u,c=r?r[s.name]:void 0;if(Array.isArray(c)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===c.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(u=i(c[l]),!t[a].test(u))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===l?s.prefix:s.delimiter)+u}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(u=i(String(c)),!t[a].test(u))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+u+'"');o+=s.prefix+u}}else o+=s}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function c(e){return e&&e.sensitive?"":"i"}function l(e,t,o){for(var i=(o=o||{}).strict,a=!1!==o.end,u=s(o.delimiter||r),l=o.delimiters||n,f=[].concat(o.endsWith||[]).map(s).concat("$").join("|"),p="",d=!1,h=0;h<e.length;h++){var y=e[h];if("string"==typeof y)p+=s(y),d=h===e.length-1&&l.indexOf(y[y.length-1])>-1;else{var E=s(y.prefix),m=y.repeat?"(?:"+y.pattern+")(?:"+E+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?p+=E+"("+m+")?":p+="(?:"+E+"("+m+"))?":p+=E+"("+m+")"}}return a?(i||(p+="(?:"+u+")?"),p+="$"===f?"$":"(?="+f+")"):(i||(p+="(?:"+u+"(?="+f+"))?"),d||(p+="(?="+u+"|"+f+")")),new RegExp("^"+p,c(o))}function f(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(f(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",c(r))}(e,t,r):function(e,t,r){return l(i(e,r),t,r)}(e,t,r)}},89:function(e,t,r){r(90),e.exports=self.fetch.bind(self)},90:function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",function(){return c}),r.d(t,"Request",function(){return E}),r.d(t,"Response",function(){return b}),r.d(t,"DOMException",function(){return v}),r.d(t,"fetch",function(){return O});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function p(e){var t=new FileReader,r=f(t);return t.readAsArrayBuffer(e),r}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:n.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:n.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():n.arrayBuffer&&n.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=d(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=d(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,r,n=l(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,r=f(t),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=a(e),t=s(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},c.prototype.delete=function(e){delete this.map[a(e)]},c.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},c.prototype.set=function(e,t){this.map[a(e)]=s(t)},c.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),u(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),u(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),u(e)},n.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function E(e,t){var r,n,o=(t=t||{}).body;if(e instanceof E){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(r=t.method||this.method||"GET",n=r.toUpperCase(),y.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}}),t}function b(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})},h.call(E.prototype),h.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},b.error=function(){var e=new b(null,{status:0,statusText:""});return e.type="error",e};var g=[301,302,303,307,308];b.redirect=function(e,t){if(-1===g.indexOf(t))throw new RangeError("Invalid status code");return new b(null,{status:t,headers:{location:e}})};var v=self.DOMException;try{new v}catch(e){(v=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),v.prototype.constructor=v}function O(e,t){return new Promise(function(r,o){var i=new E(e,t);if(i.signal&&i.signal.aborted)return o(new v("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var e,t,n={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}}),t)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new b(o,n))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new v("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&n.blob&&(a.responseType="blob"),i.headers.forEach(function(e,t){a.setRequestHeader(t,e)}),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})}O.polyfill=!0,self.fetch||(self.fetch=O,self.Headers=c,self.Request=E,self.Response=b)}},[[242,1,0]]]);