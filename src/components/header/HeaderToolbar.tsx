import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { isMobile } from "../../utils/isMobile";
import ScrollWrapper from "../scrollWrapper/ScrollWrapper";

const pages = ["Home", "Work", "Contact"];

const HeaderToolbar = () => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isNeedLightTheme = () =>
      isMobile() ? currentScrollY >= 2222 : currentScrollY >= 4980;
    const textTitleColor = () => (isNeedLightTheme() ? "black" : "white");
    const textLabelColor = () => (isNeedLightTheme() ? "#616161" : "#e0e0e0");

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
