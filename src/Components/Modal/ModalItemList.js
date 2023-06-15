import { Box, Typography, Divider, Tooltip } from "@mui/material";
import { LocalMallOutlined } from "@mui/icons-material";

import "./ModalItemList.css";

function ModalItemList(props) {
  return (
    <div className="modal-item-list">
      <Box className="modal-item-list-header">
        <Typography variant="h6">Contents: </Typography>
        <Typography variant="body2">Quantity</Typography>
      </Box>
      <Divider />
      {props.items.map((item) => {
        return (
          <Box key={item.name + item.size}>
            <Tooltip
              title={item.name}
              placement="top-start"
              followCursor={true}
            >
              <Box className="modal-item">
                <LocalMallOutlined className="modal-item-icon" />
                <Box className="modal-item-name">
                  <Typography>{item.name}</Typography>
                </Box>
                <Box className="modal-item-quantity">
                  <Typography>
                    {item.quantity} {item.quantity === 1 ? "item" : "items"}
                  </Typography>
                </Box>
              </Box>
            </Tooltip>
            <Divider />
          </Box>
        );
      })}
    </div>
  );
}

export default ModalItemList;
