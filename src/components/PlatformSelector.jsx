import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { FaChevronDown } from "react-icons/fa";

const PlatformSelector = ({ platform, handlePlatformChange }) => {
  const { data: platforms, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((p) => (
          <MenuItem onClick={() => handlePlatformChange(p)} key={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
