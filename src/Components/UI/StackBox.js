import { Box } from "@mui/material";
import { useState } from "react";
import StackElement from "./StackElement";
import StackIndex from "./StackIndex";
import "./StackBox.css";
import SummaryModal from "../Modal/SummaryModal";
import VerificationModal from "../Modal/VerificationModal";

function StackBox(props) {
  const [summaryModalOpen, setSummaryModalOpen] = useState(false);
  const [verificationModalOpen, setVerificationModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleElementClick = (orderInfo) => {
    setSelectedOrder(orderInfo);
    setSummaryModalOpen(true);
  };

  const handleVerifcationClick = (orderInfo) => {
    setSelectedOrder(orderInfo);
    setVerificationModalOpen(true);
  };

  const handleCloseSummaryModal = (event) => {
    if (event.target === event.currentTarget) {
      setSummaryModalOpen(false);
    }
  };

  const handleCloseVerificationModal = (event) => {
    if (event === false) {
      setVerificationModalOpen(false);
    } else if (event === true) {
      setVerificationModalOpen(false);
    } else if (event.target === event.currentTarget) {
      setVerificationModalOpen(false);
    }
  };

  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  // make me a list of 5 clothing items with quantities

  return (
    <Box
      sx={{
        border: "1px solid #000000",
        borderRadius: "10px",
        width: "100%",
        marginTop: ".5em",
        overflow: "hidden",
      }}
    >
      <StackIndex count={props.transactions.length}></StackIndex>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="stack-box" sx={{ flex: 2 }}>
          {props.transactions.map((boxElement) => {
            return (
              <StackElement
                {...boxElement}
                key={boxElement.orderCode}
                onElementClick={handleElementClick}
                onButtonClick={handleVerifcationClick}
              ></StackElement>
            );
          })}
        </Box>
      </Box>
      {summaryModalOpen && (
        <Box className="overlay" onClick={handleCloseSummaryModal}>
          <SummaryModal
            open={summaryModalOpen}
            onClose={handleCloseSummaryModal}
            {...selectedOrder}
            onClick={handleModalContentClick}
          />
        </Box>
      )}
      {verificationModalOpen && (
        <Box className="overlay" onClick={handleCloseVerificationModal}>
          <VerificationModal
            open={verificationModalOpen}
            onClose={handleCloseVerificationModal}
            {...selectedOrder}
            onClick={handleModalContentClick}
          />
        </Box>
      )}
    </Box>
  );
}

export default StackBox;
