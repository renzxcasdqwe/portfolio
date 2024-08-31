import { Box, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography paragraph>
        Passionate [Your Profession] with over [X] years of experience. I love
        to create and innovate.
      </Typography>
      <Button variant="outlined" href="/about">
        Learn More About Me
      </Button>
    </Box>
  );
};

export default About;
