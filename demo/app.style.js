import { css } from "@emotion/react";

export default css`
  &.demo-grids {
    .three-column-example {
      .column-one,
      .column-two,
      .column-three {
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
        background: #eeeeee;
        border: 1px solid black;
      }
    }
  }
`;
