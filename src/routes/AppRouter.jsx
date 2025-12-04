import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Coverage from "../pages/Coverage/Coverage";
import axios from "axios";
import Login from "../pages/auth/Login";
import Auth from "../layouts/Auth";
import DashboardLayout from "../layouts/DashboardLayout";
import OverView from "../pages/dashboard/pages/OverView";
import SendParcel from "../pages/SendParcel";
import PaymentSuccess from "../pages/dashboard/pages/PaymentSuccess";
import PaymentCancel from "../pages/dashboard/pages/PaymentCancel";
import MyParcel from "../pages/dashboard/pages/MyParcel";
import PaymentHistory from "../pages/dashboard/pages/PaymentHistory";

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
        path: "/sentParcel",
        Component: SendParcel,
        loader: async () => {
          const { data } = await axios.get("/data/servicesCenters.json");
          return data;
        },
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
  {
    path: "auth",
    Component: Auth,
    children: [
      {
        path: "",
        Component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "",
        Component: OverView,
      },
      {
        path: "my-parcel",
        Component: MyParcel,
      },

      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancel",
        Component: PaymentCancel,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
