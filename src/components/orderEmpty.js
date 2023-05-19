import { SvgIcon, Typography } from "@mui/material";

function OrderEmpty() {
  return (
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
          fontSize: { xs: "16px", md: "20px" },
          fontWeight: 600,
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        What more? You can always order {""}
        <a
          href="#"
          style={{
            color: "black",
          }}
        >
          here.
        </a>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "20px" },
          fontWeight: 600,
          marginBottom: 20,
        }}
      >
        Or don't forget to add products you can share with your community{" "}
        <a
          href="#"
          style={{
            color: "black",
          }}
        >
          here
        </a>
        .
      </Typography>
    </div>
  );
}

export default OrderEmpty;
