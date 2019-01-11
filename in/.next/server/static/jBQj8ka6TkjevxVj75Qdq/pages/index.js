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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(6);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(10);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(3);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(1);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(2);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(16);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/SvgIcon"
var SvgIcon_ = __webpack_require__(7);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';
var defaultKeywords = '';
var defaultOGURL = '';
var defaultOGImage = '';

var head_Head = function Head(props) {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("title", null, props.title || ''), external_react_default.a.createElement("link", {
    href: "./static/prism.css",
    rel: "stylesheet"
  }), external_react_default.a.createElement("script", {
    src: "./static/prism.js"
  }), external_react_default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "keywords",
    content: props.keywords || defaultKeywords
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__(17);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__(18);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// CONCATENATED MODULE: ./components/nav.js







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
  return external_react_default.a.createElement("div", {
    className: classes.root
  }, external_react_default.a.createElement(AppBar_default.a, {
    position: "static"
  }, external_react_default.a.createElement(Toolbar_default.a, null, external_react_default.a.createElement(Typography_default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.grow
  }, "create-next-app-cli"), external_react_default.a.createElement(link_default.a, {
    href: 'https://github.com/themodernjavascript/create-next-app-cli'
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(SvgIcon_default.a, {
    style: {
      color: 'white'
    }
  }, external_react_default.a.createElement("path", {
    d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"
  })))))));
}

/* harmony default export */ var nav = (Object(styles_["withStyles"])(styles)(Nav));
// CONCATENATED MODULE: ./pages/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint-disable jsx-a11y/anchor-is-valid */











