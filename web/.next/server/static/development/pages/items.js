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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DeleteItem.tsx":
/*!***********************************!*\
  !*** ./components/DeleteItem.tsx ***!
  \***********************************/
/*! exports provided: DeleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItem", function() { return DeleteItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_mutations_DeleteItemMutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/mutations/DeleteItemMutation */ "./graphql/mutations/DeleteItemMutation.ts");
/* harmony import */ var _graphql_queries_GetItemsQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/GetItemsQuery */ "./graphql/queries/GetItemsQuery.ts");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\DeleteItem.tsx";

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





var DeleteItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DeleteItem, _React$Component);

  function DeleteItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (cache, payload) {
      var data = cache.readQuery({
        query: _graphql_queries_GetItemsQuery__WEBPACK_IMPORTED_MODULE_3__["GET_ITEMS_QUERY"]
      });
      console.log(data, payload);
      data.items = data.items.filter(function (item) {
        return item.id !== payload.data.deleteItem.id;
      });
      cache.writeQuery({
        query: _graphql_queries_GetItemsQuery__WEBPACK_IMPORTED_MODULE_3__["GET_ITEMS_QUERY"],
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _graphql_mutations_DeleteItemMutation__WEBPACK_IMPORTED_MODULE_2__["DELETE_ITEM_MUTATION"],
        variables: {
          id: id
        },
        update: this.update,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, function (deleteItem, _ref) {
        var error = _ref.error;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          onClick: function onClick() {
            if (confirm('Are you sure you want to delete this?')) {
              deleteItem().catch(function (err) {
                return alert(err.message);
              });
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.tsx ***!
  \*************************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\ErrorMessage.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem;\n  background: white;\n  margin: 2rem 0;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 5px solid red;\n  p {\n    margin: 0;\n    font-weight: 100;\n  }\n  strong {\n    margin-right: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var ErrorMessage = function ErrorMessage(_ref) {
  var error = _ref.error;

  if (!error || !error.message) {
    return null;
  }

  var networkError = error.networkError;

  if (networkError && networkError.result && networkError.result.errors.length) {
    return networkError.result.errors.map(function (newError, index) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ErrorStyles, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Shoot!"), newError.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

/***/ }),

/***/ "./components/Item.tsx":
/*!*****************************!*\
  !*** ./components/Item.tsx ***!
  \*****************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.ts");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.ts");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.ts");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.ts");
/* harmony import */ var _DeleteItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteItem */ "./components/DeleteItem.tsx");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\Item.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          price = _this$props.price,
          description = _this$props.description,
          image = _this$props.image;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__["ItemStyles"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, image && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: image,
        alt: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_Title__WEBPACK_IMPORTED_MODULE_3__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/item',
          query: {
            id: id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, title))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__["PriceTag"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__["formatMoney"])(price)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, description), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "buttonList",
        "data-testId": "buttonList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: 'update',
          query: {
            id: id
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Add to Cart"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DeleteItem__WEBPACK_IMPORTED_MODULE_6__["DeleteItem"], {
        id: id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Delete This Item")));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/Items.tsx":
/*!******************************!*\
  !*** ./components/Items.tsx ***!
  \******************************/
/*! exports provided: Items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_GetItemsQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/GetItemsQuery */ "./graphql/queries/GetItemsQuery.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./components/Item.tsx");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/Pagination.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.ts");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\Items.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 60px;\n  max-width: ", ";\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Center = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.maxWidth;
});
var Items =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Items, _React$Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Pagination__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
        query: _graphql_queries_GetItemsQuery__WEBPACK_IMPORTED_MODULE_3__["GET_ITEMS_QUERY"],
        variables: {
          skip: page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            error = _ref2.error,
            loading = _ref2.loading;

        if (loading) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, "Loading...");
        }

        if (error) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, "Error: ", error.message);
        }

        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ItemsList, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, data.items.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Item__WEBPACK_IMPORTED_MODULE_4__["Item"], _extends({}, item, {
            key: item.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }));
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Pagination__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }));
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.ts");
/* harmony import */ var _graphql_queries_PaginationQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries/PaginationQuery */ "./graphql/queries/PaginationQuery.ts");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\Pagination.tsx";








var Pagination = function Pagination(_ref) {
  var page = _ref.page;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _graphql_queries_PaginationQuery__WEBPACK_IMPORTED_MODULE_4__["PAGINATION_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        loading = _ref2.loading;

    if (error) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    }

    if (loading || !data) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Loading...");
    }

    var count = data.itemsConnection.aggregate.count;
    var pages = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_3__["PaginationStyles"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Sick Fits! - Page ", page, " of ", pages)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      prefetch: true,
      href: {
        pathname: 'items',
        query: {
          page: page - 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: "prev",
      "aria-disabled": page <= 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Prev")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Page ", page, " of ", pages), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, count, " Items Total"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: 'items',
        query: {
          page: page + 1
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: "prev",
      "aria-disabled": page >= pages,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Next")));
  });
};

