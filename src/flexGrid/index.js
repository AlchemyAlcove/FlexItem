import PropTypes from "prop-types";
import React, { useState } from "react";
import flexStyle from "./flex.style";
import { useTheme } from "@emotion/react";

const FlexGrid = props => {
  const theme = useTheme();
  const [maxPerRow] = useState(() => calcMaxPerRow(props.children));

  function calcMaxPerRow(children) {
    let max = 0;
    children.forEach?.(child => {
      max += child?.props?.size ?? 1;
    });
    return max || 1;
  }

  function renderItem(item) {
    if (React.isValidElement(item) && item.type?.displayName === "FlexItem") {
      const childProps = { ...item.props, isParentContainer: props.container };
      childProps.maxPerRow = props.maxPerRow || maxPerRow;
      if (theme.aspect === "mobile") {
        childProps.maxPerRow = props.maxMobileRow;
      } else if (theme.aspect === "tablet") {
        childProps.maxPerRow = props.maxTabletRow;
      }
      return <item.type {...childProps} />;
    }
    return item;
  }

  const classes = [
    "flex-grid",
    props.container && "flex-grid-container",
    props.verticalContainer && "flex-grid-vertical-container",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} css={[flexStyle, props.style]}>
      {React.Children.map(props.children, renderItem)}
    </div>
  );
};

FlexGrid.displayName = "FlexGrid";

FlexGrid.propTypes = {
  className: PropTypes.string,
  container: PropTypes.bool,
  maxMobileRow: PropTypes.number,
  maxPerRow: PropTypes.number,
  maxTabletRow: PropTypes.number,
  style: PropTypes.object,
  verticalContainer: PropTypes.bool,
};

FlexGrid.defaultProps = {
  className: "",
  container: false,
  maxMobileRow: 1,
  maxTabletRow: 1,
  style: {},
  verticalContainer: false,
};

export default FlexGrid;
