webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Logout.tsx":
/*!*******************************!*\
  !*** ./components/Logout.tsx ***!
  \*******************************/
/*! exports provided: LOGOUT_MUTATION, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_MUTATION", function() { return LOGOUT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries_CurrentUserQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries/CurrentUserQuery */ "./graphql/queries/CurrentUserQuery.ts");
var _jsxFileName = "C:\\Users\\david\\Documents\\GraphQL\\sick-fits\\web\\components\\Logout.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation LOGOUT_MUTATION {\n    logout {\n      message\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LOGOUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var Logout = function Logout() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    mutation: LOGOUT_MUTATION,
    refetchQueries: [{
      query: _graphql_queries_CurrentUserQuery__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, function (logout) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      onClick: function onClick() {
        return logout;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Logout");
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.802b56bb4d4331e7ac24.hot-update.js.map