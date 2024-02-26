import React from "react";
import LogoImage from "../../../Assets/Images/Logo/netflix-full-logo.png";

const LoginHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-2 sm:p-4 z-10">
      <div>
        <img src={LogoImage} alt="Netflix-Logo" className="w-[150px]"/>
      </div>
    </div>
  );
};

export default LoginHeader;
