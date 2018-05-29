import Inner from "./flex";
import PropTypes from "prop-types";
import React from "react"; // eslint-disable-line no-unused-vars

const FlexItem = (props) => {
  return(<Inner {...props}/>);
};

FlexItem.propTypes = {
  className: PropTypes.string,
  maxPerRow: PropTypes.number,
  mobileSize: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  tabletSize: PropTypes.number
};

FlexItem.defaultProps = {
  classname: "",
  maxPerRow: 1,
  size: 1,
  style: {}
};

export default FlexItem;
