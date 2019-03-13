import styled from "@emotion/styled";

module.exports = styled("div")`
  &.demo-grids {
    .three-column-example {
      .column-one, .column-two, .column-three {
        color: white;
        text-align: center;
      }

      .column-one div {
        background: red;
      }

      .column-two div {
        background: green;
      }

      .column-three div {
        background: blue;
      }
    }

    .seven-column-example {
      .flex-item div {
        text-align: center;
        background: #EEEEEE;
        border: 1px solid black;
      }
    }
  }
`;
