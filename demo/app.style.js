import Styled from "styled-components";

module.exports = Styled.div`
  &.demo-grids {
    .three-column-example {
      .column-one, .column-two, .column-three {
        color: white;
        text-align: center;
      }

      .column-one {
        background: red;
      }

      .column-two {
        background: green;
      }

      .column-three {
        background: blue;
      }
    }

    .seven-column-example {
      .flex-item {
        text-align: center;
        background: #EEEEEE;
        border: 1px solid black;
        margin-bottom: 5px;
      }
    }
  }
`;
