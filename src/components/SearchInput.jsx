import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ handleSearch }) => {
  const searchRef = useRef(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        searchRef.current.value && handleSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          placeholder="Search games here..."
          borderRadius={20}
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
