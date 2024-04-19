import React, { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

const CustomerInfo = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://example.com/api/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch data: " + error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>연락처</Th>
            <Th>이메일</Th>
            <Th>주소</Th>
            <Th>액션</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <Tr>
              <Td colSpan={5}>
                <Spinner />
              </Td>
            </Tr>
          ) : error ? (
            <Tr>
              <Td colSpan={5}>
                <Alert status="error">
                  <AlertIcon />
                  There was an error processing your request: {error}
                </Alert>
              </Td>
            </Tr>
          ) : (
            customers.map((customer) => (
              <Tr key={customer.id}>
                <Td>{customer.name}</Td>
                <Td>{customer.phone}</Td>
                <Td>{customer.email}</Td>
                <Td>{customer.address}</Td>
                <Td>
                  <Button size="sm" mr={2}>
                    Edit
                  </Button>
                  <Button size="sm">Delete</Button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomerInfo;
