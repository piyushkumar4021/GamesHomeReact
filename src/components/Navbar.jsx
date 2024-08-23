import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import styles from "../font.module.css";

function Navbar() {
  return (
    <HStack justifyContent={"space-between"} px={"10px"}>
      <HStack>
        <Image src={logo} boxSize={"75px"} />
        <Text className={styles.fontJersey} fontSize="3xl">
          GamesHome
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}
export default Navbar;
