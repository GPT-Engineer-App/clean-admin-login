import React from 'react';
import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

const SalesData = () => {
 
  const totalSales = 5000;
  const monthlySales = 2500;
  const newCustomers = 10;

  return (
    <Box>
      <Stat>
        <StatLabel>Total Sales</StatLabel>
        <StatNumber>{totalSales}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Monthly Sales</StatLabel>
        <StatNumber>{monthlySales}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>New Customers This Month</StatLabel>
        <StatNumber>{newCustomers}</StatNumber>
      </Stat>
    </Box>
  );
};

export default SalesData;