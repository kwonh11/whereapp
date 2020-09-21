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
  var data = _taggedTemplateLiteral(["\n  ", ";\n  * {\n    box-sizing : border-box;\n    text-decoration: none;\n  }\n  body {\n    background-color: rgb(249, 249, 249);\n  }\n  section {\n    padding-top: 80px;\n  }\n"]);

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

/***/ "./src/common/api.js":
/*!***************************!*\
  !*** ./src/common/api.js ***!
  \***************************/
/*! exports provided: callApiScrap, callApiSearchByKeyword, callApiAreaBasedList, getUsersLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApiScrap", function() { return callApiScrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApiSearchByKeyword", function() { return callApiSearchByKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApiAreaBasedList", function() { return callApiAreaBasedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersLocation", function() { return getUsersLocation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


var axiosConfig = {
  baseURL: 'http://localhost:8000'
};
function callApiScrap(article) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/scrap", data, axiosConfig);
}
; // 검색 후 응답되는 배열은
// list 형태로 출력

function callApiSearchByKeyword(keyword) {
  if (!keyword) return;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/news/search/".concat(keyword));
}
function callApiAreaBasedList(latitude, longitude) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("");
} // 유저 위치 재확인후 저장
// redux에 유저 위치 저장하는 로직 필요

function getUsersLocation() {
  console.log('getUsersLocation');
  var result = {
    latitude: '',
    longitude: '',
    error: false
  };

  var onSuccess = function onSuccess(position) {
    result.latitude = position.coords.latitude;
    result.longitude = position.coords.longitude;
    console.log("latitude : ".concat(result.latitude, ", longitude: ").concat(result.longitude));
  };

  var onFailure = function onFailure() {
    result.error = true;
  };

  if (!navigator.geolocation) {} else {
    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  }

  return result;
}

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
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      display: block;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 20px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  ", "\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display:flex;\n  align-self: flex-end;\n  & button: {\n    padding:10px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display:flex;\n  justify-content: space-between;\n  align-items:center;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 //test 중


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
    width: "100%",
    borderBottom: "1px solid #ccc",
    "&:last-child": {
      borderBottom: "none"
    }
  }
});
var DescriptionWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var ListActionsWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());

function ListView(_ref) {
  var data = _ref.data;
  var classes = useStyles();

  var testHandleOnClickScrap = function testHandleOnClickScrap(article) {
    Object(_common_api__WEBPACK_IMPORTED_MODULE_5__["callApiScrap"])(article)["catch"](function (err) {
      return console.log(err);
    });
  };

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
    }), /*#__PURE__*/React.createElement(DescriptionWrap, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
      primary: news.title,
      secondary: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
        component: "span",
        variant: "body2",
        className: classes.inline,
        color: "textPrimary"
      }, news.description)
    }), /*#__PURE__*/React.createElement(ListActionsWrap, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      size: "small",
      color: "primary"
    }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/news/".concat(news.id)
    }, " \uC790\uC138\uD788")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      size: "small",
      color: "primary",
      onClick: testHandleOnClickScrap
    }, "\uC2A4\uD06C\uB7A9"))));
  }));
}

function CardView(_ref2) {
  var data = _ref2.data,
      path = _ref2.path;
  var classes = useStyles(); // redux 구축 후 store에서 정확한 article을 매개변수로 사용하는 
  // 로직으로 바꾸기

  var testHandleOnClickScrap = function testHandleOnClickScrap(article) {
    Object(_common_api__WEBPACK_IMPORTED_MODULE_5__["callApiScrap"])(article)["catch"](function (err) {
      return console.log(err);
    });
  };

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
      color: "primary",
      onClick: testHandleOnClickScrap
    }, "\uC2A4\uD06C\uB7A9")));
  });
}

var ContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), function (props) {
  return props.view === "card" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4());
}, function (props) {
  return props.view === "list" && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5());
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
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 30px;\n  position: relative;\n  & img {\n    margin-bottom: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 //test 중


var AricleContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"])(_templateObject());
function Detail(_ref) {
  var news = _ref.news;

  // redux 구현 후 article 매개변수를 redux store를 통해 정확한 데이터로 넘겨줘야함  const testHandleOnClickScrap = () => {
  var testHandleOnClickScrap = function testHandleOnClickScrap(article) {
    Object(_common_api__WEBPACK_IMPORTED_MODULE_4__["callApiScrap"])(article)["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/React.createElement(AricleContainer, {
    elevation: 3
  }, /*#__PURE__*/React.createElement(_common_component_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "100px",
    margin: "10px",
    name: news.corp,
    border: "1px solid"
  }), /*#__PURE__*/React.createElement("img", {
    src: news.image
  }), /*#__PURE__*/React.createElement("p", null, news.description), /*#__PURE__*/React.createElement(_Comments__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onScrap: testHandleOnClickScrap
  }));
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    height: auto;\n    width: auto;\n    margin-left: calc(2.5% - 3px);\n    padding: 8px 3px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 10px;\n    margin-left: calc(2.5% - 3px);\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

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
var ActionsWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject6());
var ScrapButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(StyledButton)(_templateObject7());
function Comments(props) {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      sendable = _React$useState4[0],
      setSendable = _React$useState4[1]; //test


  var onScrap = props.onScrap;
  React.useEffect(function () {
    if (inputValue.length > 300) setSendable(false);
    if (inputValue.length <= 300) setSendable(true);
  }, [inputValue]);

  var handleChange = function handleChange(event) {
    setInputValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement(CommentsWrap, null, /*#__PURE__*/React.createElement(ActionsWrap, null, /*#__PURE__*/React.createElement(ScrapButton, {
    onClick: onScrap
  }, "\uC2A4\uD06C\uB7A9")), /*#__PURE__*/React.createElement(StyledTextField, {
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
  id: 0,
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  content: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  category: "MASK",
  corp: "segye",
  published: new Date().toString(),
  createAt: new Date().toString()
}, {
  id: 1,
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  content: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  category: "MASK",
  corp: "segye",
  published: new Date().toString(),
  createAt: new Date().toString()
}, {
  id: 2,
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  content: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  category: "MASK",
  corp: "segye",
  published: new Date().toString(),
  createAt: new Date().toString()
}, {
  id: 3,
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  content: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  category: "MASK",
  corp: "segye",
  published: new Date().toString(),
  createAt: new Date().toString()
}, {
  id: 4,
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  content: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  category: "MASK",
  corp: "segye",
  published: new Date().toString(),
  createAt: new Date().toString()
}, {
  id: 5,
  title: "마스크 품절 대란... 마스크 품절 대란 마스크 품절 대란",
  image: "https://cphoto.asiae.co.kr/listimglink/1/2020063008261333186_1593473174.jpg",
  content: "마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼 마스크 품절돼",
  category: "MASK",
  corp: "segye",
  published: new Date().toString(),
  createAt: new Date().toString()
}];
function ArticleContainer(_ref) {
  var id = _ref.id;
  var news = data.find(function (item) {
    return item.id === parseInt(id);
  });
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
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.7s ease-out;\n  &:hover{\n    box-shadow: 0px 1px 4px rgba(0,0,0,.1), 0px 2px 3px rgba(0,0,0,.12), 0px 1px 3px rgba(0,0,0,.14);\n    transform: translateY(-5px);\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 //test 중


var StyledCard = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"])(_templateObject());
var BottomIconsWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2());
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      width: 330,
      minWidth: 330,
      height: 440,
      margin: "0 7px"
    },
    media: {
      height: 0,
      paddingTop: "66%" // 16:9

    },
    distance: {
      marginRight: "20px",
      fontSize: "small",
      fontWeight: "bold"
    }
  };
}); // image, title, description, category 를 입력받아 Card를 리턴하는 컴포넌트 함수

function NewsCard(props) {
  var classes = useStyles();
  var image = props.image,
      category = props.category,
      title = props.title,
      date = props.date,
      address = props.address,
      tel = props.tel,
      dist = props.dist; // desciprion 100글자 제한 + 말줄임표
  // const subString = (desc,count) => {
  //     const isString = typeof desc === "string";
  //     return (isString && desc.length >= count? desc.substring(0,count) + "..." : desc);
  // }
  // test
  // redux 구현 후 article 매개변수를 redux store를 통해 정확한 데이터로 넘겨줘야함

  var testHandleOnClickScrap = function testHandleOnClickScrap(article) {
    Object(_common_api__WEBPACK_IMPORTED_MODULE_5__["callApiScrap"])(article)["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/React.createElement(StyledCard, {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    avatar: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      "aria-label": "news"
    }, category ? category.slice(0, 2) : ''),
    action: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      "aria-label": "settings"
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["MoreVert"], null)),
    title: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h6"
    }, title),
    subheader: date
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.media,
    image: image,
    title: title
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, address, /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, "TEL .".concat(tel), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement(BottomIconsWrap, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    disableSpacing: true
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "add to favorites",
    onClick: testHandleOnClickScrap
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Favorite"], null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "share"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Share"], null))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    "aria-label": "distance",
    className: classes.distance
  }, "".concat(dist / 1000, "km"))));
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

