/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","react.bundle","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _chat_page_ChatPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/page/ChatPage */ "./src/chat/page/ChatPage.js");
/* harmony import */ var _news_page_NewsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news/page/NewsPage */ "./src/news/page/NewsPage.js");
/* harmony import */ var _home_page_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/page/HomePage */ "./src/home/page/HomePage.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/esm/index.js");
/* harmony import */ var _gnb_page_GNBPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gnb/page/GNBPage */ "./src/gnb/page/GNBPage.js");
/* harmony import */ var _detail_page_DetailPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/page/DetailPage */ "./src/detail/page/DetailPage.js");
/* harmony import */ var _user_page_UserPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/page/UserPage */ "./src/user/page/UserPage.js");
/* harmony import */ var _common_component_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/component/Modal */ "./src/common/component/Modal.js");
/* harmony import */ var _common_component_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/component/Footer */ "./src/common/component/Footer.js");
/* harmony import */ var _gnb_component_Signin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gnb/component/Signin */ "./src/gnb/component/Signin.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  max-width: 1300px;\n  margin: 0 auto;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  * {\n    box-sizing : border-box;\n    text-decoration: none;\n  }\n  body {\n    background-color: rgb(249, 249, 249);\n  }\n  section {\n    padding-top: 80px;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












 // login test


var customHistory = Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])();
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject(), styled_reset__WEBPACK_IMPORTED_MODULE_6__["default"]);
var AppContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject2()); // router

function App() {
  console.log("app!!!!!!!!!");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppContainer, null, /*#__PURE__*/React.createElement(GlobalStyle, null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Router"], {
    history: customHistory
  }, /*#__PURE__*/React.createElement(_gnb_page_GNBPage__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/user/:tab",
    component: _user_page_UserPage__WEBPACK_IMPORTED_MODULE_9__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/detail",
    component: _detail_page_DetailPage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/chat",
    component: _chat_page_ChatPage__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/news/:id",
    component: _detail_page_DetailPage__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/news",
    component: _news_page_NewsPage__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/",
    exact: true,
    component: _home_page_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"]
  })), /*#__PURE__*/React.createElement(_chat_page_ChatPage__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/React.createElement(_common_component_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/chat/component/Chat.js":
/*!************************************!*\
  !*** ./src/chat/component/Chat.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AttachFile */ "./node_modules/@material-ui/icons/AttachFile.js");
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ChatBubbleOutline */ "./node_modules/@material-ui/icons/ChatBubbleOutline.js");
/* harmony import */ var _material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &.MuiButtonBase-root {\n    z-index: 9999;\n    color: #fff;\n    right: 30px;\n    width: 62px;\n    bottom: 30px;\n    height: 62px;\n    position: fixed;\n    background-color: #3f63bf;\n    &.MuiButtonBase-root:hover {\n      background-color: #3f63bf;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  paper: {
    zIndex: 9998,
    width: 360,
    height: 500,
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    bottom: 30,
    right: 30
  },
  header: {
    height: 60,
    display: "flex",
    alignItems: "center",
    padding: 10,
    "& span": {
      flex: 1
    }
  },
  contents: {
    flex: 1,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  form: {
    height: 57,
    display: "flex"
  },
  inputBase: {
    flex: 1
  },
  icon: {
    width: "80%",
    height: "80%"
  }
});
var ChatBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"])(_templateObject());
function Chat(_ref) {
  var visual = _ref.visual,
      handleClick = _ref.handleClick;
  var classes = useStyles();
  return visual ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Zoom"], {
    "in": visual
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    elevation: 3,
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\uCC38\uC5EC\uC778\uC6D0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contents
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_4___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    className: classes.inputBase,
    placeholder: "\uBA54\uC138\uC9C0\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_3___default.a, null))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatBtn, {
    onClick: handleClick,
    className: classes.iconButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChatBubbleOutline__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.icon
  }));
}

/***/ }),

/***/ "./src/chat/container/ChatContainer.js":
/*!*********************************************!*\
  !*** ./src/chat/container/ChatContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Chat */ "./src/chat/component/Chat.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ChatContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visual = _useState2[0],
      setVisual = _useState2[1];

  var handleClick = function handleClick() {
    setVisual(!visual);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Chat__WEBPACK_IMPORTED_MODULE_1__["default"], {
    visual: visual,
    handleClick: handleClick
  });
}

/***/ }),

/***/ "./src/chat/page/ChatPage.js":
/*!***********************************!*\
  !*** ./src/chat/page/ChatPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatPage; });
/* harmony import */ var _container_ChatContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/ChatContainer */ "./src/chat/container/ChatContainer.js");

function ChatPage() {
  return /*#__PURE__*/React.createElement(_container_ChatContainer__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/common/component/Footer.js":
/*!****************************************!*\
  !*** ./src/common/component/Footer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: 30px;\n    width: 100%;\n    color: darkgray;\n    font-size: 0.8rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    & > span {\n        padding: 0 12px;\n        margin-bottom: 5px;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    & > div {\n        margin: 0 8px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    margin-top : 200px;\n    top: auto;\n    left: 0;\n    width: 100%;\n    height: 180px;\n    display: flex;  \n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #f1f1f1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // footer컨테이너 100vw 로 width설정하면 스크롤발생

var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].footer(_templateObject());
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2());
var InfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());
function Footer() {
  return /*#__PURE__*/React.createElement(FooterContainer, null, /*#__PURE__*/React.createElement(IconContainer, null, /*#__PURE__*/React.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_2___default.a, null)), /*#__PURE__*/React.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 208 191.94"
  }, /*#__PURE__*/React.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "cls-1",
    d: "M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"
  })))), /*#__PURE__*/React.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/React.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/React.createElement("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  })))), /*#__PURE__*/React.createElement(InfoWrap, null, /*#__PURE__*/React.createElement("span", null, "Copyright ", new Date().getFullYear(), ". JunHyuk, Gyu all right reserved.")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/common/component/Icon.js":
/*!**************************************!*\
  !*** ./src/common/component/Icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconComponent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_donga_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/donga.png */ "./src/common/images/donga.png");
/* harmony import */ var _images_google_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/google.png */ "./src/common/images/google.png");
/* harmony import */ var _images_hani_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hani.png */ "./src/common/images/hani.png");
/* harmony import */ var _images_sbs_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sbs.png */ "./src/common/images/sbs.png");
/* harmony import */ var _images_segye_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/segye.png */ "./src/common/images/segye.png");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: ", ";\n  height: ", ";\n  margin: ", ";\n  background-image: url(", ");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  &:hover {\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








function getURL(iconName) {
  console.log(iconName);
  var match = {
    google: _images_google_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    donga: _images_donga_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    hani: _images_hani_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    sbs: _images_sbs_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    segye: _images_segye_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  };
  return match[iconName];
}

var IconBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.margin;
}, function (props) {
  return getURL(props.name);
});
function IconComponent(props) {
  // hover action 은 나중에 넣어서 애니메이션 구현
  var name = props.name,
      hoverAction = props.hoverAction,
      _props$size = props.size,
      size = _props$size === void 0 ? "100px" : _props$size,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? "10px" : _props$margin,
      rest = _objectWithoutProperties(props, ["name", "hoverAction", "size", "margin"]);

  return /*#__PURE__*/React.createElement(IconBox, _extends({
    name: name,
    size: size,
    margin: margin
  }, rest));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/common/component/Modal.js":
/*!***************************************!*\
  !*** ./src/common/component/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-self: flex-start;\n  justify-content: flex-end;\n  margin-left: calc(100% - 1.5rem);\n  font-size: 1.5rem;\n  color: rgb(134, 142, 150);\n  margin-bottom: 2.25rem;\n  transition: all ease 0.25s;\n  &:hover {\n    cursor: pointer;\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: \"flex\";\n  opacity: ", ";\n  justify-content: center;\n  background-color: white;\n  align-items: center;\n  padding: 15px;\n  box-shadow: 0px 6px 13px -5px rgba(133, 133, 133, 1);\n  width: 500px;\n  height: 400px;\n  margin-top: ", ";\n  border-radius: 10px;\n  transition: all 0.3s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  z-index: ", ";\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  transition: background-color 0.5s ease-out;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.on === "on" ? 9999 : -1;
}, function (props) {
  return props.on === "on" ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0)";
});
var ModalBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (props) {
  return props.on === "on" ? 1 : 0;
}, function (props) {
  return props.on === "on" ? "0px" : "30px";
});
var ExitWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());
function Modal(props) {
  var on = props.on,
      onClickClose = props.onClickClose,
      children = props.children;
  return /*#__PURE__*/React.createElement(ModalContainer, {
    on: on ? "on" : "off"
  }, /*#__PURE__*/React.createElement(ModalBox, {
    on: on ? "on" : "off"
  }, /*#__PURE__*/React.createElement(ExitWrap, {
    onClick: onClickClose
  }, /*#__PURE__*/React.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    tabIndex: "1",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }))), children));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/common/component/ViewTypeBtn.js":
/*!*********************************************!*\
  !*** ./src/common/component/ViewTypeBtn.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "./node_modules/@material-ui/icons/ViewList.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ViewModule */ "./node_modules/@material-ui/icons/ViewModule.js");
/* harmony import */ var _material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 !important;\n  & a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #3f63bf;\n    width: 100%;\n    height: 100%;\n    padding: 11px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var ToggleBtn = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["ToggleButton"])(_templateObject());

function ViewButton(_ref) {
  var match = _ref.match;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("card"),
      _useState2 = _slicedToArray(_useState, 2),
      view = _useState2[0],
      setView = _useState2[1];

  var handleView = function handleView(event, newView) {
    setView(newView);
  };

  return /*#__PURE__*/React.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["ToggleButtonGroup"], {
    value: view,
    exclusive: true,
    onChange: handleView
  }, /*#__PURE__*/React.createElement(ToggleBtn, {
    value: "card"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "".concat(match.path, "?view=card")
  }, /*#__PURE__*/React.createElement(_material_ui_icons_ViewModule__WEBPACK_IMPORTED_MODULE_3___default.a, null))), /*#__PURE__*/React.createElement(ToggleBtn, {
    value: "list"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "".concat(match.path, "?view=list")
  }, /*#__PURE__*/React.createElement(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_2___default.a, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(ViewButton));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/common/component/ViewTypePage.js":
/*!**********************************************!*\
  !*** ./src/common/component/ViewTypePage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 20px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  ", "\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 140
  },
  list: {
    width: "100%"
  },
  inline: {
    display: "inline"
  },
  img: {
    width: 250,
    height: 160,
    marginRight: 20
  },
  listItem: {
    padding: "8px 0",
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none"
    }
  }
});

function ListView(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    className: classes.list
  }, data.map(function (news, idx) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
      alignItems: "flex-start",
      key: idx,
      className: classes.listItem
    }, /*#__PURE__*/React.createElement("img", {
      src: news.image,
      className: classes.img
    }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
      primary: news.title,
      secondary: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        component: "span",
        variant: "body2",
        className: classes.inline,
        color: "textPrimary"
      }, news.description)
    }));
  }));
}

function CardView(_ref2) {
  var data = _ref2.data,
      path = _ref2.path;
  var classes = useStyles();
  return data.map(function (news, idx) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      className: classes.root,
      key: idx
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActionArea"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardMedia"], {
      className: classes.media,
      image: news.image,
      title: news.title
    }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardContent"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      gutterBottom: true,
      variant: "h5",
      component: "h2"
    }, news.title), path === "/news" && /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "body2",
      color: "textSecondary",
      component: "p"
    }, news.description))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CardActions"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      size: "small",
      color: "primary"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/news/".concat(news.id)
    }, " \uC790\uC138\uD788")), path === "/news" && /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      size: "small",
      color: "primary"
    }, "\uC2A4\uD06C\uB7A9")));
  });
}

var ContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.view === "card" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
}, function (props) {
  return props.view === "list" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3());
});

function ViewTypePage(_ref3) {
  var location = _ref3.location,
      data = _ref3.data;
  var query = qs__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search, {
    ignoreQueryPrefix: true
  });

  if (!Object.keys(query).length) {
    query.view = "card";
  }

  return /*#__PURE__*/React.createElement(ContentsContainer, {
    view: query.view
  }, query.view === "card" ? /*#__PURE__*/React.createElement(CardView, {
    data: data,
    path: location.pathname
  }) : /*#__PURE__*/React.createElement(ListView, {
    data: data
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ViewTypePage));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/common/images/donga.png":
/*!*************************************!*\
  !*** ./src/common/images/donga.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "donga.53ada70f87aa07399c2b1f10a85e1106.png");

/***/ }),

