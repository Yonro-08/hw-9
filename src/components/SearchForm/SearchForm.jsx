import { useState } from "react";

import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

import { useBooks } from "../../hooks/useBooks";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [handleError, setHandleError] = useState(false);
  const { getFetchBooks } = useBooks();

  const getData = () => {
    if (inputValue === "") {
      setHandleError(true);
      return;
    }
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
          placeholder={
            handleError ? "The field cannot be empty" : "search a book"
          }
          _placeholder={{
            textAlign: "center",
            color: `${handleError ? "red" : "gray"}`,
          }}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") getData();
          }}
        />
        <Button variant="buttonForm" onClick={getData}>
          Search
        </Button>
      </Flex>
    </Box>
  );
}
