"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNil2 = require("lodash/isNil");

var _isNil3 = _interopRequireDefault(_isNil2);

var _isArray2 = require("lodash/isArray");

var _isArray3 = _interopRequireDefault(_isArray2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flex = require("./flex.style");

var _flex2 = _interopRequireDefault(_flex);

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexGrid = function (_React$Component) {
  _inherits(FlexGrid, _React$Component);

  function FlexGrid() {
    _classCallCheck(this, FlexGrid);

    return _possibleConstructorReturn(this, (FlexGrid.__proto__ || Object.getPrototypeOf(FlexGrid)).apply(this, arguments));
  }

  _createClass(FlexGrid, [{
    key: "calcMaxPerRow",
    value: function calcMaxPerRow(children) {
      var max = 0;
      children.forEach(function (child) {
        if (!(0, _isNil3.default)(child.props) && !(0, _isNil3.default)(child.props.size)) {
          max += child.props.size;
        } else {
          max++;
        }
      });
      return max;
    }
  }, {
    key: "renderItems",
    value: function renderItems(children) {
      var _this2 = this;

      if ((0, _isArray3.default)(children)) {
        return children.map(function (element, index) {
          return _this2.renderItem(element, index, _this2.calcMaxPerRow(children));
        });
      } else {
        return this.renderItem(children, 1, 1);
      }
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, index, length) {
      if ((0, _isArray3.default)(item)) {
        return this.renderItems(item);
      } else {
        var props = _extends({}, item.props);
        if (!(0, _isNil3.default)(item.type) && !(0, _isNil3.default)(item.type.displayName)) {
          var maxPerRow = this.props.maxPerRow || length;
          if (this.props.theme.aspect === "mobile" && !(0, _isNil3.default)(this.props.maxMobileRow)) {
            maxPerRow = this.props.maxMobileRow;
          } else if (this.props.theme.aspect === "tablet" && !(0, _isNil3.default)(this.props.maxTabletRow)) {
            maxPerRow = this.props.maxTabletRow;
          }
          props["maxPerRow"] = maxPerRow;
        }
        return _react2.default.createElement(item.type, _extends({ key: index }, props));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = "flex-grid ";
      if (!(0, _isNil3.default)(this.props.className)) {
        classes = classes + " " + this.props.className;
      }

      return _react2.default.createElement(
        _flex2.default,
        { className: classes, style: this.props.style },
        this.renderItems(this.props.children)
      );
    }
  }]);

  return FlexGrid;
}(_react2.default.Component);

FlexGrid.propTypes = {
  className: _propTypes2.default.string,
  maxMobileRow: _propTypes2.default.number,
  maxPerRow: _propTypes2.default.number,
  maxTabletRow: _propTypes2.default.number,
  style: _propTypes2.default.object
};

FlexGrid.defaultProps = {
  className: "",
  maxMobileRow: 1,
  maxTabletRow: 1,
  style: {}
};

exports.default = (0, _styledComponents.withTheme)(FlexGrid);