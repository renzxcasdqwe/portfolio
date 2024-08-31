import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        background: "transparent",
        boxShadow: "none",
        padding: "20px 0", // Add some padding for spacing
        zIndex: 10, // Ensure it stays above other elements
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center", // Center the navigation links
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "30px", // Space between the links
          }}
        >
          <Button color="inherit">
            <Link
              to="home"
              smooth={true}
              duration={500}
              style={{
                color: "#fff", // White color for the links
                fontSize: "1.1rem",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="about"
              smooth={true}
              duration={500}
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="project"
              smooth={true}
              duration={500}
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              Project
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              style={{
                color: "#fff",
                fontSize: "1.1rem",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                cursor: "pointer",
              }}
            >
              Contact
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
