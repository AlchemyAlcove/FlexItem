"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactEmotion = require("react-emotion");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = /*#__PURE__*/(0, _reactEmotion2.default)("div", {
  target: "e1jgdmdg0"
})("&.flex-grid{position:relative;display:flex;max-width:", function (props) {
  return (props.theme.dimensions || {}).containerWidth || 1200;
}, "px;justify-content:flex-start;flex-wrap:wrap;margin:0 auto;width:100%;&.flex-grid-container{margin-left:-", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;margin-right:-", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;width:calc(100% + ", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px);max-width:calc(100% + ", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px);> .flex-item{padding-left:", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;padding-right:", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;}}&.flex-grid-vertical-container{margin-top:-", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;margin-bottom:-", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;> .flex-item{padding-top:", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;padding-bottom:", function (props) {
  return (props.theme.dimensions || {}).columnPadding || 3;
}, "px;}}}");