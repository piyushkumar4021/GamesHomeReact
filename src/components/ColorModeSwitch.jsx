import { useColorMode, Button, Icon } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant={"ghost"} onClick={toggleColorMode}>
      <Icon as={colorMode === "dark" ? MdLightMode : MdDarkMode} boxSize={6} />
    </Button>
  );
}

export default ColorModeSwitch;
