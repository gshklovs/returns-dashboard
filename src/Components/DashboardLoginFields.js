import {
  styled,
  Box,
  Paper as MuiPaper,
  Avatar,
  Typography,
} from "@mui/material";
import Button from "./UI/Button";
import TextField from "./UI/TextField";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const StyledDashboardLoginFields = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 10rem",
  height: "100vh",
});

const Paper = styled(MuiPaper)({
  padding: "2rem",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  elevation: 3,
  display: "flex",
  flexDirection: "column",
});

const StyledAvatar = styled(Avatar)({
  width: "4rem",
  height: "4rem",
  alignSelf: "center",
  margin: "1rem",
});

const MyLoginRoundedIcon = styled(LoginRoundedIcon)({
  fontSize: "1.5rem",
  marginRight: "0.5rem",
  color: "white",
});

const MyLockOutlinedIcon = styled(LockOutlinedIcon)({
  fontSize: "2rem",
  color: "#FFF",
  alignSelf: "center",
});


function DashboardLoginFields() {

  const navigate = useNavigate();
  
  const handleButtonClick = (event) => {
    navigate("/");
    event.preventDefault();
    };
    
  return (
    <StyledDashboardLoginFields>
      <Paper>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#FFF",
          }}
        >
          Sign in to OASIS
        </Typography>
        <StyledAvatar sx={{ bgcolor: "primary.main" }}>
          <MyLockOutlinedIcon />
        </StyledAvatar>
        <TextField label="Username" type="text" defaultValue="Username" autoComplete="off"/>
        <TextField label="Password" type="password" autoComplete="new-password"/>
        <Button variant="contained" onClick={handleButtonClick}>
            <Link to="\"/>
            <MyLoginRoundedIcon />
            Log In
        </Button>
      </Paper>
    </StyledDashboardLoginFields>
  );
}

export default DashboardLoginFields;