/***/ "./src/common/images/google.png":
/*!**************************************!*\
  !*** ./src/common/images/google.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "google.70f49effaed52a7692d0142b8ad7fec4.png");

/***/ }),

/***/ "./src/common/images/hani.png":
/*!************************************!*\
  !*** ./src/common/images/hani.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "hani.32d3621202bb5390fc9942207cd136c9.png");

/***/ }),

/***/ "./src/common/images/sbs.png":
/*!***********************************!*\
  !*** ./src/common/images/sbs.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "sbs.2104644aad6d769839916f1eaed48613.png");

/***/ }),

/***/ "./src/common/images/segye.png":
/*!*************************************!*\
  !*** ./src/common/images/segye.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "segye.49e8f76275692523424a8b0bafa276af.png");

/***/ }),

/***/ "./src/detail/component/Article.js":
/*!*****************************************!*\
  !*** ./src/detail/component/Article.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common_component_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/Icon */ "./src/common/component/Icon.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comments */ "./src/detail/component/Comments.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n  position: relative;\n  & img {\n    margin-bottom: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AricleContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"])(_templateObject());
function Detail(_ref) {
  var news = _ref.news;
  return /*#__PURE__*/React.createElement(AricleContainer, {
    elevation: 3
  }, /*#__PURE__*/React.createElement(_common_component_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "100px",
    margin: "10px",
    name: news.company,
    border: "1px solid"
  }), /*#__PURE__*/React.createElement("img", {
    src: news.image
  }), /*#__PURE__*/React.createElement("p", null, news.description), /*#__PURE__*/React.createElement(_Comments__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/detail/component/Comments.js":
/*!******************************************!*\
  !*** ./src/detail/component/Comments.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comments; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    font-size: 0.7rem;\n    color: ", ";\n    display: flex;\n    align-self: flex-end;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 95%;\n    height: auto;\n    padding: 10px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 10px;\n    width: 95%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 40px;\n    width: 75px;\n    margin-left: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: static !important;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 300px;\n    width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CommentsWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject2());
var StyledTextField = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"])(_templateObject3());
var InputDatas = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4());
var Characters = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5(), function (props) {
  return props.color === "gray" ? "#848484" : "red";
});
function Comments(props) {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sendable = _React$useState4[0],
      setSendable = _React$useState4[1];

  React.useEffect(function () {
    if (value.length > 300) setSendable(false);
    if (value.length <= 300) setSendable(true);
  }, [value]);

  var handleChange = function handleChange(event) {
    setInputValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement(CommentsWrap, null, /*#__PURE__*/React.createElement(StyledTextField, {
    id: "outlined-textarea",
    onChange: handleChange,
    rowsMax: 5,
    label: "\uB313\uAE00 \uB2EC\uAE30",
    placeholder: "\uBC14\uB974\uACE0 \uACE0\uC6B4 \uB9D0\uC744 \uC0AC\uC6A9\uD574\uC8FC\uC138\uC694.",
    multiline: true,
    variant: "outlined",
    value: inputValue
  }), /*#__PURE__*/React.createElement(InputDatas, null, /*#__PURE__*/React.createElement(Characters, {
    color: sendable ? "gray" : "red"
  }, inputValue.length, " / 300"), /*#__PURE__*/React.createElement(StyledButton, {
    variant: "contained",
    color: "primary"
  }, "\uC785 \uB825")));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/detail/container/ArticleContainer.js":
/*!**************************************************!*\
  !*** ./src/detail/container/ArticleContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArticleContainer; });
/* harmony import */ var _component_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Article */ "./src/detail/component/Article.js");

var data = [{
  id: 1,
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  category: "MASK",
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  description: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "segye"
}, {
  id: 2,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571615334_9555.jpg",
  category: "IT",
  title: "인스타그램 고객 지원센터 위장한 공격자들 주의보",
  description: "팔로워 많은 계정 노리는 공격, 인스타그램 고객 지원 센터인 척 가장 공격 성공률 좋은 편...문법과 철자 오류 유의한다면 어느 정도 방어 가능",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "google"
}, {
  id: 3,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "donga"
}, {
  id: 4,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "hani"
}, {
  id: 5,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "sbs"
}];
function ArticleContainer(_ref) {
  var id = _ref.id;
  var news = data.find(function (item) {
    return item.id === parseInt(id);
  });

  var onSubmitComments = function onSubmitComments(sendable) {};

  return /*#__PURE__*/React.createElement(_component_Article__WEBPACK_IMPORTED_MODULE_0__["default"], {
    news: news
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/detail/page/DetailPage.js":
/*!***************************************!*\
  !*** ./src/detail/page/DetailPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailPage; });
/* harmony import */ var _container_ArticleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/ArticleContainer */ "./src/detail/container/ArticleContainer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var DetailPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
function DetailPage(_ref) {
  var match = _ref.match;
  console.log("DetailPage");
  var id = match.params.id;
  return /*#__PURE__*/React.createElement(DetailPageContainer, null, /*#__PURE__*/React.createElement(_container_ArticleContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
    id: id
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/component/GNB.js":
/*!**********************************!*\
  !*** ./src/gnb/component/GNB.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GNB; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _LoginBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginBtn */ "./src/gnb/component/LoginBtn.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 50px;\n  margin-right: 15px;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  & li {\n    margin-right: 10px;\n    display: flex;\n    align-items: center;\n    /* & + & {\n      margin-right: 10px;\n    } */\n    & a {\n      color: rgb(40, 42, 53);\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 1300px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 70px;\n  width: 100vw;\n  box-shadow: rgb(238, 238, 238) 0px 1px 0px 0px;\n  background: #fff;\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 9998;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2());
var RightItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject3());
var Logo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"])(_templateObject4(), function (props) {
  return props.image;
});
function GNB() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement(RightItem, null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/React.createElement(Logo, {
    image: _images_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/news"
  }, "\uC5B8\uB860\uC0AC\uBCC4 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/news"
  }, "\uC18D\uBCF4"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_LoginBtn__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/component/LoginBtn.js":
/*!***************************************!*\
  !*** ./src/gnb/component/LoginBtn.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_component_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/component/Modal */ "./src/common/component/Modal.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Signin */ "./src/gnb/component/Signin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      background-image: url(", ");\n      background-size: 60px 60px;\n      background-repeat: no-repeat;\n      border-radius: 50%;\n      width: 60px;\n      height: 60px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 17px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  &.MuiButtonBase-root {\n    padding: 0 !important;\n    font-size: 18px;\n    padding: 10px 15px;\n    width: 100%;\n    & a {\n      color: black;\n      width: 100%;\n      height: 100%;\n      padding: 10px 15px;\n      text-align: left;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  height: 84px;\n  width: 84px;\n  margin-bottom: 8px;\n  & img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n  }\n  & .MuiButtonBase-root {\n    position: absolute;\n    background: #fff;\n    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),\n      0 1px 3px 1px rgba(65, 69, 73, 0.15);\n    width: 34px;\n    height: 34px;\n    right: -8px;\n    bottom: -8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & h6 {\n    margin: 12px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var UserContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var UserInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Menu = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"])(_templateObject3());
var BtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var Avatar = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"])(_templateObject5(), function (props) {
  return props.image && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6(), props.image);
});
function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      login = _useState2[0],
      setLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loginModal = _useState4[0],
      setLoginModal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      infoModal = _useState6[0],
      setInfoModal = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      userInfo = _useState8[0],
      setUserInfo = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/auth/checkUser").then(function (res) {
      setLogin(typeof res.data.user !== "undefined");
      setUserInfo(res.data.user);
    })["catch"](function (error) {
      setLoggedIn(false);
    });
  }, []);

  var handleClickLoginModal = function handleClickLoginModal() {
    setLoginModal(!loginModal);
  };

  var handleClickInfoModal = function handleClickInfoModal() {
    setInfoModal(!infoModal);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, login ? /*#__PURE__*/React.createElement(Avatar, {
    onClick: handleClickInfoModal,
    image: userInfo && userInfo.image
  }) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: handleClickLoginModal
  }, "\uB85C\uADF8\uC778 / \uAC00\uC785"), loginModal && /*#__PURE__*/React.createElement(_common_component_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    on: loginModal,
    onClickClose: handleClickLoginModal
  }, /*#__PURE__*/React.createElement(_Signin__WEBPACK_IMPORTED_MODULE_6__["default"], null)), infoModal && /*#__PURE__*/React.createElement(_common_component_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    on: infoModal,
    onClickClose: handleClickInfoModal
  }, /*#__PURE__*/React.createElement(UserContainer, null, /*#__PURE__*/React.createElement(UserInner, null, /*#__PURE__*/React.createElement("img", {
    src: userInfo && userInfo.image
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    color: "primary",
    component: "span"
  }, /*#__PURE__*/React.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle1"
  }, userInfo && userInfo.nick)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/React.createElement(Menu, {
    color: "primary"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/user/scrap"
  }, "\uC2A4\uD06C\uB7A9")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/React.createElement(Menu, {
    color: "primary"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/user/comment"
  }, "\uB0B4 \uB313\uAE00")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), /*#__PURE__*/React.createElement(BtnWrap, null, /*#__PURE__*/React.createElement("a", {
    href: "/auth/logout"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "outlined",
    color: "primary"
  }, "\uB85C\uADF8\uC544\uC6C3")))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/component/Signin.js":
/*!*************************************!*\
  !*** ./src/gnb/component/Signin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _images_google_login_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/google_login_button.png */ "./src/images/google_login_button.png");
/* harmony import */ var _images_kakao_login_button_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/kakao_login_button.png */ "./src/images/kakao_login_button.png");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 1.5rem;\n  color: #676767;\n  font-weight: bold;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 350px;\n  height: 80px;\n  margin: 5px;\n  padding: 5px;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  margin-top: -50px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & .MuiButton-root {\n    margin: 2px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SignInContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"])(_templateObject2(), function (props) {
  return props.image;
});
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
function SignIn() {
  return /*#__PURE__*/React.createElement(SignInContainer, null, /*#__PURE__*/React.createElement(TitleContainer, null, "[\uC791\uC740\uB85C\uACE0] \uB2E4\uC74C \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement("a", {
    href: "/auth/google"
  }, /*#__PURE__*/React.createElement(StyledButton, {
    image: _images_google_login_button_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  })), /*#__PURE__*/React.createElement("a", {
    href: "/auth/kakao"
  }, /*#__PURE__*/React.createElement(StyledButton, {
    image: _images_kakao_login_button_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/container/GNBContainer.js":
/*!*******************************************!*\
  !*** ./src/gnb/container/GNBContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GNBPage; });
/* harmony import */ var _component_GNB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/GNB */ "./src/gnb/component/GNB.js");

function GNBPage() {
  return /*#__PURE__*/React.createElement(_component_GNB__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/page/GNBPage.js":
/*!*********************************!*\
  !*** ./src/gnb/page/GNBPage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GNBPage; });
/* harmony import */ var _container_GNBContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/GNBContainer */ "./src/gnb/container/GNBContainer.js");

function GNBPage() {
  return /*#__PURE__*/React.createElement(_container_GNBContainer__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/component/Card.js":
/*!************************************!*\
  !*** ./src/home/component/Card.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsCard; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.7s ease-out;\n  &:hover{\n    box-shadow: 0px 1px 4px rgba(0,0,0,.1), 0px 2px 3px rgba(0,0,0,.12), 0px 1px 3px rgba(0,0,0,.14);\n    transform: translateY(-5px);\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var StyledCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"])(_templateObject());
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: 330,
      minWidth: 330,
      height: 500,
      margin: "0 15px"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    avatarRed: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__["red"][500]
    }
  };
}); // image, title, description, category 를 입력받아 Card를 리턴하는 컴포넌트 함수

function NewsCard(_ref) {
  var image = _ref.image,
      category = _ref.category,
      title = _ref.title,
      description = _ref.description,
      originalLink = _ref.originalLink,
      date = _ref.date,
      company = _ref.company;
  var classes = useStyles(); // desciprion 100글자 제한 + 말줄임표

  var subString = function subString(desc, count) {
    var isString = typeof desc === "string";
    return isString && desc.length >= count ? desc.substring(0, count) + "..." : desc;
  };

  return /*#__PURE__*/React.createElement(StyledCard, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    avatar: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      "aria-label": "news",
      className: classes.avatar
    }, company ? company.slice(0, 4) : ''),
    action: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      "aria-label": "settings"
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["MoreVert"], null)),
    title: subString(title, 20),
    subheader: date
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.media,
    image: image,
    title: title
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, subString(description, 80))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    disableSpacing: true
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "add to favorites"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Favorite"], null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "share"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Share"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/component/Category.js":
/*!****************************************!*\
  !*** ./src/home/component/Category.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  paper: {
    height: "100%",
    marginRight: "20px"
  }
});
function Category() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var categoryList = ["전체", "정치", "경제", "사회"];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    square: true,
    className: classes.paper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    value: value,
    indicatorColor: "primary",
    textColor: "primary",
    onChange: handleChange,
    orientation: "vertical",
    variant: "scrollable"
  }, categoryList.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
      key: idx,
      label: item,
      style: {
        fontSize: "1.1rem",
        fontWeight: "bold"
      }
    });
  })));
}

/***/ }),

