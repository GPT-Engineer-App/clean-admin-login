import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const ManagerTable = ({ managers }) => {
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
        {managers.map((manager) => (
          <Tr key={manager.id}>
            <Td>{manager.name}</Td>
            <Td>{manager.email}</Td>
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

export default ManagerTable;
