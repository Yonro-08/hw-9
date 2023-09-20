import { useState } from "react";

import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

import { useBooks } from "../../hooks/useBooks";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const { getFetchBooks } = useBooks();

  const getData = () => {
    getFetchBooks(inputValue);
  };

  return (
    <Box width="80%" justifySelf="center" alignSelf="center">
      <Heading as="h1" variant="mainTitle" fontSize={["40px", "80px"]}>
        Book finder
      </Heading>
      <Flex
        width="100%"
        height="50px"
        p="5px 50px"
        bg="white"
        borderRadius="20px"
      >
        <Input
          value={inputValue}
          variant="inputForm"
          placeholder="search a book"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button variant="buttonForm" onClick={getData}>
          Search
        </Button>
      </Flex>
    </Box>
  );
}
