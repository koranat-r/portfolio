import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const WorkInProgress = () => {
  return (
    <Box
      sx={{
        px: 8,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eeeeee",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "800" }}>
        Work In Progress
      </Typography>
    </Box>
  );
};

export default WorkInProgress;
