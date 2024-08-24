import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImages from "../services/get-cropped-images";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <List paddingX={4} paddingTop={5}>
      {genres.map((genre) => (
        <ListItem paddingY={1}>
          <HStack>
            <Image
              src={getCroppedImages(genre.image_background)}
              borderRadius="100%"
              boxSize={9}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
