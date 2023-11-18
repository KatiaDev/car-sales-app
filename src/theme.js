import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: mode("#333", "#333")(props),  //mode(light mode color, dark mode color)
      },
    }),
  },
})

export default theme;