module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function (url) {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2743444393"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-2743444393"
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width initial-scale=1",
        className: "jsx-2743444393"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-2743444393"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-2743444393"
      }, "Podcast VCK"))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2345174624",
        css: ["header.jsx-2743444393{color:#fff;background:#8756ca;padding:15px;text-align:center;}", "header.jsx-2743444393 a.jsx-2743444393{color:#fff;-webkit-text-decoration:none;text-decoration:none;}"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2939049632",
        css: ["body{margin:0;font-family:system-ui;background:white;}", "#nprogress{pointer-events:none;}", "#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}", "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}", "#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}", ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slug; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);

function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lowercase: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(13); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index') // about  about     /about
.add('channel', '/:slug.:id', 'channel') // blog   blog      /blog/:slug
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast'); // user   profile   /user/:id

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelGrid; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ChannelGrid =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChannelGrid, _React$Component);

  function ChannelGrid() {
    _classCallCheck(this, ChannelGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChannelGrid).apply(this, arguments));
  }

  _createClass(ChannelGrid, [{
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3281768643" + " " + "channels"
      }, channels.map(function (channel) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          route: "channel",
          params: {
            slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(channel.title),
            id: channel.id
          },
          prefetch: true
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-3281768643" + " " + "channel"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: channel.urls.logo_image.original,
          alt: "",
          className: "jsx-3281768643"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3281768643"
        }, channel.title)));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3281768643",
        css: [".channels.jsx-3281768643{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}", "a.channel.jsx-3281768643{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}", ".channel.jsx-3281768643 img.jsx-3281768643{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}", ".channel.jsx-3281768643{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}", "h2.jsx-3281768643{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]
      }));
    }
  }]);

  return ChannelGrid;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        title: "Oh no :("
      }, statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3569551772" + " " + "message"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3569551772"
      }, "Esta pagina no existe :("), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3569551772"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-3569551772"
      }, "Volver al home")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3569551772" + " " + "message"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3569551772"
      }, "Hubo un problema, intente en unos segundos")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3569551772",
        css: [".message.jsx-3569551772{pagging:100px 30px;text-align:center;}", "h1.jsx-3569551772{margin-bottom:2em;}", "a.jsx-3569551772{color:#8756ca;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(5);

// EXTERNAL MODULE: ./helpers/slug.js
var slug = __webpack_require__(8);

// CONCATENATED MODULE: ./components/ListPodcastClick.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ListPodcastClick_ListPodcastClick =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListPodcastClick, _React$Component);

  function ListPodcastClick() {
    _classCallCheck(this, ListPodcastClick);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListPodcastClick).apply(this, arguments));
  }

  _createClass(ListPodcastClick, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          podcasts = _this$props.podcasts,
          onClickPodcast = _this$props.onClickPodcast;
      return external_react_default.a.createElement("div", {
        className: "jsx-3605175331"
      }, podcasts.map(function (podcast) {
        return external_react_default.a.createElement("a", {
          href: "/".concat(Object(slug["a" /* default */])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(slug["a" /* default */])(podcast.title), ".").concat(podcast.id),
          key: podcast.id,
          onClick: function onClick(event) {
            return onClickPodcast(event, podcast);
          },
          className: "jsx-3605175331" + " " + 'podcast'
        }, external_react_default.a.createElement("h3", {
          className: "jsx-3605175331"
        }, podcast.title), external_react_default.a.createElement("div", {
          className: "jsx-3605175331" + " " + 'meta'
        }, Math.ceil(podcast.duration / 60), " minutes"));
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "3605175331",
        css: [".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}", ".podcast.jsx-3605175331:hover{color:#000;}", ".podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}", ".podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}"]
      }));
    }
  }]);

  return ListPodcastClick;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./components/ChannelGrid.js
var ChannelGrid = __webpack_require__(11);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(9);

// CONCATENATED MODULE: ./components/PodcastPlayer.js



