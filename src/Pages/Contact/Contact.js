import { ContactForm } from "./ContactForm";
import { Box, Typography, Paper } from "@mui/material";

import Header from "../../Components/UI/Header";
import ContactInfo from "./ContactInfo";
import ContactGraphic from "./ContactGraphic";
import "./Contact.css";


const Contact = () => {
  return (
    <Box className="contact-page">
      <Header />
      <Box className="contact-background">
        <Box className="contact-span">
          <Paper className="contact-form-container" elevation={3}>
            <ContactForm />
            <ContactGraphic />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
