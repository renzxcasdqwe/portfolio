import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Keeps the dark theme which uses dark colors for components
    background: {
      default: "#000000", // Sets the default background to black
      paper: "#424242", // Optional: sets surfaces of components like Card, Paper to a dark gray
    },
    primary: {
      main: "#ffffff", // Keeps white as the primary color for contrast against the dark background
    },
    text: {
      primary: "#ffffff", // Ensures that the primary text color is white
      secondary: "#b0bec5", // Optional: set a secondary text color if needed
    },
  },
});

export default theme;
