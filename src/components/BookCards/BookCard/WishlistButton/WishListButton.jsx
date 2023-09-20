import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

import { useBooks } from "../../../../hooks/useBooks";

export default function WishlistButton({ book }) {
  const [isWishlist, setIsWishlist] = useState(false);
  const { handleHeartClick, checkHeart } = useBooks();

  useEffect(() => {
    setIsWishlist(checkHeart(book));
  }, []);

  return (
    <Button
      leftIcon={<AiFillHeart fill={isWishlist ? "red" : "gray"} />}
      onClick={() => {
        handleHeartClick(book, setIsWishlist);
      }}
      variant="buttonLike"
    >
      WishList
    </Button>
  );
}
