import styled from "styled-components";

export const SCNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: #3c3c3c;

  .__text {
    color: #fff;

    h2 {
      font-size: 48px;
      font-weight: 500;
      font-style: italic;
      letter-spacing: 5px;
    }

    h4 {
      font-size: 24px;
      font-weight: 500;
      font-style: italic;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: #fff;
      border-radius: 30px;
      font-weight: 600;
    }
  }
`;