/***/ "./src/home/component/LocationButton.js":
/*!**********************************************!*\
  !*** ./src/home/component/LocationButton.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var onClickLocation = props.onClickLocation;
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    color: "primary",
    variant: "outlined",
    onClick: onClickLocation
  }, "\uD604\uC7AC\uC704\uCE58\uC0AC\uC6A9");
});
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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f1f1f1;\n  color: #c1c1c1;\n  opacity: ", ";\n  width: 100px;\n  height: 440px;\n  z-index: ", ";\n  transition: all 0.3s ease-out;\n  ", ";\n"]);

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
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 105%;\n  position: relative;\n  left: ", "px;\n  padding-bottom:5px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  transition: all 0.3s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 105%;\n  overflow: hidden;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  padding-top: 80px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (props) {
  return props.active * -344;
});
var ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());
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
  var items = props.items;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var _React$useState3 = React.useState(1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cardsPerPage = _React$useState4[0],
      setCardsPerPage = _React$useState4[1];

  var max = React.useCallback(function () {
    return items.length - 1;
  }, [items]);
  React.useEffect(function () {
    setCardsPerPage(Math.floor(document.documentElement.clientWidth / 337));
  }, [document.documentElement.clientWidth]);
  console.log(items.length);

  var onClickPrev = function onClickPrev() {
    setActive(active - cardsPerPage > 0 ? active - cardsPerPage : 0);
  };

  var onClickNext = function onClickNext(max) {
    setActive(active + cardsPerPage < max ? active + cardsPerPage : max);
  };

  return /*#__PURE__*/React.createElement(SliderContainer, {
    device: "web"
  }, /*#__PURE__*/React.createElement(ArrowContainer, {
    device: "web"
  }, /*#__PURE__*/React.createElement(PrevArrow, {
    visible: active <= 0 ? "none" : "",
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
    active: active,
    page: cardsPerPage
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: index
    }, item));
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/component/TestAPIButton.js":
/*!*********************************************!*\
  !*** ./src/home/component/TestAPIButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    color: "primary",
    variant: "outlined"
  }, " TOUR API TEST ");
});
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

/***/ "./src/home/container/LocationContainer.js":
/*!*************************************************!*\
  !*** ./src/home/container/LocationContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationContainer; });
/* harmony import */ var _component_LocationButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/LocationButton */ "./src/home/component/LocationButton.js");
/* harmony import */ var _component_TestAPIButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/TestAPIButton */ "./src/home/component/TestAPIButton.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var TestButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
function LocationContainer() {
  React.useEffect(function () {
    Object(_common_api__WEBPACK_IMPORTED_MODULE_3__["getUsersLocation"])();
  }, []);
  return /*#__PURE__*/React.createElement(TestButtonsContainer, null, /*#__PURE__*/React.createElement(_component_LocationButton__WEBPACK_IMPORTED_MODULE_0__["default"], {
    onClickLocation: _common_api__WEBPACK_IMPORTED_MODULE_3__["getUsersLocation"]
  }), /*#__PURE__*/React.createElement(_component_TestAPIButton__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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
  image: "http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
  category: "축제",
  title: "\uC9C4\uC8FC\uB0A8\uAC15\uC720\uB4F1\uCD95\uC81C",
  date: "2020/10/12-2020/10/22",
  address: "대구광역시 동구 동화사1길 1",
  tel: "053-980-7900",
  dist: 300
}, {
  image: "http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
  category: "축제",
  title: "\uC9C4\uC8FC\uB0A8\uAC15\uC720\uB4F1\uCD95\uC81C",
  date: "2020/10/12-2020/10/22",
  address: "대구광역시 동구 동화사1길 1",
  tel: "053-980-7900",
  dist: 300
}, {
  image: "http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
  category: "축제",
  title: "\uC9C4\uC8FC\uB0A8\uAC15\uC720\uB4F1\uCD95\uC81C",
  date: "2020/10/12-2020/10/22",
  address: "대구광역시 동구 동화사1길 1",
  tel: "053-980-7900",
  dist: 300
}, {
  image: "http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
  category: "축제",
  title: "\uC9C4\uC8FC\uB0A8\uAC15\uC720\uB4F1\uCD95\uC81C",
  date: "2020/10/12-2020/10/22",
  address: "대구광역시 동구 동화사1길 1",
  tel: "053-980-7900",
  dist: 300
}, {
  image: "http://www.jinju.go.kr/CmsMultiFile/view.do?multifileId=MF00000541&idx=13391",
  category: "축제",
  title: "\uC9C4\uC8FC\uB0A8\uAC15\uC720\uB4F1\uCD95\uC81C",
  date: "2020/10/12-2020/10/22",
  address: "대구광역시 동구 동화사1길 1",
  tel: "053-980-7900",
  dist: 300
}]; // 더미데이터 뉴스

var testNews = [].concat(news, news, _toConsumableArray(news.slice(0, 2)));
function SliderContainer(props) {
  return /*#__PURE__*/React.createElement(_component_Slider__WEBPACK_IMPORTED_MODULE_0__["default"], {
    items: testNews
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
/* harmony import */ var _container_LocationContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/LocationContainer */ "./src/home/container/LocationContainer.js");
/* harmony import */ var _container_SliderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/SliderContainer */ "./src/home/container/SliderContainer.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 50px;\n  align-items: center;\n  justify-content: space-between;\n  height: 100px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 75px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].section(_templateObject());
var FilterWrap = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2()); // const ContentsWrap = styled.div`
//   display: flex;
//   height: 440px;
//   align-items: center;
// `;

function HomePage() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(FilterWrap, null, /*#__PURE__*/React.createElement(_container_LocationContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.d85d1dbcefd97328b2ab2009753bba29.png");

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
}]; // https://www.npmjs.com/package/@react-google-maps/api
// 요기요 따라하자

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb21wb25lbnQvQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9wYWdlL0NoYXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9kb25nYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZXMvZ29vZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9oYW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9zYnMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzL3NlZ3llLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsL2NvbXBvbmVudC9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29tcG9uZW50L0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29udGFpbmVyL0FydGljbGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9wYWdlL0RldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvR05CLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L0xvZ2luQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ25iL2NvbnRhaW5lci9HTkJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9wYWdlL0dOQlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9Mb2NhdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb21wb25lbnQvU2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9UZXN0QVBJQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbnRhaW5lci9DYXRlZ29yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvRGF0ZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvTG9jYXRpb25Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL1NsaWRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9wYWdlL0hvbWVQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZ29vZ2xlX2xvZ2luX2J1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9rYWthb19sb2dpbl9idXR0b24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzL2NvbXBvbmVudC9Db3JwQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29tcG9uZW50L05ld3NMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzL2NvbnRhaW5lci9Db3JwQ2F0ZWdvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29udGFpbmVyL05ld3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvcGFnZS9OZXdzUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci9jb21wb25lbnQvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci9jb250YWluZXIvVXNlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlci9wYWdlL1VzZXJQYWdlLmpzIl0sIm5hbWVzIjpbImN1c3RvbUhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJyZXNldCIsIkFwcENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkFwcCIsImNvbnNvbGUiLCJsb2ciLCJVc2VyUGFnZSIsIkRldGFpbFBhZ2UiLCJDaGF0UGFnZSIsIk5ld3NQYWdlIiwiSG9tZVBhZ2UiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicGFwZXIiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImhlYWRlciIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiZmxleCIsImNvbnRlbnRzIiwiYm9yZGVyVG9wIiwiYm9yZGVyQm90dG9tIiwiZm9ybSIsImlucHV0QmFzZSIsImljb24iLCJDaGF0QnRuIiwiSWNvbkJ1dHRvbiIsIkNoYXQiLCJ2aXN1YWwiLCJoYW5kbGVDbGljayIsImNsYXNzZXMiLCJpY29uQnV0dG9uIiwiQ2hhdENvbnRhaW5lciIsInVzZVN0YXRlIiwic2V0VmlzdWFsIiwiYXhpb3NDb25maWciLCJiYXNlVVJMIiwiY2FsbEFwaVNjcmFwIiwiYXJ0aWNsZSIsImF4aW9zIiwicG9zdCIsImRhdGEiLCJjYWxsQXBpU2VhcmNoQnlLZXl3b3JkIiwia2V5d29yZCIsImdldCIsImNhbGxBcGlBcmVhQmFzZWRMaXN0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJnZXRVc2Vyc0xvY2F0aW9uIiwicmVzdWx0IiwiZXJyb3IiLCJvblN1Y2Nlc3MiLCJjb29yZHMiLCJvbkZhaWx1cmUiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIkZvb3RlckNvbnRhaW5lciIsImZvb3RlciIsIkljb25Db250YWluZXIiLCJJbmZvV3JhcCIsIkZvb3RlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldFVSTCIsImljb25OYW1lIiwibWF0Y2giLCJnb29nbGUiLCJnb29nbGVJY29uIiwiZG9uZ2EiLCJkb25nYUljb24iLCJoYW5pIiwiaGFuaUljb24iLCJzYnMiLCJzYnNJY29uIiwic2VneWUiLCJzZWd5ZUljb24iLCJJY29uQm94IiwicHJvcHMiLCJzaXplIiwibWFyZ2luIiwibmFtZSIsIkljb25Db21wb25lbnQiLCJob3ZlckFjdGlvbiIsInJlc3QiLCJNb2RhbENvbnRhaW5lciIsIm9uIiwiTW9kYWxCb3giLCJFeGl0V3JhcCIsIk1vZGFsIiwib25DbGlja0Nsb3NlIiwiY2hpbGRyZW4iLCJUb2dnbGVCdG4iLCJUb2dnbGVCdXR0b24iLCJWaWV3QnV0dG9uIiwidmlldyIsInNldFZpZXciLCJoYW5kbGVWaWV3IiwiZXZlbnQiLCJuZXdWaWV3IiwicGF0aCIsIndpdGhSb3V0ZXIiLCJyb290IiwibWF4V2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIm1lZGlhIiwibGlzdCIsImlubGluZSIsImltZyIsIm1hcmdpblJpZ2h0IiwibGlzdEl0ZW0iLCJEZXNjcmlwdGlvbldyYXAiLCJMaXN0QWN0aW9uc1dyYXAiLCJMaXN0VmlldyIsInRlc3RIYW5kbGVPbkNsaWNrU2NyYXAiLCJlcnIiLCJtYXAiLCJuZXdzIiwiaWR4IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJDYXJkVmlldyIsIkNvbnRlbnRzQ29udGFpbmVyIiwiY3NzIiwiVmlld1R5cGVQYWdlIiwibG9jYXRpb24iLCJxdWVyeSIsInFzIiwicGFyc2UiLCJzZWFyY2giLCJpZ25vcmVRdWVyeVByZWZpeCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYXRobmFtZSIsIkFyaWNsZUNvbnRhaW5lciIsIlBhcGVyIiwiRGV0YWlsIiwiY29ycCIsIkNvbW1lbnRzV3JhcCIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsIlN0eWxlZFRleHRGaWVsZCIsIlRleHRGaWVsZCIsIklucHV0RGF0YXMiLCJDaGFyYWN0ZXJzIiwiY29sb3IiLCJBY3Rpb25zV3JhcCIsIlNjcmFwQnV0dG9uIiwiQ29tbWVudHMiLCJSZWFjdCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VuZGFibGUiLCJzZXRTZW5kYWJsZSIsIm9uU2NyYXAiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRlbnQiLCJjYXRlZ29yeSIsInB1Ymxpc2hlZCIsInRvU3RyaW5nIiwiY3JlYXRlQXQiLCJBcnRpY2xlQ29udGFpbmVyIiwiZmluZCIsIml0ZW0iLCJwYXJzZUludCIsIkRldGFpbFBhZ2VDb250YWluZXIiLCJzZWN0aW9uIiwicGFyYW1zIiwiQ29udGFpbmVyIiwibmF2IiwiSW5uZXIiLCJSaWdodEl0ZW0iLCJ1bCIsIkxvZ28iLCJHTkIiLCJMb2dvSW1hZ2UiLCJVc2VyQ29udGFpbmVyIiwiVXNlcklubmVyIiwiTWVudSIsIkJ0bldyYXAiLCJBdmF0YXIiLCJMb2dpbiIsImxvZ2luIiwic2V0TG9naW4iLCJsb2dpbk1vZGFsIiwic2V0TG9naW5Nb2RhbCIsImluZm9Nb2RhbCIsInNldEluZm9Nb2RhbCIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJ0aGVuIiwicmVzIiwidXNlciIsInNldExvZ2dlZEluIiwiaGFuZGxlQ2xpY2tMb2dpbk1vZGFsIiwiaGFuZGxlQ2xpY2tJbmZvTW9kYWwiLCJoYW5kbGVBZGRGaWxlIiwiZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlcyIsInBhdGNoIiwic25zSWQiLCJ1cmwiLCJuaWNrIiwiU2lnbkluQ29udGFpbmVyIiwiVGl0bGVDb250YWluZXIiLCJTaWduSW4iLCJnb29nbGVMb2dpbkltYWdlIiwia2FrYW9Mb2dpbkltYWdlIiwiR05CUGFnZSIsIlN0eWxlZENhcmQiLCJDYXJkIiwiQm90dG9tSWNvbnNXcmFwIiwidGhlbWUiLCJtaW5XaWR0aCIsInBhZGRpbmdUb3AiLCJkaXN0YW5jZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIk5ld3NDYXJkIiwiZGF0ZSIsImFkZHJlc3MiLCJ0ZWwiLCJkaXN0Iiwic2xpY2UiLCJDYXRlZ29yeSIsInNldFZhbHVlIiwiY2F0ZWdvcnlMaXN0IiwibmV3VmFsdWUiLCJjb250YWluZXIiLCJmbGV4V3JhcCIsInRleHRGaWVsZCIsInNocmluayIsIm9uQ2xpY2tMb2NhdGlvbiIsIlNsaWRlckNvbnRhaW5lciIsIkNhcmRDb250YWluZXIiLCJhY3RpdmUiLCJBcnJvd0NvbnRhaW5lciIsIkFycm93SG92ZXJBY3Rpb24iLCJQcmV2QXJyb3ciLCJzcGFuIiwidmlzaWJsZSIsIk5leHRBcnJvdyIsIlNsaWRlciIsIml0ZW1zIiwic2V0QWN0aXZlIiwiY2FyZHNQZXJQYWdlIiwic2V0Q2FyZHNQZXJQYWdlIiwibWF4IiwidXNlQ2FsbGJhY2siLCJNYXRoIiwiZmxvb3IiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwib25DbGlja1ByZXYiLCJvbkNsaWNrTmV4dCIsImluZGV4IiwiQ2F0ZWdvcnlDb250YWluZXIiLCJEYXRlQ29udGFpbmVyIiwiVGVzdEJ1dHRvbnNDb250YWluZXIiLCJMb2NhdGlvbkNvbnRhaW5lciIsInRlc3ROZXdzIiwiRmlsdGVyV3JhcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb3JwcyIsIkNvcnBDYXRlZ29yeSIsIm9yaWdpbmFsTGluayIsImNvbXBhbnkiLCJOZXdzTGlzdCIsIkNvcnBDYXRlZ29yeUNvbnRhaW5lciIsIk5ld3NDb250YWluZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImZvcm1Db250cm9sIiwiTWVudUNvbnRhaW5lciIsIk1lbnVCdG4iLCJidXR0b24iLCJVc2VyIiwidGFiIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVyTGlzdCIsIm1ha2VTZWxlY3QiLCJzZWxlY3RMaXN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FB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LENBQUNDLEdBQVIsQ0FBWW1TLEdBQVo7QUFDQXBTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZMkssSUFBSSxLQUFLd0gsR0FBckI7QUFDQSx3QkFDRSxvQkFBQyxPQUFEO0FBQVMsU0FBRyxFQUFFM0ssR0FBZDtBQUFtQixXQUFLLEVBQUVtRCxJQUFJLEtBQUt3SCxHQUFULEdBQWUsQ0FBZixHQUFtQjtBQUE3QyxvQkFDRSxvQkFBQyxxREFBRDtBQUFNLFFBQUUsa0JBQVd4SCxJQUFYO0FBQVIsT0FBNEJBLElBQTVCLENBREYsQ0FERjtBQUtELEdBVEEsQ0FESCxDQURGLGVBYUUsOENBQ0Usb0JBQUMsVUFBRCxxQkFDRSxvQkFBQyxxRUFBRCxPQURGLGVBRUUsaUNBQ0c0SCxVQUFVLENBQUMsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFELEVBQWVILEtBQWYsQ0FEYixFQUVHRyxVQUFVLENBQUNELFNBQUQsRUFBWUYsS0FBWixDQUZiLENBRkYsQ0FERixlQVFFLG9CQUFDLHNFQUFEO0FBQWMsUUFBSSxFQUFFelA7QUFBcEIsSUFSRixDQWJGLENBREY7QUEwQkQsQzs7Ozs7Ozs7Ozs7OztBQzlKRDtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVM2SSxhQUFULE9BQWdDO0FBQUEsTUFBUDJHLEdBQU8sUUFBUEEsR0FBTztBQUM3QyxzQkFBTyxvQkFBQyx1REFBRDtBQUFNLE9BQUcsRUFBRUE7QUFBWCxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU2xTLFFBQVQsT0FBNkI7QUFBQSxNQUFUbUUsS0FBUyxRQUFUQSxLQUFTO0FBQzFDLHNCQUNFLGtEQUNFLG9CQUFDLGdFQUFEO0FBQWUsT0FBRyxFQUFFQSxLQUFLLENBQUMyRyxNQUFOLENBQWFvSDtBQUFqQyxJQURGLENBREY7QUFLRCxDIiwiZmlsZSI6ImFwcC45ZDU2YTQ5YTMzOWFkOWZlYTAwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IENoYXRQYWdlIGZyb20gXCIuL2NoYXQvcGFnZS9DaGF0UGFnZVwiO1xyXG5pbXBvcnQgTmV3c1BhZ2UgZnJvbSBcIi4vbmV3cy9wYWdlL05ld3NQYWdlXCI7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lL3BhZ2UvSG9tZVBhZ2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwiaGlzdG9yeVwiO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCByZXNldCBmcm9tIFwic3R5bGVkLXJlc2V0XCI7XHJcbmltcG9ydCBHTkJQYWdlIGZyb20gXCIuL2duYi9wYWdlL0dOQlBhZ2VcIjtcclxuaW1wb3J0IERldGFpbFBhZ2UgZnJvbSBcIi4vZGV0YWlsL3BhZ2UvRGV0YWlsUGFnZVwiO1xyXG5pbXBvcnQgVXNlclBhZ2UgZnJvbSBcIi4vdXNlci9wYWdlL1VzZXJQYWdlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9jb21tb24vY29tcG9uZW50L01vZGFsXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tbW9uL2NvbXBvbmVudC9Gb290ZXJcIjtcclxuXHJcbi8vIGxvZ2luIHRlc3RcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9nbmIvY29tcG9uZW50L1NpZ25pblwiO1xyXG5cclxuY29uc3QgY3VzdG9tSGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgJHtyZXNldH07XHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XHJcbiAgfVxyXG4gIHNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcbi8vIHJvdXRlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc29sZS5sb2coXCJhcHAhISEhISEhISFcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcENvbnRhaW5lcj5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2N1c3RvbUhpc3Rvcnl9PlxyXG4gICAgICAgICAgPEdOQlBhZ2UgLz5cclxuICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXIvOnRhYlwiIGNvbXBvbmVudD17VXNlclBhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbFwiIGNvbXBvbmVudD17RGV0YWlsUGFnZX0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2hhdFwiIGNvbXBvbmVudD17Q2hhdFBhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3MvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxQYWdlfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdzXCIgY29tcG9uZW50PXtOZXdzUGFnZX0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPENoYXRQYWdlIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgIDwvQXBwQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFBhcGVyLCBJbnB1dEJhc2UsIEljb25CdXR0b24sIFpvb20gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiO1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BdHRhY2hGaWxlXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgQ2hhdEJ1YmJsZU91dGxpbmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hhdEJ1YmJsZU91dGxpbmVcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICB6SW5kZXg6IDk5OTgsXHJcbiAgICB3aWR0aDogMzYwLFxyXG4gICAgaGVpZ2h0OiA1MDAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgYm90dG9tOiAzMCxcclxuICAgIHJpZ2h0OiAzMCxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgaGVpZ2h0OiA2MCxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgXCImIHNwYW5cIjoge1xyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnRzOiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMilcIixcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIGhlaWdodDogNTcsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGlucHV0QmFzZToge1xyXG4gICAgZmxleDogMSxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIHdpZHRoOiBcIjgwJVwiLFxyXG4gICAgaGVpZ2h0OiBcIjgwJVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQ2hhdEJ0biA9IHN0eWxlZChJY29uQnV0dG9uKWBcclxuICAmLk11aUJ1dHRvbkJhc2Utcm9vdCB7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNjNiZjtcclxuICAgICYuTXVpQnV0dG9uQmFzZS1yb290OmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNjNiZjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0KHsgdmlzdWFsLCBoYW5kbGVDbGljayB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiB2aXN1YWwgPyAoXHJcbiAgICA8Wm9vbSBpbj17dmlzdWFsfT5cclxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgPHNwYW4+7LC47Jes7J247JuQPC9zcGFuPlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudHN9PjwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8QXR0YWNoRmlsZUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0QmFzZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrqZTshLjsp4Drpbwg7J6F66Cl7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxTZW5kSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvWm9vbT5cclxuICApIDogKFxyXG4gICAgPENoYXRCdG4gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufT5cclxuICAgICAgPENoYXRCdWJibGVPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgIDwvQ2hhdEJ0bj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50L0NoYXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRDb250YWluZXIoKSB7XHJcbiAgY29uc3QgW3Zpc3VhbCwgc2V0VmlzdWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldFZpc3VhbCghdmlzdWFsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPENoYXQgdmlzdWFsPXt2aXN1YWx9IGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30gLz47XHJcbn1cclxuIiwiaW1wb3J0IENoYXRDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9DaGF0Q29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICByZXR1cm4gPENoYXRDb250YWluZXIgLz47XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5jb25zdCBheGlvc0NvbmZpZyA9IHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaVNjcmFwKGFydGljbGUpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9zY3JhcFwiLCBkYXRhLCBheGlvc0NvbmZpZyk7XG59O1xuXG4vLyDqsoDsg4kg7ZuEIOydkeuLteuQmOuKlCDrsLDsl7TsnYBcbi8vIGxpc3Qg7ZiV7YOc66GcIOy2nOugpVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGlTZWFyY2hCeUtleXdvcmQoa2V5d29yZCkge1xuICBpZigha2V5d29yZCkgcmV0dXJuO1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvbmV3cy9zZWFyY2gvJHtrZXl3b3JkfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaUFyZWFCYXNlZExpc3QobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGBgKVxufVxuXG5cbi8vIOycoOyggCDsnITsuZgg7J6s7ZmV7J247ZuEIOyggOyepVxuLy8gcmVkdXjsl5Ag7Jyg7KCAIOychOy5mCDsoIDsnqXtlZjripQg66Gc7KeBIO2VhOyalFxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzTG9jYXRpb24oKSB7XG4gIGNvbnNvbGUubG9nKCdnZXRVc2Vyc0xvY2F0aW9uJyk7XG4gIGxldCByZXN1bHQgPSB7XG4gICAgbGF0aXR1ZGU6ICcnLFxuICAgIGxvbmdpdHVkZTogJycsXG4gICAgZXJyb3I6IGZhbHNlXG4gIH07XG4gIGNvbnN0IG9uU3VjY2VzcyA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJlc3VsdC5sYXRpdHVkZSAgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XG4gICAgcmVzdWx0LmxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XG4gICAgY29uc29sZS5sb2coYGxhdGl0dWRlIDogJHtyZXN1bHQubGF0aXR1ZGV9LCBsb25naXR1ZGU6ICR7cmVzdWx0LmxvbmdpdHVkZX1gKTtcbiAgfVxuICBjb25zdCBvbkZhaWx1cmUgPSAoKSA9PiB7IFxuICAgIHJlc3VsdC5lcnJvciA9IHRydWU7XG4gIH1cbiAgaWYoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuXG4gIH0gZWxzZSB7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xyXG5cclxuLy8gZm9vdGVy7Luo7YWM7J2064SIIDEwMHZ3IOuhnCB3aWR0aOyEpOygle2VmOuptCDsiqTtgazroaTrsJzsg51cclxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3AgOiAyMDBweDtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuYDtcclxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICB9XHJcbmA7XHJcbmNvbnN0IEluZm9XcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJiA+IHNwYW4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9vdGVyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOuplOydvCDslYTsnbTsvZggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOy5tOy5tOyYpCDslYTsnbTsvZggKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyAgdmlld0JveD1cIjAgMCAyMDggMTkxLjk0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJjbHMtMVwiIGQ9XCJNMTA0LDBDNDYuNTYsMCwwLDM2LjcxLDAsODJjMCwyOS4yOCwxOS40Nyw1NSw0OC43NSw2OS40OC0xLjU5LDUuNDktMTAuMjQsMzUuMzQtMTAuNTgsMzcuNjksMCwwLS4yMSwxLjc2LjkzLDIuNDNhMy4xNCwzLjE0LDAsMCwwLDIuNDguMTVjMy4yOC0uNDYsMzgtMjQuODEsNDQtMjlBMTMxLjU2LDEzMS41NiwwLDAsMCwxMDQsMTY0YzU3LjQ0LDAsMTA0LTM2LjcxLDEwNC04MlMxNjEuNDQsMCwxMDQsMFpNNTIuNTMsNjkuMjdjLS4xMywxMS42LjEsMjMuOC0uMDksMzUuMjItLjA2LDMuNjUtMi4xNiw0Ljc0LTUsNS43OGExLjg4LDEuODgsMCwwLDEtMSwuMDdjLTMuMjUtLjY0LTUuODQtMS44LTUuOTItNS44NC0uMjMtMTEuNDEuMDctMjMuNjMtLjA5LTM1LjIzLTIuNzUtLjExLTYuNjcuMTEtOS4yMiwwLTMuNTQtLjIzLTYtMi40OC01Ljg1LTUuODNzMS45NC01Ljc2LDUuOTEtNS44MmM5LjM4LS4xNCwyMS0uMTQsMzAuMzgsMCw0LC4wNiw1Ljc4LDIuNDgsNS45LDUuODJzLTIuMyw1LjYtNS44Myw1LjgzQzU5LjIsNjkuMzgsNTUuMjksNjkuMTYsNTIuNTMsNjkuMjdabTUwLjQsNDAuNDVhOS4yNCw5LjI0LDAsMCwxLTMuODIuODNjLTIuNSwwLTQuNDEtMS01LTIuNjVsLTMtNy43OEg3Mi44NWwtMyw3Ljc4Yy0uNTgsMS42My0yLjQ5LDIuNjUtNSwyLjY1YTkuMTYsOS4xNiwwLDAsMS0zLjgxLS44M2MtMS42Ni0uNzYtMy4yNS0yLjg2LTEuNDMtOC41Mkw3NCw2My40MmE5LDksMCwwLDEsOC01LjkyLDkuMDcsOS4wNywwLDAsMSw4LDUuOTNsMTQuMzQsMzcuNzZDMTA2LjE3LDEwNi44NiwxMDQuNTgsMTA5LDEwMi45MywxMDkuNzJabTMwLjMyLDBIMTE0YTUuNjQsNS42NCwwLDAsMS01Ljc1LTUuNVY2My41YTYuMTMsNi4xMywwLDAsMSwxMi4yNSwwVjk4Ljc1aDEyLjc1YTUuNTEsNS41MSwwLDEsMSwwLDExWm00Ny00LjUyQTYsNiwwLDAsMSwxNjkuNDksMTA4TDE1NS40Miw4OS4zN2wtMi4wOCwyLjA4djEzLjA5YTYsNiwwLDAsMS0xMiwwdi00MWE2LDYsMCwwLDEsMTIsMFY3Ni40bDE2Ljc0LTE2Ljc0YTQuNjQsNC42NCwwLDAsMSwzLjMzLTEuMzQsNi4wOCw2LjA4LDAsMCwxLDUuOSw1LjU4QTQuNyw0LjcsMCwwLDEsMTc4LDY3LjU1TDE2NC4zLDgxLjIybDE0Ljc3LDE5LjU3QTYsNiwwLDAsMSwxODAuMjIsMTA1LjIzWlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBkPVwiTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMlwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XHJcbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8SW5mb1dyYXA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIEp1bkh5dWssIEd5dSBhbGwgcmlnaHQgcmVzZXJ2ZWQuPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0luZm9XcmFwPlxyXG4gICAgICAgIDwvRm9vdGVyQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGRvbmdhSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2RvbmdhLnBuZ1wiO1xyXG5pbXBvcnQgZ29vZ2xlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dvb2dsZS5wbmdcIjtcclxuaW1wb3J0IGhhbmlJY29uIGZyb20gXCIuLi9pbWFnZXMvaGFuaS5wbmdcIjtcclxuaW1wb3J0IHNic0ljb24gZnJvbSBcIi4uL2ltYWdlcy9zYnMucG5nXCI7XHJcbmltcG9ydCBzZWd5ZUljb24gZnJvbSBcIi4uL2ltYWdlcy9zZWd5ZS5wbmdcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFVSTChpY29uTmFtZSkge1xyXG4gIGNvbnNvbGUubG9nKGljb25OYW1lKTtcclxuICBjb25zdCBtYXRjaCA9IHtcclxuICAgIGdvb2dsZTogZ29vZ2xlSWNvbixcclxuICAgIGRvbmdhOiBkb25nYUljb24sXHJcbiAgICBoYW5pOiBoYW5pSWNvbixcclxuICAgIHNiczogc2JzSWNvbixcclxuICAgIHNlZ3llOiBzZWd5ZUljb24sXHJcbiAgfTtcclxuICByZXR1cm4gbWF0Y2hbaWNvbk5hbWVdO1xyXG59XHJcblxyXG5jb25zdCBJY29uQm94ID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy5zaXplfTtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5zaXplfTtcclxuICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5tYXJnaW59O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gZ2V0VVJMKHByb3BzLm5hbWUpfSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICY6aG92ZXIge1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25Db21wb25lbnQocHJvcHMpIHtcclxuICAvLyBob3ZlciBhY3Rpb24g7J2AIOuCmOykkeyXkCDrhKPslrTshJwg7JWg64uI66mU7J207IWYIOq1rO2YhFxyXG4gIGNvbnN0IHsgbmFtZSwgaG92ZXJBY3Rpb24sIHNpemUgPSBcIjEwMHB4XCIsIG1hcmdpbiA9IFwiMTBweFwiLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIDxJY29uQm94IG5hbWU9e25hbWV9IHNpemU9e3NpemV9IG1hcmdpbj17bWFyZ2lufSB7Li4ucmVzdH0gLz47XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyA5OTk5IDogLTEpfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLm9uID09PSBcIm9uXCIgPyBcInJnYmEoMCwgMCwgMCwgMC40NSlcIiA6IFwicmdiYSgwLCAwLCAwLCAwKVwifTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1vdXQ7XHJcbmA7XHJcbmNvbnN0IE1vZGFsQm94ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBcImZsZXhcIjtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyAxIDogMCl9O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDEzcHggLTVweCByZ2JhKDEzMywgMTMzLCAxMzMsIDEpO1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbi10b3A6ICR7KHByb3BzKSA9PiAocHJvcHMub24gPT09IFwib25cIiA/IFwiMHB4XCIgOiBcIjMwcHhcIil9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbmA7XHJcbmNvbnN0IEV4aXRXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMS41cmVtKTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKDEzNCwgMTQyLCAxNTApO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4yNXM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbChwcm9wcykge1xyXG4gIGNvbnN0IHsgb24sIG9uQ2xpY2tDbG9zZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsQ29udGFpbmVyIG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxyXG4gICAgICA8TW9kYWxCb3ggb249e29uID8gXCJvblwiIDogXCJvZmZcIn0+XHJcbiAgICAgICAgPEV4aXRXcmFwIG9uQ2xpY2s9e29uQ2xpY2tDbG9zZX0+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9XCIxXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9FeGl0V3JhcD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvTW9kYWxCb3g+XHJcbiAgICA8L01vZGFsQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVG9nZ2xlQnV0dG9uLCBUb2dnbGVCdXR0b25Hcm91cCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XHJcbmltcG9ydCBWaWV3TGlzdEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TGlzdFwiO1xyXG5pbXBvcnQgVmlld01vZHVsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TW9kdWxlXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ0biA9IHN0eWxlZChUb2dnbGVCdXR0b24pYFxyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAmIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjM2Y2M2JmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFZpZXdCdXR0b24oeyBtYXRjaCB9KSB7XHJcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoXCJjYXJkXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWV3ID0gKGV2ZW50LCBuZXdWaWV3KSA9PiB7XHJcbiAgICBzZXRWaWV3KG5ld1ZpZXcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VG9nZ2xlQnV0dG9uR3JvdXAgdmFsdWU9e3ZpZXd9IGV4Y2x1c2l2ZSBvbkNoYW5nZT17aGFuZGxlVmlld30+XHJcbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPExpbmsgdG89e2Ake21hdGNoLnBhdGh9P3ZpZXc9Y2FyZGB9PlxyXG4gICAgICAgICAgPFZpZXdNb2R1bGVJY29uIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1RvZ2dsZUJ0bj5cclxuXHJcbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJsaXN0XCI+XHJcbiAgICAgICAgPExpbmsgdG89e2Ake21hdGNoLnBhdGh9P3ZpZXc9bGlzdGB9PlxyXG4gICAgICAgICAgPFZpZXdMaXN0SWNvbiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Ub2dnbGVCdG4+XHJcbiAgICA8L1RvZ2dsZUJ1dHRvbkdyb3VwPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld0J1dHRvbik7XHJcbiIsImltcG9ydCBxcyBmcm9tIFwicXNcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9uQXJlYSxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkTWVkaWEsXHJcbiAgQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG4vL3Rlc3Qg7KSRXHJcbmltcG9ydCB7Y2FsbEFwaVNjcmFwfSBmcm9tICcuLi8uLi9jb21tb24vYXBpJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiAzNDUsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNDAsXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBpbmxpbmU6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lXCIsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgICBoZWlnaHQ6IDE2MCxcclxuICAgIG1hcmdpblJpZ2h0OiAyMCxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBwYWRkaW5nOiBcIjhweCAwXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIixcclxuICAgIFwiJjpsYXN0LWNoaWxkXCI6IHtcclxuICAgICAgYm9yZGVyQm90dG9tOiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbmNvbnN0IERlc2NyaXB0aW9uV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuY29uc3QgTGlzdEFjdGlvbnNXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgJiBidXR0b246IHtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICB9XHJcbmA7XHJcbmZ1bmN0aW9uIExpc3RWaWV3KHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRlc3RIYW5kbGVPbkNsaWNrU2NyYXAgPSAoYXJ0aWNsZSkgPT4ge1xyXG4gICAgY2FsbEFwaVNjcmFwKGFydGljbGUpLmNhdGNoKGVyciA9PmNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICB7ZGF0YS5tYXAoKG5ld3MsIGlkeCkgPT4gKFxyXG4gICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGltZyBzcmM9e25ld3MuaW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XHJcbiAgICAgICAgICA8RGVzY3JpcHRpb25XcmFwPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICBwcmltYXJ5PXtuZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICBzZWNvbmRhcnk9e1xyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge25ld3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxMaXN0QWN0aW9uc1dyYXA+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIDxMaW5rIHRvPXtgL25ld3MvJHtuZXdzLmlkfWB9PiDsnpDshLjtnog8L0xpbms+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0ZXN0SGFuZGxlT25DbGlja1NjcmFwfT5cclxuICAgICAgICAgIOyKpO2BrOueqVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaXN0QWN0aW9uc1dyYXA+XHJcbiAgICAgICAgICA8L0Rlc2NyaXB0aW9uV3JhcD5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICApKX1cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDYXJkVmlldyh7IGRhdGEsIHBhdGggfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgLy8gcmVkdXgg6rWs7LaVIO2bhCBzdG9yZeyXkOyEnCDsoJXtmZXtlZwgYXJ0aWNsZeydhCDrp6TqsJzrs4DsiJjroZwg7IKs7Jqp7ZWY64qUIFxyXG4gIC8vIOuhnOyngeycvOuhnCDrsJTqvrjquLBcclxuICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKGFydGljbGUpID0+IHtcclxuICAgIGNhbGxBcGlTY3JhcChhcnRpY2xlKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhLm1hcCgobmV3cywgaWR4KSA9PiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0ga2V5PXtpZHh9PlxyXG4gICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgaW1hZ2U9e25ld3MuaW1hZ2V9XHJcbiAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICB7bmV3cy50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtwYXRoID09PSBcIi9uZXdzXCIgJiYgKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAge25ld3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9uZXdzLyR7bmV3cy5pZH1gfT4g7J6Q7IS47Z6IPC9MaW5rPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHtwYXRoID09PSBcIi9uZXdzXCIgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0ZXN0SGFuZGxlT25DbGlja1NjcmFwfT5cclxuICAgICAgICAgICAg7Iqk7YGs656pXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICkpO1xyXG59XHJcblxyXG5jb25zdCBDb250ZW50c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnZpZXcgPT09IFwiY2FyZFwiICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICAgIGdhcDogMjBweDtcclxuICAgIGB9XHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52aWV3ID09PSBcImxpc3RcIiAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGB9O1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gVmlld1R5cGVQYWdlKHsgbG9jYXRpb24sIGRhdGEgfSkge1xyXG4gIGxldCBxdWVyeSA9IHFzLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCwge1xyXG4gICAgaWdub3JlUXVlcnlQcmVmaXg6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xyXG4gICAgcXVlcnkudmlldyA9IFwiY2FyZFwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW50c0NvbnRhaW5lciB2aWV3PXtxdWVyeS52aWV3fT5cclxuICAgICAge3F1ZXJ5LnZpZXcgPT09IFwiY2FyZFwiID8gKFxyXG4gICAgICAgIDxDYXJkVmlldyBkYXRhPXtkYXRhfSBwYXRoPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGlzdFZpZXcgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGVudHNDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihWaWV3VHlwZVBhZ2UpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZG9uZ2EuNTNhZGE3MGY4N2FhMDczOTljMmIxZjEwYTg1ZTExMDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZS43MGY0OWVmZmFlZDUyYTc2OTJkMDE0MmI4YWQ3ZmVjNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaGFuaS4zMmQzNjIxMjAyYmI1MzkwZmM5OTQyMjA3Y2QxMzZjOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2JzLjIxMDQ2NDRhYWQ2ZDc2OTgzOTkxNmYxZWFlZDQ4NjEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzZWd5ZS40OWU4Zjc2Mjc1NjkyNTIzNDI0YThiMGJhZmEyNzZhZi5wbmdcIjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgSWNvbkJveCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9JY29uXCI7XHJcbmltcG9ydCBDb21tZW50cyBmcm9tICcuL0NvbW1lbnRzJztcclxuLy90ZXN0IOykkVxyXG5pbXBvcnQge2NhbGxBcGlTY3JhcH0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcblxyXG5jb25zdCBBcmljbGVDb250YWluZXIgPSBzdHlsZWQoUGFwZXIpYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICYgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlsKHsgbmV3cyB9KSB7XHJcblxyXG4gIC8vIHJlZHV4IOq1rO2YhCDtm4QgYXJ0aWNsZSDrp6TqsJzrs4DsiJjrpbwgcmVkdXggc3RvcmXrpbwg7Ya17ZW0IOygle2Zle2VnCDrjbDsnbTthLDroZwg64SY6rKo7KSY7JW87ZWoICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRlc3RIYW5kbGVPbkNsaWNrU2NyYXAgPSAoYXJ0aWNsZSkgPT4ge1xyXG4gICAgY2FsbEFwaVNjcmFwKGFydGljbGUpLmNhdGNoKGVyciA9PmNvbnNvbGUubG9nKGVycikpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXJpY2xlQ29udGFpbmVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgIDxJY29uQm94XHJcbiAgICAgICAgc2l6ZT1cIjEwMHB4XCJcclxuICAgICAgICBtYXJnaW49XCIxMHB4XCJcclxuICAgICAgICBuYW1lPXtuZXdzLmNvcnB9XHJcbiAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkXCJcclxuICAgICAgLz5cclxuICAgICAgPGltZyBzcmM9e25ld3MuaW1hZ2V9IC8+XHJcbiAgICAgIDxwPntuZXdzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPENvbW1lbnRzIG9uU2NyYXA9e3Rlc3RIYW5kbGVPbkNsaWNrU2NyYXB9Lz5cclxuICAgIDwvQXJpY2xlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuY29uc3QgQ29tbWVudHNXcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbmA7XHJcbmNvbnN0IFN0eWxlZFRleHRGaWVsZCA9IHN0eWxlZChUZXh0RmllbGQpYFxyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG5gO1xyXG5jb25zdCBJbnB1dERhdGFzID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbmA7XHJcbmNvbnN0IENoYXJhY3RlcnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciA9PT0gXCJncmF5XCI/IFwiIzg0ODQ4NFwiOlwicmVkXCJ9O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG5gO1xyXG5jb25zdCBBY3Rpb25zV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygyLjUlIC0gM3B4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBTY3JhcEJ1dHRvbiA9IHN0eWxlZChTdHlsZWRCdXR0b24pYFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygyLjUlIC0gM3B4KTtcclxuICAgIHBhZGRpbmc6IDhweCAzcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50cyhwcm9wcykge1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbmRhYmxlLCBzZXRTZW5kYWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gICAgLy90ZXN0XHJcbiAgICBjb25zdCB7b25TY3JhcH0gPSBwcm9wcztcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPiAzMDApIHNldFNlbmRhYmxlKGZhbHNlKTtcclxuICAgICAgICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPD0gMzAwKSBzZXRTZW5kYWJsZSh0cnVlKTtcclxuICAgIH0sW2lucHV0VmFsdWVdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbW1lbnRzV3JhcD5cclxuICAgICAgICAgICAgPEFjdGlvbnNXcmFwPlxyXG4gICAgICAgICAgICAgICAgPFNjcmFwQnV0dG9uIG9uQ2xpY2s9e29uU2NyYXB9PlxyXG4gICAgICAgICAgICAgICAgICAg7Iqk7YGs656pXHJcbiAgICAgICAgICAgICAgICA8L1NjcmFwQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0FjdGlvbnNXcmFwPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtdGV4dGFyZWFcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByb3dzTWF4PXs1fVxyXG4gICAgICAgICAgICBsYWJlbD17YOuMk+q4gCDri6zquLBgfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuwlOultOqzoCDqs6DsmrQg66eQ7J2EIOyCrOyaqe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dERhdGFzPlxyXG4gICAgICAgICAgICAgICAgPENoYXJhY3RlcnMgY29sb3I9e3NlbmRhYmxlPyBcImdyYXlcIjpcInJlZFwifT4gXHJcbiAgICAgICAgICAgICAgICAgICAge2lucHV0VmFsdWUubGVuZ3RofSAvIDMwMFxyXG4gICAgICAgICAgICAgICAgPC9DaGFyYWN0ZXJzPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg7J6FIOugpVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRCdXR0b24+XHJcbiAgICAgICAgICAgIDwvSW5wdXREYXRhcz5cclxuICAgICAgICA8L0NvbW1lbnRzV3JhcD5cclxuICAgIClcclxufSIsImltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9jb21wb25lbnQvQXJ0aWNsZVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICBjb3JwOiBcInNlZ3llXCIsXHJcbiAgICBwdWJsaXNoZWQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICBjb3JwOiBcInNlZ3llXCIsXHJcbiAgICBwdWJsaXNoZWQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICBjb3JwOiBcInNlZ3llXCIsXHJcbiAgICBwdWJsaXNoZWQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICBjb3JwOiBcInNlZ3llXCIsXHJcbiAgICBwdWJsaXNoZWQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICBjb3JwOiBcInNlZ3llXCIsXHJcbiAgICBwdWJsaXNoZWQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICBjb3JwOiBcInNlZ3llXCIsXHJcbiAgICBwdWJsaXNoZWQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNyZWF0ZUF0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVDb250YWluZXIoeyBpZCB9KSB7XHJcbiAgY29uc3QgbmV3cyA9IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKTtcclxuICByZXR1cm4gPEFydGljbGUgbmV3cz17bmV3c30gLz47XHJcbn1cclxuIiwiaW1wb3J0IEFydGljbGVDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9BcnRpY2xlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBEZXRhaWxQYWdlQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbFBhZ2UoeyBtYXRjaCB9KSB7XHJcbiAgY29uc29sZS5sb2coXCJEZXRhaWxQYWdlXCIpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IG1hdGNoLnBhcmFtcztcclxuICByZXR1cm4gKFxyXG4gICAgPERldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgICAgIDxBcnRpY2xlQ29udGFpbmVyIGlkPXtpZH0gLz5cclxuICAgIDwvRGV0YWlsUGFnZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTG9naW5CdG4gZnJvbSBcIi4vTG9naW5CdG5cIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm5hdmBcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJveC1zaGFkb3c6IHJnYigyMzgsIDIzOCwgMjM4KSAwcHggMXB4IDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5gO1xyXG5jb25zdCBSaWdodEl0ZW0gPSBzdHlsZWQudWxgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICAmIGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLyogJiArICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9ICovXHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogcmdiKDQwLCA0MiwgNTMpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuY29uc3QgTG9nbyA9IHN0eWxlZChCdXR0b24pYFxyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2V9KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR05CKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SW5uZXI+XHJcbiAgICAgICAgPFJpZ2h0SXRlbT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gaW1hZ2U9e0xvZ29JbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbmV3c1wiPuyWuOuhoOyCrOuzhCDrs7TquLA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9uZXdzXCI+7IaN67O0PC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L1JpZ2h0SXRlbT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExvZ2luQnRuIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5uZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBUeXBvZ3JhcGh5LCBEaXZpZGVyLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvTW9kYWxcIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjsgXHJcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbmluXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgaDYge1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlcklubmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDg0cHg7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICYgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAmIC5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjUsIDY5LCA3MywgMC4zKSxcclxuICAgICAgMCAxcHggM3B4IDFweCByZ2JhKDY1LCA2OSwgNzMsIDAuMTUpO1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICByaWdodDogLThweDtcclxuICAgIGJvdHRvbTogLThweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgJi5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdG5XcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBBdmF0YXIgPSBzdHlsZWQoSWNvbkJ1dHRvbilgXHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5pbWFnZSAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9wcy5pbWFnZX0pO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFtsb2dpbiwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2dpbk1vZGFsLCBzZXRMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW5mb01vZGFsLCBzZXRJbmZvTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiL2F1dGgvY2hlY2tVc2VyXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRMb2dpbih0eXBlb2YgcmVzLmRhdGEudXNlciAhPT0gXCJ1bmRlZmluZWRcIik7XHJcbiAgICAgICAgc2V0VXNlckluZm8ocmVzLmRhdGEudXNlcik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBzZXRMb2dnZWRJbihmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tMb2dpbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TG9naW5Nb2RhbCghbG9naW5Nb2RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tJbmZvTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmZvTW9kYWwoIWluZm9Nb2RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkRmlsZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaW1nXCIsIGUudGFyZ2V0LmZpbGVzWzBdKTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAucGF0Y2goYC9hdXRoL2ltZy8ke3VzZXJJbmZvLnNuc0lkfWAsIGZvcm1EYXRhKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgICAgICBpbWFnZTogcmVzLmRhdGEudXJsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2dpbiA/IChcclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja0luZm9Nb2RhbH1cclxuICAgICAgICAgIGltYWdlPXt1c2VySW5mbyAmJiB1c2VySW5mby5pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tMb2dpbk1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOuhnOq3uOyduCAvIOqwgOyehVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2xvZ2luTW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbj17bG9naW5Nb2RhbH0gb25DbGlja0Nsb3NlPXtoYW5kbGVDbGlja0xvZ2luTW9kYWx9PlxyXG4gICAgICAgICAgPFNpZ25JbiAvPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aW5mb01vZGFsICYmIChcclxuICAgICAgICA8TW9kYWwgb249e2luZm9Nb2RhbH0gb25DbGlja0Nsb3NlPXtoYW5kbGVDbGlja0luZm9Nb2RhbH0+XHJcbiAgICAgICAgICA8VXNlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFVzZXJJbm5lcj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlckluZm8gJiYgdXNlckluZm8uaW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBZGRGaWxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UGhvdG9DYW1lcmEgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L1VzZXJJbm5lcj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mbyAmJiB1c2VySW5mby5uaWNrfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1VzZXJDb250YWluZXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPE1lbnUgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXIvc2NyYXBcIj7siqTtgazrnqk8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPE1lbnUgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXIvY29tbWVudFwiPuuCtCDrjJPquIA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEJ0bldyYXA+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvYXV0aC9sb2dvdXRcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAg66Gc6re47JWE7JuDXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvQnRuV3JhcD5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGdvb2dsZUxvZ2luSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZ1wiO1xyXG5pbXBvcnQga2FrYW9Mb2dpbkltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMva2FrYW9fbG9naW5fYnV0dG9uLnBuZ1wiO1xyXG5cclxuY29uc3QgU2lnbkluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgJiAuTXVpQnV0dG9uLXJvb3Qge1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYDtcclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAjNjc2NzY3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2lnbkluQ29udGFpbmVyPlxyXG4gICAgICA8VGl0bGVDb250YWluZXI+W+yekeydgOuhnOqzoF0g64uk7J2MIOqzhOygleycvOuhnCDroZzqt7jsnbg8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICA8YSBocmVmPVwiL2F1dGgvZ29vZ2xlXCI+XHJcbiAgICAgICAgPFN0eWxlZEJ1dHRvbiBpbWFnZT17Z29vZ2xlTG9naW5JbWFnZX0gLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBocmVmPVwiL2F1dGgva2FrYW9cIj5cclxuICAgICAgICA8U3R5bGVkQnV0dG9uIGltYWdlPXtrYWthb0xvZ2luSW1hZ2V9IC8+IFxyXG4gICAgICA8L2E+XHJcbiAgICA8L1NpZ25JbkNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBHTkIgZnJvbSBcIi4uL2NvbXBvbmVudC9HTkJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQlBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxHTkIgLz47XHJcbn1cclxuIiwiaW1wb3J0IEdOQkNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0dOQkNvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR05CUGFnZSgpIHtcclxuICByZXR1cm4gPEdOQkNvbnRhaW5lciAvPjtcclxufVxyXG4iLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCxcclxuICAgIEF2YXRhciwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSwgQ2FyZEFjdGlvbnN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYXZvcml0ZSBhcyBGYXZvcml0ZUljb24sIFNoYXJlIGFzIFNoYXJlSWNvbiwgTW9yZVZlcnQgYXMgTW9yZVZlcnRJY29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XHJcblxyXG4vL3Rlc3Qg7KSRXHJcbmltcG9ydCB7Y2FsbEFwaVNjcmFwfSBmcm9tICcuLi8uLi9jb21tb24vYXBpJztcclxuXHJcbmNvbnN0IFN0eWxlZENhcmQgPSBzdHlsZWQoQ2FyZClgXHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XHJcbiAgJjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoMCwwLDAsLjEpLCAwcHggMnB4IDNweCByZ2JhKDAsMCwwLC4xMiksIDBweCAxcHggM3B4IHJnYmEoMCwwLDAsLjE0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEJvdHRvbUljb25zV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgd2lkdGg6IDMzMCxcclxuICAgICAgbWluV2lkdGg6IDMzMCxcclxuICAgICAgaGVpZ2h0OiA0NDAsXHJcbiAgICAgIG1hcmdpbjogXCIwIDdweFwiLFxyXG4gICAgfSxcclxuICAgIG1lZGlhOiB7XHJcbiAgICAgIGhlaWdodDogMCxcclxuICAgICAgcGFkZGluZ1RvcDogXCI2NiVcIiAvLyAxNjo5XHJcbiAgICB9LFxyXG4gICAgZGlzdGFuY2U6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxyXG4gICAgfVxyXG4gIH0pKTtcclxuLy8gaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkg66W8IOyeheugpeuwm+yVhCBDYXJk66W8IOumrO2EtO2VmOuKlCDsu7Ttj6zrhIztirgg7ZWo7IiYXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NDYXJkKCBwcm9wcyApIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHtpbWFnZSwgY2F0ZWdvcnksIHRpdGxlLCBkYXRlLCBhZGRyZXNzLCB0ZWwsIGRpc3R9ID0gcHJvcHM7XHJcbiAgICAvLyBkZXNjaXByaW9uIDEwMOq4gOyekCDsoJztlZwgKyDrp5DspITsnoTtkZxcclxuICAgIC8vIGNvbnN0IHN1YlN0cmluZyA9IChkZXNjLGNvdW50KSA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgZGVzYyA9PT0gXCJzdHJpbmdcIjtcclxuICAgIC8vICAgICByZXR1cm4gKGlzU3RyaW5nICYmIGRlc2MubGVuZ3RoID49IGNvdW50PyBkZXNjLnN1YnN0cmluZygwLGNvdW50KSArIFwiLi4uXCIgOiBkZXNjKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB0ZXN0XHJcbiAgICAvLyByZWR1eCDqtaztmIQg7ZuEIGFydGljbGUg66ek6rCc67OA7IiY66W8IHJlZHV4IHN0b3Jl66W8IO2Gte2VtCDsoJXtmZXtlZwg642w7J207YSw66GcIOuEmOqyqOykmOyVvO2VqFxyXG4gICAgY29uc3QgdGVzdEhhbmRsZU9uQ2xpY2tTY3JhcCA9IChhcnRpY2xlKSA9PiB7XHJcbiAgICAgIGNhbGxBcGlTY3JhcChhcnRpY2xlKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdHlsZWRDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwibmV3c1wiPlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5PyBjYXRlZ29yeS5zbGljZSgwLDIpIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGl0bGU9ezxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxyXG4gICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgIHthZGRyZXNzfTxici8+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAge2BURUwgLiR7dGVsfWB9PGJyLz5cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDxCb3R0b21JY29uc1dyYXA+XHJcbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiIG9uQ2xpY2s9e3Rlc3RIYW5kbGVPbkNsaWNrU2NyYXB9PlxyXG4gICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hhcmVcIj5cclxuICAgICAgICAgICAgICAgIDxTaGFyZUljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cImRpc3RhbmNlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRpc3RhbmNlfT5cclxuICAgICAgICAgICAgICAgIHtgJHtkaXN0LzEwMDB9a21gfVxyXG4gICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgIDwvQm90dG9tSWNvbnNXcmFwPlxyXG4gICAgICAgIDwvU3R5bGVkQ2FyZD5cclxuICAgICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgVGFicywgVGFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBwYXBlcjoge1xyXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIlxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBbXCLsoITssrRcIiwgXCLsoJXsuZhcIiwgXCLqsr3soJxcIiwgXCLsgqztmoxcIl07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBhcGVyIHNxdWFyZSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICA8VGFic1xyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgdmFyaWFudD1cInNjcm9sbGFibGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFRhYiBrZXk9e2lkeH0gbGFiZWw9e2l0ZW19IHN0eWxlPXt7Zm9udFNpemU6XCIxLjFyZW1cIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fS8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVGFicz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgd2lkdGg6IDIwMCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbm9WYWxpZGF0ZT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT1cIjIwMTctMDUtMjRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IHtvbkNsaWNrTG9jYXRpb259ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIHZhcmlhbnQ9J291dGxpbmVkJyBvbkNsaWNrPXtvbkNsaWNrTG9jYXRpb259Pu2YhOyerOychOy5mOyCrOyaqTwvQnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEl0ZW1DYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHtcclxuICBBcnJvd0JhY2tJb3NPdXRsaW5lZCxcclxuICBBcnJvd0ZvcndhcmRJb3NPdXRsaW5lZCxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBTbGlkZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTA1JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDUlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlICogLTM0NH1weDtcclxuICBwYWRkaW5nLWJvdHRvbTo1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbmA7XHJcbmNvbnN0IEFycm93Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgQXJyb3dIb3ZlckFjdGlvbiA9IGNzc2BcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiA4NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuNTU7XHJcbiAgICBib3gtc2hhZG93OiAxNnB4IDE4cHggMjhweCAtM3B4IHJnYmEoMTQzLCAxNDMsIDE0MywgMC43NSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQcmV2QXJyb3cgPSBzdHlsZWQuc3BhbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBjb2xvcjogI2MxYzFjMTtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gMCA6IDAuNzUpfTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA0NDBweDtcclxuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gLTEwIDogMTApfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gXCJcIiA6IEFycm93SG92ZXJBY3Rpb24pfTtcclxuYDtcclxuY29uc3QgTmV4dEFycm93ID0gc3R5bGVkKFByZXZBcnJvdylgXHJcbiAgJHsocHJvcHMpID0+IChwcm9wcy52aXNpYmxlID09PSBcIm5vbmVcIiA/IFwiXCIgOiBBcnJvd0hvdmVyQWN0aW9uKX07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcclxuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9wcztcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NhcmRzUGVyUGFnZSwgc2V0Q2FyZHNQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IG1heCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGl0ZW1zLmxlbmd0aCAtIDEsIFtpdGVtc10pO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0Q2FyZHNQZXJQYWdlKE1hdGguZmxvb3IoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC8gMzM3KSk7XHJcbiAgfSxbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXSk7ICBcclxuICBjb25zb2xlLmxvZyhpdGVtcy5sZW5ndGgpO1xyXG4gIGNvbnN0IG9uQ2xpY2tQcmV2ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSAtIGNhcmRzUGVyUGFnZSA+IDAgPyBhY3RpdmUgLSBjYXJkc1BlclBhZ2UgOiAwKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2xpY2tOZXh0ID0gKG1heCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSArIGNhcmRzUGVyUGFnZSA8IG1heCA/IGFjdGl2ZSArIGNhcmRzUGVyUGFnZSA6IG1heCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNsaWRlckNvbnRhaW5lciBkZXZpY2U9e1wid2ViXCJ9PlxyXG4gICAgICA8QXJyb3dDb250YWluZXIgZGV2aWNlPXtcIndlYlwifT5cclxuICAgICAgICA8UHJldkFycm93IHZpc2libGU9e2FjdGl2ZSA8PSAwID8gXCJub25lXCIgOiBcIlwifSBvbkNsaWNrPXtvbkNsaWNrUHJldn0+XHJcbiAgICAgICAgICA8QXJyb3dCYWNrSW9zT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDc1IH19IC8+XHJcbiAgICAgICAgPC9QcmV2QXJyb3c+XHJcbiAgICAgICAgPE5leHRBcnJvd1xyXG4gICAgICAgICAgdmlzaWJsZT17YWN0aXZlID49IG1heCgpID8gXCJub25lXCIgOiBcIlwifVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja05leHQobWF4KCkpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNzUgfX0gLz5cclxuICAgICAgICA8L05leHRBcnJvdz5cclxuICAgICAgPC9BcnJvd0NvbnRhaW5lcj5cclxuICAgICAgPENhcmRDb250YWluZXIgYWN0aXZlPXthY3RpdmV9IHBhZ2U9e2NhcmRzUGVyUGFnZX0+XHJcbiAgICAgICAgey8qIHRlc3ROZXdz64qUIOydtCDtm4Qgc2FnYS0+YXBpLT5zdG9yZSDrpbwg7Ya17ZW0IOyghOuLrOuQnCByZXNwb25zZeyXkCDrlLDrnbwg67OA6rK9Ki99XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8SXRlbUNhcmQga2V5PXtpbmRleH0gey4uLml0ZW19IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0NhcmRDb250YWluZXI+XHJcbiAgICA8L1NsaWRlckNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgdmFyaWFudD0nb3V0bGluZWQnPiBUT1VSIEFQSSBURVNUIDwvQnV0dG9uPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4uL2NvbXBvbmVudC9DYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxDYXRlZ29yeSAvPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRlIGZyb20gXCIuLi9jb21wb25lbnQvRGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUNvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPERhdGUgLz47XHJcbn1cclxuIiwiaW1wb3J0IExvY2F0aW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudC9Mb2NhdGlvbkJ1dHRvbic7XHJcbmltcG9ydCBUZXN0QVBJQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudC9UZXN0QVBJQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Z2V0VXNlcnNMb2NhdGlvbn0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcblxyXG5jb25zdCBUZXN0QnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbkNvbnRhaW5lcigpIHtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldFVzZXJzTG9jYXRpb24oKTtcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUZXN0QnV0dG9uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPExvY2F0aW9uQnV0dG9uIG9uQ2xpY2tMb2NhdGlvbj17Z2V0VXNlcnNMb2NhdGlvbn0vPlxyXG4gICAgICAgICAgICA8VGVzdEFQSUJ1dHRvbiAvPlxyXG4gICAgICAgIDwvVGVzdEJ1dHRvbnNDb250YWluZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudC9TbGlkZXInO1xyXG5cclxuY29uc3QgbmV3cyA9IFtcclxuICAgIHsgXHJcbiAgICAgICAgaW1hZ2U6XCJodHRwOi8vd3d3Lmppbmp1LmdvLmtyL0Ntc011bHRpRmlsZS92aWV3LmRvP211bHRpZmlsZUlkPU1GMDAwMDA1NDEmaWR4PTEzMzkxXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6XCLstpXsoJxcIiwgXHJcbiAgICAgICAgdGl0bGU6YOynhOyjvOuCqOqwleycoOuTsey2leygnGAsXHJcbiAgICAgICAgZGF0ZTogYDIwMjAvMTAvMTItMjAyMC8xMC8yMmAsXHJcbiAgICAgICAgYWRkcmVzczogXCLrjIDqtazqtJHsl63si5wg64+Z6rWsIOuPme2ZlOyCrDHquLggMVwiLFxyXG4gICAgICAgIHRlbDogXCIwNTMtOTgwLTc5MDBcIixcclxuICAgICAgICBkaXN0OjMwMCxcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICAgIGltYWdlOlwiaHR0cDovL3d3dy5qaW5qdS5nby5rci9DbXNNdWx0aUZpbGUvdmlldy5kbz9tdWx0aWZpbGVJZD1NRjAwMDAwNTQxJmlkeD0xMzM5MVwiLFxyXG4gICAgICAgIGNhdGVnb3J5Olwi7LaV7KCcXCIsIFxyXG4gICAgICAgIHRpdGxlOmDsp4Tso7zrgqjqsJXsnKDrk7HstpXsoJxgLFxyXG4gICAgICAgIGRhdGU6IGAyMDIwLzEwLzEyLTIwMjAvMTAvMjJgLFxyXG4gICAgICAgIGFkZHJlc3M6IFwi64yA6rWs6rSR7Jet7IucIOuPmeq1rCDrj5ntmZTsgqwx6ri4IDFcIixcclxuICAgICAgICB0ZWw6IFwiMDUzLTk4MC03OTAwXCIsXHJcbiAgICAgICAgZGlzdDozMDAsXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgICBpbWFnZTpcImh0dHA6Ly93d3cuamluanUuZ28ua3IvQ21zTXVsdGlGaWxlL3ZpZXcuZG8/bXVsdGlmaWxlSWQ9TUYwMDAwMDU0MSZpZHg9MTMzOTFcIixcclxuICAgICAgICBjYXRlZ29yeTpcIuy2leygnFwiLCBcclxuICAgICAgICB0aXRsZTpg7KeE7KO864Ko6rCV7Jyg65Ox7LaV7KCcYCxcclxuICAgICAgICBkYXRlOiBgMjAyMC8xMC8xMi0yMDIwLzEwLzIyYCxcclxuICAgICAgICBhZGRyZXNzOiBcIuuMgOq1rOq0keyXreyLnCDrj5nqtawg64+Z7ZmU7IKsMeq4uCAxXCIsXHJcbiAgICAgICAgdGVsOiBcIjA1My05ODAtNzkwMFwiLFxyXG4gICAgICAgIGRpc3Q6MzAwLFxyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgICAgaW1hZ2U6XCJodHRwOi8vd3d3Lmppbmp1LmdvLmtyL0Ntc011bHRpRmlsZS92aWV3LmRvP211bHRpZmlsZUlkPU1GMDAwMDA1NDEmaWR4PTEzMzkxXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6XCLstpXsoJxcIiwgXHJcbiAgICAgICAgdGl0bGU6YOynhOyjvOuCqOqwleycoOuTsey2leygnGAsXHJcbiAgICAgICAgZGF0ZTogYDIwMjAvMTAvMTItMjAyMC8xMC8yMmAsXHJcbiAgICAgICAgYWRkcmVzczogXCLrjIDqtazqtJHsl63si5wg64+Z6rWsIOuPme2ZlOyCrDHquLggMVwiLFxyXG4gICAgICAgIHRlbDogXCIwNTMtOTgwLTc5MDBcIixcclxuICAgICAgICBkaXN0OjMwMCxcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICAgIGltYWdlOlwiaHR0cDovL3d3dy5qaW5qdS5nby5rci9DbXNNdWx0aUZpbGUvdmlldy5kbz9tdWx0aWZpbGVJZD1NRjAwMDAwNTQxJmlkeD0xMzM5MVwiLFxyXG4gICAgICAgIGNhdGVnb3J5Olwi7LaV7KCcXCIsIFxyXG4gICAgICAgIHRpdGxlOmDsp4Tso7zrgqjqsJXsnKDrk7HstpXsoJxgLFxyXG4gICAgICAgIGRhdGU6IGAyMDIwLzEwLzEyLTIwMjAvMTAvMjJgLFxyXG4gICAgICAgIGFkZHJlc3M6IFwi64yA6rWs6rSR7Jet7IucIOuPmeq1rCDrj5ntmZTsgqwx6ri4IDFcIixcclxuICAgICAgICB0ZWw6IFwiMDUzLTk4MC03OTAwXCIsXHJcbiAgICAgICAgZGlzdDozMDAsXHJcbiAgICB9LFxyXG5dXHJcbi8vIOuNlOuvuOuNsOydtO2EsCDribTsiqRcclxuY29uc3QgdGVzdE5ld3MgPSBbLi4ubmV3cywgLi4ubmV3cywgLi4ubmV3cy5zbGljZSgwLDIpXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlckNvbnRhaW5lcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGVyIGl0ZW1zPXt0ZXN0TmV3c30vPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IENhdGVnb3J5Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXJcIjtcclxuaW1wb3J0IERhdGVDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9EYXRlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMb2NhdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0xvY2F0aW9uQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTbGlkZXJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9TbGlkZXJDb250YWluZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxuYDtcclxuY29uc3QgRmlsdGVyV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbmA7XHJcbi8vIGNvbnN0IENvbnRlbnRzV3JhcCA9IHN0eWxlZC5kaXZgXHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBoZWlnaHQ6IDQ0MHB4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgey8qIDxDb250ZW50c1dyYXA+XHJcbiAgICAgICAgPFNsaWRlckNvbnRhaW5lciAvPlxyXG4gICAgICA8L0NvbnRlbnRzV3JhcD4gKi99XHJcbiAgICAgIDxGaWx0ZXJXcmFwPlxyXG4gICAgICAgIDxMb2NhdGlvbkNvbnRhaW5lciAvPlxyXG4gICAgICA8L0ZpbHRlcldyYXA+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGVfbG9naW5fYnV0dG9uLjFjZTFhYWE1YTEyN2ZhM2U0OTJhMTJiYjYyZjk5MzA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJrYWthb19sb2dpbl9idXR0b24uYWQ1YjIwMDNhZDM4MThiNzhmOTA5NDRhMTg3M2RiNGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImxvZ28uZDg1ZDFkYmNlZmQ5NzMyOGIyYWIyMDA5NzUzYmJhMjkucG5nXCI7IiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuXHJcbi8vIHN0b3JlIENvbnRleHRBUEnroZwg6rCQ7Iu46riwXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xyXG4iLCJpbXBvcnQgSWNvbkJveCBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50L0ljb24nO1xyXG5cclxuY29uc3QgY29ycHMgPSBbXCJnb29nbGVcIixcImRvbmdhXCIsXCJoYW5pXCIsXCJzYnNcIixcInNlZ3llXCJdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JwQ2F0ZWdvcnkoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2NvcnBzLm1hcCgoY29ycCxpbmRleCkgPT4gXHJcbiAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIDxJY29uQm94IFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICBzaXplPVwiMTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtjb3JwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBWaWV3VHlwZUJ0biBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZUJ0blwiO1xyXG5pbXBvcnQgVmlld1R5cGVQYWdlIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgdGl0bGU6IFwi66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAuLi4g66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAg66eI7Iqk7YGsIO2SiOygiCDrjIDrnoBcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi7KGw7ISg7J2867O0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQ7IS87YSwIOychOyepe2VnCDqs7XqsqnsnpDrk6Qg7KO87J2Y67O0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG5dO1xyXG4vLyBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9AcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXHJcbi8vIOyalOq4sOyalCDrlLDrnbztlZjsnpBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NMaXN0KCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFZpZXdUeXBlQnRuIC8+XHJcbiAgICAgIDxWaWV3VHlwZVBhZ2UgZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IENvcnBDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnQvQ29ycENhdGVnb3J5JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JwQ2F0ZWdvcnlDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPENvcnBDYXRlZ29yeSAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgTmV3c0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9OZXdzTGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPE5ld3NMaXN0IC8+O1xyXG59XHJcbiIsImltcG9ydCBDb3JwQ2F0ZWdvcnlDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Db3JwQ2F0ZWdvcnlDb250YWluZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5ld3NDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9OZXdzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7LyogPENvcnBDYXRlZ29yeUNvbnRhaW5lciAvPiAqL31cclxuICAgICAgPE5ld3NDb250YWluZXIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUGFwZXIsIEZvcm1Db250cm9sLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFZpZXdUeXBlUGFnZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZVBhZ2VcIjtcclxuaW1wb3J0IFZpZXdUeXBlQnRuIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7zrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7xcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuyhsOyEoOydvOuztFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNjE1MzM0Xzk1NTUuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIu2MlOuhnOybjCDrp47snYAg6rOE7KCVIOuFuOumrOuKlCDqs7XqsqksIOyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQIOyEvO2EsOyduCDsspkg6rCA7J6lIOqzteqyqSDshLHqs7XrpaAg7KKL7J2AIO2OuC4uLuusuOuyleqzvCDssqDsnpAg7Jik66WYIOycoOydmO2VnOuLpOuptCDslrTripAg7KCV64+EIOuwqeyWtCDqsIDriqVcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNmNjNiZlwiLFxyXG4gICAgYm9yZGVyQ29sb3I6IFwiIzNmNjNiZlwiLFxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpbjogNCxcclxuICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyOiAwO1xyXG5cclxuICAmIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52YWx1ZSAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzNmNjNiZjtcclxuICAgIGB9XHJcbmA7XHJcblxyXG5jb25zdCBGaWx0ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHRhYiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUodGFiID09PSBcInNjcmFwXCIgPyAwIDogMSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW1wic2NyYXBcIiwgXCJjb21tZW50XCJdO1xyXG4gIGNvbnN0IG9yZGVyTGlzdCA9IFtcInB1c2hcIiwgXCJsYXRlc3RcIiwgXCJjb21tZW50c1wiXTtcclxuICAvL+uLtOydgCDsiJwsIOy1nOyLoCDsiJwsIOuMk+q4gCDrp47snYAg7IicXHJcblxyXG4gIGNvbnN0IG1ha2VTZWxlY3QgPSAoc2VsZWN0TGlzdCwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgIDxTZWxlY3QgbmF0aXZlIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICB7c2VsZWN0TGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cclxuICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSA9PT0gdGFiKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51QnRuIGtleT17aWR4fSB2YWx1ZT17aXRlbSA9PT0gdGFiID8gMSA6IDB9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3VzZXIvJHtpdGVtfWB9PntpdGVtfTwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51QnRuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9NZW51Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGaWx0ZXJXcmFwPlxyXG4gICAgICAgICAgPFZpZXdUeXBlQnRuIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bWFrZVNlbGVjdChbXCLsobDshKBcIiwgXCLspJHslZlcIl0sIG9yZGVyKX1cclxuICAgICAgICAgICAge21ha2VTZWxlY3Qob3JkZXJMaXN0LCBvcmRlcil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZpbHRlcldyYXA+XHJcbiAgICAgICAgPFZpZXdUeXBlUGFnZSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgVXNlciBmcm9tIFwiLi4vY29tcG9uZW50L1VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDb250YWluZXIoeyB0YWIgfSkge1xyXG4gIHJldHVybiA8VXNlciB0YWI9e3RhYn0gLz47XHJcbn1cclxuIiwiaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZSh7IG1hdGNoIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxVc2VyQ29udGFpbmVyIHRhYj17bWF0Y2gucGFyYW1zLnRhYn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=