import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ handleSearch }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        searchRef.current.focus();
      } else if (e.key === "Escape") {
        searchRef.current.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        <InputRightElement pointerEvents="none" marginRight={3}>
          <Button variant="outline" size="xs" color="gray.500">
            /
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
