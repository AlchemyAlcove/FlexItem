import { css } from "@emotion/react";

export default theme => css`
  &.flex-grid {
    position: relative;
    display: flex;
    max-width: ${(theme.dimensions || {}).containerWidth || 1200}px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;

    &.flex-grid-container {
      max-width: 100%;
      column-gap: ${(theme.dimensions || {}).columnSpacing || 6}px;

      .flex-item {
        flex-grow: 1;
      }
    }

    &.flex-grid-vertical-container {
      row-gap: ${(theme.dimensions || {}).rowSpacing || 6}px;
    }
  }
`;
