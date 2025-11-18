import React from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
