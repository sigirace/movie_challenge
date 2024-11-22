import { Box, Button, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useCharacterDetail } from '../libs/useCharacter';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function CharacterDetail() {
  window.scrollTo(0, 0);
  const { characterData, comicsData } = useCharacterDetail();

  const data = {
    name: characterData?.data.results[0].name,
    thumbnail:
      characterData?.data.results[0].thumbnail.path +
      '.' +
      characterData?.data.results[0].thumbnail.extension,
    description: characterData?.data.results[0].description || 'No description',
    comics: comicsData?.data.results.map((comic) => ({
      thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
      title: comic.title,
      id: comic.id,
    })),
  };

  return (
    <Box position="relative" h="100vh" color="white">
      <Image src={data.thumbnail} alt={data.name} objectFit="cover" w="full" h="full" />
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-t, black, transparent)"
        p={8}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Heading size="2xl" mb={4}>
          {data.name}
        </Heading>
        <HStack spacing={4} mb={6}>
          <Text>{data.description}</Text>
        </HStack>
      </Box>

      <Box bg="black" color="white" px={8} py={12}>
        <Heading size="lg" mb={8}>
          Comics
        </Heading>

        <Flex
          overflowX="auto"
          py={4}
          gap={6}
          css={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'red.600 transparent',
          }}
          sx={{
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'red.600',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'gray.800',
            },
          }}
        >
          {data.comics?.map((comic) => (
            <Link to={`/comics/${comic.id}`} key={comic.id}>
              <Box
                bg="gray.800"
                borderRadius="lg"
                overflow="hidden"
                minW="200px"
                m={2}
                _hover={{
                  transform: 'scale(1.05)',
                  shadow: 'lg',
                  boxShadow: '0 10px 15px -3px rgba(255, 0, 0, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <Image
                  src={comic.thumbnail}
                  alt={comic.title}
                  w="full"
                  h="250px"
                  objectFit="cover"
                />
                <Box p={4}>
                  <Text fontWeight="bold" noOfLines={1}>
                    {comic.title}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
