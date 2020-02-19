"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Metadata', function () {
  test('renders correctly', function () {
    var tree = _reactTestRenderer["default"].create(_react["default"].createElement(_["default"], {
      topic: "Ceane La.",
      tagline: "Software engineer in SF"
    })).toJSON();

    expect(tree).toMatchSnapshot();
  });
});