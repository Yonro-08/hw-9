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

  saveLocalStorage: (book, isWishlist, setIsWishlist) => {
    const localBooks = JSON.parse(localStorage.getItem("books")) || [];
    if (!isWishlist) {
      localBooks.push(book);
      localStorage.setItem("books", JSON.stringify(localBooks));
      setIsWishlist(true);
    } else {
      const newLocalBooks = localBooks.filter((elem) => elem.id !== book.id);
      localStorage.setItem("books", JSON.stringify(newLocalBooks));
      setIsWishlist(false);
    }
  },

  getLocalStorage: () =>
    set(() => {
      return { localBooks: JSON.parse(localStorage.getItem("books")) || [] };
    }),

  checkSaveWishlist: (book, setIsWishlist) => {
    const localBooks = get().localBooks;
    if (localBooks.length > 0) {
      localBooks.filter((localBook) => {
        if (localBook.id === book.id) {
          setIsWishlist(true);
          return;
        }
      });
    }
  },
}));
