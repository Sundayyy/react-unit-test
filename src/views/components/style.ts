import styled from "styled-components";

export const SCPrivateRoute = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border-bottom: 1px solid #f1f1f1;

    .__logo {
      line-height: 0;

      a {
        display: inline-block;
      }

      img {
        border-radius: 10px;
        height: 65px;
      }
    }

    .__menu {
      position: relative;
      height: 65px;
      line-height: 65px;
      cursor: pointer;

      &:hover {
        .__sub_menu {
          z-index: 1;
          transform: translateY(0px);
          visibility: visible;
        }
      }

      .__sub_menu {
        position: absolute;
        background: #fff;
        width: 200px;
        right: 0;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        line-height: initial;
        z-index: -1;
        transform: translateY(10px);
        visibility: hidden;
        transition: all 0.1s;

        a {
          display: block;
          color: #4a4a4a;
          padding: 10px;
          font-weight: 500;

          border-bottom: 1px solid #ccc;
          font-size: 14px;

          &:hover {
            color: #3e8ed0;
            background: #f1f1f1;
          }

          span:last-child {
            padding-left: 10px;
          }
        }
      }
    }
  }

  .__layout_content {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    height: calc(100vh - 76px);
    background: #f7f7f7;

    .main_content {
      flex: 0 0 calc(100% - 335px);
      max-width: calc(100% - 335px);
      background: #fff;
      padding: 20px;
    }
  }
`;
