"use strict";

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0 6px;\n  max-width: 100%;\n\n  @media (min-width: ", "px) {\n    flex: ", ";\n  }\n\n  @media (min-width: ", "px) and (max-width: ", "px) {\n    flex: ", ";\n  }\n\n  @media (max-width: ", "px) {\n    flex: ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0 6px;\n  max-width: 100%;\n\n  @media (min-width: ", "px) {\n    flex: ", ";\n  }\n\n  @media (min-width: ", "px) and (max-width: ", "px) {\n    flex: ", ";\n  }\n\n  @media (max-width: ", "px) {\n    flex: ", ";\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexItemStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.dimensions.desktopBreakpoint;
}, function (props) {
  return props.size;
}, function (props) {
  return props.theme.dimensions.tabletBreakpoint;
}, function (props) {
  return props.theme.dimensions.desktopBreakpoint;
}, function (props) {
  return props.tabletSize;
}, function (props) {
  return props.theme.dimensions.tabletBreakpoint;
}, function (props) {
  return props.mobileSize;
});

module.exports = FlexItemStyle;