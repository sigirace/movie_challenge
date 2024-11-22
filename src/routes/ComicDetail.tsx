import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useComicsDetail } from '../libs/useComic';
import { extractYear, removeMarvelURI, removeYearInBrackets } from '../utils';
import { FaHeart, FaPlay, FaShare, FaStar } from 'react-icons/fa';
import { useCharacterDetail } from '../libs/useCharacter';
import { Link } from 'react-router-dom';

export default function ComicDetail() {
  window.scrollTo(0, 0);
  const { comicData, characterData } = useComicsDetail();
  const movieData = {
    title: removeYearInBrackets(comicData?.data.results[0].title || ''),
    releaseYear: extractYear(comicData?.data.results[0].title || ''),
    genres: comicData?.data.results[0].format || 'not found',
    synopsis: comicData?.data.results[0].description || 'not found',
    cast: characterData?.data.results.map((character) => ({
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
    })),
    thumbnail:
      comicData?.data.results[0].thumbnail.path +
      '.' +
      comicData?.data.results[0].thumbnail.extension,
  };

  return (
    <Box>
      <Box position="relative" h="100vh" color="white">
        <Image
          src={movieData.thumbnail}
          alt={movieData.title}
          objectFit="cover"
          w="full"
          h="full"
        />
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
            {movieData.title}
          </Heading>
          <HStack spacing={4} mb={6}>
            <HStack spacing={1}>
              <FaStar color="yellow" />
              <Text>{5}</Text>
            </HStack>
            <Text>{movieData.releaseYear}</Text>
            <HStack spacing={1}>
              <FaStar />
              <Text>{10}</Text>
            </HStack>
          </HStack>
          <HStack spacing={4}>
            <Button leftIcon={<FaPlay />} colorScheme="red">
              Watch Trailer
            </Button>
            <Button leftIcon={<FaHeart />} variant="outline" colorScheme="grey">
              Add to Watchlist
            </Button>
            <Button leftIcon={<FaShare />} variant="outline" colorScheme="grey">
              Share
            </Button>
          </HStack>
        </Box>
      </Box>

      <Box px={8} py={12} color="white" bg="black">
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={8}>
          <VStack align="stretch" spacing={6}>
            <Heading size="lg">Synopsis</Heading>
            <Text color="gray.300">{movieData.synopsis}</Text>
          </VStack>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Genres
            </Text>
            <HStack wrap="wrap" spacing={2}>
              <Tag key={movieData.genres} bg="gray.100" color="black">
                {movieData.genres}
              </Tag>
            </HStack>
          </Box>
        </Grid>
      </Box>

      <Box bg="black" color="white" px={8} py={12}>
        <Heading size="lg" mb={8}>
          Characters
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
          {movieData.cast?.map((actor) => (
            <Link to={`/characters/${actor.id}`} key={actor.id}>
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
                  src={actor.thumbnail}
                  alt={actor.name}
                  w="full"
                  h="250px"
                  objectFit="cover"
                />
                <Box p={4}>
                  <Text fontWeight="bold" noOfLines={1}>
                    {actor.name}
                  </Text>
                  <Text color="gray.400" fontSize="sm" noOfLines={1}>
                    {actor.name}
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
