"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flex = require("./flex");

var _flex2 = _interopRequireDefault(_flex);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

var FlexItem = function FlexItem(props) {
  return _react2.default.createElement(_flex2.default, props);
};

FlexItem.propTypes = {
  className: _propTypes2.default.string,
  maxPerRow: _propTypes2.default.number,
  mobileSize: _propTypes2.default.number,
  size: _propTypes2.default.number,
  style: _propTypes2.default.object,
  tabletSize: _propTypes2.default.number
};

FlexItem.defaultProps = {
  classname: "",
  maxPerRow: 1,
  size: 1,
  style: {}
};

exports.default = FlexItem;