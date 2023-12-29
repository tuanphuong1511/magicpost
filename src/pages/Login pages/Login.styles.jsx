import styled from "styled-components";

const StyledLogin = styled.div`
  .left-section {
    flex: 1;
    text-align: center;
    padding: 20px;
  }

  .left-section img {
    max-width: 100%;
  }

  .right-section {
    flex: 1;
    padding: 20px;
  }

  .login-container {
    text-align: center;
    margin-bottom: 20px;
  }

  .login-container h2 {
    margin-bottom: 10px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-group input {
    width: 100%;
  }

  .login-button {
    background-color: #ee0033;
    color: #fbfbfb;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    font-size: 20px;
    width: 100%;
  }

  .login-button:hover {
    background-color: rgb(212, 23, 64);
  }

  #forget_pass {
    float: right;
    margin-bottom: 12px;
  }

  #link_to_reset_pass {
    text-decoration: none;
    color: #ee0033;
    font-weight: 500;
  }

  label {
    font-weight: 500;
  }
`

export default StyledLogin;
