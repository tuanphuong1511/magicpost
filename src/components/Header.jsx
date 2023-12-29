import Logo from "./Logo";
import StyledHeader from "./Header.styles";
import {
  Button,
  Typography,
  Hidden,
  IconButton,
  Drawer,
  List,
  styled,
} from "@mui/material";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <StyledHeader>
      <nav className="nav">
        <a href="/" className="brand-logo">
          <Logo />
        </a>
        {/* Khi màn hình bé hơn size Large của thư viện thì ẩn list, hiện Drawer */}
        <Hidden lgDown> 
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/about">Về chúng tôi</Link>
            </li>
            <li>
              <Link to="/service">Dịch vụ</Link>
            </li>
            <li>
              <Link to="/news">Tin tức</Link>
            </li>
            <li>
              <Link to="/support">Hỗ trợ</Link>
            </li>
            <li>
              <Link to="/recruitment">Tuyển dụng</Link>
            </li>
          </ul>
        </Hidden>

        <div>
          <Typography id="check">Bạn là nhân viên?</Typography>
          <Button
            id="login_button"
            variant="contained"
            onClick={navigateToLogin}
          >
            <BiLogIn />
            <Typography>Đăng nhập</Typography>
          </Button>
          {/* Khi màn hình lớn hơn size Large của thư viện thì ẩn Drawer, hiện list */}
          <Hidden lgUp> 
            <IconButton onClick={() => setShowDrawer(true)}>
              <IoMdMenu />
            </IconButton>
          </Hidden>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <StyledList>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/about">Về chúng tôi</Link>
          </li>
          <li>
            <Link to="/service">Dịch vụ</Link>
          </li>
          <li>
            <Link to="/news">Tin tức</Link>
          </li>
          <li>
            <Link to="/support">Hỗ trợ</Link>
          </li>
          <li>
            <Link to="/recruitment">Tuyển dụng</Link>
          </li>
        </StyledList>
      </Drawer>
    </StyledHeader>
  );
};

const StyledList = styled(List)({
  padding: 32,
  li: {
    padding: 8,
    ":hover": {
      background: "#d8d4d4",
    },
    a: {
      textDecoration: "none",
      fontSize: 16,
    },
  },
});

export default Header;
