webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/styles/NavStyles.ts":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.ts ***!
  \****************************************/
/*! exports provided: NavStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavStyles", function() { return NavStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-self: end;\n  font-size: 2rem;\n  a,\n  button {\n    padding: 1rem 3rem;\n    display: flex;\n    color: ", ";\n    font-weight: 800;\n    align-items: center;\n    position: relative;\n    text-transform: uppercase;\n    font-weight: 900;\n    font-size: 1em;\n    background: none;\n    border: 0;\n    cursor: pointer;\n    @media (max-width: 700px) {\n      font-size: 10px;\n      padding: 0 10px;\n    }\n    &:before {\n      content: '';\n      width: 2px;\n      background: ", ";\n      height: 100%;\n      left: 0;\n      position: absolute;\n      transform: skew(-20deg);\n      top: 0;\n      bottom: 0;\n    }\n    &:after {\n      height: 2px;\n      background: red;\n      content: '';\n      width: 0;\n      position: absolute;\n      transform: translateX(-50%);\n      transition: width 0.4s;\n      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);\n      left: 50%;\n      margin-top: 2rem;\n    }\n    &:hover,\n    &:focus {\n      outline: none;\n      &:after {\n        width: calc(100% - 60px);\n      }\n    }\n  }\n  @media (max-width: 1300px) {\n    border-top: 1px solid ", ";\n    width: 100%;\n    justify-content: center;\n    font-size: 1.5rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.black;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.lightgrey;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.lightgrey;
});

/***/ })

})
//# sourceMappingURL=_app.js.e209be6b39ba8d45c735.hot-update.js.map