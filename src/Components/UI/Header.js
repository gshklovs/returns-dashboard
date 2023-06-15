import { Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css";
// create a styled header component that uses the theme secondary background color

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const HeaderLink = styled(Typography)(({ theme }) => ({
  position: "relative",
  color: "white",
  textDecoration: "none",
  fontSize: "30px",
  fontWeight: "500",
  marginRight: "2em",

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
    backgroundColor: "#FFFFFF",
    transformOrigin: "center",
    transition: "transform 0.25s ease-out",
  },

  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "center",
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: "ATYRE-logo-font",
  fontSize: "30px",
  fontWeight: 400,
  color: "#FFF",
  marginLeft: "2em",

  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "0.1em",

  // add styles to the first letter to make it the theme primary color and make the shadow a dark version of the theme primary color for that letter
  "&::first-letter": {
    color: theme.palette.primary.main,
  },
}));

const Header = () => {
  const headerLinks = [
    { name: "Home", link: "/" },
    { name: "Inventory", link: "/inventory" },
    { name: "Contact", link: "/contact" },
    { name: "Logout", link: "/login" },
  ];

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <LogoText sx={{}}>OASIS</LogoText>
      <div className="header-links">
        {headerLinks.map((item) => (
            <HeaderLink key={item.name} href={item.link} onClick={
              (event) => {
                navigate(item.link);
                event.preventDefault();
              }
            }>
              {item.name}
            </HeaderLink>
        ))}
      </div>
    </StyledHeader>
  );
};

export default Header;
