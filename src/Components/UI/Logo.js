import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLogo = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 10em",
  height: "100vh",
  position: "relative",
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "ATYRE-logo-font",
  fontStyle: "regular",
  fontWeight: 400,
  fontSize: "6em",
  color: "#FFF",
  marginBottom: "1em",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.1em",

  transition: "transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
  
  "&:hover": {
    transform: "translateY(-25px)",
    textShadow: "0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)",
  },
}));

function Logo() {
  return (
    <StyledLogo>
      <LogoText sx={{ "&::first-letter": { color: "primary.main" } }}>
        OASIS
      </LogoText>
    </StyledLogo>
  );
}

export default Logo;