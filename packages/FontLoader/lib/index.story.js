"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDefaults = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

var _Text = _interopRequireDefault(require("@ceanela/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ■ from Ceane La. © 2020
// https://ceane.la
var _default = {
  title: 'FontLoader'
};
exports["default"] = _default;

var withDefaults = function withDefaults() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_["default"], null), _react["default"].createElement(_Text["default"], null, "Hi I'm a Text component with FontLoader"));
};

exports.withDefaults = withDefaults;