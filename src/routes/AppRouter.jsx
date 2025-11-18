import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Coverage from "../pages/Coverage/Coverage";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: async () => {
          const { data } = await axios.get("/data/servicesCenters.json");
          return data;
        },
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
