import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ServiceTypeChart = ({ data }) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <Box>
      <VStack spacing={4}>
        {data.map((entry, index) => (
          <Box key={entry.name} display="flex" alignItems="center">
            <Box width="20px" height="20px" backgroundColor={COLORS[index % COLORS.length]} mr={2} />
            <Text>{entry.name}</Text>
            <Text ml="auto">{((entry.value / total) * 100).toFixed(1)}%</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ServiceTypeChart;
