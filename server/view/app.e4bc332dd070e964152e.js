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
/*! exports provided: callApiScrap, callApiSearchByKeyword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApiScrap", function() { return callApiScrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApiSearchByKeyword", function() { return callApiSearchByKeyword; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // test용 데이터

var dumyArticle = {
  title: "뉴스1",
  images: "image",
  content: "content",
  category: "category",
  corp: "google",
  published: "2020-01-01",
  // date타입 server로 이동 후 타입 변환 주의
  createAt: new Date()
};
var axiosConfig = {
  baseURL: 'http://localhost:8000'
};
var data = {
  article: dumyArticle
};
function callApiScrap(article) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/scrap", data, axiosConfig);
}
;
function callApiSearchByKeyword(keyword) {
  if (!keyword) return;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/news/search/".concat(keyword));
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_component_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/component/Modal */ "./src/common/component/Modal.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ "./node_modules/@material-ui/icons/PhotoCamera.js");
/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Signin */ "./src/gnb/component/Signin.js");
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

  var handleClickLoginModal = function handleClickLoginModal() {
    setLoginModal(!loginModal);
  };

  var handleClickInfoModal = function handleClickInfoModal() {
    setInfoModal(!infoModal);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, login ? /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "primary",
    component: "span",
    onClick: handleClickInfoModal
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], null)) : /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: handleClickLoginModal
  }, "\uB85C\uADF8\uC778 / \uAC00\uC785"), loginModal && /*#__PURE__*/React.createElement(_common_component_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    on: loginModal,
    onClickClose: handleClickLoginModal
  }, /*#__PURE__*/React.createElement(_Signin__WEBPACK_IMPORTED_MODULE_7__["default"], null)), infoModal && /*#__PURE__*/React.createElement(_common_component_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    on: infoModal,
    onClickClose: handleClickInfoModal
  }, /*#__PURE__*/React.createElement(UserContainer, null, /*#__PURE__*/React.createElement(UserInner, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], null), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: "primary",
    component: "span"
  }, /*#__PURE__*/React.createElement(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_6___default.a, null))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, "email")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/React.createElement(Menu, {
    color: "primary"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/user/scrap"
  }, "\uC2A4\uD06C\uB7A9")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/React.createElement(Menu, {
    color: "primary"
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/user/comment"
  }, "\uB0B4 \uB313\uAE00")), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], null), /*#__PURE__*/React.createElement(BtnWrap, null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outlined",
    color: "primary"
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
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
  var handleKakao = function handleKakao() {
    console.log("kakao"); // axios.get("/api").then((res) => console.log(res));

    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:8000/auth/kakao", {
      credentials: true
    }).then(function (res) {
      return console.log(res);
    });
  };

  return /*#__PURE__*/React.createElement(SignInContainer, null, /*#__PURE__*/React.createElement(TitleContainer, null, "[\uC791\uC740\uB85C\uACE0] \uB2E4\uC74C \uACC4\uC815\uC73C\uB85C \uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(StyledButton, {
    image: _images_google_login_button_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(StyledButton, {
    image: _images_kakao_login_button_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    onClick: handleKakao
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
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
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
  }; // test
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
    "aria-label": "add to favorites",
    onClick: testHandleOnClickScrap
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




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
function Search(props) {
  var classes = useStyles();
  var onSearch = props.onSearch;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var handleOnChangeText = function handleOnChangeText(e) {
    e.preventDefault();
    setText(e.target.value);
  };

  var handleSubmitSearchs = function handleSubmitSearchs(e) {
    e.preventDefault();
    onSearch(text).then(function (response, error) {
      console.log(JSON.stringify(response.data));
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    component: "form",
    className: classes.root,
    elevation: 3
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputBase"], {
    className: classes.input,
    placeholder: "Search",
    onChange: handleOnChangeText,
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    type: "submit",
    className: classes.iconButton,
    "aria-label": "search",
    onClick: handleSubmitSearchs
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
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");



function SearchContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Search__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onSearch: _common_api__WEBPACK_IMPORTED_MODULE_2__["callApiSearchByKeyword"]
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb21wb25lbnQvQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9wYWdlL0NoYXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9kb25nYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZXMvZ29vZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9oYW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9zYnMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzL3NlZ3llLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsL2NvbXBvbmVudC9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29tcG9uZW50L0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29udGFpbmVyL0FydGljbGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9wYWdlL0RldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvR05CLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L0xvZ2luQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ25iL2NvbnRhaW5lci9HTkJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9wYWdlL0dOQlBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9EYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL0RhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL1NlYXJjaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL3BhZ2UvSG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2tha2FvX2xvZ2luX2J1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29tcG9uZW50L0NvcnBDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvTmV3c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld3MvY29udGFpbmVyL0NvcnBDYXRlZ29yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb250YWluZXIvTmV3c0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9wYWdlL05ld3NQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbXBvbmVudC9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyL3BhZ2UvVXNlclBhZ2UuanMiXSwibmFtZXMiOlsiY3VzdG9tSGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInJlc2V0IiwiQXBwQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQXBwIiwiVXNlclBhZ2UiLCJEZXRhaWxQYWdlIiwiQ2hhdFBhZ2UiLCJOZXdzUGFnZSIsIkhvbWVQYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInBhcGVyIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJoZWFkZXIiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZsZXgiLCJjb250ZW50cyIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImZvcm0iLCJpbnB1dEJhc2UiLCJpY29uIiwiQ2hhdEJ0biIsIkljb25CdXR0b24iLCJDaGF0IiwidmlzdWFsIiwiaGFuZGxlQ2xpY2siLCJjbGFzc2VzIiwiaWNvbkJ1dHRvbiIsIkNoYXRDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNldFZpc3VhbCIsImR1bXlBcnRpY2xlIiwidGl0bGUiLCJpbWFnZXMiLCJjb250ZW50IiwiY2F0ZWdvcnkiLCJjb3JwIiwicHVibGlzaGVkIiwiY3JlYXRlQXQiLCJEYXRlIiwiYXhpb3NDb25maWciLCJiYXNlVVJMIiwiZGF0YSIsImFydGljbGUiLCJjYWxsQXBpU2NyYXAiLCJheGlvcyIsInBvc3QiLCJjYWxsQXBpU2VhcmNoQnlLZXl3b3JkIiwia2V5d29yZCIsImdldCIsIkZvb3RlckNvbnRhaW5lciIsImZvb3RlciIsIkljb25Db250YWluZXIiLCJJbmZvV3JhcCIsIkZvb3RlciIsImdldEZ1bGxZZWFyIiwiZ2V0VVJMIiwiaWNvbk5hbWUiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJnb29nbGUiLCJnb29nbGVJY29uIiwiZG9uZ2EiLCJkb25nYUljb24iLCJoYW5pIiwiaGFuaUljb24iLCJzYnMiLCJzYnNJY29uIiwic2VneWUiLCJzZWd5ZUljb24iLCJJY29uQm94IiwicHJvcHMiLCJzaXplIiwibWFyZ2luIiwibmFtZSIsIkljb25Db21wb25lbnQiLCJob3ZlckFjdGlvbiIsInJlc3QiLCJNb2RhbENvbnRhaW5lciIsIm9uIiwiTW9kYWxCb3giLCJFeGl0V3JhcCIsIk1vZGFsIiwib25DbGlja0Nsb3NlIiwiY2hpbGRyZW4iLCJUb2dnbGVCdG4iLCJUb2dnbGVCdXR0b24iLCJWaWV3QnV0dG9uIiwidmlldyIsInNldFZpZXciLCJoYW5kbGVWaWV3IiwiZXZlbnQiLCJuZXdWaWV3IiwicGF0aCIsIndpdGhSb3V0ZXIiLCJyb290IiwibWF4V2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIm1lZGlhIiwibGlzdCIsImlubGluZSIsImltZyIsIm1hcmdpblJpZ2h0IiwibGlzdEl0ZW0iLCJEZXNjcmlwdGlvbldyYXAiLCJMaXN0QWN0aW9uc1dyYXAiLCJMaXN0VmlldyIsInRlc3RIYW5kbGVPbkNsaWNrU2NyYXAiLCJlcnIiLCJtYXAiLCJuZXdzIiwiaWR4IiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImlkIiwiQ2FyZFZpZXciLCJDb250ZW50c0NvbnRhaW5lciIsImNzcyIsIlZpZXdUeXBlUGFnZSIsImxvY2F0aW9uIiwicXVlcnkiLCJxcyIsInBhcnNlIiwic2VhcmNoIiwiaWdub3JlUXVlcnlQcmVmaXgiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGF0aG5hbWUiLCJBcmljbGVDb250YWluZXIiLCJQYXBlciIsIkRldGFpbCIsIkNvbW1lbnRzV3JhcCIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsIlN0eWxlZFRleHRGaWVsZCIsIlRleHRGaWVsZCIsIklucHV0RGF0YXMiLCJDaGFyYWN0ZXJzIiwiY29sb3IiLCJBY3Rpb25zV3JhcCIsIlNjcmFwQnV0dG9uIiwiQ29tbWVudHMiLCJSZWFjdCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VuZGFibGUiLCJzZXRTZW5kYWJsZSIsIm9uU2NyYXAiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiQXJ0aWNsZUNvbnRhaW5lciIsImZpbmQiLCJpdGVtIiwicGFyc2VJbnQiLCJEZXRhaWxQYWdlQ29udGFpbmVyIiwic2VjdGlvbiIsInBhcmFtcyIsIkNvbnRhaW5lciIsIm5hdiIsIklubmVyIiwiUmlnaHRJdGVtIiwidWwiLCJMb2dvIiwiR05CIiwiTG9nb0ltYWdlIiwiVXNlckNvbnRhaW5lciIsIlVzZXJJbm5lciIsIk1lbnUiLCJCdG5XcmFwIiwiTG9naW4iLCJsb2dpbiIsInNldExvZ2luIiwibG9naW5Nb2RhbCIsInNldExvZ2luTW9kYWwiLCJpbmZvTW9kYWwiLCJzZXRJbmZvTW9kYWwiLCJoYW5kbGVDbGlja0xvZ2luTW9kYWwiLCJoYW5kbGVDbGlja0luZm9Nb2RhbCIsIlNpZ25JbkNvbnRhaW5lciIsIlRpdGxlQ29udGFpbmVyIiwiU2lnbkluIiwiaGFuZGxlS2FrYW8iLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJnb29nbGVMb2dpbkltYWdlIiwia2FrYW9Mb2dpbkltYWdlIiwiR05CUGFnZSIsIlN0eWxlZENhcmQiLCJDYXJkIiwidGhlbWUiLCJtaW5XaWR0aCIsInBhZGRpbmdUb3AiLCJhdmF0YXJSZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZWQiLCJOZXdzQ2FyZCIsIm9yaWdpbmFsTGluayIsImRhdGUiLCJjb21wYW55Iiwic3ViU3RyaW5nIiwiZGVzYyIsImNvdW50IiwiaXNTdHJpbmciLCJzdWJzdHJpbmciLCJhdmF0YXIiLCJzbGljZSIsIkNhdGVnb3J5Iiwic2V0VmFsdWUiLCJjYXRlZ29yeUxpc3QiLCJuZXdWYWx1ZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbnRhaW5lciIsImZsZXhXcmFwIiwidGV4dEZpZWxkIiwic2hyaW5rIiwiaW5wdXQiLCJtYXJnaW5MZWZ0IiwiU2VhcmNoIiwib25TZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsImhhbmRsZU9uQ2hhbmdlVGV4dCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Ym1pdFNlYXJjaHMiLCJyZXNwb25zZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIlNsaWRlckNvbnRhaW5lciIsImRldmljZSIsIkNhcmRDb250YWluZXIiLCJhY3RpdmUiLCJBcnJvd0NvbnRhaW5lciIsIkFycm93SG92ZXJBY3Rpb24iLCJQcmV2QXJyb3ciLCJzcGFuIiwidmlzaWJsZSIsIk5leHRBcnJvdyIsIlNsaWRlciIsImNhcmRXaWR0aCIsIm1heCIsInVzZUNhbGxiYWNrIiwic2V0QWN0aXZlIiwiY2FyZENvbnRhaW5lclJlZiIsInVzZVJlZiIsIm9uQ2xpY2tQcmV2Iiwib25DbGlja05leHQiLCJpbmRleCIsIkNhdGVnb3J5Q29udGFpbmVyIiwiRGF0ZUNvbnRhaW5lciIsIlNlYXJjaENvbnRhaW5lciIsInRlc3ROZXdzIiwiRmlsdGVyV3JhcCIsIkNvbnRlbnRzV3JhcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvcnBzIiwiQ29ycENhdGVnb3J5IiwiTmV3c0xpc3QiLCJDb3JwQ2F0ZWdvcnlDb250YWluZXIiLCJOZXdzQ29udGFpbmVyIiwiYm9yZGVyQ29sb3IiLCJmb3JtQ29udHJvbCIsIk1lbnVDb250YWluZXIiLCJNZW51QnRuIiwiYnV0dG9uIiwiVXNlciIsInRhYiIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckxpc3QiLCJtYWtlU2VsZWN0Iiwic2VsZWN0TGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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QUFDQyxHQUFSLENBQVlrRyxJQUFJLEtBQUt3SCxHQUFyQjtBQUNBLHdCQUNFLG9CQUFDLE9BQUQ7QUFBUyxTQUFHLEVBQUVySyxHQUFkO0FBQW1CLFdBQUssRUFBRTZDLElBQUksS0FBS3dILEdBQVQsR0FBZSxDQUFmLEdBQW1CO0FBQTdDLG9CQUNFLG9CQUFDLHFEQUFEO0FBQU0sUUFBRSxrQkFBV3hILElBQVg7QUFBUixPQUE0QkEsSUFBNUIsQ0FERixDQURGO0FBS0QsR0FUQSxDQURILENBREYsZUFhRSw4Q0FDRSxvQkFBQyxVQUFELHFCQUNFLG9CQUFDLHFFQUFELE9BREYsZUFFRSxpQ0FDRzRILFVBQVUsQ0FBQyxDQUFDLElBQUQsRUFBTyxJQUFQLENBQUQsRUFBZUgsS0FBZixDQURiLEVBRUdHLFVBQVUsQ0FBQ0QsU0FBRCxFQUFZRixLQUFaLENBRmIsQ0FGRixDQURGLGVBUUUsb0JBQUMsc0VBQUQ7QUFBYyxRQUFJLEVBQUU1TztBQUFwQixJQVJGLENBYkYsQ0FERjtBQTBCRCxDOzs7Ozs7Ozs7Ozs7O0FDOUpEO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU2dJLGFBQVQsT0FBZ0M7QUFBQSxNQUFQMkcsR0FBTyxRQUFQQSxHQUFPO0FBQzdDLHNCQUFPLG9CQUFDLHVEQUFEO0FBQU0sT0FBRyxFQUFFQTtBQUFYLElBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0FBQUE7QUFFZSxTQUFTMVIsUUFBVCxPQUE2QjtBQUFBLE1BQVRpRSxLQUFTLFFBQVRBLEtBQVM7QUFDMUMsc0JBQ0Usa0RBQ0Usb0JBQUMsZ0VBQUQ7QUFBZSxPQUFHLEVBQUVBLEtBQUssQ0FBQ3FHLE1BQU4sQ0FBYW9IO0FBQWpDLElBREYsQ0FERjtBQUtELEMiLCJmaWxlIjoiYXBwLmU0YmMzMzJkZDA3MGU5NjQxNTJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQ2hhdFBhZ2UgZnJvbSBcIi4vY2hhdC9wYWdlL0NoYXRQYWdlXCI7XHJcbmltcG9ydCBOZXdzUGFnZSBmcm9tIFwiLi9uZXdzL3BhZ2UvTmV3c1BhZ2VcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWUvcGFnZS9Ib21lUGFnZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gXCJoaXN0b3J5XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHJlc2V0IGZyb20gXCJzdHlsZWQtcmVzZXRcIjtcclxuaW1wb3J0IEdOQlBhZ2UgZnJvbSBcIi4vZ25iL3BhZ2UvR05CUGFnZVwiO1xyXG5pbXBvcnQgRGV0YWlsUGFnZSBmcm9tIFwiLi9kZXRhaWwvcGFnZS9EZXRhaWxQYWdlXCI7XHJcbmltcG9ydCBVc2VyUGFnZSBmcm9tIFwiLi91c2VyL3BhZ2UvVXNlclBhZ2VcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbW1vbi9jb21wb25lbnQvTW9kYWxcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21tb24vY29tcG9uZW50L0Zvb3RlclwiO1xyXG5cclxuLy8gbG9naW4gdGVzdFxyXG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL2duYi9jb21wb25lbnQvU2lnbmluXCI7XHJcblxyXG5jb25zdCBjdXN0b21IaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAke3Jlc2V0fTtcclxuICAqIHtcclxuICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcclxuICB9XHJcbiAgc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICB9XHJcblxyXG5gO1xyXG5cclxuY29uc3QgQXBwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcbi8vIHJvdXRlclxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcENvbnRhaW5lcj5cclxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2N1c3RvbUhpc3Rvcnl9PlxyXG4gICAgICAgICAgPEdOQlBhZ2UgLz5cclxuICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXIvOnRhYlwiIGNvbXBvbmVudD17VXNlclBhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2RldGFpbFwiIGNvbXBvbmVudD17RGV0YWlsUGFnZX0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2hhdFwiIGNvbXBvbmVudD17Q2hhdFBhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3MvOmlkXCIgY29tcG9uZW50PXtEZXRhaWxQYWdlfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdzXCIgY29tcG9uZW50PXtOZXdzUGFnZX0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgPENoYXRQYWdlIC8+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICAgIDwvQXBwQ29udGFpbmVyPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBQYXBlciwgSW5wdXRCYXNlLCBJY29uQnV0dG9uLCBab29tIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlbmRcIjtcclxuaW1wb3J0IEF0dGFjaEZpbGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXR0YWNoRmlsZVwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IENoYXRCdWJibGVPdXRsaW5lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoYXRCdWJibGVPdXRsaW5lXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBwYXBlcjoge1xyXG4gICAgekluZGV4OiA5OTk4LFxyXG4gICAgd2lkdGg6IDM2MCxcclxuICAgIGhlaWdodDogNTAwLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgIGJvdHRvbTogMzAsXHJcbiAgICByaWdodDogMzAsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGhlaWdodDogNjAsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIFwiJiBzcGFuXCI6IHtcclxuICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50czoge1xyXG4gICAgZmxleDogMSxcclxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICBoZWlnaHQ6IDU3LFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgfSxcclxuICBpbnB1dEJhc2U6IHtcclxuICAgIGZsZXg6IDEsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogXCI4MCVcIixcclxuICAgIGhlaWdodDogXCI4MCVcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IENoYXRCdG4gPSBzdHlsZWQoSWNvbkJ1dHRvbilgXHJcbiAgJi5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XHJcbiAgICAmLk11aUJ1dHRvbkJhc2Utcm9vdDpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCh7IHZpc3VhbCwgaGFuZGxlQ2xpY2sgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gdmlzdWFsID8gKFxyXG4gICAgPFpvb20gaW49e3Zpc3VhbH0+XHJcbiAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgICAgIDxzcGFuPuywuOyXrOyduOybkDwvc3Bhbj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfT48L2Rpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEF0dGFjaEZpbGVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJhc2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi66mU7IS47KeA66W8IOyeheugpe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8U2VuZEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L1pvb20+XHJcbiAgKSA6IChcclxuICAgIDxDaGF0QnRuIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgIDxDaGF0QnViYmxlT3V0bGluZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XHJcbiAgICA8L0NoYXRCdG4+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4uL2NvbXBvbmVudC9DaGF0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Q29udGFpbmVyKCkge1xyXG4gIGNvbnN0IFt2aXN1YWwsIHNldFZpc3VhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXN1YWwoIXZpc3VhbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxDaGF0IHZpc3VhbD17dmlzdWFsfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+O1xyXG59XHJcbiIsImltcG9ydCBDaGF0Q29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQ2hhdENvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxDaGF0Q29udGFpbmVyIC8+O1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuLy8gdGVzdOyaqSDrjbDsnbTthLBcclxuY29uc3QgZHVteUFydGljbGUgPSB7XHJcbiAgdGl0bGU6IFwi64m07IqkMVwiLFxyXG4gIGltYWdlczogXCJpbWFnZVwiLFxyXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxyXG4gIGNhdGVnb3J5OiBcImNhdGVnb3J5XCIsXHJcbiAgY29ycDogXCJnb29nbGVcIixcclxuICBwdWJsaXNoZWQ6IFwiMjAyMC0wMS0wMVwiLFxyXG4gIC8vIGRhdGXtg4DsnoUgc2VydmVy66GcIOydtOuPmSDtm4Qg7YOA7J6FIOuzgO2ZmCDso7zsnZhcclxuICBjcmVhdGVBdDogbmV3IERhdGUoKSxcclxufVxyXG5jb25zdCBheGlvc0NvbmZpZyA9IHtcclxuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyxcclxufTtcclxuY29uc3QgZGF0YSA9IHtcclxuICAgIGFydGljbGUgOiBkdW15QXJ0aWNsZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEFwaVNjcmFwKGFydGljbGUpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL3NjcmFwXCIsIGRhdGEsIGF4aW9zQ29uZmlnKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQXBpU2VhcmNoQnlLZXl3b3JkKGtleXdvcmQpIHtcclxuICBpZigha2V5d29yZCkgcmV0dXJuO1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9uZXdzL3NlYXJjaC8ke2tleXdvcmR9YCk7XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcclxuXHJcbi8vIGZvb3Rlcuy7qO2FjOydtOuEiCAxMDB2dyDroZwgd2lkdGjshKTsoJXtlZjrqbQg7Iqk7YGs66Gk67Cc7IOdXHJcbmNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wIDogMjAwcHg7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDsgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbmA7XHJcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgfVxyXG5gO1xyXG5jb25zdCBJbmZvV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvb3RlckNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEljb25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDrqZTsnbwg7JWE7J207L2YICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDsubTsubTsmKQg7JWE7J207L2YICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgIHZpZXdCb3g9XCIwIDAgMjA4IDE5MS45NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTEwNCwwQzQ2LjU2LDAsMCwzNi43MSwwLDgyYzAsMjkuMjgsMTkuNDcsNTUsNDguNzUsNjkuNDgtMS41OSw1LjQ5LTEwLjI0LDM1LjM0LTEwLjU4LDM3LjY5LDAsMC0uMjEsMS43Ni45MywyLjQzYTMuMTQsMy4xNCwwLDAsMCwyLjQ4LjE1YzMuMjgtLjQ2LDM4LTI0LjgxLDQ0LTI5QTEzMS41NiwxMzEuNTYsMCwwLDAsMTA0LDE2NGM1Ny40NCwwLDEwNC0zNi43MSwxMDQtODJTMTYxLjQ0LDAsMTA0LDBaTTUyLjUzLDY5LjI3Yy0uMTMsMTEuNi4xLDIzLjgtLjA5LDM1LjIyLS4wNiwzLjY1LTIuMTYsNC43NC01LDUuNzhhMS44OCwxLjg4LDAsMCwxLTEsLjA3Yy0zLjI1LS42NC01Ljg0LTEuOC01LjkyLTUuODQtLjIzLTExLjQxLjA3LTIzLjYzLS4wOS0zNS4yMy0yLjc1LS4xMS02LjY3LjExLTkuMjIsMC0zLjU0LS4yMy02LTIuNDgtNS44NS01LjgzczEuOTQtNS43Niw1LjkxLTUuODJjOS4zOC0uMTQsMjEtLjE0LDMwLjM4LDAsNCwuMDYsNS43OCwyLjQ4LDUuOSw1Ljgycy0yLjMsNS42LTUuODMsNS44M0M1OS4yLDY5LjM4LDU1LjI5LDY5LjE2LDUyLjUzLDY5LjI3Wm01MC40LDQwLjQ1YTkuMjQsOS4yNCwwLDAsMS0zLjgyLjgzYy0yLjUsMC00LjQxLTEtNS0yLjY1bC0zLTcuNzhINzIuODVsLTMsNy43OGMtLjU4LDEuNjMtMi40OSwyLjY1LTUsMi42NWE5LjE2LDkuMTYsMCwwLDEtMy44MS0uODNjLTEuNjYtLjc2LTMuMjUtMi44Ni0xLjQzLTguNTJMNzQsNjMuNDJhOSw5LDAsMCwxLDgtNS45Miw5LjA3LDkuMDcsMCwwLDEsOCw1LjkzbDE0LjM0LDM3Ljc2QzEwNi4xNywxMDYuODYsMTA0LjU4LDEwOSwxMDIuOTMsMTA5LjcyWm0zMC4zMiwwSDExNGE1LjY0LDUuNjQsMCwwLDEtNS43NS01LjVWNjMuNWE2LjEzLDYuMTMsMCwwLDEsMTIuMjUsMFY5OC43NWgxMi43NWE1LjUxLDUuNTEsMCwxLDEsMCwxMVptNDctNC41MkE2LDYsMCwwLDEsMTY5LjQ5LDEwOEwxNTUuNDIsODkuMzdsLTIuMDgsMi4wOHYxMy4wOWE2LDYsMCwwLDEtMTIsMHYtNDFhNiw2LDAsMCwxLDEyLDBWNzYuNGwxNi43NC0xNi43NGE0LjY0LDQuNjQsMCwwLDEsMy4zMy0xLjM0LDYuMDgsNi4wOCwwLDAsMSw1LjksNS41OEE0LjcsNC43LDAsMCwxLDE3OCw2Ny41NUwxNjQuMyw4MS4yMmwxNC43NywxOS41N0E2LDYsMCwwLDEsMTgwLjIyLDEwNS4yM1pcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZD1cIk0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdmdJY29uPlxyXG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEluZm9XcmFwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Q29weXJpZ2h0IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiBKdW5IeXVrLCBHeXUgYWxsIHJpZ2h0IHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9JbmZvV3JhcD5cclxuICAgICAgICA8L0Zvb3RlckNvbnRhaW5lcj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBkb25nYUljb24gZnJvbSBcIi4uL2ltYWdlcy9kb25nYS5wbmdcIjtcclxuaW1wb3J0IGdvb2dsZUljb24gZnJvbSBcIi4uL2ltYWdlcy9nb29nbGUucG5nXCI7XHJcbmltcG9ydCBoYW5pSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2hhbmkucG5nXCI7XHJcbmltcG9ydCBzYnNJY29uIGZyb20gXCIuLi9pbWFnZXMvc2JzLnBuZ1wiO1xyXG5pbXBvcnQgc2VneWVJY29uIGZyb20gXCIuLi9pbWFnZXMvc2VneWUucG5nXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRVUkwoaWNvbk5hbWUpIHtcclxuICBjb25zb2xlLmxvZyhpY29uTmFtZSk7XHJcbiAgY29uc3QgbWF0Y2ggPSB7XHJcbiAgICBnb29nbGU6IGdvb2dsZUljb24sXHJcbiAgICBkb25nYTogZG9uZ2FJY29uLFxyXG4gICAgaGFuaTogaGFuaUljb24sXHJcbiAgICBzYnM6IHNic0ljb24sXHJcbiAgICBzZWd5ZTogc2VneWVJY29uLFxyXG4gIH07XHJcbiAgcmV0dXJuIG1hdGNoW2ljb25OYW1lXTtcclxufVxyXG5cclxuY29uc3QgSWNvbkJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XHJcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMubWFyZ2lufTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IGdldFVSTChwcm9wcy5uYW1lKX0pO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAmOmhvdmVyIHtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uQ29tcG9uZW50KHByb3BzKSB7XHJcbiAgLy8gaG92ZXIgYWN0aW9uIOydgCDrgpjspJHsl5Ag64Sj7Ja07IScIOyVoOuLiOuplOydtOyFmCDqtaztmIRcclxuICBjb25zdCB7IG5hbWUsIGhvdmVyQWN0aW9uLCBzaXplID0gXCIxMDBweFwiLCBtYXJnaW4gPSBcIjEwcHhcIiwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiA8SWNvbkJveCBuYW1lPXtuYW1lfSBzaXplPXtzaXplfSBtYXJnaW49e21hcmdpbn0gey4uLnJlc3R9IC8+O1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgei1pbmRleDogJHsocHJvcHMpID0+IChwcm9wcy5vbiA9PT0gXCJvblwiID8gOTk5OSA6IC0xKX07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5vbiA9PT0gXCJvblwiID8gXCJyZ2JhKDAsIDAsIDAsIDAuNDUpXCIgOiBcInJnYmEoMCwgMCwgMCwgMClcIn07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2Utb3V0O1xyXG5gO1xyXG5jb25zdCBNb2RhbEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogXCJmbGV4XCI7XHJcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IChwcm9wcy5vbiA9PT0gXCJvblwiID8gMSA6IDApfTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxM3B4IC01cHggcmdiYSgxMzMsIDEzMywgMTMzLCAxKTtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyBcIjBweFwiIDogXCIzMHB4XCIpfTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG5gO1xyXG5jb25zdCBFeGl0V3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDEuNXJlbSk7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYigxMzQsIDE0MiwgMTUwKTtcclxuICBtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMjVzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcclxuICBjb25zdCB7IG9uLCBvbkNsaWNrQ2xvc2UsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbENvbnRhaW5lciBvbj17b24gPyBcIm9uXCIgOiBcIm9mZlwifT5cclxuICAgICAgPE1vZGFsQm94IG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxyXG4gICAgICAgIDxFeGl0V3JhcCBvbkNsaWNrPXtvbkNsaWNrQ2xvc2V9PlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiMVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiPjwvcGF0aD5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvRXhpdFdyYXA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L01vZGFsQm94PlxyXG4gICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uR3JvdXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xyXG5pbXBvcnQgVmlld0xpc3RJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld0xpc3RcIjtcclxuaW1wb3J0IFZpZXdNb2R1bGVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVmlld01vZHVsZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jb25zdCBUb2dnbGVCdG4gPSBzdHlsZWQoVG9nZ2xlQnV0dG9uKWBcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgJiBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzNmNjNiZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBWaWV3QnV0dG9uKHsgbWF0Y2ggfSkge1xyXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKFwiY2FyZFwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmlldyA9IChldmVudCwgbmV3VmlldykgPT4ge1xyXG4gICAgc2V0VmlldyhuZXdWaWV3KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZUJ1dHRvbkdyb3VwIHZhbHVlPXt2aWV3fSBleGNsdXNpdmUgb25DaGFuZ2U9e2hhbmRsZVZpZXd9PlxyXG4gICAgICA8VG9nZ2xlQnRuIHZhbHVlPVwiY2FyZFwiPlxyXG4gICAgICAgIDxMaW5rIHRvPXtgJHttYXRjaC5wYXRofT92aWV3PWNhcmRgfT5cclxuICAgICAgICAgIDxWaWV3TW9kdWxlSWNvbiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Ub2dnbGVCdG4+XHJcblxyXG4gICAgICA8VG9nZ2xlQnRuIHZhbHVlPVwibGlzdFwiPlxyXG4gICAgICAgIDxMaW5rIHRvPXtgJHttYXRjaC5wYXRofT92aWV3PWxpc3RgfT5cclxuICAgICAgICAgIDxWaWV3TGlzdEljb24gLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvVG9nZ2xlQnRuPlxyXG4gICAgPC9Ub2dnbGVCdXR0b25Hcm91cD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFZpZXdCdXR0b24pO1xyXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHtcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbkFyZWEsXHJcbiAgQ2FyZEFjdGlvbnMsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZE1lZGlhLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuLy90ZXN0IOykkVxyXG5pbXBvcnQge2NhbGxBcGlTY3JhcH0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogMzQ1LFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMTQwLFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgaW5saW5lOiB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZVwiLFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogMjUwLFxyXG4gICAgaGVpZ2h0OiAxNjAsXHJcbiAgICBtYXJnaW5SaWdodDogMjAsXHJcbiAgfSxcclxuICBsaXN0SXRlbToge1xyXG4gICAgcGFkZGluZzogXCI4cHggMFwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjY2NjXCIsXHJcbiAgICBcIiY6bGFzdC1jaGlsZFwiOiB7XHJcbiAgICAgIGJvcmRlckJvdHRvbTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5jb25zdCBEZXNjcmlwdGlvbldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmNvbnN0IExpc3RBY3Rpb25zV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICYgYnV0dG9uOiB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgfVxyXG5gO1xyXG5mdW5jdGlvbiBMaXN0Vmlldyh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKGFydGljbGUpID0+IHtcclxuICAgIGNhbGxBcGlTY3JhcChhcnRpY2xlKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAge2RhdGEubWFwKChuZXdzLCBpZHgpID0+IChcclxuICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfSAvPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uV3JhcD5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgcHJpbWFyeT17bmV3cy50aXRsZX1cclxuICAgICAgICAgICAgc2Vjb25kYXJ5PXtcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dFByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuZXdzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TGlzdEFjdGlvbnNXcmFwPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9uZXdzLyR7bmV3cy5pZH1gfT4g7J6Q7IS47Z6IPC9MaW5rPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGVzdEhhbmRsZU9uQ2xpY2tTY3JhcH0+XHJcbiAgICAgICAgICDsiqTtgazrnqlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGlzdEFjdGlvbnNXcmFwPlxyXG4gICAgICAgICAgPC9EZXNjcmlwdGlvbldyYXA+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgKSl9XHJcbiAgICA8L0xpc3Q+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZFZpZXcoeyBkYXRhLCBwYXRoIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIC8vIHJlZHV4IOq1rOy2lSDtm4Qgc3RvcmXsl5DshJwg7KCV7ZmV7ZWcIGFydGljbGXsnYQg66ek6rCc67OA7IiY66GcIOyCrOyaqe2VmOuKlCBcclxuICAvLyDroZzsp4HsnLzroZwg67CU6r646riwXHJcbiAgY29uc3QgdGVzdEhhbmRsZU9uQ2xpY2tTY3JhcCA9IChhcnRpY2xlKSA9PiB7XHJcbiAgICBjYWxsQXBpU2NyYXAoYXJ0aWNsZSkuY2F0Y2goZXJyID0+Y29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YS5tYXAoKG5ld3MsIGlkeCkgPT4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGtleT17aWR4fT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIGltYWdlPXtuZXdzLmltYWdlfVxyXG4gICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAge25ld3MudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cGF0aCA9PT0gXCIvbmV3c1wiICYmIChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgIHtuZXdzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPExpbmsgdG89e2AvbmV3cy8ke25ld3MuaWR9YH0+IOyekOyEuO2eiDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB7cGF0aCA9PT0gXCIvbmV3c1wiICYmIChcclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGVzdEhhbmRsZU9uQ2xpY2tTY3JhcH0+XHJcbiAgICAgICAgICAgIOyKpO2BrOueqVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICApKTtcclxufVxyXG5cclxuY29uc3QgQ29udGVudHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52aWV3ID09PSBcImNhcmRcIiAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICBnYXA6IDIwcHg7XHJcbiAgICBgfVxyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMudmlldyA9PT0gXCJsaXN0XCIgJiZcclxuICAgIGNzc2BcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBgfTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIFZpZXdUeXBlUGFnZSh7IGxvY2F0aW9uLCBkYXRhIH0pIHtcclxuICBsZXQgcXVlcnkgPSBxcy5wYXJzZShsb2NhdGlvbi5zZWFyY2gsIHtcclxuICAgIGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBpZiAoIU9iamVjdC5rZXlzKHF1ZXJ5KS5sZW5ndGgpIHtcclxuICAgIHF1ZXJ5LnZpZXcgPSBcImNhcmRcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGVudHNDb250YWluZXIgdmlldz17cXVlcnkudmlld30+XHJcbiAgICAgIHtxdWVyeS52aWV3ID09PSBcImNhcmRcIiA/IChcclxuICAgICAgICA8Q2FyZFZpZXcgZGF0YT17ZGF0YX0gcGF0aD17bG9jYXRpb24ucGF0aG5hbWV9IC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpc3RWaWV3IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRlbnRzQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld1R5cGVQYWdlKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRvbmdhLjUzYWRhNzBmODdhYTA3Mzk5YzJiMWYxMGE4NWUxMTA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGUuNzBmNDllZmZhZWQ1MmE3NjkyZDAxNDJiOGFkN2ZlYzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmkuMzJkMzYyMTIwMmJiNTM5MGZjOTk0MjIwN2NkMTM2YzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNicy4yMTA0NjQ0YWFkNmQ3Njk4Mzk5MTZmMWVhZWQ0ODYxMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2VneWUuNDllOGY3NjI3NTY5MjUyMzQyNGE4YjBiYWZhMjc2YWYucG5nXCI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEljb25Cb3ggZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvSWNvblwiO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XHJcbi8vdGVzdCDspJFcclxuaW1wb3J0IHtjYWxsQXBpU2NyYXB9IGZyb20gJy4uLy4uL2NvbW1vbi9hcGknO1xyXG5cclxuY29uc3QgQXJpY2xlQ29udGFpbmVyID0gc3R5bGVkKFBhcGVyKWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbCh7IG5ld3MgfSkge1xyXG5cclxuICAvLyByZWR1eCDqtaztmIQg7ZuEIGFydGljbGUg66ek6rCc67OA7IiY66W8IHJlZHV4IHN0b3Jl66W8IO2Gte2VtCDsoJXtmZXtlZwg642w7J207YSw66GcIOuEmOqyqOykmOyVvO2VqCAgY29uc3QgdGVzdEhhbmRsZU9uQ2xpY2tTY3JhcCA9ICgpID0+IHtcclxuICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKGFydGljbGUpID0+IHtcclxuICAgIGNhbGxBcGlTY3JhcChhcnRpY2xlKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFyaWNsZUNvbnRhaW5lciBlbGV2YXRpb249ezN9PlxyXG4gICAgICA8SWNvbkJveFxyXG4gICAgICAgIHNpemU9XCIxMDBweFwiXHJcbiAgICAgICAgbWFyZ2luPVwiMTBweFwiXHJcbiAgICAgICAgbmFtZT17bmV3cy5jb3JwfVxyXG4gICAgICAgIGJvcmRlcj1cIjFweCBzb2xpZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlfSAvPlxyXG4gICAgICA8cD57bmV3cy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxDb21tZW50cyBvblNjcmFwPXt0ZXN0SGFuZGxlT25DbGlja1NjcmFwfS8+XHJcbiAgICA8L0FyaWNsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IENvbW1lbnRzV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuYDtcclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRUZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKWBcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuYDtcclxuY29uc3QgSW5wdXREYXRhcyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG5gO1xyXG5jb25zdCBDaGFyYWN0ZXJzID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPT09IFwiZ3JheVwiPyBcIiM4NDg0ODRcIjpcInJlZFwifTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuYDtcclxuY29uc3QgQWN0aW9uc1dyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMi41JSAtIDNweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgU2NyYXBCdXR0b24gPSBzdHlsZWQoU3R5bGVkQnV0dG9uKWBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMi41JSAtIDNweCk7XHJcbiAgICBwYWRkaW5nOiA4cHggM3B4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudHMocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZW5kYWJsZSwgc2V0U2VuZGFibGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuICAgIC8vdGVzdFxyXG4gICAgY29uc3Qge29uU2NyYXB9ID0gcHJvcHM7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUubGVuZ3RoID4gMzAwKSBzZXRTZW5kYWJsZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUubGVuZ3RoIDw9IDMwMCkgc2V0U2VuZGFibGUodHJ1ZSk7XHJcbiAgICB9LFtpbnB1dFZhbHVlXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21tZW50c1dyYXA+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zV3JhcD5cclxuICAgICAgICAgICAgICAgIDxTY3JhcEJ1dHRvbiBvbkNsaWNrPXtvblNjcmFwfT5cclxuICAgICAgICAgICAgICAgICAgIOyKpO2BrOueqVxyXG4gICAgICAgICAgICAgICAgPC9TY3JhcEJ1dHRvbj5cclxuICAgICAgICAgICAgPC9BY3Rpb25zV3JhcD5cclxuICAgICAgICAgICAgPFN0eWxlZFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cIm91dGxpbmVkLXRleHRhcmVhXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcm93c01heD17NX1cclxuICAgICAgICAgICAgbGFiZWw9e2DrjJPquIAg64us6riwYH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrsJTrpbTqs6Ag6rOg7Jq0IOunkOydhCDsgqzsmqntlbTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXREYXRhcz5cclxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbG9yPXtzZW5kYWJsZT8gXCJncmF5XCI6XCJyZWRcIn0+IFxyXG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dFZhbHVlLmxlbmd0aH0gLyAzMDBcclxuICAgICAgICAgICAgICAgIDwvQ2hhcmFjdGVycz5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRCdXR0b24gXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCIgXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOyehSDroKVcclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0lucHV0RGF0YXM+XHJcbiAgICAgICAgPC9Db21tZW50c1dyYXA+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vY29tcG9uZW50L0FydGljbGVcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgY29ycDogXCJzZWd5ZVwiLFxyXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVBdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgY29ycDogXCJzZWd5ZVwiLFxyXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVBdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgY29ycDogXCJzZWd5ZVwiLFxyXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVBdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgY29ycDogXCJzZWd5ZVwiLFxyXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVBdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgY29ycDogXCJzZWd5ZVwiLFxyXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVBdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjb250ZW50OlxyXG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTUFTS1wiLFxyXG4gICAgY29ycDogXCJzZWd5ZVwiLFxyXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjcmVhdGVBdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlQ29udGFpbmVyKHsgaWQgfSkge1xyXG4gIGNvbnN0IG5ld3MgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSk7XHJcbiAgcmV0dXJuIDxBcnRpY2xlIG5ld3M9e25ld3N9IC8+O1xyXG59XHJcbiIsImltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQXJ0aWNsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRGV0YWlsUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxQYWdlKHsgbWF0Y2ggfSkge1xyXG4gIGNvbnNvbGUubG9nKFwiRGV0YWlsUGFnZVwiKTtcclxuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEZXRhaWxQYWdlQ29udGFpbmVyPlxyXG4gICAgICA8QXJ0aWNsZUNvbnRhaW5lciBpZD17aWR9IC8+XHJcbiAgICA8L0RldGFpbFBhZ2VDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExvZ2luQnRuIGZyb20gXCIuL0xvZ2luQnRuXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTG9nb0ltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5uYXZgXHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBib3gtc2hhZG93OiByZ2IoMjM4LCAyMzgsIDIzOCkgMHB4IDFweCAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5ODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTMwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuYDtcclxuY29uc3QgUmlnaHRJdGVtID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgJiBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8qICYgKyAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfSAqL1xyXG4gICAgJiBhIHtcclxuICAgICAgY29sb3I6IHJnYig0MCwgNDIsIDUzKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IExvZ28gPSBzdHlsZWQoQnV0dG9uKWBcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPElubmVyPlxyXG4gICAgICAgIDxSaWdodEl0ZW0+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxMb2dvIGltYWdlPXtMb2dvSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL25ld3NcIj7slrjroaDsgqzrs4Qg67O06riwPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbmV3c1wiPuyGjeuztDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9SaWdodEl0ZW0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMb2dpbkJ0biAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lubmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBBdmF0YXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBEaXZpZGVyLFxyXG4gIEljb25CdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvTW9kYWxcIjtcclxuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmFcIjtcclxuaW1wb3J0IFNpZ25JbiBmcm9tIFwiLi9TaWduaW5cIjtcclxuXHJcbmNvbnN0IFVzZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICYgaDYge1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlcklubmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDg0cHg7XHJcbiAgd2lkdGg6IDg0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAmIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgJiAuTXVpQnV0dG9uQmFzZS1yb290IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDY1LCA2OSwgNzMsIDAuMyksXHJcbiAgICAgIDAgMXB4IDNweCAxcHggcmdiYSg2NSwgNjksIDczLCAwLjE1KTtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNZW51ID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgJi5NdWlCdXR0b25CYXNlLXJvb3Qge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAmIGEge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdG5XcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE3cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9naW5Nb2RhbCwgc2V0TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2luZm9Nb2RhbCwgc2V0SW5mb01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tMb2dpbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TG9naW5Nb2RhbCghbG9naW5Nb2RhbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tJbmZvTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJbmZvTW9kYWwoIWluZm9Nb2RhbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsb2dpbiA/IChcclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tJbmZvTW9kYWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEF2YXRhcj48L0F2YXRhcj5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja0xvZ2luTW9kYWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg66Gc6re47J24IC8g6rCA7J6FXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7bG9naW5Nb2RhbCAmJiAoXHJcbiAgICAgICAgPE1vZGFsIG9uPXtsb2dpbk1vZGFsfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsaWNrTG9naW5Nb2RhbH0+XHJcbiAgICAgICAgICA8U2lnbkluIC8+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtpbmZvTW9kYWwgJiYgKFxyXG4gICAgICAgIDxNb2RhbCBvbj17aW5mb01vZGFsfSBvbkNsaWNrQ2xvc2U9e2hhbmRsZUNsaWNrSW5mb01vZGFsfT5cclxuICAgICAgICAgIDxVc2VyQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VXNlcklubmVyPlxyXG4gICAgICAgICAgICAgIDxBdmF0YXI+PC9BdmF0YXI+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1VzZXJJbm5lcj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPmVtYWlsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9Vc2VyQ29udGFpbmVyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxNZW51IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi91c2VyL3NjcmFwXCI+7Iqk7YGs656pPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxNZW51IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi91c2VyL2NvbW1lbnRcIj7rgrQg64yT6riAPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxCdG5XcmFwPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIOuhnOq3uOyVhOybg1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQnRuV3JhcD5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGdvb2dsZUxvZ2luSW1hZ2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9nb29nbGVfbG9naW5fYnV0dG9uLnBuZ1wiO1xyXG5pbXBvcnQga2FrYW9Mb2dpbkltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMva2FrYW9fbG9naW5fYnV0dG9uLnBuZ1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTaWduSW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmIC5NdWlCdXR0b24tcm9vdCB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2V9KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5gO1xyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgaGFuZGxlS2FrYW8gPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImtha2FvXCIpO1xyXG4gICAgLy8gYXhpb3MuZ2V0KFwiL2FwaVwiKS50aGVuKChyZXMpID0+IGNvbnNvbGUubG9nKHJlcykpO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdXRoL2tha2FvXCIsIHsgY3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gY29uc29sZS5sb2cocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWduSW5Db250YWluZXI+XHJcbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5b7J6R7J2A66Gc6rOgXSDri6TsnYwg6rOE7KCV7Jy866GcIOuhnOq3uOyduDwvVGl0bGVDb250YWluZXI+XHJcbiAgICAgIDxTdHlsZWRCdXR0b24gaW1hZ2U9e2dvb2dsZUxvZ2luSW1hZ2V9IC8+XHJcblxyXG4gICAgICA8U3R5bGVkQnV0dG9uIGltYWdlPXtrYWthb0xvZ2luSW1hZ2V9IG9uQ2xpY2s9e2hhbmRsZUtha2FvfSAvPlxyXG4gICAgPC9TaWduSW5Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgR05CIGZyb20gXCIuLi9jb21wb25lbnQvR05CXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHTkJQYWdlKCkge1xyXG4gIHJldHVybiA8R05CIC8+O1xyXG59XHJcbiIsImltcG9ydCBHTkJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9HTkJDb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQlBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxHTkJDb250YWluZXIgLz47XHJcbn1cclxuIiwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQge0NhcmQsIENhcmRIZWFkZXIsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsXHJcbiAgICBBdmF0YXIsIEljb25CdXR0b24sIFR5cG9ncmFwaHksIENhcmRBY3Rpb25zfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgRmF2b3JpdGUgYXMgRmF2b3JpdGVJY29uLCBTaGFyZSBhcyBTaGFyZUljb24sIE1vcmVWZXJ0IGFzIE1vcmVWZXJ0SWNvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5cclxuLy90ZXN0IOykkVxyXG5pbXBvcnQge2NhbGxBcGlTY3JhcH0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XHJcblxyXG5jb25zdCBTdHlsZWRDYXJkID0gc3R5bGVkKENhcmQpYFxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2Utb3V0O1xyXG4gICY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDAsMCwwLC4xKSwgMHB4IDJweCAzcHggcmdiYSgwLDAsMCwuMTIpLCAwcHggMXB4IDNweCByZ2JhKDAsMCwwLC4xNCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAzMzAsXHJcbiAgICAgIG1pbldpZHRoOiAzMzAsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICBtYXJnaW46IFwiMCAxNXB4XCIsXHJcbiAgICB9LFxyXG4gICAgbWVkaWE6IHtcclxuICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiIC8vIDE2OjlcclxuICAgIH0sXHJcbiAgICBhdmF0YXJSZWQ6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiByZWRbNTAwXVxyXG4gICAgfSxcclxuICB9KSk7XHJcbi8vIGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5IOulvCDsnoXroKXrsJvslYQgQ2FyZOulvCDrpqzthLTtlZjripQg7Lu07Y+s64SM7Yq4IO2VqOyImFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzQ2FyZCggeyBpbWFnZSwgY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgb3JpZ2luYWxMaW5rLCBkYXRlLCBjb21wYW55fSApIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIC8vIGRlc2NpcHJpb24gMTAw6riA7J6QIOygnO2VnCArIOunkOykhOyehO2RnFxyXG4gICAgY29uc3Qgc3ViU3RyaW5nID0gKGRlc2MsY291bnQpID0+IHtcclxuICAgICAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiBkZXNjID09PSBcInN0cmluZ1wiO1xyXG4gICAgICAgIHJldHVybiAoaXNTdHJpbmcgJiYgZGVzYy5sZW5ndGggPj0gY291bnQ/IGRlc2Muc3Vic3RyaW5nKDAsY291bnQpICsgXCIuLi5cIiA6IGRlc2MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRlc3RcclxuICAgIC8vIHJlZHV4IOq1rO2YhCDtm4QgYXJ0aWNsZSDrp6TqsJzrs4DsiJjrpbwgcmVkdXggc3RvcmXrpbwg7Ya17ZW0IOygle2Zle2VnCDrjbDsnbTthLDroZwg64SY6rKo7KSY7JW87ZWoXHJcbiAgICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKGFydGljbGUpID0+IHtcclxuICAgICAgY2FsbEFwaVNjcmFwKGFydGljbGUpLmNhdGNoKGVyciA9PmNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJuZXdzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgICAgICB7Y29tcGFueT8gY29tcGFueS5zbGljZSgwLDQpIDogJyd9XHJcbiAgICAgICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uPXtcclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGl0bGU9e3N1YlN0cmluZyh0aXRsZSwgMjApfVxyXG4gICAgICAgICAgICBzdWJoZWFkZXI9e2RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAge3N1YlN0cmluZyhkZXNjcmlwdGlvbiwgODApfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiIG9uQ2xpY2s9e3Rlc3RIYW5kbGVPbkNsaWNrU2NyYXB9PlxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hhcmVcIj5cclxuICAgICAgICAgICAgICA8U2hhcmVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9TdHlsZWRDYXJkPlxyXG4gICAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFBhcGVyLCBUYWJzLCBUYWIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtcIuyghOyytFwiLCBcIuygley5mFwiLCBcIuqyveygnFwiLCBcIuyCrO2ajFwiXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgc3F1YXJlIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgIDxUYWJzXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICB2YXJpYW50PVwic2Nyb2xsYWJsZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y2F0ZWdvcnlMaXN0Lm1hcCgoaXRlbSwgaWR4KSA9PiAoXHJcbiAgICAgICAgICA8VGFiIGtleT17aWR4fSBsYWJlbD17aXRlbX0gc3R5bGU9e3tmb250U2l6ZTpcIjEuMXJlbVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIn19Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBub1ZhbGlkYXRlPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAxNy0wNS0yNFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUGFwZXIsIElucHV0QmFzZSwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgcGFkZGluZzogXCIycHggNHB4XCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICB3aWR0aDogNDAwLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDgsXHJcbiAgICBmbGV4OiAxLFxyXG4gIH0sXHJcbiAgaWNvbkJ1dHRvbjoge1xyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2gocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBvblNlYXJjaCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZVRleHQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXRTZWFyY2hzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9uU2VhcmNoKHRleHQpLnRoZW4oKHJlc3BvbnNlLCBlcnJvcik9PntcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgfSkuY2F0Y2goZXJyPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYXBlciBjb21wb25lbnQ9XCJmb3JtXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgPElucHV0QmFzZSBcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9IFxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlVGV4dH1cclxuICAgICAgICBvblN1Ym1pdD17KGUpPT4gZS5wcmV2ZW50RGVmYXVsdCgpfS8+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwic2VhcmNoXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdFNlYXJjaHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBOZXdzQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCB7XHJcbiAgQXJyb3dCYWNrSW9zT3V0bGluZWQsXHJcbiAgQXJyb3dGb3J3YXJkSW9zT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAvKiB3aWR0aDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5kZXZpY2UgPT09IFwid2ViXCIgPyBcImNhbGMoOTkwcHggKyA3NXB4KVwiIDogXCJcIn07ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaGVpZ2h0fTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlICogLTM2MH1weDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuYDtcclxuY29uc3QgQXJyb3dDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiB3aWR0aDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5kZXZpY2UgPT09IFwid2ViXCIgPyBcImNhbGMoOTkwcHggKyA2MHB4KVwiIDogXCJcIn07ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuY29uc3QgQXJyb3dIb3ZlckFjdGlvbiA9IGNzc2BcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiA4NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDAuNTU7XHJcbiAgICBib3gtc2hhZG93OiAxNnB4IDE4cHggMjhweCAtM3B4IHJnYmEoMTQzLCAxNDMsIDE0MywgMC43NSk7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQcmV2QXJyb3cgPSBzdHlsZWQuc3BhbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICBjb2xvcjogI2MxYzFjMTtcclxuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gMCA6IDAuNzUpfTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gLTEwIDogMTApfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gXCJcIiA6IEFycm93SG92ZXJBY3Rpb24pfTtcclxuYDtcclxuY29uc3QgTmV4dEFycm93ID0gc3R5bGVkKFByZXZBcnJvdylgXHJcbiAgJHsocHJvcHMpID0+IChwcm9wcy52aXNpYmxlID09PSBcIm5vbmVcIiA/IFwiXCIgOiBBcnJvd0hvdmVyQWN0aW9uKX07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcclxuICBjb25zdCB7IGNhcmRXaWR0aCwgbmV3cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgbWF4ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gbmV3cy5sZW5ndGggLSAyLCBbbmV3c10pO1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBjYXJkQ29udGFpbmVyUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tQcmV2ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSAtIDEgPiAtMSA/IGFjdGl2ZSAtIDEgOiAtMSk7XHJcbiAgfTtcclxuICBjb25zdCBvbkNsaWNrTmV4dCA9IChtYXgpID0+IHtcclxuICAgIHNldEFjdGl2ZShhY3RpdmUgKyAxIDwgbWF4ICsgMSA/IGFjdGl2ZSArIDEgOiBtYXggKyAxKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8U2xpZGVyQ29udGFpbmVyIGRldmljZT17XCJ3ZWJcIn0gaGVpZ2h0PVwiNjV2aFwiPlxyXG4gICAgPFNsaWRlckNvbnRhaW5lciBkZXZpY2U9e1wid2ViXCJ9IGhlaWdodD1cIjExMCVcIj5cclxuICAgICAgPEFycm93Q29udGFpbmVyIGRldmljZT17XCJ3ZWJcIn0+XHJcbiAgICAgICAgPFByZXZBcnJvdyB2aXNpYmxlPXthY3RpdmUgPD0gLTEgPyBcIm5vbmVcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xpY2tQcmV2fT5cclxuICAgICAgICAgIDxBcnJvd0JhY2tJb3NPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNzUgfX0gLz5cclxuICAgICAgICA8L1ByZXZBcnJvdz5cclxuICAgICAgICA8TmV4dEFycm93XHJcbiAgICAgICAgICB2aXNpYmxlPXthY3RpdmUgPj0gbWF4KCkgPyBcIm5vbmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrTmV4dChtYXgoKSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFycm93Rm9yd2FyZElvc091dGxpbmVkIHN0eWxlPXt7IGZvbnRTaXplOiA3NSB9fSAvPlxyXG4gICAgICAgIDwvTmV4dEFycm93PlxyXG4gICAgICA8L0Fycm93Q29udGFpbmVyPlxyXG4gICAgICA8Q2FyZENvbnRhaW5lciByZWY9e2NhcmRDb250YWluZXJSZWZ9IGFjdGl2ZT17YWN0aXZlfT5cclxuICAgICAgICB7LyogdGVzdE5ld3PripQg7J20IO2bhCBzYWdhLT5hcGktPnN0b3JlIOulvCDthrXtlbQg7KCE64us65CcIHJlc3BvbnNl7JeQIOuUsOudvCDrs4Dqsr0qL31cclxuICAgICAgICB7bmV3cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPE5ld3NDYXJkIGtleT17aW5kZXh9IHsuLi5pdGVtfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9DYXJkQ29udGFpbmVyPlxyXG4gICAgPC9TbGlkZXJDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi4vY29tcG9uZW50L0NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeUNvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPENhdGVnb3J5IC8+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERhdGUgZnJvbSBcIi4uL2NvbXBvbmVudC9EYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlQ29udGFpbmVyKCkge1xyXG4gIHJldHVybiA8RGF0ZSAvPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL2NvbXBvbmVudC9TZWFyY2hcIjtcclxuaW1wb3J0IHsgY2FsbEFwaVNlYXJjaEJ5S2V5d29yZCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hcGknO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIDxTZWFyY2ggb25TZWFyY2g9e2NhbGxBcGlTZWFyY2hCeUtleXdvcmR9Lz47XHJcbn1cclxuIiwiaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnQvU2xpZGVyJztcclxuXHJcbmNvbnN0IG5ld3MgPSBbXHJcbiAgICB7IFxyXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMjAvMDgvMzEvTklTSTIwMjAwODMxXzAwMTY2MzAyMThfd2ViLmpwZz9ybmQ9MjAyMDA4MzExNTA5MTJcIixcclxuICAgICAgICBjYXRlZ29yeTpcIuygley5mFwiLCBcclxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxyXG4gICAgICAgIFwi64+F7ISc6rCAIOuNlOychCDsnbTquLDripQg7KKL7J2AIOuwqeuylSDslYTri5DquYzigKbstpztjJDsi5zsnqXsl5Drj4Qg64+E7JuAXCJcclxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxyXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSwgXHJcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgICAgICBpbWFnZTpcImh0dHBzOi8vaW1hZ2UubmV3c2lzLmNvbS8yMDIwLzA4LzI0L05JU0kyMDIwMDgyNF8wMDE2NjA2NzMyX3dlYi5qcGc/cm5kPTIwMjAwOTAxMTIwMzQzXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6XCLsoJXsuZhcIiwgXHJcbiAgICAgICAgdGl0bGU6YOaWh+uMgO2GteuguSBcIuuqqOyymOufvCDrj4XshJwg7KaQ6rKo67O06ri4XCLigKYn7L2U66Gc64KYIOyCrO2UvOyXlOyKpCcg65OxIOy2lOyynGAsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogYCfsmKTripjrtoDthLDsnZgg7IS46rOEJyAn66as642U652866m0IOygleyhsOyymOufvCcgJ+2ZjeuylOuPhCDtj4nsoIQnIOuTsSDstpTsspxcclxuICAgICAgICBcIuuPheyEnOqwgCDrjZTsnIQg7J206riw64qUIOyii+ydgCDrsKnrspUg7JWE64uQ6rmM4oCm7Lac7YyQ7Iuc7J6l7JeQ64+EIOuPhOybgFwiXHJcbiAgICAgICAgXCLsoJXsobDrjIDsmZUg6riI64Kc7KCE6raMIO2Yge2MjO2VmOupsCDqsr3soJwg6rCc7ZiB7ZWcIOydtOyVvOq4sCDqsIDsnqUg7KKL7JWEXCJgLCBcclxuICAgICAgICBvcmlnaW5hbExpbms6XCJodHRwczovL25ld3Npcy5jb20vdmlldy8/aWQ9TklTWDIwMjAwOTAxXzAwMDExNTA0MDYmY0lEPTEwMzAxJnBJRD0xMDMwMFwiLCBcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksIFxyXG4gICAgICAgIGNvbXBhbnk6XCLribTsi5zsiqRcIlxyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICAgICAgaW1hZ2U6XCJodHRwczovL2ltYWdlLm5ld3Npcy5jb20vMjAxOC8wMS8xNS9OSVNJMjAxODAxMTVfMDAwMDA5NDczN193ZWIuanBnP3JuZD0yMDE4MDExNTE2MzkwN1wiLFxyXG4gICAgICAgIGNhdGVnb3J5Olwi7KCV7LmYXCIsIFxyXG4gICAgICAgIHRpdGxlOmDmlofrjIDthrXroLkgXCLrqqjsspjrn7wg64+F7IScIOymkOqyqOuztOq4uFwi4oCmJ+y9lOuhnOuCmCDsgqztlLzsl5TsiqQnIOuTsSDstpTsspxgLCBcclxuICAgICAgICBkZXNjcmlwdGlvbiA6IGAn7Jik64qY67aA7YSw7J2YIOyEuOqzhCcgJ+umrOuNlOudvOuptCDsoJXsobDsspjrn7wnICftmY3rspTrj4Qg7Y+J7KCEJyDrk7Eg7LaU7LKcXHJcbiAgICAgICAgXCLrj4XshJzqsIAg642U7JyEIOydtOq4sOuKlCDsoovsnYAg67Cp67KVIOyVhOuLkOq5jOKApuy2nO2MkOyLnOyepeyXkOuPhCDrj4Tsm4BcIlxyXG4gICAgICAgIFwi7KCV7KGw64yA7JmVIOq4iOuCnOyghOq2jCDtmIHtjIztlZjrqbAg6rK97KCcIOqwnO2Yge2VnCDsnbTslbzquLAg6rCA7J6lIOyii+yVhFwiYCwgXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOlwiaHR0cHM6Ly9uZXdzaXMuY29tL3ZpZXcvP2lkPU5JU1gyMDIwMDkwMV8wMDAxMTUwNDA2JmNJRD0xMDMwMSZwSUQ9MTAzMDBcIiwgXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLCBcclxuICAgICAgICBjb21wYW55Olwi64m07Iuc7IqkXCJcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9pbWFnZS5uZXdzaXMuY29tLzIwMjAvMDkvMDEvTklTSTIwMjAwOTAxXzAwMDA1OTE5MTVfd2ViLmpwZz9ybmQ9MjAyMDA5MDEwNzEyNDdcIixcclxuICAgICAgICBjYXRlZ29yeTpcIuygley5mFwiLCBcclxuICAgICAgICB0aXRsZTpg5paH64yA7Ya166C5IFwi66qo7LKY65+8IOuPheyEnCDsppDqsqjrs7TquLhcIuKApifsvZTroZzrgpgg7IKs7ZS87JeU7IqkJyDrk7Eg7LaU7LKcYCwgXHJcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgJ+yYpOuKmOu2gO2EsOydmCDshLjqs4QnICfrpqzrjZTrnbzrqbQg7KCV7KGw7LKY65+8JyAn7ZmN67KU64+EIO2PieyghCcg65OxIOy2lOyynFxyXG4gICAgICAgIFwi64+F7ISc6rCAIOuNlOychCDsnbTquLDripQg7KKL7J2AIOuwqeuylSDslYTri5DquYzigKbstpztjJDsi5zsnqXsl5Drj4Qg64+E7JuAXCJcclxuICAgICAgICBcIuygleyhsOuMgOyZlSDquIjrgpzsoITqtowg7ZiB7YyM7ZWY66mwIOqyveygnCDqsJztmIHtlZwg7J207JW86riwIOqwgOyepSDsoovslYRcImAsIFxyXG4gICAgICAgIG9yaWdpbmFsTGluazpcImh0dHBzOi8vbmV3c2lzLmNvbS92aWV3Lz9pZD1OSVNYMjAyMDA5MDFfMDAwMTE1MDQwNiZjSUQ9MTAzMDEmcElEPTEwMzAwXCIsIFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSwgXHJcbiAgICAgICAgY29tcGFueTpcIuuJtOyLnOyKpFwiXHJcbiAgICB9LFxyXG5dXHJcbi8vIOuNlOuvuOuNsOydtO2EsCDribTsiqRcclxuY29uc3QgdGVzdE5ld3MgPSBbLi4ubmV3cywgLi4ubmV3cywgLi4ubmV3cy5zbGljZSgwLDIpXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlckNvbnRhaW5lcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGVyIG5ld3M9e3Rlc3ROZXdzfS8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQ2F0ZWdvcnlDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9DYXRlZ29yeUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgRGF0ZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0RhdGVDb250YWluZXJcIjtcclxuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL1NlYXJjaENvbnRhaW5lclwiO1xyXG5pbXBvcnQgU2xpZGVyQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmA7XHJcbmNvbnN0IEZpbHRlcldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5gO1xyXG5jb25zdCBDb250ZW50c1dyYXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGaWx0ZXJXcmFwPlxyXG4gICAgICAgIDxEYXRlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgPFNlYXJjaENvbnRhaW5lciAvPlxyXG4gICAgICA8L0ZpbHRlcldyYXA+XHJcbiAgICAgIDxDb250ZW50c1dyYXA+XHJcbiAgICAgICAgPENhdGVnb3J5Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPFNsaWRlckNvbnRhaW5lciAvPlxyXG4gICAgICA8L0NvbnRlbnRzV3JhcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImdvb2dsZV9sb2dpbl9idXR0b24uMWNlMWFhYTVhMTI3ZmEzZTQ5MmExMmJiNjJmOTkzMDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImtha2FvX2xvZ2luX2J1dHRvbi5hZDViMjAwM2FkMzgxOGI3OGY5MDk0NGExODczZGI0Yy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibG9nby5iODdmM2FjZmEzYTczZjhhYzI5YWRmZjg1YTI2OWM5ZC5wbmdcIjsiLCJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5cclxuLy8gc3RvcmUgQ29udGV4dEFQSeuhnCDqsJDsi7jquLBcclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XHJcbiIsImltcG9ydCBJY29uQm94IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnQvSWNvbic7XHJcblxyXG5jb25zdCBjb3JwcyA9IFtcImdvb2dsZVwiLFwiZG9uZ2FcIixcImhhbmlcIixcInNic1wiLFwic2VneWVcIl07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcnBDYXRlZ29yeSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7Y29ycHMubWFwKChjb3JwLGluZGV4KSA9PiBcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgPEljb25Cb3ggXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcclxuICAgICAgICAgICAgICAgIHNpemU9XCIxMDBweFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9e2NvcnB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFZpZXdUeXBlQnRuIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuXCI7XHJcbmltcG9ydCBWaWV3VHlwZVBhZ2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvVmlld1R5cGVQYWdlXCI7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9jcGhvdG8uYXNpYWUuY28ua3IvbGlzdGltZ2xpbmsvMS8yMDIwMDYzMDA4MjYxMzMzMTg2XzE1OTM0NzMxNzQuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXHJcbiAgICB0aXRsZTogXCLrp4jsiqTtgawg7ZKI7KCIIOuMgOuegC4uLiDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegCDrp4jsiqTtgawg7ZKI7KCIIOuMgOuegFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLsobDshKDsnbzrs7RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNjE1MzM0Xzk1NTUuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIu2MlOuhnOybjCDrp47snYAg6rOE7KCVIOuFuOumrOuKlCDqs7XqsqksIOyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQIOyEvO2EsOyduCDsspkg6rCA7J6lIOqzteqyqSDshLHqs7XrpaAg7KKL7J2AIO2OuC4uLuusuOuyleqzvCDssqDsnpAg7Jik66WYIOycoOydmO2VnOuLpOuptCDslrTripAg7KCV64+EIOuwqeyWtCDqsIDriqVcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIklUXCIsXHJcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxyXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcclxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcclxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxyXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzTGlzdCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFZpZXdUeXBlQnRuIC8+XHJcbiAgICAgIDxWaWV3VHlwZVBhZ2UgZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IENvcnBDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnQvQ29ycENhdGVnb3J5JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JwQ2F0ZWdvcnlDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPENvcnBDYXRlZ29yeSAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgTmV3c0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudC9OZXdzTGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NvbnRhaW5lcigpIHtcclxuICByZXR1cm4gPE5ld3NMaXN0IC8+O1xyXG59XHJcbiIsImltcG9ydCBDb3JwQ2F0ZWdvcnlDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Db3JwQ2F0ZWdvcnlDb250YWluZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE5ld3NDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9OZXdzQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICB7LyogPENvcnBDYXRlZ29yeUNvbnRhaW5lciAvPiAqL31cclxuICAgICAgPE5ld3NDb250YWluZXIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgUGFwZXIsIEZvcm1Db250cm9sLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFZpZXdUeXBlUGFnZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZVBhZ2VcIjtcclxuaW1wb3J0IFZpZXdUeXBlQnRuIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcclxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCLrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7zrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7xcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuyhsOyEoOydvOuztFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNjE1MzM0Xzk1NTUuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIu2MlOuhnOybjCDrp47snYAg6rOE7KCVIOuFuOumrOuKlCDqs7XqsqksIOyduOyKpO2DgOq3uOueqCDqs6DqsJ0g7KeA7JuQIOyEvO2EsOyduCDsspkg6rCA7J6lIOqzteqyqSDshLHqs7XrpaAg7KKL7J2AIO2OuC4uLuusuOuyleqzvCDssqDsnpAg7Jik66WYIOycoOydmO2VnOuLpOuptCDslrTripAg7KCV64+EIOuwqeyWtCDqsIDriqVcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXHJcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcclxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXHJcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzNmNjNiZlwiLFxyXG4gICAgYm9yZGVyQ29sb3I6IFwiIzNmNjNiZlwiLFxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpbjogNCxcclxuICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IE1lbnVCdG4gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyOiAwO1xyXG5cclxuICAmIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy52YWx1ZSAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzNmNjNiZjtcclxuICAgIGB9XHJcbmA7XHJcblxyXG5jb25zdCBGaWx0ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHRhYiB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUodGFiID09PSBcInNjcmFwXCIgPyAwIDogMSk7XHJcbiAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW1wic2NyYXBcIiwgXCJjb21tZW50XCJdO1xyXG4gIGNvbnN0IG9yZGVyTGlzdCA9IFtcInB1c2hcIiwgXCJsYXRlc3RcIiwgXCJjb21tZW50c1wiXTtcclxuICAvL+uLtOydgCDsiJwsIOy1nOyLoCDsiJwsIOuMk+q4gCDrp47snYAg7IicXHJcblxyXG4gIGNvbnN0IG1ha2VTZWxlY3QgPSAoc2VsZWN0TGlzdCwgdmFsdWUpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgIDxTZWxlY3QgbmF0aXZlIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICB7c2VsZWN0TGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cclxuICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgZWxldmF0aW9uPXszfT5cclxuICAgICAgPE1lbnVDb250YWluZXI+XHJcbiAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSA9PT0gdGFiKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNZW51QnRuIGtleT17aWR4fSB2YWx1ZT17aXRlbSA9PT0gdGFiID8gMSA6IDB9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3VzZXIvJHtpdGVtfWB9PntpdGVtfTwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51QnRuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9NZW51Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGaWx0ZXJXcmFwPlxyXG4gICAgICAgICAgPFZpZXdUeXBlQnRuIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bWFrZVNlbGVjdChbXCLsobDshKBcIiwgXCLspJHslZlcIl0sIG9yZGVyKX1cclxuICAgICAgICAgICAge21ha2VTZWxlY3Qob3JkZXJMaXN0LCBvcmRlcil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZpbHRlcldyYXA+XHJcbiAgICAgICAgPFZpZXdUeXBlUGFnZSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgVXNlciBmcm9tIFwiLi4vY29tcG9uZW50L1VzZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDb250YWluZXIoeyB0YWIgfSkge1xyXG4gIHJldHVybiA8VXNlciB0YWI9e3RhYn0gLz47XHJcbn1cclxuIiwiaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyUGFnZSh7IG1hdGNoIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxVc2VyQ29udGFpbmVyIHRhYj17bWF0Y2gucGFyYW1zLnRhYn0gLz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=