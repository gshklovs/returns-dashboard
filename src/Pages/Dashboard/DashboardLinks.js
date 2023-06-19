import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { LinkTypography } from "../../Components/UI/LinkTypography";
import Split from "../../Components/UI/Split";

export function DashboardLinks({ balance }) {
  const navigate = useNavigate();
  return (
    <Split
      className="dashboard-content"
      left={
        <Typography variant="h5" color="black" className="dashboard-balance">
          {" "}
          Balance: {balance}
        </Typography>
      }
      right={
        <Box className="dashboard-link-container">
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
        </Box>
      }
    />
  );
}

export default DashboardLinks;
