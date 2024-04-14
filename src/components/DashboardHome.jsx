import React from "react";
import { Box, Stat, StatLabel, StatNumber, SimpleGrid, Heading } from "@chakra-ui/react";

const DashboardHome = () => {
  const salesData = [
    { month: "Jan", sales: 500 },
    { month: "Feb", sales: 750 },
    { month: "Mar", sales: 1000 },
    { month: "Apr", sales: 1250 },
    { month: "May", sales: 1500 },
    { month: "Jun", sales: 2000 },
  ];

  return (
    <Box>
      <SimpleGrid columns={3} spacing={10} mb={8}>
        <Box bg="white" p={6} rounded="lg" boxShadow="md">
          <Stat>
            <StatLabel>Total Sales</StatLabel>
            <StatNumber>$12,345</StatNumber>
          </Stat>
        </Box>
        <Box bg="white" p={6} rounded="lg" boxShadow="md">
          <Stat>
            <StatLabel>Monthly Sales</StatLabel>
            <StatNumber>$5,678</StatNumber>
          </Stat>
        </Box>
        <Box bg="white" p={6} rounded="lg" boxShadow="md">
          <Stat>
            <StatLabel>New Customers</StatLabel>
            <StatNumber>50</StatNumber>
          </Stat>
        </Box>
      </SimpleGrid>
      <Box bg="white" p={6} rounded="lg" boxShadow="md">
        <Heading size="lg" mb={4}>
          Sales Data
        </Heading>
        <Box>
          {salesData.map((data, index) => (
            <Box key={index} mb={4}>
              <StatLabel>{data.month}</StatLabel>
              <StatNumber>${data.sales}</StatNumber>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHome;
