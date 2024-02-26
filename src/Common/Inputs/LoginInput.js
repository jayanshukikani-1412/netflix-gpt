import { Field } from "formik";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

const LoginInput = ({
  typeProp,
  nameProp,
  labelProp,
  placeholderProp,
  errorProp,
  touchedProp,
}) => {
  const [isShow, setIsShow] = useState(false);

  const isError = errorProp && touchedProp;
  return (
    <div className="mb-3 relative">
      <Field
        autoComplete="off"
        name={nameProp}
        placeholder={placeholderProp}
        type={
          nameProp === "password" ? (isShow ? "text" : "password") : typeProp
        }
        className={`w-full px-3 py-4 outline-none border border-slate-600 bg-transparent h-[40px] sm:h-[50px] text-sm sm:text-[16px] rounded-md text-white font-normal  placeholder:text-gray-400 placeholder:font-normal ${
          isError && "border-red-600 text-redPrimary"
        }`}
      />
      {nameProp === "password" && (
        <div className="absolute right-3 sm:right-4 top-3 sm:top-4 cursor-pointer">
          {isShow ? (
            <IoMdEye
              onClick={() => setIsShow(false)}
              className={`text-lg ${isError && "text-red-600"}`}
            />
          ) : (
            <IoMdEyeOff
              onClick={() => setIsShow(true)}
              className={`text-lg ${isError && "text-red-600"}`}
            />
          )}
        </div>
      )}
      <p className="text-red-600 text-sm flex items-center my-1">
        {isError && (
          <>
            <IoCloseCircleOutline className="text-red-600 mr-[2px] font-bold" />
            {errorProp}
          </>
        )}
      </p>
    </div>
  );
};

export default LoginInput;
