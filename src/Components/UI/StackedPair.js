import { Box, Typography } from "@mui/material";
import "./StackedPair.css";

function StackedPair(props) {
  return (
    <Box className="stacked-pair">
      <Box className="stacked-pair-top">
        <Typography>{props.top}</Typography>
      </Box>
      <Box className="stacked-pair-bottom">
        <Typography>{props.bottom}</Typography>
      </Box>
    </Box>
  );
}

export default StackedPair;
