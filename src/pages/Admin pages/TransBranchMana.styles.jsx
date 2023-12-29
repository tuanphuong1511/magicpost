import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const StyledTransBranchMana = styled(Stack)(({ theme }) => ({
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
  },

  ".postOffice_title": {
    display: "flex",
    gap: 8,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  [theme.breakpoints.down("lg")]: {
    ".button_group": {
      whiteSpace: "nowrap",
    },
  },

  [theme.breakpoints.down("md")]: {
    ".postOffice_title p": {
      display: "none",
    },
  },
}));

export default StyledTransBranchMana;
