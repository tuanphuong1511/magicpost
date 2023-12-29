import {
  Box,
  Breadcrumbs,
  Typography,
  Tab,
  Grid,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import AdminNavBar from "./components/AdminNavBar";
import { Link, useNavigate } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import StyledAccountDetail from "./MyAccountPage.styles";
import Input from "../../components/Input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import styled from "styled-components";
import { useUser } from "../../providers/user-provider";

const AccountDetail = (props) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { user, setUser } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const {
    header = "Thay đổi mật khẩu",
    label1 = "Nhập mật khẩu hiện tại:",
    label2 = "Nhập mật khẩu mới:",
    label3 = "Xác nhận mật khẩu:",
  } = props;

  const onClick = () => {
    setUser();
    navigate("/login");
  };

  return (
    <StyledAccountDetail direction="row">
      <AdminNavBar />

      <Box sx={{ flexGrow: 1, gap: 32 }} className="right_section">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/admin/statistics"
          >
            Bảng điều khiển
          </Link>
          <Typography color="text.primary">Tài khoản của tôi</Typography>
        </Breadcrumbs>

        <Grid container spacing={2} margin={2}>
          <Grid
            item
            margin={"auto"}
            sx={{ background: "#fbfbfb", borderRadius: 4 }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Thông tin chi tiết" value="1" />
                  <Tab label="Đổi mật khẩu" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid container spacing={2} px={2} mt={2}>
                  <Grid item>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <h2>Nguyễn Công Tuấn Phương</h2>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography className="text-left">Vai trò: </Typography>
                      <Typography className="text-left bold">
                        Lãnh đạo công ty
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Typography className="text-left">Địa điểm: </Typography>
                      <Typography className="text-left bold">
                        Thành phố Hà Nội, Việt Nam
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Button
                        variant="text"
                        className="logout_btn"
                        onClick={onClick}
                      >
                        Logout
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
                <Grid item className="right-section" xs={12} md={12}>
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
                              {showPassword ? (
                                <IoEyeOffOutline />
                              ) : (
                                <IoEyeOutline />
                              )}
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
                              {showPassword ? (
                                <IoEyeOffOutline />
                              ) : (
                                <IoEyeOutline />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <StackButton direction="row">
                    <div>
                      <button id="confirm-button">Xác nhận</button>
                    </div>
                    <div>
                      <button id="return-button">Quay lại</button>
                    </div>
                  </StackButton>
                </Grid>
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Box>
    </StyledAccountDetail>
  );
};

const StackButton = styled.div`
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
    margin-top: 16px;
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
`;
export default AccountDetail;
