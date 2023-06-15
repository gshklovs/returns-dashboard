import { Box } from "@mui/material";
import { Typography, LinkTypography } from "../Components/UI/LinkTypography";
import Split from "../Components/UI/Split";

import "./Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/UI/Header";
import StackBox from "../Components/UI/StackBox";
import TextBox from "../Components/UI/TextBox";

const Dashboard = () => {
  const [balance] = useState(0);
  const navigate = useNavigate();

  return (
    <Box className="dashboard">
      <Header />
      <Split
        className="dashboard-content"
        left={
          <Typography variant="h5" color="black" className="dashboard-balance">
            {" "}
            Balance: {balance}
          </Typography>
        }
        right={
          <div className="dashboard-link-container">
            <LinkTypography
              variant="h5"
              href="/order-history"
              className="dashboard-link"
              onClick={() => {
                navigate("/order-history");
              }}
            >
              View Order History
            </LinkTypography>
            <LinkTypography
              variant="h5"
              href="/return-history"
              className="dashboard-link"
              onClick={() => {
                navigate("/return-history");
              }}
            >
              View Return History
            </LinkTypography>
          </div>
        }
      />
      <Split
        left={
          <Typography variant="h4" color="black" sx={{ margin: "none" }}>
            Outstanding Deliveries
          </Typography>
        }
        right={
          <Typography variant="h4" color="black" sx={{ margin: "none" }}>
            Outstanding Returns
          </Typography>
        }
      />
      <Split
        left={
          <TextBox
            className="sub-title"
            text="*Scroll to view more orders"
            variant="body2"
          />
        }
        right={
          <TextBox
            className="sub-title"
            text="*Scroll to view more returns"
            variant="body2"
          />
        }
      />
      <Split left={<StackBox />} right={<StackBox />} />
      
    </Box>
  );
};

export default Dashboard;
