// split componenet will take a left and right child and split them evenly
import { styled } from "@mui/material";
import { Box } from "@mui/material";

const VerticalSlice = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flex: "1 1 50%",
  margin: "1vw 5vw",
});

const Split = ({ left, right }) => {
  return (
    <Box
      className="split-box"
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <VerticalSlice>{left}</VerticalSlice>
      <VerticalSlice>{right}</VerticalSlice>
    </Box>
  );
};

export default Split;
