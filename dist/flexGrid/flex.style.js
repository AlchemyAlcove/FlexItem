"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  &.flex-grid {\n    position: relative;\n    display: flex;\n    max-width: ", "px;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 100%;\n\n    &.flex-grid-container {\n      margin-left: -", "px;\n      margin-right: -", "px;\n      width: calc(100% + 6px);\n      max-width: calc(100% + 6px);\n\n      > .flex-item {\n        padding-left: ", "px;\n        padding-right: ", "px;\n      }\n    }\n\n    &.flex-grid-vertical-container {\n      margin-top: -", "px;\n      margin-bottom: -", "px;\n\n      > .flex-item {\n        padding-top: ", "px;\n        padding-bottom: ", "px;\n      }\n    }\n  }\n"], ["\n  &.flex-grid {\n    position: relative;\n    display: flex;\n    max-width: ", "px;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    width: 100%;\n\n    &.flex-grid-container {\n      margin-left: -", "px;\n      margin-right: -", "px;\n      width: calc(100% + 6px);\n      max-width: calc(100% + 6px);\n\n      > .flex-item {\n        padding-left: ", "px;\n        padding-right: ", "px;\n      }\n    }\n\n    &.flex-grid-vertical-container {\n      margin-top: -", "px;\n      margin-bottom: -", "px;\n\n      > .flex-item {\n        padding-top: ", "px;\n        padding-bottom: ", "px;\n      }\n    }\n  }\n"]);

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _reactEmotion2.default)("div")(_templateObject, function (props) {
  return (props.theme.dimensions || {}).containerWidth || 1200;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
});