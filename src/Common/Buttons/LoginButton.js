import React from "react";

const LoginButton = ({ src, typeProp = "button", disabledProp, children }) => {
  return (
    <button
      className="bg-redPrimary w-full px-3 py-2 text-sm sm:text-[16px] sm:py-2 rounded-md hover:bg-red-700 duration-300"
      type={typeProp}
      disabled={disabledProp}
      style={disabledProp ? { opacity: "0.5" } : {}}
    >
      {children}
    </button>
  );
};

export default LoginButton;
