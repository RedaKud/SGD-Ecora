import {
  ThemeProvider,
  Typography,
  createTheme,
  Container,
  Grid,
} from "@mui/material";
import HeaderPanel from "../components/headerPanel";
import AccountDetails from "../components/accountDetails";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function Account() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <style>{"body { background-color: #EAEAEA; }"}</style>
        <HeaderPanel></HeaderPanel>
        <AccountDetails></AccountDetails>
      </ThemeProvider>
    </Container>
  );
}

export default Account;
