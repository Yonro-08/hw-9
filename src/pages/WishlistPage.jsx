import { useEffect } from "react";

import { useBooks } from "../hooks/useBooks";

import WishlistHeader from "../components/WishlistHeader/WishlistHeader";
import BookCards from "../components/BookCards/BookCards";
import { Box, Text } from "@chakra-ui/react";

export default function WishlistPage() {
  const { localBooks, getLocalStorage, clearBooks } = useBooks();

  useEffect(() => {
    clearBooks();
    getLocalStorage();
  }, []);

  return (
    <>
      <WishlistHeader />
      {localBooks.length > 0 ? (
        <>
          <Text
            textAlign="center"
            color="rgb(255, 255, 255)"
            fontSize="30px"
            fontWeight="500"
            mb="50px"
          >
            Your wishlist!
          </Text>
          <BookCards books={localBooks} />
        </>
      ) : (
        <Text
          textAlign="center"
          color="rgb(255, 255, 255)"
          fontSize="30px"
          fontWeight="500"
        >
          No wishlist items yet
        </Text>
      )}
    </>
  );
}
