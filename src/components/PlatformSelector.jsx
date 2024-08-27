import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Button,
} from "@chakra-ui/react";
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
        <MenuGroup title="Platforms">
          {platform && (
            <Button
              paddingLeft={2}
              variant="link"
              colorScheme="red"
              size="sm"
              onClick={() => handlePlatformChange(null)}
            >
              Clear
            </Button>
          )}
          {platforms.map((p) => (
            <MenuItem onClick={() => handlePlatformChange(p)} key={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
