import styled from "styled-components";

const FlexGridStyle = styled.div`
  position: relative;
  display: flex;
  max-width: ${props => props.theme.dimensions.containerWidth}px;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;

  > .flex-item {
    padding-top: 0;
    padding-bottom: 0;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  @media (min-width: ${props => props.theme.dimensions.desktopBreakpoint}px) {
    &.max-1, &.max-2, &.max-3, &.max-4, &.max-5, &.max-6, &.max-7, &.max-8, &.max-9, &.max-10, &.max-11, &.max-12 {
      flex-wrap: wrap;

      > .flex-item {
        padding-bottom: 6px;

        &:last-child {
          padding-right: 6px;
        }
      }
    }

    &.max-1 {
      > .flex-item {
        flex: 0 0 calc(100% / 1);
        padding: 0 0 6px;

        &:nth-child(n + 2) {
          padding-top: 6px;
        }

        &:last-child {
          padding-bottom: 0;
          padding-right: 0;
        }
      }
    }

    &.max-2 {
      > .flex-item {
        flex: 0 0 calc(100% / 2);

        &:nth-child(2n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(2n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 3) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 2) {
          padding-bottom: 0;
        }
      }
    }

    &.max-3 {
      > .flex-item {
        flex: 0 0 calc(100% / 3);

        &:nth-child(3n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(3n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 4) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 3) {
          padding-bottom: 0;
        }
      }
    }

    &.max-4 {
      > .flex-item {
        flex: 0 0 calc(100% / 4);

        &:nth-child(4n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(4n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 5) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 4) {
          padding-bottom: 0;
        }
      }
    }

    &.max-5 {
      > .flex-item {
        flex: 0 0 calc(100% / 5);

        &:nth-child(5n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(5n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 6) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 5) {
          padding-bottom: 0;
        }
      }
    }

    &.max-6 {
      > .flex-item {
        flex: 0 0 calc(100% / 6);

        &:nth-child(6n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(6n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 7) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 6) {
          padding-bottom: 0;
        }
      }
    }

    &.max-7 {
      > .flex-item {
        flex: 0 0 calc(100% / 7);

        &:nth-child(7n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(7n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 8) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 7) {
          padding-bottom: 0;
        }
      }
    }

    &.max-8 {
      > .flex-item {
        flex: 0 0 calc(100% / 8);

        &:nth-child(8n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(8n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 9) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 8) {
          padding-bottom: 0;
        }
      }
    }

    &.max-9 {
      > .flex-item {
        flex: 0 0 calc(100% / 9);

        &:nth-child(9n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(9n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 10) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 9) {
          padding-bottom: 0;
        }
      }
    }

    &.max-10 {
      > .flex-item {
        flex: 0 0 calc(100% / 10);

        &:nth-child(10n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(10n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 11) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 10) {
          padding-bottom: 0;
        }
      }
    }

    &.max-11 {
      > .flex-item {
        flex: 0 0 calc(100% / 11);

        &:nth-child(11n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(11n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 12) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 11) {
          padding-bottom: 0;
        }
      }
    }

    &.max-12 {
      > .flex-item {
        flex: 0 0 calc(100% / 12);

        &:nth-child(12n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(12n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 13) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 12) {
          padding-bottom: 0;
        }
      }
    }
  }

  @media (min-width: ${props => props.theme.dimensions.tabletBreakpoint}px) and (max-width: ${props => props.theme.dimensions.desktopBreakpoint}px) {
    flex-wrap: wrap;

    &.tablet-max-1 {
      > .flex-item {
        flex: 0 0 calc(100% / 1);
        padding: 6px 0;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-2 {
      > .flex-item {
        flex: 0 0 calc(100% / 2);

        &:nth-child(2n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(2n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 3) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 2) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-3 {
      > .flex-item {
        flex: 0 0 calc(100% / 3);

        &:nth-child(3n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(3n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 4) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 3) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-4 {
      > .flex-item {
        flex: 0 0 calc(100% / 4);

        &:nth-child(4n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(4n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 5) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 4) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-5 {
      > .flex-item {
        flex: 0 0 calc(100% / 5);

        &:nth-child(5n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(5n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 6) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 5) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-6 {
      > .flex-item {
        flex: 0 0 calc(100% / 6);

        &:nth-child(6n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(6n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 7) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 6) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-7 {
      > .flex-item {
        flex: 0 0 calc(100% / 7);

        &:nth-child(7n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(7n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 8) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 7) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-8 {
      > .flex-item {
        flex: 0 0 calc(100% / 8);

        &:nth-child(8n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(8n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 9) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 8) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-9 {
      > .flex-item {
        flex: 0 0 calc(100% / 9);

        &:nth-child(9n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(9n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 10) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 9) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-10 {
      > .flex-item {
        flex: 0 0 calc(100% / 10);

        &:nth-child(10n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(10n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 11) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 10) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-11 {
      > .flex-item {
        flex: 0 0 calc(100% / 11);

        &:nth-child(11n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(11n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 12) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 11) {
          padding-bottom: 0;
        }
      }
    }

    &.tablet-max-12 {
      > .flex-item {
        flex: 0 0 calc(100% / 12);

        &:nth-child(12n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(12n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 13) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 12) {
          padding-bottom: 0;
        }
      }
    }
  }

  @media (max-width: ${props => props.theme.dimensions.tabletBreakpoint}px) {
    flex-wrap: wrap;

    &.mobile-max-1 {
      > .flex-item {
        flex: 0 0 calc(100% / 1);
        padding: 6px 0;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-2 {
      > .flex-item {
        flex: 0 0 calc(100% / 2);

        &:nth-child(2n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(2n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 3) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 2) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-3 {
      > .flex-item {
        flex: 0 0 calc(100% / 3);

        &:nth-child(3n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(3n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 4) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 3) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-4 {
      > .flex-item {
        flex: 0 0 calc(100% / 4);

        &:nth-child(4n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(4n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 5) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 4) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-5 {
      > .flex-item {
        flex: 0 0 calc(100% / 5);

        &:nth-child(5n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(5n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 6) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 5) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-6 {
      > .flex-item {
        flex: 0 0 calc(100% / 6);

        &:nth-child(6n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(6n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 7) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 6) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-7 {
      > .flex-item {
        flex: 0 0 calc(100% / 7);

        &:nth-child(7n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(7n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 8) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 7) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-8 {
      > .flex-item {
        flex: 0 0 calc(100% / 8);

        &:nth-child(8n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(8n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 9) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 8) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-9 {
      > .flex-item {
        flex: 0 0 calc(100% / 9);

        &:nth-child(9n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(9n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 10) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 9) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-10 {
      > .flex-item {
        flex: 0 0 calc(100% / 10);

        &:nth-child(10n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(10n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 11) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 10) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-11 {
      > .flex-item {
        flex: 0 0 calc(100% / 11);

        &:nth-child(11n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(11n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 12) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 11) {
          padding-bottom: 0;
        }
      }
    }

    &.mobile-max-12 {
      > .flex-item {
        flex: 0 0 calc(100% / 12);

        &:nth-child(12n) {
          padding-right: 0;
        }

        &:nth-child(0), &:nth-child(12n + 1) {
          padding-left: 0;
        }

        &:nth-child(n + 13) {
          padding-top: 6px;
        }

        &:nth-last-child(-n + 12) {
          padding-bottom: 0;
        }
      }
    }
  }
`;

module.exports = FlexGridStyle;
