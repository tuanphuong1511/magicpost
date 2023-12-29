import logo from "../assets/imgs/logo.png";
import { Box, Typography, styled } from "@mui/material";

const Logo = () => {
  return (
    <StyledLogo>
      <img alt="Logo" src={logo}></img>
      <Typography>MagicPost</Typography>
    </StyledLogo>
  );
};

const StyledLogo = styled(Box)(({ theme }) => ({

  display: "flex",
  alignItems: "center",
  width: "fit-content",

  "img": {
    width: 32,
    height: 32,
    padding: 8,
  },

  "p": {
    fontSize: 24,
    fontWeight: "bold",
    color: "#353535",
  },

  [theme.breakpoints.down("md")]: {
    "p": {
      display: "none",
    }
  },
}));

export default Logo;
