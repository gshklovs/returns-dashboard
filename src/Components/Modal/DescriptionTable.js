import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  AccessTimeOutlined,
  ConfirmationNumberOutlined,
  FaceOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import TextBox from "../UI/TextBox";
import "./DescriptionTable.css";

function DescriptionTable(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <Chip icon={<ConfirmationNumberOutlined />} label="Order ID" />
          </TableCell>
          <TableCell>
            <Chip icon={<FaceOutlined />} label="Driver" />
          </TableCell>
          <TableCell>
            <Chip icon={<MonetizationOnOutlined />} label="Payout" />
          </TableCell>
          <TableCell>
            <Chip icon={<AccessTimeOutlined />} label="Pickup" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: "none",
          },
        }}
      >
        <TableRow>
          <TableCell>
            <TextBox className="table-element" sx= {{
                marginLeft: "1em",
            }}text={props.orderCode} />
          </TableCell>
          <TableCell>
            <TextBox className="table-element" text={props.name} />
          </TableCell>
          <TableCell>
            <TextBox className="table-element" text={"$" + props.price} />
          </TableCell>
          <TableCell>
            <TextBox className="table-element" text={props.pickupTime} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default DescriptionTable;
