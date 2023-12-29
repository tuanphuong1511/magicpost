import {
  Box,
  TextField,
  Typography,
  Slide,
  styled,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import StyledTracking from "./TrackingBill.styles";
import { GoChecklist } from "react-icons/go";
import { forwardRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { object, string } from "yup";
import { useFormik } from "formik";
import axios from "axios";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TrackingBill = () => {
  const [orderDetail, setOrderDetail] = useState();

  let orderSchema = object({
    orderID: string().required(),
  });
  //Hàm kiểm tra xem ID của đơn mà người dùng nhập vào có trong data không,
  //nếu không có trong data thì trả về thông báo alert
  const formik = useFormik({
    initialValues: {
      orderID: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .get(`http://localhost:8080/orders/${values.orderID}`)
        .then((response) => {
          handleOpenBill();
          setOrderDetail(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          alert("Không tim thấy đơn, vui lòng thử lại")
          console.log(error);
          formik.setErrors({ root: error?.response?.data?.msg });
        });
    },
    validationSchema: orderSchema,
  });
  //Quản lí state và hàm xử lí mở chi tiết đơn
  const [openBillDetail, setOpenBillDetail] = useState(false);
  const handleOpenBill = () => { 
    setOpenBillDetail(true);
  };
  const handleCloseBill = () => {
    setOpenBillDetail(false);
  };

  console.log(formik.errors);

  return (
    <StyledTracking>
      <div class="form-title">
        <GoChecklist></GoChecklist>
        <Typography>Tra cứu vận đơn</Typography>
      </div>
      <StyledSearch component={"form"} onSubmit={formik.handleSubmit}>
        {/* Input cho người dùng nhập ID đơn để ra chi tiết đơn */}
        <TextField
          fullWidth
          id="input-tracking"
          name="orderID"
          placeholder="Nhập mã (ID) đơn của bạn"
          onChange={formik.handleChange}
          value={formik.values.orderID}
          error={!!formik.errors.orderID}
          helperText={formik.errors.orderID}
        />
        <button class="button-tracking" type = "submit">
          Tra cứu
        </button>
      </StyledSearch>

      <Dialog
        fullScreen
        open={openBillDetail}
        onClose={handleCloseBill}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#ee0033" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseBill}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Chi tiết bưu gửi
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseBill}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        {/* Dialog trả về trang chi tiết đơn sau khi id người dùng nhập trùng với ID trong database */}
        <Grid container spacing={2} px={2} mt={2}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Mã phiếu gửi: </Typography>
              <Typography className="text-left bold">
                {orderDetail?.[0].orderID}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Chi tiết đơn hàng: </Typography>
              <a href="/"> Xem chi tiết </a>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Người gửi: </Typography>
              <Typography>
                {orderDetail?.[0].senderName}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Người nhận: </Typography>
              <Typography href="/">
                {orderDetail?.[0].receiverName}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Khối lượng: </Typography>
              <Typography className="text-left bold"> {orderDetail?.[0].packageWeight} </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Dịch vụ: </Typography>
              <Typography className="text-left bold">
                {orderDetail?.[0].packageType}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Phí giao hàng: </Typography>
              <Typography> {orderDetail?.[0].shippingFee} </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">Trạng thái: </Typography>
              <Typography> {orderDetail?.[0].shipStatus} </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">
                Ngày nhận bưu phẩm:{" "}
              </Typography>
              <Typography className="text-left bold"> {orderDetail?.[0].createTime} </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">
                Ngày bắt đầu giao dự kiến:{" "}
              </Typography>
              <Typography className="text-left bold"> {orderDetail?.[0].expectedSendDate} </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography className="text-left">
                Ngày giao hàng thành công:{" "}
              </Typography>
              <Typography> {orderDetail?.[0].receiveDate} </Typography>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </StyledTracking>
  );
};

const StyledSearch = styled(Box)({
  position: "relative",
  width: "70%",
  fieldset: {
    border: "none",
  },
  button: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 14,
    background: "#ee0033",
    border: "none",
    borderRadius: 16,
    padding: "4px 16px",
    color: "#fbfbfb",
    fontSize: 16,
    fontWeight: 400,
    height: 30,
  },
});

export default TrackingBill;
