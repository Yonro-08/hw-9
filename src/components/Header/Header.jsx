import { useBooks } from "../../hooks/useBooks";
import { Box, Button, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const { clearBooks } = useBooks();

  return (
    <Box as="header" bg="rgb(22, 36, 71)" padding="10px 50px">
      <Flex justifyContent="flex-end" gap="20px">
        <Button leftIcon={<FaSearch fill="white" />} variant="headerBtn">
          <Link to="/">Search</Link>
        </Button>
        <Button leftIcon={<AiFillHeart fill="red" />} variant="headerBtn">
          <Link to="/wishlist" onClick={clearBooks}>
            WishList
          </Link>
        </Button>
      </Flex>
    </Box>
  );
}
