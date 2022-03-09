import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface AboutMeProps {
  currentScrollY: number;
}

const AboutMe = ({ currentScrollY }: AboutMeProps) => {
  return (
    <>
      <Box sx={{ backgroundColor: "white", height: 200 }}></Box>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 8,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            maxWidth: 1000,
            pb: 0,
            backgroundImage:
              "linear-gradient(358.4deg, rgba(249,151,119,1)-2.1%, rgba(98,58,162,1) 90%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: ((currentScrollY - 1000) * 100) / 400 / 100,
          }}
        >
          Some experiences in front-end development by working with a senior.
          <br />
          <br />
          Interested in programming from making my own Minecraft server.
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "white", height: 200 }}></Box>
    </>
  );
};

export default AboutMe;
