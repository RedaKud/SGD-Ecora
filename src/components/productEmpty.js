import { SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Taskiukai } from "../svgs/taskiukai.svg";

function ProductEmpty() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
        We are sorry...
      </Typography>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "30px" }}
      >
        There are no products to pick-up.
      </Typography>
      <SvgIcon
        sx={{
          width: "650px",
          height: "40px",
        }}
        component={Taskiukai}
        inheritViewBox
      />
      <Typography sx={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}>
        Have some food to share? Upload it{" "}
        <a href="#" style={{ color: "black" }}>
          here
        </a>
        .
      </Typography>
    </div>
  );
}

export default ProductEmpty;
