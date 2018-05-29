import styled from "styled-components";

export default styled.div`
  position: relative;
  display: flex;
  max-width: ${props => props.theme.dimensions.containerWidth}px;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
`;
