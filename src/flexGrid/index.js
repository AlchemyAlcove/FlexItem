import PropTypes from "prop-types";
import React from "react";
import Style from "./flex.style";
import { isArray, isNil } from "lodash";
import { withTheme } from "styled-components";

class FlexGrid extends React.Component {
  renderItems(children) {
    if(isArray(children)) {
      return(children.map((element, index) => {
        return(this.renderItem(element, index, children.length));
      }));
    } else {
      return(this.renderItem(children, 1, 1));
    }
  }

  renderItem(item, index, length) {
    if(isArray(item)) {
      return(this.renderItems(item));
    } else {
      let props = {...item.props};
      if(!isNil(item.type) && !isNil(item.type.displayName)) {
        let maxPerRow = this.props.maxPerRow || length;
        if(this.props.theme.aspect === "mobile" && !isNil(this.props.maxMobileRow)) {
          maxPerRow = this.props.maxMobileRow;
        } else if(this.props.theme.aspect === "tablet" && !isNil(this.props.maxTabletRow)) {
          maxPerRow = this.props.maxTabletRow;
        }
        props["maxPerRow"] = maxPerRow;
      }
      return(<item.type key={index} {...props}/>);
    }
  }

  render() {
    let classes = "flex-grid ";
    if(!isNil(this.props.className)) {
      classes = classes + " " + this.props.className;
    }

    return(
      <Style className={classes} style={this.props.style}>
        {this.renderItems(this.props.children)}
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