/***/ "./src/home/component/Date.js":
/*!************************************!*\
  !*** ./src/home/component/Date.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Date; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      width: 200
    }
  };
});
function Date() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.container,
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    id: "date",
    type: "date",
    defaultValue: "2017-05-24",
    className: classes.textField,
    InputLabelProps: {
      shrink: true
    }
  }));
}

/***/ }),

/***/ "./src/home/component/Search.js":
/*!**************************************!*\
  !*** ./src/home/component/Search.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});
function Search() {
  var classes = useStyles();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    component: "form",
    className: classes.root,
    elevation: 3
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputBase"], {
    className: classes.input,
    placeholder: "Search"
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    type: "submit",
    className: classes.iconButton,
    "aria-label": "search"
  }, /*#__PURE__*/React.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_2___default.a, null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/component/Slider.js":
/*!**************************************!*\
  !*** ./src/home/component/Slider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/home/component/Card.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f1f1f1;\n  color: #c1c1c1;\n  opacity: ", ";\n  width: 100px;\n  height: 500px;\n  z-index: ", ";\n  transition: all 0.3s ease-out;\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    cursor: pointer;\n    background: black;\n    font-size: 85;\n    color: white;\n    opacity: 0.55;\n    box-shadow: 16px 18px 28px -3px rgba(143, 143, 143, 0.75);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  /* width: ", "; */\n  margin-left: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 110%;\n  position: relative;\n  left: ", "px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  transition: all 0.3s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* width: ", "; */\n  width: 100%;\n  height: ", ";\n  overflow: hidden;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.device === "web" ? "calc(990px + 75px)" : "";
}, function (props) {
  return props.height;
});
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (props) {
  return props.active * -360;
});
var ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3(), function (props) {
  return props.device === "web" ? "calc(990px + 60px)" : "";
});
var ArrowHoverAction = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
var PrevArrow = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject5(), function (props) {
  return props.visible === "none" ? 0 : 0.75;
}, function (props) {
  return props.visible === "none" ? -10 : 10;
}, function (props) {
  return props.visible === "none" ? "" : ArrowHoverAction;
});
var NextArrow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(PrevArrow)(_templateObject6(), function (props) {
  return props.visible === "none" ? "" : ArrowHoverAction;
});
function Slider(props) {
  var cardWidth = props.cardWidth,
      news = props.news;
  var max = React.useCallback(function () {
    return news.length - 2;
  }, [news]);

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var cardContainerRef = React.useRef();

  var onClickPrev = function onClickPrev() {
    setActive(active - 1 > -1 ? active - 1 : -1);
  };

  var onClickNext = function onClickNext(max) {
    setActive(active + 1 < max + 1 ? active + 1 : max + 1);
  };

  return (
    /*#__PURE__*/
    // <SliderContainer device={"web"} height="65vh">
    React.createElement(SliderContainer, {
      device: "web",
      height: "110%"
    }, /*#__PURE__*/React.createElement(ArrowContainer, {
      device: "web"
    }, /*#__PURE__*/React.createElement(PrevArrow, {
      visible: active <= -1 ? "none" : "",
      onClick: onClickPrev
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowBackIosOutlined"], {
      style: {
        fontSize: 75
      }
    })), /*#__PURE__*/React.createElement(NextArrow, {
      visible: active >= max() ? "none" : "",
      onClick: function onClick() {
        return onClickNext(max());
      }
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowForwardIosOutlined"], {
      style: {
        fontSize: 75
      }
    }))), /*#__PURE__*/React.createElement(CardContainer, {
      ref: cardContainerRef,
      active: active
    }, news.map(function (item, index) {
      return /*#__PURE__*/React.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        key: index
      }, item));
    })))
  );
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/container/CategoryContainer.js":
/*!*************************************************!*\
  !*** ./src/home/container/CategoryContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Category */ "./src/home/component/Category.js");


function CategoryContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Category__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/home/container/DateContainer.js":
/*!*********************************************!*\
  !*** ./src/home/container/DateContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Date */ "./src/home/component/Date.js");


function DateContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Date__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/home/container/SearchContainer.js":
/*!***********************************************!*\
  !*** ./src/home/container/SearchContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Search */ "./src/home/component/Search.js");


function SearchContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Search__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/home/container/SliderContainer.js":
/*!***********************************************!*\
  !*** ./src/home/container/SliderContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderContainer; });
/* harmony import */ var _component_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Slider */ "./src/home/component/Slider.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var news = [{
  image: "https://image.newsis.com/2020/08/31/NISI20200831_0016630218_web.jpg?rnd=20200831150912",
  category: "정치",
  title: "\u6587\uB300\uD1B5\uB839 \"\uBAA8\uCC98\uB7FC \uB3C5\uC11C \uC990\uACA8\uBCF4\uAE38\"\u2026'\uCF54\uB85C\uB098 \uC0AC\uD53C\uC5D4\uC2A4' \uB4F1 \uCD94\uCC9C",
  description: "'\uC624\uB298\uBD80\uD130\uC758 \uC138\uACC4' '\uB9AC\uB354\uB77C\uBA74 \uC815\uC870\uCC98\uB7FC' '\uD64D\uBC94\uB3C4 \uD3C9\uC804' \uB4F1 \uCD94\uCC9C\n        \"\uB3C5\uC11C\uAC00 \uB354\uC704 \uC774\uAE30\uB294 \uC88B\uC740 \uBC29\uBC95 \uC544\uB2D0\uAE4C\u2026\uCD9C\uD310\uC2DC\uC7A5\uC5D0\uB3C4 \uB3C4\uC6C0\"\n        \"\uC815\uC870\uB300\uC655 \uAE08\uB09C\uC804\uAD8C \uD601\uD30C\uD558\uBA70 \uACBD\uC81C \uAC1C\uD601\uD55C \uC774\uC57C\uAE30 \uAC00\uC7A5 \uC88B\uC544\"",
  originalLink: "https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300",
  date: new Date().toString(),
  company: "뉴시스"
}, {
  image: "https://image.newsis.com/2020/08/24/NISI20200824_0016606732_web.jpg?rnd=20200901120343",
  category: "정치",
  title: "\u6587\uB300\uD1B5\uB839 \"\uBAA8\uCC98\uB7FC \uB3C5\uC11C \uC990\uACA8\uBCF4\uAE38\"\u2026'\uCF54\uB85C\uB098 \uC0AC\uD53C\uC5D4\uC2A4' \uB4F1 \uCD94\uCC9C",
  description: "'\uC624\uB298\uBD80\uD130\uC758 \uC138\uACC4' '\uB9AC\uB354\uB77C\uBA74 \uC815\uC870\uCC98\uB7FC' '\uD64D\uBC94\uB3C4 \uD3C9\uC804' \uB4F1 \uCD94\uCC9C\n        \"\uB3C5\uC11C\uAC00 \uB354\uC704 \uC774\uAE30\uB294 \uC88B\uC740 \uBC29\uBC95 \uC544\uB2D0\uAE4C\u2026\uCD9C\uD310\uC2DC\uC7A5\uC5D0\uB3C4 \uB3C4\uC6C0\"\n        \"\uC815\uC870\uB300\uC655 \uAE08\uB09C\uC804\uAD8C \uD601\uD30C\uD558\uBA70 \uACBD\uC81C \uAC1C\uD601\uD55C \uC774\uC57C\uAE30 \uAC00\uC7A5 \uC88B\uC544\"",
  originalLink: "https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300",
  date: new Date().toString(),
  company: "뉴시스"
}, {
  image: "https://image.newsis.com/2018/01/15/NISI20180115_0000094737_web.jpg?rnd=20180115163907",
  category: "정치",
  title: "\u6587\uB300\uD1B5\uB839 \"\uBAA8\uCC98\uB7FC \uB3C5\uC11C \uC990\uACA8\uBCF4\uAE38\"\u2026'\uCF54\uB85C\uB098 \uC0AC\uD53C\uC5D4\uC2A4' \uB4F1 \uCD94\uCC9C",
  description: "'\uC624\uB298\uBD80\uD130\uC758 \uC138\uACC4' '\uB9AC\uB354\uB77C\uBA74 \uC815\uC870\uCC98\uB7FC' '\uD64D\uBC94\uB3C4 \uD3C9\uC804' \uB4F1 \uCD94\uCC9C\n        \"\uB3C5\uC11C\uAC00 \uB354\uC704 \uC774\uAE30\uB294 \uC88B\uC740 \uBC29\uBC95 \uC544\uB2D0\uAE4C\u2026\uCD9C\uD310\uC2DC\uC7A5\uC5D0\uB3C4 \uB3C4\uC6C0\"\n        \"\uC815\uC870\uB300\uC655 \uAE08\uB09C\uC804\uAD8C \uD601\uD30C\uD558\uBA70 \uACBD\uC81C \uAC1C\uD601\uD55C \uC774\uC57C\uAE30 \uAC00\uC7A5 \uC88B\uC544\"",
  originalLink: "https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300",
  date: new Date().toString(),
  company: "뉴시스"
}, {
  image: "https://image.newsis.com/2020/09/01/NISI20200901_0000591915_web.jpg?rnd=20200901071247",
  category: "정치",
  title: "\u6587\uB300\uD1B5\uB839 \"\uBAA8\uCC98\uB7FC \uB3C5\uC11C \uC990\uACA8\uBCF4\uAE38\"\u2026'\uCF54\uB85C\uB098 \uC0AC\uD53C\uC5D4\uC2A4' \uB4F1 \uCD94\uCC9C",
  description: "'\uC624\uB298\uBD80\uD130\uC758 \uC138\uACC4' '\uB9AC\uB354\uB77C\uBA74 \uC815\uC870\uCC98\uB7FC' '\uD64D\uBC94\uB3C4 \uD3C9\uC804' \uB4F1 \uCD94\uCC9C\n        \"\uB3C5\uC11C\uAC00 \uB354\uC704 \uC774\uAE30\uB294 \uC88B\uC740 \uBC29\uBC95 \uC544\uB2D0\uAE4C\u2026\uCD9C\uD310\uC2DC\uC7A5\uC5D0\uB3C4 \uB3C4\uC6C0\"\n        \"\uC815\uC870\uB300\uC655 \uAE08\uB09C\uC804\uAD8C \uD601\uD30C\uD558\uBA70 \uACBD\uC81C \uAC1C\uD601\uD55C \uC774\uC57C\uAE30 \uAC00\uC7A5 \uC88B\uC544\"",
  originalLink: "https://newsis.com/view/?id=NISX20200901_0001150406&cID=10301&pID=10300",
  date: new Date().toString(),
  company: "뉴시스"
}]; // 더미데이터 뉴스

