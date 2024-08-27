import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = ({ selectedOrder, setSelectedOrder }) => {
  const sortOrder = [
    { label: "Name", value: "name" },
    { label: "Released", value: "released" },
    { label: "Added", value: "added" },
    { label: "Created", value: "created" },
    { label: "Updated", value: "updated" },
    { label: "Rating", value: "rating" },
    { label: "Metacritic", value: "metacritic" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order By:
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem key={order.value} onClick={() => setSelectedOrder(order)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
