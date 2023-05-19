import {
  ThemeProvider,
  Typography,
  createTheme,
  Container,
  Grid,
  Box,
} from "@mui/material";
import ProductCard from "../components/productCard";
import HeaderPanel from "../components/headerPanel";
import AccountDetails from "../components/accountDetails";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function Products() {
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
          Take what you want...
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
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}

export default Products;