var testNews = [].concat(news, news, _toConsumableArray(news.slice(0, 2)));
function SliderContainer(props) {
  return /*#__PURE__*/React.createElement(_component_Slider__WEBPACK_IMPORTED_MODULE_0__["default"], {
    news: testNews
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/page/HomePage.js":
/*!***********************************!*\
  !*** ./src/home/page/HomePage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _container_CategoryContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/CategoryContainer */ "./src/home/container/CategoryContainer.js");
/* harmony import */ var _container_DateContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/DateContainer */ "./src/home/container/DateContainer.js");
/* harmony import */ var _container_SearchContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/SearchContainer */ "./src/home/container/SearchContainer.js");
/* harmony import */ var _container_SliderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/SliderContainer */ "./src/home/container/SliderContainer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 500px;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 50px;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());
var FilterWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2());
var ContentsWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject3());
function HomePage() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(FilterWrap, null, /*#__PURE__*/React.createElement(_container_DateContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_container_SearchContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/React.createElement(ContentsWrap, null, /*#__PURE__*/React.createElement(_container_CategoryContainer__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement(_container_SliderContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/images/google_login_button.png":
/*!********************************************!*\
  !*** ./src/images/google_login_button.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "google_login_button.1ce1aaa5a127fa3e492a12bb62f99304.png");

/***/ }),

/***/ "./src/images/kakao_login_button.png":
/*!*******************************************!*\
  !*** ./src/images/kakao_login_button.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "kakao_login_button.ad5b2003ad3818b78f90944a1873db4c.png");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.b87f3acfa3a73f8ac29adff85a269c9d.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");

 // store ContextAPI로 감싸기

react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById("root"));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/component/CorpCategory.js":
/*!********************************************!*\
  !*** ./src/news/component/CorpCategory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CorpCategory; });
/* harmony import */ var _common_component_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/component/Icon */ "./src/common/component/Icon.js");

var corps = ["google", "donga", "hani", "sbs", "segye"];
function CorpCategory() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, corps.map(function (corp, index) {
    return /*#__PURE__*/React.createElement(_common_component_Icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
      key: index,
      size: "100px",
      margin: "10px",
      name: corp
    });
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/component/NewsList.js":
/*!****************************************!*\
  !*** ./src/news/component/NewsList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_component_ViewTypeBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/component/ViewTypeBtn */ "./src/common/component/ViewTypeBtn.js");
/* harmony import */ var _common_component_ViewTypePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/component/ViewTypePage */ "./src/common/component/ViewTypePage.js");



var data = [{
  id: 1,
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  category: "MASK",
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  description: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "조선일보"
}, {
  id: 2,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571615334_9555.jpg",
  category: "IT",
  title: "인스타그램 고객 지원센터 위장한 공격자들 주의보",
  description: "팔로워 많은 계정 노리는 공격, 인스타그램 고객 지원 센터인 척 가장 공격 성공률 좋은 편...문법과 철자 오류 유의한다면 어느 정도 방어 가능",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}, {
  id: 3,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}, {
  id: 4,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}, {
  id: 5,
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}];
function NewsList() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_common_component_ViewTypeBtn__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement(_common_component_ViewTypePage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/container/CorpCategoryContainer.js":
/*!*****************************************************!*\
  !*** ./src/news/container/CorpCategoryContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CorpCategoryContainer; });
/* harmony import */ var _component_CorpCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/CorpCategory */ "./src/news/component/CorpCategory.js");

function CorpCategoryContainer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_component_CorpCategory__WEBPACK_IMPORTED_MODULE_0__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/container/NewsContainer.js":
/*!*********************************************!*\
  !*** ./src/news/container/NewsContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsContainer; });
/* harmony import */ var _component_NewsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/NewsList */ "./src/news/component/NewsList.js");

