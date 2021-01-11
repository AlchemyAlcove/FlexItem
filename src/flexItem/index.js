import PropTypes from "prop-types";
import React from "react";
import Style from "./flex.style";
import { useTheme } from "@emotion/react";

const FlexItem = props => {
  const theme = useTheme();
  const classes = ["flex-item", props.className].filter(Boolean).join(" ");

  const size = props[`${theme.aspect}Size`] ?? props.size;
  const style = { ...props.style };

  const basis = Number((size / props.maxPerRow) * 100).toFixed(2);

  if (props.isParentContainer) {
    style.flexBasis = `calc(${basis + "%"} - 6px)`;
  } else {
    style.flexBasis = basis + "%";
  }

  return (
    <Style className={classes} css={style}>
      {props.children}
    </Style>
  );
};

FlexItem.displayName = "FlexItem";

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

export default FlexItem;
