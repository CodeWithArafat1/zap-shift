import React from "react";
import Logo from "../components/shared/Logo";
import { Outlet } from "react-router";
import AuthSide from "../components/shared/AuthSide";

const Auth = () => {
  return (
    <div className="container mx-auto">
      <Logo />
      <div className="h-[80vh] flex justify-around items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 place-items-center  items-center">
          <div className="order-2">
            <Outlet />
          </div>
          <div className="order-1">
            <AuthSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
