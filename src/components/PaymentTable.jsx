import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const PaymentTable = ({ payments }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Customer Name</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {payments.map((payment) => (
          <Tr key={payment.id}>
            <Td>{payment.customerName}</Td>
            <Td>{payment.amount}</Td>
            <Td>{payment.date}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default PaymentTable;
