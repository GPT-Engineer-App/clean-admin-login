import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const SalesChart = ({ data }) => {
  const maxSales = Math.max(...data.map((d) => d.sales));

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Sales Chart
      </Text>
      <VStack spacing={2} align="stretch">
        {data.map((d) => (
          <HStack key={d.month} spacing={4}>
            <Text width="100px">{d.month}</Text>
            <Box bg="blue.500" height="20px" width={`${(d.sales / maxSales) * 100}%`} />
            <Text>{d.sales}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default SalesChart;
