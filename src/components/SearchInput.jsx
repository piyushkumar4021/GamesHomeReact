import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input
        placeholder="Search games here..."
        borderRadius={20}
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
