import { Box, Menu, MenuItem, IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useState } from "react";

function MoreButton(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onViewOrder = () => {
    props.handleViewOrder("view");
    handleClose();
  };

  const onReportOrder = () => {
    props.handleReportOrder("report");
    handleClose();
  };
  return (
    <Box>
      <IconButton
        id="more-button"
        aria-label="more"
        aria-controls="more-menu"
        aria-haspopup="true"
        size="small"
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "more-button",
        }}
      >
        <MenuItem onClick={onViewOrder} >View Details</MenuItem>
        <MenuItem onClick={onReportOrder}>Report</MenuItem>
      </Menu>
    </Box>
  );
}

export default MoreButton;
