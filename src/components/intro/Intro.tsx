import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { makeOpacityAnimation } from "../../utils/makeOpacityAnimation";
import ScrollWrapper from "../scrollWrapper/ScrollWrapper";

const AnimationDescriptionText = () => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < 700)
      document.getElementById(
        "about-me-subtitle"
      )!.style.opacity = `${makeOpacityAnimation({
        currentScrollY,
        startEffectAtY: 100,
        duration: 400,
      })}`;
  };

  return (
    <ScrollWrapper handleScroll={handleScroll}>
      <Typography
        id="about-me-subtitle"
        variant="h5"
        color="white"
        sx={{
          maxWidth: 500,
        }}
      >
        Guy Koranat is a student who wants to be a front-end developer.
      </Typography>
    </ScrollWrapper>
  );
};

const Intro = () => {
  return (
    <>
      <Box
        sx={{
          height: 1200,
          px: 4,
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            color="white"
            sx={{
              pb: 1,
              backgroundColor: "#4158D0",
              backgroundImage:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hello!
          </Typography>
          <AnimationDescriptionText />
        </Box>
      </Box>
    </>
  );
};

export default Intro;
