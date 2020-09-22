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
  baseURL: "http://localhost:8000"
};
function callApiScrap(article) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/user/scrap", data, axiosConfig);
} // 검색 후 응답되는 배열은
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
  console.log("getUsersLocation");

  var getLocation = function getLocation() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (loc) {
        resolve({
          lat: loc.coords.latitude,
          lng: loc.coords.longitude
        });
      });
    });
  };

  return getLocation();
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

/***/ "./src/gnb/component/Search.js":
/*!*************************************!*\
  !*** ./src/gnb/component/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
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
  },
  divider: {
    height: 28,
    margin: 4
  }
});
function Search(_ref) {
  var handleGetLocation = _ref.handleGetLocation,
      address = _ref.address;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

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

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    component: "form",
    className: classes.root,
    elevation: 3
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    className: classes.iconButton,
    onClick: handleGetLocation
  }, /*#__PURE__*/React.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a, null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    className: classes.divider,
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    className: classes.input,
    placeholder: "Search",
    onChange: handleOnChangeText,
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    value: address
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    type: "submit",
    className: classes.iconButton,
    onClick: handleSubmitSearchs
  }, /*#__PURE__*/React.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default.a, null)));
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
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GNBContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _component_LoginBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/LoginBtn */ "./src/gnb/component/LoginBtn.js");
/* harmony import */ var _SearchContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchContainer */ "./src/gnb/container/SearchContainer.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100px;\n  height: 50px;\n  margin-right: 15px;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  & form {\n    margin-right: 20px;\n  }\n"]);

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
var RightItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());
var Logo = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject4(), function (props) {
  return props.image;
});
function GNBContainer() {
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Inner, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, /*#__PURE__*/React.createElement(Logo, {
    image: _images_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  })), /*#__PURE__*/React.createElement(RightItem, null, /*#__PURE__*/React.createElement(_SearchContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/React.createElement(_component_LoginBtn__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/gnb/container/SearchContainer.js":
/*!**********************************************!*\
  !*** ./src/gnb/container/SearchContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Search */ "./src/gnb/component/Search.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/api */ "./src/common/api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function SearchContainer() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_common_api__WEBPACK_IMPORTED_MODULE_3__["getUsersLocation"])().then(function (location) {
      return setLocation(_objectSpread({}, location));
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      address = _useState4[0],
      setAddress = _useState4[1];

  var handleGetLocation = function handleGetLocation(e) {
    console.log(location);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/location", {
      params: {
        location: location
      }
    }).then(function (res) {
      return setAddress(res.data);
    });
  };

  return /*#__PURE__*/React.createElement(_component_Search__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleGetLocation: handleGetLocation,
    address: address
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb21wb25lbnQvQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9wYWdlL0NoYXRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudC9JY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L01vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlQnRuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50L1ZpZXdUeXBlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9kb25nYS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbWFnZXMvZ29vZ2xlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9oYW5pLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ltYWdlcy9zYnMucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vaW1hZ2VzL3NlZ3llLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZGV0YWlsL2NvbXBvbmVudC9BcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29tcG9uZW50L0NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kZXRhaWwvY29udGFpbmVyL0FydGljbGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9wYWdlL0RldGFpbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvTG9naW5CdG4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb21wb25lbnQvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvY29tcG9uZW50L1NpZ25pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ25iL2NvbnRhaW5lci9HTkJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2duYi9jb250YWluZXIvU2VhcmNoQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nbmIvcGFnZS9HTkJQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbXBvbmVudC9DYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb21wb25lbnQvRGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb21wb25lbnQvTG9jYXRpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29tcG9uZW50L1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb21wb25lbnQvVGVzdEFQSUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS9jb250YWluZXIvQ2F0ZWdvcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL0RhdGVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL0xvY2F0aW9uQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob21lL2NvbnRhaW5lci9TbGlkZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvcGFnZS9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2dvb2dsZV9sb2dpbl9idXR0b24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMva2FrYW9fbG9naW5fYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvQ29ycENhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzL2NvbXBvbmVudC9OZXdzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb250YWluZXIvQ29ycENhdGVnb3J5Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzL2NvbnRhaW5lci9OZXdzQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzL3BhZ2UvTmV3c1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvY29tcG9uZW50L1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvY29udGFpbmVyL1VzZXJDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIvcGFnZS9Vc2VyUGFnZS5qcyJdLCJuYW1lcyI6WyJjdXN0b21IaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicmVzZXQiLCJBcHBDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJBcHAiLCJjb25zb2xlIiwibG9nIiwiVXNlclBhZ2UiLCJEZXRhaWxQYWdlIiwiQ2hhdFBhZ2UiLCJOZXdzUGFnZSIsIkhvbWVQYWdlIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInBhcGVyIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJoZWFkZXIiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZsZXgiLCJjb250ZW50cyIsImJvcmRlclRvcCIsImJvcmRlckJvdHRvbSIsImZvcm0iLCJpbnB1dEJhc2UiLCJpY29uIiwiQ2hhdEJ0biIsIkljb25CdXR0b24iLCJDaGF0IiwidmlzdWFsIiwiaGFuZGxlQ2xpY2siLCJjbGFzc2VzIiwiaWNvbkJ1dHRvbiIsIkNoYXRDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNldFZpc3VhbCIsImF4aW9zQ29uZmlnIiwiYmFzZVVSTCIsImNhbGxBcGlTY3JhcCIsImFydGljbGUiLCJheGlvcyIsInBvc3QiLCJkYXRhIiwiY2FsbEFwaVNlYXJjaEJ5S2V5d29yZCIsImtleXdvcmQiLCJnZXQiLCJjYWxsQXBpQXJlYUJhc2VkTGlzdCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2V0VXNlcnNMb2NhdGlvbiIsImdldExvY2F0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImxvYyIsImxhdCIsImNvb3JkcyIsImxuZyIsIkZvb3RlckNvbnRhaW5lciIsImZvb3RlciIsIkljb25Db250YWluZXIiLCJJbmZvV3JhcCIsIkZvb3RlciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldFVSTCIsImljb25OYW1lIiwibWF0Y2giLCJnb29nbGUiLCJnb29nbGVJY29uIiwiZG9uZ2EiLCJkb25nYUljb24iLCJoYW5pIiwiaGFuaUljb24iLCJzYnMiLCJzYnNJY29uIiwic2VneWUiLCJzZWd5ZUljb24iLCJJY29uQm94IiwicHJvcHMiLCJzaXplIiwibWFyZ2luIiwibmFtZSIsIkljb25Db21wb25lbnQiLCJob3ZlckFjdGlvbiIsInJlc3QiLCJNb2RhbENvbnRhaW5lciIsIm9uIiwiTW9kYWxCb3giLCJFeGl0V3JhcCIsIk1vZGFsIiwib25DbGlja0Nsb3NlIiwiY2hpbGRyZW4iLCJUb2dnbGVCdG4iLCJUb2dnbGVCdXR0b24iLCJWaWV3QnV0dG9uIiwidmlldyIsInNldFZpZXciLCJoYW5kbGVWaWV3IiwiZXZlbnQiLCJuZXdWaWV3IiwicGF0aCIsIndpdGhSb3V0ZXIiLCJyb290IiwibWF4V2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsIm1lZGlhIiwibGlzdCIsImlubGluZSIsImltZyIsIm1hcmdpblJpZ2h0IiwibGlzdEl0ZW0iLCJEZXNjcmlwdGlvbldyYXAiLCJMaXN0QWN0aW9uc1dyYXAiLCJMaXN0VmlldyIsInRlc3RIYW5kbGVPbkNsaWNrU2NyYXAiLCJlcnIiLCJtYXAiLCJuZXdzIiwiaWR4IiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJDYXJkVmlldyIsIkNvbnRlbnRzQ29udGFpbmVyIiwiY3NzIiwiVmlld1R5cGVQYWdlIiwibG9jYXRpb24iLCJxdWVyeSIsInFzIiwicGFyc2UiLCJzZWFyY2giLCJpZ25vcmVRdWVyeVByZWZpeCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYXRobmFtZSIsIkFyaWNsZUNvbnRhaW5lciIsIlBhcGVyIiwiRGV0YWlsIiwiY29ycCIsIkNvbW1lbnRzV3JhcCIsIlN0eWxlZEJ1dHRvbiIsIkJ1dHRvbiIsIlN0eWxlZFRleHRGaWVsZCIsIlRleHRGaWVsZCIsIklucHV0RGF0YXMiLCJDaGFyYWN0ZXJzIiwiY29sb3IiLCJBY3Rpb25zV3JhcCIsIlNjcmFwQnV0dG9uIiwiQ29tbWVudHMiLCJSZWFjdCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VuZGFibGUiLCJzZXRTZW5kYWJsZSIsIm9uU2NyYXAiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnRlbnQiLCJjYXRlZ29yeSIsInB1Ymxpc2hlZCIsInRvU3RyaW5nIiwiY3JlYXRlQXQiLCJBcnRpY2xlQ29udGFpbmVyIiwiZmluZCIsIml0ZW0iLCJwYXJzZUludCIsIkRldGFpbFBhZ2VDb250YWluZXIiLCJzZWN0aW9uIiwicGFyYW1zIiwiVXNlckNvbnRhaW5lciIsIlVzZXJJbm5lciIsIk1lbnUiLCJCdG5XcmFwIiwiQXZhdGFyIiwiTG9naW4iLCJsb2dpbiIsInNldExvZ2luIiwibG9naW5Nb2RhbCIsInNldExvZ2luTW9kYWwiLCJpbmZvTW9kYWwiLCJzZXRJbmZvTW9kYWwiLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwidGhlbiIsInJlcyIsInVzZXIiLCJlcnJvciIsInNldExvZ2dlZEluIiwiaGFuZGxlQ2xpY2tMb2dpbk1vZGFsIiwiaGFuZGxlQ2xpY2tJbmZvTW9kYWwiLCJoYW5kbGVBZGRGaWxlIiwiZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmaWxlcyIsInBhdGNoIiwic25zSWQiLCJ1cmwiLCJuaWNrIiwiaW5wdXQiLCJtYXJnaW5MZWZ0IiwiZGl2aWRlciIsIlNlYXJjaCIsImhhbmRsZUdldExvY2F0aW9uIiwiYWRkcmVzcyIsInRleHQiLCJzZXRUZXh0IiwiaGFuZGxlT25DaGFuZ2VUZXh0IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTdWJtaXRTZWFyY2hzIiwib25TZWFyY2giLCJyZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTaWduSW5Db250YWluZXIiLCJUaXRsZUNvbnRhaW5lciIsIlNpZ25JbiIsImdvb2dsZUxvZ2luSW1hZ2UiLCJrYWthb0xvZ2luSW1hZ2UiLCJDb250YWluZXIiLCJuYXYiLCJJbm5lciIsIlJpZ2h0SXRlbSIsIkxvZ28iLCJHTkJDb250YWluZXIiLCJMb2dvSW1hZ2UiLCJTZWFyY2hDb250YWluZXIiLCJzZXRMb2NhdGlvbiIsInNldEFkZHJlc3MiLCJHTkJQYWdlIiwiU3R5bGVkQ2FyZCIsIkNhcmQiLCJCb3R0b21JY29uc1dyYXAiLCJ0aGVtZSIsIm1pbldpZHRoIiwicGFkZGluZ1RvcCIsImRpc3RhbmNlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiTmV3c0NhcmQiLCJkYXRlIiwidGVsIiwiZGlzdCIsInNsaWNlIiwiQ2F0ZWdvcnkiLCJzZXRWYWx1ZSIsImNhdGVnb3J5TGlzdCIsIm5ld1ZhbHVlIiwiY29udGFpbmVyIiwiZmxleFdyYXAiLCJ0ZXh0RmllbGQiLCJzaHJpbmsiLCJvbkNsaWNrTG9jYXRpb24iLCJTbGlkZXJDb250YWluZXIiLCJDYXJkQ29udGFpbmVyIiwiYWN0aXZlIiwiQXJyb3dDb250YWluZXIiLCJBcnJvd0hvdmVyQWN0aW9uIiwiUHJldkFycm93Iiwic3BhbiIsInZpc2libGUiLCJOZXh0QXJyb3ciLCJTbGlkZXIiLCJpdGVtcyIsInNldEFjdGl2ZSIsImNhcmRzUGVyUGFnZSIsInNldENhcmRzUGVyUGFnZSIsIm1heCIsInVzZUNhbGxiYWNrIiwiTWF0aCIsImZsb29yIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIm9uQ2xpY2tQcmV2Iiwib25DbGlja05leHQiLCJpbmRleCIsIkNhdGVnb3J5Q29udGFpbmVyIiwiRGF0ZUNvbnRhaW5lciIsIlRlc3RCdXR0b25zQ29udGFpbmVyIiwiTG9jYXRpb25Db250YWluZXIiLCJ0ZXN0TmV3cyIsIkZpbHRlcldyYXAiLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiY29ycHMiLCJDb3JwQ2F0ZWdvcnkiLCJvcmlnaW5hbExpbmsiLCJjb21wYW55IiwiTmV3c0xpc3QiLCJDb3JwQ2F0ZWdvcnlDb250YWluZXIiLCJOZXdzQ29udGFpbmVyIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJmb3JtQ29udHJvbCIsIk1lbnVDb250YWluZXIiLCJNZW51QnRuIiwiYnV0dG9uIiwiVXNlciIsInRhYiIsIm9yZGVyIiwic2V0T3JkZXIiLCJvcmRlckxpc3QiLCJtYWtlU2VsZWN0Iiwic2VsZWN0TGlzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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WixDQUZiLENBRkYsQ0FERixlQVFFLG9CQUFDLHNFQUFEO0FBQWMsUUFBSSxFQUFFN1E7QUFBcEIsSUFSRixDQWJGLENBREY7QUEwQkQsQzs7Ozs7Ozs7Ozs7OztBQzlKRDtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVN3SSxhQUFULE9BQWdDO0FBQUEsTUFBUG9JLEdBQU8sUUFBUEEsR0FBTztBQUM3QyxzQkFBTyxvQkFBQyx1REFBRDtBQUFNLE9BQUcsRUFBRUE7QUFBWCxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQUE7QUFBQTtBQUFBO0FBRWUsU0FBU3RULFFBQVQsT0FBNkI7QUFBQSxNQUFUc0UsS0FBUyxRQUFUQSxLQUFTO0FBQzFDLHNCQUNFLGtEQUNFLG9CQUFDLGdFQUFEO0FBQWUsT0FBRyxFQUFFQSxLQUFLLENBQUMyRyxNQUFOLENBQWFxSTtBQUFqQyxJQURGLENBREY7QUFLRCxDIiwiZmlsZSI6ImFwcC5lZjBjNjYwYmYyNDE1YTFmOWFmMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwicmVhY3QuYnVuZGxlXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBDaGF0UGFnZSBmcm9tIFwiLi9jaGF0L3BhZ2UvQ2hhdFBhZ2VcIjtcbmltcG9ydCBOZXdzUGFnZSBmcm9tIFwiLi9uZXdzL3BhZ2UvTmV3c1BhZ2VcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lL3BhZ2UvSG9tZVBhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcImhpc3RvcnlcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCByZXNldCBmcm9tIFwic3R5bGVkLXJlc2V0XCI7XG5pbXBvcnQgR05CUGFnZSBmcm9tIFwiLi9nbmIvcGFnZS9HTkJQYWdlXCI7XG5pbXBvcnQgRGV0YWlsUGFnZSBmcm9tIFwiLi9kZXRhaWwvcGFnZS9EZXRhaWxQYWdlXCI7XG5pbXBvcnQgVXNlclBhZ2UgZnJvbSBcIi4vdXNlci9wYWdlL1VzZXJQYWdlXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tbW9uL2NvbXBvbmVudC9Nb2RhbFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21tb24vY29tcG9uZW50L0Zvb3RlclwiO1xuXG4vLyBsb2dpbiB0ZXN0XG5pbXBvcnQgU2lnbkluIGZyb20gXCIuL2duYi9jb21wb25lbnQvU2lnbmluXCI7XG5cbmNvbnN0IGN1c3RvbUhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgJHtyZXNldH07XG4gICoge1xuICAgIGJveC1zaXppbmcgOiBib3JkZXItYm94O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFwcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcbi8vIHJvdXRlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zb2xlLmxvZyhcImFwcCEhISEhISEhIVwiKTtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXtjdXN0b21IaXN0b3J5fT5cbiAgICAgICAgICA8R05CUGFnZSAvPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2VyLzp0YWJcIiBjb21wb25lbnQ9e1VzZXJQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCIgY29tcG9uZW50PXtEZXRhaWxQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2hhdFwiIGNvbXBvbmVudD17Q2hhdFBhZ2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9uZXdzLzppZFwiIGNvbXBvbmVudD17RGV0YWlsUGFnZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL25ld3NcIiBjb21wb25lbnQ9e05ld3NQYWdlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICA8Q2hhdFBhZ2UgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBQYXBlciwgSW5wdXRCYXNlLCBJY29uQnV0dG9uLCBab29tIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgU2VuZEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCI7XG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BdHRhY2hGaWxlXCI7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcbmltcG9ydCBDaGF0QnViYmxlT3V0bGluZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DaGF0QnViYmxlT3V0bGluZVwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgekluZGV4OiA5OTk4LFxuICAgIHdpZHRoOiAzNjAsXG4gICAgaGVpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgIGJvdHRvbTogMzAsXG4gICAgcmlnaHQ6IDMwLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IDYwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogMTAsXG4gICAgXCImIHNwYW5cIjoge1xuICAgICAgZmxleDogMSxcbiAgICB9LFxuICB9LFxuICBjb250ZW50czoge1xuICAgIGZsZXg6IDEsXG4gICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpXCIsXG4gIH0sXG4gIGZvcm06IHtcbiAgICBoZWlnaHQ6IDU3LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBpbnB1dEJhc2U6IHtcbiAgICBmbGV4OiAxLFxuICB9LFxuICBpY29uOiB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gICAgaGVpZ2h0OiBcIjgwJVwiLFxuICB9LFxufSk7XG5cbmNvbnN0IENoYXRCdG4gPSBzdHlsZWQoSWNvbkJ1dHRvbilgXG4gICYuTXVpQnV0dG9uQmFzZS1yb290IHtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA2MnB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBoZWlnaHQ6IDYycHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjYzYmY7XG4gICAgJi5NdWlCdXR0b25CYXNlLXJvb3Q6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNjNiZjtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoeyB2aXN1YWwsIGhhbmRsZUNsaWNrIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gdmlzdWFsID8gKFxuICAgIDxab29tIGluPXt2aXN1YWx9PlxuICAgICAgPFBhcGVyIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgICAgICA8c3Bhbj7ssLjsl6zsnbjsm5A8L3NwYW4+XG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRzfT48L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPEF0dGFjaEZpbGVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJbnB1dEJhc2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEJhc2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuplOyEuOyngOulvCDsnoXroKXtlbTso7zshLjsmpQuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgPFNlbmRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L1BhcGVyPlxuICAgIDwvWm9vbT5cbiAgKSA6IChcbiAgICA8Q2hhdEJ0biBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259PlxuICAgICAgPENoYXRCdWJibGVPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICA8L0NoYXRCdG4+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0IGZyb20gXCIuLi9jb21wb25lbnQvQ2hhdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Q29udGFpbmVyKCkge1xuICBjb25zdCBbdmlzdWFsLCBzZXRWaXN1YWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRWaXN1YWwoIXZpc3VhbCk7XG4gIH07XG5cbiAgcmV0dXJuIDxDaGF0IHZpc3VhbD17dmlzdWFsfSBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+O1xufVxuIiwiaW1wb3J0IENoYXRDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9DaGF0Q29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICByZXR1cm4gPENoYXRDb250YWluZXIgLz47XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgcXMgZnJvbSBcInFzXCI7XG5cbmNvbnN0IGF4aW9zQ29uZmlnID0ge1xuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGlTY3JhcChhcnRpY2xlKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvc2NyYXBcIiwgZGF0YSwgYXhpb3NDb25maWcpO1xufVxuXG4vLyDqsoDsg4kg7ZuEIOydkeuLteuQmOuKlCDrsLDsl7TsnYBcbi8vIGxpc3Qg7ZiV7YOc66GcIOy2nOugpVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGlTZWFyY2hCeUtleXdvcmQoa2V5d29yZCkge1xuICBpZiAoIWtleXdvcmQpIHJldHVybjtcbiAgcmV0dXJuIGF4aW9zLmdldChgL25ld3Mvc2VhcmNoLyR7a2V5d29yZH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxBcGlBcmVhQmFzZWRMaXN0KGxhdGl0dWRlLCBsb25naXR1ZGUpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgYCk7XG59XG5cbi8vIOycoOyggCDsnITsuZgg7J6s7ZmV7J247ZuEIOyggOyepVxuLy8gcmVkdXjsl5Ag7Jyg7KCAIOychOy5mCDsoIDsnqXtlZjripQg66Gc7KeBIO2VhOyalFxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzTG9jYXRpb24oKSB7XG4gIGNvbnNvbGUubG9nKFwiZ2V0VXNlcnNMb2NhdGlvblwiKTtcblxuICBjb25zdCBnZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigobG9jKSA9PiB7XG4gICAgICAgIHJlc29sdmUoeyBsYXQ6IGxvYy5jb29yZHMubGF0aXR1ZGUsIGxuZzogbG9jLmNvb3Jkcy5sb25naXR1ZGUgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gZ2V0TG9jYXRpb24oKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N2Z0ljb24nO1xuXG4vLyBmb290ZXLsu6jthYzsnbTrhIggMTAwdncg66GcIHdpZHRo7ISk7KCV7ZWY66m0IOyKpO2BrOuhpOuwnOyDnVxuY29uc3QgRm9vdGVyQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcCA6IDIwMHB4O1xuICAgIHRvcDogYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuYDtcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgICYgPiBkaXYge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgIH1cbmA7XG5jb25zdCBJbmZvV3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJiA+IHNwYW4ge1xuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9vdGVyQ29udGFpbmVyPlxuICAgICAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgey8qIOuplOydvCDslYTsnbTsvZggKi99XG4gICAgICAgICAgICAgICAgICAgIDxNYWlsSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiDsubTsubTsmKQg7JWE7J207L2YICovfVxuICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyAgdmlld0JveD1cIjAgMCAyMDggMTkxLjk0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiY2xzLTFcIiBkPVwiTTEwNCwwQzQ2LjU2LDAsMCwzNi43MSwwLDgyYzAsMjkuMjgsMTkuNDcsNTUsNDguNzUsNjkuNDgtMS41OSw1LjQ5LTEwLjI0LDM1LjM0LTEwLjU4LDM3LjY5LDAsMC0uMjEsMS43Ni45MywyLjQzYTMuMTQsMy4xNCwwLDAsMCwyLjQ4LjE1YzMuMjgtLjQ2LDM4LTI0LjgxLDQ0LTI5QTEzMS41NiwxMzEuNTYsMCwwLDAsMTA0LDE2NGM1Ny40NCwwLDEwNC0zNi43MSwxMDQtODJTMTYxLjQ0LDAsMTA0LDBaTTUyLjUzLDY5LjI3Yy0uMTMsMTEuNi4xLDIzLjgtLjA5LDM1LjIyLS4wNiwzLjY1LTIuMTYsNC43NC01LDUuNzhhMS44OCwxLjg4LDAsMCwxLTEsLjA3Yy0zLjI1LS42NC01Ljg0LTEuOC01LjkyLTUuODQtLjIzLTExLjQxLjA3LTIzLjYzLS4wOS0zNS4yMy0yLjc1LS4xMS02LjY3LjExLTkuMjIsMC0zLjU0LS4yMy02LTIuNDgtNS44NS01LjgzczEuOTQtNS43Niw1LjkxLTUuODJjOS4zOC0uMTQsMjEtLjE0LDMwLjM4LDAsNCwuMDYsNS43OCwyLjQ4LDUuOSw1Ljgycy0yLjMsNS42LTUuODMsNS44M0M1OS4yLDY5LjM4LDU1LjI5LDY5LjE2LDUyLjUzLDY5LjI3Wm01MC40LDQwLjQ1YTkuMjQsOS4yNCwwLDAsMS0zLjgyLjgzYy0yLjUsMC00LjQxLTEtNS0yLjY1bC0zLTcuNzhINzIuODVsLTMsNy43OGMtLjU4LDEuNjMtMi40OSwyLjY1LTUsMi42NWE5LjE2LDkuMTYsMCwwLDEtMy44MS0uODNjLTEuNjYtLjc2LTMuMjUtMi44Ni0xLjQzLTguNTJMNzQsNjMuNDJhOSw5LDAsMCwxLDgtNS45Miw5LjA3LDkuMDcsMCwwLDEsOCw1LjkzbDE0LjM0LDM3Ljc2QzEwNi4xNywxMDYuODYsMTA0LjU4LDEwOSwxMDIuOTMsMTA5LjcyWm0zMC4zMiwwSDExNGE1LjY0LDUuNjQsMCwwLDEtNS43NS01LjVWNjMuNWE2LjEzLDYuMTMsMCwwLDEsMTIuMjUsMFY5OC43NWgxMi43NWE1LjUxLDUuNTEsMCwxLDEsMCwxMVptNDctNC41MkE2LDYsMCwwLDEsMTY5LjQ5LDEwOEwxNTUuNDIsODkuMzdsLTIuMDgsMi4wOHYxMy4wOWE2LDYsMCwwLDEtMTIsMHYtNDFhNiw2LDAsMCwxLDEyLDBWNzYuNGwxNi43NC0xNi43NGE0LjY0LDQuNjQsMCwwLDEsMy4zMy0xLjM0LDYuMDgsNi4wOCwwLDAsMSw1LjksNS41OEE0LjcsNC43LDAsMCwxLDE3OCw2Ny41NUwxNjQuMyw4MS4yMmwxNC43NywxOS41N0E2LDYsMCwwLDEsMTgwLjIyLDEwNS4yM1pcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L1N2Z0ljb24+XG4gICAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPFN2Z0ljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZD1cIk0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJbmZvV3JhcD5cbiAgICAgICAgICAgICAgICA8c3Bhbj5Db3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0uIEp1bkh5dWssIEd5dSBhbGwgcmlnaHQgcmVzZXJ2ZWQuPC9zcGFuPlxuICAgICAgICAgICAgPC9JbmZvV3JhcD5cbiAgICAgICAgPC9Gb290ZXJDb250YWluZXI+XG4gICAgKVxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgZG9uZ2FJY29uIGZyb20gXCIuLi9pbWFnZXMvZG9uZ2EucG5nXCI7XG5pbXBvcnQgZ29vZ2xlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2dvb2dsZS5wbmdcIjtcbmltcG9ydCBoYW5pSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2hhbmkucG5nXCI7XG5pbXBvcnQgc2JzSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3Nicy5wbmdcIjtcbmltcG9ydCBzZWd5ZUljb24gZnJvbSBcIi4uL2ltYWdlcy9zZWd5ZS5wbmdcIjtcblxuZnVuY3Rpb24gZ2V0VVJMKGljb25OYW1lKSB7XG4gIGNvbnNvbGUubG9nKGljb25OYW1lKTtcbiAgY29uc3QgbWF0Y2ggPSB7XG4gICAgZ29vZ2xlOiBnb29nbGVJY29uLFxuICAgIGRvbmdhOiBkb25nYUljb24sXG4gICAgaGFuaTogaGFuaUljb24sXG4gICAgc2JzOiBzYnNJY29uLFxuICAgIHNlZ3llOiBzZWd5ZUljb24sXG4gIH07XG4gIHJldHVybiBtYXRjaFtpY29uTmFtZV07XG59XG5cbmNvbnN0IEljb25Cb3ggPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMuc2l6ZX07XG4gIGhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLnNpemV9O1xuICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5tYXJnaW59O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IGdldFVSTChwcm9wcy5uYW1lKX0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgJjpob3ZlciB7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25Db21wb25lbnQocHJvcHMpIHtcbiAgLy8gaG92ZXIgYWN0aW9uIOydgCDrgpjspJHsl5Ag64Sj7Ja07IScIOyVoOuLiOuplOydtOyFmCDqtaztmIRcbiAgY29uc3QgeyBuYW1lLCBob3ZlckFjdGlvbiwgc2l6ZSA9IFwiMTAwcHhcIiwgbWFyZ2luID0gXCIxMHB4XCIsIC4uLnJlc3QgfSA9IHByb3BzO1xuXG4gIHJldHVybiA8SWNvbkJveCBuYW1lPXtuYW1lfSBzaXplPXtzaXplfSBtYXJnaW49e21hcmdpbn0gey4uLnJlc3R9IC8+O1xufVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogJHsocHJvcHMpID0+IChwcm9wcy5vbiA9PT0gXCJvblwiID8gOTk5OSA6IC0xKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5vbiA9PT0gXCJvblwiID8gXCJyZ2JhKDAsIDAsIDAsIDAuNDUpXCIgOiBcInJnYmEoMCwgMCwgMCwgMClcIn07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dDtcbmA7XG5jb25zdCBNb2RhbEJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IFwiZmxleFwiO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLm9uID09PSBcIm9uXCIgPyAxIDogMCl9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTNweCAtNXB4IHJnYmEoMTMzLCAxMzMsIDEzMywgMSk7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogJHsocHJvcHMpID0+IChwcm9wcy5vbiA9PT0gXCJvblwiID8gXCIwcHhcIiA6IFwiMzBweFwiKX07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuYDtcbmNvbnN0IEV4aXRXcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDEuNXJlbSk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogcmdiKDEzNCwgMTQyLCAxNTApO1xuICBtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjI1cztcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHByb3BzKSB7XG4gIGNvbnN0IHsgb24sIG9uQ2xpY2tDbG9zZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsQ29udGFpbmVyIG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxuICAgICAgPE1vZGFsQm94IG9uPXtvbiA/IFwib25cIiA6IFwib2ZmXCJ9PlxuICAgICAgICA8RXhpdFdyYXAgb25DbGljaz17b25DbGlja0Nsb3NlfT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICB0YWJJbmRleD1cIjFcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9FeGl0V3JhcD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Nb2RhbEJveD5cbiAgICA8L01vZGFsQ29udGFpbmVyPlxuICApO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvZ2dsZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uR3JvdXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYlwiO1xuaW1wb3J0IFZpZXdMaXN0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1ZpZXdMaXN0XCI7XG5pbXBvcnQgVmlld01vZHVsZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9WaWV3TW9kdWxlXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgVG9nZ2xlQnRuID0gc3R5bGVkKFRvZ2dsZUJ1dHRvbilgXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgJiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICMzZjYzYmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDExcHg7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIFZpZXdCdXR0b24oeyBtYXRjaCB9KSB7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKFwiY2FyZFwiKTtcblxuICBjb25zdCBoYW5kbGVWaWV3ID0gKGV2ZW50LCBuZXdWaWV3KSA9PiB7XG4gICAgc2V0VmlldyhuZXdWaWV3KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUb2dnbGVCdXR0b25Hcm91cCB2YWx1ZT17dmlld30gZXhjbHVzaXZlIG9uQ2hhbmdlPXtoYW5kbGVWaWV3fT5cbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJjYXJkXCI+XG4gICAgICAgIDxMaW5rIHRvPXtgJHttYXRjaC5wYXRofT92aWV3PWNhcmRgfT5cbiAgICAgICAgICA8Vmlld01vZHVsZUljb24gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Ub2dnbGVCdG4+XG5cbiAgICAgIDxUb2dnbGVCdG4gdmFsdWU9XCJsaXN0XCI+XG4gICAgICAgIDxMaW5rIHRvPXtgJHttYXRjaC5wYXRofT92aWV3PWxpc3RgfT5cbiAgICAgICAgICA8Vmlld0xpc3RJY29uIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvVG9nZ2xlQnRuPlxuICAgIDwvVG9nZ2xlQnV0dG9uR3JvdXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVmlld0J1dHRvbik7XG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQge1xuICBUeXBvZ3JhcGh5LFxuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1UZXh0LFxuICBDYXJkLFxuICBDYXJkQWN0aW9uQXJlYSxcbiAgQ2FyZEFjdGlvbnMsXG4gIENhcmRDb250ZW50LFxuICBDYXJkTWVkaWEsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG4vL3Rlc3Qg7KSRXG5pbXBvcnQge2NhbGxBcGlTY3JhcH0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE0MCxcbiAgfSxcbiAgbGlzdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgaW5saW5lOiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgfSxcbiAgaW1nOiB7XG4gICAgd2lkdGg6IDI1MCxcbiAgICBoZWlnaHQ6IDE2MCxcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgcGFkZGluZzogXCI4cHggMFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICBcIiY6bGFzdC1jaGlsZFwiOiB7XG4gICAgICBib3JkZXJCb3R0b206IFwibm9uZVwiLFxuICAgIH0sXG4gIH0sXG59KTtcbmNvbnN0IERlc2NyaXB0aW9uV3JhcCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcbmNvbnN0IExpc3RBY3Rpb25zV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICYgYnV0dG9uOiB7XG4gICAgcGFkZGluZzoxMHB4O1xuICB9XG5gO1xuZnVuY3Rpb24gTGlzdFZpZXcoeyBkYXRhIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKGFydGljbGUpID0+IHtcbiAgICBjYWxsQXBpU2NyYXAoYXJ0aWNsZSkuY2F0Y2goZXJyID0+Y29uc29sZS5sb2coZXJyKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICB7ZGF0YS5tYXAoKG5ld3MsIGlkeCkgPT4gKFxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXG4gICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfVxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9e25ld3MuaW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XG4gICAgICAgICAgPERlc2NyaXB0aW9uV3JhcD5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICBwcmltYXJ5PXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgc2Vjb25kYXJ5PXtcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmV9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0UHJpbWFyeVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmV3cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaXN0QWN0aW9uc1dyYXA+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgPExpbmsgdG89e2AvbmV3cy8ke25ld3MuaWR9YH0+IOyekOyEuO2eiDwvTGluaz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGVzdEhhbmRsZU9uQ2xpY2tTY3JhcH0+XG4gICAgICAgICAg7Iqk7YGs656pXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdEFjdGlvbnNXcmFwPlxuICAgICAgICAgIDwvRGVzY3JpcHRpb25XcmFwPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgKSl9XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkVmlldyh7IGRhdGEsIHBhdGggfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgLy8gcmVkdXgg6rWs7LaVIO2bhCBzdG9yZeyXkOyEnCDsoJXtmZXtlZwgYXJ0aWNsZeydhCDrp6TqsJzrs4DsiJjroZwg7IKs7Jqp7ZWY64qUIFxuICAvLyDroZzsp4HsnLzroZwg67CU6r646riwXG4gIGNvbnN0IHRlc3RIYW5kbGVPbkNsaWNrU2NyYXAgPSAoYXJ0aWNsZSkgPT4ge1xuICAgIGNhbGxBcGlTY3JhcChhcnRpY2xlKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhLm1hcCgobmV3cywgaWR4KSA9PiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGtleT17aWR4fT5cbiAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgICBpbWFnZT17bmV3cy5pbWFnZX1cbiAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAge25ld3MudGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHtwYXRoID09PSBcIi9uZXdzXCIgJiYgKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICB7bmV3cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICA8TGluayB0bz17YC9uZXdzLyR7bmV3cy5pZH1gfT4g7J6Q7IS47Z6IPC9MaW5rPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge3BhdGggPT09IFwiL25ld3NcIiAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXt0ZXN0SGFuZGxlT25DbGlja1NjcmFwfT5cbiAgICAgICAgICAgIOyKpO2BrOueqVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICkpO1xufVxuXG5jb25zdCBDb250ZW50c0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLnZpZXcgPT09IFwiY2FyZFwiICYmXG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgYH1cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMudmlldyA9PT0gXCJsaXN0XCIgJiZcbiAgICBjc3NgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICBgfTtcbmA7XG5cbmZ1bmN0aW9uIFZpZXdUeXBlUGFnZSh7IGxvY2F0aW9uLCBkYXRhIH0pIHtcbiAgbGV0IHF1ZXJ5ID0gcXMucGFyc2UobG9jYXRpb24uc2VhcmNoLCB7XG4gICAgaWdub3JlUXVlcnlQcmVmaXg6IHRydWUsXG4gIH0pO1xuXG4gIGlmICghT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aCkge1xuICAgIHF1ZXJ5LnZpZXcgPSBcImNhcmRcIjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRlbnRzQ29udGFpbmVyIHZpZXc9e3F1ZXJ5LnZpZXd9PlxuICAgICAge3F1ZXJ5LnZpZXcgPT09IFwiY2FyZFwiID8gKFxuICAgICAgICA8Q2FyZFZpZXcgZGF0YT17ZGF0YX0gcGF0aD17bG9jYXRpb24ucGF0aG5hbWV9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8TGlzdFZpZXcgZGF0YT17ZGF0YX0gLz5cbiAgICAgICl9XG4gICAgPC9Db250ZW50c0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihWaWV3VHlwZVBhZ2UpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRvbmdhLjUzYWRhNzBmODdhYTA3Mzk5YzJiMWYxMGE4NWUxMTA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJnb29nbGUuNzBmNDllZmZhZWQ1MmE3NjkyZDAxNDJiOGFkN2ZlYzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImhhbmkuMzJkMzYyMTIwMmJiNTM5MGZjOTk0MjIwN2NkMTM2YzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNicy4yMTA0NjQ0YWFkNmQ3Njk4Mzk5MTZmMWVhZWQ0ODYxMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic2VneWUuNDllOGY3NjI3NTY5MjUyMzQyNGE4YjBiYWZhMjc2YWYucG5nXCI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IFBhcGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSWNvbkJveCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9JY29uXCI7XG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cyc7XG4vL3Rlc3Qg7KSRXG5pbXBvcnQge2NhbGxBcGlTY3JhcH0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XG5cbmNvbnN0IEFyaWNsZUNvbnRhaW5lciA9IHN0eWxlZChQYXBlcilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICYgaW1nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoeyBuZXdzIH0pIHtcblxuICAvLyByZWR1eCDqtaztmIQg7ZuEIGFydGljbGUg66ek6rCc67OA7IiY66W8IHJlZHV4IHN0b3Jl66W8IO2Gte2VtCDsoJXtmZXtlZwg642w7J207YSw66GcIOuEmOqyqOykmOyVvO2VqCAgY29uc3QgdGVzdEhhbmRsZU9uQ2xpY2tTY3JhcCA9ICgpID0+IHtcbiAgY29uc3QgdGVzdEhhbmRsZU9uQ2xpY2tTY3JhcCA9IChhcnRpY2xlKSA9PiB7XG4gICAgY2FsbEFwaVNjcmFwKGFydGljbGUpLmNhdGNoKGVyciA9PmNvbnNvbGUubG9nKGVycikpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFyaWNsZUNvbnRhaW5lciBlbGV2YXRpb249ezN9PlxuICAgICAgPEljb25Cb3hcbiAgICAgICAgc2l6ZT1cIjEwMHB4XCJcbiAgICAgICAgbWFyZ2luPVwiMTBweFwiXG4gICAgICAgIG5hbWU9e25ld3MuY29ycH1cbiAgICAgICAgYm9yZGVyPVwiMXB4IHNvbGlkXCJcbiAgICAgIC8+XG4gICAgICA8aW1nIHNyYz17bmV3cy5pbWFnZX0gLz5cbiAgICAgIDxwPntuZXdzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDxDb21tZW50cyBvblNjcmFwPXt0ZXN0SGFuZGxlT25DbGlja1NjcmFwfS8+XG4gICAgPC9BcmljbGVDb250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuXG5jb25zdCBDb21tZW50c1dyYXAgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuYDtcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbmA7XG5jb25zdCBTdHlsZWRUZXh0RmllbGQgPSBzdHlsZWQoVGV4dEZpZWxkKWBcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICB3aWR0aDogOTUlO1xuYDtcbmNvbnN0IElucHV0RGF0YXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG5gO1xuY29uc3QgQ2hhcmFjdGVycyA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgPT09IFwiZ3JheVwiPyBcIiM4NDg0ODRcIjpcInJlZFwifTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuYDtcbmNvbnN0IEFjdGlvbnNXcmFwID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDIuNSUgLSAzcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgU2NyYXBCdXR0b24gPSBzdHlsZWQoU3R5bGVkQnV0dG9uKWBcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMi41JSAtIDNweCk7XG4gICAgcGFkZGluZzogOHB4IDNweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzZW5kYWJsZSwgc2V0U2VuZGFibGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cblxuICAgIC8vdGVzdFxuICAgIGNvbnN0IHtvblNjcmFwfSA9IHByb3BzO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChpbnB1dFZhbHVlLmxlbmd0aCA+IDMwMCkgc2V0U2VuZGFibGUoZmFsc2UpO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZS5sZW5ndGggPD0gMzAwKSBzZXRTZW5kYWJsZSh0cnVlKTtcbiAgICB9LFtpbnB1dFZhbHVlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29tbWVudHNXcmFwPlxuICAgICAgICAgICAgPEFjdGlvbnNXcmFwPlxuICAgICAgICAgICAgICAgIDxTY3JhcEJ1dHRvbiBvbkNsaWNrPXtvblNjcmFwfT5cbiAgICAgICAgICAgICAgICAgICDsiqTtgazrnqlcbiAgICAgICAgICAgICAgICA8L1NjcmFwQnV0dG9uPlxuICAgICAgICAgICAgPC9BY3Rpb25zV3JhcD5cbiAgICAgICAgICAgIDxTdHlsZWRUZXh0RmllbGRcbiAgICAgICAgICAgIGlkPVwib3V0bGluZWQtdGV4dGFyZWFcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJvd3NNYXg9ezV9XG4gICAgICAgICAgICBsYWJlbD17YOuMk+q4gCDri6zquLBgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrsJTrpbTqs6Ag6rOg7Jq0IOunkOydhCDsgqzsmqntlbTso7zshLjsmpQuXCJcbiAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbnB1dERhdGFzPlxuICAgICAgICAgICAgICAgIDxDaGFyYWN0ZXJzIGNvbG9yPXtzZW5kYWJsZT8gXCJncmF5XCI6XCJyZWRcIn0+IFxuICAgICAgICAgICAgICAgICAgICB7aW5wdXRWYWx1ZS5sZW5ndGh9IC8gMzAwXG4gICAgICAgICAgICAgICAgPC9DaGFyYWN0ZXJzPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRCdXR0b24gXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICDsnoUg66ClXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRCdXR0b24+XG4gICAgICAgICAgICA8L0lucHV0RGF0YXM+XG4gICAgICAgIDwvQ29tbWVudHNXcmFwPlxuICAgIClcbn0iLCJpbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vY29tcG9uZW50L0FydGljbGVcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcbiAgICBjb3JwOiBcInNlZ3llXCIsXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcbiAgICBjb3JwOiBcInNlZ3llXCIsXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcbiAgICBjb3JwOiBcInNlZ3llXCIsXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcbiAgICBjb3JwOiBcInNlZ3llXCIsXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcbiAgICBjb3JwOiBcInNlZ3llXCIsXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIHRpdGxlOiBcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXG4gICAgaW1hZ2U6XG4gICAgICBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIuuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvFwiLFxuICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcbiAgICBjb3JwOiBcInNlZ3llXCIsXG4gICAgcHVibGlzaGVkOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY3JlYXRlQXQ6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydGljbGVDb250YWluZXIoeyBpZCB9KSB7XG4gIGNvbnN0IG5ld3MgPSBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSk7XG4gIHJldHVybiA8QXJ0aWNsZSBuZXdzPXtuZXdzfSAvPjtcbn1cbiIsImltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvQXJ0aWNsZUNvbnRhaW5lclwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgRGV0YWlsUGFnZUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYGA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGFpbFBhZ2UoeyBtYXRjaCB9KSB7XG4gIGNvbnNvbGUubG9nKFwiRGV0YWlsUGFnZVwiKTtcbiAgY29uc3QgeyBpZCB9ID0gbWF0Y2gucGFyYW1zO1xuICByZXR1cm4gKFxuICAgIDxEZXRhaWxQYWdlQ29udGFpbmVyPlxuICAgICAgPEFydGljbGVDb250YWluZXIgaWQ9e2lkfSAvPlxuICAgIDwvRGV0YWlsUGFnZUNvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSwgRGl2aWRlciwgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50L01vZGFsXCI7XG5pbXBvcnQgUGhvdG9DYW1lcmEgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYVwiOyBcbmltcG9ydCBTaWduSW4gZnJvbSBcIi4vU2lnbmluXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IFVzZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJiBoNiB7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFVzZXJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4NHB4O1xuICB3aWR0aDogODRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAmIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAmIC5NdWlCdXR0b25CYXNlLXJvb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjUsIDY5LCA3MywgMC4zKSxcbiAgICAgIDAgMXB4IDNweCAxcHggcmdiYSg2NSwgNjksIDczLCAwLjE1KTtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgcmlnaHQ6IC04cHg7XG4gICAgYm90dG9tOiAtOHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW51ID0gc3R5bGVkKEJ1dHRvbilgXG4gICYuTXVpQnV0dG9uQmFzZS1yb290IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAmIGEge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQnRuV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTdweDtcbmA7XG5cbmNvbnN0IEF2YXRhciA9IHN0eWxlZChJY29uQnV0dG9uKWBcbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaW1hZ2UgJiZcbiAgICBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtwcm9wcy5pbWFnZX0pO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2luTW9kYWwsIHNldExvZ2luTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5mb01vZGFsLCBzZXRJbmZvTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCIvYXV0aC9jaGVja1VzZXJcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0TG9naW4odHlwZW9mIHJlcy5kYXRhLnVzZXIgIT09IFwidW5kZWZpbmVkXCIpO1xuICAgICAgICBzZXRVc2VySW5mbyhyZXMuZGF0YS51c2VyKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldExvZ2dlZEluKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tMb2dpbk1vZGFsID0gKCkgPT4ge1xuICAgIHNldExvZ2luTW9kYWwoIWxvZ2luTW9kYWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrSW5mb01vZGFsID0gKCkgPT4ge1xuICAgIHNldEluZm9Nb2RhbCghaW5mb01vZGFsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRGaWxlID0gKGUpID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImltZ1wiLCBlLnRhcmdldC5maWxlc1swXSk7XG5cbiAgICBheGlvc1xuICAgICAgLnBhdGNoKGAvYXV0aC9pbWcvJHt1c2VySW5mby5zbnNJZH1gLCBmb3JtRGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXNlckluZm8oe1xuICAgICAgICAgIC4uLnVzZXJJbmZvLFxuICAgICAgICAgIGltYWdlOiByZXMuZGF0YS51cmwsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2dpbiA/IChcbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrSW5mb01vZGFsfVxuICAgICAgICAgIGltYWdlPXt1c2VySW5mbyAmJiB1c2VySW5mby5pbWFnZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tMb2dpbk1vZGFsfVxuICAgICAgICA+XG4gICAgICAgICAg66Gc6re47J24IC8g6rCA7J6FXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cblxuICAgICAge2xvZ2luTW9kYWwgJiYgKFxuICAgICAgICA8TW9kYWwgb249e2xvZ2luTW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xpY2tMb2dpbk1vZGFsfT5cbiAgICAgICAgICA8U2lnbkluIC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuXG4gICAgICB7aW5mb01vZGFsICYmIChcbiAgICAgICAgPE1vZGFsIG9uPXtpbmZvTW9kYWx9IG9uQ2xpY2tDbG9zZT17aGFuZGxlQ2xpY2tJbmZvTW9kYWx9PlxuICAgICAgICAgIDxVc2VyQ29udGFpbmVyPlxuICAgICAgICAgICAgPFVzZXJJbm5lcj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJJbmZvICYmIHVzZXJJbmZvLmltYWdlfSAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBpZD1cImltZ1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImltZ1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFkZEZpbGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1nXCI+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidXBsb2FkIHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9Vc2VySW5uZXI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgICAgIHt1c2VySW5mbyAmJiB1c2VySW5mby5uaWNrfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvVXNlckNvbnRhaW5lcj5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxNZW51IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvdXNlci9zY3JhcFwiPuyKpO2BrOueqTwvTGluaz5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgICA8TWVudSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL3VzZXIvY29tbWVudFwiPuuCtCDrjJPquIA8L0xpbms+XG4gICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPEJ0bldyYXA+XG4gICAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvbG9nb3V0XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAg66Gc6re47JWE7JuDXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQnRuV3JhcD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgUGFwZXIsIElucHV0QmFzZSwgSWNvbkJ1dHRvbiwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIjtcbmltcG9ydCBMb2NhdGlvbk9uSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT25cIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiBcIjJweCA0cHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiA0MDAsXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luTGVmdDogOCxcbiAgICBmbGV4OiAxLFxuICB9LFxuICBpY29uQnV0dG9uOiB7XG4gICAgcGFkZGluZzogMTAsXG4gIH0sXG4gIGRpdmlkZXI6IHtcbiAgICBoZWlnaHQ6IDI4LFxuICAgIG1hcmdpbjogNCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goeyBoYW5kbGVHZXRMb2NhdGlvbiwgYWRkcmVzcyB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZVRleHQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0U2VhcmNocyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uU2VhcmNoKHRleHQpXG4gICAgICAudGhlbigocmVzcG9uc2UsIGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgY29tcG9uZW50PVwiZm9ybVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBlbGV2YXRpb249ezN9PlxuICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259IG9uQ2xpY2s9e2hhbmRsZUdldExvY2F0aW9ufT5cbiAgICAgICAgPExvY2F0aW9uT25JY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8RGl2aWRlciBjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn0gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIC8+XG4gICAgICA8SW5wdXRCYXNlXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2VUZXh0fVxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgdmFsdWU9e2FkZHJlc3N9XG4gICAgICAvPlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXRTZWFyY2hzfVxuICAgICAgPlxuICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvUGFwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgZ29vZ2xlTG9naW5JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2dvb2dsZV9sb2dpbl9idXR0b24ucG5nXCI7XG5pbXBvcnQga2FrYW9Mb2dpbkltYWdlIGZyb20gXCIuLi8uLi9pbWFnZXMva2FrYW9fbG9naW5fYnV0dG9uLnBuZ1wiO1xuXG5jb25zdCBTaWduSW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICYgLk11aUJ1dHRvbi1yb290IHtcbiAgICBtYXJnaW46IDJweDtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzKSA9PiBwcm9wcy5pbWFnZX0pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5gO1xuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzY3Njc2NztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XG4gIHJldHVybiAoXG4gICAgPFNpZ25JbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5b7J6R7J2A66Gc6rOgXSDri6TsnYwg6rOE7KCV7Jy866GcIOuhnOq3uOyduDwvVGl0bGVDb250YWluZXI+XG4gICAgICA8YSBocmVmPVwiL2F1dGgvZ29vZ2xlXCI+XG4gICAgICAgIDxTdHlsZWRCdXR0b24gaW1hZ2U9e2dvb2dsZUxvZ2luSW1hZ2V9IC8+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiL2F1dGgva2FrYW9cIj5cbiAgICAgICAgPFN0eWxlZEJ1dHRvbiBpbWFnZT17a2FrYW9Mb2dpbkltYWdlfSAvPiBcbiAgICAgIDwvYT5cbiAgICA8L1NpZ25JbkNvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IExvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1hZ2VzL2xvZ28ucG5nXCI7XG5pbXBvcnQgTG9naW5CdG4gZnJvbSBcIi4uL2NvbXBvbmVudC9Mb2dpbkJ0blwiO1xuaW1wb3J0IFNlYXJjaENvbnRhaW5lciBmcm9tIFwiLi9TZWFyY2hDb250YWluZXJcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwdnc7XG4gIGJveC1zaGFkb3c6IHJnYigyMzgsIDIzOCwgMjM4KSAwcHggMXB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEzMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMTBweDtcbmA7XG5cbmNvbnN0IFJpZ2h0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gICYgZm9ybSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG5gO1xuY29uc3QgTG9nbyA9IHN0eWxlZChCdXR0b24pYFxuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsocHJvcHMpID0+IHByb3BzLmltYWdlfSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdOQkNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPElubmVyPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICA8TG9nbyBpbWFnZT17TG9nb0ltYWdlfSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxSaWdodEl0ZW0+XG4gICAgICAgICAgPFNlYXJjaENvbnRhaW5lciAvPlxuICAgICAgICAgIDxMb2dpbkJ0biAvPlxuICAgICAgICA8L1JpZ2h0SXRlbT5cbiAgICAgIDwvSW5uZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnQvU2VhcmNoXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBnZXRVc2Vyc0xvY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoQ29udGFpbmVyKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFVzZXJzTG9jYXRpb24oKS50aGVuKChsb2NhdGlvbikgPT4gc2V0TG9jYXRpb24oeyAuLi5sb2NhdGlvbiB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlR2V0TG9jYXRpb24gPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKTtcbiAgICBheGlvc1xuICAgICAgLmdldChcIi9sb2NhdGlvblwiLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiBzZXRBZGRyZXNzKHJlcy5kYXRhKSk7XG4gIH07XG5cbiAgcmV0dXJuIDxTZWFyY2ggaGFuZGxlR2V0TG9jYXRpb249e2hhbmRsZUdldExvY2F0aW9ufSBhZGRyZXNzPXthZGRyZXNzfSAvPjtcbn1cbiIsImltcG9ydCBHTkJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9HTkJDb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR05CUGFnZSgpIHtcbiAgcmV0dXJuIDxHTkJDb250YWluZXIgLz47XG59XG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7Q2FyZCwgQ2FyZEhlYWRlciwgQ2FyZE1lZGlhLCBDYXJkQ29udGVudCxcbiAgICBBdmF0YXIsIEljb25CdXR0b24sIFR5cG9ncmFwaHksIENhcmRBY3Rpb25zfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IEZhdm9yaXRlIGFzIEZhdm9yaXRlSWNvbiwgU2hhcmUgYXMgU2hhcmVJY29uLCBNb3JlVmVydCBhcyBNb3JlVmVydEljb259IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucyc7XG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCI7XG5cbi8vdGVzdCDspJFcbmltcG9ydCB7Y2FsbEFwaVNjcmFwfSBmcm9tICcuLi8uLi9jb21tb24vYXBpJztcblxuY29uc3QgU3R5bGVkQ2FyZCA9IHN0eWxlZChDYXJkKWBcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1vdXQ7XG4gICY6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgwLDAsMCwuMSksIDBweCAycHggM3B4IHJnYmEoMCwwLDAsLjEyKSwgMHB4IDFweCAzcHggcmdiYSgwLDAsMCwuMTQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5jb25zdCBCb3R0b21JY29uc1dyYXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICB3aWR0aDogMzMwLFxuICAgICAgbWluV2lkdGg6IDMzMCxcbiAgICAgIGhlaWdodDogNDQwLFxuICAgICAgbWFyZ2luOiBcIjAgN3B4XCIsXG4gICAgfSxcbiAgICBtZWRpYToge1xuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZ1RvcDogXCI2NiVcIiAvLyAxNjo5XG4gICAgfSxcbiAgICBkaXN0YW5jZToge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiLFxuICAgICAgZm9udFNpemU6IFwic21hbGxcIixcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgfVxuICB9KSk7XG4vLyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSDrpbwg7J6F66Cl67Cb7JWEIENhcmTrpbwg66as7YS07ZWY64qUIOy7tO2PrOuEjO2KuCDtlajsiJhcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NDYXJkKCBwcm9wcyApIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3Qge2ltYWdlLCBjYXRlZ29yeSwgdGl0bGUsIGRhdGUsIGFkZHJlc3MsIHRlbCwgZGlzdH0gPSBwcm9wcztcbiAgICAvLyBkZXNjaXByaW9uIDEwMOq4gOyekCDsoJztlZwgKyDrp5DspITsnoTtkZxcbiAgICAvLyBjb25zdCBzdWJTdHJpbmcgPSAoZGVzYyxjb3VudCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiBkZXNjID09PSBcInN0cmluZ1wiO1xuICAgIC8vICAgICByZXR1cm4gKGlzU3RyaW5nICYmIGRlc2MubGVuZ3RoID49IGNvdW50PyBkZXNjLnN1YnN0cmluZygwLGNvdW50KSArIFwiLi4uXCIgOiBkZXNjKTtcbiAgICAvLyB9XG5cbiAgICAvLyB0ZXN0XG4gICAgLy8gcmVkdXgg6rWs7ZiEIO2bhCBhcnRpY2xlIOunpOqwnOuzgOyImOulvCByZWR1eCBzdG9yZeulvCDthrXtlbQg7KCV7ZmV7ZWcIOuNsOydtO2EsOuhnCDrhJjqsqjspJjslbztlahcbiAgICBjb25zdCB0ZXN0SGFuZGxlT25DbGlja1NjcmFwID0gKGFydGljbGUpID0+IHtcbiAgICAgIGNhbGxBcGlTY3JhcChhcnRpY2xlKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkQ2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cIm5ld3NcIj5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnk/IGNhdGVnb3J5LnNsaWNlKDAsMikgOiAnJ31cbiAgICAgICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3Rpb249e1xuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpdGxlPXs8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5Pn1cbiAgICAgICAgICAgIHN1YmhlYWRlcj17ZGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAgICB7YWRkcmVzc308YnIvPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgIHtgVEVMIC4ke3RlbH1gfTxici8+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8Qm90dG9tSWNvbnNXcmFwPlxuICAgICAgICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiIG9uQ2xpY2s9e3Rlc3RIYW5kbGVPbkNsaWNrU2NyYXB9PlxuICAgICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2hhcmVcIj5cbiAgICAgICAgICAgICAgICA8U2hhcmVJY29uIC8+XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJkaXN0YW5jZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXN0YW5jZX0+XG4gICAgICAgICAgICAgICAge2Ake2Rpc3QvMTAwMH1rbWB9XG4gICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8L0JvdHRvbUljb25zV3JhcD5cbiAgICAgICAgPC9TdHlsZWRDYXJkPlxuICAgICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBQYXBlciwgVGFicywgVGFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjBweFwiXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtcIuyghOyytFwiLCBcIuygley5mFwiLCBcIuqyveygnFwiLCBcIuyCrO2ajFwiXTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIHNxdWFyZSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgPFRhYnNcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBpbmRpY2F0b3JDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgIHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJcbiAgICAgID5cbiAgICAgICAge2NhdGVnb3J5TGlzdC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgIDxUYWIga2V5PXtpZHh9IGxhYmVsPXtpdGVtfSBzdHlsZT17e2ZvbnRTaXplOlwiMS4xcmVtXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwifX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvVGFicz5cbiAgICA8L1BhcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICB9LFxuICB0ZXh0RmllbGQ6IHtcbiAgICB3aWR0aDogMjAwLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gbm9WYWxpZGF0ZT5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgaWQ9XCJkYXRlXCJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9XCIyMDE3LTA1LTI0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cbiAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XG4gICAgICAgICAgc2hyaW5rOiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG4iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgY29uc3Qge29uQ2xpY2tMb2NhdGlvbn0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5JyB2YXJpYW50PSdvdXRsaW5lZCcgb25DbGljaz17b25DbGlja0xvY2F0aW9ufT7tmITsnqzsnITsuZjsgqzsmqk8L0J1dHRvbj5cbiAgICApXG59IiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBJdGVtQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XG5pbXBvcnQge1xuICBBcnJvd0JhY2tJb3NPdXRsaW5lZCxcbiAgQXJyb3dGb3J3YXJkSW9zT3V0bGluZWQsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcblxuY29uc3QgU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTA1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTA1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlICogLTM0NH1weDtcbiAgcGFkZGluZy1ib3R0b206NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbmA7XG5jb25zdCBBcnJvd0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBBcnJvd0hvdmVyQWN0aW9uID0gY3NzYFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgZm9udC1zaXplOiA4NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC41NTtcbiAgICBib3gtc2hhZG93OiAxNnB4IDE4cHggMjhweCAtM3B4IHJnYmEoMTQzLCAxNDMsIDE0MywgMC43NSk7XG4gIH1cbmA7XG5jb25zdCBQcmV2QXJyb3cgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIGNvbG9yOiAjYzFjMWMxO1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gMCA6IDAuNzUpfTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQ0MHB4O1xuICB6LWluZGV4OiAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gLTEwIDogMTApfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICR7KHByb3BzKSA9PiAocHJvcHMudmlzaWJsZSA9PT0gXCJub25lXCIgPyBcIlwiIDogQXJyb3dIb3ZlckFjdGlvbil9O1xuYDtcbmNvbnN0IE5leHRBcnJvdyA9IHN0eWxlZChQcmV2QXJyb3cpYFxuICAkeyhwcm9wcykgPT4gKHByb3BzLnZpc2libGUgPT09IFwibm9uZVwiID8gXCJcIiA6IEFycm93SG92ZXJBY3Rpb24pfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBwcm9wcztcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbY2FyZHNQZXJQYWdlLCBzZXRDYXJkc1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XG4gIGNvbnN0IG1heCA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGl0ZW1zLmxlbmd0aCAtIDEsIFtpdGVtc10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICBzZXRDYXJkc1BlclBhZ2UoTWF0aC5mbG9vcihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLyAzMzcpKTtcbiAgfSxbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXSk7ICBcbiAgY29uc29sZS5sb2coaXRlbXMubGVuZ3RoKTtcbiAgY29uc3Qgb25DbGlja1ByZXYgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlKGFjdGl2ZSAtIGNhcmRzUGVyUGFnZSA+IDAgPyBhY3RpdmUgLSBjYXJkc1BlclBhZ2UgOiAwKTtcbiAgfTtcbiAgY29uc3Qgb25DbGlja05leHQgPSAobWF4KSA9PiB7XG4gICAgc2V0QWN0aXZlKGFjdGl2ZSArIGNhcmRzUGVyUGFnZSA8IG1heCA/IGFjdGl2ZSArIGNhcmRzUGVyUGFnZSA6IG1heCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFNsaWRlckNvbnRhaW5lciBkZXZpY2U9e1wid2ViXCJ9PlxuICAgICAgPEFycm93Q29udGFpbmVyIGRldmljZT17XCJ3ZWJcIn0+XG4gICAgICAgIDxQcmV2QXJyb3cgdmlzaWJsZT17YWN0aXZlIDw9IDAgPyBcIm5vbmVcIiA6IFwiXCJ9IG9uQ2xpY2s9e29uQ2xpY2tQcmV2fT5cbiAgICAgICAgICA8QXJyb3dCYWNrSW9zT3V0bGluZWQgc3R5bGU9e3sgZm9udFNpemU6IDc1IH19IC8+XG4gICAgICAgIDwvUHJldkFycm93PlxuICAgICAgICA8TmV4dEFycm93XG4gICAgICAgICAgdmlzaWJsZT17YWN0aXZlID49IG1heCgpID8gXCJub25lXCIgOiBcIlwifVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tOZXh0KG1heCgpKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NPdXRsaW5lZCBzdHlsZT17eyBmb250U2l6ZTogNzUgfX0gLz5cbiAgICAgICAgPC9OZXh0QXJyb3c+XG4gICAgICA8L0Fycm93Q29udGFpbmVyPlxuICAgICAgPENhcmRDb250YWluZXIgYWN0aXZlPXthY3RpdmV9IHBhZ2U9e2NhcmRzUGVyUGFnZX0+XG4gICAgICAgIHsvKiB0ZXN0TmV3c+uKlCDsnbQg7ZuEIHNhZ2EtPmFwaS0+c3RvcmUg66W8IO2Gte2VtCDsoITri6zrkJwgcmVzcG9uc2Xsl5Ag65Sw6528IOuzgOqyvSovfVxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8SXRlbUNhcmQga2V5PXtpbmRleH0gey4uLml0ZW19IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICA8L1NsaWRlckNvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIHZhcmlhbnQ9J291dGxpbmVkJz4gVE9VUiBBUEkgVEVTVCA8L0J1dHRvbj5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuLi9jb21wb25lbnQvQ2F0ZWdvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlDb250YWluZXIoKSB7XG4gIHJldHVybiA8Q2F0ZWdvcnkgLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi4vY29tcG9uZW50L0RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIDxEYXRlIC8+O1xufVxuIiwiaW1wb3J0IExvY2F0aW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudC9Mb2NhdGlvbkJ1dHRvbic7XG5pbXBvcnQgVGVzdEFQSUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnQvVGVzdEFQSUJ1dHRvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Z2V0VXNlcnNMb2NhdGlvbn0gZnJvbSAnLi4vLi4vY29tbW9uL2FwaSc7XG5cbmNvbnN0IFRlc3RCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25Db250YWluZXIoKSB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGdldFVzZXJzTG9jYXRpb24oKTtcbiAgICB9LFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxUZXN0QnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxMb2NhdGlvbkJ1dHRvbiBvbkNsaWNrTG9jYXRpb249e2dldFVzZXJzTG9jYXRpb259Lz5cbiAgICAgICAgICAgIDxUZXN0QVBJQnV0dG9uIC8+XG4gICAgICAgIDwvVGVzdEJ1dHRvbnNDb250YWluZXI+XG4gICAgKVxufSIsImltcG9ydCBTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50L1NsaWRlcic7XG5cbmNvbnN0IG5ld3MgPSBbXG4gICAgeyBcbiAgICAgICAgaW1hZ2U6XCJodHRwOi8vd3d3Lmppbmp1LmdvLmtyL0Ntc011bHRpRmlsZS92aWV3LmRvP211bHRpZmlsZUlkPU1GMDAwMDA1NDEmaWR4PTEzMzkxXCIsXG4gICAgICAgIGNhdGVnb3J5Olwi7LaV7KCcXCIsIFxuICAgICAgICB0aXRsZTpg7KeE7KO864Ko6rCV7Jyg65Ox7LaV7KCcYCxcbiAgICAgICAgZGF0ZTogYDIwMjAvMTAvMTItMjAyMC8xMC8yMmAsXG4gICAgICAgIGFkZHJlc3M6IFwi64yA6rWs6rSR7Jet7IucIOuPmeq1rCDrj5ntmZTsgqwx6ri4IDFcIixcbiAgICAgICAgdGVsOiBcIjA1My05ODAtNzkwMFwiLFxuICAgICAgICBkaXN0OjMwMCxcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGltYWdlOlwiaHR0cDovL3d3dy5qaW5qdS5nby5rci9DbXNNdWx0aUZpbGUvdmlldy5kbz9tdWx0aWZpbGVJZD1NRjAwMDAwNTQxJmlkeD0xMzM5MVwiLFxuICAgICAgICBjYXRlZ29yeTpcIuy2leygnFwiLCBcbiAgICAgICAgdGl0bGU6YOynhOyjvOuCqOqwleycoOuTsey2leygnGAsXG4gICAgICAgIGRhdGU6IGAyMDIwLzEwLzEyLTIwMjAvMTAvMjJgLFxuICAgICAgICBhZGRyZXNzOiBcIuuMgOq1rOq0keyXreyLnCDrj5nqtawg64+Z7ZmU7IKsMeq4uCAxXCIsXG4gICAgICAgIHRlbDogXCIwNTMtOTgwLTc5MDBcIixcbiAgICAgICAgZGlzdDozMDAsXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBpbWFnZTpcImh0dHA6Ly93d3cuamluanUuZ28ua3IvQ21zTXVsdGlGaWxlL3ZpZXcuZG8/bXVsdGlmaWxlSWQ9TUYwMDAwMDU0MSZpZHg9MTMzOTFcIixcbiAgICAgICAgY2F0ZWdvcnk6XCLstpXsoJxcIiwgXG4gICAgICAgIHRpdGxlOmDsp4Tso7zrgqjqsJXsnKDrk7HstpXsoJxgLFxuICAgICAgICBkYXRlOiBgMjAyMC8xMC8xMi0yMDIwLzEwLzIyYCxcbiAgICAgICAgYWRkcmVzczogXCLrjIDqtazqtJHsl63si5wg64+Z6rWsIOuPme2ZlOyCrDHquLggMVwiLFxuICAgICAgICB0ZWw6IFwiMDUzLTk4MC03OTAwXCIsXG4gICAgICAgIGRpc3Q6MzAwLFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgaW1hZ2U6XCJodHRwOi8vd3d3Lmppbmp1LmdvLmtyL0Ntc011bHRpRmlsZS92aWV3LmRvP211bHRpZmlsZUlkPU1GMDAwMDA1NDEmaWR4PTEzMzkxXCIsXG4gICAgICAgIGNhdGVnb3J5Olwi7LaV7KCcXCIsIFxuICAgICAgICB0aXRsZTpg7KeE7KO864Ko6rCV7Jyg65Ox7LaV7KCcYCxcbiAgICAgICAgZGF0ZTogYDIwMjAvMTAvMTItMjAyMC8xMC8yMmAsXG4gICAgICAgIGFkZHJlc3M6IFwi64yA6rWs6rSR7Jet7IucIOuPmeq1rCDrj5ntmZTsgqwx6ri4IDFcIixcbiAgICAgICAgdGVsOiBcIjA1My05ODAtNzkwMFwiLFxuICAgICAgICBkaXN0OjMwMCxcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGltYWdlOlwiaHR0cDovL3d3dy5qaW5qdS5nby5rci9DbXNNdWx0aUZpbGUvdmlldy5kbz9tdWx0aWZpbGVJZD1NRjAwMDAwNTQxJmlkeD0xMzM5MVwiLFxuICAgICAgICBjYXRlZ29yeTpcIuy2leygnFwiLCBcbiAgICAgICAgdGl0bGU6YOynhOyjvOuCqOqwleycoOuTsey2leygnGAsXG4gICAgICAgIGRhdGU6IGAyMDIwLzEwLzEyLTIwMjAvMTAvMjJgLFxuICAgICAgICBhZGRyZXNzOiBcIuuMgOq1rOq0keyXreyLnCDrj5nqtawg64+Z7ZmU7IKsMeq4uCAxXCIsXG4gICAgICAgIHRlbDogXCIwNTMtOTgwLTc5MDBcIixcbiAgICAgICAgZGlzdDozMDAsXG4gICAgfSxcbl1cbi8vIOuNlOuvuOuNsOydtO2EsCDribTsiqRcbmNvbnN0IHRlc3ROZXdzID0gWy4uLm5ld3MsIC4uLm5ld3MsIC4uLm5ld3Muc2xpY2UoMCwyKV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlckNvbnRhaW5lcihwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTbGlkZXIgaXRlbXM9e3Rlc3ROZXdzfS8+XG4gICAgKVxufSIsImltcG9ydCBDYXRlZ29yeUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0NhdGVnb3J5Q29udGFpbmVyXCI7XG5pbXBvcnQgRGF0ZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0RhdGVDb250YWluZXJcIjtcbmltcG9ydCBMb2NhdGlvbkNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL0xvY2F0aW9uQ29udGFpbmVyXCI7XG5pbXBvcnQgU2xpZGVyQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXIvU2xpZGVyQ29udGFpbmVyXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG5gO1xuY29uc3QgRmlsdGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDBweDtcbmA7XG4vLyBjb25zdCBDb250ZW50c1dyYXAgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBoZWlnaHQ6IDQ0MHB4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiA8Q29udGVudHNXcmFwPlxuICAgICAgICA8U2xpZGVyQ29udGFpbmVyIC8+XG4gICAgICA8L0NvbnRlbnRzV3JhcD4gKi99XG4gICAgICA8RmlsdGVyV3JhcD5cbiAgICAgICAgPExvY2F0aW9uQ29udGFpbmVyIC8+XG4gICAgICA8L0ZpbHRlcldyYXA+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZ29vZ2xlX2xvZ2luX2J1dHRvbi4xY2UxYWFhNWExMjdmYTNlNDkyYTEyYmI2MmY5OTMwNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwia2FrYW9fbG9naW5fYnV0dG9uLmFkNWIyMDAzYWQzODE4Yjc4ZjkwOTQ0YTE4NzNkYjRjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJsb2dvLmQ4NWQxZGJjZWZkOTczMjhiMmFiMjAwOTc1M2JiYTI5LnBuZ1wiOyIsImltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG4vLyBzdG9yZSBDb250ZXh0QVBJ66GcIOqwkOyLuOq4sFxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG4iLCJpbXBvcnQgSWNvbkJveCBmcm9tICcuLi8uLi9jb21tb24vY29tcG9uZW50L0ljb24nO1xuXG5jb25zdCBjb3JwcyA9IFtcImdvb2dsZVwiLFwiZG9uZ2FcIixcImhhbmlcIixcInNic1wiLFwic2VneWVcIl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JwQ2F0ZWdvcnkoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge2NvcnBzLm1hcCgoY29ycCxpbmRleCkgPT4gXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPEljb25Cb3ggXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCIxMHB4XCJcbiAgICAgICAgICAgICAgICBuYW1lPXtjb3JwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBWaWV3VHlwZUJ0biBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZUJ0blwiO1xuaW1wb3J0IFZpZXdUeXBlUGFnZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudC9WaWV3VHlwZVBhZ2VcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXG4gICAgdGl0bGU6IFwi66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAuLi4g66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAg66eI7Iqk7YGsIO2SiOygiCDrjIDrnoBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY29tcGFueTogXCLsobDshKDsnbzrs7RcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxuICAgIGNhdGVnb3J5OiBcIklUXCIsXG4gICAgdGl0bGU6IFwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi7YyU66Gc7JuMIOunjuydgCDqs4TsoJUg64W466as64qUIOqzteqyqSwg7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5Ag7IS87YSw7J24IOyymSDqsIDsnqUg6rO16rKpIOyEseqzteuloCDsoovsnYAg7Y64Li4u66y467KV6rO8IOyyoOyekCDsmKTrpZgg7Jyg7J2Y7ZWc64uk66m0IOyWtOuKkCDsoJXrj4Qg67Cp7Ja0IOqwgOuKpVwiLFxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxuICAgIGNhdGVnb3J5OiBcIklUXCIsXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXG4gIH0sXG5dO1xuLy8gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVxuLy8g7JqU6riw7JqUIOuUsOudvO2VmOyekFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzTGlzdCgpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Vmlld1R5cGVCdG4gLz5cbiAgICAgIDxWaWV3VHlwZVBhZ2UgZGF0YT17ZGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBDb3JwQ2F0ZWdvcnkgZnJvbSAnLi4vY29tcG9uZW50L0NvcnBDYXRlZ29yeSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ycENhdGVnb3J5Q29udGFpbmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb3JwQ2F0ZWdvcnkgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59IiwiaW1wb3J0IE5ld3NMaXN0IGZyb20gXCIuLi9jb21wb25lbnQvTmV3c0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c0NvbnRhaW5lcigpIHtcbiAgcmV0dXJuIDxOZXdzTGlzdCAvPjtcbn1cbiIsImltcG9ydCBDb3JwQ2F0ZWdvcnlDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Db3JwQ2F0ZWdvcnlDb250YWluZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTmV3c0NvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVyL05ld3NDb250YWluZXJcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3c1BhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiA8Q29ycENhdGVnb3J5Q29udGFpbmVyIC8+ICovfVxuICAgICAgPE5ld3NDb250YWluZXIgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgUGFwZXIsIEZvcm1Db250cm9sLCBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBWaWV3VHlwZVBhZ2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvVmlld1R5cGVQYWdlXCI7XG5pbXBvcnQgVmlld1R5cGVCdG4gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnQvVmlld1R5cGVCdG5cIjtcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGltYWdlOlxuICAgICAgXCJodHRwczovL2NwaG90by5hc2lhZS5jby5rci9saXN0aW1nbGluay8xLzIwMjAwNjMwMDgyNjEzMzMxODZfMTU5MzQ3MzE3NC5qcGdcIixcbiAgICBjYXRlZ29yeTogXCJNQVNLXCIsXG4gICAgdGl0bGU6IFwi66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAuLi4g66eI7Iqk7YGsIO2SiOygiCDrjIDrnoAg66eI7Iqk7YGsIO2SiOygiCDrjIDrnoBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY29tcGFueTogXCLsobDshKDsnbzrs7RcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTYxNTMzNF85NTU1LmpwZ1wiLFxuICAgIGNhdGVnb3J5OiBcIklUXCIsXG4gICAgdGl0bGU6IFwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi7YyU66Gc7JuMIOunjuydgCDqs4TsoJUg64W466as64qUIOqzteqyqSwg7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5Ag7IS87YSw7J24IOyymSDqsIDsnqUg6rO16rKpIOyEseqzteuloCDsoovsnYAg7Y64Li4u66y467KV6rO8IOyyoOyekCDsmKTrpZgg7Jyg7J2Y7ZWc64uk66m0IOyWtOuKkCDsoJXrj4Qg67Cp7Ja0IOqwgOuKpVwiLFxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcbiAgICBjYXRlZ29yeTogXCJJVFwiLFxuICAgIHRpdGxlOiBcIuuLpOyLnCDtlZwg67KIIOu2ge2VnCDssI3snYAg66+46rWtLCDsnbTrsojsl5Qg7JWU7Zi47ZmU7Y+QIOqzhOyglSDrhbjrprDri6RcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwi66+46rWtLCDslZ7snLzroZwgMjgw6rCcIOu2iOuylSDslZTtmLjtmZTtj5Ag6rOE7KCVIOyVleyImO2VnOuLpC4uLuuMgOu2gOu2hCDrtoHtlZzqs7wg7KSR6rWt7J2YIOqygywg7J6R64WE7JeQ66eMIOyVlO2YuO2ZlO2PkOyXkOyEnCDsspzrrLjtlZnsoIHsnbgg64+I7J20IOyCrOudvOyguC4uLuKAnOuRkOqzoCDrs7Tsp4Ag7JWK6rKg64uk4oCd64qUIOuvuOq1reydmCDqsr3qs6BcIixcbiAgICBvcmlnaW5hbExpbms6IFwiaHR0cHM6Ly9kZXZoeXVrLmNvbVwiLFxuICAgIGRhdGU6IG5ldyBEYXRlKCkudG9TdHJpbmcoKSxcbiAgICBjb21wYW55OiBcIuuztOyViOuJtOyKpFwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly93d3cuYm9hbm5ld3MuY29tL21lZGlhL3VwRmlsZXMyLzIwMjAvMDgvNTcxNTUzNTUwXzgwNzYuanBnXCIsXG4gICAgY2F0ZWdvcnk6IFwiSVRcIixcbiAgICB0aXRsZTogXCLri6Tsi5wg7ZWcIOuyiCDrtoHtlZwg7LCN7J2AIOuvuOq1rSwg7J2067KI7JeUIOyVlO2YuO2ZlO2PkCDqs4TsoJUg64W466aw64ukXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXG4gICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcImh0dHBzOi8vd3d3LmJvYW5uZXdzLmNvbS9tZWRpYS91cEZpbGVzMi8yMDIwLzA4LzU3MTU1MzU1MF84MDc2LmpwZ1wiLFxuICAgIGNhdGVnb3J5OiBcIklUXCIsXG4gICAgdGl0bGU6IFwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCLrr7jqta0sIOyVnuycvOuhnCAyODDqsJwg67aI67KVIOyVlO2YuO2ZlO2PkCDqs4TsoJUg7JWV7IiY7ZWc64ukLi4u64yA67aA67aEIOu2ge2VnOqzvCDspJHqta3snZgg6rKDLCDsnpHrhYTsl5Drp4wg7JWU7Zi47ZmU7Y+Q7JeQ7IScIOyynOusuO2VmeyggeyduCDrj4jsnbQg7IKs65287KC4Li4u4oCc65GQ6rOgIOuztOyngCDslYrqsqDri6TigJ3ripQg66+46rWt7J2YIOqyveqzoFwiLFxuICAgIG9yaWdpbmFsTGluazogXCJodHRwczovL2Rldmh5dWsuY29tXCIsXG4gICAgZGF0ZTogbmV3IERhdGUoKS50b1N0cmluZygpLFxuICAgIGNvbXBhbnk6IFwi67O07JWI64m07IqkXCIsXG4gIH0sXG5dO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjM2Y2M2JmXCIsXG4gICAgYm9yZGVyQ29sb3I6IFwiIzNmNjNiZlwiLFxuICB9LFxuICBmb3JtQ29udHJvbDoge1xuICAgIG1hcmdpbjogNCxcbiAgICBtaW5XaWR0aDogMTIwLFxuICB9LFxufSk7XG5cbmNvbnN0IE1lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwcHg7XG5gO1xuXG5jb25zdCBNZW51QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiAwO1xuXG4gICYgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMudmFsdWUgJiZcbiAgICBjc3NgXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzNmNjNiZjtcbiAgICBgfVxuYDtcblxuY29uc3QgRmlsdGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyB0YWIgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUodGFiID09PSBcInNjcmFwXCIgPyAwIDogMSk7XG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gW1wic2NyYXBcIiwgXCJjb21tZW50XCJdO1xuICBjb25zdCBvcmRlckxpc3QgPSBbXCJwdXNoXCIsIFwibGF0ZXN0XCIsIFwiY29tbWVudHNcIl07XG4gIC8v64u07J2AIOyInCwg7LWc7IugIOyInCwg64yT6riAIOunjuydgCDsiJxcblxuICBjb25zdCBtYWtlU2VsZWN0ID0gKHNlbGVjdExpc3QsIHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxuICAgICAgICA8U2VsZWN0IG5hdGl2ZSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgIHtzZWxlY3RMaXN0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYXBlciBlbGV2YXRpb249ezN9PlxuICAgICAgPE1lbnVDb250YWluZXI+XG4gICAgICAgIHtjYXRlZ29yeUxpc3QubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0YWIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0gPT09IHRhYik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51QnRuIGtleT17aWR4fSB2YWx1ZT17aXRlbSA9PT0gdGFiID8gMSA6IDB9PlxuICAgICAgICAgICAgICA8TGluayB0bz17YC91c2VyLyR7aXRlbX1gfT57aXRlbX08L0xpbms+XG4gICAgICAgICAgICA8L01lbnVCdG4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L01lbnVDb250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8RmlsdGVyV3JhcD5cbiAgICAgICAgICA8Vmlld1R5cGVCdG4gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge21ha2VTZWxlY3QoW1wi7KGw7ISgXCIsIFwi7KSR7JWZXCJdLCBvcmRlcil9XG4gICAgICAgICAgICB7bWFrZVNlbGVjdChvcmRlckxpc3QsIG9yZGVyKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GaWx0ZXJXcmFwPlxuICAgICAgICA8Vmlld1R5cGVQYWdlIGRhdGE9e2RhdGF9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFVzZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDb250YWluZXIoeyB0YWIgfSkge1xuICByZXR1cm4gPFVzZXIgdGFiPXt0YWJ9IC8+O1xufVxuIiwiaW1wb3J0IFVzZXJDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lci9Vc2VyQ29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJQYWdlKHsgbWF0Y2ggfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPFVzZXJDb250YWluZXIgdGFiPXttYXRjaC5wYXJhbXMudGFifSAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=