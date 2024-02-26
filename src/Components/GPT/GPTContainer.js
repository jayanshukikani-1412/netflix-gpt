import React from "react";
import BgImage from "../../Assets/Images/login-background-image.jpg";
import GPTSearchBar from "./GPTSearchBar";
const GPTContainer = () => {
  return (
    <div className="bg-black">
      <div className="w-screen h-screen absolute">
        <img
          src={BgImage}
          alt="Login-Background-img"
          className="w-full h-full opacity-40"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-28 z-10">
        {/* <h1>GPTContainer</h1> */}
        <GPTSearchBar />
      </div>
    </div>
  );
};

export default GPTContainer;
