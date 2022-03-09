import { createTheme } from "@mui/material";

import typography from "./typography";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
          height: 54,
          minHeight: "54px !important",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography,
});

export default theme;
