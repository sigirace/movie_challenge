import { Box, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useComics from "../libs/useComics";

export default function Home() {
  const { isLoading, data, isError } = useComics();

  if (isLoading) {
    return (
      <Box textAlign="center" mt="50px">
        <Spinner size="xl" />
        <Text mt="4">Loading Comics...</Text>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" mt="50px">
        <Text color="red.500">Failed to load comics.</Text>
      </Box>
    );
  }

  const results = data!.data.results;

  return (
    <Box p="5">
      <Text fontSize="2xl" mb="5" textAlign="center" fontWeight="bold">
        Marvel Comics
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing="6">
        {results.map((comic) => (
          <Box
            key={comic.id}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            transition="transform 0.2s, border-color 0.2s"
            _hover={{
              transform: "scale(1.1)",
              borderColor: "red.500",
              boxShadow: "300px",
            }}
          >
            <Image
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              objectFit="cover"
              width="100%"
              height="300px"
            />
            <Box p="4">
              <Text fontWeight="bold" noOfLines={1}>
                {comic.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                ID: {comic.id}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
