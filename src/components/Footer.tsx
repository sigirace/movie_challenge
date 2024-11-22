import { Box, Flex, Link, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      as="footer"
      py={3}
      px={{ base: 4, md: 8 }}
      borderTopWidth="1px"
      borderColor="gray.800"
      bg="black"
      color="white"
      fontSize="sm"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        gap={4}
      >
        <Text color="gray.400">© 2024 Marvel Studios. All rights reserved.</Text>
        <Flex gap={4}>
          <Link color="gray.400" _hover={{ color: 'white' }}>
            Privacy Policy
          </Link>
          <Link color="gray.400" _hover={{ color: 'white' }}>
            Terms of Service
          </Link>
          <Link color="gray.400" _hover={{ color: 'white' }}>
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
