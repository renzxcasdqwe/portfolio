import { Box, Typography, Button } from "@mui/material";
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

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: black; }
`;

const Home = () => {
  return (
    // Main container for the Home component
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 128px)",
        padding: "0 20px",
        boxSizing: "border-box",
        backgroundImage: "url(/path-to-your-image.jpg)",
        backgroundSize: "cover",
        color: "#fff",
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
        Hi, I'm{" "}
        <span style={{ fontWeight: "bold", color: "#000" }}>renzxcasdqwe</span>
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          maxWidth: "70%",
          textAlign: "center",
          color: "black",
          fontFamily: "Courier, monospace",
          whiteSpace: "nowrap",
          overflow: "hidden",
          borderRight: "3px solid black",
          animation: `${typewriter} 3.5s steps(40, end), ${blink} .75s step-end infinite`,
        }}
      >
        I specialize in{" "}
        <span style={{ fontWeight: "bold", color: "#000" }}>
          Web Development
        </span>{" "}
        and love to build amazing applications.
      </Typography>
      <Button
        variant="text"
        size="large"
        href="#portfolio"
        style={{ color: "black" }}
      >
        View My Work
      </Button>
    </Box>
  );
};

export default Home;
