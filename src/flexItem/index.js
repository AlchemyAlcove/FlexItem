import PropTypes from "prop-types";
import React from "react";
import Style from "./flex.style";
import { isNil } from "lodash";

class FlexItem extends React.Component {
  render() {
    let classes = "flex-item";
    if(!isNil(this.props.className)) {
      classes = classes + " " + this.props.className;
    }

    return(
      <Style size={ this.props.size } mobileSize={this.props.mobileSize || this.props.size} tabletSize={this.props.tabletSize || this.props.size} className={classes} style={this.props.style}>
        { this.props.children }
      </Style>
    );
  }
}

FlexItem.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  mobileSize: PropTypes.number,
  style: PropTypes.object,
  tabletSize: PropTypes.number
};

FlexItem.defaultProps = {
  classname: "",
  size: 1,
  style: {}
};

module.exports = FlexItem;
