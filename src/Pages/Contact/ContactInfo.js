import { Box, Typography } from "@mui/material";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <Box className="contact-info-stack">
      <Box className="contact-info-stack-item">
        <Box className="contact-info-stack-item-left">
          <Typography variant="h6" color="white">
            Phone:
          </Typography>
        </Box>
        <Box className="contact-info-stack-item-right">
          <Typography variant="h6" color="white">
            123-456-7890
          </Typography>
        </Box>
      </Box>
      <Box className="contact-info-stack-item">
        <Box className="contact-info-stack-item-left">
          <Typography variant="h6" color="white">
            Email:
          </Typography>
        </Box>
        <Box className="contact-info-stack-item-right">
          <Typography variant="h6" color="white">
            startupx@swag.net
          </Typography>
        </Box>
      </Box>
      <Box className="contact-info-stack-item">
        <Box className="contact-info-stack-item-left">
          <Typography variant="h6" color="white">
            Address:
          </Typography>
        </Box>
        <Box className="contact-info-stack-item-right">
          <Typography variant="h6" color="white">
            1914 Park Blvd, Palo Alto, CA 94306
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactInfo;