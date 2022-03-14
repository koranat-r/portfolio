import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { isMobile } from "../../utils/isMobile";
import { makeOpacityAnimation } from "../../utils/makeOpacityAnimation";
import ScrollWrapper from "../scrollWrapper/ScrollWrapper";

interface SkillTextProps {
  text: string;
  index: number;
}

const skills = ["React", "TypeScript", "MUI", "GraphQL"];

const SkillText = ({ text, index }: SkillTextProps) => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!isMobile()) {
      if (currentScrollY > 700 && currentScrollY < 4980) {
        const calculateScaleSize = () => {
          const scale = (currentScrollY - index * 500 - 3000) / -250;
          if (scale > 1) return scale;
          return 1;
        };
        const textElement = document.getElementById(`skill-text-${index}`);

        textElement!.style.color =
          calculateScaleSize() > 1.6 ? "white" : "#979797";
        textElement!.style.opacity = `${makeOpacityAnimation({
          currentScrollY,
          startEffectAtY: 1800 + index * 600,
          duration: 200,
        })}`;
        textElement!.style.transform = `matrix(${calculateScaleSize()}, 0, 0, ${calculateScaleSize()}, 0, 0)`;
      }
    }
  };

  return (
    <ScrollWrapper handleScroll={handleScroll}>
      <Typography
        id={`skill-text-${index}`}
        variant="h2"
        sx={{
          color: "white",
          transition: "0.1s all",
        }}
        key={index}
      >
        {text}
      </Typography>
    </ScrollWrapper>
  );
};

const AboutMe = () => {
  return (
    <>
      <Box sx={{ height: 500 }}></Box>
      <Box
        sx={{
          height: { xs: 500, md: 3250 },
        }}
      >
        <Box
          sx={{
            position: "sticky",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {skills.map((text, index) => (
              <SkillText text={text} index={index} key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
