import { styled } from "@mui/material/styles";
import { TextField as MuiTextField } from "@mui/material";

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  autofill: false,
  textAlign: "center",
  minWidth: "20rem",

}));

function TextField(props) {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <StyledTextField
      type="text"
      label={props.label}
      variant="outlined"
      margin="normal"
      color="secondary"
      onChange={handleChange}
    />
  );
}

export default TextField;
