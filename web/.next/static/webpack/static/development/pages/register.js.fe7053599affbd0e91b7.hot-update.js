webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./components/Login.tsx":
/*!******************************!*\
  !*** ./components/Login.tsx ***!
  \******************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graphql_mutations_LoginMutation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/mutations/LoginMutation */ "./graphql/mutations/LoginMutation.ts");
/* harmony import */ var _graphql_queries_CurrentUserQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/CurrentUserQuery */ "./graphql/queries/CurrentUserQuery.ts");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.ts");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.tsx");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\Login.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      email: '',
      password: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      var _event$currentTarget = event.currentTarget,
          name = _event$currentTarget.name,
          value = _event$currentTarget.value;

      _this.setState(_objectSpread({}, _this.state, _defineProperty({}, name, value)));
    });

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: _graphql_mutations_LoginMutation__WEBPACK_IMPORTED_MODULE_2__["LOGIN_MUTATION"],
        variables: this.state,
        refetchQueries: [{
          query: _graphql_queries_CurrentUserQuery__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, function (login, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styles_Form__WEBPACK_IMPORTED_MODULE_4__["Form"], {
          method: "post",
          onSubmit: function onSubmit(event) {
            event.preventDefault();
            login();

            _this2.setState({
              email: '',
              password: ''
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "Please Login"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
          htmlFor: "email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "Email"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
          type: "email",
          name: "email",
          value: email,
          onChange: _this2.handleChange,
          placeholder: "Email",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
          htmlFor: "password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Password"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
          type: "password",
          name: "password",
          value: password,
          onChange: _this2.handleChange,
          placeholder: "Password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, "Login")));
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

})
//# sourceMappingURL=register.js.fe7053599affbd0e91b7.hot-update.js.map