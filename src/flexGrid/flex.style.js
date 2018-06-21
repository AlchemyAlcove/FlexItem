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
      margin-left: -${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      margin-right: -${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      width: calc(100% + 6px);
      max-width: calc(100% + 6px);

      > .flex-item {
        padding-left: ${props => (props.theme.dimensions || {}).columnPadding || 3}px;
        padding-right: ${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      }
    }

    &.flex-grid-vertical-container {
      margin-top: -${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      margin-bottom: -${props => (props.theme.dimensions || {}).columnPadding || 3}px;

      > .flex-item {
        padding-top: ${props => (props.theme.dimensions || {}).columnPadding || 3}px;
        padding-bottom: ${props => (props.theme.dimensions || {}).columnPadding || 3}px;
      }
    }
  }
`;
