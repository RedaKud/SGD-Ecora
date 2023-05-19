import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Modal,
  Box,
  SvgIcon,
  Grid,
  FormControl,
  InputLabel,
  Input,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import DrawerComponent from "./DrawerComponent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = ["Products", "My Orders", "Upload"];
const account = ["Account Details", "Sign Out"];

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
          width: 929,
          height: 450,
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
            marginLeft: "20px",
            marginBottom: "25px",
            fontWeight: 600,
          }}
        >
          Upload Products
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            xs
            sx={{
              marginLeft: "35px",
            }}
          >
            <FormControl>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "6px",
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
                  width: "377px",
                  marginBottom: "20px",
                }}
              />
            </FormControl>
            <FormControl>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "6px",
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
                  width: "377px",
                  marginBottom: "20px",
                }}
              />
            </FormControl>
            <Typography
              sx={{
                fontSize: "14px",
                marginBottom: "6px",
              }}
            >
              Expiration Date
            </Typography>
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
                  width: "377px",
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs>
            <Button
              variant="contained"
              component="label"
              sx={{
                borderRadius: 10,
                backgroundColor: "#000",
                textTransform: "none",
                width: "185px",
                height: "40px",
                fontSize: 15,
                marginTop: "15px",
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
          </Grid>
        </Grid>
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
              width: "30%",
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

function HeaderPanel() {
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#EAEAEA",
        boxShadow: "none",
      }}
    >
      <Toolbar disableGutters>
        <div style={{ flexGrow: 1 }}>
          <Typography
            sx={{
              fontSize: { md: "40px", xs: "30px" },
              fontWeight: 800,
              color: "black",
            }}
          >
            ECORA
          </Typography>
        </div>
        {isMobile ? (
          <>
            <IconButton onClick={handleClick} size="large">
              <AccountCircleIcon sx={{ color: "black", fontSize: "inherit" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link
                to="/account"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Account Details</MenuItem>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
              </Link>
            </Menu>
            <DrawerComponent
              style={{
                alignSelf: "flex-end",
              }}
            ></DrawerComponent>
          </>
        ) : (
          <div>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "#000",
                  textTransform: "none",
                  justifyContent: "flex-end",
                  marginRight: "45px",
                }}
              >
                {"Products"}
              </Button>
            </Link>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  color: "#000",
                  textTransform: "none",
                  justifyContent: "flex-end",
                  marginRight: "45px",
                }}
              >
                {"My Orders"}
              </Button>
            </Link>
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                justifyContent: "flex-end",
                marginRight: "100px",
              }}
              onClick={handleUploadClick}
            >
              {"Upload"}
            </Button>
            <Button
              sx={{
                color: "#000",
                textTransform: "none",
                borderRadius: "20px",
                border: "3px solid black",
                fontWeight: 700,
                width: "145px",
              }}
              onClick={handleClick}
            >
              Account
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link
                to="/account"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClose}>Account Details</MenuItem>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
              </Link>
            </Menu>
          </div>
        )}
      </Toolbar>
      <UploadModal open={uploadModalOpen} handleClose={handleUploadClose} />
    </AppBar>
  );
}

export default HeaderPanel;
