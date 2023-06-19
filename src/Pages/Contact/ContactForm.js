import { Box, Button, TextField, Typography } from "@mui/material";
import "./ContactForm.css";

export function ContactForm() {
  return (
    <form className="contact-form">
      <Typography variant="h4" className="contact-form-text">
        Send Your Message
      </Typography>
      <Typography variant="h6" color="grey" className="contact-form-text">
        We are here to help!
      </Typography>
      <Box className="contact-form-element">
        <TextField
          label="Name"
          variant="outlined"
          color="secondary"
          fullWidth
        />
      </Box>
      <Box className="contact-form-element">
        <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          fullWidth
        />
      </Box>
      <Box className="contact-form-message">
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          color="secondary"
          multiline
          rows={4}
        />
      </Box>
      <Box className="contact-form-button">
        <Button variant="contained" color="primary" fullWidth type="submit">
          Send
        </Button>
      </Box>
    </form>
  );
}
