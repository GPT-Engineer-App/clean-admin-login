import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Image, Flex } from "@chakra-ui/react";

const CleaningManagerInfo = () => {
  const managerData = [
    {
      id: 1,
      name: "Manager 1",
      phone: "1111111111",
      email: "manager1@example.com",
      password: "password1",
      confirmPassword: "password1",
      address: "Address 1",
      dateOfBirth: "1990-01-01",
      gender: "Male",
      experience: "1년 이상 3년 미만",
      preferredField: "주택 청소",
      otherExperience: "Other experience 1",
      introduction: "Introduction 1",
      strengths: "Strengths 1",
      preferredWorkingHours: "9AM - 5PM",
      preferredArea: "Area 1",
      profilePicture: "https://example.com/profile1.jpg",
    },
    {
      id: 2,
      name: "Manager 2",
      phone: "2222222222",
      email: "manager2@example.com",
      password: "password2",
      confirmPassword: "password2",
      address: "Address 2",
      dateOfBirth: "1995-01-01",
      gender: "Female",
      experience: "3년 이상 5년 미만",
      preferredField: "사무실 청소",
      otherExperience: "Other experience 2",
      introduction: "Introduction 2",
      strengths: "Strengths 2",
      preferredWorkingHours: "10AM - 6PM",
      preferredArea: "Area 2",
      profilePicture: "https://example.com/profile2.jpg",
    },
  ];

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>청소 관리자 정보</Th>
            <Th>액션</Th>
          </Tr>
        </Thead>
        <Tbody>
          {managerData.map((manager) => (
            <Tr key={manager.id}>
              <Td>
                <Flex alignItems="center">
                  <Image src={manager.profilePicture} alt="Profile" boxSize="60px" objectFit="cover" borderRadius="full" mr={4} />
                  <Box>
                    <strong>{manager.name}</strong> | {manager.phone} | {manager.email} | {manager.address} | {new Date(manager.dateOfBirth).toLocaleDateString()} | {manager.gender} | {manager.experience} | {manager.preferredField} | {manager.otherExperience} | {manager.introduction} | {manager.strengths} | {manager.preferredWorkingHours} | {manager.preferredArea}
                  </Box>
                </Flex>
              </Td>
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
