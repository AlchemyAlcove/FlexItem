# FlexItem

React components for styling grids with css flexboxes. Uses styled-components under the hood.

## Styled Components

This component requires a theme provider from styled-components library.

[![CircleCI](https://circleci.com/gh/AlchemyAlcove/FlexItem/tree/master.svg?style=svg)](https://circleci.com/gh/AlchemyAlcove/FlexItem/tree/master)

## Example

```javascript
import React from "react";
import { ThemeProvider } from "styled-components";

class Example extends React.Component {
  render() {
    return(
      <ThemeProvider theme={{dimensions: {containerWidth: "1200"}}}>
        <FlexGrid>
          <FlexItem>
	    <div>Thing1</div>
          </FlexItem>
          <FlexItem>
	    <div>Thing2</div>
          </FlexItem>
          <FlexItem>
	    <div>Thing3</div>
          </FlexItem>
        </FlexGrid>
      </ThemeProvider>
    );
  }
}

module.exports = Example;

```
