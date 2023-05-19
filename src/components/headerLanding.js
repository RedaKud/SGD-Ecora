import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Modal,
  Box,
  SvgIcon,
  Grid,
  CardMedia,
  FormControl,
  Input,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import LandingDrawerComponent from "./LandingDrawerComponent";
import { useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = ["Home", "About Us", "Download"];

function Login() {
  const [login, setLogin] = useState(false);
  const [signup, setSignUp] = useState(false);

  const handleOpenLogin = () => {
    setLogin(true);
  };

  const handleCloseLogin = () => {
    setLogin(false);
  };

  const handleOpenSignUp = () => {
    setSignUp(true);
  };

  const handleCloseSignUp = () => {
    setSignUp(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <IconButton onClick={handleOpenLogin} size="large">
          <AccountCircleIcon sx={{ color: "black", fontSize: "inherit" }} />
        </IconButton>
      ) : (
        <Button
          sx={{
            color: "#000",
            textTransform: "none",
            borderRadius: "20px",
            border: "3px solid black",
            fontWeight: 700,
            width: "145px",
          }}
          onClick={handleOpenLogin}
        >
          Login
        </Button>
      )}

      <Modal open={login} aria-labelledby="upload-modal-title">
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
              padding: "0px",
            }}
          >
            <SvgIcon
              component={CancelIcon}
              inheritViewBox
              onClick={handleCloseLogin}
              sx={{
                mt: 2,
                margin: 0,
                position: "absolute",
                top: 0,
                right: 0,
                color: "black",
              }}
            ></SvgIcon>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Welcome back!
            </Typography>
            <FormControl>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "6px",
                  marginLeft: "15px",
                }}
              >
                Email
              </Typography>
              <Input
                id="component-simple"
                placeholder=""
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "320px",
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
                Password
              </Typography>
              <Input
                id="component-simple"
                placeholder=""
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "320px",
                  marginLeft: "15px",
                }}
              />
            </FormControl>
            <Typography
              sx={{
                textDecoration: "underline",
                textAlign: "left",
                marginTop: "8px",
                marginLeft: "15px",
                fontSize: "14px",
              }}
            >
              <a href="#" style={{ color: "black" }}>
                Forgot password
              </a>
            </Typography>
            <Link to="/products">
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  backgroundColor: "#000",
                  textTransform: "none",
                  width: "89%",
                  fontSize: 15,
                  marginLeft: "15px",
                  "&:hover": {
                    backgroundColor: "#FFF",
                    color: "#000",
                    border: "3px solid black",
                  },
                  marginTop: "20px",
                }}
              >
                Login
              </Button>
            </Link>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: "15px",
                fontSize: "15px",
                marginBottom: "30px",
              }}
            >
              Don't have an account? Register account{" "}
              <a
                onClick={() => {
                  handleCloseLogin();
                  handleOpenSignUp();
                }}
                style={{
                  textDecoration: "underline",
                  color: "black",
                }}
              >
                here
              </a>
              .
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1086,
              height: 535,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              backgroundColor: "#EAEAEA",
              padding: "0px",
            }}
          >
            <Grid
              container
              direction={"row"}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={6}
                sx={{
                  paddingLeft: "40px",
                  paddingRight: "55px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "32px",
                    marginBottom: "20px",
                  }}
                >
                  Welcome back!
                </Typography>
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
                    placeholder=""
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      width: "447px",
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
                    Password
                  </Typography>
                  <Input
                    id="component-simple"
                    placeholder=""
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      width: "447px",
                    }}
                  />
                </FormControl>
                <Grid container direction={"row"}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember my details"
                      sx={{
                        typography: "8px",
                        "& .MuiSvgIcon-root": {
                          color: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        textDecoration: "underline",
                        textAlign: "right",
                        marginTop: "8px",
                      }}
                    >
                      <a href="#" style={{ color: "black" }}>
                        Forgot password
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
                <Link to="/products">
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "#000",
                      textTransform: "none",
                      width: "100%",
                      fontSize: 15,
                      "&:hover": {
                        backgroundColor: "#FFF",
                        color: "#000",
                        border: "3px solid black",
                      },
                      marginTop: "20px",
                    }}
                  >
                    Login
                  </Button>
                </Link>

                <Typography
                  sx={{
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Don't have an account? Register account{" "}
                  <a
                    onClick={() => {
                      handleCloseLogin();
                      handleOpenSignUp();
                    }}
                    style={{
                      textDecoration: "underline",
                      color: "black",
                    }}
                  >
                    here
                  </a>
                  .
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  alignSelf: "flex-end",
                  position: "relative",
                }}
              >
                <SvgIcon
                  component={CancelIcon}
                  inheritViewBox
                  onClick={handleCloseLogin}
                  sx={{
                    mt: 2,
                    margin: 0,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                  }}
                ></SvgIcon>
                <CardMedia
                  sx={{
                    height: "535px",
                    width: "555px",
                  }}
                  image="https://img.delicious.com.au/DF0Hnr7G/w759-h506-cfill/del/2022/10/p69-parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-and-cabbage-slaw-176385-1.png"
                ></CardMedia>
              </Grid>
            </Grid>
          </Box>
        )}
      </Modal>
      {/*Signup modals */}
      <Modal open={signup} aria-labelledby="upload-modal-title">
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
              padding: "0px",
            }}
          >
            <SvgIcon
              component={CancelIcon}
              inheritViewBox
              onClick={handleCloseSignUp}
              sx={{
                mt: 2,
                margin: 0,
                position: "absolute",
                top: 0,
                right: 0,
                color: "black",
              }}
            ></SvgIcon>
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Sign Up
            </Typography>
            <FormControl>
              <Typography
                sx={{
                  fontSize: "14px",
                  marginBottom: "6px",
                  marginLeft: "15px",
                }}
              >
                First Name
              </Typography>
              <Input
                id="component-simple"
                placeholder=""
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "320px",
                  marginBottom: "15px",
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
                Last Name
              </Typography>
              <Input
                id="component-simple"
                placeholder=""
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "320px",
                  marginBottom: "15px",
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
                Email
              </Typography>
              <Input
                id="component-simple"
                placeholder=""
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "320px",
                  marginBottom: "15px",
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
                Password
              </Typography>
              <Input
                id="component-simple"
                placeholder=""
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  width: "320px",
                  marginBottom: "20px",
                  marginLeft: "15px",
                }}
              />
            </FormControl>
            <Button
              variant="contained"
              sx={{
                borderRadius: 10,
                backgroundColor: "#000",
                textTransform: "none",
                width: "89%",
                fontSize: 15,
                marginLeft: "15px",
                "&:hover": {
                  backgroundColor: "#FFF",
                  color: "#000",
                  border: "3px solid black",
                },
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              Register Account
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 1086,
              height: 535,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              backgroundColor: "#EAEAEA",
              padding: "0px",
            }}
          >
            <Grid
              container
              direction={"row"}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={6}
                sx={{
                  paddingLeft: "40px",
                  paddingRight: "55px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "32px",
                    marginBottom: "20px",
                  }}
                >
                  Sign Up
                </Typography>
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
                      border: "1px solid black",
                      width: "447px",
                      marginBottom: "15px",
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
                    Last Name
                  </Typography>
                  <Input
                    id="component-simple"
                    placeholder=""
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      width: "447px",
                      marginBottom: "15px",
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
                    placeholder=""
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      width: "447px",
                      marginBottom: "15px",
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
                    Password
                  </Typography>
                  <Input
                    id="component-simple"
                    placeholder=""
                    sx={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      width: "447px",
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
                    width: "100%",
                    fontSize: 15,
                    "&:hover": {
                      backgroundColor: "#FFF",
                      color: "#000",
                      border: "3px solid black",
                    },
                    marginTop: "20px",
                  }}
                >
                  Register Account
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  alignSelf: "flex-end",
                  position: "relative",
                }}
              >
                <SvgIcon
                  component={CancelIcon}
                  inheritViewBox
                  onClick={handleCloseSignUp}
                  sx={{
                    mt: 2,
                    margin: 0,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                  }}
                ></SvgIcon>
                <CardMedia
                  sx={{
                    height: "535px",
                    width: "555px",
                  }}
                  image="https://img.delicious.com.au/DF0Hnr7G/w759-h506-cfill/del/2022/10/p69-parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-and-cabbage-slaw-176385-1.png"
                ></CardMedia>
              </Grid>
            </Grid>
          </Box>
        )}
      </Modal>
    </>
  );
}

function HeaderLanding() {
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
          <div>
            <Login></Login>
            <LandingDrawerComponent
              style={{
                alignSelf: "flex-end",
              }}
            ></LandingDrawerComponent>
          </div>
        ) : (
          <div>
            {pages.map((buttonText, index) => (
              <Button
                key={index}
                sx={{
                  color: "#000",
                  textTransform: "none",
                  justifyContent: "flex-end",
                  marginRight: buttonText === "Upload" ? "100px" : "45px",
                }}
              >
                {buttonText}
              </Button>
            ))}
            <Login></Login>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default HeaderLanding;