/***/ }),

/***/ "./components/styles/ItemStyles.ts":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.ts ***!
  \*****************************************/
/*! exports provided: ItemStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStyles", function() { return ItemStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  border: 1px solid ", ";\n  box-shadow: ", ";\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  img {\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n  }\n  p {\n    font-size: 12px;\n    line-height: 2;\n    font-weight: 300;\n    flex-grow: 1;\n    padding: 0 3rem;\n    font-size: 1.5rem;\n  }\n  .buttonList {\n    display: grid;\n    width: 100%;\n    border-top: 1px solid ", ";\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    grid-gap: 1px;\n    background: ", ";\n    & > * {\n      background: white;\n      border: 0;\n      font-size: 1rem;\n      padding: 1rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.offWhite;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.boxShadow;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lightgrey;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lightgrey;
});

/***/ }),

/***/ "./components/styles/PaginationStyles.ts":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.ts ***!
  \***********************************************/
/*! exports provided: PaginationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationStyles", function() { return PaginationStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: inline-grid;\n  grid-template-columns: repeat(4, auto);\n  align-items: stretch;\n  justify-content: center;\n  align-content: center;\n  margin: 2rem 0;\n  border: 1px solid ", ";\n  border-radius: 10px;\n  & > * {\n    margin: 0;\n    padding: 15px 30px;\n    border-right: 1px solid ", ";\n    &:last-child {\n      border-right: 0;\n    }\n  }\n  a[aria-disabled='true'] {\n    color: grey;\n    pointer-events: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.lightgrey;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.lightgrey;
});

/***/ }),

/***/ "./components/styles/PriceTag.ts":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.ts ***!
  \***************************************/
/*! exports provided: PriceTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTag", function() { return PriceTag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  transform: rotate(3deg);\n  color: white;\n  font-weight: 600;\n  padding: 5px;\n  line-height: 1;\n  font-size: 3rem;\n  display: inline-block;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.red;
});

/***/ }),

/***/ "./components/styles/Title.ts":
/*!************************************!*\
  !*** ./components/styles/Title.ts ***!
  \************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 1rem;\n  text-align: center;\n  transform: skew(-5deg) rotate(-1deg);\n  margin-top: -3rem;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n  a {\n    background: ", ";\n    display: inline;\n    line-height: 1.3;\n    font-size: 4rem;\n    text-align: center;\n    color: white;\n    padding: 0 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.red;
});

/***/ }),

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: endpoint, perPage, cloudinaryUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudinaryUrl", function() { return cloudinaryUrl; });
var endpoint = "http://localhost:4444";
var perPage = 4;
var cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dajpsw8tt/image/upload/';

/***/ }),

/***/ "./graphql/mutations/DeleteItemMutation.ts":
/*!*************************************************!*\
  !*** ./graphql/mutations/DeleteItemMutation.ts ***!
  \*************************************************/
/*! exports provided: DELETE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM_MUTATION", function() { return DELETE_ITEM_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var DELETE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());

/***/ }),

/***/ "./graphql/queries/GetItemsQuery.ts":
/*!******************************************!*\
  !*** ./graphql/queries/GetItemsQuery.ts ***!
  \******************************************/
/*! exports provided: GET_ITEMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS_QUERY", function() { return GET_ITEMS_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GET_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    items(skip: $skip, first: $first, orderBy: createdAt_DESC) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var GET_ITEMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_1__["perPage"]);

/***/ }),

/***/ "./graphql/queries/PaginationQuery.ts":
/*!********************************************!*\
  !*** ./graphql/queries/PaginationQuery.ts ***!
  \********************************************/
/*! exports provided: PAGINATION_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());

/***/ }),

/***/ "./lib/formatMoney.ts":
/*!****************************!*\
  !*** ./lib/formatMoney.ts ***!
  \****************************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
var formatMoney = function formatMoney(amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Items */ "./components/Items.tsx");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\pages\\index.tsx";



var Home = function Home(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Items__WEBPACK_IMPORTED_MODULE_1__["Items"], {
    page: parseFloat(query.page) || 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/items.tsx":
/*!*************************!*\
  !*** ./pages/items.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./pages/index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/items.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/items.tsx */"./pages/items.tsx");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=items.js.map