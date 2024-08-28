import { Heading } from "@chakra-ui/react";

const GameHeading = ({ gameQuery }) => {
  const heading = `${gameQuery?.platform?.name || ""} ${
    gameQuery?.genre?.name || ""
  } Games`;

  return (
    <Heading size="2xl" marginBottom={4} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
