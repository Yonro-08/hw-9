import { extendTheme } from "@chakra-ui/react";

export const globalChakraStyle = extendTheme({
  components: {
    Button: {
      variants: {
        headerBtn: {
          padding: "10px",
          background: "rgb(31, 64, 104)",
          color: "white",
          fontFamily: "Comfortaa",
          borderRadius: "10px",
        },
        buttonForm: {
          p: "0 30px",
          bg: "rgb(222, 102, 102)",
          color: "white",
          fontFamily: "Comfortaa",
          fontWeight: "bold",
        },
      },
    },
    Input: {
      variants: {
        inputForm: {
          field: {
            width: "100%",
            height: "100%",
            padding: "0",
            borderRadius: "20px",
            caretColor: "black",
            _placeholder: {
              textAlign: "center",
            },
          },
        },
      },
    },
    Heading: {
      variants: {
        mainTitle: {
          color: "white",
          fontFamily: "Comfortaa",
          textAlign: "center",
        },
      },
    },
  },
});
