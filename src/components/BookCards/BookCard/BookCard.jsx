import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

import WishlistButton from "./WishlistButton/WishListButton";

import {
  BookCardFlex,
  BookCardImage,
  BookCardDesc,
  BookCardButtonBox,
} from "./BookCardStyle";

export default function BookCard({ book }) {
  return (
    <Flex style={BookCardFlex}>
      <WishlistButton book={book} />
      <Heading variant="bookHeader">{book.volumeInfo.title}</Heading>
      <Text flexGrow="1">{book.publishedDate}</Text>
      <Text>{book.publisher}</Text>
      {book.volumeInfo.authors
        ? book.volumeInfo.authors.map((author) => {
            return <Text key={author}>{author}</Text>;
          })
        : null}
      <Image
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "./assets/images/NoImage.png"
        }
        style={BookCardImage}
      />
      <Box style={BookCardDesc}>
        <Text textAlign="justify" color="rgb(40, 41, 40)">
          {book.volumeInfo.description}
        </Text>
      </Box>
      <Box style={BookCardButtonBox} _hover={{ opacity: "0.9" }}>
        <Link
          href={book.volumeInfo.infoLink}
          isExternal
          color="white"
          _hover={{ textDecoration: "none" }}
        >
          Buy on google Play
        </Link>
      </Box>
    </Flex>
  );
}
