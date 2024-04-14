import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const SalesChart = ({ salesData }) => {
  return (
    <Box>
      <Heading size="md" mb={4}>
        Sales Data
      </Heading>
      <Text>Total Revenue: {salesData.totalRevenue}</Text>
      <Text>Monthly Sales: {salesData.monthlySales.join(", ")}</Text>
      {}
    </Box>
  );
};

export default SalesChart;
