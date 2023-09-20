import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

import { useBooks } from "../../../hooks/useBooks";

export default function BookCard({ book }) {
  const [isWishlist, setIsWishlist] = useState(false);
  const { saveLocalStorage, checkSaveWishlist } = useBooks();

  useEffect(() => {
    checkSaveWishlist(book, setIsWishlist);
  }, []);

  return (
    <Flex
      pos="relative"
      flexDirection="column"
      alignItems="center"
      w="300px"
      p="15px"
      borderRadius="20px"
      bg="white"
      boxShadow="0px 0px 10px black"
      overflow="hidden"
    >
      <Button
        leftIcon={<AiFillHeart fill={isWishlist ? "red" : "gray"} />}
        onClick={() => {
          saveLocalStorage(book, isWishlist, setIsWishlist);
        }}
        pos="absolute"
        top="0"
        left="0"
        height="max-content"
        p="10px"
        fontSize="14px"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      >
        WishList
      </Button>
      <Heading fontWeight="bold" fontSize="16px" my="20px">
        {book.volumeInfo.title}
      </Heading>
      <Text fontSize="16px">{book.publishedDate}</Text>
      <Text fontSize="16px">{book.publisher}</Text>
      {book.volumeInfo.authors
        ? book.volumeInfo.authors.map((author) => {
            return (
              <Text fontSize="16px" key={author}>
                {author}
              </Text>
            );
          })
        : null}
      <Text flexGrow="1"></Text>
      <Image
        height="200px"
        my="15px"
        borderRadius="10px"
        boxShadow="4px 4px 10px black"
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "./assets/images/NoImage.png"
        }
      />
      <Box
        width="100%"
        height="70px"
        mb="50px"
        overflow="hidden"
        overflowY="visible"
      >
        <Text textAlign="justify" fontSize="16px" color="rgb(40, 41, 40)">
          {book.volumeInfo.description}
        </Text>
      </Box>
      <Box
        pos="absolute"
        bottom="0"
        left="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="50px"
        bg="rgb(20, 18, 54)"
        _hover={{ opacity: "0.9" }}
      >
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
