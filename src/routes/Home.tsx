import { Box, Button, Flex, Grid, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import { useComicList } from '../libs/useComic';
import { FaHeart, FaPlayCircle, FaStar } from 'react-icons/fa';
import { extractYear, removeYearInBrackets } from '../utils';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

const moveAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`;

export default function Home() {
  const { data: comics, isLoading, isError } = useComicList();

  return (
    <Box as="main" px={{ base: 4, md: 8 }} py={8} w="full" minH="100vh" bg="black" color="white">
      <Box as="section" mb={16}>
        <Box position="relative" h="500px" borderRadius="xl" overflow="hidden">
          <Image
            src="https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg"
            alt="Marvel Heroes"
            w="full"
            h="full"
            objectFit="cover"
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, black, transparent)"
            display="flex"
            alignItems="flex-end"
            p={8}
          >
            <Box>
              <Text as="h2" fontSize="4xl" fontWeight="bold" mb={4}>
                The Marvel Cinematic Universe
              </Text>
              <Text fontSize="lg" mb={4}>
                Experience the epic saga of interconnected superhero films
              </Text>
              <Button
                leftIcon={<FaPlayCircle />}
                bg="red.600"
                color="white"
                px={6}
                py={3}
                borderRadius="lg"
                _hover={{ bg: 'red.700' }}
              >
                Watch Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box as="section" mb={12}>
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={8}>
          Featured Movies
        </Text>
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
          {comics?.data.results.map((movie) => (
            <Link key={movie.id} to={`/comics/${movie.id}`}>
              <Box
                bg="gray.900"
                borderRadius="lg"
                overflow="hidden"
                minW="300px"
                _hover={{
                  transform: 'scale(1.05)',
                  shadow: 'lg',
                  boxShadow: '0 10px 15px -3px rgba(255, 0, 0, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <Image
                  src={movie.thumbnail.path + '.' + movie.thumbnail.extension}
                  alt={removeYearInBrackets(movie.title)}
                  w="full"
                  h="400px"
                  objectFit="cover"
                />
                <Box p={4}>
                  <Text noOfLines={1} as="h3" fontSize="xl" fontWeight="bold" mb={2}>
                    {removeYearInBrackets(movie.title)}
                  </Text>
                  <Flex justify="space-between" align="center">
                    <Text color="gray.400">{extractYear(movie.title)}</Text>
                    <HStack spacing={1} align="center">
                      <FaStar width={16} height={16} color="yellow.500" />
                      <Text>{5}</Text>
                    </HStack>
                  </Flex>
                  <Button
                    mt={4}
                    w="full"
                    variant="outline"
                    borderColor="red.600"
                    color="red.600"
                    _hover={{ bg: 'red.600', color: 'white' }}
                    leftIcon={<FaHeart width={16} height={16} />}
                  >
                    Add to Watchlist
                  </Button>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>

      <Box as="section">
        <Text as="h2" fontSize="2xl" fontWeight="bold" mb={8}>
          Latest News
        </Text>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
          <Box bg="gray.900" p={6} borderRadius="lg">
            <Text as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              Upcoming Marvel Projects Announced
            </Text>
            <Text color="gray.400" mb={4}>
              Marvel Studios reveals their upcoming slate of movies and TV shows for Phase 5 and
              beyond.
            </Text>
            <ChakraLink color="red.600" _hover={{ textDecoration: 'underline' }}>
              Read More →
            </ChakraLink>
          </Box>
          <Box bg="gray.900" p={6} borderRadius="lg">
            <Text as="h3" fontSize="xl" fontWeight="bold" mb={4}>
              Behind the Scenes: Special Effects
            </Text>
            <Text color="gray.400" mb={4}>
              Discover how Marvel brings their spectacular visual effects to life on the big screen.
            </Text>
            <ChakraLink color="red.600" _hover={{ textDecoration: 'underline' }}>
              Read More →
            </ChakraLink>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
