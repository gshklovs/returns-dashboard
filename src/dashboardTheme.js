import { createTheme } from "@mui/material/styles";

//appply a typography shadow animation to the logo when it is hovered over
// when it is hovered over the logo should look like it has depth

const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#ffd700",
    },
    secondary: {
      main: "#008BFE",
    },
  },

  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default dashboardTheme;
