import {
  Heading,
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/get-cropped-images";

const GenreList = ({ genre, handleGenreChange }) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading size="lg">Genres</Heading>
      <List paddingTop={3}>
        {genre && (
          <Button
            onClick={() => handleGenreChange(null)}
            variant="link"
            colorScheme="red"
          >
            Clear
          </Button>
        )}
        {genres.map((g) => (
          <ListItem key={g.id} paddingY={1}>
            <HStack>
              <Image
                objectFit="cover"
                src={getCroppedImages(g.image_background)}
                borderRadius="10px"
                boxSize={9}
              />
              <Button
                fontWeight={genre?.id === g.id ? "bold" : "normal"}
                color={genre?.id === g.id && "blue.500"}
                variant="link"
                onClick={() => handleGenreChange(g)}
                letterSpacing={1}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
