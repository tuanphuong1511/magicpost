import { Box, Breadcrumbs, Typography, Tab, Grid } from "@mui/material";
import { useState } from "react";
import AdminNavBar from "./components/AdminNavBar";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import StyledPostDetail from "./PostOfficeDetail.styles";
import { object, string } from "yup";

let hubSchema = object({
  hubName: string().required(),
  hubAddress: string().required(),
});

const PostDetail = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledPostDetail direction="row">
      <AdminNavBar />

      <Box sx={{ flexGrow: 1, gap: 32 }} className="right_section">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/statistics">
            Dashboard
          </Link>
          <Typography color="text.primary">Statistics</Typography>
        </Breadcrumbs>

        <Grid container spacing={2} margin={2}>
          <Grid
            item
            margin={"auto"}
            sx={{ background: "#fbfbfb", borderRadius: 4, paddingRight: 2 }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Thông tin điểm tập kết" value="1" />
                  <Tab label="Thông tin nhân viên" value="2" />
                  <Tab label="Tổng số đơn hàng" value="3" />
                  <Tab label="Số đơn hàng trong tháng" value="4" />
                  <Tab label="Thống kê" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item Four</TabPanel>
              <TabPanel value="5">Item Five</TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </Box>
    </StyledPostDetail>
  );
};

export default PostDetail;
