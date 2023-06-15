// create a component that takes a string and wraps it in mui box and mui typography
import { Box, Typography } from "@mui/material";

function TextBox(props) {
    return (
        <Box className={"text-box " + props.className}>
            <Typography variant={props.variant}>{props.text}</Typography>
        </Box>
    );
}

export default TextBox;