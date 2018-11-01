webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Logout.tsx":
/*!*******************************!*\
  !*** ./components/Logout.tsx ***!
  \*******************************/
/*! exports provided: Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_CurrentUserQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/CurrentUserQuery */ "./graphql/queries/CurrentUserQuery.ts");
/* harmony import */ var _graphql_mutations_LogoutMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations/LogoutMutation */ "./graphql/mutations/LogoutMutation.ts");

var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\Logout.tsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var Logout = function Logout() {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
    mutation: _graphql_mutations_LogoutMutation__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_MUTATION"],
    refetchQueries: [{
      query: _graphql_queries_CurrentUserQuery__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (logout) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      onClick:
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return logout();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Logout");
  });
};

/***/ }),

/***/ "./graphql/mutations/LogoutMutation.ts":
/*!*********************************************!*\
  !*** ./graphql/mutations/LogoutMutation.ts ***!
  \*********************************************/
/*! exports provided: LOGOUT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_MUTATION", function() { return LOGOUT_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation LOGOUT_MUTATION {\n    logout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LOGOUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=_app.js.812ae614524beaab1e40.hot-update.js.map