import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order By:
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>Ascending</MenuItem>
        <MenuItem>Descending</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
