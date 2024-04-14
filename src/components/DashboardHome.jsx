import React from "react";
import { Box, Stat, StatLabel, StatNumber, SimpleGrid, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

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
      <SimpleGrid columns={2} spacing={10} mb={8}>
        <Box bg="white" p={6} rounded="lg" boxShadow="md">
          <Heading size="lg" mb={4}>
            Total Sales
          </Heading>
          <Stat>
            <StatNumber fontSize="4xl">$12,345</StatNumber>
            <StatLabel>Year-to-Date</StatLabel>
          </Stat>
        </Box>
        <Box bg="white" p={6} rounded="lg" boxShadow="md">
          <Heading size="lg" mb={4}>
            New Customers
          </Heading>
          <Stat>
            <StatNumber fontSize="4xl">50</StatNumber>
            <StatLabel>This Month</StatLabel>
          </Stat>
        </Box>
      </SimpleGrid>

      <Box bg="white" p={6} rounded="lg" boxShadow="md" mb={8}>
        <Heading size="lg" mb={4}>
          Monthly Sales
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Month</Th>
              <Th isNumeric>Sales</Th>
            </Tr>
          </Thead>
          <Tbody>
            {salesData.map((data, index) => (
              <Tr key={index}>
                <Td>{data.month}</Td>
                <Td isNumeric>${data.sales}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default DashboardHome;
