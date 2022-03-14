import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ScrollWrapper from "../scrollWrapper/ScrollWrapper";

const pages = ["Home", "Work", "Contact"];

const HeaderToolbar = () => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const textTitleColor = () => (currentScrollY >= 4980 ? "black" : "white");
    const textLabelColor = () =>
      currentScrollY >= 4980 ? "#616161" : "#e0e0e0";
    document.getElementById("header-title")!.style!.color = textTitleColor();
    document
      .querySelectorAll<HTMLElement>("#header-caption, #header-button")
      .forEach((element) => (element.style.color = textLabelColor()));
  };

  return (
    <ScrollWrapper handleScroll={handleScroll}>
      <Toolbar disableGutters variant="dense" sx={{ height: 54 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            id="header-caption"
            variant="caption"
            color="#e0e0e0"
            sx={{
              transition: "0.5s all",
              fontWeight: 300,
              mb: -1,
            }}
          >
            Portfolio of
          </Typography>
          <Typography
            id="header-title"
            color="white"
            sx={{
              transition: "0.5s all",
              fontWeight: 600,
            }}
          >
            Koranat
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <Button
              id="header-button"
              key={page}
              sx={{
                transition: "0.1s all",
                pr: 0,
                pl: 4,
                color: "#e0e0e0",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </ScrollWrapper>
  );
};

export default HeaderToolbar;
