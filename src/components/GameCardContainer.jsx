import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
