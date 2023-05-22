import styled from "styled-components";

export const SCLogin = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #f1f1f1;

  form {
    width: 450px;
    padding: 30px;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #fff;

    .__title {
      font-weight: bold;
      font-size: 36px;
      text-align: center;
      color: #3e8ed0;
    }

    .__sub_title {
      text-align: center;
      font-size: 18px;
      color: #979797;
      margin-bottom: 24px;
    }
  }
`;
