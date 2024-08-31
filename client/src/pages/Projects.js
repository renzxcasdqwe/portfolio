import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ButtonBase,
} from "@mui/material";
import { motion } from "framer-motion";
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

const projects = [
  {
    id: 1,
    title: "Hoarding Life RPG",
    description: "Web game that allows you to gather items.",
    imageUrl: require("../assets/images/hoarding.png"),
    link: "https://www.hoardingliferpg.com/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A description of Project 2.",
    imageUrl: "/path-to-image2.jpg",
    link: "https://www.example.com/project2",
  },
];

const Portfolio = () => {
  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
      }}
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
        <span style={{ fontWeight: "bold", color: "#000" }}>Projects</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: project.id * 0.2,
              }}
            >
              <ButtonBase
                href={project.link}
                target="_blank"
                sx={{ width: "100%", textAlign: "inherit", display: "block" }}
              >
                <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.imageUrl}
                    alt={project.title}
                  />
                  <CardContent
                    sx={{
                      backgroundColor: "transparent", // Transparent background
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#fff", fontWeight: "bold" }} // White text color
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.7)" }} // Semi-transparent text color
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
