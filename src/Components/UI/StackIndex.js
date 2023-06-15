// create a component called stack index that contains the titles name, price, quantity and a down arrow icon
import { Box, Typography } from "@mui/material";
// use a bell icon
import { NotificationsOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./StackIndex.css";

function StackIndex(props) {
  return (
    <Box className="stack-index">
      <Box className="avatar"></Box>
      <Typography className="index-typography-name">Customer Name</Typography>
      <Typography className="index-order-id">Order ID</Typography>
      <Typography className="index-pickup-time">Pickup Time</Typography>
      <Box className="arrow-icon">
        {/* set the z index of the badge to be the same as its parent */}
        <Badge badgeContent= "10" color="primary" 
        sx={{
          zIndex: 0,
        }}>
          {/* <NotificationsOutlined />  */}
        </Badge>
      </Box>
    </Box>
  );
}

export default StackIndex;
