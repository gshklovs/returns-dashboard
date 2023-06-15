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
  let boxElements = [
    {
      name: "Joe Shulk",
      orderCode: 1234,
      price: 1,
      pickupTime: "1:00 AM",
      items: [
        { name: "Red T- Shirt", size: "Small", quantity: 1 },
        { name: "Brown Chino Pants", size: "29x30", quantity: 1 },
        { name: "Adidas Shoes", size: "9.5", quantity: 1 },
      ],
    },
    {
      name: "Albert Karsinki",
      orderCode: 24562,
      price: 2456,
      pickupTime: "2:00 PM",
      items: [
        { name: "Brown Chino Pants", size: "Small", quantity: 3 },
        { name: "Brown Chino Pants", size: "Medium", quantity: 1 },
        { name: "Adidas Shoes", quantity: 1 },
      ],
    },
    {
      name: "Corey Osiris",
      orderCode: 3923,
      price: 3923,
      pickupTime: "2:00 PM",
      items: [
        { name: "Red T- Shirt", quantity: 1 },
        { name: "Brown Chino Pants", quantity: 1 },
        { name: "Adidas Shoes", quantity: 1 },
      ],
    },
    {
      name: "Srikar Vempaty",
      orderCode: 4923,
      price: 4923,
      pickupTime: "8:00 PM",
      items: [
        { name: "Red T- Shirt", quantity: 1 },
        { name: "Brown Chino Pants", quantity: 1 },
        { name: "Adidas Shoes", quantity: 1 },
      ],
    },
    {
      name: "Rohan Virmani",
      orderCode: 5234,
      price: 5234,
      pickupTime: "3:00 PM",
      items: [
        { name: "Red T- Shirt", quantity: 1 },
        { name: "Brown Chino Pants", quantity: 1 },
        { name: "Adidas Shoes", quantity: 1 },
      ],
    },
    {
      name: "Another person",
      orderCode: 8234,
      price: 8234,
      pickupTime: "3:00 PM",
      items: [
        { name: "Red Jordan High's", quantity: 1 },
        { name: "LuluLemon Shorts", quantity: 1 },
        { name: "Green Polo Shirt", quantity: 1 },
      ],
    },
  ];

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
      <StackIndex></StackIndex>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="stack-box" sx={{ flex: 2 }}>
          {boxElements.map((boxElement) => {
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
