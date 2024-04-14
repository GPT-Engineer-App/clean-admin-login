import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ReservationInfo = () => {
  const reservationData = [
    {
      id: 1,
      customerName: "John Doe",
      date: "2023-06-01",
      time: "10:00 AM",
      status: "Confirmed",
      address: "123 Main St",
      serviceType: "House Cleaning",
      estimateSubmitted: true,
      manager: "Manager 1",
      amount: 100,
    },
    {
      id: 2,
      customerName: "Jane Smith",
      date: "2023-06-02",
      time: "11:30 AM",
      status: "Pending",
      address: "456 Park Ave",
      serviceType: "Office Cleaning",
      estimateSubmitted: false,
      manager: "Manager 2",
      amount: 150,
    },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>고객</Th>
            <Th>날짜</Th>
            <Th>시간</Th>
            <Th>상태</Th>
            <Th>주소</Th>
            <Th>서비스 유형</Th>
            <Th>견적 제출</Th>
            <Th>매니저</Th>
            <Th>금액</Th>
          </Tr>
        </Thead>
        <Tbody>
          {reservationData.map((reservation) => (
            <Tr key={reservation.id}>
              <Td>{reservation.customerName}</Td>
              <Td>{reservation.date}</Td>
              <Td>{reservation.time}</Td>
              <Td>{reservation.status}</Td>
              <Td>{reservation.address}</Td>
              <Td>{reservation.serviceType}</Td>
              <Td>{reservation.estimateSubmitted ? "Yes" : "No"}</Td>
              <Td>{reservation.manager}</Td>
              <Td>{reservation.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ReservationInfo;
