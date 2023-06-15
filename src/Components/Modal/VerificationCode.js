import { Box, Typography } from "@mui/material";
import TextBox from "../UI/TextBox";
import "./VerificationCode.css"

function VerificationCode (props) {
    return (
        <Box className="verification-code">
            <Typography variant="h6">Verification Code: </Typography>
            <Box className="verification-code-container">
                {/* split props .code into 4 characters and make an individul TextBox element containnig each char */}
                {props.code.split("").map((char, index) => {
                    return <TextBox className="verificiation-code-character" key={index} text={char} variant="h2" />;
                })}
            </Box>
            <Typography variant="body2">*Only hand-off the order once the driver confirms the verification code</Typography>
        </Box>
    );
}

export default VerificationCode;