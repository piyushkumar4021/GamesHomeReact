import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { FaChevronDown } from "react-icons/fa";

const PlatformList = ({ selectedPlatform, handlePlatformSelect }) => {
  const { data: Platforms, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {Platforms.map((platform) => (
          <MenuItem
            onClick={() => handlePlatformSelect(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
