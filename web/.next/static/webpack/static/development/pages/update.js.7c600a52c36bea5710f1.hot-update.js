webpackHotUpdate("static\\development\\pages\\update.js",{

/***/ "./components/UpdateItem.tsx":
/*!***********************************!*\
  !*** ./components/UpdateItem.tsx ***!
  \***********************************/
/*! exports provided: UpdateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateItem", function() { return UpdateItem; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
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
          variables: _this2.state,
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
              lineNumber: 71
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["ErrorMesssage"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
            htmlFor: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
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
              lineNumber: 79
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
            htmlFor: "price",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
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
              lineNumber: 89
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
            htmlFor: "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
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
              lineNumber: 99
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, "Sav", loading ? 'ing' : 'e', " Changes")));
        });
      });
    }
  }]);

  return UpdateItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ })

})
//# sourceMappingURL=update.js.7c600a52c36bea5710f1.hot-update.js.map