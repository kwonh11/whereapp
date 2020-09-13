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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  // test
  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modalOn = _React$useState2[0],
      setModalOn = _React$useState2[1];

  var onClickClose = function onClickClose() {
    setModalOn(!modalOn);
  };

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
  })), /*#__PURE__*/React.createElement(_chat_page_ChatPage__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/React.createElement(_common_component_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/React.createElement(_common_component_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
    on: modalOn,
    onClickClose: onClickClose
  }, /*#__PURE__*/React.createElement(_gnb_component_Signin__WEBPACK_IMPORTED_MODULE_12__["default"], null)));
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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/gnb/component/Login.js");
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
  }, "\uC18D\uBCF4"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/component/Login.js":
/*!************************************!*\
  !*** ./src/gnb/component/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_component_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/Modal */ "./src/common/component/Modal.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_page_UserPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../user/page/UserPage */ "./src/user/page/UserPage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  height: 84px;\n  width: 84px;\n  margin-bottom: 10px;\n  & div {\n    width: 100%;\n    height: 100%;\n  }\n  & .MuiButtonBase-root {\n    position: absolute;\n    background: #fff;\n    box-shadow: 0 1px 1px 0 rgba(65, 69, 73, 0.3),\n      0 1px 3px 1px rgba(65, 69, 73, 0.15);\n    width: 34px;\n    height: 34px;\n    right: -10px;\n    bottom: -10px;\n  }\n"]);

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









var UserContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var UserInner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var Menu = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject3());
var BtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      login = _useState2[0],
      setLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      on = _useState4[0],
      setOn = _useState4[1];

  var handleClick = function handleClick() {
    setLogin(!login);
  };

  var onClickClose = function onClickClose() {
    setOn(!on);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, login ? /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "primary",
    component: "span",
    onClick: onClickClose
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], null)) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: handleClick
  }, "\uB85C\uADF8\uC778 / \uAC00\uC785"), on && /*#__PURE__*/React.createElement(_common_component_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    on: on,
    onClickClose: onClickClose
  }, /*#__PURE__*/React.createElement(UserContainer, null, /*#__PURE__*/React.createElement(UserInner, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], null), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "primary",
    component: "span"
  }, /*#__PURE__*/React.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6___default.a, null))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "email")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/React.createElement(Menu, {
    color: "primary",
    onClick: onClickClose
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/user/scrap"
  }, "\uC2A4\uD06C\uB7A9")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/React.createElement(Menu, {
    color: "primary",
    onClick: onClickClose
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/user/comment"
  }, "\uB0B4 \uB313\uAE00")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/React.createElement(BtnWrap, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: handleClick
  }, "\uB85C\uADF8\uC544\uC6C3"))));
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
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    font-size: 1.5rem;\n    color: #676767;\n    font-weight: bold;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 350px;\n    height: 80px;\n    margin: 5px;\n    padding: 5px;\n    background-image: url(", ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    margin-top: -50px;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    & .MuiButton-root {\n        margin: 2px;\n    }\n"]);

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
  return /*#__PURE__*/React.createElement(SignInContainer, null, /*#__PURE__*/React.createElement(TitleContainer, null, "[\uC791\uC740\uB85C\uACE0] \uB2E4\uC74C \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(StyledButton, {
    image: _images_google_login_button_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(StyledButton, {
    image: _images_kakao_login_button_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb21wb25lbnQvQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9wYWdlL0NoYXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9kb25nYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZXMvZ29vZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9oYW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9zYnMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzL3NlZ3llLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsL2NvbXBvbmVudC9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29tcG9uZW50L0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29udGFpbmVyL0FydGljbGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9wYWdlL0RldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvR05CLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ25iL2NvbnRhaW5lci9HTkJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9wYWdlL0dOQlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL0RhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL1NlYXJjaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL3BhZ2UvSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2tha2FvX2xvZ2luX2J1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29tcG9uZW50L0NvcnBDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvTmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29udGFpbmVyL0NvcnBDYXRlZ29yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb250YWluZXIvTmV3c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9wYWdlL05ld3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbXBvbmVudC9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3BhZ2UvVXNlclBhZ2UuanMiXSwibmFtZXMiOlsiY3VzdG9tSGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0IiwiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQXBwIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsT24iLCJzZXRNb2RhbE9uIiwib25DbGlja0Nsb3NlIiwiVXNlclBhZ2UiLCJEZXRhaWxQYWdlIiwiQ2hhdFBhZ2UiLCJOZXdzUGFnZSIsIkhvbWVQYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInBhcGVyIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJoZWFkZXIiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZsZXgiLCJjb250ZW50cyIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImZvcm0iLCJpbnB1dEJhc2UiLCJpY29uIiwiQ2hhdEJ0biIsIkljb25CdXR0b24iLCJDaGF0IiwidmlzdWFsIiwiaGFuZGxlQ2xpY2siLCJjbGFzc2VzIiwiaWNvbkJ1dHRvbiIsIkNoYXRDb250YWluZXIiLCJzZXRWaXN1YWwiLCJGb290ZXJDb250YWluZXIiLCJmb290ZXIiLCJJY29uQ29udGFpbmVyIiwiSW5mb1dyYXAiLCJGb290ZXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRVUkwiLCJpY29uTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImdvb2dsZSIsImdvb2dsZUljb24iLCJkb25nYSIsImRvbmdhSWNvbiIsImhhbmkiLCJoYW5pSWNvbiIsInNicyIsInNic0ljb24iLCJzZWd5ZSIsInNlZ3llSWNvbiIsIkljb25Cb3giLCJwcm9wcyIsInNpemUiLCJtYXJnaW4iLCJuYW1lIiwiSWNvbkNvbXBvbmVudCIsImhvdmVyQWN0aW9uIiwicmVzdCIsIk1vZGFsQ29udGFpbmVyIiwib24iLCJNb2RhbEJveCIsIkV4aXRXcmFwIiwiTW9kYWwiLCJjaGlsZHJlbiIsIlRvZ2dsZUJ0biIsIlRvZ2dsZUJ1dHRvbiIsIlZpZXdCdXR0b24iLCJ2aWV3Iiwic2V0VmlldyIsImhhbmRsZVZpZXciLCJldmVudCIsIm5ld1ZpZXciLCJwYXRoIiwid2l0aFJvdXRlciIsInJvb3QiLCJtYXhXaWR0aCIsImp1c3RpZnlDb250ZW50IiwibWVkaWEiLCJsaXN0IiwiaW5saW5lIiwiaW1nIiwibWFyZ2luUmlnaHQiLCJsaXN0SXRlbSIsIkxpc3RWaWV3IiwiZGF0YSIsIm1hcCIsIm5ld3MiLCJpZHgiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJDYXJkVmlldyIsImlkIiwiQ29udGVudHNDb250YWluZXIiLCJjc3MiLCJWaWV3VHlwZVBhZ2UiLCJsb2NhdGlvbiIsInF1ZXJ5IiwicXMiLCJwYXJzZSIsInNlYXJjaCIsImlnbm9yZVF1ZXJ5UHJlZml4IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhdGhuYW1lIiwiQXJpY2xlQ29udGFpbmVyIiwiUGFwZXIiLCJEZXRhaWwiLCJjb21wYW55IiwiQ29tbWVudHNXcmFwIiwiU3R5bGVkQnV0dG9uIiwiQnV0dG9uIiwiU3R5bGVkVGV4dEZpZWxkIiwiVGV4dEZpZWxkIiwiSW5wdXREYXRhcyIsIkNoYXJhY3RlcnMiLCJjb2xvciIsIkNvbW1lbnRzIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJzZW5kYWJsZSIsInNldFNlbmRhYmxlIiwidXNlRWZmZWN0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjYXRlZ29yeSIsIm9yaWdpbmFsTGluayIsImRhdGUiLCJ0b1N0cmluZyIsIkFydGljbGVDb250YWluZXIiLCJmaW5kIiwiaXRlbSIsInBhcnNlSW50Iiwib25TdWJtaXRDb21tZW50cyIsIkRldGFpbFBhZ2VDb250YWluZXIiLCJzZWN0aW9uIiwicGFyYW1zIiwiQ29udGFpbmVyIiwibmF2IiwiSW5uZXIiLCJSaWdodEl0ZW0iLCJ1bCIsIkxvZ28iLCJHTkIiLCJMb2dvSW1hZ2UiLCJVc2VyQ29udGFpbmVyIiwiVXNlcklubmVyIiwiTWVudSIsIkJ0bldyYXAiLCJMb2dpbiIsImxvZ2luIiwic2V0TG9naW4iLCJzZXRPbiIsIlNpZ25JbkNvbnRhaW5lciIsIlRpdGxlQ29udGFpbmVyIiwiU2lnbkluIiwiZ29vZ2xlTG9naW5JbWFnZSIsImtha2FvTG9naW5JbWFnZSIsIkdOQlBhZ2UiLCJTdHlsZWRDYXJkIiwiQ2FyZCIsInRoZW1lIiwibWluV2lkdGgiLCJwYWRkaW5nVG9wIiwiYXZhdGFyUmVkIiwiYmFja2dyb3VuZENvbG9yIiwicmVkIiwiTmV3c0NhcmQiLCJzdWJTdHJpbmciLCJkZXNjIiwiY291bnQiLCJpc1N0cmluZyIsInN1YnN0cmluZyIsImF2YXRhciIsInNsaWNlIiwiQ2F0ZWdvcnkiLCJzZXRWYWx1ZSIsImNhdGVnb3J5TGlzdCIsIm5ld1ZhbHVlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29udGFpbmVyIiwiZmxleFdyYXAiLCJ0ZXh0RmllbGQiLCJzaHJpbmsiLCJpbnB1dCIsIm1hcmdpbkxlZnQiLCJTZWFyY2giLCJTbGlkZXJDb250YWluZXIiLCJkZXZpY2UiLCJDYXJkQ29udGFpbmVyIiwiYWN0aXZlIiwiQXJyb3dDb250YWluZXIiLCJBcnJvd0hvdmVyQWN0aW9uIiwiUHJldkFycm93Iiwic3BhbiIsInZpc2libGUiLCJOZXh0QXJyb3ciLCJTbGlkZXIiLCJjYXJkV2lkdGgiLCJtYXgiLCJ1c2VDYWxsYmFjayIsInNldEFjdGl2ZSIsImNhcmRDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJvbkNsaWNrUHJldiIsIm9uQ2xpY2tOZXh0IiwiaW5kZXgiLCJDYXRlZ29yeUNvbnRhaW5lciIsIkRhdGVDb250YWluZXIiLCJTZWFyY2hDb250YWluZXIiLCJ0ZXN0TmV3cyIsIkZpbHRlcldyYXAiLCJDb250ZW50c1dyYXAiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb3JwcyIsIkNvcnBDYXRlZ29yeSIsImNvcnAiLCJOZXdzTGlzdCIsIkNvcnBDYXRlZ29yeUNvbnRhaW5lciIsIk5ld3NDb250YWluZXIiLCJib3JkZXJDb2xvciIsImZvcm1Db250cm9sIiwiTWVudUNvbnRhaW5lciIsIk1lbnVCdG4iLCJidXR0b24iLCJVc2VyIiwidGFiIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVyTGlzdCIsIm1ha2VTZWxlY3QiLCJzZWxlY3RMaXN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7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SixHQUFkO0FBQW1CLFdBQUssRUFBRThDLElBQUksS0FBS21HLEdBQVQsR0FBZSxDQUFmLEdBQW1CO0FBQTdDLG9CQUNFLG9CQUFDLHFEQUFEO0FBQU0sUUFBRSxrQkFBV25HLElBQVg7QUFBUixPQUE0QkEsSUFBNUIsQ0FERixDQURGO0FBS0QsR0FUQSxDQURILENBREYsZUFhRSw4Q0FDRSxvQkFBQyxVQUFELHFCQUNFLG9CQUFDLHFFQUFELE9BREYsZUFFRSxpQ0FDR3VHLFVBQVUsQ0FBQyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQUQsRUFBZUgsS0FBZixDQURiLEVBRUdHLFVBQVUsQ0FBQ0QsU0FBRCxFQUFZRixLQUFaLENBRmIsQ0FGRixDQURGLGVBUUUsb0JBQUMsc0VBQUQ7QUFBYyxRQUFJLEVBQUVySjtBQUFwQixJQVJGLENBYkYsQ0FERjtBQTBCRCxDOzs7Ozs7Ozs7Ozs7O0FDOUpEO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBUytELGFBQVQsT0FBZ0M7QUFBQSxNQUFQcUYsR0FBTyxRQUFQQSxHQUFPO0FBQzdDLHNCQUFPLG9CQUFDLHVEQUFEO0FBQU0sT0FBRyxFQUFFQTtBQUFYLElBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTL08sUUFBVCxPQUE2QjtBQUFBLE1BQVQ4QyxLQUFTLFFBQVRBLEtBQVM7QUFDMUMsc0JBQ0Usa0RBQ0Usb0JBQUMsZ0VBQUQ7QUFBZSxPQUFHLEVBQUVBLEtBQUssQ0FBQ21HLE1BQU4sQ0FBYThGO0FBQWpDLElBREYsQ0FERjtBQUtELEMiLCJmaWxlIjoiYXBwLmY0NzJiYzRiMDUxZDM5ZmQ3ZjAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQ2hhdFBhZ2UgZnJvbSBcIi4vY2hhdC9wYWdlL0NoYXRQYWdlXCI7XHJcbmltcG9ydCBOZXdzUGFnZSBmcm9tIFwiLi9uZXdzL3BhZ2UvTmV3c1BhZ2VcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWUvcGFnZS9Ib21lUGFnZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHJlc2V0IGZyb20gXCJzdHlsZWQtcmVzZXRcIjtcclxuaW1wb3J0IEdOQlBhZ2UgZnJvbSBcIi4vZ25iL3BhZ2UvR05CUGFnZVwiO1xyXG5pbXBvcnQgRGV0YWlsUGFnZSBmcm9tIFwiLi9kZXRhaWwvcGFnZS9EZXRhaWxQYWdlXCI7XHJcbmltcG9ydCBVc2VyUGFnZSBmcm9tIFwiLi91c2VyL3BhZ2UvVXNlclBhZ2VcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbW1vbi9jb21wb25lbnQvTW9kYWxcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21tb24vY29tcG9uZW50L0Zvb3RlclwiO1xyXG5cclxuLy8gbG9naW4gdGVzdFxyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL2duYi9jb21wb25lbnQvU2lnbmluXCI7XHJcblxyXG5jb25zdCBjdXN0b21IaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAke3Jlc2V0fTtcclxuICAqIHtcclxuICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICB9XHJcblxyXG5gO1xyXG5cclxuY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcbi8vIHJvdXRlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgLy8gdGVzdFxyXG4gIGNvbnN0IFttb2RhbE9uLCBzZXRNb2RhbE9uXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IG9uQ2xpY2tDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsT24oIW1vZGFsT24pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBDb250YWluZXI+XHJcbiAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtjdXN0b21IaXN0b3J5fT5cclxuICAgICAgICAgIDxHTkJQYWdlIC8+XHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2VyLzp0YWJcIiBjb21wb25lbnQ9e1VzZXJQYWdlfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kZXRhaWxcIiBjb21wb25lbnQ9e0RldGFpbFBhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NoYXRcIiBjb21wb25lbnQ9e0NoYXRQYWdlfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdzLzppZFwiIGNvbXBvbmVudD17RGV0YWlsUGFnZX0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3c1wiIGNvbXBvbmVudD17TmV3c1BhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICAgIDxDaGF0UGFnZSAvPlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG4gICAgICA8L0FwcENvbnRhaW5lcj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8TW9kYWwgb249e21vZGFsT259IG9uQ2xpY2tDbG9zZT17b25DbGlja0Nsb3NlfT5cclxuICAgICAgICB7Lyog66qo64us66GcIOudhOybjOyniCDssL0g7Jes6riw7JeQIOyekeyEsSAqL31cclxuICAgICAgICA8U2lnbkluIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgSW5wdXRCYXNlLCBJY29uQnV0dG9uLCBab29tIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIjtcclxuaW1wb3J0IEF0dGFjaEZpbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZVwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IENoYXRCdWJibGVPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGVPdXRsaW5lXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBwYXBlcjoge1xyXG4gICAgekluZGV4OiA5OTk4LFxyXG4gICAgd2lkdGg6IDM2MCxcclxuICAgIGhlaWdodDogNTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIGJvdHRvbTogMzAsXHJcbiAgICByaWdodDogMzAsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogNjAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIFwiJiBzcGFuXCI6IHtcclxuICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50czoge1xyXG4gICAgZmxleDogMSxcclxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICBoZWlnaHQ6IDU3LFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBpbnB1dEJhc2U6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIGhlaWdodDogXCI4MCVcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IENoYXRCdG4gPSBzdHlsZWQoSWNvbkJ1dHRvbilgXHJcbiAgJi5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XHJcbiAgICAmLk11aUJ1dHRvbkJhc2Utcm9vdDpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCh7IHZpc3VhbCwgaGFuZGxlQ2xpY2sgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gdmlzdWFsID8gKFxyXG4gICAgPFpvb20gaW49e3Zpc3VhbH0+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxzcGFuPuywuOyXrOyduOybkDwvc3Bhbj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfT48L2Rpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEF0dGFjaEZpbGVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJhc2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi66mU7IS47KeA66W8IOyeheugpe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L1pvb20+XHJcbiAgKSA6IChcclxuICAgIDxDaGF0QnRuIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgIDxDaGF0QnViYmxlT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICA8L0NoYXRCdG4+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL2NvbXBvbmVudC9DaGF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Q29udGFpbmVyKCkge1xyXG4gIGNvbnN0IFt2aXN1YWwsIHNldFZpc3VhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXN1YWwoIXZpc3VhbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxDaGF0IHZpc3VhbD17dmlzdWFsfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+O1xyXG59XHJcbiIsImltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ2hhdENvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxDaGF0Q29udGFpbmVyIC8+O1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xyXG5cclxuLy8gZm9vdGVy7Luo7YWM7J2064SIIDEwMHZ3IOuhnCB3aWR0aOyEpOygle2VmOuptCDsiqTtgazroaTrsJzsg51cclxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3AgOiAyMDBweDtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuYDtcclxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IEluZm9XcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJiA+IHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9vdGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOuplOydvCDslYTsnbTsvZggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOy5tOy5tOyYpCDslYTsnbTsvZggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyAgdmlld0JveD1cIjAgMCAyMDggMTkxLjk0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTA0LDBDNDYuNTYsMCwwLDM2LjcxLDAsODJjMCwyOS4yOCwxOS40Nyw1NSw0OC43NSw2OS40OC0xLjU5LDUuNDktMTAuMjQsMzUuMzQtMTAuNTgsMzcuNjksMCwwLS4yMSwxLjc2LjkzLDIuNDNhMy4xNCwzLjE0LDAsMCwwLDIuNDguMTVjMy4yOC0uNDYsMzgtMjQuODEsNDQtMjlBMTMxLjU2LDEzMS41NiwwLDAsMCwxMDQsMTY0YzU3LjQ0LDAsMTA0LTM2LjcxLDEwNC04MlMxNjEuNDQsMCwxMDQsMFpNNTIuNTMsNjkuMjdjLS4xMywxMS42LjEsMjMuOC0uMDksMzUuMjItLjA2LDMuNjUtMi4xNiw0Ljc0LTUsNS43OGExLjg4LDEuODgsMCwwLDEtMSwuMDdjLTMuMjUtLjY0LTUuODQtMS44LTUuOTItNS44NC0uMjMtMTEuNDEuMDctMjMuNjMtLjA5LTM1LjIzLTIuNzUtLjExLTYuNjcuMTEtOS4yMiwwLTMuNTQtLjIzLTYtMi40OC01Ljg1LTUuODNzMS45NC01Ljc2LDUuOTEtNS44MmM5LjM4LS4xNCwyMS0uMTQsMzAuMzgsMCw0LC4wNiw1Ljc4LDIuNDgsNS45LDUuODJzLTIuMyw1LjYtNS44Myw1LjgzQzU5LjIsNjkuMzgsNTUuMjksNjkuMTYsNTIuNTMsNjkuMjdabTUwLjQsNDAuNDVhOS4yNCw5LjI0LDAsMCwxLTMuODIuODNjLTIuNSwwLTQuNDEtMS01LTIuNjVsLTMtNy43OEg3Mi44NWwtMyw3Ljc4Yy0uNTgsMS42My0yLjQ5LDIuNjUtNSwyLjY1YTkuMTYsOS4xNiwwLDAsMS0zLjgxLS44M2MtMS42Ni0uNzYtMy4yNS0yLjg2LTEuNDMtOC41Mkw3NCw2My40MmE5LDksMCwwLDEsOC01LjkyLDkuMDcsOS4wNywwLDAsMSw4LDUuOTNsMTQuMzQsMzcuNzZDMTA2LjE3LDEwNi44NiwxMDQuNTgsMTA5LDEwMi45MywxMDkuNzJabTMwLjMyLDBIMTE0YTUuNjQsNS42NCwwLDAsMS01Ljc1LTUuNVY2My41YTYuMTMsNi4xMywwLDAsMSwxMi4yNSwwVjk4Ljc1aDEyLjc1YTUuNTEsNS41MSwwLDEsMSwwLDExWm00Ny00LjUyQTYsNiwwLDAsMSwxNjkuNDksMTA4TDE1NS40Miw4OS4zN2wtMi4wOCwyLjA4djEzLjA5YTYsNiwwLDAsMS0xMiwwdi00MWE2LDYsMCwwLDEsMTIsMFY3Ni40bDE2Ljc0LTE2Ljc0YTQuNjQsNC42NCwwLDAsMSwzLjMzLTEuMzQsNi4wOCw2LjA4LDAsMCwxLDUuOSw1LjU4QTQuNyw0LjcsMCwwLDEsMTc4LDY3LjU1TDE2NC4zLDgxLjIybDE0Ljc3LDE5LjU3QTYsNiwwLDAsMSwxODAuMjIsMTA1LjIzWlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBkPVwiTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SW5mb1dyYXA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIEp1bkh5dWssIEd5dSBhbGwgcmlnaHQgcmVzZXJ2ZWQuPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0luZm9XcmFwPlxyXG4gICAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGRvbmdhSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2RvbmdhLnBuZ1wiO1xyXG5pbXBvcnQgZ29vZ2xlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dvb2dsZS5wbmdcIjtcclxuaW1wb3J0IGhhbmlJY29uIGZyb20gXCIuLi9pbWFnZXMvaGFuaS5wbmdcIjtcclxuaW1wb3J0IHNic0ljb24gZnJvbSBcIi4uL2ltYWdlcy9zYnMucG5nXCI7XHJcbmltcG9ydCBzZWd5ZUljb24gZnJvbSBcIi4uL2ltYWdlcy9zZWd5ZS5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFVSTChpY29uTmFtZSkge1xyXG4gIGNvbnNvbGUubG9nKGljb25OYW1lKTtcclxuICBjb25zdCBtYXRjaCA9IHtcclxuICAgIGdvb2dsZTogZ29vZ2xlSWNvbixcclxuICAgIGRvbmdhOiBkb25nYUljb24sXHJcbiAgICBoYW5pOiBoYW5pSWNvbixcclxuICAgIHNiczogc2JzSWNvbixcclxuICAgIHNlZ3llOiBzZWd5ZUljb24sXHJcbiAgfTtcclxuICByZXR1cm4gbWF0Y2hbaWNvbk5hbWVdO1xyXG59XHJcblxyXG5jb25zdCBJY29uQm94ID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5zaXplfTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5zaXplfTtcclxuICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5tYXJnaW59O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gZ2V0VVJMKHByb3BzLm5hbWUpfSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICY6aG92ZXIge1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25Db21wb25lbnQocHJvcHMpIHtcclxuICAvLyBob3ZlciBhY3Rpb24g7J2AIOuCmOykkeyXkCDrhKPslrTshJwg7JWg64uI66mU7J207IWYIOq1rO2YhFxyXG4gIGNvbnN0IHsgbmFtZSwgaG92ZXJBY3Rpb24sIHNpemUgPSBcIjEwMHB4XCIsIG1hcmdpbiA9IFwiMTBweFwiLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIDxJY29uQm94IG5hbWU9e25hbWV9IHNpemU9e3NpemV9IG1hcmdpbj17bWFyZ2lufSB7Li4ucmVzdH0gLz47XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyA5OTk5IDogLTEpfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLm9uID09PSBcIm9uXCIgPyBcInJnYmEoMCwgMCwgMCwgMC40NSlcIiA6IFwicmdiYSgwLCAwLCAwLCAwKVwifTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1vdXQ7XHJcbmA7XHJcbmNvbnN0IE1vZGFsQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBcImZsZXhcIjtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyAxIDogMCl9O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDEzcHggLTVweCByZ2JhKDEzMywgMTMzLCAxMzMsIDEpO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6ICR7KHByb3BzKSA9PiAocHJvcHMub24gPT09IFwib25cIiA/IFwiMHB4XCIgOiBcIjMwcHhcIil9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbmA7XHJcbmNvbnN0IEV4aXRXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMS41cmVtKTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDEzNCwgMTQyLCAxNTApO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4yNXM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IHsgb24sIG9uQ2xpY2tDbG9zZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGFpbmVyIG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxyXG4gICAgICA8TW9kYWxCb3ggb249e29uID8gXCJvblwiIDogXCJvZmZcIn0+XHJcbiAgICAgICAgPEV4aXRXcmFwIG9uQ2xpY2s9e29uQ2xpY2tDbG9zZX0+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9XCIxXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9FeGl0V3JhcD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvTW9kYWxCb3g+XHJcbiAgICA8L01vZGFsQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9nZ2xlQnV0dG9uLCBUb2dnbGVCdXR0b25Hcm91cCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBWaWV3TGlzdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiO1xyXG5pbXBvcnQgVmlld01vZHVsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TW9kdWxlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ0biA9IHN0eWxlZChUb2dnbGVCdXR0b24pYFxyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAmIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjM2Y2M2JmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFZpZXdCdXR0b24oeyBtYXRjaCB9KSB7XHJcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoXCJjYXJkXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWV3ID0gKGV2ZW50LCBuZXdWaWV3KSA9PiB7XHJcbiAgICBzZXRWaWV3KG5ld1ZpZXcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXAgdmFsdWU9e3ZpZXd9IGV4Y2x1c2l2ZSBvbkNoYW5nZT17aGFuZGxlVmlld30+XHJcbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPExpbmsgdG89e2Ake21hdGNoLnBhdGh9P3ZpZXc9Y2FyZGB9PlxyXG4gICAgICAgICAgPFZpZXdNb2R1bGVJY29uIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RvZ2dsZUJ0bj5cclxuXHJcbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJsaXN0XCI+XHJcbiAgICAgICAgPExpbmsgdG89e2Ake21hdGNoLnBhdGh9P3ZpZXc9bGlzdGB9PlxyXG4gICAgICAgICAgPFZpZXdMaXN0SWNvbiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Ub2dnbGVCdG4+XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld0J1dHRvbik7XHJcbiIsImltcG9ydCBxcyBmcm9tIFwicXNcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9uQXJlYSxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkTWVkaWEsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IDM0NSxcclxuXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNDAsXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBpbmxpbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgICBoZWlnaHQ6IDE2MCxcclxuICAgIG1hcmdpblJpZ2h0OiAyMCxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBwYWRkaW5nOiBcIjhweCAwXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIixcclxuICAgIFwiJjpsYXN0LWNoaWxkXCI6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBMaXN0Vmlldyh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAge2RhdGEubWFwKChuZXdzLCBpZHgpID0+IChcclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICBwcmltYXJ5PXtuZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge25ld3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICkpfVxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhcmRWaWV3KHsgZGF0YSwgcGF0aCB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gZGF0YS5tYXAoKG5ld3MsIGlkeCkgPT4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGtleT17aWR4fT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIGltYWdlPXtuZXdzLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAge25ld3MudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cGF0aCA9PT0gXCIvbmV3c1wiICYmIChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgIHtuZXdzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvbmV3cy8ke25ld3MuaWR9YH0+IOyekOyEuO2eiDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7cGF0aCA9PT0gXCIvbmV3c1wiICYmIChcclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIOyKpO2BrOueqVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApKTtcclxufVxyXG5cclxuY29uc3QgQ29udGVudHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52aWV3ID09PSBcImNhcmRcIiAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICBnYXA6IDIwcHg7XHJcbiAgICBgfVxyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMudmlldyA9PT0gXCJsaXN0XCIgJiZcclxuICAgIGNzc2BcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBgfTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIFZpZXdUeXBlUGFnZSh7IGxvY2F0aW9uLCBkYXRhIH0pIHtcclxuICBsZXQgcXVlcnkgPSBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gsIHtcclxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIU9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcclxuICAgIHF1ZXJ5LnZpZXcgPSBcImNhcmRcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudHNDb250YWluZXIgdmlldz17cXVlcnkudmlld30+XHJcbiAgICAgIHtxdWVyeS52aWV3ID09PSBcImNhcmRcIiA/IChcclxuICAgICAgICA8Q2FyZFZpZXcgZGF0YT17ZGF0YX0gcGF0aD17bG9jYXRpb24ucGF0aG5hbWV9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpc3RWaWV3IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRlbnRzQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld1R5cGVQYWdlKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRvbmdhLjUzYWRhNzBmODdhYTA3Mzk5YzJiMWYxMGE4NWUxMTA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGUuNzBmNDllZmZhZWQ1MmE3NjkyZDAxNDJiOGFkN2ZlYzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmkuMzJkMzYyMTIwMmJiNTM5MGZjOTk0MjIwN2NkMTM2YzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNicy4yMTA0NjQ0YWFkNmQ3Njk4Mzk5MTZmMWVhZWQ0ODYxMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2VneWUuNDllOGY3NjI3NTY5MjUyMzQyNGE4YjBiYWZhMjc2YWYucG5nXCI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEljb25Cb3ggZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvSWNvblwiO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcblxyXG5jb25zdCBBcmljbGVDb250YWluZXIgPSBzdHlsZWQoUGFwZXIpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsKHsgbmV3cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcmljbGVDb250YWluZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgPEljb25Cb3hcclxuICAgICAgICBzaXplPVwiMTAwcHhcIlxyXG4gICAgICAgIG1hcmdpbj1cIjEwcHhcIlxyXG4gICAgICAgIG5hbWU9e25ld3MuY29tcGFueX1cclxuICAgICAgICBib3JkZXI9XCIxcHggc29saWRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW1nIHNyYz17bmV3cy5pbWFnZX0gLz5cclxuICAgICAgPHA+e25ld3MuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8Q29tbWVudHMgLz5cclxuICAgIDwvQXJpY2xlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5cclxuXHJcbmNvbnN0IENvbW1lbnRzV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuYDtcclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRUZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKWBcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuYDtcclxuY29uc3QgSW5wdXREYXRhcyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG5gO1xyXG5jb25zdCBDaGFyYWN0ZXJzID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPT09IFwiZ3JheVwiPyBcIiM4NDg0ODRcIjpcInJlZFwifTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VuZGFibGUsIHNldFNlbmRhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAzMDApIHNldFNlbmRhYmxlKGZhbHNlKTtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDw9IDMwMCkgc2V0U2VuZGFibGUodHJ1ZSk7XHJcbiAgICB9LFt2YWx1ZV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tbWVudHNXcmFwPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByb3dzTWF4PXs1fVxyXG4gICAgICAgICAgICBsYWJlbD17YOuMk+q4gCDri6zquLBgfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuwlOultOqzoCDqs6DsmrQg66eQ7J2EIOyCrOyaqe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dERhdGFzPlxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29sb3I9e3NlbmRhYmxlPyBcImdyYXlcIjpcInJlZFwifT4gXHJcbiAgICAgICAgICAgICAgICAgICAge2lucHV0VmFsdWUubGVuZ3RofSAvIDMwMFxyXG4gICAgICAgICAgICAgICAgPC9DaGFyYWN0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOyehSDroKVcclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0lucHV0RGF0YXM+XHJcbiAgICAgICAgPC9Db21tZW50c1dyYXA+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vY29tcG9uZW50L0FydGljbGVcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7zrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7xcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcInNlZ3llXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQ7IS87YSwIOychOyepe2VnCDqs7XqsqnsnpDrk6Qg7KO87J2Y67O0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJnb29nbGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcImRvbmdhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJoYW5pXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCJzYnNcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZUNvbnRhaW5lcih7IGlkIH0pIHtcclxuICBjb25zdCBuZXdzID0gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdENvbW1lbnRzID0gKHNlbmRhYmxlKSA9PiB7XHJcbiAgICBcclxuICB9XHJcbiAgcmV0dXJuIDxBcnRpY2xlIG5ld3M9e25ld3N9IC8+O1xyXG59XHJcbiIsImltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQXJ0aWNsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRGV0YWlsUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxQYWdlKHsgbWF0Y2ggfSkge1xyXG4gIGNvbnNvbGUubG9nKFwiRGV0YWlsUGFnZVwiKTtcclxuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEZXRhaWxQYWdlQ29udGFpbmVyPlxyXG4gICAgICA8QXJ0aWNsZUNvbnRhaW5lciBpZD17aWR9IC8+XHJcbiAgICA8L0RldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSAnLi4vLi4vaW1hZ2VzL2xvZ28ucG5nJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBib3gtc2hhZG93OiByZ2IoMjM4LCAyMzgsIDIzOCkgMHB4IDFweCAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5ODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTMwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuYDtcclxuY29uc3QgUmlnaHRJdGVtID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgJiBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qICYgKyAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfSAqL1xyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHJnYig0MCwgNDIsIDUzKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IExvZ28gPSBzdHlsZWQoQnV0dG9uKWBcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPElubmVyPlxyXG4gICAgICAgIDxSaWdodEl0ZW0+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxMb2dvIGltYWdlPXtMb2dvSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL25ld3NcIj7slrjroaDsgqzrs4Qg67O06riwPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbmV3c1wiPuyGjeuztDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9SaWdodEl0ZW0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMb2dpbiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lubmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBBdmF0YXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBEaXZpZGVyLFxyXG4gIEljb25CdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L01vZGFsXCI7XHJcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Bob3RvQ2FtZXJhXCI7XHJcbmltcG9ydCBVc2VyUGFnZSBmcm9tIFwiLi4vLi4vdXNlci9wYWdlL1VzZXJQYWdlXCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmIGg2IHtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4NHB4O1xyXG4gIHdpZHRoOiA4NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgJiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICYgLk11aUJ1dHRvbkJhc2Utcm9vdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSg2NSwgNjksIDczLCAwLjMpLFxyXG4gICAgICAwIDFweCAzcHggMXB4IHJnYmEoNjUsIDY5LCA3MywgMC4xNSk7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTWVudSA9IHN0eWxlZChCdXR0b24pYFxyXG4gICYuTXVpQnV0dG9uQmFzZS1yb290IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnRuV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxN3B4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgW2xvZ2luLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbb24sIHNldE9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2dpbighbG9naW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9uKCFvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2dpbiA/IChcclxuICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBjb21wb25lbnQ9XCJzcGFuXCIgb25DbGljaz17b25DbGlja0Nsb3NlfT5cclxuICAgICAgICAgIDxBdmF0YXI+PC9BdmF0YXI+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAg66Gc6re47J24IC8g6rCA7J6FXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7b24gJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbj17b259IG9uQ2xpY2tDbG9zZT17b25DbGlja0Nsb3NlfT5cclxuICAgICAgICAgIDxVc2VyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VXNlcklubmVyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXI+PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1VzZXJJbm5lcj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPmVtYWlsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGFpbmVyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxNZW51IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uQ2xpY2tDbG9zZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXIvc2NyYXBcIj7siqTtgazrnqk8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPE1lbnUgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17b25DbGlja0Nsb3NlfT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvdXNlci9jb21tZW50XCI+64K0IOuMk+q4gDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8QnRuV3JhcD5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAg66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9CdG5XcmFwPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgZ29vZ2xlTG9naW5JbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvZ29vZ2xlX2xvZ2luX2J1dHRvbi5wbmcnO1xyXG5pbXBvcnQga2FrYW9Mb2dpbkltYWdlIGZyb20gJy4uLy4uL2ltYWdlcy9rYWthb19sb2dpbl9idXR0b24ucG5nJztcclxuXHJcbmNvbnN0IFNpZ25JbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAmIC5NdWlCdXR0b24tcm9vdCB7XHJcbiAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlfSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYDtcclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICM2NzY3Njc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNpZ25JbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgW+yekeydgOuhnOqzoF0g64uk7J2MIOqzhOygleycvOuhnCDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFN0eWxlZEJ1dHRvbiBpbWFnZT17Z29vZ2xlTG9naW5JbWFnZX0vPlxyXG4gICAgICAgICAgICA8U3R5bGVkQnV0dG9uIGltYWdlPXtrYWthb0xvZ2luSW1hZ2V9Lz5cclxuICAgICAgICA8L1NpZ25JbkNvbnRhaW5lcj5cclxuICAgIClcclxufSIsImltcG9ydCBHTkIgZnJvbSBcIi4uL2NvbXBvbmVudC9HTkJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQlBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxHTkIgLz47XHJcbn1cclxuIiwiaW1wb3J0IEdOQkNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0dOQkNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR05CUGFnZSgpIHtcclxuICByZXR1cm4gPEdOQkNvbnRhaW5lciAvPjtcclxufVxyXG4iLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCxcclxuICAgIEF2YXRhciwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSwgQ2FyZEFjdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYXZvcml0ZSBhcyBGYXZvcml0ZUljb24sIFNoYXJlIGFzIFNoYXJlSWNvbiwgTW9yZVZlcnQgYXMgTW9yZVZlcnRJY29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG5cclxuY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZChDYXJkKWBcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLW91dDtcclxuICAmOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgwLDAsMCwuMSksIDBweCAycHggM3B4IHJnYmEoMCwwLDAsLjEyKSwgMHB4IDFweCAzcHggcmdiYSgwLDAsMCwuMTQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB3aWR0aDogMzMwLFxyXG4gICAgICBtaW5XaWR0aDogMzMwLFxyXG4gICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgbWFyZ2luOiBcIjAgMTVweFwiLFxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIiAvLyAxNjo5XHJcbiAgICB9LFxyXG4gICAgYXZhdGFyUmVkOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcmVkWzUwMF1cclxuICAgIH0sXHJcbiAgfSkpO1xyXG4vLyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSDrpbwg7J6F66Cl67Cb7JWEIENhcmTrpbwg66as7YS07ZWY64qUIOy7tO2PrOuEjO2KuCDtlajsiJhcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NhcmQoIHsgaW1hZ2UsIGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIG9yaWdpbmFsTGluaywgZGF0ZSwgY29tcGFueX0gKSB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAvLyBkZXNjaXByaW9uIDEwMOq4gOyekCDsoJztlZwgKyDrp5DspITsnoTtkZxcclxuICAgIGNvbnN0IHN1YlN0cmluZyA9IChkZXNjLGNvdW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgZGVzYyA9PT0gXCJzdHJpbmdcIjtcclxuICAgICAgICByZXR1cm4gKGlzU3RyaW5nICYmIGRlc2MubGVuZ3RoID49IGNvdW50PyBkZXNjLnN1YnN0cmluZygwLGNvdW50KSArIFwiLi4uXCIgOiBkZXNjKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJuZXdzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICB7Y29tcGFueT8gY29tcGFueS5zbGljZSgwLDQpIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGl0bGU9e3N1YlN0cmluZyh0aXRsZSwgMjApfVxyXG4gICAgICAgICAgICBzdWJoZWFkZXI9e2RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAge3N1YlN0cmluZyhkZXNjcmlwdGlvbiwgODApfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiPlxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hhcmVcIj5cclxuICAgICAgICAgICAgICA8U2hhcmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9TdHlsZWRDYXJkPlxyXG4gICAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFBhcGVyLCBUYWJzLCBUYWIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtcIuyghOyytFwiLCBcIuygley5mFwiLCBcIuqyveygnFwiLCBcIuyCrO2ajFwiXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgc3F1YXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgIDxUYWJzXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y2F0ZWdvcnlMaXN0Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8VGFiIGtleT17aWR4fSBsYWJlbD17aXRlbX0gc3R5bGU9e3tmb250U2l6ZTpcIjEuMXJlbVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIn19Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBub1ZhbGlkYXRlPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAxNy0wNS0yNFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUGFwZXIsIElucHV0QmFzZSwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgcGFkZGluZzogXCIycHggNHB4XCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDgsXHJcbiAgICBmbGV4OiAxLFxyXG4gIH0sXHJcbiAgaWNvbkJ1dHRvbjoge1xyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFwZXIgY29tcG9uZW50PVwiZm9ybVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBlbGV2YXRpb249ezN9PlxyXG4gICAgICAgIDxJbnB1dEJhc2UgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fSBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIC8+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5ld3NDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHtcclxuICBBcnJvd0JhY2tJb3NPdXRsaW5lZCxcclxuICBBcnJvd0ZvcndhcmRJb3NPdXRsaW5lZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBTbGlkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8qIHdpZHRoOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLmRldmljZSA9PT0gXCJ3ZWJcIiA/IFwiY2FsYyg5OTBweCArIDc1cHgpXCIgOiBcIlwifTsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5oZWlnaHR9O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgKiAtMzYwfXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG5gO1xyXG5jb25zdCBBcnJvd0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIHdpZHRoOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLmRldmljZSA9PT0gXCJ3ZWJcIiA/IFwiY2FsYyg5OTBweCArIDYwcHgpXCIgOiBcIlwifTsgKi9cclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBBcnJvd0hvdmVyQWN0aW9uID0gY3NzYFxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDg1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMC41NTtcclxuICAgIGJveC1zaGFkb3c6IDE2cHggMThweCAyOHB4IC0zcHggcmdiYSgxNDMsIDE0MywgMTQzLCAwLjc1KTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFByZXZBcnJvdyA9IHN0eWxlZC5zcGFuYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIGNvbG9yOiAjYzFjMWMxO1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyAwIDogMC43NSl9O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHotaW5kZXg6ICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyAtMTAgOiAxMCl9O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyBcIlwiIDogQXJyb3dIb3ZlckFjdGlvbil9O1xyXG5gO1xyXG5jb25zdCBOZXh0QXJyb3cgPSBzdHlsZWQoUHJldkFycm93KWBcclxuICAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gXCJcIiA6IEFycm93SG92ZXJBY3Rpb24pfTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgY2FyZFdpZHRoLCBuZXdzIH0gPSBwcm9wcztcclxuICBjb25zdCBtYXggPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBuZXdzLmxlbmd0aCAtIDIsIFtuZXdzXSk7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhcmRDb250YWluZXJSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1ByZXYgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoYWN0aXZlIC0gMSA+IC0xID8gYWN0aXZlIC0gMSA6IC0xKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKG1heCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSArIDEgPCBtYXggKyAxID8gYWN0aXZlICsgMSA6IG1heCArIDEpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxTbGlkZXJDb250YWluZXIgZGV2aWNlPXtcIndlYlwifSBoZWlnaHQ9XCI2NXZoXCI+XHJcbiAgICA8U2xpZGVyQ29udGFpbmVyIGRldmljZT17XCJ3ZWJcIn0gaGVpZ2h0PVwiMTEwJVwiPlxyXG4gICAgICA8QXJyb3dDb250YWluZXIgZGV2aWNlPXtcIndlYlwifT5cclxuICAgICAgICA8UHJldkFycm93IHZpc2libGU9e2FjdGl2ZSA8PSAtMSA/IFwibm9uZVwiIDogXCJcIn0gb25DbGljaz17b25DbGlja1ByZXZ9PlxyXG4gICAgICAgICAgPEFycm93QmFja0lvc091dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiA3NSB9fSAvPlxyXG4gICAgICAgIDwvUHJldkFycm93PlxyXG4gICAgICAgIDxOZXh0QXJyb3dcclxuICAgICAgICAgIHZpc2libGU9e2FjdGl2ZSA+PSBtYXgoKSA/IFwibm9uZVwiIDogXCJcIn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tOZXh0KG1heCgpKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDc1IH19IC8+XHJcbiAgICAgICAgPC9OZXh0QXJyb3c+XHJcbiAgICAgIDwvQXJyb3dDb250YWluZXI+XHJcbiAgICAgIDxDYXJkQ29udGFpbmVyIHJlZj17Y2FyZENvbnRhaW5lclJlZn0gYWN0aXZlPXthY3RpdmV9PlxyXG4gICAgICAgIHsvKiB0ZXN0TmV3c+uKlCDsnbQg7ZuEIHNhZ2EtPmFwaS0+c3RvcmUg66W8IO2Gte2VtCDsoITri6zrkJwgcmVzcG9uc2Xsl5Ag65Sw6528IOuzgOqyvSovfVxyXG4gICAgICAgIHtuZXdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8TmV3c0NhcmQga2V5PXtpbmRleH0gey4uLml0ZW19IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICA8L1NsaWRlckNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnQvQ2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5Q29udGFpbmVyKCkge1xyXG4gIHJldHVybiA8Q2F0ZWdvcnkgLz47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50L0RhdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxEYXRlIC8+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vY29tcG9uZW50L1NlYXJjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQ29udGFpbmVyKCkge1xyXG4gIHJldHVybiA8U2VhcmNoIC8+O1xyXG59XHJcbiIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50L1NsaWRlcic7XHJcblxyXG5jb25zdCBuZXdzID0gW1xyXG4gICAgeyBcclxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDIwLzA4LzMxL05JU0kyMDIwMDgzMV8wMDE2NjMwMjE4X3dlYi5qcGc/cm5kPTIwMjAwODMxMTUwOTEyXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXHJcbiAgICAgICAgdGl0bGU6YOaWh+uMgO2GteuguSBcIuuqqOyymOufvCDrj4XshJwg7KaQ6rKo67O06ri4XCLigKYn7L2U66Gc64KYIOyCrO2UvOyXlOyKpCcg65OxIOy2lOyynGAsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcclxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXHJcbiAgICAgICAgXCLsoJXsobDrjIDsmZUg6riI64Kc7KCE6raMIO2Yge2MjO2VmOupsCDqsr3soJwg6rCc7ZiB7ZWcIOydtOyVvOq4sCDqsIDsnqUg7KKL7JWEXCJgLCBcclxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxyXG4gICAgICAgIGNvbXBhbnk6XCLribTsi5zsiqRcIlxyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgICAgaW1hZ2U6XCJodHRwczovL2ltYWdlLm5ld3Npcy5jb20vMjAyMC8wOC8yNC9OSVNJMjAyMDA4MjRfMDAxNjYwNjczMl93ZWIuanBnP3JuZD0yMDIwMDkwMTEyMDM0M1wiLFxyXG4gICAgICAgIGNhdGVnb3J5Olwi7KCV7LmYXCIsIFxyXG4gICAgICAgIHRpdGxlOmDmlofrjIDthrXroLkgXCLrqqjsspjrn7wg64+F7IScIOymkOqyqOuztOq4uFwi4oCmJ+y9lOuhnOuCmCDsgqztlLzsl5TsiqQnIOuTsSDstpTsspxgLCBcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGAn7Jik64qY67aA7YSw7J2YIOyEuOqzhCcgJ+umrOuNlOudvOuptCDsoJXsobDsspjrn7wnICftmY3rspTrj4Qg7Y+J7KCEJyDrk7Eg7LaU7LKcXHJcbiAgICAgICAgXCLrj4XshJzqsIAg642U7JyEIOydtOq4sOuKlCDsoovsnYAg67Cp67KVIOyVhOuLkOq5jOKApuy2nO2MkOyLnOyepeyXkOuPhCDrj4Tsm4BcIlxyXG4gICAgICAgIFwi7KCV7KGw64yA7JmVIOq4iOuCnOyghOq2jCDtmIHtjIztlZjrqbAg6rK97KCcIOqwnO2Yge2VnCDsnbTslbzquLAg6rCA7J6lIOyii+yVhFwiYCwgXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOlwiaHR0cHM6Ly9uZXdzaXMuY29tL3ZpZXcvP2lkPU5JU1gyMDIwMDkwMV8wMDAxMTUwNDA2JmNJRD0xMDMwMSZwSUQ9MTAzMDBcIiwgXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLCBcclxuICAgICAgICBjb21wYW55Olwi64m07Iuc7IqkXCJcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMTgvMDEvMTUvTklTSTIwMTgwMTE1XzAwMDAwOTQ3Mzdfd2ViLmpwZz9ybmQ9MjAxODAxMTUxNjM5MDdcIixcclxuICAgICAgICBjYXRlZ29yeTpcIuygley5mFwiLCBcclxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxyXG4gICAgICAgIFwi64+F7ISc6rCAIOuNlOychCDsnbTquLDripQg7KKL7J2AIOuwqeuylSDslYTri5DquYzigKbstpztjJDsi5zsnqXsl5Drj4Qg64+E7JuAXCJcclxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxyXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSwgXHJcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDIwLzA5LzAxL05JU0kyMDIwMDkwMV8wMDAwNTkxOTE1X3dlYi5qcGc/cm5kPTIwMjAwOTAxMDcxMjQ3XCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXHJcbiAgICAgICAgdGl0bGU6YOaWh+uMgO2GteuguSBcIuuqqOyymOufvCDrj4XshJwg7KaQ6rKo67O06ri4XCLigKYn7L2U66Gc64KYIOyCrO2UvOyXlOyKpCcg65OxIOy2lOyynGAsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcclxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXHJcbiAgICAgICAgXCLsoJXsobDrjIDsmZUg6riI64Kc7KCE6raMIO2Yge2MjO2VmOupsCDqsr3soJwg6rCc7ZiB7ZWcIOydtOyVvOq4sCDqsIDsnqUg7KKL7JWEXCJgLCBcclxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxyXG4gICAgICAgIGNvbXBhbnk6XCLribTsi5zsiqRcIlxyXG4gICAgfSxcclxuXVxyXG4vLyDrjZTrr7jrjbDsnbTthLAg64m07IqkXHJcbmNvbnN0IHRlc3ROZXdzID0gWy4uLm5ld3MsIC4uLm5ld3MsIC4uLm5ld3Muc2xpY2UoMCwyKV07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXJDb250YWluZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlciBuZXdzPXt0ZXN0TmV3c30vPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IENhdGVnb3J5Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXJcIjtcclxuaW1wb3J0IERhdGVDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9EYXRlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTZWFyY2hDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9TZWFyY2hDb250YWluZXJcIjtcclxuaW1wb3J0IFNsaWRlckNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL1NsaWRlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBGaWx0ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuYDtcclxuY29uc3QgQ29udGVudHNXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8RmlsdGVyV3JhcD5cclxuICAgICAgICA8RGF0ZUNvbnRhaW5lciAvPlxyXG4gICAgICAgIDxTZWFyY2hDb250YWluZXIgLz5cclxuICAgICAgPC9GaWx0ZXJXcmFwPlxyXG4gICAgICA8Q29udGVudHNXcmFwPlxyXG4gICAgICAgIDxDYXRlZ29yeUNvbnRhaW5lciAvPlxyXG4gICAgICAgIDxTbGlkZXJDb250YWluZXIgLz5cclxuICAgICAgPC9Db250ZW50c1dyYXA+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVfbG9naW5fYnV0dG9uLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJrYWthb19sb2dpbl9idXR0b24uYWQ1YjIwMDNhZDM4MThiNzhmOTA5NDRhMTg3M2RiNGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28uYjg3ZjNhY2ZhM2E3M2Y4YWMyOWFkZmY4NWEyNjljOWQucG5nXCI7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuXHJcbi8vIHN0b3JlIENvbnRleHRBUEnroZwg6rCQ7Iu46riwXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJpbXBvcnQgSWNvbkJveCBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50L0ljb24nO1xyXG5cclxuY29uc3QgY29ycHMgPSBbXCJnb29nbGVcIixcImRvbmdhXCIsXCJoYW5pXCIsXCJzYnNcIixcInNlZ3llXCJdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JwQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2NvcnBzLm1hcCgoY29ycCxpbmRleCkgPT4gXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDxJY29uQm94IFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtjb3JwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWaWV3VHlwZUJ0biBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZUJ0blwiO1xyXG5pbXBvcnQgVmlld1R5cGVQYWdlIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgdGl0bGU6IFwi66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAuLi4g66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAg66eI7Iqk7YGsIO2SiOygiCDrjIDrnoBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi7KGw7ISg7J2867O0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQ7IS87YSwIOychOyepe2VnCDqs7XqsqnsnpDrk6Qg7KO87J2Y67O0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0xpc3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxWaWV3VHlwZUJ0biAvPlxyXG4gICAgICA8Vmlld1R5cGVQYWdlIGRhdGE9e2RhdGF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBDb3JwQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50L0NvcnBDYXRlZ29yeSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ycENhdGVnb3J5Q29udGFpbmVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxDb3JwQ2F0ZWdvcnkgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IE5ld3NMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvTmV3c0xpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxOZXdzTGlzdCAvPjtcclxufVxyXG4iLCJpbXBvcnQgQ29ycENhdGVnb3J5Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ29ycENhdGVnb3J5Q29udGFpbmVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBOZXdzQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvTmV3c0NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgey8qIDxDb3JwQ2F0ZWdvcnlDb250YWluZXIgLz4gKi99XHJcbiAgICAgIDxOZXdzQ29udGFpbmVyIC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFBhcGVyLCBGb3JtQ29udHJvbCwgU2VsZWN0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBWaWV3VHlwZVBhZ2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvVmlld1R5cGVQYWdlXCI7XHJcbmltcG9ydCBWaWV3VHlwZUJ0biBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZUJ0blwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLsobDshKDsnbzrs7RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQ7IS87YSwIOychOyepe2VnCDqs7XqsqnsnpDrk6Qg7KO87J2Y67O0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzZjYzYmZcIixcclxuICAgIGJvcmRlckNvbG9yOiBcIiMzZjYzYmZcIixcclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW46IDQsXHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBNZW51QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlcjogMDtcclxuXHJcbiAgJiBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMudmFsdWUgJiZcclxuICAgIGNzc2BcclxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMzZjYzYmY7XHJcbiAgICBgfVxyXG5gO1xyXG5cclxuY29uc3QgRmlsdGVyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyB0YWIgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHRhYiA9PT0gXCJzY3JhcFwiID8gMCA6IDEpO1xyXG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtcInNjcmFwXCIsIFwiY29tbWVudFwiXTtcclxuICBjb25zdCBvcmRlckxpc3QgPSBbXCJwdXNoXCIsIFwibGF0ZXN0XCIsIFwiY29tbWVudHNcIl07XHJcbiAgLy/ri7TsnYAg7IicLCDstZzsi6Ag7IicLCDrjJPquIAg66eO7J2AIOyInFxyXG5cclxuICBjb25zdCBtYWtlU2VsZWN0ID0gKHNlbGVjdExpc3QsIHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cclxuICAgICAgICA8U2VsZWN0IG5hdGl2ZSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAge3NlbGVjdExpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XHJcbiAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgIDxNZW51Q29udGFpbmVyPlxyXG4gICAgICAgIHtjYXRlZ29yeUxpc3QubWFwKChpdGVtLCBpZHgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGFiKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0gPT09IHRhYik7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVudUJ0biBrZXk9e2lkeH0gdmFsdWU9e2l0ZW0gPT09IHRhYiA/IDEgOiAwfT5cclxuICAgICAgICAgICAgICA8TGluayB0bz17YC91c2VyLyR7aXRlbX1gfT57aXRlbX08L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudUJ0bj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvTWVudUNvbnRhaW5lcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RmlsdGVyV3JhcD5cclxuICAgICAgICAgIDxWaWV3VHlwZUJ0biAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge21ha2VTZWxlY3QoW1wi7KGw7ISgXCIsIFwi7KSR7JWZXCJdLCBvcmRlcil9XHJcbiAgICAgICAgICAgIHttYWtlU2VsZWN0KG9yZGVyTGlzdCwgb3JkZXIpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GaWx0ZXJXcmFwPlxyXG4gICAgICAgIDxWaWV3VHlwZVBhZ2UgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9Vc2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQ29udGFpbmVyKHsgdGFiIH0pIHtcclxuICByZXR1cm4gPFVzZXIgdGFiPXt0YWJ9IC8+O1xyXG59XHJcbiIsImltcG9ydCBVc2VyQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvVXNlckNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclBhZ2UoeyBtYXRjaCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8VXNlckNvbnRhaW5lciB0YWI9e21hdGNoLnBhcmFtcy50YWJ9IC8+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9