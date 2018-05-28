# FlexItem

[![CircleCI](https://circleci.com/gh/AlchemyAlcove/FlexItem/tree/master.svg?style=svg)](https://circleci.com/gh/AlchemyAlcove/FlexItem/tree/master)

React components for styling grids with css flexboxes. Uses styled-components under the hood.

## Styled Components

This component requires a theme provider from styled-components library. Specifically looks for a dimensions variable. dimensions is an object that can have a containerWidth, desktopBreakpoint, or tabletBreakpoint attribute.

The containerWidth attribute provides a container or max with for the Flex Grid. If you set a containerWidth of 1200 for example, that would limit the FlexGrid to 1200px wide.

The desktopBreakpoint is first pixel in which the browser size is considered a desktop browser. If you set a desktopBreakpoint of 992 for example, that would start using the tablet media queries at 991px.

The tabletBreakpoint is first pixel in which the browser size is considered a tablet browser. If you set a tabletBreakpoint of 768 for example, that would start using the mobile media queries at 767px.

## Installing

This project uses npm and node to install dependencies.

How to do this is not described here because it depends on your operating system among other things.

```shell
npm install
```

## Starting

The demo app runs Webpack in the background.

Simply run the folling to start the app at [localhost:3311](http://localhost:3311)

```shell
npm start
```

## Contributing

Contributors to this project should:

1. Fork the repository.
2. Commit changes to a branch within the fork.
3. Start a pull request in GitHub with a description of the fix.

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
