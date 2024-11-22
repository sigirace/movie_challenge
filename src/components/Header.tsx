import { Box, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box
      as="header"
      w="full"
      py={6}
      px={{ base: 4, md: 8 }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="black"
      color="white"
    >
      <Link to="/">
        <Text as="h1" fontSize="3xl" fontWeight="bold" color="red.600">
          Marvel Universe
        </Text>
      </Link>
      <HStack as="nav" display={{ base: 'none', md: 'flex' }} spacing={8}>
        <Text as="a" _hover={{ color: 'red.600' }}>
          Movies
        </Text>
        <Link to="/characters">
          <Text _hover={{ color: 'red.600' }}>Characters</Text>
        </Link>
        <Text as="a" _hover={{ color: 'red.600' }}>
          News
        </Text>
        <Text as="a" _hover={{ color: 'red.600' }}>
          About
        </Text>
      </HStack>
    </Box>
  );
}
