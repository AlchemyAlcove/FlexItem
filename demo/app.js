import Dimensions from "./dimensions";
import FlexGrid from "../src/flexGrid";
import FlexItem from "../src/flexItem";
import React from "react";
import Style from "./app.style";
import { render } from "react-dom";
import { injectGlobal } from "emotion";
import { ThemeProvider } from "emotion-theming";

injectGlobal`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

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
    return(
      <ThemeProvider theme={{aspect: this.state.aspect, dimensions: Dimensions}}>
        <Style className="demo-grids">
          <FlexGrid>
            <FlexItem>
              <h2>Simple 3 column grid</h2>
              <p>Simple column based data organization is easy by just creating flex items in a flex grid.</p>
              <br/>
              <FlexGrid container verticalContainer className="three-column-example">
                <FlexItem className="column-one">
                  <div>Thing1</div>
                </FlexItem>
                <FlexItem className="column-two" size={2}>
                  <div>Thing2</div>
                </FlexItem>
                <FlexItem className="column-three" size={1}>
                  <div>Thing3</div>
                </FlexItem>
              </FlexGrid>
              <br/>
              <br/>
              <br/>
              <h2>Max 7 column grid</h2>
              <p>FlexItem allows you to control how many items show in each row.</p>
              <br/>
              <FlexGrid container verticalContainer maxPerRow={7} maxTabletRow={4} className="seven-column-example">
                <FlexItem tabletSize={4} className="column-one">
                  <div>Thing1</div>
                </FlexItem>
                <FlexItem size={2} tabletSize={3} className="column-two">
                  <div>Thing2</div>
                </FlexItem>
                <FlexItem tabletSize={1} className="column-three">
                  <div>Thing3</div>
                </FlexItem>
                <FlexItem size={3} tabletSize={4} className="column-four">
                  <div>Thing4</div>
                </FlexItem>
                <FlexItem className="column-five">
                  <div>Thing5</div>
                </FlexItem>
                <FlexItem className="column-six">
                  <div>Thing6</div>
                </FlexItem>
                <FlexItem className="column-seven">
                  <div>Thing7</div>
                </FlexItem>
                <FlexItem className="column-eight">
                  <div>Thing8</div>
                </FlexItem>
                <FlexItem className="column-nine">
                  <div>Thing9</div>
                </FlexItem>
                <FlexItem className="column-ten">
                  <div>Thing10</div>
                </FlexItem>
              </FlexGrid>
            </FlexItem>
          </FlexGrid>
        </Style>
      </ThemeProvider>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render(
    <App/>,
    document.getElementById("demo")
  );
});
