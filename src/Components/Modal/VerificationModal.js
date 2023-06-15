import { Box, Typography, Button} from "@mui/material";
import "./SummaryModal.css";
import OrderStatusTag from "../UI/OrderStatusTag";
import ModalItemList from "./ModalItemList";
import VerificationCode from "./VerificationCode";


function VerificationModal(props) { 
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
        <OrderStatusTag className="status-tag" status="pending" />
      </Box>
      <VerificationCode code="1234AB" {...props}/>
      <ModalItemList items={props.items} />
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

export default VerificationModal;
