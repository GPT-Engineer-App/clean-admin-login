import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

const ReservationTable = ({ reservations }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Customer Name</Th>
          <Th>Date</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {reservations.map((reservation) => (
          <Tr key={reservation.id}>
            <Td>{reservation.customerName}</Td>
            <Td>{reservation.date}</Td>
            <Td>{reservation.status}</Td>
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

export default ReservationTable;
