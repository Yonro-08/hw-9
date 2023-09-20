import { Box, Container, Flex } from "@chakra-ui/react";
import BookCard from "./BookCard/BookCard";

export default function BookCards({ books }) {
  return (
    <Box gridColumn="span 2">
      <Container maxW="1280px">
        <Flex flexWrap="wrap" justifyContent="center" gap="30px">
          {books.length > 0 &&
            books.map((book) => {
              return <BookCard key={book.id} book={book} />;
            })}
        </Flex>
      </Container>
    </Box>
  );
}
