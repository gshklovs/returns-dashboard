import { Box, Typography, Button, Avatar, Tooltip, Badge } from "@mui/material";
import { Check } from "@mui/icons-material";
import "./StackElement.css";
import colorHash from "../../Functions/colorHash";
import { useState } from "react";

function getInitials(fullName) {
  let initials = fullName.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  return initials;
}

const seed1 = 0x811c9dc5;
const seed2 = 0x9e3779b9;

let StackElement = (props) => {
  const color1 = colorHash(props.name, seed1);
  const color2 = colorHash(props.name, seed2);
  const [visited, setVisited] = useState(false);

  const handleClick = (event) => {
    setVisited(true);
    if (event.target.tagName !== "BUTTON") {
      props.onElementClick({
        color: color1,
        ...props,
      });
    }
  };

  const handleButtonClick = (event) => {
    setVisited(true);
    props.onButtonClick({
      color: color1,
      ...props,
    });
    event.stopPropagation();
  };

  return (
    <Box className="horizantal-span">
      <Tooltip
        title="View order details"
        placement="top-start"
        followCursor={true}
      >
        <Box
          className={"stack-element" + " " + (!visited ? "new" : "visited")}
          onClick={handleClick}
        >
          <Badge badgeContent={!visited ? "New" : null} color="primary">
            <Avatar
              className="avatar"
              sx={{
                backgroundImage: `linear-gradient(45deg , ${color1}, ${color2})`,
              }}
              variant="rounded"
            >
              {getInitials(props.name)}
            </Avatar>
          </Badge>
          <Typography className="typography-name">{props.name}</Typography>
          <Typography className="element-order-id">
            #{props.orderCode}
          </Typography>
          <Typography className="element-pickup-time">
            {props.pickupTime}
          </Typography>
          <Tooltip
            title="Mark as complete"
            placement="top-start"
            followCursor={true}
          >
            <Button
              className="button"
              variant="contained"
              disableElevation={true}
              onClick={handleButtonClick}
              color="secondary"
            >
              <Check />
            </Button>
          </Tooltip>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default StackElement;
