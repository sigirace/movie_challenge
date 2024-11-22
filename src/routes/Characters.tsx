import {
  Box,
  Flex,
  Grid,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
} from '@chakra-ui/react';
import { useCharacterList } from '../libs/useCharacter';
import { FaChevronDown, FaFilter, FaRegIdCard, FaSearch, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Characters() {
  const { data, isLoading, isError } = useCharacterList();
  return (
    <Box bg="black" color="white">
      <Box as="header" position="sticky" top="0" bg="gray.900" zIndex="10" shadow="sm">
        <Box maxW="7xl" mx="auto" py={4} px={4} gap={4}>
          <Box flex="1" position="relative">
            <Input
              placeholder="Search characters..."
              bg="gray.800"
              color="white"
              pl={10}
              _placeholder={{ color: 'gray.500' }}
            />
            <Box position="absolute" left={3} top="50%" transform="translateY(-50%)">
              <FaSearch size={20} color="gray.400" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        {data?.data.results.map((character) => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <Box
              bg="gray.900"
              rounded="lg"
              overflow="hidden"
              shadow="md"
              transform="translateY(0)"
              _hover={{ transform: 'translateY(-5px)', transition: '0.2s' }}
            >
              <Image
                src={character.thumbnail.path + '.' + character.thumbnail.extension}
                alt={character.name}
                w="full"
                h="200px"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" noOfLines={1}>
                  {character.name}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
