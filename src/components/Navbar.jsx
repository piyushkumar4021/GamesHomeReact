import { HStack, Image, Text, Show } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";
import styles from "../font.module.css";
import SearchInput from "./SearchInput";

function Navbar() {
  return (
    <HStack
      gap={{
        base: 3,
        md: 6,
      }}
      px={"10px"}
    >
      <Image src={logo} boxSize={"75px"} />
      <Show above="md">
        <Text marginLeft={-4} className={styles.fontJersey} fontSize="3xl">
          GamesHome
        </Text>
      </Show>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
export default Navbar;
