import StyledPostOfficeMana from "./PostOfficeMana.styles";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
  IconButton,
} from "@mui/material";
import postOffice from "../../assets/imgs/postOffice.png";
import AdminNavBar from "./components/AdminNavBar";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { http } from "../../services/http";
import { object, string } from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import AppSelector from "../../components/Selector";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

let hubSchema = object({
  hubName: string().required(),
  hubAddress: string().required(),
});

const PostOfficeMana = () => {
  const [openDialog, setOpenDialog] = useState(false); //state của Dialog thêm bưu cục
  const [hubs, setHubs] = useState([]); //state chứa một mảng nhận data từ backend
  const [reloadHubs, setReloadHubs] = useState(false); //state của việc render danh sách
  const [editHub, setEditHub] = useState(false);
  const [openAlert, setOpenAlert] = useState(false); //state của Dialog xóa bưu cục
  const [deleteHub, setDeleteHub] = useState(false);

  const navigate = useNavigate();

  const navToDetail = () => {
    navigate("/postOfficeDetail");
  };
  const handleClickOpen = () => { //hàm xử lí bấm nút mở Dialog
    setOpenDialog(true);
    setEditHub();
  };

  const handleClose = () => { //hàm xử lí đóng Dialog
    setOpenDialog(false);
  };

  const handleOpenEdit = (hub) => { //hàm xử lí nhận id của hub cần chỉnh sửa
    setOpenDialog(true);
    setEditHub(hub);
    formik.setValues(hub);
  };

  const handleOpenAlert = (id) => {
    setOpenAlert(true);
    setDeleteHub(id); //truyền id của Hub cần delete vào hàm setDeleteHub
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  //Hàm xử lý delete hub
  const handleDelete = () => {
    http
      .delete(`/hub/${deleteHub}`)
      .then((res) => {
        handleCloseAlert();
        setReloadHubs(!reloadHubs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Hàm xử lí render danh sách bưu cục trong data
  useEffect(() => {
    http
      .get("/hub")
      .then((res) => {
        setHubs(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadHubs]); //dùng dependencies để bảng render lại mỗi khi update

  //Hàm xử lí việc hiện Dialog để thêm và sửa danh sách điểm tập kết
  const formik = useFormik({
    initialValues: {
      hubName: "",
      hubAddress: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //Nếu người dùng bấm vào icon chỉnh sửa 1 bưu cục 
      //thì editHub sẽ nhận giá trị là ID của hub và trả về Dialog xử lí
      //việc chỉnh sửa bưu cục, còn nếu editHub ko nhận giá trị thì mở Dialog thêm bưu cục
      if (editHub?.hubID) {
        http
          .put(`/hub/${editHub.hubID}`, values)
          .then((response) => {
            handleClose();
            setReloadHubs(!reloadHubs); //chuyển biến reloadHubs về true
            formik.resetForm();
          })
          .catch((error) => {
            console.log(error);
            formik.setErrors({ root: error?.response?.data?.msg });
          });
      } else {
        http
          .post("/hub", values)
          .then((response) => {
            handleClose();
            setReloadHubs(!reloadHubs);
            formik.resetForm();
          })
          .catch((error) => {
            console.log(error);
            formik.setErrors({ root: error?.response?.data?.msg });
          });
      }
    },
    validationSchema: hubSchema,
  });
  return (
    <StyledPostOfficeMana direction="row">
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
            Quản lý điểm tập kết
          </Link>
          <Typography color="text.primary">Danh sách điểm tập kết</Typography>
        </Breadcrumbs>

        <Grid container spacing={2} px={2} mt={2}>
          <Box className="main_section" direction="column">
            <Button
              id="add_button"
              variant="contained"
              onClick={handleClickOpen}
            >
              <IoIosAddCircleOutline />
              <Typography>Thêm điểm tập kết</Typography>
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
                {editHub?.hubID ? "Chỉnh sửa" : "Thêm"} điểm tập kết
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This is a form to add an new post office to the system's data
                </DialogContentText>
                {/* Input xử lí thêm tên điểm tập kết */}
                <Input
                  autoFocus
                  margin="dense"
                  name="hubName"
                  placeholder="Enter name"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.hubName}
                  error={!!formik.errors.hubName}
                  helperText={formik.errors.hubName}
                />
                {/* Input xử lí thêm địa chỉ điểm tập kết  */}
                <Input
                  autoFocus
                  margin="dense"
                  name="hubAddress"
                  placeholder="Enter Address"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.hubAddress}
                  error={!!formik.errors.hubAddress}
                  helperText={formik.errors.hubAddress}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Confirm</Button>
              </DialogActions>
            </Dialog>
            {/* Render danh sách điểm tập kết lấy từ API và các nút thao tác sửa & xóa */}
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
              }}
            >
              {hubs.map((hub, id) => {
                return (
                  <ListItem alignItems="flex-start" className="postOffice_info">
                    <div className="postOffice_title">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={postOffice} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={hub.hubName}
                        secondary={<>{hub.hubAddress}</>}
                      />
                    </div>
                    <div className="button_group">
                      <Stack direction="row" className="button_group">
                        <IconButton onClick={() => navToDetail()}>
                          <IoInformationCircleOutline />
                        </IconButton>
                        <IconButton onClick={() => handleOpenEdit(hub)}>
                          <BiEditAlt />
                        </IconButton>
                        <IconButton onClick={() => handleOpenAlert(hub.hubID)}>
                          <MdDeleteOutline />
                        </IconButton>
                      </Stack>
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
    </StyledPostOfficeMana>
  );
};

export default PostOfficeMana;
