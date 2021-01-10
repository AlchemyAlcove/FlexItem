import PropTypes from "prop-types";
import React from "react";
import Style from "./flex.style";
import { cloneDeep, isNil } from "lodash";
import { withTheme } from "@emotion/react";

class FlexItem extends React.Component {
  render() {
    let classes = "flex-item";
    if (!isNil(this.props.className)) {
      classes = classes + " " + this.props.className;
    }

    let size = this.props.size;
    const style = cloneDeep(this.props.style);
    if (this.props.theme.aspect === "mobile") {
      size = this.props.mobileSize || this.props.size;
    } else if (this.props.theme.aspect === "tablet") {
      size = this.props.tabletSize || this.props.size;
    }
    style.flexBasis = (size / this.props.maxPerRow) * 100 + "%";

    return (
      <Style className={classes} style={style}>
        {this.props.children}
      </Style>
    );
  }
}

FlexItem.propTypes = {
  className: PropTypes.string,
  maxPerRow: PropTypes.number,
  mobileSize: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  tabletSize: PropTypes.number,
};

FlexItem.defaultProps = {
  classname: "",
  maxPerRow: 1,
  size: 1,
  style: {},
};

export default withTheme(FlexItem);
