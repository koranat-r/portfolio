import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { makeOpacityAnimation } from "../../utils/makeOpacityAnimation";

interface AboutMeProps {
  currentScrollY: number;
}

interface SkillTextProps {
  text: string;
  index: number;
  currentScrollY: number;
}

const skills = ["React", "TypeScript", "MUI", "GraphQL"];

const SkillText = ({ text, index, currentScrollY }: SkillTextProps) => {
  const calculateScaleSize = () => {
    const scale = (currentScrollY - index * 500 - 3000) / -250;
    if (scale > 5) return 5;
    if (scale > 1) return scale;
    return 1;
  };

  return (
    <Typography
      variant="h2"
      color={calculateScaleSize() > 1.5 ? "white" : "#979797"}
      sx={{
        opacity: makeOpacityAnimation({
          currentScrollY,
          startEffectAtY: 1800 + index * 600,
          duration: 200,
        }),
        transform: `matrix(${calculateScaleSize()}, 0, 0, ${calculateScaleSize()}, 0, 0)`,
      }}
      key={index}
    >
      {text}
    </Typography>
  );
};

const AboutMe = ({ currentScrollY }: AboutMeProps) => {
  return (
    <>
      <Box sx={{ height: 500 }}></Box>
      <Box
        sx={{
          height: 3250,
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
              <SkillText
                text={text}
                index={index}
                currentScrollY={currentScrollY}
                key={index}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: 400 }}></Box>
    </>
  );
};

export default AboutMe;
