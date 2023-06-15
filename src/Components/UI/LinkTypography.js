import { Typography as MuiTypography } from "@mui/material";
import { styled } from "@mui/material";


const Typography = styled(MuiTypography)({
  textAlign: "center",
});

const LinkTypography = styled(MuiTypography)({
  position: "relative",
  textAlign: "flex-start",
  color: "#0158A0",
  margin: ".5em",
  textDecoration: "none",

  "&:hover": {
    cursor: "pointer",
  },

  "&::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: "0",
    left: "0",
    backgroundColor: "#0158A0",
    transformOrigin: "center",
    transition: "transform 0.25s ease-out",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "center",
  },
});

export { Typography, LinkTypography };