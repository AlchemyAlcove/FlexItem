import styled from "styled-components";

const FlexItemStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 6px;
  max-width: 100%;

  @media (min-width: ${props => props.theme.dimensions.desktopBreakpoint}px) {
    flex: ${props => props.size};
  }

  @media (min-width: ${props => props.theme.dimensions.tabletBreakpoint}px) and (max-width: ${props => props.theme.dimensions.desktopBreakpoint}px) {
    flex: ${props => props.tabletSize};
  }

  @media (max-width: ${props => props.theme.dimensions.tabletBreakpoint}px) {
    flex: ${props => props.mobileSize};
  }
`;

module.exports = FlexItemStyle;
