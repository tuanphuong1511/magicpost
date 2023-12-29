import { Box, Breadcrumbs, Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import OrderInput from "./components/OrderInput";
import HubLeadNavBar from "./components/HubLeadNavBar";

const CreateOrders = () => {
  return (
    <StyledCreateOrders direction="row">
      <HubLeadNavBar />

      <Box sx={{ flexGrow: 1 }} className="right_section">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/statistics">
            Dashboard
          </Link>
          <Typography color="text.primary">Quản lý đơn hàng</Typography>
          <Typography color="text.primary">Tạo đơn mới</Typography>
        </Breadcrumbs>

        <Grid container spacing={2} px={2} mt={2}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <OrderInput title = "Thông tin người gửi" subTitle = "Họ tên:" placeholder = "Nhập tên người gửi"/>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <OrderInput title = "Thông tin người nhận" subTitle = "Họ tên:" placeholder = "Nhập tên người nhận"/>
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12}>
          </Grid>
        </Grid>
      </Box>
    </StyledCreateOrders>
  );
};

const StyledCreateOrders = styled(Stack)(({ theme }) => ({
  background: "#ededed",
  ".right_section": {
    padding: 32,
    height: "100%",
    overflowY: "auto",
  },
}));

export default CreateOrders;
