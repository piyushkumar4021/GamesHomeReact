import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";

function PlatformIconList({ platforms }) {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: BsNintendoSwitch,
  };

  if (!platforms) return null;

  return (
    <HStack marginY={1} wrap={"wrap"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug]}
          boxSize={5}
          color="gray.500"
        />
      ))}
    </HStack>
  );
}
export default PlatformIconList;
