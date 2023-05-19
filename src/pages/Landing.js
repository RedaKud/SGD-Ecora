import {
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  SvgIcon,
  Button,
  useMediaQuery,
} from "@mui/material";
import HeaderLanding from "../components/headerLanding";
import { ReactComponent as MainImage } from "../svgs/landing.svg";
import { ReactComponent as AboutUs } from "../svgs/aboutus1.svg";
import { ReactComponent as Waste } from "../svgs/waste.svg";
import { ReactComponent as People } from "../svgs/People.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
function Landing() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      sx={{
        padding: { xs: 0 },
      }}
    >
      <ThemeProvider theme={theme}>
        <style>{"body { background-color: #EAEAEA; }"}</style>
        <HeaderLanding></HeaderLanding>
        {isMobile ? (
          <>
            <div>
              <Typography
                sx={{
                  fontSize: "45px",
                  fontWeight: 800,
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
              >
                Give Back to Your
              </Typography>
              <Typography
                sx={{
                  fontSize: "45px",
                  fontWeight: 800,
                  marginLeft: "10px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#C5F277",
                    padding: "8px",
                    borderRadius: "20px",
                  }}
                >
                  Community
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#444444",
                  width: "300px",
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
              >
                Share food, produce, or anything else with the people around
                you.
              </Typography>
              <Grid
                container
                direction="row"
                sx={{
                  paddingTop: "40px",
                }}
              >
                <Grid item xs={6}>
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      borderRadius: "30px",
                      border: "3px solid black",
                      fontWeight: 700,
                      width: "150px",
                      height: "45px",
                      fontSize: "15px",
                      marginLeft: "10px",
                    }}
                  >
                    Download App
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Link
                    to="/products"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      startIcon={<ShoppingCartOutlinedIcon />}
                      sx={{
                        textTransform: "none",
                        borderRadius: "20px",
                        color: "#000",
                        fontWeight: 700,
                        width: "190px",
                        height: "50px",
                        fontSize: "17px",
                      }}
                    >
                      Use Online
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <SvgIcon
                sx={{
                  height: "400px",
                  width: "400px",
                }}
                inheritViewBox
                component={MainImage}
              ></SvgIcon>
              <Button
                startIcon={<ExpandMoreOutlinedIcon />}
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  color: "#000",
                  fontWeight: 600,
                  height: "50px",
                  fontSize: "15px",
                }}
              >
                Scroll down to learn more
              </Button>
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: 800,
                  width: "363px",
                  marginTop: "50px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#C5F277",
                    padding: "8px",
                    borderRadius: "20px",
                  }}
                >
                  About
                </span>
                Us
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop: "30px",
                }}
              >
                Did you know?
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  marginTop: "20px",
                  marginLeft: "20px",
                  color: "#444444",
                  width: "300px",
                }}
              >
                Over a third of all food produced (~2.5 billion tons) is lost or
                wasted each year.
              </Typography>
              <SvgIcon
                sx={{
                  height: "300px",
                  width: "360px",
                }}
                inheritViewBox
                component={Waste}
              ></SvgIcon>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginRight: "20px",
                }}
                align="right"
              >
                What is{" "}
                <span
                  style={{
                    backgroundColor: "#C5F277",
                    padding: "8px",
                    borderRadius: "20px",
                  }}
                >
                  Ecora?
                </span>
              </Typography>

              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  marginTop: "20px",
                  marginLeft: "20px",
                  color: "#444444",
                  marginRight: "25px",
                }}
                align="right"
              >
                Ecora's main goal is to reduce food waste by connecting people
                who have exttra food with hose who need it.
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  marginTop: "20px",
                  marginLeft: "20px",
                  color: "#444444",
                  marginRight: "25px",
                }}
                align="right"
              >
                We are here to help people navigate the platform, find the food
                they need, and connect wih others who share their values.
                Whether you're looking to donae food, find food for your family,
                or just learn more about how you can help reduce food waste.
              </Typography>
              <SvgIcon
                sx={{
                  height: "300px",
                  width: "360px",
                }}
                inheritViewBox
                component={People}
              ></SvgIcon>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 800,
                  backgroundColor: "#C5F277",
                  padding: "5px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  borderRadius: "20px",
                }}
                align="center"
              >
                Intrested?
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#444444",
                }}
                align="center"
              >
                {" "}
                Download the app now or try it online.
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                sx={{ paddingTop: "5px", paddingLeft: "20px" }}
              >
                <Grid item xs={6}>
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      borderRadius: "30px",
                      border: "3px solid black",
                      fontWeight: 700,
                      width: "140px",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    Android
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      borderRadius: "30px",
                      border: "3px solid black",
                      fontWeight: 700,
                      width: "140px",
                      height: "40px",
                      fontSize: "18px",
                    }}
                  >
                    iOS{" "}
                  </Button>
                </Grid>
              </Grid>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Link
                  to="/products"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "30px",
                      color: "#686868",
                      fontWeight: 700,
                      width: "190px",
                      height: "50px",
                      fontSize: "20px",
                      marginBottom: "50px",
                    }}
                  >
                    Try Out Online
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Grid container direction="row">
              <Grid
                item
                xs={5}
                sx={{
                  marginTop: "20%",
                  padding: "2%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: 800,
                  }}
                  align="right"
                >
                  Give Back to Your
                </Typography>
                <Typography
                  sx={{
                    fontSize: "50px",
                    fontWeight: 800,
                  }}
                  align="right"
                >
                  <span
                    style={{
                      backgroundColor: "#C5F277",
                      padding: "8px",
                      borderRadius: "20px",
                    }}
                  >
                    Community
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 600,
                    color: "#444444",
                    width: "363px",
                    marginTop: "20px",
                  }}
                >
                  Share food, produce, or anything else with the people around
                  you.
                </Typography>
                <Grid
                  container
                  direction="row"
                  sx={{
                    paddingTop: "40px",
                  }}
                >
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        color: "#000",
                        textTransform: "none",
                        borderRadius: "30px",
                        border: "3px solid black",
                        fontWeight: 700,
                        width: "190px",
                        height: "50px",
                        fontSize: "20px",
                      }}
                    >
                      Download App
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Link
                      to="/products"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Button
                        startIcon={<ShoppingCartOutlinedIcon />}
                        sx={{
                          textTransform: "none",
                          borderRadius: "20px",
                          color: "#000",
                          fontWeight: 700,
                          width: "190px",
                          height: "50px",
                          fontSize: "20px",
                        }}
                      >
                        Use Online
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  startIcon={<ExpandMoreOutlinedIcon />}
                  sx={{
                    textTransform: "none",
                    borderRadius: "20px",
                    color: "#000",
                    fontWeight: 600,
                    height: "50px",
                    fontSize: "20px",
                    marginTop: "110px",
                  }}
                >
                  Scroll down to learn more
                </Button>
              </Grid>
              <Grid item xs={7}>
                <SvgIcon
                  sx={{
                    height: "120%",
                    width: "120%",
                  }}
                  inheritViewBox
                  component={MainImage}
                ></SvgIcon>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item xs={6}>
                <Grid container direction="column">
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: "45px",
                        fontWeight: 800,
                        width: "363px",
                        marginTop: "110px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#C5F277",
                          padding: "8px",
                          borderRadius: "20px",
                        }}
                      >
                        About
                      </span>
                      Us
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: 700,
                        marginTop: "40px",
                      }}
                    >
                      Did you know?
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: 400,
                        marginTop: "20px",
                        marginLeft: "20px",
                        color: "#444444",
                      }}
                    >
                      Over a third of all food produced (~2.5 billion tons) is
                      lost or wasted each year.
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: 700,
                        marginTop: "130px",
                      }}
                    >
                      What is{" "}
                      <span
                        style={{
                          backgroundColor: "#C5F277",
                          padding: "8px",
                          borderRadius: "20px",
                        }}
                      >
                        Ecora?
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: 400,
                        marginTop: "40px",
                        marginLeft: "20px",
                        color: "#444444",
                      }}
                    >
                      Ecora's main goal is to reduce food waste by connecting
                      people who have exttra food with hose who need it.
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: 400,
                        marginTop: "40px",
                        marginLeft: "20px",
                        color: "#444444",
                      }}
                    >
                      We are here to help people navigate the platform, find the
                      food they need, and connect wih others who share their
                      values. Whether you're looking to donae food, find food
                      for your family, or just learn more about how you can help
                      reduce food waste.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <SvgIcon
                  sx={{
                    height: "120%",
                    width: "120%",
                  }}
                  inheritViewBox
                  component={AboutUs}
                ></SvgIcon>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid>
                <Typography
                  sx={{
                    fontSize: "45px",
                    fontWeight: 800,
                    marginTop: "70px",
                    backgroundColor: "#C5F277",
                    padding: "5px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    borderRadius: "20px",
                  }}
                >
                  Intrested?
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: 600,
                    marginTop: "20px",
                    marginBottom: "20px",
                    color: "#444444",
                  }}
                >
                  {" "}
                  Download the app now or try it online.
                </Typography>
              </Grid>
              <Grid>
                <Grid
                  container
                  direction="row"
                  sx={{
                    paddingTop: "20px",
                  }}
                >
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        color: "#000",
                        textTransform: "none",
                        borderRadius: "30px",
                        border: "3px solid black",
                        fontWeight: 700,
                        width: "190px",
                        height: "50px",
                        fontSize: "20px",
                        marginRight: "20px",
                      }}
                    >
                      Android
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        color: "#000",
                        textTransform: "none",
                        borderRadius: "30px",
                        border: "3px solid black",
                        fontWeight: 700,
                        width: "190px",
                        height: "50px",
                        fontSize: "20px",
                        marginLeft: "20px",
                      }}
                    >
                      iOS{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid>
                <Link
                  to="/products"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      borderRadius: "30px",
                      color: "#686868",
                      fontWeight: 700,
                      width: "190px",
                      height: "50px",
                      fontSize: "20px",
                      marginTop: "30px",
                      marginBottom: "50px",
                    }}
                  >
                    Try Out Online
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </>
        )}
      </ThemeProvider>
    </Container>
  );
}

export default Landing;
