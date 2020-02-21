"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ■ from Ceane La. © 2020
// https://ceane.la
var Grid = _styledComponents["default"].div.withConfig({
  displayName: "src__Grid",
  componentId: "sc-1qxbbjs-0"
})(["margin:0;width:100%;min-height:100vh;-webkit-font-smoothing:subpixel-antialiased;background:#fff;color:#0e0e0e;display:grid;grid:", ";"], function (_ref) {
  var _ref$grid = _ref.grid,
      grid = _ref$grid === void 0 ? 'auto 1fr auto/auto' : _ref$grid;
  return grid;
});

var _default = Grid;
exports["default"] = _default;