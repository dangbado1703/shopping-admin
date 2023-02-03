import path from "./path";
import React from "react";
const Home = React.lazy(() => import("../pages/Home/Home"));

const router = [
  {
    path: path.home,
    element: Home,
  },
];

export default router
