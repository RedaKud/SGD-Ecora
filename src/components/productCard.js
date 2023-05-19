import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Typography,
  Modal,
  Box,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTheme } from "@mui/material/styles";

function ProductCard() {
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStatusOpen = () => {
    setOpen(false);
    setOpenStatus(true);
  };

  const handleStatusClose = () => {
    setOpenStatus(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Card
        sx={{
          width: "251px",
          height: "313px",
          padding: "5px",
          borderRadius: 7,
        }}
      >
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid item>
            <CardMedia
              sx={{
                height: "190px",
                width: "190px",
              }}
              image="https://lactantia.ca/wp-content/uploads/2023/01/lactosefree.jpg"
              title="Milk"
            />
          </Grid>
          <Grid item>
            <CardContent
              sx={{
                width: "205px",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  textAlign: "left",
                  margin: "15px 0px 15px 5px",
                }}
              >
                Jake J., Kaunas
              </Typography>
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
                }}
                onClick={handleOpen}
              >
                Pick it up
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
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
                onClick={handleClose}
                sx={{
                  mt: 2,
                  margin: 0,
                }}
              ></SvgIcon>
            </div>
            <Grid container direction="column">
              <Grid item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Pienas "Sans Lactose Free"
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 400,
                    }}
                  >
                    Valid Until 2023-03-03
                  </Typography>
                  <CardMedia
                    sx={{
                      height: "210px",
                      width: "180px",
                      marginTop: "15px",
                      borderRadius: "15px",
                    }}
                    image="https://lactantia.ca/wp-content/uploads/2023/01/lactosefree.jpg"
                    title="Milk"
                  />
                  <Typography
                    id="modal-description"
                    sx={{ mt: 2, fontSize: "10px" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    fringilla semper nisi, non ultrices nunc commodo non.
                    Praesent quis justo eget velit ultrices suscipit. Sed in
                    augue et ante venenatis bibendum. Fusce ac urna eget diam
                    pretium dapibus.
                  </Typography>
                </div>
                <div>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Owner/ Address
                  </Typography>
                  <Typography id="modal-description" sx={{ fontSize: "10px" }}>
                    Jake J. 8612345677, Kaunas, Kauno g. 1
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: 10,
                      backgroundColor: "#000",
                      textTransform: "none",
                      width: "100%",
                      fontSize: 15,
                      marginTop: "15px",
                      marginBottom: "10px",
                      "&:hover": {
                        backgroundColor: "#FFF",
                        color: "#000",
                        border: "3px solid black",
                      },
                    }}
                    onClick={handleStatusOpen}
                  >
                    Pick it up
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 717,
              height: 420,
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
            <Grid container spacing={2}>
              <Grid item xs>
                <CardMedia
                  sx={{
                    height: "350px",
                    width: "281px",
                  }}
                  image="https://lactantia.ca/wp-content/uploads/2023/01/lactosefree.jpg"
                  title="Milk"
                />
              </Grid>
              <Grid item xs>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Pienas "Sans Lactose Free"
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: 400,
                    }}
                  >
                    Valid Until 2023-03-03
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Notes
                </Typography>
                <Typography
                  id="modal-description"
                  sx={{ mt: 2, fontSize: "15px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  fringilla semper nisi, non ultrices nunc commodo non. Praesent
                  quis justo eget velit ultrices suscipit. Sed in augue et ante
                  venenatis bibendum. Fusce ac urna eget diam pretium dapibus.
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Owner/ Address
                </Typography>
                <Typography
                  id="modal-description"
                  sx={{ mt: 2, fontSize: "15px" }}
                >
                  Jake J. 8612345677, Kaunas, Kauno g. 1
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "#000",
                    textTransform: "none",
                    width: "100%",
                    fontSize: 15,
                    marginTop: "15px",
                    "&:hover": {
                      backgroundColor: "#FFF",
                      color: "#000",
                      border: "3px solid black",
                    },
                  }}
                  onClick={handleStatusOpen}
                >
                  Pick it up
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Modal>
      <Modal
        open={openStatus}
        onClose={handleStatusClose}
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
              height: 200,
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
                onClick={handleStatusClose}
                sx={{
                  mt: 2,
                  margin: 0,
                }}
              ></SvgIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "60px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: 600,
                }}
              >
                The product is reserved!
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Please contact the owner for more details.
              </Typography>
            </div>
          </Box>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 717,
              height: 200,
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
                onClick={handleStatusClose}
                sx={{
                  mt: 2,
                  margin: 0,
                }}
              ></SvgIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "60px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 600,
                }}
              >
                The product is reserved!
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                Please contact the owner for more details.
              </Typography>
            </div>
          </Box>
        )}
      </Modal>
    </>
  );
}

export default ProductCard;
