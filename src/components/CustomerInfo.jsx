import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const CustomerInfo = () => {
  const customerData = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210" },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>이메일</Th>
            <Th>전화번호</Th>
            <Th>액션</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customerData.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.name}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.phone}</Td>
              <Td>
                <Button size="sm" mr={2}>
                  Edit
                </Button>
                <Button size="sm">Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerInfo;
