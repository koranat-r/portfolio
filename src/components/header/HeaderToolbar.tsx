import React from "react";

import { Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const pages = ["Home", "Work", "Contact"];

const HeaderToolbar = () => {
  const [currentScrollY, setCurrentScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setCurrentScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const getTextColor = () => {
    if (currentScrollY >= 1400) return "black";
    return "white";
  };

  const getTextLabelColor = () => {
    if (currentScrollY >= 1400) return "#616161";
    return "#e0e0e0";
  };

  return (
    <Toolbar disableGutters variant="dense" sx={{ height: 54 }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: 54,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: getTextLabelColor(),
            fontWeight: 300,
            mb: -1,
          }}
        >
          Portfolio of
        </Typography>
        <Typography
          sx={{
            color: getTextColor(),
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
              pr: 0,
              pl: 4,
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </Toolbar>
  );
};

export default HeaderToolbar;
