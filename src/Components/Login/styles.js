import styled from "@emotion/styled";
export const LoginStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  display: flex;
  justify-content: center;
  background: linear-gradient(
    to right,
    pink 0%,
    pink 50%,
    paleturquoise 50%,
    paleturquoise 100%
  );

  height: 100vh;
  padding-top: 40px;

  .mainDiv {
    width: 100%;
    max-width: 500px;
    height: 500px;
    background: wheat;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 61px;
  }
  .mainHead {
    font-family: Poppins;
    font-weight: 600;
    color: #341c24;
    font-size: 26px;
  }
  .inputField {
    border-radius: 8px;
    border: none;
    margin-bottom: 12px;
    height: 26px;
    width: 215px;
    margin-top: 5px;
    background-color: #f0f5ff;
    padding: 4px;
    ::placeholder {
      font-family: sans-serif;
    }
  }
  .submitBtn {
    border-radius: 8px;
    border: none;
    height: 30px;
    width: 110px;
    color: white;
    font-weight: 600;
    margin-right: 30px;
    cursor: pointer;
    width: 222px;
    margin-bottom: 10px;
    margin-top: 14px;
    background-color: #794bc4;
  }

  label {
    text-align: right;
    font-family: Candara;
    color: #161748;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .googleBtn {
    border-radius: 8px;
    border: none;
    height: 30px;
    width: 80px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    width: 222px;
    margin-top: 8px;
    background-color: #794bc4;
    font-family: sans-serif;
  }
  .span {
    bottom: 470px;
    position: absolute;
    right: 40%;
  }
  .login {
    font-family: monospace;
    color: #2f4f4f;
    padding: 10px;
  }
  input::placeholder {
    font-family: Helvetica;
  }
  @media only screen and (max-width: 600px) {
    .mainDiv {
      width: 400px;
      height: 100vh;
    }
  }
`;
