"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDefaults = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ■ from Ceane La. © 2020
// https://ceane.la
var A = _styledComponents["default"].div.withConfig({
  displayName: "indexstory__A",
  componentId: "ab1842-0"
})(["width:100%;min-height:90px;background-color:#f6f6f6;"]);

var B = _styledComponents["default"].div.withConfig({
  displayName: "indexstory__B",
  componentId: "ab1842-1"
})(["width:100%;min-height:200px;background-color:#f0f0f0;"]);

var C = _styledComponents["default"].div.withConfig({
  displayName: "indexstory__C",
  componentId: "ab1842-2"
})(["width:100%;min-height:60px;background-color:#e7e7e7;"]);

var _default = {
  title: 'Grid'
};
exports["default"] = _default;

var withDefaults = function withDefaults() {
  return _react["default"].createElement(_["default"], null, _react["default"].createElement(A, null), _react["default"].createElement(B, null), _react["default"].createElement(C, null));
};

exports.withDefaults = withDefaults;