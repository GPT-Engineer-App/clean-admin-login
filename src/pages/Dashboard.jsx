import React from "react";
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Icon } from "@chakra-ui/react";
import { FaHome, FaUsers, FaUserTie, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CustomerInfo from "../components/CustomerInfo";
import CleaningManagerInfo from "../components/CleaningManagerInfo";
import ReservationInfo from "../components/ReservationInfo";
import PaymentInfo from "../components/PaymentInfo";
import DashboardHome from "../components/DashboardHome";

const Dashboard = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (!isAuthenticated) {
    navigate("/");
  }

  return (
    <Box p={4}>
      <Heading mb={4}>Admin Dashboard</Heading>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>
            <Icon as={FaHome} mr={2} />
            Home
          </Tab>
          <Tab>
            <Icon as={FaUsers} mr={2} />
            Customer Info
          </Tab>
          <Tab>
            <Icon as={FaUserTie} mr={2} />
            Cleaning Manager Info
          </Tab>
          <Tab>
            <Icon as={FaCalendarAlt} mr={2} />
            Reservation Info
          </Tab>
          <Tab>
            <Icon as={FaMoneyBillWave} mr={2} />
            Payment Info
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <DashboardHome />
          </TabPanel>
          <TabPanel>
            <CustomerInfo />
          </TabPanel>
          <TabPanel>
            <CleaningManagerInfo />
          </TabPanel>
          <TabPanel>
            <ReservationInfo />
          </TabPanel>
          <TabPanel>
            <PaymentInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
