import { Chip } from "@mui/material";

function OrderStatusTag({ status }) {
  let color = "";
  let label = "";
  // - Order Delivery Status (Processing, En route, Picked up, Delivered)
  // - Return Delivery Status (Processing, en route, picked up, delivered)
  // - Order State (Pending, Incomplete (Delivering, Delivered | Returning, Returned)  - one of the verifcation codes failed)
  switch (status) {
    case "Pending":
      color = "warning";
      label = "Pending";
      break;
    case "Incomplete":
      color = "warning";
      label = "Incomplete";
      break;
    case "Delivering":
      color = "warning";
      label = "Delivering";
      break;
    case "Returning":
      color = "warning";
      label = "Returning";
      break;
    case "Delivered":
      color = "success";
      label = "Delivered";
      break;
    case "Returned":
      color = "success";
      label = "Returned";
      break;
    default:
      color = "error";
      label = "Error";
      break;
  }

  return <Chip label={label} color={color} variant="outlined" />;
}

export default OrderStatusTag;
