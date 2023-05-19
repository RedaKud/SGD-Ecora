import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Box,
  SvgIcon,
  Typography,
  FormControl,
  Input,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import MenuIcon from "@mui/icons-material/Menu";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

function UploadModal({ open, handleClose }) {
  const [value, setValue] = React.useState(null);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="upload-modal-title"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 360,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          backgroundColor: "#EAEAEA",
          padding: "15px",
        }}
      >
        <div style={{ float: "right", padding: "0px" }}>
          <SvgIcon
            component={CancelIcon}
            inheritViewBox
            onClick={handleClose}
            sx={{
              mt: 2,
              margin: 0,
            }}
          ></SvgIcon>
        </div>
        <Typography
          sx={{
            fontSize: "20px",
            marginTop: "15px",
            marginLeft: "15px",
            marginBottom: "25px",
            fontWeight: 600,
          }}
        >
          Upload Products
        </Typography>
        <FormControl>
          <Typography
            sx={{
              fontSize: "14px",
              marginBottom: "6px",
              marginLeft: "15px",
            }}
          >
            Title
          </Typography>
          <Input
            id="component-simple"
            placeholder=""
            sx={{
              backgroundColor: "white",
              "&:hover": {
                border: "1px solid black",
              },
              width: "300px",
              marginBottom: "20px",
              marginLeft: "15px",
            }}
          />
        </FormControl>
        <FormControl>
          <Typography
            sx={{
              fontSize: "14px",
              marginBottom: "6px",
              marginLeft: "15px",
            }}
          >
            Address
          </Typography>
          <Input
            id="component-simple"
            placeholder=""
            sx={{
              backgroundColor: "white",
              "&:hover": {
                border: "1px solid black",
              },
              width: "300px",
              marginBottom: "20px",
              marginLeft: "15px",
            }}
          />
        </FormControl>
        <FormControl>
          <Typography
            sx={{
              fontSize: "14px",
              marginBottom: "6px",
              marginLeft: "15px",
            }}
          >
            Expiration Date
          </Typography>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            sx={{
              backgroundColor: "white",
              "&:hover": {
                border: "1px solid black",
              },
              width: "300px",
              marginLeft: "15px",
            }}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          component="label"
          sx={{
            borderRadius: 10,
            backgroundColor: "#000",
            textTransform: "none",
            width: "200px",
            height: "40px",
            fontSize: 15,
            marginTop: "15px",
            marginLeft: "15px",
            "&:hover": {
              backgroundColor: "#FFF",
              color: "#000",
              border: "3px solid black",
            },
          }}
        >
          Upload Picture
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 10,
              backgroundColor: "#000",
              textTransform: "none",
              width: "300px",
              height: "50px",
              fontSize: 15,
              marginTop: "15px",
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#000",
                border: "3px solid black",
              },
              margin: "auto",
              display: "block",
            }}
            onClick={handleClose}
          >
            Upload product
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

function DrawerComponent() {
  const [value, setValue] = React.useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const handleUploadClick = () => {
    setUploadModalOpen(true);
  };

  const handleUploadClose = () => {
    setUploadModalOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Drawer
        class="fixed"
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/products"
              >
                Products
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/orders"
              >
                Orders
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={handleUploadClick}
              >
                Upload
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <UploadModal open={uploadModalOpen} handleClose={handleUploadClose} />
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} size="large">
        <MenuIcon sx={{ color: "black", fontSize: "inherit" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
