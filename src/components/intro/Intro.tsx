import { Box } from "@mui/system";
import { Typography } from "@mui/material";

interface IntroProps {
  currentScrollY: number;
}

const Intro = ({ currentScrollY }: IntroProps) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
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
              fontWeight: 800,
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
          <Typography
            variant="h5"
            color="#eeeeee"
            sx={{
              fontWeight: 600,
              maxWidth: 500,
              opacity: ((currentScrollY - 150) * 100) / 300 / 100,
            }}
          >
            Guy Koranat is a student who wants to be a front-end developer.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          height: 200,
        }}
      ></Box>
    </>
  );
};

export default Intro;
