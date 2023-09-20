import { Flex, Heading, Image } from "@chakra-ui/react";

export default function WishlistHeader() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading fontWeight="500" fontSize="30px" color="#000000">
        Wishlist
      </Heading>
      <Image
        w="100px"
        h="100px"
        mb="50px"
        src="/assets/images/book.bafa48d3.svg"
      />
    </Flex>
  );
}
