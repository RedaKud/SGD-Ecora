import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function LandingDrawerComponent() {
  const [openLandingDrawer, setOpenLandingDrawer] = useState(false);
  return (
    <>
      <Drawer
        class="fixed"
        anchor="right"
        open={openLandingDrawer}
        onClose={() => setOpenLandingDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenLandingDrawer(false)}>
            <ListItemText>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenLandingDrawer(false)}>
            <ListItemText>
              <Link style={{ textDecoration: "none", color: "black" }}>
                About Us
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenLandingDrawer(false)}>
            <ListItemText>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Download
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenLandingDrawer(!openLandingDrawer)}
        size="large"
      >
        <MenuIcon sx={{ color: "black", fontSize: "inherit" }} />
      </IconButton>
    </>
  );
}
export default LandingDrawerComponent;