function NewsContainer() {
  return /*#__PURE__*/React.createElement(_component_NewsList__WEBPACK_IMPORTED_MODULE_0__["default"], null);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/page/NewsPage.js":
/*!***********************************!*\
  !*** ./src/news/page/NewsPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsPage; });
/* harmony import */ var _container_CorpCategoryContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/CorpCategoryContainer */ "./src/news/container/CorpCategoryContainer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _container_NewsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/NewsContainer */ "./src/news/container/NewsContainer.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
function NewsPage() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(_container_NewsContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/user/component/User.js":
/*!************************************!*\
  !*** ./src/user/component/User.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _common_component_ViewTypePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/component/ViewTypePage */ "./src/common/component/ViewTypePage.js");
/* harmony import */ var _common_component_ViewTypeBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/component/ViewTypeBtn */ "./src/common/component/ViewTypeBtn.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      border-bottom: 3px solid #3f63bf;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  border: 0;\n\n  & a {\n    color: black;\n    font-size: 20px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 60px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var data = [{
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  category: "MASK",
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  description: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "조선일보"
}, {
  image: "https://www.boannews.com/media/upFiles2/2020/08/571615334_9555.jpg",
  category: "IT",
  title: "인스타그램 고객 지원센터 위장한 공격자들 주의보",
  description: "팔로워 많은 계정 노리는 공격, 인스타그램 고객 지원 센터인 척 가장 공격 성공률 좋은 편...문법과 철자 오류 유의한다면 어느 정도 방어 가능",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}, {
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}, {
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}, {
  image: "https://www.boannews.com/media/upFiles2/2020/08/571553550_8076.jpg",
  category: "IT",
  title: "다시 한 번 북한 찍은 미국, 이번엔 암호화폐 계정 노린다",
  description: "미국, 앞으로 280개 불법 암호화폐 계정 압수한다...대부분 북한과 중국의 것, 작년에만 암호화폐에서 천문학적인 돈이 사라져...“두고 보지 않겠다”는 미국의 경고",
  originalLink: "https://devhyuk.com",
  date: new Date().toString(),
  company: "보안뉴스"
}];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    backgroundColor: "#3f63bf",
    borderColor: "#3f63bf"
  },
  formControl: {
    margin: 4,
    minWidth: 120
  }
});
var MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
var MenuBtn = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button(_templateObject2(), function (props) {
  return props.value && Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject3());
});
var FilterWrap = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject4());
function User(_ref) {
  var tab = _ref.tab;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tab === "scrap" ? 0 : 1),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      order = _useState4[0],
      setOrder = _useState4[1];

  var categoryList = ["scrap", "comment"];
  var orderList = ["push", "latest", "comments"]; //담은 순, 최신 순, 댓글 많은 순

  var makeSelect = function makeSelect(selectList, value) {
    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
      variant: "outlined",
      className: classes.formControl
    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], {
      "native": true,
      value: value,
      onChange: handleChange
    }, selectList.map(function (item) {
      return /*#__PURE__*/React.createElement("option", {
        key: item,
        value: item
      }, item);
    })));
  };

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    elevation: 3
  }, /*#__PURE__*/React.createElement(MenuContainer, null, categoryList.map(function (item, idx) {
    console.log(item);
    console.log(tab);
    console.log(item === tab);
    return /*#__PURE__*/React.createElement(MenuBtn, {
      key: idx,
      value: item === tab ? 1 : 0
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      to: "/user/".concat(item)
    }, item));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FilterWrap, null, /*#__PURE__*/React.createElement(_common_component_ViewTypeBtn__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/React.createElement("div", null, makeSelect(["조선", "중앙"], order), makeSelect(orderList, order))), /*#__PURE__*/React.createElement(_common_component_ViewTypePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/user/container/UserContainer.js":
/*!*********************************************!*\
  !*** ./src/user/container/UserContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserContainer; });
/* harmony import */ var _component_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/User */ "./src/user/component/User.js");

function UserContainer(_ref) {
  var tab = _ref.tab;
  return /*#__PURE__*/React.createElement(_component_User__WEBPACK_IMPORTED_MODULE_0__["default"], {
    tab: tab
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/user/page/UserPage.js":
/*!***********************************!*\
  !*** ./src/user/page/UserPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserPage; });
/* harmony import */ var _container_UserContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/UserContainer */ "./src/user/container/UserContainer.js");

function UserPage(_ref) {
  var match = _ref.match;
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(_container_UserContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
    tab: match.params.tab
  }));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb21wb25lbnQvQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9wYWdlL0NoYXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9kb25nYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZXMvZ29vZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9oYW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9zYnMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzL3NlZ3llLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsL2NvbXBvbmVudC9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29tcG9uZW50L0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29udGFpbmVyL0FydGljbGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9wYWdlL0RldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvR05CLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L0xvZ2luQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ25iL2NvbnRhaW5lci9HTkJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9wYWdlL0dOQlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL0RhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL1NlYXJjaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL3BhZ2UvSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2tha2FvX2xvZ2luX2J1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29tcG9uZW50L0NvcnBDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvTmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29udGFpbmVyL0NvcnBDYXRlZ29yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb250YWluZXIvTmV3c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9wYWdlL05ld3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbXBvbmVudC9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3BhZ2UvVXNlclBhZ2UuanMiXSwibmFtZXMiOlsiY3VzdG9tSGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0IiwiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQXBwIiwiY29uc29sZSIsImxvZyIsIlVzZXJQYWdlIiwiRGV0YWlsUGFnZSIsIkNoYXRQYWdlIiwiTmV3c1BhZ2UiLCJIb21lUGFnZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJwYXBlciIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiaGVhZGVyIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJmbGV4IiwiY29udGVudHMiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJmb3JtIiwiaW5wdXRCYXNlIiwiaWNvbiIsIkNoYXRCdG4iLCJJY29uQnV0dG9uIiwiQ2hhdCIsInZpc3VhbCIsImhhbmRsZUNsaWNrIiwiY2xhc3NlcyIsImljb25CdXR0b24iLCJDaGF0Q29udGFpbmVyIiwidXNlU3RhdGUiLCJzZXRWaXN1YWwiLCJGb290ZXJDb250YWluZXIiLCJmb290ZXIiLCJJY29uQ29udGFpbmVyIiwiSW5mb1dyYXAiLCJGb290ZXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRVUkwiLCJpY29uTmFtZSIsIm1hdGNoIiwiZ29vZ2xlIiwiZ29vZ2xlSWNvbiIsImRvbmdhIiwiZG9uZ2FJY29uIiwiaGFuaSIsImhhbmlJY29uIiwic2JzIiwic2JzSWNvbiIsInNlZ3llIiwic2VneWVJY29uIiwiSWNvbkJveCIsInByb3BzIiwic2l6ZSIsIm1hcmdpbiIsIm5hbWUiLCJJY29uQ29tcG9uZW50IiwiaG92ZXJBY3Rpb24iLCJyZXN0IiwiTW9kYWxDb250YWluZXIiLCJvbiIsIk1vZGFsQm94IiwiRXhpdFdyYXAiLCJNb2RhbCIsIm9uQ2xpY2tDbG9zZSIsImNoaWxkcmVuIiwiVG9nZ2xlQnRuIiwiVG9nZ2xlQnV0dG9uIiwiVmlld0J1dHRvbiIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlVmlldyIsImV2ZW50IiwibmV3VmlldyIsInBhdGgiLCJ3aXRoUm91dGVyIiwicm9vdCIsIm1heFdpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJtZWRpYSIsImxpc3QiLCJpbmxpbmUiLCJpbWciLCJtYXJnaW5SaWdodCIsImxpc3RJdGVtIiwiTGlzdFZpZXciLCJkYXRhIiwibWFwIiwibmV3cyIsImlkeCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkNhcmRWaWV3IiwiaWQiLCJDb250ZW50c0NvbnRhaW5lciIsImNzcyIsIlZpZXdUeXBlUGFnZSIsImxvY2F0aW9uIiwicXVlcnkiLCJxcyIsInBhcnNlIiwic2VhcmNoIiwiaWdub3JlUXVlcnlQcmVmaXgiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGF0aG5hbWUiLCJBcmljbGVDb250YWluZXIiLCJQYXBlciIsIkRldGFpbCIsImNvbXBhbnkiLCJDb21tZW50c1dyYXAiLCJTdHlsZWRCdXR0b24iLCJCdXR0b24iLCJTdHlsZWRUZXh0RmllbGQiLCJUZXh0RmllbGQiLCJJbnB1dERhdGFzIiwiQ2hhcmFjdGVycyIsImNvbG9yIiwiQ29tbWVudHMiLCJSZWFjdCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VuZGFibGUiLCJzZXRTZW5kYWJsZSIsInVzZUVmZmVjdCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJvcmlnaW5hbExpbmsiLCJkYXRlIiwidG9TdHJpbmciLCJBcnRpY2xlQ29udGFpbmVyIiwiZmluZCIsIml0ZW0iLCJwYXJzZUludCIsIm9uU3VibWl0Q29tbWVudHMiLCJEZXRhaWxQYWdlQ29udGFpbmVyIiwic2VjdGlvbiIsInBhcmFtcyIsIkNvbnRhaW5lciIsIm5hdiIsIklubmVyIiwiUmlnaHRJdGVtIiwidWwiLCJMb2dvIiwiR05CIiwiTG9nb0ltYWdlIiwiVXNlckNvbnRhaW5lciIsIlVzZXJJbm5lciIsIk1lbnUiLCJCdG5XcmFwIiwiQXZhdGFyIiwiTG9naW4iLCJsb2dpbiIsInNldExvZ2luIiwibG9naW5Nb2RhbCIsInNldExvZ2luTW9kYWwiLCJpbmZvTW9kYWwiLCJzZXRJbmZvTW9kYWwiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwidXNlciIsImVycm9yIiwic2V0TG9nZ2VkSW4iLCJoYW5kbGVDbGlja0xvZ2luTW9kYWwiLCJoYW5kbGVDbGlja0luZm9Nb2RhbCIsIm5pY2siLCJTaWduSW5Db250YWluZXIiLCJUaXRsZUNvbnRhaW5lciIsIlNpZ25JbiIsImdvb2dsZUxvZ2luSW1hZ2UiLCJrYWthb0xvZ2luSW1hZ2UiLCJHTkJQYWdlIiwiU3R5bGVkQ2FyZCIsIkNhcmQiLCJ0aGVtZSIsIm1pbldpZHRoIiwicGFkZGluZ1RvcCIsImF2YXRhclJlZCIsImJhY2tncm91bmRDb2xvciIsInJlZCIsIk5ld3NDYXJkIiwic3ViU3RyaW5nIiwiZGVzYyIsImNvdW50IiwiaXNTdHJpbmciLCJzdWJzdHJpbmciLCJhdmF0YXIiLCJzbGljZSIsIkNhdGVnb3J5Iiwic2V0VmFsdWUiLCJjYXRlZ29yeUxpc3QiLCJuZXdWYWx1ZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbnRhaW5lciIsImZsZXhXcmFwIiwidGV4dEZpZWxkIiwic2hyaW5rIiwiaW5wdXQiLCJtYXJnaW5MZWZ0IiwiU2VhcmNoIiwiU2xpZGVyQ29udGFpbmVyIiwiZGV2aWNlIiwiQ2FyZENvbnRhaW5lciIsImFjdGl2ZSIsIkFycm93Q29udGFpbmVyIiwiQXJyb3dIb3ZlckFjdGlvbiIsIlByZXZBcnJvdyIsInNwYW4iLCJ2aXNpYmxlIiwiTmV4dEFycm93IiwiU2xpZGVyIiwiY2FyZFdpZHRoIiwibWF4IiwidXNlQ2FsbGJhY2siLCJzZXRBY3RpdmUiLCJjYXJkQ29udGFpbmVyUmVmIiwidXNlUmVmIiwib25DbGlja1ByZXYiLCJvbkNsaWNrTmV4dCIsImluZGV4IiwiQ2F0ZWdvcnlDb250YWluZXIiLCJEYXRlQ29udGFpbmVyIiwiU2VhcmNoQ29udGFpbmVyIiwidGVzdE5ld3MiLCJGaWx0ZXJXcmFwIiwiQ29udGVudHNXcmFwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29ycHMiLCJDb3JwQ2F0ZWdvcnkiLCJjb3JwIiwiTmV3c0xpc3QiLCJDb3JwQ2F0ZWdvcnlDb250YWluZXIiLCJOZXdzQ29udGFpbmVyIiwiYm9yZGVyQ29sb3IiLCJmb3JtQ29udHJvbCIsIk1lbnVDb250YWluZXIiLCJNZW51QnRuIiwiYnV0dG9uIiwiVXNlciIsInRhYiIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckxpc3QiLCJtYWtlU2VsZWN0Iiwic2VsZWN0TGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FB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QUQscUJBQ0Usb0JBQUMscUVBQUQsT0FERixlQUVFLGlDQUNHdUgsVUFBVSxDQUFDLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FBRCxFQUFlSCxLQUFmLENBRGIsRUFFR0csVUFBVSxDQUFDRCxTQUFELEVBQVlGLEtBQVosQ0FGYixDQUZGLENBREYsZUFRRSxvQkFBQyxzRUFBRDtBQUFjLFFBQUksRUFBRXRLO0FBQXBCLElBUkYsQ0FiRixDQURGO0FBMEJELEM7Ozs7Ozs7Ozs7Ozs7QUM5SkQ7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTZ0UsYUFBVCxPQUFnQztBQUFBLE1BQVBxRyxHQUFPLFFBQVBBLEdBQU87QUFDN0Msc0JBQU8sb0JBQUMsdURBQUQ7QUFBTSxPQUFHLEVBQUVBO0FBQVgsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNoUSxRQUFULE9BQTZCO0FBQUEsTUFBVDZDLEtBQVMsUUFBVEEsS0FBUztBQUMxQyxzQkFDRSxrREFDRSxvQkFBQyxnRUFBRDtBQUFlLE9BQUcsRUFBRUEsS0FBSyxDQUFDcUcsTUFBTixDQUFhOEc7QUFBakMsSUFERixDQURGO0FBS0QsQyIsImZpbGUiOiJhcHAuY2JiY2RmNTUzMTc4ZmI0NTdjNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInJlYWN0LmJ1bmRsZVwiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgQ2hhdFBhZ2UgZnJvbSBcIi4vY2hhdC9wYWdlL0NoYXRQYWdlXCI7XG5pbXBvcnQgTmV3c1BhZ2UgZnJvbSBcIi4vbmV3cy9wYWdlL05ld3NQYWdlXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS9wYWdlL0hvbWVQYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgcmVzZXQgZnJvbSBcInN0eWxlZC1yZXNldFwiO1xuaW1wb3J0IEdOQlBhZ2UgZnJvbSBcIi4vZ25iL3BhZ2UvR05CUGFnZVwiO1xuaW1wb3J0IERldGFpbFBhZ2UgZnJvbSBcIi4vZGV0YWlsL3BhZ2UvRGV0YWlsUGFnZVwiO1xuaW1wb3J0IFVzZXJQYWdlIGZyb20gXCIuL3VzZXIvcGFnZS9Vc2VyUGFnZVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbW1vbi9jb21wb25lbnQvTW9kYWxcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tbW9uL2NvbXBvbmVudC9Gb290ZXJcIjtcblxuLy8gbG9naW4gdGVzdFxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9nbmIvY29tcG9uZW50L1NpZ25pblwiO1xuXG5jb25zdCBjdXN0b21IaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICR7cmVzZXR9O1xuICAqIHtcbiAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICB9XG5cbmA7XG5cbmNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcbi8vIHJvdXRlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zb2xlLmxvZyhcImFwcCEhISEhISEhIVwiKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtjdXN0b21IaXN0b3J5fT5cbiAgICAgICAgICA8R05CUGFnZSAvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2VyLzp0YWJcIiBjb21wb25lbnQ9e1VzZXJQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCIgY29tcG9uZW50PXtEZXRhaWxQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2hhdFwiIGNvbXBvbmVudD17Q2hhdFBhZ2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdzLzppZFwiIGNvbXBvbmVudD17RGV0YWlsUGFnZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3NcIiBjb21wb25lbnQ9e05ld3NQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICA8Q2hhdFBhZ2UgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgSW5wdXRCYXNlLCBJY29uQnV0dG9uLCBab29tIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIjtcclxuaW1wb3J0IEF0dGFjaEZpbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZVwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IENoYXRCdWJibGVPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGVPdXRsaW5lXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBwYXBlcjoge1xyXG4gICAgekluZGV4OiA5OTk4LFxyXG4gICAgd2lkdGg6IDM2MCxcclxuICAgIGhlaWdodDogNTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIGJvdHRvbTogMzAsXHJcbiAgICByaWdodDogMzAsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogNjAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIFwiJiBzcGFuXCI6IHtcclxuICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50czoge1xyXG4gICAgZmxleDogMSxcclxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICBoZWlnaHQ6IDU3LFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBpbnB1dEJhc2U6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIGhlaWdodDogXCI4MCVcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IENoYXRCdG4gPSBzdHlsZWQoSWNvbkJ1dHRvbilgXHJcbiAgJi5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XHJcbiAgICAmLk11aUJ1dHRvbkJhc2Utcm9vdDpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCh7IHZpc3VhbCwgaGFuZGxlQ2xpY2sgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gdmlzdWFsID8gKFxyXG4gICAgPFpvb20gaW49e3Zpc3VhbH0+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxzcGFuPuywuOyXrOyduOybkDwvc3Bhbj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfT48L2Rpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEF0dGFjaEZpbGVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJhc2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi66mU7IS47KeA66W8IOyeheugpe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L1pvb20+XHJcbiAgKSA6IChcclxuICAgIDxDaGF0QnRuIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgIDxDaGF0QnViYmxlT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICA8L0NoYXRCdG4+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL2NvbXBvbmVudC9DaGF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Q29udGFpbmVyKCkge1xyXG4gIGNvbnN0IFt2aXN1YWwsIHNldFZpc3VhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXN1YWwoIXZpc3VhbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxDaGF0IHZpc3VhbD17dmlzdWFsfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+O1xyXG59XHJcbiIsImltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ2hhdENvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxDaGF0Q29udGFpbmVyIC8+O1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuXG4vLyBmb290ZXLsu6jthYzsnbTrhIggMTAwdncg66GcIHdpZHRo7ISk7KCV7ZWY66m0IOyKpO2BrOuhpOuwnOyDnVxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcCA6IDIwMHB4O1xuICAgIHRvcDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuYDtcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgICYgPiBkaXYge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgIH1cbmA7XG5jb25zdCBJbmZvV3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJiA+IHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9vdGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgey8qIOuplOydvCDslYTsnbTsvZggKi99XG4gICAgICAgICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiDsubTsubTsmKQg7JWE7J207L2YICovfVxuICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyAgdmlld0JveD1cIjAgMCAyMDggMTkxLjk0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTEwNCwwQzQ2LjU2LDAsMCwzNi43MSwwLDgyYzAsMjkuMjgsMTkuNDcsNTUsNDguNzUsNjkuNDgtMS41OSw1LjQ5LTEwLjI0LDM1LjM0LTEwLjU4LDM3LjY5LDAsMC0uMjEsMS43Ni45MywyLjQzYTMuMTQsMy4xNCwwLDAsMCwyLjQ4LjE1YzMuMjgtLjQ2LDM4LTI0LjgxLDQ0LTI5QTEzMS41NiwxMzEuNTYsMCwwLDAsMTA0LDE2NGM1Ny40NCwwLDEwNC0zNi43MSwxMDQtODJTMTYxLjQ0LDAsMTA0LDBaTTUyLjUzLDY5LjI3Yy0uMTMsMTEuNi4xLDIzLjgtLjA5LDM1LjIyLS4wNiwzLjY1LTIuMTYsNC43NC01LDUuNzhhMS44OCwxLjg4LDAsMCwxLTEsLjA3Yy0zLjI1LS42NC01Ljg0LTEuOC01LjkyLTUuODQtLjIzLTExLjQxLjA3LTIzLjYzLS4wOS0zNS4yMy0yLjc1LS4xMS02LjY3LjExLTkuMjIsMC0zLjU0LS4yMy02LTIuNDgtNS44NS01LjgzczEuOTQtNS43Niw1LjkxLTUuODJjOS4zOC0uMTQsMjEtLjE0LDMwLjM4LDAsNCwuMDYsNS43OCwyLjQ4LDUuOSw1Ljgycy0yLjMsNS42LTUuODMsNS44M0M1OS4yLDY5LjM4LDU1LjI5LDY5LjE2LDUyLjUzLDY5LjI3Wm01MC40LDQwLjQ1YTkuMjQsOS4yNCwwLDAsMS0zLjgyLjgzYy0yLjUsMC00LjQxLTEtNS0yLjY1bC0zLTcuNzhINzIuODVsLTMsNy43OGMtLjU4LDEuNjMtMi40OSwyLjY1LTUsMi42NWE5LjE2LDkuMTYsMCwwLDEtMy44MS0uODNjLTEuNjYtLjc2LTMuMjUtMi44Ni0xLjQzLTguNTJMNzQsNjMuNDJhOSw5LDAsMCwxLDgtNS45Miw5LjA3LDkuMDcsMCwwLDEsOCw1LjkzbDE0LjM0LDM3Ljc2QzEwNi4xNywxMDYuODYsMTA0LjU4LDEwOSwxMDIuOTMsMTA5LjcyWm0zMC4zMiwwSDExNGE1LjY0LDUuNjQsMCwwLDEtNS43NS01LjVWNjMuNWE2LjEzLDYuMTMsMCwwLDEsMTIuMjUsMFY5OC43NWgxMi43NWE1LjUxLDUuNTEsMCwxLDEsMCwxMVptNDctNC41MkE2LDYsMCwwLDEsMTY5LjQ5LDEwOEwxNTUuNDIsODkuMzdsLTIuMDgsMi4wOHYxMy4wOWE2LDYsMCwwLDEtMTIsMHYtNDFhNiw2LDAsMCwxLDEyLDBWNzYuNGwxNi43NC0xNi43NGE0LjY0LDQuNjQsMCwwLDEsMy4zMy0xLjM0LDYuMDgsNi4wOCwwLDAsMSw1LjksNS41OEE0LjcsNC43LDAsMCwxLDE3OCw2Ny41NUwxNjQuMyw4MS4yMmwxNC43NywxOS41N0E2LDYsMCwwLDEsMTgwLjIyLDEwNS4yM1pcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZD1cIk0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJbmZvV3JhcD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIEp1bkh5dWssIEd5dSBhbGwgcmlnaHQgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICAgICAgPC9JbmZvV3JhcD5cbiAgICAgICAgPC9Gb290ZXJDb250YWluZXI+XG4gICAgKVxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgZG9uZ2FJY29uIGZyb20gXCIuLi9pbWFnZXMvZG9uZ2EucG5nXCI7XG5pbXBvcnQgZ29vZ2xlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dvb2dsZS5wbmdcIjtcbmltcG9ydCBoYW5pSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2hhbmkucG5nXCI7XG5pbXBvcnQgc2JzSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3Nicy5wbmdcIjtcbmltcG9ydCBzZWd5ZUljb24gZnJvbSBcIi4uL2ltYWdlcy9zZWd5ZS5wbmdcIjtcblxuZnVuY3Rpb24gZ2V0VVJMKGljb25OYW1lKSB7XG4gIGNvbnNvbGUubG9nKGljb25OYW1lKTtcbiAgY29uc3QgbWF0Y2ggPSB7XG4gICAgZ29vZ2xlOiBnb29nbGVJY29uLFxuICAgIGRvbmdhOiBkb25nYUljb24sXG4gICAgaGFuaTogaGFuaUljb24sXG4gICAgc2JzOiBzYnNJY29uLFxuICAgIHNlZ3llOiBzZWd5ZUljb24sXG4gIH07XG4gIHJldHVybiBtYXRjaFtpY29uTmFtZV07XG59XG5cbmNvbnN0IEljb25Cb3ggPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnNpemV9O1xuICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5tYXJnaW59O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IGdldFVSTChwcm9wcy5uYW1lKX0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgJjpob3ZlciB7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25Db21wb25lbnQocHJvcHMpIHtcbiAgLy8gaG92ZXIgYWN0aW9uIOydgCDrgpjspJHsl5Ag64Sj7Ja07IScIOyVoOuLiOuplOydtOyFmCDqtaztmIRcbiAgY29uc3QgeyBuYW1lLCBob3ZlckFjdGlvbiwgc2l6ZSA9IFwiMTAwcHhcIiwgbWFyZ2luID0gXCIxMHB4XCIsIC4uLnJlc3QgfSA9IHByb3BzO1xuXG4gIHJldHVybiA8SWNvbkJveCBuYW1lPXtuYW1lfSBzaXplPXtzaXplfSBtYXJnaW49e21hcmdpbn0gey4uLnJlc3R9IC8+O1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogJHsocHJvcHMpID0+IChwcm9wcy5vbiA9PT0gXCJvblwiID8gOTk5OSA6IC0xKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5vbiA9PT0gXCJvblwiID8gXCJyZ2JhKDAsIDAsIDAsIDAuNDUpXCIgOiBcInJnYmEoMCwgMCwgMCwgMClcIn07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dDtcbmA7XG5jb25zdCBNb2RhbEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IFwiZmxleFwiO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyAxIDogMCl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTNweCAtNXB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMSk7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogJHsocHJvcHMpID0+IChwcm9wcy5vbiA9PT0gXCJvblwiID8gXCIwcHhcIiA6IFwiMzBweFwiKX07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuYDtcbmNvbnN0IEV4aXRXcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDEuNXJlbSk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiKDEzNCwgMTQyLCAxNTApO1xuICBtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjI1cztcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XG4gIGNvbnN0IHsgb24sIG9uQ2xpY2tDbG9zZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsQ29udGFpbmVyIG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxuICAgICAgPE1vZGFsQm94IG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxuICAgICAgICA8RXhpdFdyYXAgb25DbGljaz17b25DbGlja0Nsb3NlfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB0YWJJbmRleD1cIjFcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9FeGl0V3JhcD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Nb2RhbEJveD5cbiAgICA8L01vZGFsQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9nZ2xlQnV0dG9uLCBUb2dnbGVCdXR0b25Hcm91cCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBWaWV3TGlzdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiO1xyXG5pbXBvcnQgVmlld01vZHVsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TW9kdWxlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ0biA9IHN0eWxlZChUb2dnbGVCdXR0b24pYFxyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAmIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjM2Y2M2JmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFZpZXdCdXR0b24oeyBtYXRjaCB9KSB7XHJcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoXCJjYXJkXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWV3ID0gKGV2ZW50LCBuZXdWaWV3KSA9PiB7XHJcbiAgICBzZXRWaWV3KG5ld1ZpZXcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXAgdmFsdWU9e3ZpZXd9IGV4Y2x1c2l2ZSBvbkNoYW5nZT17aGFuZGxlVmlld30+XHJcbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPExpbmsgdG89e2Ake21hdGNoLnBhdGh9P3ZpZXc9Y2FyZGB9PlxyXG4gICAgICAgICAgPFZpZXdNb2R1bGVJY29uIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RvZ2dsZUJ0bj5cclxuXHJcbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJsaXN0XCI+XHJcbiAgICAgICAgPExpbmsgdG89e2Ake21hdGNoLnBhdGh9P3ZpZXc9bGlzdGB9PlxyXG4gICAgICAgICAgPFZpZXdMaXN0SWNvbiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Ub2dnbGVCdG4+XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld0J1dHRvbik7XHJcbiIsImltcG9ydCBxcyBmcm9tIFwicXNcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9uQXJlYSxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkTWVkaWEsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IDM0NSxcclxuXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNDAsXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBpbmxpbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgICBoZWlnaHQ6IDE2MCxcclxuICAgIG1hcmdpblJpZ2h0OiAyMCxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBwYWRkaW5nOiBcIjhweCAwXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIixcclxuICAgIFwiJjpsYXN0LWNoaWxkXCI6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMaXN0Vmlldyh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAge2RhdGEubWFwKChuZXdzLCBpZHgpID0+IChcclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICBwcmltYXJ5PXtuZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge25ld3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhcmRWaWV3KHsgZGF0YSwgcGF0aCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gZGF0YS5tYXAoKG5ld3MsIGlkeCkgPT4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGtleT17aWR4fT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIGltYWdlPXtuZXdzLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAge25ld3MudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cGF0aCA9PT0gXCIvbmV3c1wiICYmIChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgIHtuZXdzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvbmV3cy8ke25ld3MuaWR9YH0+IOyekOyEuO2eiDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7cGF0aCA9PT0gXCIvbmV3c1wiICYmIChcclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIOyKpO2BrOueqVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApKTtcclxufVxyXG5cclxuY29uc3QgQ29udGVudHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52aWV3ID09PSBcImNhcmRcIiAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICBnYXA6IDIwcHg7XHJcbiAgICBgfVxyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMudmlldyA9PT0gXCJsaXN0XCIgJiZcclxuICAgIGNzc2BcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBgfTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIFZpZXdUeXBlUGFnZSh7IGxvY2F0aW9uLCBkYXRhIH0pIHtcclxuICBsZXQgcXVlcnkgPSBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gsIHtcclxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIU9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcclxuICAgIHF1ZXJ5LnZpZXcgPSBcImNhcmRcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudHNDb250YWluZXIgdmlldz17cXVlcnkudmlld30+XHJcbiAgICAgIHtxdWVyeS52aWV3ID09PSBcImNhcmRcIiA/IChcclxuICAgICAgICA8Q2FyZFZpZXcgZGF0YT17ZGF0YX0gcGF0aD17bG9jYXRpb24ucGF0aG5hbWV9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpc3RWaWV3IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRlbnRzQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld1R5cGVQYWdlKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRvbmdhLjUzYWRhNzBmODdhYTA3Mzk5YzJiMWYxMGE4NWUxMTA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGUuNzBmNDllZmZhZWQ1MmE3NjkyZDAxNDJiOGFkN2ZlYzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmkuMzJkMzYyMTIwMmJiNTM5MGZjOTk0MjIwN2NkMTM2YzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNicy4yMTA0NjQ0YWFkNmQ3Njk4Mzk5MTZmMWVhZWQ0ODYxMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2VneWUuNDllOGY3NjI3NTY5MjUyMzQyNGE4YjBiYWZhMjc2YWYucG5nXCI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEljb25Cb3ggZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvSWNvblwiO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcblxyXG5jb25zdCBBcmljbGVDb250YWluZXIgPSBzdHlsZWQoUGFwZXIpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsKHsgbmV3cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcmljbGVDb250YWluZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgPEljb25Cb3hcclxuICAgICAgICBzaXplPVwiMTAwcHhcIlxyXG4gICAgICAgIG1hcmdpbj1cIjEwcHhcIlxyXG4gICAgICAgIG5hbWU9e25ld3MuY29tcGFueX1cclxuICAgICAgICBib3JkZXI9XCIxcHggc29saWRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW1nIHNyYz17bmV3cy5pbWFnZX0gLz5cclxuICAgICAgPHA+e25ld3MuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8Q29tbWVudHMgLz5cclxuICAgIDwvQXJpY2xlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cblxuY29uc3QgQ29tbWVudHNXcmFwID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbmA7XG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5gO1xuY29uc3QgU3R5bGVkVGV4dEZpZWxkID0gc3R5bGVkKFRleHRGaWVsZClgXG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgd2lkdGg6IDk1JTtcbmA7XG5jb25zdCBJbnB1dERhdGFzID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAwO1xuYDtcbmNvbnN0IENoYXJhY3RlcnMgPSBzdHlsZWQuZGl2YFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID09PSBcImdyYXlcIj8gXCIjODQ4NDg0XCI6XCJyZWRcIn07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZW5kYWJsZSwgc2V0U2VuZGFibGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDMwMCkgc2V0U2VuZGFibGUoZmFsc2UpO1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IDMwMCkgc2V0U2VuZGFibGUodHJ1ZSk7XG4gICAgfSxbdmFsdWVdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb21tZW50c1dyYXA+XG4gICAgICAgICAgICA8U3R5bGVkVGV4dEZpZWxkXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXRleHRhcmVhXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByb3dzTWF4PXs1fVxuICAgICAgICAgICAgbGFiZWw9e2DrjJPquIAg64us6riwYH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67CU66W06rOgIOqzoOyatCDrp5DsnYQg7IKs7Jqp7ZW07KO87IS47JqULlwiXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXREYXRhcz5cbiAgICAgICAgICAgICAgICA8Q2hhcmFjdGVycyBjb2xvcj17c2VuZGFibGU/IFwiZ3JheVwiOlwicmVkXCJ9PiBcbiAgICAgICAgICAgICAgICAgICAge2lucHV0VmFsdWUubGVuZ3RofSAvIDMwMFxuICAgICAgICAgICAgICAgIDwvQ2hhcmFjdGVycz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQnV0dG9uIFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAg7J6FIOugpVxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAgICAgICAgPC9JbnB1dERhdGFzPlxuICAgICAgICA8L0NvbW1lbnRzV3JhcD5cbiAgICApXG59IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIi4uL2NvbXBvbmVudC9BcnRpY2xlXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJzZWd5ZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE2MTUzMzRfOTU1NS5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkOyEvO2EsCDsnITsnqXtlZwg6rO16rKp7J6Q65OkIOyjvOydmOuztFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi7YyU66Gc7JuMIOunjuydgCDqs4TsoJUg64W466as64qUIOqzteqyqSwg7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5Ag7IS87YSw7J24IOyymSDqsIDsnqUg6rO16rKpIOyEseqzteuloCDsoovsnYAg7Y64Li4u66y467KV6rO8IOyyoOyekCDsmKTrpZgg7Jyg7J2Y7ZWc64uk66m0IOyWtOuKkCDsoJXrj4Qg67Cp7Ja0IOqwgOuKpVwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwiZ29vZ2xlXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJkb25nYVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwiaGFuaVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwic2JzXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVDb250YWluZXIoeyBpZCB9KSB7XHJcbiAgY29uc3QgbmV3cyA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRDb21tZW50cyA9IChzZW5kYWJsZSkgPT4ge1xyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiA8QXJ0aWNsZSBuZXdzPXtuZXdzfSAvPjtcclxufVxyXG4iLCJpbXBvcnQgQXJ0aWNsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0FydGljbGVDb250YWluZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IERldGFpbFBhZ2VDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsUGFnZSh7IG1hdGNoIH0pIHtcclxuICBjb25zb2xlLmxvZyhcIkRldGFpbFBhZ2VcIik7XHJcbiAgY29uc3QgeyBpZCB9ID0gbWF0Y2gucGFyYW1zO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGV0YWlsUGFnZUNvbnRhaW5lcj5cclxuICAgICAgPEFydGljbGVDb250YWluZXIgaWQ9e2lkfSAvPlxyXG4gICAgPC9EZXRhaWxQYWdlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMb2dpbkJ0biBmcm9tIFwiLi9Mb2dpbkJ0blwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubmF2YFxyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYm94LXNoYWRvdzogcmdiKDIzOCwgMjM4LCAyMzgpIDBweCAxcHggMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbmA7XHJcbmNvbnN0IFJpZ2h0SXRlbSA9IHN0eWxlZC51bGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICYgbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiAmICsgJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH0gKi9cclxuICAgICYgYSB7XHJcbiAgICAgIGNvbG9yOiByZ2IoNDAsIDQyLCA1Myk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMb2dvID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy5pbWFnZX0pO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHTkIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxJbm5lcj5cclxuICAgICAgICA8UmlnaHRJdGVtPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICA8TG9nbyBpbWFnZT17TG9nb0ltYWdlfSAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9uZXdzXCI+7Ja466Gg7IKs67OEIOuztOq4sDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL25ld3NcIj7sho3rs7Q8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvUmlnaHRJdGVtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TG9naW5CdG4gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Jbm5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHksIERpdmlkZXIsIEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9Nb2RhbFwiO1xyXG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiO1xyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL1NpZ25pblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmIGg2IHtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgJiAuTXVpQnV0dG9uQmFzZS1yb290IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDY1LCA2OSwgNzMsIDAuMyksXHJcbiAgICAgIDAgMXB4IDNweCAxcHggcmdiYSg2NSwgNjksIDczLCAwLjE1KTtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgcmlnaHQ6IC04cHg7XHJcbiAgICBib3R0b206IC04cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudSA9IHN0eWxlZChCdXR0b24pYFxyXG4gICYuTXVpQnV0dG9uQmFzZS1yb290IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnRuV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgQXZhdGFyID0gc3R5bGVkKEljb25CdXR0b24pYFxyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuaW1hZ2UgJiZcclxuICAgIGNzc2BcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7cHJvcHMuaW1hZ2V9KTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIGB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9naW5Nb2RhbCwgc2V0TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2luZm9Nb2RhbCwgc2V0SW5mb01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9hdXRoL2NoZWNrVXNlclwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0TG9naW4odHlwZW9mIHJlcy5kYXRhLnVzZXIgIT09IFwidW5kZWZpbmVkXCIpO1xyXG4gICAgICAgIHNldFVzZXJJbmZvKHJlcy5kYXRhLnVzZXIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgc2V0TG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTG9naW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldExvZ2luTW9kYWwoIWxvZ2luTW9kYWwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrSW5mb01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SW5mb01vZGFsKCFpbmZvTW9kYWwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9naW4gPyAoXHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tJbmZvTW9kYWx9XHJcbiAgICAgICAgICBpbWFnZT17dXNlckluZm8gJiYgdXNlckluZm8uaW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTG9naW5Nb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICDroZzqt7jsnbggLyDqsIDsnoVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtsb2dpbk1vZGFsICYmIChcclxuICAgICAgICA8TW9kYWwgb249e2xvZ2luTW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xpY2tMb2dpbk1vZGFsfT5cclxuICAgICAgICAgIDxTaWduSW4gLz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2luZm9Nb2RhbCAmJiAoXHJcbiAgICAgICAgPE1vZGFsIG9uPXtpbmZvTW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xpY2tJbmZvTW9kYWx9PlxyXG4gICAgICAgICAgPFVzZXJDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxVc2VySW5uZXI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJJbmZvICYmIHVzZXJJbmZvLmltYWdlfSAvPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGNvbXBvbmVudD1cInNwYW5cIj5cclxuICAgICAgICAgICAgICAgIDxQaG90b0NhbWVyYSAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9Vc2VySW5uZXI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAgICB7dXNlckluZm8gJiYgdXNlckluZm8ubmlja31cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGFpbmVyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxNZW51IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi91c2VyL3NjcmFwXCI+7Iqk7YGs656pPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxNZW51IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi91c2VyL2NvbW1lbnRcIj7rgrQg64yT6riAPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxCdG5XcmFwPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvbG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIOuhnOq3uOyVhOybg1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0J0bldyYXA+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGdvb2dsZUxvZ2luSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZ1wiO1xuaW1wb3J0IGtha2FvTG9naW5JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2tha2FvX2xvZ2luX2J1dHRvbi5wbmdcIjtcblxuY29uc3QgU2lnbkluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAmIC5NdWlCdXR0b24tcm9vdCB7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2V9KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuYDtcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICM2NzY3Njc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xuICByZXR1cm4gKFxuICAgIDxTaWduSW5Db250YWluZXI+XG4gICAgICA8VGl0bGVDb250YWluZXI+W+yekeydgOuhnOqzoF0g64uk7J2MIOqzhOygleycvOuhnCDroZzqt7jsnbg8L1RpdGxlQ29udGFpbmVyPlxuICAgICAgPGEgaHJlZj1cIi9hdXRoL2dvb2dsZVwiPlxuICAgICAgICA8U3R5bGVkQnV0dG9uIGltYWdlPXtnb29nbGVMb2dpbkltYWdlfSAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIi9hdXRoL2tha2FvXCI+XG4gICAgICAgIDxTdHlsZWRCdXR0b24gaW1hZ2U9e2tha2FvTG9naW5JbWFnZX0gLz5cbiAgICAgIDwvYT5cbiAgICA8L1NpZ25JbkNvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBHTkIgZnJvbSBcIi4uL2NvbXBvbmVudC9HTkJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQlBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxHTkIgLz47XHJcbn1cclxuIiwiaW1wb3J0IEdOQkNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0dOQkNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR05CUGFnZSgpIHtcclxuICByZXR1cm4gPEdOQkNvbnRhaW5lciAvPjtcclxufVxyXG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCxcbiAgICBBdmF0YXIsIEljb25CdXR0b24sIFR5cG9ncmFwaHksIENhcmRBY3Rpb25zfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IEZhdm9yaXRlIGFzIEZhdm9yaXRlSWNvbiwgU2hhcmUgYXMgU2hhcmVJY29uLCBNb3JlVmVydCBhcyBNb3JlVmVydEljb259IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XG5cblxuY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gICY6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgwLDAsMCwuMSksIDBweCAycHggM3B4IHJnYmEoMCwwLDAsLjEyKSwgMHB4IDFweCAzcHggcmdiYSgwLDAsMCwuMTQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIHdpZHRoOiAzMzAsXG4gICAgICBtaW5XaWR0aDogMzMwLFxuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICBtYXJnaW46IFwiMCAxNXB4XCIsXG4gICAgfSxcbiAgICBtZWRpYToge1xuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIiAvLyAxNjo5XG4gICAgfSxcbiAgICBhdmF0YXJSZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcmVkWzUwMF1cbiAgICB9LFxuICB9KSk7XG4vLyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSDrpbwg7J6F66Cl67Cb7JWEIENhcmTrpbwg66as7YS07ZWY64qUIOy7tO2PrOuEjO2KuCDtlajsiJhcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NDYXJkKCB7IGltYWdlLCBjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBvcmlnaW5hbExpbmssIGRhdGUsIGNvbXBhbnl9ICkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICAvLyBkZXNjaXByaW9uIDEwMOq4gOyekCDsoJztlZwgKyDrp5DspITsnoTtkZxcbiAgICBjb25zdCBzdWJTdHJpbmcgPSAoZGVzYyxjb3VudCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiBkZXNjID09PSBcInN0cmluZ1wiO1xuICAgICAgICByZXR1cm4gKGlzU3RyaW5nICYmIGRlc2MubGVuZ3RoID49IGNvdW50PyBkZXNjLnN1YnN0cmluZygwLGNvdW50KSArIFwiLi4uXCIgOiBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJuZXdzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgICAgICAgICAge2NvbXBhbnk/IGNvbXBhbnkuc2xpY2UoMCw0KSA6ICcnfVxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbj17XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGU9e3N1YlN0cmluZyh0aXRsZSwgMjApfVxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgIHtzdWJTdHJpbmcoZGVzY3JpcHRpb24sIDgwKX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJhZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaGFyZVwiPlxuICAgICAgICAgICAgICA8U2hhcmVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgPC9TdHlsZWRDYXJkPlxuICAgICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUGFwZXIsIFRhYnMsIFRhYiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcGFwZXI6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIyMHB4XCJcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW1wi7KCE7LK0XCIsIFwi7KCV7LmYXCIsIFwi6rK97KCcXCIsIFwi7IKs7ZqMXCJdO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzcXVhcmUgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgPFRhYnNcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjYXRlZ29yeUxpc3QubWFwKChpdGVtLCBpZHgpID0+IChcclxuICAgICAgICAgIDxUYWIga2V5PXtpZHh9IGxhYmVsPXtpdGVtfSBzdHlsZT17e2ZvbnRTaXplOlwiMS4xcmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwifX0vPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1RhYnM+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgfSxcclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG5vVmFsaWRhdGU+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICBkZWZhdWx0VmFsdWU9XCIyMDE3LTA1LTI0XCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgSW5wdXRCYXNlLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBwYWRkaW5nOiBcIjJweCA0cHhcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHdpZHRoOiA0MDAsXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgbWFyZ2luTGVmdDogOCxcclxuICAgIGZsZXg6IDEsXHJcbiAgfSxcclxuICBpY29uQnV0dG9uOiB7XHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYXBlciBjb21wb25lbnQ9XCJmb3JtXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgPElucHV0QmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzZWFyY2hcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L1BhcGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE5ld3NDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCB7XG4gIEFycm93QmFja0lvc091dGxpbmVkLFxuICBBcnJvd0ZvcndhcmRJb3NPdXRsaW5lZCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuXG5jb25zdCBTbGlkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAvKiB3aWR0aDogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZGV2aWNlID09PSBcIndlYlwiID8gXCJjYWxjKDk5MHB4ICsgNzVweClcIiA6IFwiXCJ9OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaGVpZ2h0fTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSAqIC0zNjB9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuYDtcbmNvbnN0IEFycm93Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogd2lkdGg6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmRldmljZSA9PT0gXCJ3ZWJcIiA/IFwiY2FsYyg5OTBweCArIDYwcHgpXCIgOiBcIlwifTsgKi9cbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBBcnJvd0hvdmVyQWN0aW9uID0gY3NzYFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgZm9udC1zaXplOiA4NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBib3gtc2hhZG93OiAxNnB4IDE4cHggMjhweCAtM3B4IHJnYmEoMTQzLCAxNDMsIDE0MywgMC43NSk7XG4gIH1cbmA7XG5jb25zdCBQcmV2QXJyb3cgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGNvbG9yOiAjYzFjMWMxO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gMCA6IDAuNzUpfTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gLTEwIDogMTApfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyBcIlwiIDogQXJyb3dIb3ZlckFjdGlvbil9O1xuYDtcbmNvbnN0IE5leHRBcnJvdyA9IHN0eWxlZChQcmV2QXJyb3cpYFxuICAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gXCJcIiA6IEFycm93SG92ZXJBY3Rpb24pfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICBjb25zdCB7IGNhcmRXaWR0aCwgbmV3cyB9ID0gcHJvcHM7XG4gIGNvbnN0IG1heCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IG5ld3MubGVuZ3RoIC0gMiwgW25ld3NdKTtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBjYXJkQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgY29uc3Qgb25DbGlja1ByZXYgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlKGFjdGl2ZSAtIDEgPiAtMSA/IGFjdGl2ZSAtIDEgOiAtMSk7XG4gIH07XG4gIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKG1heCkgPT4ge1xuICAgIHNldEFjdGl2ZShhY3RpdmUgKyAxIDwgbWF4ICsgMSA/IGFjdGl2ZSArIDEgOiBtYXggKyAxKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICAvLyA8U2xpZGVyQ29udGFpbmVyIGRldmljZT17XCJ3ZWJcIn0gaGVpZ2h0PVwiNjV2aFwiPlxuICAgIDxTbGlkZXJDb250YWluZXIgZGV2aWNlPXtcIndlYlwifSBoZWlnaHQ9XCIxMTAlXCI+XG4gICAgICA8QXJyb3dDb250YWluZXIgZGV2aWNlPXtcIndlYlwifT5cbiAgICAgICAgPFByZXZBcnJvdyB2aXNpYmxlPXthY3RpdmUgPD0gLTEgPyBcIm5vbmVcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xpY2tQcmV2fT5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDc1IH19IC8+XG4gICAgICAgIDwvUHJldkFycm93PlxuICAgICAgICA8TmV4dEFycm93XG4gICAgICAgICAgdmlzaWJsZT17YWN0aXZlID49IG1heCgpID8gXCJub25lXCIgOiBcIlwifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tOZXh0KG1heCgpKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNzUgfX0gLz5cbiAgICAgICAgPC9OZXh0QXJyb3c+XG4gICAgICA8L0Fycm93Q29udGFpbmVyPlxuICAgICAgPENhcmRDb250YWluZXIgcmVmPXtjYXJkQ29udGFpbmVyUmVmfSBhY3RpdmU9e2FjdGl2ZX0+XG4gICAgICAgIHsvKiB0ZXN0TmV3c+uKlCDsnbQg7ZuEIHNhZ2EtPmFwaS0+c3RvcmUg66W8IO2Gte2VtCDsoITri6zrkJwgcmVzcG9uc2Xsl5Ag65Sw6528IOuzgOqyvSovfVxuICAgICAgICB7bmV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxOZXdzQ2FyZCBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgIDwvU2xpZGVyQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudC9DYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxDYXRlZ29yeSAvPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRlIGZyb20gXCIuLi9jb21wb25lbnQvRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUNvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPERhdGUgLz47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnQvU2VhcmNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxTZWFyY2ggLz47XHJcbn1cclxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnQvU2xpZGVyJztcblxuY29uc3QgbmV3cyA9IFtcbiAgICB7IFxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDIwLzA4LzMxL05JU0kyMDIwMDgzMV8wMDE2NjMwMjE4X3dlYi5qcGc/cm5kPTIwMjAwODMxMTUwOTEyXCIsXG4gICAgICAgIGNhdGVnb3J5Olwi7KCV7LmYXCIsIFxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcbiAgICAgICAgXCLrj4XshJzqsIAg642U7JyEIOydtOq4sOuKlCDsoovsnYAg67Cp67KVIOyVhOuLkOq5jOKApuy2nO2MkOyLnOyepeyXkOuPhCDrj4Tsm4BcIlxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLCBcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDIwLzA4LzI0L05JU0kyMDIwMDgyNF8wMDE2NjA2NzMyX3dlYi5qcGc/cm5kPTIwMjAwOTAxMTIwMzQzXCIsXG4gICAgICAgIGNhdGVnb3J5Olwi7KCV7LmYXCIsIFxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcbiAgICAgICAgXCLrj4XshJzqsIAg642U7JyEIOydtOq4sOuKlCDsoovsnYAg67Cp67KVIOyVhOuLkOq5jOKApuy2nO2MkOyLnOyepeyXkOuPhCDrj4Tsm4BcIlxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLCBcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDE4LzAxLzE1L05JU0kyMDE4MDExNV8wMDAwMDk0NzM3X3dlYi5qcGc/cm5kPTIwMTgwMTE1MTYzOTA3XCIsXG4gICAgICAgIGNhdGVnb3J5Olwi7KCV7LmYXCIsIFxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcbiAgICAgICAgXCLrj4XshJzqsIAg642U7JyEIOydtOq4sOuKlCDsoovsnYAg67Cp67KVIOyVhOuLkOq5jOKApuy2nO2MkOyLnOyepeyXkOuPhCDrj4Tsm4BcIlxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLCBcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDIwLzA5LzAxL05JU0kyMDIwMDkwMV8wMDAwNTkxOTE1X3dlYi5qcGc/cm5kPTIwMjAwOTAxMDcxMjQ3XCIsXG4gICAgICAgIGNhdGVnb3J5Olwi7KCV7LmYXCIsIFxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcbiAgICAgICAgXCLrj4XshJzqsIAg642U7JyEIOydtOq4sOuKlCDsoovsnYAg67Cp67KVIOyVhOuLkOq5jOKApuy2nO2MkOyLnOyepeyXkOuPhCDrj4Tsm4BcIlxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLCBcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXG4gICAgfSxcbl1cbi8vIOuNlOuvuOuNsOydtO2EsCDribTsiqRcbmNvbnN0IHRlc3ROZXdzID0gWy4uLm5ld3MsIC4uLm5ld3MsIC4uLm5ld3Muc2xpY2UoMCwyKV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlckNvbnRhaW5lcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTbGlkZXIgbmV3cz17dGVzdE5ld3N9Lz5cbiAgICApXG59IiwiaW1wb3J0IENhdGVnb3J5Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXJcIjtcclxuaW1wb3J0IERhdGVDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9EYXRlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTZWFyY2hDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9TZWFyY2hDb250YWluZXJcIjtcclxuaW1wb3J0IFNsaWRlckNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL1NsaWRlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBGaWx0ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuYDtcclxuY29uc3QgQ29udGVudHNXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8RmlsdGVyV3JhcD5cclxuICAgICAgICA8RGF0ZUNvbnRhaW5lciAvPlxyXG4gICAgICAgIDxTZWFyY2hDb250YWluZXIgLz5cclxuICAgICAgPC9GaWx0ZXJXcmFwPlxyXG4gICAgICA8Q29udGVudHNXcmFwPlxyXG4gICAgICAgIDxDYXRlZ29yeUNvbnRhaW5lciAvPlxyXG4gICAgICAgIDxTbGlkZXJDb250YWluZXIgLz5cclxuICAgICAgPC9Db250ZW50c1dyYXA+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVfbG9naW5fYnV0dG9uLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJrYWthb19sb2dpbl9idXR0b24uYWQ1YjIwMDNhZDM4MThiNzhmOTA5NDRhMTg3M2RiNGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28uYjg3ZjNhY2ZhM2E3M2Y4YWMyOWFkZmY4NWEyNjljOWQucG5nXCI7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5cbi8vIHN0b3JlIENvbnRleHRBUEnroZwg6rCQ7Iu46riwXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbiIsImltcG9ydCBJY29uQm94IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnQvSWNvbic7XG5cbmNvbnN0IGNvcnBzID0gW1wiZ29vZ2xlXCIsXCJkb25nYVwiLFwiaGFuaVwiLFwic2JzXCIsXCJzZWd5ZVwiXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcnBDYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7Y29ycHMubWFwKChjb3JwLGluZGV4KSA9PiBcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICA8SWNvbkJveCBcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICBzaXplPVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIjEwcHhcIlxuICAgICAgICAgICAgICAgIG5hbWU9e2NvcnB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIClcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVmlld1R5cGVCdG4gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvVmlld1R5cGVCdG5cIjtcclxuaW1wb3J0IFZpZXdUeXBlUGFnZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZVBhZ2VcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7zrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7xcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuyhsOyEoOydvOuztFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE2MTUzMzRfOTU1NS5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkOyEvO2EsCDsnITsnqXtlZwg6rO16rKp7J6Q65OkIOyjvOydmOuztFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi7YyU66Gc7JuMIOunjuydgCDqs4TsoJUg64W466as64qUIOqzteqyqSwg7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5Ag7IS87YSw7J24IOyymSDqsIDsnqUg6rO16rKpIOyEseqzteuloCDsoovsnYAg7Y64Li4u66y467KV6rO8IOyyoOyekCDsmKTrpZgg7Jyg7J2Y7ZWc64uk66m0IOyWtOuKkCDsoJXrj4Qg67Cp7Ja0IOqwgOuKpVwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NMaXN0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Vmlld1R5cGVCdG4gLz5cclxuICAgICAgPFZpZXdUeXBlUGFnZSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgQ29ycENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudC9Db3JwQ2F0ZWdvcnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcnBDYXRlZ29yeUNvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29ycENhdGVnb3J5IC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufSIsImltcG9ydCBOZXdzTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50L05ld3NMaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQ29udGFpbmVyKCkge1xyXG4gIHJldHVybiA8TmV3c0xpc3QgLz47XHJcbn1cclxuIiwiaW1wb3J0IENvcnBDYXRlZ29yeUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0NvcnBDYXRlZ29yeUNvbnRhaW5lclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBOZXdzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvTmV3c0NvbnRhaW5lclwiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIDxDb3JwQ2F0ZWdvcnlDb250YWluZXIgLz4gKi99XG4gICAgICA8TmV3c0NvbnRhaW5lciAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUGFwZXIsIEZvcm1Db250cm9sLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFZpZXdUeXBlUGFnZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZVBhZ2VcIjtcclxuaW1wb3J0IFZpZXdUeXBlQnRuIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7zrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7xcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuyhsOyEoOydvOuztFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNjE1MzM0Xzk1NTUuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIu2MlOuhnOybjCDrp47snYAg6rOE7KCVIOuFuOumrOuKlCDqs7XqsqksIOyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQIOyEvO2EsOyduCDsspkg6rCA7J6lIOqzteqyqSDshLHqs7XrpaAg7KKL7J2AIO2OuC4uLuusuOuyleqzvCDssqDsnpAg7Jik66WYIOycoOydmO2VnOuLpOuptCDslrTripAg7KCV64+EIOuwqeyWtCDqsIDriqVcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNmNjNiZlwiLFxyXG4gICAgYm9yZGVyQ29sb3I6IFwiIzNmNjNiZlwiLFxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpbjogNCxcclxuICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyOiAwO1xyXG5cclxuICAmIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52YWx1ZSAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzNmNjNiZjtcclxuICAgIGB9XHJcbmA7XHJcblxyXG5jb25zdCBGaWx0ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHRhYiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUodGFiID09PSBcInNjcmFwXCIgPyAwIDogMSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW1wic2NyYXBcIiwgXCJjb21tZW50XCJdO1xyXG4gIGNvbnN0IG9yZGVyTGlzdCA9IFtcInB1c2hcIiwgXCJsYXRlc3RcIiwgXCJjb21tZW50c1wiXTtcclxuICAvL+uLtOydgCDsiJwsIOy1nOyLoCDsiJwsIOuMk+q4gCDrp47snYAg7IicXHJcblxyXG4gIGNvbnN0IG1ha2VTZWxlY3QgPSAoc2VsZWN0TGlzdCwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgIDxTZWxlY3QgbmF0aXZlIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICB7c2VsZWN0TGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cclxuICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSA9PT0gdGFiKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51QnRuIGtleT17aWR4fSB2YWx1ZT17aXRlbSA9PT0gdGFiID8gMSA6IDB9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3VzZXIvJHtpdGVtfWB9PntpdGVtfTwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51QnRuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9NZW51Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGaWx0ZXJXcmFwPlxyXG4gICAgICAgICAgPFZpZXdUeXBlQnRuIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bWFrZVNlbGVjdChbXCLsobDshKBcIiwgXCLspJHslZlcIl0sIG9yZGVyKX1cclxuICAgICAgICAgICAge21ha2VTZWxlY3Qob3JkZXJMaXN0LCBvcmRlcil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZpbHRlcldyYXA+XHJcbiAgICAgICAgPFZpZXdUeXBlUGFnZSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgVXNlciBmcm9tIFwiLi4vY29tcG9uZW50L1VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDb250YWluZXIoeyB0YWIgfSkge1xyXG4gIHJldHVybiA8VXNlciB0YWI9e3RhYn0gLz47XHJcbn1cclxuIiwiaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZSh7IG1hdGNoIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxVc2VyQ29udGFpbmVyIHRhYj17bWF0Y2gucGFyYW1zLnRhYn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=