import StyledTransBranchMana from "./TransBranchMana.styles";
import {
  Box,
  Grid,
  Breadcrumbs,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
} from "@mui/material";
import postOffice from "../../assets/imgs/postOffice.png";
import AdminNavBar from "./components/AdminNavBar";
import { BiEditAlt } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { http } from "../../services/http";
import { object, string } from "yup";
import { useFormik } from "formik";
import AppSelector from "../../components/Selector";
import { Link, useNavigate } from "react-router-dom";
import { IoInformationCircleOutline } from "react-icons/io5";

let transactionSchema = object({
  transactionName: string().required(),
  transactionAddress: string().required(),
});

const TransBranchMana = () => {
  const [openDialog, setOpenDialog] = useState(false); //state của Dialog thêm bưu cục
  const [branches, setBranches] = useState([]);
  const [reloadBranches, setReloadBranches] = useState(false);
  const [editBranch, setEditBranch] = useState(false);
  const [openAlert, setOpenAlert] = useState(false); //state của Dialog xóa bưu cục
  const [deleteBranch, setDeleteBranches] = useState(false);
  const navigate = useNavigate();
  const navToDetail = () => {
    navigate("/postOfficeDetail");
  };

  const handleClickOpen = () => {
    setOpenDialog(true);
    setEditBranch();
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOpenEdit = (branch) => {
    setOpenDialog(true);
    setEditBranch(branch);
    formik.setValues(branch);
  };

  const handleOpenAlert = (id) => {
    setOpenAlert(true);
    setDeleteBranches(id); //truyền id của branch cần delete vào hàm setDeleteBranch
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  console.log(editBranch);
  //Hàm xử lý delete branch
  const handleDelete = () => {
    http
      .delete(`/transactionPoint/${deleteBranch}`)
      .then((res) => {
        handleCloseAlert();
        setReloadBranches(!reloadBranches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    http
      .get("/transactionPoint")
      .then((res) => {
        setBranches(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadBranches]); //dùng dependencies để bảng render lại mỗi khi update

  const formik = useFormik({
    initialValues: {
      transactionName: "",
      transactionAddress: "",
      hubID: "",
    },
    onSubmit: (values) => {
      console.log(editBranch);
      if (editBranch?.transactionID) {
        http
          .put(`/transactionPoint/${editBranch.transactionID}`, values)
          .then((response) => {
            handleClose();
            setReloadBranches(!reloadBranches);
            formik.resetForm();
          })
          .catch((error) => {
            console.log(error);
            formik.setErrors({ root: error?.response?.data?.msg });
          });
      } else {
        http
          .post("/transactionPoint", values)
          .then((response) => {
            handleClose();
            setReloadBranches(!reloadBranches);
            formik.resetForm();
          })
          .catch((error) => {
            console.log(error);
            formik.setErrors({ root: error?.response?.data?.msg });
          });
      }
    },
    validationSchema: transactionSchema,
  });
  return (
    <StyledTransBranchMana direction="row">
      <AdminNavBar />

      <Box sx={{ flexGrow: 1 }} className="right_section">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/admin/statistics"
          >
            Dashboard
          </Link>
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            Quản lý điểm giao dịch
          </Link>
          <Typography color="text.primary">Danh sách điểm giao dịch</Typography>
        </Breadcrumbs>

        <Grid container spacing={2} px={2} mt={2}>
          <Box className="main_section" direction="column">
            <Button
              id="add_button"
              variant="contained"
              onClick={handleClickOpen}
            >
              <IoIosAddCircleOutline />
              <Typography>Thêm điểm giao dịch</Typography>
            </Button>

            <Stack direction="row">
              <AppSelector title="Miền" />
              <AppSelector title="Khu vực" />
              <AppSelector title="Tỉnh/Thành phố" />
            </Stack>

            <Dialog
              open={openDialog}
              onClose={handleClose}
              component="form"
              onSubmit={formik.handleSubmit}
            >
              <DialogTitle>
                {editBranch?.transactionID ? "Chỉnh sửa" : "Thêm"} điểm giao
                dịch
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a form to add an new post office to the system's data
                </DialogContentText>
                <Input
                  autoFocus
                  margin="dense"
                  name="transactionName"
                  placeholder="Thêm tên"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.transactionName}
                  error={!!formik.errors.transactionName}
                  helperText={formik.errors.transactionName}
                />

                <Input
                  autoFocus
                  margin="dense"
                  name="transactionAddress"
                  placeholder="Thêm địa chỉ"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.transactionAddress}
                  error={!!formik.errors.transactionAddress}
                  helperText={formik.errors.transactionAddress}
                />

                <Input
                  autoFocus
                  margin="dense"
                  name="hubID"
                  placeholder="Thêm ID của điểm tập kết gần nhất"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.hubID}
                  error={!!formik.errors.hubID}
                  helperText={formik.errors.hubID}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Confirm</Button>
              </DialogActions>
            </Dialog>

            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              {branches.map((branch, id) => {
                return (
                  <ListItem alignItems="flex-start" className="postOffice_info">
                    <div className="postOffice_title">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={postOffice} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={branch.transactionName}
                        secondary={<>{branch.transactionAddress}</>}
                      />
                    </div>
                    <div className="button_group">
                      <IconButton onClick={() => navToDetail()}>
                        <IoInformationCircleOutline />
                      </IconButton>
                      <IconButton>
                        <BiEditAlt onClick={() => handleOpenEdit(branch)} />
                      </IconButton>
                      <IconButton
                        onClick={() => handleOpenAlert(branch.transactionID)}
                      >
                        <MdDeleteOutline />
                      </IconButton>
                    </div>
                  </ListItem>
                );
              })}

              <Dialog
                open={openAlert}
                onClose={handleCloseAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="Delete_Dialog"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Do you want to delete this post office?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    This action will remove this post Office from your system's
                    data. You can't undo that!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseAlert}>Disagree</Button>
                  <Button onClick={handleDelete} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </List>
          </Box>
        </Grid>
      </Box>
    </StyledTransBranchMana>
  );
};

export default TransBranchMana;
