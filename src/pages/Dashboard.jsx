import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CustomerTable from "../components/CustomerTable";
import ManagerTable from "../components/ManagerTable";
import ReservationTable from "../components/ReservationTable";
import PaymentTable from "../components/PaymentTable";
import SalesChart from "../components/SalesChart";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [managers, setManagers] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [salesData, setSalesData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }

    fetchCustomers();
    fetchManagers();
    fetchReservations();
    fetchPayments();
    fetchSalesData();
  }, []);

  const fetchCustomers = () => {
    const data = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
    setCustomers(data);
  };

  const fetchManagers = () => {
    const data = [
      { id: 1, name: "Manager 1", email: "manager1@example.com" },
      { id: 2, name: "Manager 2", email: "manager2@example.com" },
    ];
    setManagers(data);
  };

  const fetchReservations = () => {
    const data = [
      { id: 1, customerName: "John Doe", date: "2023-06-01", status: "Confirmed" },
      { id: 2, customerName: "Jane Smith", date: "2023-06-15", status: "Pending" },
    ];
    setReservations(data);
  };

  const fetchPayments = () => {
    const data = [
      { id: 1, customerName: "John Doe", amount: 100, date: "2023-05-01" },
      { id: 2, customerName: "Jane Smith", amount: 150, date: "2023-05-15" },
    ];
    setPayments(data);
  };

  const fetchSalesData = () => {
    const data = {
      totalRevenue: 5000,
      monthlySales: [1000, 1500, 2000, 500],
    };
    setSalesData(data);
  };

  return (
    <Box>
      <Heading mb={8}>Admin Dashboard</Heading>
      <Tabs>
        <TabList>
          <Tab>Customer Info</Tab>
          <Tab>Cleaning Manager Info</Tab>
          <Tab>Reservation Info</Tab>
          <Tab>Payment Info</Tab>
          <Tab>Sales</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CustomerTable customers={customers} />
          </TabPanel>
          <TabPanel>
            <ManagerTable managers={managers} />
          </TabPanel>
          <TabPanel>
            <ReservationTable reservations={reservations} />
          </TabPanel>
          <TabPanel>
            <PaymentTable payments={payments} />
          </TabPanel>
          <TabPanel>
            <SalesChart salesData={salesData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
