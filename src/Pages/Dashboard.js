import { DashboardLinks } from "./Dashboard/DashboardLinks";
import "./Dashboard.css";
import { Box } from "@mui/material";
import { Typography } from "../Components/UI/LinkTypography";
import Split from "../Components/UI/Split";
import { useEffect, useState } from "react";
import Header from "../Components/UI/Header";
import StackBox from "../Components/UI/StackBox";

const Dashboard = () => {
  const [balance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // the following lines fetch data from and API correctly, instead we will create our own dummy data
        // const response = await fetch(
        //   "https://pokeapi.co/api/v2/pokemon/charmander"
        // );
        // const data = await response.json();
        // setTransactions(data);

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
        setTransactions(boxElements);
        console.log(transactions);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchTransactions();

  }, []);


  return (
    <Box className="dashboard">
      <Header />
      <DashboardLinks balance={balance} />
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
      <Split left={<StackBox transactions={transactions}/>} right={<StackBox transactions={transactions}/>} />
    </Box>
  );
};

export default Dashboard;
