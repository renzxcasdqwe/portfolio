import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar style={{ justifyContent: "flex-end" }}>
        {/* <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography> */}
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/portfolio">
          Portfolio
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
