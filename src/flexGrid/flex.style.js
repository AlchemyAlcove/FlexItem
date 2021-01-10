import styled from "@emotion/styled";

export default styled("div")`
  &.flex-grid {
    position: relative;
    display: flex;
    max-width: ${props => (props.theme.dimensions || {}).containerWidth || 1200}px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;

    &.flex-grid-container {
      column-gap: ${props => (props.theme.dimensions || {}).columnPadding || 6}px;
    }

    &.flex-grid-vertical-container {
      row-gap: ${props => (props.theme.dimensions || {}).columnPadding || 6}px;
    }
  }
`;
