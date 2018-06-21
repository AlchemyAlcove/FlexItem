import styled from "styled-components";

export default styled.div`
  &.flex-grid {
    position: relative;
    display: flex;
    max-width: ${props => (props.theme.dimensions || {}).containerWidth || 1200}px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;

    &.flex-grid-container {
      margin: 0 -${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      width: calc(100% + 6px);
      max-width: calc(100% + 6px);

      > .flex-item {
        padding: 0 ${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      }
    }
  }
`;
