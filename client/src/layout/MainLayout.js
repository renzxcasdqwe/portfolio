import React from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import BackgroundAnimation from "../components/BackgroundAnimation";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <BackgroundAnimation />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Header />
        <Box component="main" sx={{ flexGrow: 1, color: "#fff", padding: 3 }}>
          {children}
        </Box>
        {/* <Footer /> */}
      </Box>
    </Box>
  );
};

export default MainLayout;
