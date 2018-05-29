"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  max-width: ", "px;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 0 6px;\n  width: 100%;\n"], ["\n  position: relative;\n  display: flex;\n  max-width: ", "px;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 0 6px;\n  width: 100%;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.dimensions.containerWidth;
});