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
import _ from "lodash";

const GenreList = ({ handleGenreSelect }) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List paddingX={4} paddingTop={5}>
      {genres.map((genre) => (
        <ListItem key={genre.slug} paddingY={1}>
          <HStack>
            <Image
              src={getCroppedImages(genre.image_background)}
              borderRadius="10px"
              boxSize={9}
            />
            <Button variant="link" onClick={() => handleGenreSelect(genre.id)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
