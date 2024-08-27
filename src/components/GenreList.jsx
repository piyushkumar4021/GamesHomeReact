import {
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
    <List paddingX={4} paddingTop={5}>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY={1}>
          <HStack>
            <Image
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
  );
};

export default GenreList;
