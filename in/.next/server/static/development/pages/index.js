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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bunlong/workspace/os/Bunlong/create-next-app.github.io/in/components/head.js";



var defaultDescription = '';
var defaultKeywords = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title || ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "./static/prism.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "./static/prism.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: props.keywords || defaultKeywords,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/favicon-16x16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/favicon-32x32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/apple-touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#000000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/bunlong/workspace/os/Bunlong/create-next-app.github.io/in/components/nav.js";







var styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function Nav(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "create-next-app-cli"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: 'https://github.com/themodernjavascript/create-next-app-cli',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: "https://ghbtns.com/github-btn.html?user=themodernjavascript&repo=create-next-app-cli&type=star&count=true",
    frameBorder: "0",
    scrolling: "0",
    width: "80px",
    height: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: "https://ghbtns.com/github-btn.html?user=themodernjavascript&repo=create-next-app-cli&type=fork&count=true",
    frameBorder: "0",
    scrolling: "0",
    width: "80px",
    height: "20px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(Nav));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
var _jsxFileName = "/home/bunlong/workspace/os/Bunlong/create-next-app.github.io/in/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/anchor-is-valid */












var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 15
    },
    button: {
      margin: theme.spacing.unit,
      backgroundColor: '#dc3545',
      color: '#fff',
      marginTop: 20
    }
  };
};

var templateOptions = [{
  value: 'default',
  label: 'default'
}, {
  value: 'material',
  label: 'material'
}];
var exampleOptions = [{
  value: 'basic-css',
  label: 'Basic css'
}, {
  value: 'with-redux',
  label: 'Redux'
}, {
  value: 'with-redux-wrapper',
  label: 'Redux wrapper'
}, {
  value: 'with-redux-saga',
  label: 'Redux saga'
}, {
  value: 'with-apollo-and-redux',
  label: 'Apollo and redux'
}, {
  value: 'with-apollo-and-redux-saga',
  label: 'Apollo and redux saga'
}];

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedTemplate: {
        value: 'default',
        label: 'default'
      },
      selectedExample: {
        value: 'basic-css',
        label: 'Basic css'
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeTemplate", function (selectedTemplate) {
      _this.setState({
        selectedTemplate: selectedTemplate
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChangeExample", function (selectedExample) {
      _this.setState({
        selectedExample: selectedExample
      });
    });

    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          selectedTemplate = _this$state.selectedTemplate,
          selectedExample = _this$state.selectedExample;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Create Next App",
        description: "create-next-app-cli is a command line interface (CLI) for easily creating Next.js apps in one command.",
        keywords: "next, nextjs, react, reactjs, create-next-app, create-next-app-cli, create-react-app, server-side-rendering, zero-configuration, build-tools, boilerplate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h2",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Create Next App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Create ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/zeit/next.js",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Next.js"), " App building tools"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: 'https://github.com/themodernjavascript/create-next-app-cli',
        variant: "contained",
        color: "secondary",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), "\xA0 Github"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'flex',
          margin: 40
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        spacing: 24,
        direction: "column",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "What is Next.js?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/zeit/next.js",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Next.js"), " is a very popular ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://nodejs.org/en/about/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Node.js"), " framework which enables an easy server-side React rendering, and provides many other amazing features."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "What is create-next-app-cli?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "create-next-app-cli is a command line interface (CLI) for easily creating Next.js apps in one command."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Installing create-next-app CLI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "create-next-app-cli is available on npm:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, "npm install --global create-next-app-cli")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "create-next-app-cli is available on yarn as well:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "yarn add create-next-app-cli")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "You don't need to install or setup Webpack or Babel. They come with Next.js, so you can just start coding after running ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "create-next-app"), "."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Creating an App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Create a new Next.js app with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "default"), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "material"), " templates."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 3,
        xl: 3,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Choose a template:")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "templates",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 4,
        xl: 4,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
        value: selectedTemplate,
        onChange: this.handleChangeTemplate,
        options: templateOptions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "And run command below:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "create-next-app my-app --template ".concat(selectedTemplate.value))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "It will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, ".\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 components\n\u2502   \u251C\u2500\u2500 head.js\n\u2502   \u2514\u2500\u2500 nav.js\n\u251C\u2500\u2500 next.config.js\n\u251C\u2500\u2500 node_modules\n\u2502   \u251C\u2500\u2500 [...]\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pages\n\u2502   \u2514\u2500\u2500 index.js\n\u251C\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 favicon.ico\n\u2514\u2500\u2500 yarn.lock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "cd my-app")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Inside the newly created project, you can run some built-in commands:"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h5",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "npm run dev"), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, "yarn dev")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Runs the app in development mode.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), "Open ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "http://localhost:3000"), " to view it in the browser."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "The page will automatically reload if you make changes to the code.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), "You will see the build errors and lint warnings in the console."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Out of the box, we get:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Automatic transpilation and bundling (with webpack and babel)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, "Hot code reloading")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "Server rendering and indexing of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, "./pages"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Static file serving. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "./static/"), " is mapped to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "/static/"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h5",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "npm run build"), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "yarn build")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Builds the app for production to the .next folder.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), "It correctly bundles React in production mode and optimizes the build for the best performance."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h5",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "npm run start"), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "yarn start")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Starts the application in production mode. The application should be compiled with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "npm run build"), " first."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Now you maybe ready to code and deploy your app!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Starting Next.js Examples"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "There are a bunch of examples in the Next.js that you can use to bootstrap your app."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 3,
        xl: 3,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Choose an example:")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "examples",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 4,
        xl: 4,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
        value: selectedExample,
        onChange: this.handleChangeExample,
        options: exampleOptions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "And run command below to bootstrap your app:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "language-javascript",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "create-next-app my-app --example ".concat(selectedExample.value))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "h4",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "User Guide"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
        variant: "body1",
        gutterBottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "You can find detailed instructions on using Next.js and many tips in ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://nextjs.org/docs/",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "its documentation"), "."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://ghbtns.com/github-btn.html?user=themodernjavascript&repo=create-next-app-cli&type=star&count=true",
        frameBorder: "0",
        scrolling: "0",
        width: "80px",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "https://ghbtns.com/github-btn.html?user=themodernjavascript&repo=create-next-app-cli&type=fork&count=true",
        frameBorder: "0",
        scrolling: "0",
        width: "80px",
        height: "20px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Index));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map