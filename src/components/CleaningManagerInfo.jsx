import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const CleaningManagerInfo = () => {
  const managerData = [
    { id: 1, name: "Manager 1", email: "manager1@example.com", phone: "1111111111" },
    { id: 2, name: "Manager 2", email: "manager2@example.com", phone: "2222222222" },
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
          {managerData.map((manager) => (
            <Tr key={manager.id}>
              <Td>{manager.name}</Td>
              <Td>{manager.email}</Td>
              <Td>{manager.phone}</Td>
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

export default CleaningManagerInfo;
