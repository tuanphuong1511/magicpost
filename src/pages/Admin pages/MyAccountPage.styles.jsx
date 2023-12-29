import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const StyledAccountDetail = styled(Stack)(({ theme }) => ({
  minHeight: "100vh",

  background: "#ededed",
  ".right_section": {
    padding: 32,
  },
  "#add_button": {
    gap: 8,
    background: "#ee0033",
  },
  ".main_section": {
    margin: "auto",
    gap: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ".logout_btn": {
    backgroundColor: "#ee0033",
    color: "#fbfbfb",
  },
  [theme.breakpoints.down("lg")]: {
    ".button_group": {
      whiteSpace: "nowrap",
    },
  },

  [theme.breakpoints.down("sm")]: {
    ".postOffice_title span": {
      fontSize: 14,
    },
    ".postOffice_title p": {
      fontSize: 12,
    },
    ".postOffice_info": {
      gap: "1rem",
    },
  },
}));

export default StyledAccountDetail;
