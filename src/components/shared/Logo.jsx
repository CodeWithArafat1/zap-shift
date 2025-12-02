import React from "react";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <div>
      <div className="flex items-center">
        <figure>
          <img src={logo} alt="" />
        </figure>

        <h1 className="text-2xl font-bold -ml-2 mt-2">ZapShift</h1>
      </div>
    </div>
  );
};

export default Logo;
