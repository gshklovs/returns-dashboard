import { Box, } from "@mui/material";
import TextBox from "../Components/UI/TextBox";
import Header from "../Components/UI/Header";
import HistoryTable from "../Components/Table/HistoryTable";
import "./OrderHistory.css";



function ReturnHistory() {
    return (
        <Box className="order-history">
            <Header />
            <TextBox className="order-history-title" text="Return History" variant="h4" />
            <TextBox className="order-history-subtitle" text="*Click an order to view its details" variant="body2" />
            <HistoryTable />
        </Box>
    );
}

export default ReturnHistory