import { createTheme } from "@mui/material";

import palette from "./palette";
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
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 800,
        },
        h2: {
          fontWeight: 800,
        },
        h5: {
          fontWeight: 600,
        },
      },
    },
  },
  typography,
  palette,
});

export default theme;