function PodcastPlayer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PodcastPlayer_typeof = function _typeof(obj) { return typeof obj; }; } else { PodcastPlayer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PodcastPlayer_typeof(obj); }

function PodcastPlayer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PodcastPlayer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PodcastPlayer_createClass(Constructor, protoProps, staticProps) { if (protoProps) PodcastPlayer_defineProperties(Constructor.prototype, protoProps); if (staticProps) PodcastPlayer_defineProperties(Constructor, staticProps); return Constructor; }

function PodcastPlayer_possibleConstructorReturn(self, call) { if (call && (PodcastPlayer_typeof(call) === "object" || typeof call === "function")) { return call; } return PodcastPlayer_assertThisInitialized(self); }

function PodcastPlayer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PodcastPlayer_getPrototypeOf(o) { PodcastPlayer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PodcastPlayer_getPrototypeOf(o); }

function PodcastPlayer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PodcastPlayer_setPrototypeOf(subClass, superClass); }

function PodcastPlayer_setPrototypeOf(o, p) { PodcastPlayer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PodcastPlayer_setPrototypeOf(o, p); }




var PodcastPlayer_PodcastPlayer =
/*#__PURE__*/
function (_React$Component) {
  PodcastPlayer_inherits(PodcastPlayer, _React$Component);

  function PodcastPlayer() {
    PodcastPlayer_classCallCheck(this, PodcastPlayer);

    return PodcastPlayer_possibleConstructorReturn(this, PodcastPlayer_getPrototypeOf(PodcastPlayer).apply(this, arguments));
  }

  PodcastPlayer_createClass(PodcastPlayer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          clip = _this$props.clip,
          onClose = _this$props.onClose;
      return external_react_default.a.createElement("div", {
        className: "jsx-3928628942" + " " + "modal"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3928628942" + " " + 'clip'
      }, external_react_default.a.createElement("nav", {
        className: "jsx-3928628942"
      }, onClose ? external_react_default.a.createElement("a", {
        onClick: onClose,
        className: "jsx-3928628942"
      }, "< Volver") : external_react_default.a.createElement(routes["Link"], {
        route: "channel",
        params: {
          slug: Object(slug["a" /* default */])(clip.channel.title),
          id: clip.channel.id
        },
        prefetch: true
      }, external_react_default.a.createElement("a", {
        className: "jsx-3928628942" + " " + 'close'
      }, "< Volver"))), external_react_default.a.createElement("picture", {
        className: "jsx-3928628942"
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
        },
        className: "jsx-3928628942"
      })), external_react_default.a.createElement("div", {
        className: "jsx-3928628942" + " " + 'player'
      }, external_react_default.a.createElement("h3", {
        className: "jsx-3928628942"
      }, clip.title), external_react_default.a.createElement("h6", {
        className: "jsx-3928628942"
      }, clip.channel.title), external_react_default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-3928628942"
      }, external_react_default.a.createElement("source", {
        src: clip.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-3928628942"
      })))), external_react_default.a.createElement(style_default.a, {
        styleId: "3928628942",
        css: ["nav.jsx-3928628942{background:none;}", "nav.jsx-3928628942 a.jsx-3928628942{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}", ".clip.jsx-3928628942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}", "picture.jsx-3928628942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}", "picture.jsx-3928628942 div.jsx-3928628942{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}", ".player.jsx-3928628942{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}", "h3.jsx-3928628942{margin:0;}", "h6.jsx-3928628942{margin:0;margin-top:1em;}", "audio.jsx-3928628942{margin-top:2em;width:100%;}", ".modal.jsx-3928628942{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]
      }));
    }
  }]);

  return PodcastPlayer;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./pages/_error.js
var _error = __webpack_require__(12);

// CONCATENATED MODULE: ./pages/channel.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return channel_default; });




