import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  IconButton,
} from "@mui/material";
import Pagination from "./Pagination"; //importing our new Pagination component
import "./HistoryTable.css";
import { useState } from "react";
import MoreButton from "./MoreButton";
import PopulatedTableRow from "./PopulatedTableRow";
import { lightBlue } from "@mui/material/colors";

// const rows = Array.from({ length: 36 }, (_, index) => ({ orderNumber: (index + 1).toString() }));
const rows = [
  {
    orderCode: 1,
    name: "John Doe",
    orderDate: "10/10/2021",
    orderStatus: "Delivered",
    pickupTime: "10:00 AM",
    price: "$100",
    color: "#FFD600",
  },
  {
    orderCode: 2,
    name: "Srikar Vempaty",
    orderDate: "4/16/2023",
    orderStatus: "Returning",
    pickupTime: "2:00 PM",
    price: "$65",
    color: "#00F7FF",
  },
  {
    orderCode: 3,
    name: "John Doe",
    orderDate: "10/10/2021",
    orderStatus: "Incomplete",
    pickupTime: "10:00 AM",
    price: "$100",
    color: "#FFD600",
  },

  ];

function HistoryTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (value) => {
    setRowsPerPage(parseInt(value, 10));
    setPage(0);
  };
  return (
    <Box className="table-container">
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "#EBEBEB",
            }}
          >
            <TableRow>
              <TableCell>Order Number</TableCell>
              <TableCell align="center">Customer Name</TableCell>
              <TableCell align="center">Driver Name</TableCell>
              <TableCell align="center">Order Date</TableCell>
              <TableCell align="center">Order Status</TableCell>
              <TableCell align="center">Order Total</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <PopulatedTableRow {...row} key={row.orderCode} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          borderTop: "1px solid #EBEBEB",
          height: "50px",
        }}
      >
        <Pagination
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}

export default HistoryTable;
