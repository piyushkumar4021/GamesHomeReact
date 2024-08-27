import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = ({ order, handleOrderChange }) => {
  const sortOrders = [
    { label: "Relevance", value: null },
    { label: "Name", value: "name" },
    { label: "Released", value: "-released" },
    { label: "Added", value: "-added" },
    { label: "Created", value: "created" },
    { label: "Updated", value: "-updated" },
    { label: "Rating", value: "-rating" },
    { label: "Popular", value: "-metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order By: {order?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem key={o.value} onClick={() => handleOrderChange(o)}>
            {o.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
