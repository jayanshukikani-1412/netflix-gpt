import React from "react";
import LoginHeader from "./Partials/LoginHeader";
import BgImage from "../../Assets/Images/login-background-image.jpg";
import LoginForm from "./Partials/LoginForm";

const Login = () => {
  return (
    <div className="bg-black">
      {/* Header */}
      <LoginHeader />

      {/* Background image */}
      <div className="w-screen h-screen">
        <img
          src={BgImage}
          alt="Login-Background-img"
          className="w-full h-full opacity-40"
        />
      </div>

      {/* Login Form */}
      <LoginForm/>
    </div>
  );
};

export default Login;
