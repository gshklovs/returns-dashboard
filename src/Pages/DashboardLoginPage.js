import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook to access theme object
import DashboardLoginFields from "../Components/DashboardLoginFields";
import Logo from "../Components/UI/Logo";

const StyledStoreLoginPage = styled("div")(({ theme }) => ({ // Use arrow function to access theme object
  position: "relative",
  height: "100vh",
  width: "100%",
  overflowX: "hidden",
  background: `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, rgba(0, 139, 254, 0) 100%)`, // Use theme.palette.primary.main as background color
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
}));

const VerticalSlicewrapper = styled("div")({
  flex: 1,
  maxWidth: "50%",
});

function StoreLoginPage() {
  const theme = useTheme(); // Use useTheme hook to access theme object
  return (
    <StyledStoreLoginPage theme={theme}> {/* Pass theme object to StyledStoreLoginPage */}
      <VerticalSlicewrapper>
        <Logo />
      </VerticalSlicewrapper>
      <VerticalSlicewrapper>
        <DashboardLoginFields />
      </VerticalSlicewrapper>
    </StyledStoreLoginPage>
  );
}

export default StoreLoginPage;
