import { extendTheme } from "@chakra-ui/react";

export const globalChakraTheme = extendTheme({
  components: {
    Button: {
      variants: {
        headerBtn: {
          position: "relative",
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
        buttonLike: {
          pos: "absolute",
          top: "0",
          left: "0",
          height: "max-content",
          p: "10px",
          fontSize: "14px",
          bg: "transparent",
          _hover: { bg: "transparent" },
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
        bookHeader: {
          my: "20px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "16px",
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: "16px",
      },
    },
  },
});
