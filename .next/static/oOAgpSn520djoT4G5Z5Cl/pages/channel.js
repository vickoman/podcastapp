(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{15:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(45),o=n.n(r);function a(e){return o()(e,{lowercase:!0}).replace(/[^\w\-]+/g,"")}},241:function(e,t,n){__NEXT_REGISTER_PAGE("/channel",function(){return e.exports=n(253),{page:e.exports.default}})},253:function(e,t,n){"use strict";n.r(t);var r=n(18),o=n.n(r),a=n(2),i=n.n(a),c=n(0),u=n.n(c),s=(n(10),n(14)),l=n(15);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.podcasts,n=e.onClickPodcast;return u.a.createElement("div",{className:"jsx-3605175331"},t.map(function(e){return u.a.createElement("a",{href:"/".concat(Object(l.a)(e.channel.title),".").concat(e.channel.id,"/").concat(Object(l.a)(e.title),".").concat(e.id),key:e.id,onClick:function(t){return n(t,e)},className:"jsx-3605175331 podcast"},u.a.createElement("h3",{className:"jsx-3605175331"},e.title),u.a.createElement("div",{className:"jsx-3605175331 meta"},Math.ceil(e.duration/60)," minutes"))}),u.a.createElement(i.a,{styleId:"3605175331",css:[".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}",".podcast.jsx-3605175331:hover{color:#000;}",".podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}",".podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}"]}))}}])&&p(n.prototype,r),o&&p(n,o),t}(),b=n(46),g=n(30);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,w(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.clip,n=e.onClose;return u.a.createElement("div",{className:"jsx-3928628942 modal"},u.a.createElement("div",{className:"jsx-3928628942 clip"},u.a.createElement("nav",{className:"jsx-3928628942"},n?u.a.createElement("a",{onClick:n,className:"jsx-3928628942"},"< Volver"):u.a.createElement(g.Link,{route:"channel",params:{slug:Object(l.a)(t.channel.title),id:t.channel.id},prefetch:!0},u.a.createElement("a",{className:"jsx-3928628942 close"},"< Volver"))),u.a.createElement("picture",{className:"jsx-3928628942"},u.a.createElement("div",{style:{backgroundImage:"url(".concat(t.urls.image||t.channel.urls.logo_image.original,")")},className:"jsx-3928628942"})),u.a.createElement("div",{className:"jsx-3928628942 player"},u.a.createElement("h3",{className:"jsx-3928628942"},t.title),u.a.createElement("h6",{className:"jsx-3928628942"},t.channel.title),u.a.createElement("audio",{controls:!0,autoPlay:!0,className:"jsx-3928628942"},u.a.createElement("source",{src:t.urls.high_mp3,type:"audio/mpeg",className:"jsx-3928628942"})))),u.a.createElement(i.a,{styleId:"3928628942",css:["nav.jsx-3928628942{background:none;}","nav.jsx-3928628942 a.jsx-3928628942{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}",".clip.jsx-3928628942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}","picture.jsx-3928628942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}","picture.jsx-3928628942 div.jsx-3928628942{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}",".player.jsx-3928628942{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}","h3.jsx-3928628942{margin:0;}","h6.jsx-3928628942{margin:0;margin-top:1em;}","audio.jsx-3928628942{margin-top:2em;width:100%;}",".modal.jsx-3928628942{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]}))}}])&&v(n.prototype,r),o&&v(n,o),t}(),k=n(60);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return T});var T=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=C(t).call(this,e),n=!o||"object"!==P(o)&&"function"!=typeof o?I(r):o,R(I(I(n)),"openPodcast",function(e,t){e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which||(e.preventDefault(),n.setState({openPodcast:t}))}),R(I(I(n)),"closePodcast",function(e){e.preventDefault(),n.setState({openPodcast:null})}),n.state={openPodcast:null},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,u.a.Component),n=t,r=[{key:"render",value:function(){var e=this.props,t=e.channel,n=e.audioClips,r=e.series,o=e.statusCode,a=this.state.openPodcast;return 200!==o?u.a.createElement(k.default,{statusCode:o}):u.a.createElement(s.a,{title:t.title},u.a.createElement("div",{style:{backgroundImage:"url(".concat(t.urls.banner_image.original,")")},className:"jsx-3100498341 banner"}),a&&u.a.createElement(O,{clip:a,onClose:this.closePodcast}),u.a.createElement("h1",{className:"jsx-3100498341"},t.title),r.length>0&&u.a.createElement("div",{className:"jsx-3100498341"},u.a.createElement("h2",{className:"jsx-3100498341"},"Series"),u.a.createElement(b.a,{channels:r})),u.a.createElement(h,{podcasts:n,onClickPodcast:this.openPodcast}),u.a.createElement(i.a,{styleId:"2064852064",css:[".banner.jsx-3100498341{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}","h1.jsx-3100498341{font-weight:600;padding:15px;}","h2.jsx-3100498341{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}",".modal.jsx-3100498341{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]}),u.a.createElement(i.a,{styleId:"845285548",css:["body{margin:0;font-family:system-ui;background:white;}"]}))}}],a=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(t){var n,r,a,i,c,u,s,l,f,p,m,d,y,h;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.res,a=n.id,e.prev=2,e.next=5,Promise.all([fetch("https://api.audioboom.com/channels/".concat(a)),fetch("https://api.audioboom.com/channels/".concat(a,"/child_channels")),fetch("https://api.audioboom.com/channels/".concat(a,"/audio_clips"))]);case 5:if(i=e.sent,c=_(i,3),u=c[0],s=c[1],l=c[2],!(u.status>=404)){e.next=13;break}return r.status=u.status,e.abrupt("return",{channel:null,audioClips:null,series:null,statusCode:u.status});case 13:return e.next=15,u.json();case 15:return f=e.sent,p=f.body.channel,e.next=19,l.json();case 19:return m=e.sent,d=m.body.audio_clips,e.next=23,s.json();case 23:return y=e.sent,h=y.body.channels,e.abrupt("return",{channel:p,audioClips:d,series:h,statusCode:200});case 28:return e.prev=28,e.t0=e.catch(2),e.abrupt("return",{channel:null,audioClips:null,series:null,statusCode:503});case 31:case"end":return e.stop()}},e,this,[[2,28]])}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){S(a,r,o,i,c,"next",e)}function c(e){S(a,r,o,i,c,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}()}],r&&N(n.prototype,r),a&&N(n,a),t}()},30:function(e,t,n){var r=n(87);e.exports=r().add("index").add("channel","/:slug.:id","channel").add("podcast","/:slugChannel.:idChannel/:slug.:id","podcast")},45:function(e,t,n){var r;r=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,n){if("string"!=typeof t)throw new Error("slugify: string argument expected");n="string"==typeof n?{replacement:n}:n||{};var r=t.split("").reduce(function(t,r){return t+(e[r]||r).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").trim().replace(/[-\s]+/g,n.replacement||"-");return n.lower?r.toLowerCase():r}return t.extend=function(t){for(var n in t)e[n]=t[n]},t},e.exports=r(),e.exports.default=r()},46:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(30),u=n(15);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.channels;return i.a.createElement("div",{className:"jsx-3281768643 channels"},e.map(function(e){return i.a.createElement(c.Link,{route:"channel",params:{slug:Object(u.a)(e.title),id:e.id},prefetch:!0},i.a.createElement("a",{className:"jsx-3281768643 channel"},i.a.createElement("img",{src:e.urls.logo_image.original,alt:"",className:"jsx-3281768643"}),i.a.createElement("h2",{className:"jsx-3281768643"},e.title)))}),i.a.createElement(o.a,{styleId:"3281768643",css:[".channels.jsx-3281768643{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}","a.channel.jsx-3281768643{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}",".channel.jsx-3281768643 img.jsx-3281768643{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}",".channel.jsx-3281768643{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}","h2.jsx-3281768643{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]}))}}])&&l(n.prototype,r),a&&l(n,a),t}()},60:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n(2),o=n.n(r),a=n(0),i=n.n(a),c=n(14),u=n(10),s=n.n(u);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i.a.Component),n=t,a=[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}],(r=[{key:"render",value:function(){var e=this.props.statusCode;return i.a.createElement(c.a,{title:"Oh no :("},404===e?i.a.createElement("div",{className:"jsx-3569551772 message"},i.a.createElement("h1",{className:"jsx-3569551772"},"Esta pagina no existe :("),i.a.createElement("p",{className:"jsx-3569551772"},i.a.createElement(s.a,{href:"/"},i.a.createElement("a",{className:"jsx-3569551772"},"Volver al home")))):i.a.createElement("div",{className:"jsx-3569551772 message"},i.a.createElement("h1",{className:"jsx-3569551772"},"Hubo un problema, intente en unos segundos")),i.a.createElement(o.a,{styleId:"3569551772",css:[".message.jsx-3569551772{pagging:100px 30px;text-align:center;}","h1.jsx-3569551772{margin-bottom:2em;}","a.jsx-3569551772{color:#8756ca;}"]}))}}])&&f(n.prototype,r),a&&f(n,a),t}()},87:function(e,t,n){"use strict";var r=u(n(88)),o=u(n(0)),a=n(58),i=u(n(10)),c=u(n(36));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}e.exports=function(e){return new d(e)};var d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.Link,r=void 0===n?i.default:n,o=t.Router,a=void 0===o?c.default:o;f(this,e),this.routes=[],this.Link=this.getLink(r),this.Router=this.getRouter(a)}return m(e,[{key:"add",value:function(e,t,n){var r;if(e instanceof Object?e=(r=e).name:("/"===e[0]&&(n=t,t=e,e=null),r={name:e,pattern:t,page:n}),this.findByName(e))throw new Error('Route "'.concat(e,'" already exists'));return this.routes.push(new y(r)),this}},{key:"findByName",value:function(e){if(e)return this.routes.filter(function(t){return t.name===e})[0]}},{key:"match",value:function(e){var t=(0,a.parse)(e,!0),n=t.pathname,r=t.query;return this.routes.reduce(function(e,t){if(e.route)return e;var o=t.match(n);return o?s({},e,{route:t,params:o,query:s({},r,o)}):e},{query:r,parsedUrl:t})}},{key:"findAndGetUrls",value:function(e,t){var n=this.findByName(e);if(n)return{route:n,urls:n.getUrls(t),byName:!0};var r=this.match(e),o=r.route,a=r.query,i=o?o.getHref(a):e;return{route:o,urls:{href:i,as:e}}}},{key:"getRequestHandler",value:function(e,t){var n=this,r=e.getRequestHandler();return function(o,a){var i=n.match(o.url),c=i.route,u=i.query,s=i.parsedUrl;c?t?t({req:o,res:a,route:c,query:u}):e.render(o,a,c.page,u):r(o,a,s)}}},{key:"getLink",value:function(e){var t=this;return function(n){var r=n.route,a=n.params,i=n.to,c=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,["route","params","to"]),u=r||i;return u&&Object.assign(c,t.findAndGetUrls(u,a).urls),o.default.createElement(e,c)}}},{key:"getRouter",value:function(e){var t=this,n=function(n){return function(r,o,a){var i=t.findAndGetUrls(r,o),c=i.byName,u=i.urls,s=u.as,l=u.href;return e[n](l,s,c?a:o)}};return e.pushRoute=n("push"),e.replaceRoute=n("replace"),e.prefetchRoute=n("prefetch"),e}}]),e}(),y=function(){function e(t){var n=t.name,o=t.pattern,a=t.page,i=void 0===a?n:a;if(f(this,e),!n&&!i)throw new Error('Missing page to render for route "'.concat(o,'"'));this.name=n,this.pattern=o||"/".concat(n),this.page=i.replace(/(^|\/)index$/,"").replace(/^\/?/,"/"),this.regex=(0,r.default)(this.pattern,this.keys=[]),this.keyNames=this.keys.map(function(e){return e.name}),this.toPath=r.default.compile(this.pattern)}return m(e,[{key:"match",value:function(e){var t=this.regex.exec(e);if(t)return this.valuesToParams(t.slice(1))}},{key:"valuesToParams",value:function(e){var t=this;return e.reduce(function(e,n,r){return void 0===n?e:Object.assign(e,l({},t.keys[r].name,decodeURIComponent(n)))},{})}},{key:"getHref",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"".concat(this.page,"?").concat(h(e))}},{key:"getAs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.toPath(t)||"/",r=Object.keys(t).filter(function(t){return-1===e.keyNames.indexOf(t)});if(!r.length)return n;var o=r.reduce(function(e,n){return Object.assign(e,l({},n,t[n]))},{});return"".concat(n,"?").concat(h(o))}},{key:"getUrls",value:function(e){return{as:this.getAs(e),href:this.getHref(e)}}}]),e}(),h=function(e){return Object.keys(e).filter(function(t){return null!==e[t]&&void 0!==e[t]}).map(function(t){var n=e[t];return Array.isArray(n)&&(n=n.join("/")),[encodeURIComponent(t),encodeURIComponent(n)].join("=")}).join("&")}},88:function(e,t){e.exports=f,e.exports.parse=a,e.exports.compile=function(e,t){return i(a(e,t))},e.exports.tokensToFunction=i,e.exports.tokensToRegExp=l;var n="/",r="./",o=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function a(e,t){for(var a,i=[],s=0,l=0,f="",p=t&&t.delimiter||n,m=t&&t.delimiters||r,d=!1;null!==(a=o.exec(e));){var y=a[0],h=a[1],b=a.index;if(f+=e.slice(l,b),l=b+y.length,h)f+=h[1],d=!0;else{var g="",x=e[l],v=a[2],j=a[3],w=a[4],E=a[5];if(!d&&f.length){var O=f.length-1;m.indexOf(f[O])>-1&&(g=f[O],f=f.slice(0,O))}f&&(i.push(f),f="",d=!1);var k=""!==g&&void 0!==x&&x!==g,P="+"===E||"*"===E,_="?"===E||"*"===E,S=g||p,N=j||w;i.push({name:v||s++,prefix:g,delimiter:S,optional:_,repeat:P,partial:k,pattern:N?u(N):"[^"+c(S)+"]+?"})}}return(f||l<e.length)&&i.push(f+e.substr(l)),i}function i(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",a=r&&r.encode||encodeURIComponent,i=0;i<e.length;i++){var c=e[i];if("string"!=typeof c){var u,s=n?n[c.name]:void 0;if(Array.isArray(s)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but got array');if(0===s.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var l=0;l<s.length;l++){if(u=a(s[l]),!t[i].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'"');o+=(0===l?c.prefix:c.delimiter)+u}}else if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s){if(!c.optional)throw new TypeError('Expected "'+c.name+'" to be '+(c.repeat?"an array":"a string"));c.partial&&(o+=c.prefix)}else{if(u=a(String(s)),!t[i].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but got "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e){return e&&e.sensitive?"":"i"}function l(e,t,o){for(var a=(o=o||{}).strict,i=!1!==o.end,u=c(o.delimiter||n),l=o.delimiters||r,f=[].concat(o.endsWith||[]).map(c).concat("$").join("|"),p="",m=!1,d=0;d<e.length;d++){var y=e[d];if("string"==typeof y)p+=c(y),m=d===e.length-1&&l.indexOf(y[y.length-1])>-1;else{var h=c(y.prefix),b=y.repeat?"(?:"+y.pattern+")(?:"+h+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?p+=h+"("+b+")?":p+="(?:"+h+"("+b+"))?":p+=h+"("+b+")"}}return i?(a||(p+="(?:"+u+")?"),p+="$"===f?"$":"(?="+f+")"):(a||(p+="(?:"+u+"(?="+f+"))?"),m||(p+="(?="+u+"|"+f+")")),new RegExp("^"+p,s(o))}function f(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(f(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",s(n))}(e,t,n):function(e,t,n){return l(a(e,n),t,n)}(e,t,n)}}},[[241,1,0]]]);