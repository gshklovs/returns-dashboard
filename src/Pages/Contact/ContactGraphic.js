import { Box } from "@mui/material";
import "./ContactGraphic.css";
import graphic from "./ContactGraphic.svg";

const ContactGraphic = () => {
    return (
        <Box className="contact-graphic">
            {/* make me an image object with the source "/Users/grisha/Documents/VSC/startupx/startupx_mui/src/Pages/Contact/undraw_contact_us_re_4qqt.svg" */}
            <img src={graphic} alt="contact us" className="contact-graphic-image" />
        </Box>
    );
}

export default ContactGraphic;