"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDefaults = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ■ from Ceane La. © 2020
// https://ceane.la
var _default = {
  title: 'Metadata'
};
exports["default"] = _default;

var withDefaults = function withDefaults() {
  return _react["default"].createElement(_["default"], {
    path: window.location.href,
    topic: "Ceane La.",
    tagline: "Software engineer in SF"
  });
};

exports.withDefaults = withDefaults;