function channel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { channel_typeof = function _typeof(obj) { return typeof obj; }; } else { channel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return channel_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function channel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function channel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function channel_createClass(Constructor, protoProps, staticProps) { if (protoProps) channel_defineProperties(Constructor.prototype, protoProps); if (staticProps) channel_defineProperties(Constructor, staticProps); return Constructor; }

function channel_possibleConstructorReturn(self, call) { if (call && (channel_typeof(call) === "object" || typeof call === "function")) { return call; } return channel_assertThisInitialized(self); }

function channel_getPrototypeOf(o) { channel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return channel_getPrototypeOf(o); }

function channel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) channel_setPrototypeOf(subClass, superClass); }

function channel_setPrototypeOf(o, p) { channel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return channel_setPrototypeOf(o, p); }

function channel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var channel_default =
/*#__PURE__*/
function (_React$Component) {
  channel_inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    channel_classCallCheck(this, _default);

    _this = channel_possibleConstructorReturn(this, channel_getPrototypeOf(_default).call(this, props));

    _defineProperty(channel_assertThisInitialized(channel_assertThisInitialized(_this)), "openPodcast", function (event, podcast) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.nativeEvent && event.nativeEvent.which === 2) {
        // Si está haciendo Ctrl+Click o Cmd+Click, dejamos que el click suceda normalmente
        return;
      }

      event.preventDefault();

      _this.setState({
        openPodcast: podcast
      });
    });

    _defineProperty(channel_assertThisInitialized(channel_assertThisInitialized(_this)), "closePodcast", function (event) {
      event.preventDefault();

      _this.setState({
        openPodcast: null
      });
    });

    _this.state = {
      openPodcast: null
    };
    return _this;
  }

  channel_createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audioClips = _this$props.audioClips,
          series = _this$props.series,
          statusCode = _this$props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return external_react_default.a.createElement(_error["default"], {
          statusCode: statusCode
        });
      }

      return external_react_default.a.createElement(Layout["a" /* default */], {
        title: channel.title
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        className: "jsx-3100498341" + " " + "banner"
      }), openPodcast && external_react_default.a.createElement(PodcastPlayer_PodcastPlayer, {
        clip: openPodcast,
        onClose: this.closePodcast
      }), external_react_default.a.createElement("h1", {
        className: "jsx-3100498341"
      }, channel.title), series.length > 0 && external_react_default.a.createElement("div", {
        className: "jsx-3100498341"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-3100498341"
      }, "Series"), external_react_default.a.createElement(ChannelGrid["a" /* default */], {
        channels: series
      })), external_react_default.a.createElement(ListPodcastClick_ListPodcastClick, {
        podcasts: audioClips,
        onClickPodcast: this.openPodcast
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "2064852064",
        css: [".banner.jsx-3100498341{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}", "h1.jsx-3100498341{font-weight:600;padding:15px;}", "h2.jsx-3100498341{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}", ".modal.jsx-3100498341{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]
      }), external_react_default.a.createElement(style_default.a, {
        styleId: "845285548",
        css: ["body{margin:0;font-family:system-ui;background:white;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, reqChannel, reqSeries, reqAudios, dataChannel, channel, dataAudios, audioClips, dataSeries, series;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                idChannel = query.id;
                _context.prev = 2;
                _context.next = 5;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                reqChannel = _ref3[0];
                reqSeries = _ref3[1];
                reqAudios = _ref3[2];

                if (!(reqChannel.status >= 404)) {
                  _context.next = 13;
                  break;
                }

                res.status = reqChannel.status;
                return _context.abrupt("return", {
                  channel: null,
                  audioClips: null,
                  series: null,
                  statusCode: reqChannel.status
                });

              case 13:
                _context.next = 15;
                return reqChannel.json();

              case 15:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 19;
                return reqAudios.json();

              case 19:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                _context.next = 23;
                return reqSeries.json();

              case 23:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audioClips: audioClips,
                  series: series,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", {
                  channel: null,
                  audioClips: null,
                  series: null,
                  statusCode: 503
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 28]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(external_react_default.a.Component);



/***/ })
/******/ ]);