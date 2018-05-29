import styled from "styled-components";

const FlexGridStyle = styled.div`
  position: relative;
  display: flex;
  max-width: ${props => props.theme.dimensions.containerWidth}px;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 6px;
  width: 100%;
`;

module.exports = FlexGridStyle;
