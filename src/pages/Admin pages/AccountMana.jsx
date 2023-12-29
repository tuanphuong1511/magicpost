import {
  Box,
  Breadcrumbs,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import AdminNavBar from "./components/AdminNavBar";
import StyledAccountMana from "./AccountMana.styles";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { http } from "../../services/http";

const AccountMana = () => {
  const [openDialog, setOpenDialog] = useState(false); //state của Dialog thêm tài khoản

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    http
      .get("/accounts")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); //dùng dependencies để bảng render lại mỗi khi update

  return (
    <StyledAccountMana direction="row">
      <AdminNavBar />

      <Box sx={{ flexGrow: 1 }} className="right_section">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link style={{textDecoration: "none", color: "inherit"}}  to="/admin/statistics">
            Dashboard
          </Link>
          <Typography color="text.primary">Thêm tài khoản</Typography>
        </Breadcrumbs>

        <Grid container spacing={2} px={2} mt={2}>
          <Box className="main_section" direction="column">
            <Button
              id="add_button"
              variant="contained"
              onClick={handleClickOpen}
            >
              <IoIosAddCircleOutline />
              <Typography>Add new account</Typography>
            </Button>

            <Dialog open={openDialog} onClose={handleClose} component="form">
              <DialogTitle>Add new account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a form to add an new account to the system's data
                </DialogContentText>
                <Input
                  autoFocus
                  margin="dense"
                  placeholder="Enter username"
                  fullWidth
                />

                <Input
                  autoFocus
                  margin="dense"
                  placeholder="Enter password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Confirm</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Grid>
      </Box>
    </StyledAccountMana>
  );
};

export default AccountMana;
