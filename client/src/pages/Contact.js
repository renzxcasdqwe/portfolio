// In Contact.js
import { Box, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box component="form" sx={{ mt: 1 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
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
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default Contact;
