import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import BackgroundAnimation from "../components/BackgroundAnimation";

const MainLayout = ({ children }) => {
  return (
    <>
      <BackgroundAnimation />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "transparent",
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            color: "#fff",
            padding: 3,
          }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
