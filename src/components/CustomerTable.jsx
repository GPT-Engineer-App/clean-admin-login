import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const CustomerTable = ({ customers }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {customers.map((customer) => (
          <Tr key={customer.id}>
            <Td>{customer.name}</Td>
            <Td>{customer.email}</Td>
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
  );
};

export default CustomerTable;
