import PropTypes from "prop-types";
import React from "react";
import Style from "./flex.style";
import { isArray, isNil } from "lodash";
import { withTheme } from "styled-components";

class FlexGrid extends React.Component {
  renderItems() {
    if(isArray(this.props.children)) {
      return(this.props.children.map((element, index) => {
        let props = {...element.props};
        if(!isNil(element.type) && !isNil(element.type.displayName)) {
          let maxPerRow = this.props.maxPerRow || this.props.children.length;
          if(this.props.theme.aspect === "mobile" && !isNil(this.props.maxMobileRow)) {
            maxPerRow = this.props.maxMobileRow;
          } else if(this.props.theme.aspect === "tablet" && !isNil(this.props.maxTabletRow)) {
            maxPerRow = this.props.maxTabletRow;
          }
          props["maxPerRow"] = maxPerRow;
        }

        return(<element.type key={index} {...props}/>);
      }));
    } else {
      return(this.props.children);
    }
  }

  render() {
    let classes = "flex-grid ";
    if(!isNil(this.props.className)) {
      classes = classes + " " + this.props.className;
    }

    return(
      <Style className={classes} style={this.props.style}>
        {this.renderItems()}
      </Style>
    );
  }
}

FlexGrid.propTypes = {
  className: PropTypes.string,
  maxMobileRow: PropTypes.number,
  maxPerRow: PropTypes.number,
  maxTabletRow: PropTypes.number,
  style: PropTypes.object
};

FlexGrid.defaultProps = {
  className: "",
  maxMobileRow: 1,
  maxTabletRow: 1,
  style: {}
};

export default withTheme(FlexGrid);
