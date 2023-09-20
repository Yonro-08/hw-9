import { Link } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { HeaderLink } from "./HeaderStyle";

export default function Header() {
  return (
    <Box as="header" bg="rgb(22, 36, 71)" padding="10px 50px">
      <Flex justifyContent="flex-end" gap="20px">
        <Button leftIcon={<FaSearch fill="white" />} variant="headerBtn">
          Search
          <Link to="/" style={HeaderLink}></Link>
        </Button>
        <Button leftIcon={<AiFillHeart fill="red" />} variant="headerBtn">
          WishList
          <Link to="/wishlist" style={HeaderLink}></Link>
        </Button>
      </Flex>
    </Box>
  );
}
