import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Deviling from "../assets/images/deviling.jpg";
import { keyframes } from "@mui/system";

// Keyframe animations
const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff;
  }
  100% {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff, 0 0 80px #ff00ff;
  }
`;

const About = () => {
  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
        paddingTop: "10em",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "Arial, sans-serif",
            animation: `${glow} 1.5s ease-in-out infinite alternate`,
            color: "#000", // Change to black or a color that contrasts with the background
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)", // Add a white shadow for better readability
          }}
        >
          <span style={{ fontWeight: "bold", color: "#000" }}>About Me</span>
        </Typography>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          style={{ color: "black", fontFamily: "Courier, monospace" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              paragraph
              sx={{
                color: "#000",
                fontFamily: "Courier, monospace",
                textAlign: "left",
              }}
            >
              I'm a passionate Web Developer with over [X] years of experience.
              I love creating innovative solutions and bringing ideas to life.
              My journey in web development has been fueled by my passion for
              learning and pushing the boundaries of what's possible.
            </Typography>
            <Typography
              paragraph
              sx={{
                color: "#000",
                fontFamily: "Courier, monospace",
                textAlign: "left",
              }}
            >
              I specialize in building full-stack web applications, and I have a
              solid understanding of front-end and back-end technologies. I
              enjoy working on challenging projects and collaborating with
              others to create something amazing.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.img
              src={Deviling}
              alt="Your Name"
              style={{
                width: "50%",
                borderRadius: "50%",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default About;
