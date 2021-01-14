import { css } from "@emotion/core";

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
      ${
        "" /* 
      TODO: once Safari supports column-gap and row-gap,
      switch to using this for column and row spacing.
      column-gap: ${(theme.dimensions || {}).columnSpacing || 6}px; */
      }
      margin-left: -${(theme.dimensions || {}).columnSpacing / 2 || 3}px;
      margin-right: -${(theme.dimensions || {}).columnSpacing / 2 || 3}px;
      width: calc(100% + ${(theme.dimensions || {}).columnSpacing || 6}px);
      max-width: calc(100% + ${(theme.dimensions || {}).columnSpacing || 6}px);

      .flex-item {
        ${"" /* flex-grow: 1; */}
        padding-left: ${(theme.dimensions || {}).columnSpacing / 2 || 3}px;
        padding-right: ${(theme.dimensions || {}).columnSpacing / 2 || 3}px;
      }
    }

    &.flex-grid-vertical-container {
      ${"" /* row-gap: ${(theme.dimensions || {}).rowSpacing || 6}px; */}
      margin-top: -${(theme.dimensions || {}).rowSpacing / 2 || 3}px;
      margin-bottom: -${(theme.dimensions || {}).rowSpacing / 2 || 3}px;
      > .flex-item {
        padding-top: ${(theme.dimensions || {}).rowSpacing / 2 || 3}px;
        padding-bottom: ${(theme.dimensions || {}).rowSpacing / 2 || 3}px;
      }
    }
  }
`;
