"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ■ from Ceane La. © 2020
// https://ceane.la
var Metadata = function Metadata(_ref) {
  var _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? "en" : _ref$locale,
      keywords = _ref.keywords,
      path = _ref.path,
      topic = _ref.topic,
      tagline = _ref.tagline;
  return _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("html", {
    lang: locale
  }), _react["default"].createElement("meta", {
    charSet: "utf-8"
  }), path && _react["default"].createElement("link", {
    rel: "dns-prefetch",
    href: path
  }), path && _react["default"].createElement("link", {
    rel: "preconnect",
    href: path
  }), path && _react["default"].createElement("link", {
    rel: "prefetch",
    href: path
  }), _react["default"].createElement("link", {
    rel: "canonical",
    href: path
  }), _react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width,minimum-scale=1,initial-scale=1"
  }), tagline && _react["default"].createElement("meta", {
    property: "og:description",
    content: tagline
  }), tagline && _react["default"].createElement("meta", {
    property: "description",
    content: tagline
  }), _react["default"].createElement("meta", {
    property: "og:title",
    content: topic
  }), path && _react["default"].createElement("meta", {
    property: "og:url",
    content: path
  }), _react["default"].createElement("meta", {
    name: "keywords",
    content: keywords
  }), _react["default"].createElement("title", {
    lang: locale
  }, topic));
};

var _default = Metadata;
exports["default"] = _default;
