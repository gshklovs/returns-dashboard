import { useState } from "react";
import { TableRow, TableCell, Box } from "@mui/material";
import MoreButton from "./MoreButton";
import SummaryModal from "../Modal/SummaryModal";
import "./PopulatedTableRow.css";

function PopulatedTableprops(props) {
  const [showModal, setShowModal] = useState(false);

  const handleViewOrder = (orderNumber) => {
    setShowModal(true);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) setShowModal(false);
  };

  const handleReportOrder = (orderNumber) => {
    console.log(orderNumber);
  };

  return (
    <TableRow
      key={props.orderNumber}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>{props.orderCode}</TableCell>
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.name}</TableCell>
      <TableCell align="center">{props.orderDate}</TableCell>
      <TableCell align="center">{props.orderStatus}</TableCell>
      <TableCell align="center">{props.price}</TableCell>
      <TableCell align="center">
        <MoreButton
          orderNumber={props.orderNumber}
          handleViewOrder={handleViewOrder}
          handleReportOrder={handleReportOrder}
        />
      </TableCell>
      {showModal && (
        <Box onClick={handleOverlayClick} className="modal-overlay">
          <SummaryModal
            className="modal"
            onClose={() => setShowModal(false)}
            {...props}
            items={[
              {
                name: "Item 1",
                quantity: 1,
                price: 10,
              },
              {
                name: "Item 2",
                quantity: 2,
                price: 20,
              },
            ]}
            price={30}
          />
        </Box>
      )}
    </TableRow>
  );
}

export default PopulatedTableprops;
