import { RouteObject } from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import Home from "./home/HomeComponent";

const routes: RouteObject[] = [
  {
    path: "",
    element: <PageLayout />,
    children: [{ path: "", element: <Home /> }],
  },
];

export default routes;
