"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flex = require("./flex.style");

var _flex2 = _interopRequireDefault(_flex);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexItem = function (_React$Component) {
  _inherits(FlexItem, _React$Component);

  function FlexItem() {
    _classCallCheck(this, FlexItem);

    return _possibleConstructorReturn(this, (FlexItem.__proto__ || Object.getPrototypeOf(FlexItem)).apply(this, arguments));
  }

  _createClass(FlexItem, [{
    key: "render",
    value: function render() {
      var classes = "flex-item";
      if (!(0, _lodash.isNil)(this.props.className)) {
        classes = classes + " " + this.props.className;
      }

      return _react2.default.createElement(
        _flex2.default,
        { size: this.props.size, mobileSize: this.props.mobileSize || this.props.size, tabletSize: this.props.tabletSize || this.props.size, className: classes, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return FlexItem;
}(_react2.default.Component);

FlexItem.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.number,
  mobileSize: _propTypes2.default.number,
  style: _propTypes2.default.object,
  tabletSize: _propTypes2.default.number
};

FlexItem.defaultProps = {
  classname: "",
  size: 1,
  style: {}
};

module.exports = FlexItem;