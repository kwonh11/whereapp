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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var handleAddFile = function handleAddFile(e) {
    var formData = new FormData();
    formData.append("img", e.target.files[0]);
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.patch("/auth/img/".concat(userInfo.snsId), formData).then(function (res) {
      setUserInfo(_objectSpread(_objectSpread({}, userInfo), {}, {
        image: res.data.url
      }));
    })["catch"](function (err) {
      console.error(err);
    });
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
  }), /*#__PURE__*/React.createElement("input", {
    accept: "image/*",
    style: {
      display: "none"
    },
    type: "file",
    id: "img",
    name: "img",
    onChange: handleAddFile
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "img"
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    color: "primary",
    "aria-label": "upload picture",
    component: "span"
  }, /*#__PURE__*/React.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_5___default.a, null)))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb21wb25lbnQvQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9wYWdlL0NoYXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9kb25nYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZXMvZ29vZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9oYW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9zYnMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzL3NlZ3llLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsL2NvbXBvbmVudC9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29tcG9uZW50L0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29udGFpbmVyL0FydGljbGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9wYWdlL0RldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvR05CLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L0xvZ2luQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ25iL2NvbnRhaW5lci9HTkJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9wYWdlL0dOQlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL0RhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL1NlYXJjaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL3BhZ2UvSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2tha2FvX2xvZ2luX2J1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29tcG9uZW50L0NvcnBDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvTmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29udGFpbmVyL0NvcnBDYXRlZ29yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb250YWluZXIvTmV3c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9wYWdlL05ld3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbXBvbmVudC9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3BhZ2UvVXNlclBhZ2UuanMiXSwibmFtZXMiOlsiY3VzdG9tSGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0IiwiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQXBwIiwiY29uc29sZSIsImxvZyIsIlVzZXJQYWdlIiwiRGV0YWlsUGFnZSIsIkNoYXRQYWdlIiwiTmV3c1BhZ2UiLCJIb21lUGFnZSIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJwYXBlciIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiaGVhZGVyIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJmbGV4IiwiY29udGVudHMiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJmb3JtIiwiaW5wdXRCYXNlIiwiaWNvbiIsIkNoYXRCdG4iLCJJY29uQnV0dG9uIiwiQ2hhdCIsInZpc3VhbCIsImhhbmRsZUNsaWNrIiwiY2xhc3NlcyIsImljb25CdXR0b24iLCJDaGF0Q29udGFpbmVyIiwidXNlU3RhdGUiLCJzZXRWaXN1YWwiLCJGb290ZXJDb250YWluZXIiLCJmb290ZXIiLCJJY29uQ29udGFpbmVyIiwiSW5mb1dyYXAiLCJGb290ZXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRVUkwiLCJpY29uTmFtZSIsIm1hdGNoIiwiZ29vZ2xlIiwiZ29vZ2xlSWNvbiIsImRvbmdhIiwiZG9uZ2FJY29uIiwiaGFuaSIsImhhbmlJY29uIiwic2JzIiwic2JzSWNvbiIsInNlZ3llIiwic2VneWVJY29uIiwiSWNvbkJveCIsInByb3BzIiwic2l6ZSIsIm1hcmdpbiIsIm5hbWUiLCJJY29uQ29tcG9uZW50IiwiaG92ZXJBY3Rpb24iLCJyZXN0IiwiTW9kYWxDb250YWluZXIiLCJvbiIsIk1vZGFsQm94IiwiRXhpdFdyYXAiLCJNb2RhbCIsIm9uQ2xpY2tDbG9zZSIsImNoaWxkcmVuIiwiVG9nZ2xlQnRuIiwiVG9nZ2xlQnV0dG9uIiwiVmlld0J1dHRvbiIsInZpZXciLCJzZXRWaWV3IiwiaGFuZGxlVmlldyIsImV2ZW50IiwibmV3VmlldyIsInBhdGgiLCJ3aXRoUm91dGVyIiwicm9vdCIsIm1heFdpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJtZWRpYSIsImxpc3QiLCJpbmxpbmUiLCJpbWciLCJtYXJnaW5SaWdodCIsImxpc3RJdGVtIiwiTGlzdFZpZXciLCJkYXRhIiwibWFwIiwibmV3cyIsImlkeCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkNhcmRWaWV3IiwiaWQiLCJDb250ZW50c0NvbnRhaW5lciIsImNzcyIsIlZpZXdUeXBlUGFnZSIsImxvY2F0aW9uIiwicXVlcnkiLCJxcyIsInBhcnNlIiwic2VhcmNoIiwiaWdub3JlUXVlcnlQcmVmaXgiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGF0aG5hbWUiLCJBcmljbGVDb250YWluZXIiLCJQYXBlciIsIkRldGFpbCIsImNvbXBhbnkiLCJDb21tZW50c1dyYXAiLCJTdHlsZWRCdXR0b24iLCJCdXR0b24iLCJTdHlsZWRUZXh0RmllbGQiLCJUZXh0RmllbGQiLCJJbnB1dERhdGFzIiwiQ2hhcmFjdGVycyIsImNvbG9yIiwiQ29tbWVudHMiLCJSZWFjdCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VuZGFibGUiLCJzZXRTZW5kYWJsZSIsInVzZUVmZmVjdCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY2F0ZWdvcnkiLCJvcmlnaW5hbExpbmsiLCJkYXRlIiwidG9TdHJpbmciLCJBcnRpY2xlQ29udGFpbmVyIiwiZmluZCIsIml0ZW0iLCJwYXJzZUludCIsIm9uU3VibWl0Q29tbWVudHMiLCJEZXRhaWxQYWdlQ29udGFpbmVyIiwic2VjdGlvbiIsInBhcmFtcyIsIkNvbnRhaW5lciIsIm5hdiIsIklubmVyIiwiUmlnaHRJdGVtIiwidWwiLCJMb2dvIiwiR05CIiwiTG9nb0ltYWdlIiwiVXNlckNvbnRhaW5lciIsIlVzZXJJbm5lciIsIk1lbnUiLCJCdG5XcmFwIiwiQXZhdGFyIiwiTG9naW4iLCJsb2dpbiIsInNldExvZ2luIiwibG9naW5Nb2RhbCIsInNldExvZ2luTW9kYWwiLCJpbmZvTW9kYWwiLCJzZXRJbmZvTW9kYWwiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwidXNlciIsImVycm9yIiwic2V0TG9nZ2VkSW4iLCJoYW5kbGVDbGlja0xvZ2luTW9kYWwiLCJoYW5kbGVDbGlja0luZm9Nb2RhbCIsImhhbmRsZUFkZEZpbGUiLCJlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZpbGVzIiwicGF0Y2giLCJzbnNJZCIsInVybCIsImVyciIsIm5pY2siLCJTaWduSW5Db250YWluZXIiLCJUaXRsZUNvbnRhaW5lciIsIlNpZ25JbiIsImdvb2dsZUxvZ2luSW1hZ2UiLCJrYWthb0xvZ2luSW1hZ2UiLCJHTkJQYWdlIiwiU3R5bGVkQ2FyZCIsIkNhcmQiLCJ0aGVtZSIsIm1pbldpZHRoIiwicGFkZGluZ1RvcCIsImF2YXRhclJlZCIsImJhY2tncm91bmRDb2xvciIsInJlZCIsIk5ld3NDYXJkIiwic3ViU3RyaW5nIiwiZGVzYyIsImNvdW50IiwiaXNTdHJpbmciLCJzdWJzdHJpbmciLCJhdmF0YXIiLCJzbGljZSIsIkNhdGVnb3J5Iiwic2V0VmFsdWUiLCJjYXRlZ29yeUxpc3QiLCJuZXdWYWx1ZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbnRhaW5lciIsImZsZXhXcmFwIiwidGV4dEZpZWxkIiwic2hyaW5rIiwiaW5wdXQiLCJtYXJnaW5MZWZ0IiwiU2VhcmNoIiwiU2xpZGVyQ29udGFpbmVyIiwiZGV2aWNlIiwiQ2FyZENvbnRhaW5lciIsImFjdGl2ZSIsIkFycm93Q29udGFpbmVyIiwiQXJyb3dIb3ZlckFjdGlvbiIsIlByZXZBcnJvdyIsInNwYW4iLCJ2aXNpYmxlIiwiTmV4dEFycm93IiwiU2xpZGVyIiwiY2FyZFdpZHRoIiwibWF4IiwidXNlQ2FsbGJhY2siLCJzZXRBY3RpdmUiLCJjYXJkQ29udGFpbmVyUmVmIiwidXNlUmVmIiwib25DbGlja1ByZXYiLCJvbkNsaWNrTmV4dCIsImluZGV4IiwiQ2F0ZWdvcnlDb250YWluZXIiLCJEYXRlQ29udGFpbmVyIiwiU2VhcmNoQ29udGFpbmVyIiwidGVzdE5ld3MiLCJGaWx0ZXJXcmFwIiwiQ29udGVudHNXcmFwIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29ycHMiLCJDb3JwQ2F0ZWdvcnkiLCJjb3JwIiwiTmV3c0xpc3QiLCJDb3JwQ2F0ZWdvcnlDb250YWluZXIiLCJOZXdzQ29udGFpbmVyIiwiYm9yZGVyQ29sb3IiLCJmb3JtQ29udHJvbCIsIk1lbnVDb250YWluZXIiLCJNZW51QnRuIiwiYnV0dG9uIiwiVXNlciIsInRhYiIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckxpc3QiLCJtYWtlU2VsZWN0Iiwic2VsZWN0TGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QUFFaEw7QUFBcEIsSUFSRixDQWJGLENBREY7QUEwQkQsQzs7Ozs7Ozs7Ozs7OztBQzlKRDtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNnRSxhQUFULE9BQWdDO0FBQUEsTUFBUCtHLEdBQU8sUUFBUEEsR0FBTztBQUM3QyxzQkFBTyxvQkFBQyx1REFBRDtBQUFNLE9BQUcsRUFBRUE7QUFBWCxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBUzFRLFFBQVQsT0FBNkI7QUFBQSxNQUFUNkMsS0FBUyxRQUFUQSxLQUFTO0FBQzFDLHNCQUNFLGtEQUNFLG9CQUFDLGdFQUFEO0FBQWUsT0FBRyxFQUFFQSxLQUFLLENBQUNxRyxNQUFOLENBQWF3SDtBQUFqQyxJQURGLENBREY7QUFLRCxDIiwiZmlsZSI6ImFwcC5mZTFjNWE0NTIwNzViY2QxYzc5Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDaGF0UGFnZSBmcm9tIFwiLi9jaGF0L3BhZ2UvQ2hhdFBhZ2VcIjtcbmltcG9ydCBOZXdzUGFnZSBmcm9tIFwiLi9uZXdzL3BhZ2UvTmV3c1BhZ2VcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lL3BhZ2UvSG9tZVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCByZXNldCBmcm9tIFwic3R5bGVkLXJlc2V0XCI7XG5pbXBvcnQgR05CUGFnZSBmcm9tIFwiLi9nbmIvcGFnZS9HTkJQYWdlXCI7XG5pbXBvcnQgRGV0YWlsUGFnZSBmcm9tIFwiLi9kZXRhaWwvcGFnZS9EZXRhaWxQYWdlXCI7XG5pbXBvcnQgVXNlclBhZ2UgZnJvbSBcIi4vdXNlci9wYWdlL1VzZXJQYWdlXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tbW9uL2NvbXBvbmVudC9Nb2RhbFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21tb24vY29tcG9uZW50L0Zvb3RlclwiO1xuXG4vLyBsb2dpbiB0ZXN0XG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL2duYi9jb21wb25lbnQvU2lnbmluXCI7XG5cbmNvbnN0IGN1c3RvbUhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtyZXNldH07XG4gICoge1xuICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gIH1cblxuYDtcblxuY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuLy8gcm91dGVyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnNvbGUubG9nKFwiYXBwISEhISEhISEhXCIpO1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxBcHBDb250YWluZXI+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2N1c3RvbUhpc3Rvcnl9PlxuICAgICAgICAgIDxHTkJQYWdlIC8+XG4gICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXIvOnRhYlwiIGNvbXBvbmVudD17VXNlclBhZ2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kZXRhaWxcIiBjb21wb25lbnQ9e0RldGFpbFBhZ2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jaGF0XCIgY29tcG9uZW50PXtDaGF0UGFnZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3MvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3c1wiIGNvbXBvbmVudD17TmV3c1BhZ2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgIDxDaGF0UGFnZSAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvQXBwQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFBhcGVyLCBJbnB1dEJhc2UsIEljb25CdXR0b24sIFpvb20gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiO1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BdHRhY2hGaWxlXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgQ2hhdEJ1YmJsZU91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZU91dGxpbmVcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICB6SW5kZXg6IDk5OTgsXHJcbiAgICB3aWR0aDogMzYwLFxyXG4gICAgaGVpZ2h0OiA1MDAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgYm90dG9tOiAzMCxcclxuICAgIHJpZ2h0OiAzMCxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiA2MCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgXCImIHNwYW5cIjoge1xyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnRzOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIGhlaWdodDogNTcsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGlucHV0QmFzZToge1xyXG4gICAgZmxleDogMSxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQ2hhdEJ0biA9IHN0eWxlZChJY29uQnV0dG9uKWBcclxuICAmLk11aUJ1dHRvbkJhc2Utcm9vdCB7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNjNiZjtcclxuICAgICYuTXVpQnV0dG9uQmFzZS1yb290OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNjNiZjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KHsgdmlzdWFsLCBoYW5kbGVDbGljayB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiB2aXN1YWwgPyAoXHJcbiAgICA8Wm9vbSBpbj17dmlzdWFsfT5cclxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPHNwYW4+7LC47Jes7J247JuQPC9zcGFuPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudHN9PjwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8QXR0YWNoRmlsZUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0QmFzZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrqZTshLjsp4Drpbwg7J6F66Cl7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxTZW5kSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvWm9vbT5cclxuICApIDogKFxyXG4gICAgPENoYXRCdG4gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufT5cclxuICAgICAgPENoYXRCdWJibGVPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgIDwvQ2hhdEJ0bj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50L0NoYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRDb250YWluZXIoKSB7XHJcbiAgY29uc3QgW3Zpc3VhbCwgc2V0VmlzdWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldFZpc3VhbCghdmlzdWFsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPENoYXQgdmlzdWFsPXt2aXN1YWx9IGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30gLz47XHJcbn1cclxuIiwiaW1wb3J0IENoYXRDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9DaGF0Q29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICByZXR1cm4gPENoYXRDb250YWluZXIgLz47XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5cbi8vIGZvb3Rlcuy7qO2FjOydtOuEiCAxMDB2dyDroZwgd2lkdGjshKTsoJXtlZjrqbQg7Iqk7YGs66Gk67Cc7IOdXG5jb25zdCBGb290ZXJDb250YWluZXIgPSBzdHlsZWQuZm9vdGVyYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wIDogMjAwcHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG5gO1xuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgJiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxuYDtcbmNvbnN0IEluZm9XcmFwID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IGRhcmtncmF5O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmID4gc3BhbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGb290ZXJDb250YWluZXI+XG4gICAgICAgICAgICA8SWNvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICB7Lyog66mU7J28IOyVhOydtOy9mCAqL31cbiAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgey8qIOy5tOy5tOyYpCDslYTsnbTsvZggKi99XG4gICAgICAgICAgICAgICAgICAgIDxTdmdJY29uPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnICB2aWV3Qm94PVwiMCAwIDIwOCAxOTEuOTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTA0LDBDNDYuNTYsMCwwLDM2LjcxLDAsODJjMCwyOS4yOCwxOS40Nyw1NSw0OC43NSw2OS40OC0xLjU5LDUuNDktMTAuMjQsMzUuMzQtMTAuNTgsMzcuNjksMCwwLS4yMSwxLjc2LjkzLDIuNDNhMy4xNCwzLjE0LDAsMCwwLDIuNDguMTVjMy4yOC0uNDYsMzgtMjQuODEsNDQtMjlBMTMxLjU2LDEzMS41NiwwLDAsMCwxMDQsMTY0YzU3LjQ0LDAsMTA0LTM2LjcxLDEwNC04MlMxNjEuNDQsMCwxMDQsMFpNNTIuNTMsNjkuMjdjLS4xMywxMS42LjEsMjMuOC0uMDksMzUuMjItLjA2LDMuNjUtMi4xNiw0Ljc0LTUsNS43OGExLjg4LDEuODgsMCwwLDEtMSwuMDdjLTMuMjUtLjY0LTUuODQtMS44LTUuOTItNS44NC0uMjMtMTEuNDEuMDctMjMuNjMtLjA5LTM1LjIzLTIuNzUtLjExLTYuNjcuMTEtOS4yMiwwLTMuNTQtLjIzLTYtMi40OC01Ljg1LTUuODNzMS45NC01Ljc2LDUuOTEtNS44MmM5LjM4LS4xNCwyMS0uMTQsMzAuMzgsMCw0LC4wNiw1Ljc4LDIuNDgsNS45LDUuODJzLTIuMyw1LjYtNS44Myw1LjgzQzU5LjIsNjkuMzgsNTUuMjksNjkuMTYsNTIuNTMsNjkuMjdabTUwLjQsNDAuNDVhOS4yNCw5LjI0LDAsMCwxLTMuODIuODNjLTIuNSwwLTQuNDEtMS01LTIuNjVsLTMtNy43OEg3Mi44NWwtMyw3Ljc4Yy0uNTgsMS42My0yLjQ5LDIuNjUtNSwyLjY1YTkuMTYsOS4xNiwwLDAsMS0zLjgxLS44M2MtMS42Ni0uNzYtMy4yNS0yLjg2LTEuNDMtOC41Mkw3NCw2My40MmE5LDksMCwwLDEsOC01LjkyLDkuMDcsOS4wNywwLDAsMSw4LDUuOTNsMTQuMzQsMzcuNzZDMTA2LjE3LDEwNi44NiwxMDQuNTgsMTA5LDEwMi45MywxMDkuNzJabTMwLjMyLDBIMTE0YTUuNjQsNS42NCwwLDAsMS01Ljc1LTUuNVY2My41YTYuMTMsNi4xMywwLDAsMSwxMi4yNSwwVjk4Ljc1aDEyLjc1YTUuNTEsNS41MSwwLDEsMSwwLDExWm00Ny00LjUyQTYsNiwwLDAsMSwxNjkuNDksMTA4TDE1NS40Miw4OS4zN2wtMi4wOCwyLjA4djEzLjA5YTYsNiwwLDAsMS0xMiwwdi00MWE2LDYsMCwwLDEsMTIsMFY3Ni40bDE2Ljc0LTE2Ljc0YTQuNjQsNC42NCwwLDAsMSwzLjMzLTEuMzQsNi4wOCw2LjA4LDAsMCwxLDUuOSw1LjU4QTQuNyw0LjcsMCwwLDEsMTc4LDY3LjU1TDE2NC4zLDgxLjIybDE0Ljc3LDE5LjU3QTYsNiwwLDAsMSwxODAuMjIsMTA1LjIzWlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBkPVwiTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICAgICAgPEluZm9XcmFwPlxuICAgICAgICAgICAgICAgIDxzcGFuPkNvcHlyaWdodCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS4gSnVuSHl1aywgR3l1IGFsbCByaWdodCByZXNlcnZlZC48L3NwYW4+XG4gICAgICAgICAgICA8L0luZm9XcmFwPlxuICAgICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cbiAgICApXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBkb25nYUljb24gZnJvbSBcIi4uL2ltYWdlcy9kb25nYS5wbmdcIjtcbmltcG9ydCBnb29nbGVJY29uIGZyb20gXCIuLi9pbWFnZXMvZ29vZ2xlLnBuZ1wiO1xuaW1wb3J0IGhhbmlJY29uIGZyb20gXCIuLi9pbWFnZXMvaGFuaS5wbmdcIjtcbmltcG9ydCBzYnNJY29uIGZyb20gXCIuLi9pbWFnZXMvc2JzLnBuZ1wiO1xuaW1wb3J0IHNlZ3llSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3NlZ3llLnBuZ1wiO1xuXG5mdW5jdGlvbiBnZXRVUkwoaWNvbk5hbWUpIHtcbiAgY29uc29sZS5sb2coaWNvbk5hbWUpO1xuICBjb25zdCBtYXRjaCA9IHtcbiAgICBnb29nbGU6IGdvb2dsZUljb24sXG4gICAgZG9uZ2E6IGRvbmdhSWNvbixcbiAgICBoYW5pOiBoYW5pSWNvbixcbiAgICBzYnM6IHNic0ljb24sXG4gICAgc2VneWU6IHNlZ3llSWNvbixcbiAgfTtcbiAgcmV0dXJuIG1hdGNoW2ljb25OYW1lXTtcbn1cblxuY29uc3QgSWNvbkJveCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5zaXplfTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XG4gIG1hcmdpbjogJHsocHJvcHMpID0+IHByb3BzLm1hcmdpbn07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gZ2V0VVJMKHByb3BzLm5hbWUpfSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAmOmhvdmVyIHtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbkNvbXBvbmVudChwcm9wcykge1xuICAvLyBob3ZlciBhY3Rpb24g7J2AIOuCmOykkeyXkCDrhKPslrTshJwg7JWg64uI66mU7J207IWYIOq1rO2YhFxuICBjb25zdCB7IG5hbWUsIGhvdmVyQWN0aW9uLCBzaXplID0gXCIxMDBweFwiLCBtYXJnaW4gPSBcIjEwcHhcIiwgLi4ucmVzdCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIDxJY29uQm94IG5hbWU9e25hbWV9IHNpemU9e3NpemV9IG1hcmdpbj17bWFyZ2lufSB7Li4ucmVzdH0gLz47XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyA5OTk5IDogLTEpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLm9uID09PSBcIm9uXCIgPyBcInJnYmEoMCwgMCwgMCwgMC40NSlcIiA6IFwicmdiYSgwLCAwLCAwLCAwKVwifTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0O1xuYDtcbmNvbnN0IE1vZGFsQm94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogXCJmbGV4XCI7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMub24gPT09IFwib25cIiA/IDEgOiAwKX07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxM3B4IC01cHggcmdiYSgxMzMsIDEzMywgMTMzLCAxKTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyBcIjBweFwiIDogXCIzMHB4XCIpfTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5gO1xuY29uc3QgRXhpdFdyYXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMS41cmVtKTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiByZ2IoMTM0LCAxNDIsIDE1MCk7XG4gIG1hcmdpbi1ib3R0b206IDIuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMjVzO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgY29uc3QgeyBvbiwgb25DbGlja0Nsb3NlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxDb250YWluZXIgb249e29uID8gXCJvblwiIDogXCJvZmZcIn0+XG4gICAgICA8TW9kYWxCb3ggb249e29uID8gXCJvblwiIDogXCJvZmZcIn0+XG4gICAgICAgIDxFeGl0V3JhcCBvbkNsaWNrPXtvbkNsaWNrQ2xvc2V9PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiMVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCI+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L0V4aXRXcmFwPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L01vZGFsQm94PlxuICAgIDwvTW9kYWxDb250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUb2dnbGVCdXR0b24sIFRvZ2dsZUJ1dHRvbkdyb3VwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcclxuaW1wb3J0IFZpZXdMaXN0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0XCI7XHJcbmltcG9ydCBWaWV3TW9kdWxlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdNb2R1bGVcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgVG9nZ2xlQnRuID0gc3R5bGVkKFRvZ2dsZUJ1dHRvbilgXHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICYgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzZjYzYmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDExcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gVmlld0J1dHRvbih7IG1hdGNoIH0pIHtcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZShcImNhcmRcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZpZXcgPSAoZXZlbnQsIG5ld1ZpZXcpID0+IHtcclxuICAgIHNldFZpZXcobmV3Vmlldyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGVCdXR0b25Hcm91cCB2YWx1ZT17dmlld30gZXhjbHVzaXZlIG9uQ2hhbmdlPXtoYW5kbGVWaWV3fT5cclxuICAgICAgPFRvZ2dsZUJ0biB2YWx1ZT1cImNhcmRcIj5cclxuICAgICAgICA8TGluayB0bz17YCR7bWF0Y2gucGF0aH0/dmlldz1jYXJkYH0+XHJcbiAgICAgICAgICA8Vmlld01vZHVsZUljb24gLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvVG9nZ2xlQnRuPlxyXG5cclxuICAgICAgPFRvZ2dsZUJ0biB2YWx1ZT1cImxpc3RcIj5cclxuICAgICAgICA8TGluayB0bz17YCR7bWF0Y2gucGF0aH0/dmlldz1saXN0YH0+XHJcbiAgICAgICAgICA8Vmlld0xpc3RJY29uIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RvZ2dsZUJ0bj5cclxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihWaWV3QnV0dG9uKTtcclxuIiwiaW1wb3J0IHFzIGZyb20gXCJxc1wiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBDYXJkLFxyXG4gIENhcmRBY3Rpb25BcmVhLFxyXG4gIENhcmRBY3Rpb25zLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmRNZWRpYSxcclxuICBCdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMzQ1LFxyXG5cclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE0MCxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIGlubGluZToge1xyXG4gICAgZGlzcGxheTogXCJpbmxpbmVcIixcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IDI1MCxcclxuICAgIGhlaWdodDogMTYwLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxyXG4gIH0sXHJcbiAgbGlzdEl0ZW06IHtcclxuICAgIHBhZGRpbmc6IFwiOHB4IDBcIixcclxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgI2NjY1wiLFxyXG4gICAgXCImOmxhc3QtY2hpbGRcIjoge1xyXG4gICAgICBib3JkZXJCb3R0b206IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIExpc3RWaWV3KHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICB7ZGF0YS5tYXAoKG5ld3MsIGlkeCkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e25ld3MuaW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgIHByaW1hcnk9e25ld3MudGl0bGV9XHJcbiAgICAgICAgICAgIHNlY29uZGFyeT17XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHRQcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV3cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgKSl9XHJcbiAgICA8L0xpc3Q+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZFZpZXcoeyBkYXRhLCBwYXRoIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiBkYXRhLm1hcCgobmV3cywgaWR4KSA9PiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0ga2V5PXtpZHh9PlxyXG4gICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgaW1hZ2U9e25ld3MuaW1hZ2V9XHJcbiAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICB7bmV3cy50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtwYXRoID09PSBcIi9uZXdzXCIgJiYgKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAge25ld3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9uZXdzLyR7bmV3cy5pZH1gfT4g7J6Q7IS47Z6IPC9MaW5rPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHtwYXRoID09PSBcIi9uZXdzXCIgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAg7Iqk7YGs656pXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICkpO1xyXG59XHJcblxyXG5jb25zdCBDb250ZW50c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnZpZXcgPT09IFwiY2FyZFwiICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgIGdhcDogMjBweDtcclxuICAgIGB9XHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52aWV3ID09PSBcImxpc3RcIiAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGB9O1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gVmlld1R5cGVQYWdlKHsgbG9jYXRpb24sIGRhdGEgfSkge1xyXG4gIGxldCBxdWVyeSA9IHFzLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCwge1xyXG4gICAgaWdub3JlUXVlcnlQcmVmaXg6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xyXG4gICAgcXVlcnkudmlldyA9IFwiY2FyZFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW50c0NvbnRhaW5lciB2aWV3PXtxdWVyeS52aWV3fT5cclxuICAgICAge3F1ZXJ5LnZpZXcgPT09IFwiY2FyZFwiID8gKFxyXG4gICAgICAgIDxDYXJkVmlldyBkYXRhPXtkYXRhfSBwYXRoPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGlzdFZpZXcgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGVudHNDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihWaWV3VHlwZVBhZ2UpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZG9uZ2EuNTNhZGE3MGY4N2FhMDczOTljMmIxZjEwYTg1ZTExMDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZS43MGY0OWVmZmFlZDUyYTc2OTJkMDE0MmI4YWQ3ZmVjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuaS4zMmQzNjIxMjAyYmI1MzkwZmM5OTQyMjA3Y2QxMzZjOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2JzLjIxMDQ2NDRhYWQ2ZDc2OTgzOTkxNmYxZWFlZDQ4NjEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzZWd5ZS40OWU4Zjc2Mjc1NjkyNTIzNDI0YThiMGJhZmEyNzZhZi5wbmdcIjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSWNvbkJveCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9JY29uXCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuXHJcbmNvbnN0IEFyaWNsZUNvbnRhaW5lciA9IHN0eWxlZChQYXBlcilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJiBpbWcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoeyBuZXdzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFyaWNsZUNvbnRhaW5lciBlbGV2YXRpb249ezN9PlxyXG4gICAgICA8SWNvbkJveFxyXG4gICAgICAgIHNpemU9XCIxMDBweFwiXHJcbiAgICAgICAgbWFyZ2luPVwiMTBweFwiXHJcbiAgICAgICAgbmFtZT17bmV3cy5jb21wYW55fVxyXG4gICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlfSAvPlxyXG4gICAgICA8cD57bmV3cy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxDb21tZW50cyAvPlxyXG4gICAgPC9BcmljbGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcblxuXG5jb25zdCBDb21tZW50c1dyYXAgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbmA7XG5jb25zdCBTdHlsZWRUZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKWBcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICB3aWR0aDogOTUlO1xuYDtcbmNvbnN0IElucHV0RGF0YXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG5gO1xuY29uc3QgQ2hhcmFjdGVycyA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPT09IFwiZ3JheVwiPyBcIiM4NDg0ODRcIjpcInJlZFwifTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudHMocHJvcHMpIHtcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NlbmRhYmxlLCBzZXRTZW5kYWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMzAwKSBzZXRTZW5kYWJsZShmYWxzZSk7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPD0gMzAwKSBzZXRTZW5kYWJsZSh0cnVlKTtcbiAgICB9LFt2YWx1ZV0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbW1lbnRzV3JhcD5cbiAgICAgICAgICAgIDxTdHlsZWRUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtdGV4dGFyZWFcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJvd3NNYXg9ezV9XG4gICAgICAgICAgICBsYWJlbD17YOuMk+q4gCDri6zquLBgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrsJTrpbTqs6Ag6rOg7Jq0IOunkOydhCDsgqzsmqntlbTso7zshLjsmpQuXCJcbiAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dERhdGFzPlxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbG9yPXtzZW5kYWJsZT8gXCJncmF5XCI6XCJyZWRcIn0+IFxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRWYWx1ZS5sZW5ndGh9IC8gMzAwXG4gICAgICAgICAgICAgICAgPC9DaGFyYWN0ZXJzPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRCdXR0b24gXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICDsnoUg66ClXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRCdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0RGF0YXM+XG4gICAgICAgIDwvQ29tbWVudHNXcmFwPlxuICAgIClcbn0iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vY29tcG9uZW50L0FydGljbGVcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7zrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7xcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcInNlZ3llXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQ7IS87YSwIOychOyepe2VnCDqs7XqsqnsnpDrk6Qg7KO87J2Y67O0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJnb29nbGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcImRvbmdhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJoYW5pXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJzYnNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZUNvbnRhaW5lcih7IGlkIH0pIHtcclxuICBjb25zdCBuZXdzID0gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdENvbW1lbnRzID0gKHNlbmRhYmxlKSA9PiB7XHJcbiAgICBcclxuICB9XHJcbiAgcmV0dXJuIDxBcnRpY2xlIG5ld3M9e25ld3N9IC8+O1xyXG59XHJcbiIsImltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQXJ0aWNsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRGV0YWlsUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxQYWdlKHsgbWF0Y2ggfSkge1xyXG4gIGNvbnNvbGUubG9nKFwiRGV0YWlsUGFnZVwiKTtcclxuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEZXRhaWxQYWdlQ29udGFpbmVyPlxyXG4gICAgICA8QXJ0aWNsZUNvbnRhaW5lciBpZD17aWR9IC8+XHJcbiAgICA8L0RldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExvZ2luQnRuIGZyb20gXCIuL0xvZ2luQnRuXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBib3gtc2hhZG93OiByZ2IoMjM4LCAyMzgsIDIzOCkgMHB4IDFweCAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5ODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTMwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuYDtcclxuY29uc3QgUmlnaHRJdGVtID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgJiBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qICYgKyAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfSAqL1xyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHJnYig0MCwgNDIsIDUzKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IExvZ28gPSBzdHlsZWQoQnV0dG9uKWBcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPElubmVyPlxyXG4gICAgICAgIDxSaWdodEl0ZW0+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxMb2dvIGltYWdlPXtMb2dvSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL25ld3NcIj7slrjroaDsgqzrs4Qg67O06riwPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbmV3c1wiPuyGjeuztDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9SaWdodEl0ZW0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMb2dpbkJ0biAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lubmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgRGl2aWRlciwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L01vZGFsXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbmluXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgaDYge1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlcklubmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDg0cHg7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICYgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAmIC5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjUsIDY5LCA3MywgMC4zKSxcclxuICAgICAgMCAxcHggM3B4IDFweCByZ2JhKDY1LCA2OSwgNzMsIDAuMTUpO1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICByaWdodDogLThweDtcclxuICAgIGJvdHRvbTogLThweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgJi5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdG5XcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBBdmF0YXIgPSBzdHlsZWQoSWNvbkJ1dHRvbilgXHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pbWFnZSAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9wcy5pbWFnZX0pO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dpbk1vZGFsLCBzZXRMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5mb01vZGFsLCBzZXRJbmZvTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiL2F1dGgvY2hlY2tVc2VyXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRMb2dpbih0eXBlb2YgcmVzLmRhdGEudXNlciAhPT0gXCJ1bmRlZmluZWRcIik7XHJcbiAgICAgICAgc2V0VXNlckluZm8ocmVzLmRhdGEudXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBzZXRMb2dnZWRJbihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tMb2dpbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TG9naW5Nb2RhbCghbG9naW5Nb2RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tJbmZvTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmZvTW9kYWwoIWluZm9Nb2RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRmlsZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1nXCIsIGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucGF0Y2goYC9hdXRoL2ltZy8ke3VzZXJJbmZvLnNuc0lkfWAsIGZvcm1EYXRhKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgICAgICBpbWFnZTogcmVzLmRhdGEudXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2dpbiA/IChcclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja0luZm9Nb2RhbH1cclxuICAgICAgICAgIGltYWdlPXt1c2VySW5mbyAmJiB1c2VySW5mby5pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tMb2dpbk1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOuhnOq3uOyduCAvIOqwgOyehVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2xvZ2luTW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbj17bG9naW5Nb2RhbH0gb25DbGlja0Nsb3NlPXtoYW5kbGVDbGlja0xvZ2luTW9kYWx9PlxyXG4gICAgICAgICAgPFNpZ25JbiAvPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aW5mb01vZGFsICYmIChcclxuICAgICAgICA8TW9kYWwgb249e2luZm9Nb2RhbH0gb25DbGlja0Nsb3NlPXtoYW5kbGVDbGlja0luZm9Nb2RhbH0+XHJcbiAgICAgICAgICA8VXNlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFVzZXJJbm5lcj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlckluZm8gJiYgdXNlckluZm8uaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBZGRGaWxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L1VzZXJJbm5lcj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mbyAmJiB1c2VySW5mby5uaWNrfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1VzZXJDb250YWluZXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPE1lbnUgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXIvc2NyYXBcIj7siqTtgazrnqk8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPE1lbnUgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXIvY29tbWVudFwiPuuCtCDrjJPquIA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEJ0bldyYXA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC9sb2dvdXRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAg66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvQnRuV3JhcD5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgZ29vZ2xlTG9naW5JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dvb2dsZV9sb2dpbl9idXR0b24ucG5nXCI7XG5pbXBvcnQga2FrYW9Mb2dpbkltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMva2FrYW9fbG9naW5fYnV0dG9uLnBuZ1wiO1xuXG5jb25zdCBTaWduSW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgLk11aUJ1dHRvbi1yb290IHtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy5pbWFnZX0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5gO1xuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFNpZ25JbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5b7J6R7J2A66Gc6rOgXSDri6TsnYwg6rOE7KCV7Jy866GcIOuhnOq3uOyduDwvVGl0bGVDb250YWluZXI+XG4gICAgICA8YSBocmVmPVwiL2F1dGgvZ29vZ2xlXCI+XG4gICAgICAgIDxTdHlsZWRCdXR0b24gaW1hZ2U9e2dvb2dsZUxvZ2luSW1hZ2V9IC8+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiL2F1dGgva2FrYW9cIj5cbiAgICAgICAgPFN0eWxlZEJ1dHRvbiBpbWFnZT17a2FrYW9Mb2dpbkltYWdlfSAvPlxuICAgICAgPC9hPlxuICAgIDwvU2lnbkluQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IEdOQiBmcm9tIFwiLi4vY29tcG9uZW50L0dOQlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR05CUGFnZSgpIHtcclxuICByZXR1cm4gPEdOQiAvPjtcclxufVxyXG4iLCJpbXBvcnQgR05CQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvR05CQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHTkJQYWdlKCkge1xyXG4gIHJldHVybiA8R05CQ29udGFpbmVyIC8+O1xyXG59XHJcbiIsIlxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkTWVkaWEsIENhcmRDb250ZW50LFxuICAgIEF2YXRhciwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSwgQ2FyZEFjdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgRmF2b3JpdGUgYXMgRmF2b3JpdGVJY29uLCBTaGFyZSBhcyBTaGFyZUljb24sIE1vcmVWZXJ0IGFzIE1vcmVWZXJ0SWNvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIjtcblxuXG5jb25zdCBTdHlsZWRDYXJkID0gc3R5bGVkKENhcmQpYFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcbiAgJjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsMCwwLC4xKSwgMHB4IDJweCAzcHggcmdiYSgwLDAsMCwuMTIpLCAwcHggMXB4IDNweCByZ2JhKDAsMCwwLC4xNCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgd2lkdGg6IDMzMCxcbiAgICAgIG1pbldpZHRoOiAzMzAsXG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIG1hcmdpbjogXCIwIDE1cHhcIixcbiAgICB9LFxuICAgIG1lZGlhOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiIC8vIDE2OjlcbiAgICB9LFxuICAgIGF2YXRhclJlZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiByZWRbNTAwXVxuICAgIH0sXG4gIH0pKTtcbi8vIGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5IOulvCDsnoXroKXrsJvslYQgQ2FyZOulvCDrpqzthLTtlZjripQg7Lu07Y+s64SM7Yq4IO2VqOyImFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NhcmQoIHsgaW1hZ2UsIGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yaWdpbmFsTGluaywgZGF0ZSwgY29tcGFueX0gKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIC8vIGRlc2NpcHJpb24gMTAw6riA7J6QIOygnO2VnCArIOunkOykhOyehO2RnFxuICAgIGNvbnN0IHN1YlN0cmluZyA9IChkZXNjLGNvdW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3RyaW5nID0gdHlwZW9mIGRlc2MgPT09IFwic3RyaW5nXCI7XG4gICAgICAgIHJldHVybiAoaXNTdHJpbmcgJiYgZGVzYy5sZW5ndGggPj0gY291bnQ/IGRlc2Muc3Vic3RyaW5nKDAsY291bnQpICsgXCIuLi5cIiA6IGRlc2MpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQ2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cIm5ld3NcIiBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT5cbiAgICAgICAgICAgICAgICB7Y29tcGFueT8gY29tcGFueS5zbGljZSgwLDQpIDogJyd9XG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aXRsZT17c3ViU3RyaW5nKHRpdGxlLCAyMCl9XG4gICAgICAgICAgICBzdWJoZWFkZXI9e2RhdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XG4gICAgICAgICAgICAgICAge3N1YlN0cmluZyhkZXNjcmlwdGlvbiwgODApfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImFkZCB0byBmYXZvcml0ZXNcIj5cbiAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNoYXJlXCI+XG4gICAgICAgICAgICAgIDxTaGFyZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICA8L1N0eWxlZENhcmQ+XG4gICAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgVGFicywgVGFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBwYXBlcjoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIlxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbXCLsoITssrRcIiwgXCLsoJXsuZhcIiwgXCLqsr3soJxcIiwgXCLsgqztmoxcIl07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHNxdWFyZSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFRhYiBrZXk9e2lkeH0gbGFiZWw9e2l0ZW19IHN0eWxlPXt7Zm9udFNpemU6XCIxLjFyZW1cIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVGFicz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IDIwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbm9WYWxpZGF0ZT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMTctMDUtMjRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFBhcGVyLCBJbnB1dEJhc2UsIEljb25CdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHBhZGRpbmc6IFwiMnB4IDRweFwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgd2lkdGg6IDQwMCxcclxuICB9LFxyXG4gIGlucHV0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiA4LFxyXG4gICAgZmxleDogMSxcclxuICB9LFxyXG4gIGljb25CdXR0b246IHtcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFBhcGVyIGNvbXBvbmVudD1cImZvcm1cIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gZWxldmF0aW9uPXszfT5cclxuICAgICAgICA8SW5wdXRCYXNlIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0gcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiAvPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTmV3c0NhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHtcbiAgQXJyb3dCYWNrSW9zT3V0bGluZWQsXG4gIEFycm93Rm9yd2FyZElvc091dGxpbmVkLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmNvbnN0IFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC8qIHdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5kZXZpY2UgPT09IFwid2ViXCIgPyBcImNhbGMoOTkwcHggKyA3NXB4KVwiIDogXCJcIn07ICovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHR9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlICogLTM2MH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5gO1xuY29uc3QgQXJyb3dDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiB3aWR0aDogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZGV2aWNlID09PSBcIndlYlwiID8gXCJjYWxjKDk5MHB4ICsgNjBweClcIiA6IFwiXCJ9OyAqL1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IEFycm93SG92ZXJBY3Rpb24gPSBjc3NgXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBmb250LXNpemU6IDg1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjU1O1xuICAgIGJveC1zaGFkb3c6IDE2cHggMThweCAyOHB4IC0zcHggcmdiYSgxNDMsIDE0MywgMTQzLCAwLjc1KTtcbiAgfVxuYDtcbmNvbnN0IFByZXZBcnJvdyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgY29sb3I6ICNjMWMxYzE7XG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyAwIDogMC43NSl9O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHotaW5kZXg6ICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyAtMTAgOiAxMCl9O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgJHsocHJvcHMpID0+IChwcm9wcy52aXNpYmxlID09PSBcIm5vbmVcIiA/IFwiXCIgOiBBcnJvd0hvdmVyQWN0aW9uKX07XG5gO1xuY29uc3QgTmV4dEFycm93ID0gc3R5bGVkKFByZXZBcnJvdylgXG4gICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyBcIlwiIDogQXJyb3dIb3ZlckFjdGlvbil9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2FyZFdpZHRoLCBuZXdzIH0gPSBwcm9wcztcbiAgY29uc3QgbWF4ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gbmV3cy5sZW5ndGggLSAyLCBbbmV3c10pO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcmRDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBjb25zdCBvbkNsaWNrUHJldiA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmUoYWN0aXZlIC0gMSA+IC0xID8gYWN0aXZlIC0gMSA6IC0xKTtcbiAgfTtcbiAgY29uc3Qgb25DbGlja05leHQgPSAobWF4KSA9PiB7XG4gICAgc2V0QWN0aXZlKGFjdGl2ZSArIDEgPCBtYXggKyAxID8gYWN0aXZlICsgMSA6IG1heCArIDEpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIC8vIDxTbGlkZXJDb250YWluZXIgZGV2aWNlPXtcIndlYlwifSBoZWlnaHQ9XCI2NXZoXCI+XG4gICAgPFNsaWRlckNvbnRhaW5lciBkZXZpY2U9e1wid2ViXCJ9IGhlaWdodD1cIjExMCVcIj5cbiAgICAgIDxBcnJvd0NvbnRhaW5lciBkZXZpY2U9e1wid2ViXCJ9PlxuICAgICAgICA8UHJldkFycm93IHZpc2libGU9e2FjdGl2ZSA8PSAtMSA/IFwibm9uZVwiIDogXCJcIn0gb25DbGljaz17b25DbGlja1ByZXZ9PlxuICAgICAgICAgIDxBcnJvd0JhY2tJb3NPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNzUgfX0gLz5cbiAgICAgICAgPC9QcmV2QXJyb3c+XG4gICAgICAgIDxOZXh0QXJyb3dcbiAgICAgICAgICB2aXNpYmxlPXthY3RpdmUgPj0gbWF4KCkgPyBcIm5vbmVcIiA6IFwiXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja05leHQobWF4KCkpfVxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93Rm9yd2FyZElvc091dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiA3NSB9fSAvPlxuICAgICAgICA8L05leHRBcnJvdz5cbiAgICAgIDwvQXJyb3dDb250YWluZXI+XG4gICAgICA8Q2FyZENvbnRhaW5lciByZWY9e2NhcmRDb250YWluZXJSZWZ9IGFjdGl2ZT17YWN0aXZlfT5cbiAgICAgICAgey8qIHRlc3ROZXdz64qUIOydtCDtm4Qgc2FnYS0+YXBpLT5zdG9yZSDrpbwg7Ya17ZW0IOyghOuLrOuQnCByZXNwb25zZeyXkCDrlLDrnbwg67OA6rK9Ki99XG4gICAgICAgIHtuZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPE5ld3NDYXJkIGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L0NhcmRDb250YWluZXI+XG4gICAgPC9TbGlkZXJDb250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50L0NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUNvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPENhdGVnb3J5IC8+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGUgZnJvbSBcIi4uL2NvbXBvbmVudC9EYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlQ29udGFpbmVyKCkge1xyXG4gIHJldHVybiA8RGF0ZSAvPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudC9TZWFyY2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaENvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPFNlYXJjaCAvPjtcclxufVxyXG4iLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudC9TbGlkZXInO1xuXG5jb25zdCBuZXdzID0gW1xuICAgIHsgXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMjAvMDgvMzEvTklTSTIwMjAwODMxXzAwMTY2MzAyMThfd2ViLmpwZz9ybmQ9MjAyMDA4MzExNTA5MTJcIixcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXG4gICAgICAgIHRpdGxlOmDmlofrjIDthrXroLkgXCLrqqjsspjrn7wg64+F7IScIOymkOqyqOuztOq4uFwi4oCmJ+y9lOuhnOuCmCDsgqztlLzsl5TsiqQnIOuTsSDstpTsspxgLCBcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXG4gICAgICAgIFwi7KCV7KGw64yA7JmVIOq4iOuCnOyghOq2jCDtmIHtjIztlZjrqbAg6rK97KCcIOqwnO2Yge2VnCDsnbTslbzquLAg6rCA7J6lIOyii+yVhFwiYCwgXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxuICAgICAgICBjb21wYW55Olwi64m07Iuc7IqkXCJcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMjAvMDgvMjQvTklTSTIwMjAwODI0XzAwMTY2MDY3MzJfd2ViLmpwZz9ybmQ9MjAyMDA5MDExMjAzNDNcIixcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXG4gICAgICAgIHRpdGxlOmDmlofrjIDthrXroLkgXCLrqqjsspjrn7wg64+F7IScIOymkOqyqOuztOq4uFwi4oCmJ+y9lOuhnOuCmCDsgqztlLzsl5TsiqQnIOuTsSDstpTsspxgLCBcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXG4gICAgICAgIFwi7KCV7KGw64yA7JmVIOq4iOuCnOyghOq2jCDtmIHtjIztlZjrqbAg6rK97KCcIOqwnO2Yge2VnCDsnbTslbzquLAg6rCA7J6lIOyii+yVhFwiYCwgXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxuICAgICAgICBjb21wYW55Olwi64m07Iuc7IqkXCJcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMTgvMDEvMTUvTklTSTIwMTgwMTE1XzAwMDAwOTQ3Mzdfd2ViLmpwZz9ybmQ9MjAxODAxMTUxNjM5MDdcIixcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXG4gICAgICAgIHRpdGxlOmDmlofrjIDthrXroLkgXCLrqqjsspjrn7wg64+F7IScIOymkOqyqOuztOq4uFwi4oCmJ+y9lOuhnOuCmCDsgqztlLzsl5TsiqQnIOuTsSDstpTsspxgLCBcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXG4gICAgICAgIFwi7KCV7KGw64yA7JmVIOq4iOuCnOyghOq2jCDtmIHtjIztlZjrqbAg6rK97KCcIOqwnO2Yge2VnCDsnbTslbzquLAg6rCA7J6lIOyii+yVhFwiYCwgXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxuICAgICAgICBjb21wYW55Olwi64m07Iuc7IqkXCJcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMjAvMDkvMDEvTklTSTIwMjAwOTAxXzAwMDA1OTE5MTVfd2ViLmpwZz9ybmQ9MjAyMDA5MDEwNzEyNDdcIixcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXG4gICAgICAgIHRpdGxlOmDmlofrjIDthrXroLkgXCLrqqjsspjrn7wg64+F7IScIOymkOqyqOuztOq4uFwi4oCmJ+y9lOuhnOuCmCDsgqztlLzsl5TsiqQnIOuTsSDstpTsspxgLCBcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXG4gICAgICAgIFwi7KCV7KGw64yA7JmVIOq4iOuCnOyghOq2jCDtmIHtjIztlZjrqbAg6rK97KCcIOqwnO2Yge2VnCDsnbTslbzquLAg6rCA7J6lIOyii+yVhFwiYCwgXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxuICAgICAgICBjb21wYW55Olwi64m07Iuc7IqkXCJcbiAgICB9LFxuXVxuLy8g642U66+4642w7J207YSwIOuJtOyKpFxuY29uc3QgdGVzdE5ld3MgPSBbLi4ubmV3cywgLi4ubmV3cywgLi4ubmV3cy5zbGljZSgwLDIpXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyQ29udGFpbmVyKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNsaWRlciBuZXdzPXt0ZXN0TmV3c30vPlxuICAgIClcbn0iLCJpbXBvcnQgQ2F0ZWdvcnlDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9DYXRlZ29yeUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgRGF0ZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0RhdGVDb250YWluZXJcIjtcclxuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL1NlYXJjaENvbnRhaW5lclwiO1xyXG5pbXBvcnQgU2xpZGVyQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmNvbnN0IEZpbHRlcldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5gO1xyXG5jb25zdCBDb250ZW50c1dyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGaWx0ZXJXcmFwPlxyXG4gICAgICAgIDxEYXRlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgPFNlYXJjaENvbnRhaW5lciAvPlxyXG4gICAgICA8L0ZpbHRlcldyYXA+XHJcbiAgICAgIDxDb250ZW50c1dyYXA+XHJcbiAgICAgICAgPENhdGVnb3J5Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPFNsaWRlckNvbnRhaW5lciAvPlxyXG4gICAgICA8L0NvbnRlbnRzV3JhcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZV9sb2dpbl9idXR0b24uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImtha2FvX2xvZ2luX2J1dHRvbi5hZDViMjAwM2FkMzgxOGI3OGY5MDk0NGExODczZGI0Yy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nby5iODdmM2FjZmEzYTczZjhhYzI5YWRmZjg1YTI2OWM5ZC5wbmdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuLy8gc3RvcmUgQ29udGV4dEFQSeuhnCDqsJDsi7jquLBcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuIiwiaW1wb3J0IEljb25Cb3ggZnJvbSAnLi4vLi4vY29tbW9uL2NvbXBvbmVudC9JY29uJztcblxuY29uc3QgY29ycHMgPSBbXCJnb29nbGVcIixcImRvbmdhXCIsXCJoYW5pXCIsXCJzYnNcIixcInNlZ3llXCJdO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ycENhdGVnb3J5KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtjb3Jwcy5tYXAoKGNvcnAsaW5kZXgpID0+IFxuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxJY29uQm94IFxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxuICAgICAgICAgICAgICAgIHNpemU9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiMTBweFwiXG4gICAgICAgICAgICAgICAgbmFtZT17Y29ycH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWaWV3VHlwZUJ0biBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZUJ0blwiO1xyXG5pbXBvcnQgVmlld1R5cGVQYWdlIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgdGl0bGU6IFwi66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAuLi4g66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAg66eI7Iqk7YGsIO2SiOygiCDrjIDrnoBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi7KGw7ISg7J2867O0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQ7IS87YSwIOychOyepe2VnCDqs7XqsqnsnpDrk6Qg7KO87J2Y67O0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0xpc3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxWaWV3VHlwZUJ0biAvPlxyXG4gICAgICA8Vmlld1R5cGVQYWdlIGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBDb3JwQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50L0NvcnBDYXRlZ29yeSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ycENhdGVnb3J5Q29udGFpbmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb3JwQ2F0ZWdvcnkgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59IiwiaW1wb3J0IE5ld3NMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvTmV3c0xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxOZXdzTGlzdCAvPjtcclxufVxyXG4iLCJpbXBvcnQgQ29ycENhdGVnb3J5Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ29ycENhdGVnb3J5Q29udGFpbmVyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IE5ld3NDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9OZXdzQ29udGFpbmVyXCI7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7LyogPENvcnBDYXRlZ29yeUNvbnRhaW5lciAvPiAqL31cbiAgICAgIDxOZXdzQ29udGFpbmVyIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgRm9ybUNvbnRyb2wsIFNlbGVjdCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgVmlld1R5cGVQYWdlIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZVwiO1xyXG5pbXBvcnQgVmlld1R5cGVCdG4gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvVmlld1R5cGVCdG5cIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgdGl0bGU6IFwi66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAuLi4g66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAg66eI7Iqk7YGsIO2SiOygiCDrjIDrnoBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi7KGw7ISg7J2867O0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE2MTUzMzRfOTU1NS5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkOyEvO2EsCDsnITsnqXtlZwg6rO16rKp7J6Q65OkIOyjvOydmOuztFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi7YyU66Gc7JuMIOunjuydgCDqs4TsoJUg64W466as64qUIOqzteqyqSwg7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5Ag7IS87YSw7J24IOyymSDqsIDsnqUg6rO16rKpIOyEseqzteuloCDsoovsnYAg7Y64Li4u66y467KV6rO8IOyyoOyekCDsmKTrpZgg7Jyg7J2Y7ZWc64uk66m0IOyWtOuKkCDsoJXrj4Qg67Cp7Ja0IOqwgOuKpVwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2Y2M2JmXCIsXHJcbiAgICBib3JkZXJDb2xvcjogXCIjM2Y2M2JmXCIsXHJcbiAgfSxcclxuICBmb3JtQ29udHJvbDoge1xyXG4gICAgbWFyZ2luOiA0LFxyXG4gICAgbWluV2lkdGg6IDEyMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTWVudUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXI6IDA7XHJcblxyXG4gICYgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnZhbHVlICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjM2Y2M2JmO1xyXG4gICAgYH1cclxuYDtcclxuXHJcbmNvbnN0IEZpbHRlcldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdGFiIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh0YWIgPT09IFwic2NyYXBcIiA/IDAgOiAxKTtcclxuICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbXCJzY3JhcFwiLCBcImNvbW1lbnRcIl07XHJcbiAgY29uc3Qgb3JkZXJMaXN0ID0gW1wicHVzaFwiLCBcImxhdGVzdFwiLCBcImNvbW1lbnRzXCJdO1xyXG4gIC8v64u07J2AIOyInCwg7LWc7IugIOyInCwg64yT6riAIOunjuydgCDsiJxcclxuXHJcbiAgY29uc3QgbWFrZVNlbGVjdCA9IChzZWxlY3RMaXN0LCB2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQ29udHJvbH0+XHJcbiAgICAgICAgPFNlbGVjdCBuYXRpdmUgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgIHtzZWxlY3RMaXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxyXG4gICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBlbGV2YXRpb249ezN9PlxyXG4gICAgICA8TWVudUNvbnRhaW5lcj5cclxuICAgICAgICB7Y2F0ZWdvcnlMaXN0Lm1hcCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRhYik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtID09PSB0YWIpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE1lbnVCdG4ga2V5PXtpZHh9IHZhbHVlPXtpdGVtID09PSB0YWIgPyAxIDogMH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvdXNlci8ke2l0ZW19YH0+e2l0ZW19PC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnVCdG4+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L01lbnVDb250YWluZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEZpbHRlcldyYXA+XHJcbiAgICAgICAgICA8Vmlld1R5cGVCdG4gLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHttYWtlU2VsZWN0KFtcIuyhsOyEoFwiLCBcIuykkeyVmVwiXSwgb3JkZXIpfVxyXG4gICAgICAgICAgICB7bWFrZVNlbGVjdChvcmRlckxpc3QsIG9yZGVyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmlsdGVyV3JhcD5cclxuICAgICAgICA8Vmlld1R5cGVQYWdlIGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBVc2VyIGZyb20gXCIuLi9jb21wb25lbnQvVXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckNvbnRhaW5lcih7IHRhYiB9KSB7XHJcbiAgcmV0dXJuIDxVc2VyIHRhYj17dGFifSAvPjtcclxufVxyXG4iLCJpbXBvcnQgVXNlckNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL1VzZXJDb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHsgbWF0Y2ggfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPFVzZXJDb250YWluZXIgdGFiPXttYXRjaC5wYXJhbXMudGFifSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==