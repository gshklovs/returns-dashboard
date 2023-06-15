import { Box, Typography, Button } from "@mui/material";
import "./SummaryModal.css";
import OrderStatusTag from "../UI/OrderStatusTag";
import ModalItemList from "./ModalItemList";
import DescriptionTable from "./DescriptionTable";

function SummaryModal(props) {
  return (
    <Box className="purchase-modal">
      <Box className="modal-header">
        <Box className="modal-title">
          <Typography variant="h5" className="modal-title-name">
            {props.name}'s Order
          </Typography>
          <Box
            className="modal-title-code-container"
            sx={{
              backgroundColor: props.color,
            }}
          >
            <Typography className="modal-title-code">
              #{props.orderCode}
            </Typography>
          </Box>
        </Box>
        <OrderStatusTag className="status-tag" status={props.orderStatus} />
      </Box>
      <Typography variant="h6">Details: </Typography>
      <Box className="modal-subheader">
        <DescriptionTable {...props} />
      </Box>
      <ModalItemList items={props.items} />
      <Box className="price-typography">
        <Box className="price-typography-title">
          <Typography variant="h6">Total:</Typography>
        </Box>
        <Box className="price-typography-value">
          <Typography variant="h6">${props.price}</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.onClose}
        className="close-button"
        disableElevation={true}
      >
        Close
      </Button>
    </Box>
  );
}

export default SummaryModal;
