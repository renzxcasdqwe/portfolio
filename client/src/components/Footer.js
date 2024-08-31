import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px 0",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1" style={{ color: "black" }}>
        © {new Date().getFullYear()} My Portfolio
      </Typography>
    </footer>
  );
};

export default Footer;
