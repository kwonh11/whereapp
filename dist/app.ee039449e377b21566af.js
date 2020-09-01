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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _src_chat_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/chat/container */ "./src/chat/container/index.js");
/* harmony import */ var _src_detail_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/detail/container */ "./src/detail/container/index.js");
/* harmony import */ var _src_home_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/home/container */ "./src/home/container/index.js");
/* harmony import */ var _src_news_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/news/container */ "./src/news/container/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");






var customHistory = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])(); // router

function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Router"], {
    history: customHistory
  }, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/detail"
  }, "Detail"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/chat"
  }, "Chat"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/news/josun"
  }, "News"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/"
  }, "Home"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/detail",
    component: _src_detail_container__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/chat",
    component: _src_chat_container__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/news/:company",
    component: _src_news_container__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
    path: "/",
    exact: true,
    component: _src_home_container__WEBPACK_IMPORTED_MODULE_3__["default"]
  }))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/chat/container/index.js":
/*!*************************************!*\
  !*** ./src/chat/container/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
function Chat() {
  return /*#__PURE__*/React.createElement("div", null, "Chat\uC784");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/detail/container/index.js":
/*!***************************************!*\
  !*** ./src/detail/container/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
function Detail() {
  return /*#__PURE__*/React.createElement("div", null, "Detail");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/home/container/index.js":
/*!*************************************!*\
  !*** ./src/home/container/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
function Home() {
  return /*#__PURE__*/React.createElement("div", null, "Home\uC784");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");

 // store ContextAPI로 감싸기

react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/React.createElement(_app__WEBPACK_IMPORTED_MODULE_1__["default"], null, "AAAAAA"), document.getElementById('root'));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/component/Card.js":
/*!************************************!*\
  !*** ./src/news/component/Card.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsCard; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    root: {
      width: 330,
      minWidth: 330,
      height: 500,
      margin: "0 0.7rem"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9

    },
    avatarRed: {
      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["red"][500]
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

  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardHeader"], {
    avatar: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      "aria-label": "news",
      className: classes.avatar
    }, company ? company[0] + company[1] : ''),
    action: /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
      "aria-label": "settings"
    }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MoreVert"], null)),
    title: subString(title, 20),
    subheader: date
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
    className: classes.media,
    image: image,
    title: title
  }), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, subString(description, 80))), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    disableSpacing: true
  }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "add to favorites"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Favorite"], null)), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    "aria-label": "share"
  }, /*#__PURE__*/React.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Share"], null))));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/component/Slider.js":
/*!**************************************!*\
  !*** ./src/news/component/Slider.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/news/component/Card.js");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/arrow.png */ "./src/news/images/arrow.png");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    background-image: url(", ");\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    width: 80%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    padding: 1.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SliderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject(), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2());
var ArrowContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3());
var ArrowLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject4());
var ArrowRight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject5(), _images_arrow_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
function Slider(props) {
  // 렌더 속성값 패턴으로 chlidren 속성에 Array타입의 Card들이 입력됨
  // 항상 0부터 시작, 넘김 간격 5초
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var children = props.children;
  var totalCount = children.length;
  console.log(children);
  return /*#__PURE__*/React.createElement(SliderContainer, {
    width: "70vw",
    height: "50vh"
  }, /*#__PURE__*/React.createElement(CardContainer, null, /*#__PURE__*/React.createElement(ArrowContainer, null, /*#__PURE__*/React.createElement("span", null, "A"), /*#__PURE__*/React.createElement(ArrowRight, null)), children.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: index
    }, item, {
      active: index === active,
      pendingLeft: index === active - 1 || totalCount - 1,
      pendingRight: index === active + 1 || 0
    }));
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/container/index.js":
/*!*************************************!*\
  !*** ./src/news/container/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _component_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Slider */ "./src/news/component/Slider.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var testArr = [{
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
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
function Home(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(_component_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], null, testArr)));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/news/images/arrow.png":
/*!***********************************!*\
  !*** ./src/news/images/arrow.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "arrow.354bdfa763f3542654a4a763c854e58a.png");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9jb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RldGFpbC9jb250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvbWUvY29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9jb21wb25lbnQvU2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXdzL2NvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cy9pbWFnZXMvYXJyb3cucG5nIl0sIm5hbWVzIjpbImN1c3RvbUhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsIkFwcCIsIkRldGFpbCIsIkNoYXQiLCJOZXdzIiwiSG9tZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJ3aWR0aCIsIm1pbldpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibWVkaWEiLCJwYWRkaW5nVG9wIiwiYXZhdGFyUmVkIiwiYmFja2dyb3VuZENvbG9yIiwicmVkIiwiTmV3c0NhcmQiLCJpbWFnZSIsImNhdGVnb3J5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9yaWdpbmFsTGluayIsImRhdGUiLCJjb21wYW55IiwiY2xhc3NlcyIsInN1YlN0cmluZyIsImRlc2MiLCJjb3VudCIsImlzU3RyaW5nIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYXZhdGFyIiwiU2xpZGVyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJDYXJkQ29udGFpbmVyIiwiQXJyb3dDb250YWluZXIiLCJBcnJvd0xlZnQiLCJzcGFuIiwiQXJyb3dSaWdodCIsIkFycm93IiwiU2xpZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNoaWxkcmVuIiwidG90YWxDb3VudCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZXN0QXJyIiwiRGF0ZSIsInRvU3RyaW5nIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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c291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJyZWFjdC5idW5kbGVcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBcclxuICAgIFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgTGluayxcclxuICAgIFN3aXRjaFxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4uL3NyYy9jaGF0L2NvbnRhaW5lcic7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi4vc3JjL2RldGFpbC9jb250YWluZXInO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9zcmMvaG9tZS9jb250YWluZXInO1xyXG5pbXBvcnQgTmV3cyBmcm9tICcuLi9zcmMvbmV3cy9jb250YWluZXInO1xyXG5pbXBvcnQge2NyZWF0ZUJyb3dzZXJIaXN0b3J5fSBmcm9tIFwiaGlzdG9yeVwiO1xyXG5cclxuY29uc3QgY3VzdG9tSGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XHJcblxyXG4vLyByb3V0ZXJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Um91dGVyIGhpc3Rvcnk9e2N1c3RvbUhpc3Rvcnl9PlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9kZXRhaWxcIj5EZXRhaWw8L0xpbms+PGJyLz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvY2hhdFwiPkNoYXQ8L0xpbms+PGJyLz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbmV3cy9qb3N1blwiPk5ld3M8L0xpbms+PGJyLz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48YnIvPlxyXG4gICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGV0YWlsXCIgY29tcG9uZW50PXtEZXRhaWx9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jaGF0XCIgY29tcG9uZW50PXtDaGF0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbmV3cy86Y29tcGFueVwiIGNvbXBvbmVudD17TmV3c30gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIENoYXTsnoRcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIERldGFpbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIEhvbWXsnoRcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcclxuXHJcbi8vIHN0b3JlIENvbnRleHRBUEnroZwg6rCQ7Iu46riwXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHA+XHJcbiAgICAgICAgQUFBQUFBXHJcbiAgICA8L0FwcD5cclxuICAgICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4pO1xyXG4iLCJcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHtDYXJkLCBDYXJkSGVhZGVyLCBDYXJkTWVkaWEsIENhcmRDb250ZW50LFxyXG4gICAgQXZhdGFyLCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5LCBDYXJkQWN0aW9uc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZhdm9yaXRlIGFzIEZhdm9yaXRlSWNvbiwgU2hhcmUgYXMgU2hhcmVJY29uLCBNb3JlVmVydCBhcyBNb3JlVmVydEljb259IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucydcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIHdpZHRoOiAzMzAsXHJcbiAgICAgIG1pbldpZHRoOiAzMzAsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICBtYXJnaW46IFwiMCAwLjdyZW1cIixcclxuICAgIH0sXHJcbiAgICBtZWRpYToge1xyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiNTYuMjUlXCIgLy8gMTY6OVxyXG4gICAgfSxcclxuICAgIGF2YXRhclJlZDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJlZFs1MDBdXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuLy8gaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkg66W8IOyeheugpeuwm+yVhCBDYXJk66W8IOumrO2EtO2VmOuKlCDsu7Ttj6zrhIztirgg7ZWo7IiYXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3NDYXJkKCB7IGltYWdlLCBjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBvcmlnaW5hbExpbmssIGRhdGUsIGNvbXBhbnl9ICkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgLy8gZGVzY2lwcmlvbiAxMDDquIDsnpAg7KCc7ZWcICsg66eQ7KSE7J6E7ZGcXHJcbiAgICBjb25zdCBzdWJTdHJpbmcgPSAoZGVzYyxjb3VudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzU3RyaW5nID0gdHlwZW9mIGRlc2MgPT09IFwic3RyaW5nXCI7XHJcbiAgICAgICAgcmV0dXJuIChpc1N0cmluZyAmJiBkZXNjLmxlbmd0aCA+PSBjb3VudD8gZGVzYy5zdWJzdHJpbmcoMCxjb3VudCkgKyBcIi4uLlwiIDogZGVzYyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxDYXJkSGVhZGVyXHJcbiAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwibmV3c1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICAgICAge2NvbXBhbnk/IGNvbXBhbnlbMF0rY29tcGFueVsxXSA6ICcnfVxyXG4gICAgICAgICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpdGxlPXtzdWJTdHJpbmcodGl0bGUsIDIwKX1cclxuICAgICAgICAgICAgc3ViaGVhZGVyPXtkYXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgIHtzdWJTdHJpbmcoZGVzY3JpcHRpb24sIDgwKX1cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgIDxDYXJkQWN0aW9ucyBkaXNhYmxlU3BhY2luZz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImFkZCB0byBmYXZvcml0ZXNcIj5cclxuICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNoYXJlXCI+XHJcbiAgICAgICAgICAgICAgPFNoYXJlSWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTmV3c0NhcmQgZnJvbSAnLi9DYXJkJztcclxuaW1wb3J0IEFycm93IGZyb20gJy4uL2ltYWdlcy9hcnJvdy5wbmcnO1xyXG5cclxuY29uc3QgU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbmBcclxuY29uc3QgQ2FyZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgQXJyb3dDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgQXJyb3dMZWZ0ID0gc3R5bGVkLnNwYW5gXHJcbiAgICBcclxuYDtcclxuY29uc3QgQXJyb3dSaWdodCA9IHN0eWxlZC5zcGFuYFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7QXJyb3d9KTtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIHtcclxuICAgIC8vIOugjOuNlCDsho3shLHqsJIg7Yyo7YS07Jy866GcIGNobGlkcmVuIOyGjeyEseyXkCBBcnJhee2DgOyeheydmCBDYXJk65Ok7J20IOyeheugpeuQqFxyXG4gICAgLy8g7ZWt7IOBIDDrtoDthLAg7Iuc7J6RLCDrhJjquYAg6rCE6rKpIDXstIhcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gICAgY29uc3QgdG90YWxDb3VudCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaGlsZHJlbik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbGlkZXJDb250YWluZXIgd2lkdGg9XCI3MHZ3XCIgaGVpZ2h0PVwiNTB2aFwiPlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEFycm93Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0PjwvQXJyb3dSaWdodD5cclxuICAgICAgICAgICAgPC9BcnJvd0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPE5ld3NDYXJkIGtleT17aW5kZXh9IHsuLi5pdGVtfSBhY3RpdmU9e2luZGV4PT09YWN0aXZlfSBwZW5kaW5nTGVmdD17aW5kZXg9PT1hY3RpdmUtMSB8fCB0b3RhbENvdW50LTF9IHBlbmRpbmdSaWdodD17aW5kZXg9PT1hY3RpdmUrMSB8fCAwfS8+XHJcbiAgICAgICAgICAgICAgICApfSl9XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRhaW5lcj4gIFxyXG4gICAgICAgIDwvU2xpZGVyQ29udGFpbmVyPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50L1NsaWRlcic7XHJcblxyXG5jb25zdCB0ZXN0QXJyID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vY3Bob3RvLmFzaWFlLmNvLmtyL2xpc3RpbWdsaW5rLzEvMjAyMDA2MzAwODI2MTMzMzE4Nl8xNTkzNDczMTc0LmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIk1BU0tcIixcclxuICAgICAgICB0aXRsZTpcIuuniOyKpO2BrCDtkojsoIgg64yA656ALi4uIOuniOyKpO2BrCDtkojsoIgg64yA656AIOuniOyKpO2BrCDtkojsoIgg64yA656AXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwi66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+866eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8IOuniOyKpO2BrCDtkojsoIjrj7wg66eI7Iqk7YGsIO2SiOygiOuPvCDrp4jsiqTtgawg7ZKI7KCI64+8XCIsXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFueTogXCLsobDshKDsnbzrs7RcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE2MTUzMzRfOTU1NS5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgICAgIHRpdGxlOlwi7J247Iqk7YOA6re4656oIOqzoOqwnSDsp4Dsm5DshLzthLAg7JyE7J6l7ZWcIOqzteqyqeyekOuTpCDso7zsnZjrs7RcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCLtjJTroZzsm4wg66eO7J2AIOqzhOyglSDrhbjrpqzripQg6rO16rKpLCDsnbjsiqTtg4Dqt7jrnqgg6rOg6rCdIOyngOybkCDshLzthLDsnbgg7LKZIOqwgOyepSDqs7Xqsqkg7ISx6rO166WgIOyii+ydgCDtjrguLi7rrLjrspXqs7wg7LKg7J6QIOyYpOulmCDsnKDsnZjtlZzri6TrqbQg7Ja064qQIOygleuPhCDrsKnslrQg6rCA64qlXCIsXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgICAgIHRpdGxlOlwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgICAgIHRpdGxlOlwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy5ib2FubmV3cy5jb20vbWVkaWEvdXBGaWxlczIvMjAyMC8wOC81NzE1NTM1NTBfODA3Ni5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJJVFwiLFxyXG4gICAgICAgIHRpdGxlOlwi64uk7IucIO2VnCDrsogg67aB7ZWcIOywjeydgCDrr7jqta0sIOydtOuyiOyXlCDslZTtmLjtmZTtj5Ag6rOE7KCVIOuFuOumsOuLpFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIuuvuOq1rSwg7JWe7Jy866GcIDI4MOqwnCDrtojrspUg7JWU7Zi47ZmU7Y+QIOqzhOyglSDslZXsiJjtlZzri6QuLi7rjIDrtoDrtoQg67aB7ZWc6rO8IOykkeq1reydmCDqsoMsIOyekeuFhOyXkOunjCDslZTtmLjtmZTtj5Dsl5DshJwg7LKc66y47ZWZ7KCB7J24IOuPiOydtCDsgqzrnbzsoLguLi7igJzrkZDqs6Ag67O07KeAIOyViuqyoOuLpOKAneuKlCDrr7jqta3snZgg6rK96rOgXCIsXHJcbiAgICAgICAgb3JpZ2luYWxMaW5rOiBcImh0dHBzOi8vZGV2aHl1ay5jb21cIixcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgY29tcGFueTogXCLrs7TslYjribTsiqRcIlxyXG4gICAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rlc3RBcnJ9XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXJyb3cuMzU0YmRmYTc2M2YzNTQyNjU0YTRhNzYzYzg1NGU1OGEucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==