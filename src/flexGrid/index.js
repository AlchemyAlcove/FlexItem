import Inner from "./flex";
import PropTypes from "prop-types";
import React from "react"; // eslint-disable-line no-unused-vars

const FlexGrid = (props) => {
  return(<Inner {...props}/>);
};

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

export default FlexGrid;
