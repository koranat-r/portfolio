import React from "react";

import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ScrollWrapper from "../scrollWrapper/ScrollWrapper";

const pages = ["Home", "Work", "Contact"];

const HeaderToolbar = () => {
  const [currentScrollY, setCurrentScrollY] = React.useState(0);

  const handleScroll = () => setCurrentScrollY(window.scrollY);

  const getTextColor = () => {
    if (currentScrollY >= 4980) return "black";
    return "white";
  };

  const getTextLabelColor = () => {
    if (currentScrollY >= 4980) return "#616161";
    return "#e0e0e0";
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
            variant="caption"
            sx={{
              color: getTextLabelColor(),
              transition: "0.5s all",
              fontWeight: 300,
              mb: -1,
            }}
          >
            Portfolio of
          </Typography>
          <Typography
            sx={{
              color: getTextColor(),
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
              key={page}
              sx={{
                color: getTextColor(),
                transition: "0.1s all",
                pr: 0,
                pl: 4,
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
