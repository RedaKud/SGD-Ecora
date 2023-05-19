import {
  ThemeProvider,
  Typography,
  createTheme,
  Container,
  Grid,
} from "@mui/material";

import HeaderPanel from "../components/headerPanel";
import OrderCard from "../components/orderCard";
import OrderEmpty from "../components/orderEmpty";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function Orders() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <style>{"body { background-color: #EAEAEA; }"}</style>
        <HeaderPanel></HeaderPanel>
        <Typography
          sx={{
            marginTop: "30px",
            marginBottom: "35px",
            fontSize: "25px",
            fontWeight: 600,
          }}
        >
          Here is what you need to pick-up...
        </Typography>
        <Grid
          container
          direction="row"
          rowSpacing={4}
          columnSpacing={{ xs: 3, sm: 3, md: 5 }}
          alignItems="flex-start"
          sx={{
            padding: 5,
          }}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OrderCard></OrderCard>
          </Grid>
        </Grid>
        <OrderEmpty></OrderEmpty>
      </ThemeProvider>
    </Container>
  );
}

export default Orders;
