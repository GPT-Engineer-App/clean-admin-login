import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const PaymentInfo = () => {
 
  const paymentData = [
    { id: 1, customerName: 'John Doe', amount: 100, date: '2023-06-01', method: 'Credit Card' },
    { id: 2, customerName: 'Jane Smith', amount: 150, date: '2023-06-02', method: 'PayPal' },
  ];

  return (
    <Box>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Payment Method</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paymentData.map((payment) => (
            <Tr key={payment.id}>
              <Td>{payment.customerName}</Td>
              <Td>{payment.amount}</Td>
              <Td>{payment.date}</Td>
              <Td>{payment.method}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PaymentInfo;