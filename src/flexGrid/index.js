import { isNil } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import Style from "./flex.style";

class FlexGrid extends React.Component {
  render() {
    let classes = "flex-grid ";
    if(!isNil(this.props.maxPerRow)) {
      classes += "max-" + this.props.maxPerRow + " ";
    }
    if(!isNil(this.props.maxTabletRow) && this.props.maxTabletRow !== 0) {
      classes += "tablet-max-" + this.props.maxTabletRow + " ";
    }
    if(!isNil(this.props.maxMobileRow) && this.props.maxMobileRow !== 0) {
      classes += "mobile-max-" + this.props.maxMobileRow + " ";
    }

    return(
      <Style className={classes + this.props.className} style={this.props.style}>
        {this.props.children}
      </Style>
    );
  }
}

FlexGrid.propTypes = {
  className: PropTypes.string,
  maxMobileRow: PropTypes.number,
  maxPerRow: PropTypes.number,
  style: PropTypes.object
};

FlexGrid.defaultProps = {
  className: "",
  maxMobileRow: 1,
  maxTabletRow: 1,
  style: {}
};

module.exports = FlexGrid;
