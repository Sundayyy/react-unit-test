import styled from "styled-components";

export const SCNavbar = styled.div`
  flex: 0 0 320px;
  max-width: 320px;
  background: #fff;

  ul {
    li {
      a {
        display: block;
        padding: 20px 30px;
        font-weight: 500;
        color: #4a4a4a;

        &.active {
          background: #ddeeff;
          font-weight: 600;
        }

        span:last-child {
          padding-left: 5px;
        }
      }
    }
  }
`;
