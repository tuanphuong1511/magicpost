import { Box, IconButton, Typography } from "@mui/material";
import { IoStatsChart } from "react-icons/io5";
import Logo from "../../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { GiPostOffice } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import StyledNavBar from "./AdminNavBar.styles";

const AdminNavBar = () => {
  const navigateInAdmin = useNavigate();

  const navigateToStatsPage = () => {
    navigateInAdmin("/admin/statistics");
  };
  const navigateToPostOfficeMana = () => {
    navigateInAdmin("/admin/postOfficeManagement");
  };
  const navigateToTransBranchMana = () => {
    navigateInAdmin("/admin/transBranchManagement");
  };

  return (
    <StyledNavBar>
      <Box className="left-navbar" padding={2}>
        <nav className="nav">
          <a href="/" className="brand-logo">
            <Logo />
          </a>

          <ul>
            <Link className="menu_list" to="/admin/statistics">
              <IconButton
                sx={{ width: 48, height: 48 }}
                onClick={navigateToStatsPage}
              >
                <IoStatsChart />
              </IconButton>
              <Typography component="div">Thống kê</Typography>
            </Link>
            <Link className="menu_list" to="/admin/postOfficeManagement">
              <IconButton
                sx={{ width: 48, height: 48 }}
                onClick={navigateToPostOfficeMana}
              >
                <HiOfficeBuilding />
              </IconButton>
              <div>Quản lý điểm tập kết</div>
            </Link>
            <Link className="menu_list" to="/admin/transBranchManagement">
              <IconButton
                sx={{ width: 48, height: 48 }}
                onClick={navigateToTransBranchMana}
              >
                <GiPostOffice />
              </IconButton>
              <div>Quản lý điểm giao dịch</div>
            </Link>
            <Link className="menu_list" to="/admin/accountManagement">
              <IconButton sx={{ width: 48, height: 48 }}>
                <IoStatsChart />
              </IconButton>
              <div>Quản lý tài khoản</div>
            </Link>
            <Link className="menu_list" to="/profile">
              <IconButton sx={{ width: 48, height: 48 }}>
                <IoStatsChart />
              </IconButton>
              <div>Tài khoản của tôi</div>
            </Link>
          </ul>
        </nav>
      </Box>
    </StyledNavBar>
  );
};

export default AdminNavBar;
