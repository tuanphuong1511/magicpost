import { Box, IconButton, Typography } from "@mui/material";
import { IoStatsChart } from "react-icons/io5";
import Logo from "../../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import StyledNavBar from "./HubLeadNavBar.styles";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const HubLeadNavBar = () => {
  const navigateInAdmin = useNavigate();
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const navigateToStatsPage = () => {
    navigateInAdmin("/hubLeader/statistics");
  };
  const navigateToCreateorders = () => {
    navigateInAdmin("/createOrders")
  }
  return (
    <StyledNavBar>
      <Box className="left-navbar" padding={2}>
        <nav className="nav">
          <a href="/" className="brand-logo">
            <Logo />
          </a>

          <ul>
            <Link className="menu_list" to="/hubLeader/statistics">
              <IconButton
                sx={{ width: 48, height: 48 }}
                onClick={navigateToStatsPage}
              >
                <IoStatsChart />
              </IconButton>
              <Typography component="div">Thống kê</Typography>
            </Link>
            <Link className="menu_list" to="/hubLeader/accountManagement">
              <IconButton sx={{ width: 48, height: 48 }}>
                <IoStatsChart />
              </IconButton>
              <div>Quản lý tài khoản</div>
            </Link>
            <Link
              className="menu_list"
              onClick={() => setOpenSubMenu(!openSubMenu)}
            >
              <IconButton sx={{ width: 48, height: 48 }}>
                <IoStatsChart />
              </IconButton>
              <div>Quản lý đơn hàng</div>
              <FaAngleDown className="secondary_icon" />
            </Link>
            <Box className={`dropdownMenu ${openSubMenu? 'active' : 'inactive'}`}>
              <Link className="menu_list" to="/createOrders" onClick={navigateToCreateorders}>
                <IconButton sx={{ width: 48, height: 48 }}></IconButton>
                <div>Tạo đơn mới</div>
              </Link>
              <Link className="menu_list" to="/ordersManagement">
                <IconButton sx={{ width: 48, height: 48 }}></IconButton>
                <div>Tra cứu đơn</div>
              </Link>
            </Box>
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

export default HubLeadNavBar;
