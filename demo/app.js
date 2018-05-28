import Dimensions from "./dimensions";
import FlexGrid from "../src/flexGrid";
import FlexItem from "../src/flexItem";
import React from "react";
import Style from "./app.style";
import { render } from "react-dom";
import { injectGlobal, ThemeProvider } from "styled-components";

injectGlobal`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`;

class App extends React.Component {
  render() {
    return(
      <ThemeProvider theme={{dimensions: Dimensions}}>
        <Style className="demo-grids">
          <FlexGrid>
            <FlexItem>
              <h2>Simple 3 column grid</h2>
              <p>Simple column based data organization is easy by just creating flex items in a flex grid.</p>
              <br/>
              <FlexGrid className="three-column-example">
                <FlexItem className="column-one">
                  <div>Thing1</div>
                </FlexItem>
                <FlexItem className="column-two">
                  <div>Thing2</div>
                </FlexItem>
                <FlexItem className="column-three">
                  <div>Thing3</div>
                </FlexItem>
              </FlexGrid>
              <br/>
              <br/>
              <br/>
              <h2>Max 7 column grid</h2>
              <p>FlexItem allows you to control how many items show in each row.</p>
              <br/>
              <FlexGrid maxPerRow={7} className="seven-column-example">
                <FlexItem className="column-one">
                  <div>Thing1</div>
                </FlexItem>
                <FlexItem className="column-two">
                  <div>Thing2</div>
                </FlexItem>
                <FlexItem className="column-three">
                  <div>Thing3</div>
                </FlexItem>
                <FlexItem className="column-four">
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
