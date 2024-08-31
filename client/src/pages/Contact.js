import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
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

const Contact = () => {
  return (
    <Box
      sx={{
        padding: 4,
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
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
          <span style={{ fontWeight: "bold", color: "#000" }}>Contact</span>
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <TextField required fullWidth label="Name" margin="normal" />
          <TextField
            required
            fullWidth
            label="Email"
            margin="normal"
            type="email"
          />
          <TextField
            required
            fullWidth
            label="Message"
            margin="normal"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, backgroundColor: "#ff00ff" }}
          >
            Send Message
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
