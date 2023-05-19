import {
  Grid,
  Typography,
  FormControl,
  Input,
  Button,
  Box,
  Modal,
  SvgIcon,
  Snackbar,
  Alert,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTheme } from "@mui/material/styles";

function AccountDetails() {
  const [open, setopen] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleOpenPassword = () => {
    setopen(true);
  };

  const handleClosePassword = () => {
    setopen(false);
  };

  const handleOpenAlert = () => {
    setAlert(true);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        padding: { xs: 0, md: "50px" },
      }}
    >
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Account details updated!
        </Alert>
      </Snackbar>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "600",
          paddingBottom: "30px",
        }}
      >
        Account
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <FormControl>
            <Typography
              sx={{
                fontSize: "14px",
                marginBottom: "6px",
              }}
            >
              First Name
            </Typography>
            <Input
              id="component-simple"
              placeholder=""
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  border: "1px solid black",
                },
                width: { xs: "300px", md: "447px" },
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
              Email
            </Typography>
            <Input
              id="component-simple"
              value="  email@gmail.com"
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  border: "1px solid black",
                },
                width: { xs: "300px", md: "447px" },
              }}
              disabled
            />
            <Typography
              sx={{
                fontSize: "12px",
                marginLeft: { xs: "7px", md: "15px" },
              }}
            >
              Email is not editable.
            </Typography>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              borderRadius: 10,
              backgroundColor: "#000",
              textTransform: "none",
              width: { xs: "300px", md: "447px" },
              fontSize: 15,
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#000",
                border: "3px solid black",
              },
              marginTop: { xs: "30px", md: "50px" },
            }}
            onClick={handleOpenPassword}
          >
            Change Password
          </Button>
        </Grid>
        <Modal
          open={open}
          onClose={handleClosePassword}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          {isMobile ? (
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
                  onClick={handleClosePassword}
                  sx={{
                    mt: 2,
                    margin: 0,
                  }}
                ></SvgIcon>
              </div>
              <Typography
                sx={{
                  fontSize: "23px",
                  fontWeight: 600,
                  marginTop: "20px",
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                Change Password
              </Typography>
              <FormControl>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginBottom: "6px",
                    marginLeft: "10px",
                  }}
                >
                  Old Password
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
                    marginLeft: "10px",
                  }}
                />
              </FormControl>
              <FormControl>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginBottom: "6px",
                    marginLeft: "10px",
                  }}
                >
                  New Password
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
                    marginLeft: "10px",
                  }}
                />
              </FormControl>
              <FormControl>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginBottom: "6px",
                    marginLeft: "10px",
                  }}
                >
                  Confirm Password
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
                    marginLeft: "10px",
                  }}
                />
              </FormControl>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  backgroundColor: "#000",
                  textTransform: "none",
                  width: "350px",
                  fontSize: 15,
                  "&:hover": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    border: "3px solid black",
                  },
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
                onClick={handleClosePassword}
              >
                Change Password
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 570,
                height: 441,
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
                  onClick={handleClosePassword}
                  sx={{
                    mt: 2,
                    margin: 0,
                  }}
                ></SvgIcon>
              </div>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 600,
                  marginLeft: "50px",
                  marginTop: "35px",
                  marginBottom: "20px",
                }}
              >
                Change Password
              </Typography>
              <FormControl>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginBottom: "6px",
                    marginLeft: "50px",
                  }}
                >
                  Old Password
                </Typography>
                <Input
                  id="component-simple"
                  placeholder=""
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      border: "1px solid black",
                    },
                    width: "447px",
                    marginBottom: "20px",
                    marginLeft: "50px",
                  }}
                />
              </FormControl>
              <FormControl>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginBottom: "6px",
                    marginLeft: "50px",
                  }}
                >
                  New Password
                </Typography>
                <Input
                  id="component-simple"
                  placeholder=""
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      border: "1px solid black",
                    },
                    width: "447px",
                    marginBottom: "20px",
                    marginLeft: "50px",
                  }}
                />
              </FormControl>
              <FormControl>
                <Typography
                  sx={{
                    fontSize: "12px",
                    marginBottom: "6px",
                    marginLeft: "50px",
                  }}
                >
                  Confirm Password
                </Typography>
                <Input
                  id="component-simple"
                  placeholder=""
                  sx={{
                    backgroundColor: "white",
                    "&:hover": {
                      border: "1px solid black",
                    },
                    width: "447px",
                    marginBottom: "20px",
                    marginLeft: "50px",
                  }}
                />
              </FormControl>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  backgroundColor: "#000",
                  textTransform: "none",
                  width: "447px",
                  fontSize: 15,
                  "&:hover": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    border: "3px solid black",
                  },
                  marginTop: "20px",
                  marginLeft: "50px",
                }}
                onClick={handleClosePassword}
              >
                Change Password
              </Button>
            </Box>
          )}
        </Modal>
        <Grid item xs>
          <FormControl>
            <Typography
              sx={{
                fontSize: "14px",
                marginBottom: "6px",
              }}
            >
              Last Name
            </Typography>
            <Input
              id="component-simple"
              placeholder=""
              sx={{
                backgroundColor: "white",
                "&:hover": {
                  border: "1px solid black",
                },
                width: { xs: "300px", md: "447px" },
                marginBottom: "20px",
              }}
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              borderRadius: 10,
              backgroundColor: "#000",
              textTransform: "none",
              width: { xs: "300px", md: "447px" },
              fontSize: 15,
              "&:hover": {
                backgroundColor: "#FFF",
                color: "#000",
                border: "3px solid black",
              },
              marginTop: "20px",
            }}
            onClick={handleOpenAlert}
          >
            Change Details
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountDetails;
