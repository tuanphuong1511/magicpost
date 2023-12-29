import { Card, CardContent, Stack, Typography } from "@mui/material";
import Input from "../../../components/Input";
import AppSelector from "../../../components/Selector";

const OrderInput = (props) => {
  const {
    title = "Thông tin",
    subTitle = "Họ tên ai đó:",
    placeholder = "Enter something",
  } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          {subTitle}
        </Typography>
        <Input
          type="text"
          id="senderName"
          name="senderName"
          placeholder={placeholder}
        />
        <Stack direction="row">
          <AppSelector title = "Tỉnh/Thành phố" />
          <AppSelector title = "Quận/ Huyện"/>
          <AppSelector title = "Phường/ Xã" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default OrderInput;
