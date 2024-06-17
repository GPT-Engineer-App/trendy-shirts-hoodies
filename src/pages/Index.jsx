import { Box, Container, VStack, Heading, Text, Button, Image, Flex } from "@chakra-ui/react";
import { FaTshirt, FaHoodie } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch" width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to Our Clothing Store</Heading>
          <Text fontSize="xl">Discover the latest trends in shirts and hoodies</Text>
        </Box>
        <Flex justify="space-around" wrap="wrap" spacing={8}>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <FaTshirt size="3em" />
            <Heading as="h2" size="lg" mt={4}>Shirts</Heading>
            <Text mt={2}>Explore our wide range of stylish shirts.</Text>
            <Button mt={4} colorScheme="teal">Shop Now</Button>
          </Box>
          <Box textAlign="center" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <FaHoodie size="3em" />
            <Heading as="h2" size="lg" mt={4}>Hoodies</Heading>
            <Text mt={2}>Find the perfect hoodie for any occasion.</Text>
            <Button mt={4} colorScheme="teal">Shop Now</Button>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;