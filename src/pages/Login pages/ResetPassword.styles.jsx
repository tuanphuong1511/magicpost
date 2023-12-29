import styled from "styled-components";

const StyledResetPassword = styled.div`
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
  margin-top: auto;
  margin-bottom: auto;
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

#confirm-button {
  background-color: #ee0033;
  color: #fbfbfb;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 16px;
}

#confirm-button:hover {
  background-color: rgb(212, 23, 64);
}

#return-button {
  background-color: #f1f6f5;
  color: #494949;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 12px;
  font-size: 20px;
  width: 100%;
  margin-bottom: 16px;
  border: 2px solid;
  border-color: #d9d9d9;
}

#return-button:hover {
  background-color: #fbfbfb;
  border-color: #ee0033;
  color: #ee0033;
}

label {
  font-weight: 500;
}
`
export default StyledResetPassword;