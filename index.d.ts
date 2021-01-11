import * as React from "react";

declare interface FlexGridProps {
  /** Custom class name(s) to be passed through to the rendered element. */
  className?: string,
  /** If true, max-width is limited to the container size set in the theme, and space is added between the child row items */
  container?: boolean,
  /** Sets the max number of child flex-items allowed on a row when the window is larger than the tablet breakpoint. */
  maxPerRow?: number,
  /** Sets the max number of child flex-items allowed on a row when the window is smaller than the mobile breakpoint. */
  maxMobileRow?: number,
  /** Sets the max number of child flex-items allowed on a row when the window is smaller than the tablet breakpoint but larger than the mobile breakpoint. */
  maxTabletRow?: number,
  /** Custom css styling to apply to the rendered element. The style object is passed through to the emotion css prop (it does not set the element's style attribute). */
  style?: object,
  /** If true, adds spacing between rows within the flex-grid. */
  verticalContainer?: boolean,
}

export function FlexGrid(props: FlexGridProps): React.FC;

declare interface FlexItemProps {
  /** Custom class name(s) to be passed through to the rendered element. */
  className?: string,
  /** The relative size of the flex-item when the window is smaller than the mobile breakpoint. */
  mobileSize?: number,
  /** The relative size of the flex-item in proportion to the max items permitted per row. The max items per row is set either by providing a maxPerRow prop to the parent FlexGrid, or is implicitly determined as the sum of all size props for FlexItems within the parent FlexGrid. Defaults to 1. */
  size?: number,
  /** Custom css styling to apply to the rendered element. Use object-type format, meaning css properties are camel cased and values are in quotes, e.g. { maxWidth: "50%" }. The style object is passed through to the emotion css prop (it does not set the element's style attribute). */
  style?: object,
  /** The relative size of the flex-item when the window is smaller than the tablet breakpoint but larger than the mobile breakpoint. */
  tabletSize?: number,
}

export function FlexItem(props: FlexItemProps): React.FC;
