import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
  marginTop: "20px",
  whiteSpace: "nowrap",
  marginLeft: "auto",
  color: "white",
  fontWeight: "600",
});

function MyButton(props) {
  return (
    <StyledButton color="secondary" type={props.type} onClick={props.onClick} variant="contained" disableElevation>
      {props.children}
    </StyledButton>
  );
}

export default MyButton;
