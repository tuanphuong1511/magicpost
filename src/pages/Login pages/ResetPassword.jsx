import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";
import "./ResetPassword.styles.jsx";
import logo from "../../assets/imgs/logo.png";
import Input from "../../components/Input.jsx";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import StyledResetPassword from "./ResetPassword.styles.jsx";

const ResetPasswordForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const {
    header = "Reset Password",
    label1 = "Nhập email công ty:",
    label2 = "Nhập mật khẩu mới:",
    label3 = "Xác nhận mật khẩu:",
  } = props;

  return (
    <StyledResetPassword>
      <StyledContainer>
        <Grid container>
          <Grid item className="left-section" xs={12} md={6} spacing={2}>
            <img src={logo} alt="Logo" />
            <h2>The best delivery service</h2>
          </Grid>

          <Grid item className="right-section" xs={12} md={6}>
            <div className="login-container">
              <h2>{header}</h2>
            </div>
            <div className="form-group">
              <label htmlFor="Email">{label1}</label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{label2}</label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your new password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={onClickShowPassword}>
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{label3}</label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password again"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={onClickShowPassword}>
                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <button id="confirm-button">Xác nhận</button>
            </div>
            <div>
              <button id="return-button" onClick={navigateToLogin}>
                Quay về trang đăng nhập
              </button>
            </div>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledResetPassword>
  );
};

const StyledContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
});

export default ResetPasswordForm;
