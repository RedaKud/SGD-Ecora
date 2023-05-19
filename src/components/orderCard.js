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
  Snackbar,
  Alert,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function OrderCard() {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenAlert = () => {
    setAlert(true);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product reservation removed.
        </Alert>
      </Snackbar>
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
                  fontSize: "14px",
                  margin: "15px 0px 15px 5px",
                }}
              >
                Jake J., Kaunas,{" "}
                <span
                  style={{
                    fontWeight: 400,
                  }}
                >
                  861234567
                </span>
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
                Cancel
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
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 717,
            height: 220,
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
                fontWeight: 600,
                fontSize: "24px",
                paddingBottom: "20px",
              }}
            >
              Do you really want to cancel reservation?
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: 10,
                backgroundColor: "#000",
                textTransform: "none",
                width: "50%",
                fontSize: 15,
                marginTop: "15px",
                "&:hover": {
                  backgroundColor: "#FFF",
                  color: "#000",
                  border: "3px solid black",
                },
              }}
              onClick={() => {
                handleClose();
                handleOpenAlert();
              }}
            >
              Cancel it
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default OrderCard;
