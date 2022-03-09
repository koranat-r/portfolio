import React from "react";

import styled from "@emotion/styled";
import { AppBar, Container, useScrollTrigger } from "@mui/material";
import HeaderToolbar from "./HeaderToolbar";

const bgColorTransparency = "#eeeeee40";

const Header = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backdropFilter: trigger ? "blur(16px)" : undefined,
    "@keyframes headerScrollTriggerAniamtion": {
      from: {
        backgroundColor: "black",
      },
      to: {
        backgroundColor: bgColorTransparency,
      },
    },
    "@keyframes headerStaticAnimation": {
      "0%": {
        backgroundColor: bgColorTransparency,
      },
      "100%": {
        backgroundColor: "black",
      },
    },
    animationName: trigger
      ? "headerScrollTriggerAniamtion"
      : "headerStaticAnimation",
    animationDuration: "500ms",
    backgroundColor: trigger ? bgColorTransparency : undefined,
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
