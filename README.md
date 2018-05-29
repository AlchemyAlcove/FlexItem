# FlexItem

[![CircleCI](https://circleci.com/gh/AlchemyAlcove/FlexItem/tree/master.svg?style=svg)](https://circleci.com/gh/AlchemyAlcove/FlexItem/tree/master)

Responsive grid components for react and styled-components 💅.

FlexItem is 3 seperate tools in 1.

1. It is a responsive grid.
2. It also works well for displaying rows of objects.
3. Centering Container.

## Installing

```shell
npm install --save styled-components styled-components-grid
```

## ThemeProvider Requirements

This component requires a theme provider from styled-components library. Specifically looks for a **dimensions** and an **aspect** variable. dimensions is an object that should have a containerWidth, desktopBreakpoint, or tabletBreakpoint attribute. aspect is a string with options "desktop", "tablet", or "mobile". This should represent the current aspect ratio the user is on.

The **containerWidth** attribute provides a container or max with for the Flex Grid. If you set a containerWidth of 1200 for example, that would limit the FlexGrid to 1200px wide.

The **desktopBreakpoint** is first pixel in which the browser size is considered a desktop browser. If you set a desktopBreakpoint of 992 for example, that would start using the tablet media queries at 991px.

The **tabletBreakpoint** is first pixel in which the browser size is considered a tablet browser. If you set a tabletBreakpoint of 768 for example, that would start using the mobile media queries at 767px.

## Responsive Grid

FlexItem has 2 main components (FlexGrid and FlexItem).

FlexGrid starts a responsive row. FlexItem represents a column in the row.

FlexGrid has 5 props available.

- className - Allows custom class names on component. FlexGrid always has a flex-grid class for convenience.
- maxMobileRow - Define maximum columns in a row before wrapping for mobile aspect ratio. Defaults to 1. This gives a vertical effect.
- maxPerRow - Define maximum columns in a row before wrapping.
- maxTabletRow - Define maximum columns in a row before wrapping for tablet aspect ratio. Defaults to 1. This gives a vertical effect.
- style - Allows custom inline style.

FlexItem has 6 props available.

- className - Allows custom class names on component. FlexItem always has a flex-item class for convenience.
- mobileSize - Amount of columns used for mobile aspect ratio.
- size - Amount of columns used.
- style - Allows custom inline style.
- tabletSize - Amount of columns used for tablet aspect ratio.

## Responsive Grid

```javascript
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
```
![image](https://user-images.githubusercontent.com/1529103/40662874-bd2f0674-6314-11e8-9586-43409600ab98.png)

Mobile:

![image](https://user-images.githubusercontent.com/1529103/40662973-f2cae03c-6314-11e8-8dfd-3b10792a40bf.png)

Let's adjust this for mobile responsiveness.

```javascript
   <FlexGrid maxMobileRow={2}>
     <FlexItem size={2}>
       <div>Thing1</div>
     </FlexItem>
     <FlexItem>
       <div>Thing2</div>
     </FlexItem>
     <FlexItem>
       <div>Thing3</div>
     </FlexItem>
   </FlexGrid>
```

![image](https://user-images.githubusercontent.com/1529103/40663098-331cf29c-6315-11e8-90b1-4e954b466f4f.png)

## Rows

```javascript
  <FlexGrid maxPerRow={7} maxTabletRow={4}>
    <FlexItem tabletSize={4}>
      <div>Thing1</div>
    </FlexItem>
    <FlexItem size={2} tabletSize={3}>
      <div>Thing2</div>
    </FlexItem>
    <FlexItem tabletSize={1}>
      <div>Thing3</div>
    </FlexItem>
    <FlexItem size={3} tabletSize={4}>
      <div>Thing4</div>
    </FlexItem>
    <FlexItem>
      <div>Thing5</div>
    </FlexItem>
    <FlexItem>
      <div>Thing6</div>
    </FlexItem>
    <FlexItem>
      <div>Thing7</div>
    </FlexItem>
    <FlexItem>
      <div>Thing8</div>
    </FlexItem>
    <FlexItem>
      <div>Thing9</div>
    </FlexItem>
    <FlexItem>
      <div>Thing10</div>
    </FlexItem>
  </FlexGrid>
```
![image](https://user-images.githubusercontent.com/1529103/40663212-6facc368-6315-11e8-8ce2-630ca4190e54.png)

But on tablet the column ratios are all different.

![image](https://user-images.githubusercontent.com/1529103/40663470-f45db144-6315-11e8-9a6d-88a674d76608.png)

## Setting aspect ratio on ThemeProvider

```javascript
  import React from "react";
  import { render } from "react-dom";
  import { ThemeProvider } from "styled-components";

  class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        aspect: this.fetchAspect()
      };
    }

    componentDidMount() {
      window.addEventListener("resize", () => this.updateAspect());
    }

    componentWillUnmount() {
      window.removeEventListener("resize", () => this.updateAspect());
    }

    fetchAspect() {
      const width = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );

      let aspect = "desktop";
      if(width < Dimensions.tabletBreakpoint) {
        aspect = "mobile";
      } else if(width < Dimensions.desktopBreakpoint) {
        aspect = "tablet";
      }
      return(aspect);
    }

    updateAspect() {
      const aspect = this.fetchAspect();
      if(aspect !== this.state.aspect) {
        this.setState({aspect: aspect});
      }
    }

    render() {
      const dimensions = {
        containerWidth: 1200,
        desktopBreakpoint: 992,
        tabletBreakpoint: 768
      };
 
      return(
       <ThemeProvider theme={{aspect: this.state.aspect, dimensions: dimensions}}>
	</ThemeProvider>
      );
    }
  }
```

### Note

Adding anything other than a FlexItem as a child of FlexGrid can cause the following error.

```javascript
Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: undefined.
```

This is due to passing props to children.

## Demo

The demo app runs Webpack.

Simply run the folling to start the app at [localhost:3322](http://localhost:3322)

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
