import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  colors: {
    gray: {
      50: "#f2f2f3",
      100: "#d9d9d9",
      200: "#bebebe",
      300: "#a5a5a5",
      400: "#8b8b8b",
      500: "#727272",
      600: "#585858",
      700: "#3f3f3f",
      800: "#262626",
      900: "#0c0d0e",
    },
  },
});

export default theme;
