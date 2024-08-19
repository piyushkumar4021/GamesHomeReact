import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/logo.webp";

function Navbar() {
  return (
    <HStack justifyContent={"space-between"} px={"10px"}>
      <Image src={logo} boxSize={"75px"} />
      <ColorModeSwitch />
    </HStack>
  );
}
export default Navbar;
