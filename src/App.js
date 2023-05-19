import { ThemeProvider, createTheme } from "@mui/material";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/account" element={<Account />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
