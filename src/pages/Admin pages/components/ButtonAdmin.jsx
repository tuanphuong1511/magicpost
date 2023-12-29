import { Button, Typography, styled } from "@mui/material";

const AdminButton = (props) => {
    const {text = "Button Content" } = props;
  return (
    <StyledAdminButton variant="contained">
      <Typography>{text}</Typography>
    </StyledAdminButton>
  );
};

const StyledAdminButton = styled(Button)(({
    gap: 8,
    background: "#ee0033"
}));

export default AdminButton;
