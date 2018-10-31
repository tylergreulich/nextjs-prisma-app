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

/***/ "./components/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.tsx ***!
  \*************************************/
/*! exports provided: ErrorMesssage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMesssage", function() { return ErrorMesssage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\ErrorMessage.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 2rem;\n  background: white;\n  margin: 2rem 0;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 5px solid red;\n  p {\n    margin: 0;\n    font-weight: 100;\n  }\n  strong {\n    margin-right: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var ErrorMesssage = function ErrorMesssage(_ref) {
  var error = _ref.error;

  if (!error || !error.message) {
    return null;
  }

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (newError, index) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ErrorStyles, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Shoot!"), newError.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

/***/ }),

/***/ "./components/UpdateItem.tsx":
/*!***********************************!*\
  !*** ./components/UpdateItem.tsx ***!
  \***********************************/
/*! exports provided: UpdateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItem", function() { return UpdateItem; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.ts");
/* harmony import */ var _graphql_mutations_UpdateItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/UpdateItem */ "./graphql/mutations/UpdateItem.ts");
/* harmony import */ var _graphql_queries_SingleItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/queries/SingleItem */ "./graphql/queries/SingleItem.ts");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.tsx");

var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\UpdateItem.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var UpdateItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(UpdateItem, _React$Component);

  function UpdateItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateItem",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, updateItemMutation) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return updateItemMutation({
                  variables: _objectSpread({
                    id: _this.props.id
                  }, _this.state)
                });

              case 3:
                res = _context.sent;
                console.log(res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var _event$currentTarget = event.currentTarget,
          name = _event$currentTarget.name,
          type = _event$currentTarget.type,
          value = _event$currentTarget.value;
      var val = type === 'number' ? parseFloat(value) : value;

      _this.setState(_objectSpread({}, _this.state, _defineProperty({}, name, val)));
    });

    return _this;
  }

  _createClass(UpdateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _graphql_queries_SingleItem__WEBPACK_IMPORTED_MODULE_5__["SINGLE_ITEM_QUERY"],
        variables: {
          id: id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            loading = _ref2.loading;

        if (loading || !data) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "Loading...");
        }

        if (!data.item) {
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "No item found for ", id);
        }

        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
          mutation: _graphql_mutations_UpdateItem__WEBPACK_IMPORTED_MODULE_4__["UPDATE_ITEM_MUTATION"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, function (updateItem, _ref3) {
          var loading = _ref3.loading,
              error = _ref3.error;
          return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_styles_Form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
            onSubmit: function onSubmit(event) {
              return _this2.updateItem(event, updateItem);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["ErrorMesssage"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
            htmlFor: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, "Title"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
            type: "text",
            id: "title",
            name: "title",
            placeholder: "Title",
            required: true,
            defaultValue: data.item.title,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
            htmlFor: "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            },
            __self: this
          }, "Price"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", {
            type: "number",
            id: "price",
            name: "price",
            placeholder: "Price",
            required: true,
            defaultValue: data.item.price.toString(),
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
            htmlFor: "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, "Description"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("textarea", {
            id: "description",
            name: "description",
            placeholder: "Enter A Description",
            required: true,
            defaultValue: data.item.description,
            onChange: _this2.handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, "Sav", loading ? 'ing' : 'e', " Changes")));
        });
      });
    }
  }]);

  return UpdateItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),

/***/ "./components/styles/Form.ts":
/*!***********************************!*\
  !*** ./components/styles/Form.ts ***!
  \***********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);\n  background: rgba(0, 0, 0, 0.02);\n  border: 5px solid white;\n  padding: 20px;\n  font-size: 1.5rem;\n  line-height: 1.5;\n  font-weight: 600;\n  label {\n    display: block;\n    margin-bottom: 1rem;\n  }\n  input,\n  textarea,\n  select {\n    width: 100%;\n    padding: 0.5rem;\n    font-size: 1rem;\n    border: 1px solid black;\n    &:focus {\n      outline: 0;\n      border-color: ", ";\n    }\n  }\n  button,\n  input[type='submit'] {\n    width: auto;\n    background: red;\n    color: white;\n    border: 0;\n    font-size: 2rem;\n    font-weight: 600;\n    padding: 0.5rem 1.2rem;\n  }\n  fieldset {\n    border: 0;\n    padding: 0;\n\n    &[disabled] {\n      opacity: 0.5;\n    }\n    &::before {\n      height: 10px;\n      content: '';\n      display: block;\n      background-image: linear-gradient(\n        to right,\n        #ff3019 0%,\n        #e2b04a 50%,\n        #ff3019 100%\n      );\n    }\n    &[aria-busy='true']::before {\n      background-size: 50% auto;\n      animation: ", " 0.5s linear infinite;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    background-position: 0 0;\n    /* rotate: 0; */\n  }\n\n  to {\n    background-position: 100% 100%;\n    /* rotate: 360deg; */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.red;
}, loading);

/***/ }),

/***/ "./graphql/mutations/UpdateItem.ts":
/*!*****************************************!*\
  !*** ./graphql/mutations/UpdateItem.ts ***!
  \*****************************************/
/*! exports provided: UPDATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ITEM_MUTATION", function() { return UPDATE_ITEM_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation UPDATE_ITEM_MUTATION(\n    $id: ID!\n    $title: String\n    $description: String\n    $price: Int\n  ) {\n    updateItem(\n      id: $id\n      title: $title\n      description: $description\n      price: $price\n    ) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var UPDATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());

/***/ }),

/***/ "./graphql/queries/SingleItem.ts":
/*!***************************************!*\
  !*** ./graphql/queries/SingleItem.ts ***!
  \***************************************/
/*! exports provided: SINGLE_ITEM_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_ITEM_QUERY", function() { return SINGLE_ITEM_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());

/***/ }),

/***/ "./pages/update.tsx":
/*!**************************!*\
  !*** ./pages/update.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UpdateItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateItem */ "./components/UpdateItem.tsx");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\pages\\update.tsx";



var Update = function Update(_ref) {
  var query = _ref.query;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_UpdateItem__WEBPACK_IMPORTED_MODULE_1__["UpdateItem"], {
    id: query.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Update);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/update.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/update.tsx */"./pages/update.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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
//# sourceMappingURL=update.js.map