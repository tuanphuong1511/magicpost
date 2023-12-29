import { styled, Box } from "@mui/material";

const StyledNavBar = styled(Box)(({ theme }) => ({
    ".left-navbar": {
      width: 276,
      backgroundColor: "#fbfbfb",
      boxSizing: "border-box",
      minHeight: "100vh",
    },
    ".brand-logo": {
      textDecoration: "none",
    },
    ".nav": {
      width: "100%",
    },
  
    ".nav ul": {
      padding: 0,
      marginTop: 32,
      listStyle: "none",
      display: "block",
      width: "100%",
    },
  
    ".menu_list": {
      color: "inherit",
      gap: 8,
      padding: 8,
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: 450,
      width: "100%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  
    ".menu_list:hover": {
      backgroundColor: "#d8d4d4",
    },

    ".secondary_icon": {
      color: "inherit",
      marginLeft: 16,
    },

    ".dropdownMenu.inactive": {
      display: "none",
      transitionDelay: "1s",
    },

    [theme.breakpoints.down("md")]: {
      ".left-navbar": {
        width: 88,
        alignItems: "center",
      },
      ".menu_list div": {
        display: "none",
      },
      ".menu_list": {
        gap: 0,
        alignItems:"center",
      },
      ".brand-logo": {
        alignItems: "center",
      },
      ".brand-logo img": {
        width: 48,
        height: 48,
        padding: 8,
      },
    },
  }));

export default StyledNavBar;