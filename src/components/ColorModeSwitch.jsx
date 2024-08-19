import { HStack, useColorMode, Button } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconSize = 25;

  return (
    <HStack>
      <Button variant={"ghost"} onClick={toggleColorMode}>
        {colorMode === "dark" && <MdLightMode size={iconSize} />}
        {colorMode === "light" && <MdDarkMode size={iconSize} />}
      </Button>
    </HStack>
  );
}

export default ColorModeSwitch;
