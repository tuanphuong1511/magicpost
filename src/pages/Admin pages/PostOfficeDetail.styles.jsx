import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const StyledPostDetail = styled(Stack)(({ theme }) => ({
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
  ".postOffice_info": {
    justifyContent: "space-between",
    gap: "3rem",
  },

  ".postOffice_title": {
    display: "flex",
    gap: 8,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  ".detailButton": {
    borderColor: "#ee0033",
    color: "#ee0033",
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

export default StyledPostDetail;