var pages_styles = function styles(theme) {
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

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head, {
        title: "Create Next App",
        description: "Command line interface (CLI) for easily creating Next.js apps in one command.",
        keywords: "next, nextjs, react, reactjs, create-next-app, create-next-app-cli, create-react-app, server-side-rendering, zero-configuration, build-tools, boilerplate"
      }), external_react_default.a.createElement(nav, null), external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "h2",
        gutterBottom: true
      }, "Create Next App"), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Create Next.js App building tools"), external_react_default.a.createElement(Button_default.a, {
        href: 'https://github.com/themodernjavascript/create-next-app-cli',
        variant: "contained",
        color: "secondary",
        className: classes.button
      }, external_react_default.a.createElement(SvgIcon_default.a, {
        style: {
          color: 'white'
        }
      }, external_react_default.a.createElement("path", {
        d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"
      })), "\xA0 Github"))), external_react_default.a.createElement("div", {
        style: {
          display: 'flex',
          margin: 40
        }
      }, external_react_default.a.createElement(Grid_default.a, {
        container: true,
        spacing: 24,
        direction: "column"
      }, external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h4",
        gutterBottom: true
      }, "Installation"), external_react_default.a.createElement("hr", null))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "create-next-app-cli is available on npm:"), external_react_default.a.createElement("pre", null, external_react_default.a.createElement("code", {
        className: "language-javascript"
      }, "npm install --global create-next-app-cli")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "create-next-app-cli is available on yarn as well:"), external_react_default.a.createElement("pre", null, external_react_default.a.createElement("code", {
        className: "language-javascript"
      }, "yarn add create-next-app-cli")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "You don't need to install or setup Webpack or Babel. They come with Next.js, so you can just start coding after running ", external_react_default.a.createElement("code", null, "create-next-app"), "."))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h4",
        gutterBottom: true
      }, "Creating an App"), external_react_default.a.createElement("hr", null))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Create a new Next.js app with `default` and `material` UI:"), external_react_default.a.createElement("pre", null, external_react_default.a.createElement("code", {
        className: "language-javascript"
      }, "create-next-app my-app --template default")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "It will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:"), external_react_default.a.createElement("pre", null, external_react_default.a.createElement("code", {
        className: "language-javascript"
      }, ".\n\u251C\u2500\u2500 README.md\n\u251C\u2500\u2500 components\n\u2502   \u251C\u2500\u2500 head.js\n\u2502   \u2514\u2500\u2500 nav.js\n\u251C\u2500\u2500 next.config.js\n\u251C\u2500\u2500 node_modules\n\u2502   \u251C\u2500\u2500 [...]\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 pages\n\u2502   \u2514\u2500\u2500 index.js\n\u251C\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 favicon.ico\n\u2514\u2500\u2500 yarn.lock")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "No configuration or complicated folder structures, just the files you need to build your app. Once the installation is done, you can open your project folder:"), external_react_default.a.createElement("pre", null, external_react_default.a.createElement("code", {
        className: "language-javascript"
      }, "cd my-app")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Inside the newly created project, you can run some built-in commands:"))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h5",
        gutterBottom: true,
        className: "section"
      }, external_react_default.a.createElement("code", null, "npm run dev"), " or ", external_react_default.a.createElement("code", null, "yarn dev")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section"
      }, "Runs the app in development mode.", external_react_default.a.createElement("br", null), "Open ", external_react_default.a.createElement("code", null, "http://localhost:3000"), " to view it in the browser."), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section"
      }, "The page will automatically reload if you make changes to the code.", external_react_default.a.createElement("br", null), "You will see the build errors and lint warnings in the console."), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section"
      }, "Out of the box, we get:", external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Automatic transpilation and bundling (with webpack and babel)")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Hot code reloading")), external_react_default.a.createElement("li", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Server rendering and indexing of ", external_react_default.a.createElement("code", null, "./pages"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Static file serving. ", external_react_default.a.createElement("code", null, "./static/"), " is mapped to ", external_react_default.a.createElement("code", null, "/static/"))))))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h5",
        gutterBottom: true,
        className: "section"
      }, external_react_default.a.createElement("code", null, "npm run build"), " or ", external_react_default.a.createElement("code", null, "yarn build")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section"
      }, "Builds the app for production to the .next folder.", external_react_default.a.createElement("br", null), "It correctly bundles React in production mode and optimizes the build for the best performance."))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h5",
        gutterBottom: true,
        className: "section"
      }, external_react_default.a.createElement("code", null, "npm run start"), " or ", external_react_default.a.createElement("code", null, "yarn start")), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section"
      }, "Starts the application in production mode. The application should be compiled with ", external_react_default.a.createElement("code", null, "npm run build"), " first."), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true,
        className: "section"
      }, "Now you maybe ready to code and deploy your app!"))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h4",
        gutterBottom: true
      }, "Starting Next.js Examples"), external_react_default.a.createElement("hr", null))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "There are a bunch of examples in the ", external_react_default.a.createElement("a", {
        href: "https://github.com/zeit/next.js/tree/canary/examples",
        target: "_blank"
      }, "Next.js repository"), " (and growing) that you can use to bootstrap your app."), external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "Run command below to use an example:"), external_react_default.a.createElement("pre", null, external_react_default.a.createElement("code", {
        className: "language-javascript"
      }, "create-next-app example-app-name --example basic-csss")))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "h4",
        gutterBottom: true
      }, "User Guide"), external_react_default.a.createElement("hr", null))), external_react_default.a.createElement(Grid_default.a, {
        container: true,
        item: true,
        spacing: 0,
        justify: "center"
      }, external_react_default.a.createElement(Grid_default.a, {
        item: true,
        lg: 6,
        xl: 6,
        xs: 12
      }, external_react_default.a.createElement(Typography_default.a, {
        variant: "body1",
        gutterBottom: true
      }, "You can find detailed instructions on using Next.js and many tips in ", external_react_default.a.createElement("a", {
        href: "https://nextjs.org/docs/",
        target: "_blank"
      }, "its documentation"), "."))))), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("div", null, "\xA9 2019 Copyright")));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(styles_["withStyles"])(pages_styles)(pages_Index));

/***/ })
/******/ ]);