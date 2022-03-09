import { Outlet } from "react-router-dom";

import { Toolbar } from "@mui/material";

import Header from "../header/Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Toolbar sx={{ mt: -2, backgroundColor: "black" }} />
      <Outlet />
    </>
  );
};

export default PageLayout;
