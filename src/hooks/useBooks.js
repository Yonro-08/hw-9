import { create } from "zustand";

const API_KEY = "AIzaSyBj6I4gRudsCyURe-P39CDK3_3CjpZRpUM";

export const useBooks = create((set, get) => ({
  books: [],
  localBooks: [],

  getFetchBooks: async (inputValue) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${inputValue}&key=${API_KEY}`
    );
    const data = await response.json();
    set({ books: data.items });
  },

  clearBooks: () =>
    set(() => ({
      books: [],
    })),

  getLocalStorage: () =>
    set(() => {
      return { localBooks: JSON.parse(localStorage.getItem("books")) || [] };
    }),

  handleHeartClick: (book, setIsWishlist) => {
    const localBooks = JSON.parse(localStorage.getItem("books")) || [];
    const findLocalBook = localBooks.findIndex((elem) => elem.id === book.id);
    if (findLocalBook === -1) {
      localBooks.push(book);
      localStorage.setItem("books", JSON.stringify(localBooks));
      setIsWishlist(true);
    } else {
      const newLocalBooks = localBooks.filter((elem) => elem.id !== book.id);
      localStorage.setItem("books", JSON.stringify(newLocalBooks));
      setIsWishlist(false);
    }
  },

  checkHeart: (book) => {
    const localBooks = get().localBooks;
    const findLocalBook = localBooks.findIndex((elem) => elem.id === book.id);
    if (findLocalBook !== -1) {
      return true;
    }
    return false;
  },
}));
