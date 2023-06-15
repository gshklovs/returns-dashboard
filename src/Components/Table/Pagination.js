import { Box, IconButton, Select, MenuItem, Typography } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./Pagination.css";

function CustomPagination({ count, rowsPerPage, page, onPageChange, onRowsPerPageChange }) {
  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const handleRowsPerPageChange = (event) => {
    console.log(event.target.value);
    onRowsPerPageChange(event.target.value);
    onPageChange(event, 0);
  };

  return (
    <Box className="pagination">
      <Typography variant="body2">{`${page * rowsPerPage + 1}-${(page + 1) * rowsPerPage} of ${count}`}</Typography>

      <Select className="pagination-select" value={rowsPerPage} onChange={handleRowsPerPageChange} inputProps={{ "aria-label": "rows per page" }}>
        {[5, 10, 25].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
        <MenuItem value={-1}>All</MenuItem>
      </Select>

      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        <FirstPageIcon />
      </IconButton>

      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        <KeyboardArrowRight />
      </IconButton>

      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        <LastPageIcon />
      </IconButton>
    </Box>
  );
}

export default CustomPagination;