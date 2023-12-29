import {
  Container,
  Grid,
  IconButton,
  InputAdornment,
  styled,
  Alert,
} from "@mui/material";
// import "./Login.styles.jsx";
import logo from "../../assets/imgs/logo.png";
import Input from "../../components/Input";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { object, string } from "yup";
import axios from "axios";
import { useUser } from "../../providers/user-provider";
import StyledLogin from "./Login.styles";

let loginSchema = object({
  username: string().required(),
  password: string().required(),
});
const Login = () => {
  const { setUser, text } = useUser();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:8080/accounts/auth", values)
        .then((response) => {
          navigateToAdmin();
          setUser(response.data?.data);
        })
        .catch((error) => {
          console.log(error);
          formik.setErrors({ root: error?.response?.data?.msg });
        });
    },
    validationSchema: loginSchema,
  });
  //Hàm xử lí việc ấn vào icon để hiện password
  const [showPassword, setShowPassword] = useState(false);
  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const navigateToAdmin = () => {
    navigate("/admin/statistics");
  };

  return (
    <StyledLogin>
      <StyledContainer>
        <Grid container>
          <Grid item className="left-section" xs={12} md={6} spacing={2}>
            <img src={logo} alt="Logo" />
            <h2>The best delivery service</h2>
          </Grid>

          <Grid
            item
            className="right-section"
            xs={12}
            md={6}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <div className="login-container">
              <h2>Login</h2>
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username:</label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                onChange={formik.handleChange}
                value={formik.values.username}
                error={!!formik.errors.username}
                helperText={formik.errors.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={!!formik.errors.password}
                helperText={formik.errors.password}
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
              {formik.errors.root && (
                <Alert severity="error">{formik.errors.root}</Alert>
              )}
            </div>
            <div id="forget_pass">
              <a href="/resetPassword" id="link_to_reset_pass">
                {" "}
                Quên mật khẩu?{" "}
              </a>
            </div>
            <div>
              <button className="login-button" type="submit">
                Log In
              </button>
            </div>
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledLogin>
  );
};

const StyledContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  minHeight: "100vh",
});

export default Login;
