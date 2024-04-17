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
      <Heading mb={4}>관리자 대시보드</Heading>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>
            <Icon as={FaHome} mr={2} />홈
          </Tab>
          <Tab>
            <Icon as={FaUsers} mr={2} />
            고객 정보
          </Tab>
          <Tab>
            <Icon as={FaUserTie} mr={2} />
            청소 관리자 정보
          </Tab>
          <Tab>
            <Icon as={FaCalendarAlt} mr={2} />
            예약 정보
          </Tab>
          <Tab>
            <Icon as={FaMoneyBillWave} mr={2} />
            결제 정보
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
