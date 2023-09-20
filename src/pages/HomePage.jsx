import { useEffect } from "react";
import { Grid } from "@chakra-ui/react";

import { useBooks } from "../hooks/useBooks";

import SearchForm from "../components/SearchForm/SearchForm";
import HomePageImage from "../components/HomePageImage/HomePageImage";
import BookCards from "../components/BookCards/BookCards";

export default function HomePage() {
  const { books, getLocalStorage } = useBooks();

  useEffect(() => {
    getLocalStorage();
  }, []);

  return (
    <Grid gridTemplateColumns={["repeat(2, 1fr)"]} gap="20px">
      <SearchForm />
      <HomePageImage />
      <BookCards books={books} />
    </Grid>
  );
}
