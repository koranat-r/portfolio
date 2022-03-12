import styled from "@emotion/styled";
import { AppBar, Container, useScrollTrigger } from "@mui/material";

import HeaderToolbar from "./HeaderToolbar";

const bgColorTransparent = "#eeeeee40";

const Header = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backdropFilter: trigger ? "blur(16px)" : undefined,
    "@keyframes headerScrollingAnimation": {
      from: {
        backgroundColor: "black",
      },
      to: {
        backgroundColor: bgColorTransparent,
      },
    },
    "@keyframes headerStaticAnimation": {
      "0%": {
        backgroundColor: bgColorTransparent,
      },
      "100%": {
        backgroundColor: "black",
      },
    },
    animationName: trigger
      ? "headerScrollingAnimation"
      : "headerStaticAnimation",
    animationDuration: "500ms",
    backgroundColor: trigger ? bgColorTransparent : undefined,
  }));

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <HeaderToolbar />
      </Container>
    </StyledAppBar>
  );
};

export default Header;
