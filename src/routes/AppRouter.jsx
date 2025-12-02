import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Coverage from "../pages/Coverage/Coverage";
import axios from "axios";
import Login from "../pages/auth/Login";
import Auth from "../layouts/Auth";
import Dashboard from "../pages/dashboard/Dashboard";
import AddProduct from "../pages/dashboard/pages/AddProduct";
import DashboardLayout from "../layouts/DashboardLayout";
import OverView from "../pages/dashboard/pages/OverView";
import SendParcel from "../pages/SendParcel";
import PaymentSuccess from "../pages/dashboard/pages/PaymentSuccess";
import PaymentCancel from "../pages/dashboard/pages/PaymentCancel";

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
    path: "dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "",
        Component: OverView,
      },
      {
        path: "/dashboard/add-product",
        Component: AddProduct,
      },

      {
        path: "/dashboard/payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "/dashboard/payment-cancel",
        Component: PaymentCancel,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
