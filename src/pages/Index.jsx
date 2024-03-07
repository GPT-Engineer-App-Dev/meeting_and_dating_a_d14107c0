import React from "react";
import { Box, Button, Container, Heading, VStack, Image, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  // Mock functions for demonstration purposes
  const handleSignUp = () => {
    // Implement sign-up functionality here
    console.log("Sign-Up functionality goes here");
  };

  const handleMemberLogin = () => {
    // Implement member login functionality here
    console.log("Member Login functionality goes here");
  };

  const handleFreeBrowsing = () => {
    // Implement free browsing functionality here
    console.log("Free Browsing functionality goes here");
  };

  return (
    <Container centerContent p={4}>
      <VStack spacing={6} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bg} color={color}>
          <Heading fontSize="xl">Welcome to EventMate!</Heading>
          <Text mt={4}>Join us and explore events, meet new people, and create memorable experiences.</Text>
        </Box>

        <Button leftIcon={<FaGoogle />} colorScheme="red" onClick={handleSignUp}>
          Sign-Up with Google
        </Button>

        <Button leftIcon={<FaGoogle />} variant="outline" onClick={handleMemberLogin}>
          Member Login with Google
        </Button>

        <Button colorScheme="blue" onClick={handleFreeBrowsing}>
          Free Browsing
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
