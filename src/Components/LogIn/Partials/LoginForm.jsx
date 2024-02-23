import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import YupSchema from "../../../Utils/YupSchema";
import LoginInput from "../../../Common/Inputs/LoginInput";
import LoginButton from "../../../Common/Buttons/LoginButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [rememberme, setRememberme] = useState(false);

  const signInSchema = Yup.object().shape({
    email: YupSchema?.email,
    password: YupSchema?.password,
    fullName: isSingInForm ? "" : YupSchema?.fullName,
  });
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black opacity-90 text-white p-5 sm:p-8 w-full max-w-[300px] sm:max-w-sm">
      <h2 className="text-2xl sm:text-3xl font-bold font-[Roboto] mb-4 sm:mb-7">
        {isSingInForm ? "Sign In" : "Sign Up"}
      </h2>

      {/* Formik Form for sign in or sign up */}
      <Formik
        initialValues={
          isSingInForm
            ? {
                email: "",
                password: "",
              }
            : {
                fullName: "",
                email: "",
                password: "",
              }
        }
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={signInSchema}
      >
        {({ values, errors, touched, isValid, dirty }) => (
          <Form>
            {!isSingInForm && (
              <LoginInput
                typeProp="text"
                nameProp="fullName"
                labelProp="Full Name"
                placeholderProp="Full Name"
                errorProp={errors?.fullName}
                touchedProp={touched?.fullName}
              />
            )}
            {/* Common input component for email address */}
            <LoginInput
              typeProp="email"
              nameProp="email"
              labelProp="Email"
              placeholderProp="Email"
              errorProp={errors?.email}
              touchedProp={touched?.email}
            />

            {/* Common input component for password */}
            <LoginInput
              typeProp="password"
              nameProp="password"
              labelProp="Password"
              placeholderProp="Password"
              errorProp={errors?.password}
              touchedProp={touched?.password}
            />

            {/* Common button component */}
            <div className="mt-4 sm:mt-7">
              <LoginButton
                src="login"
                typeProp="submit"
                disabledProp={!(isValid && dirty)}
              >
                {isSingInForm ? "Sign In" : "Sign Up"}
              </LoginButton>
            </div>
          </Form>
        )}
      </Formik>

      {isSingInForm && (
        <div className="my-3 sm:my-4 cursor-pointer">
          <h3 className="text-white text-sm text-center">Forgot Password ?</h3>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-6 sm:mt-10">
        {isSingInForm && (
          <div className="flex items-center gap-[6px]">
            <input
              type="checkbox"
              name="rememberme"
              id="rememberme"
              className="cursor-pointer"
              value={rememberme}
              onChange={() => setRememberme(!rememberme)}
            />
            <label htmlFor="rememberme" className="text-sm cursor-pointer">
              Remember me
            </label>
          </div>
        )}
        <div>
          <p className="text-slate-400 text-sm">
            {isSingInForm ? "New to Netflix? " : "Already have an account? "}
            <Link
              to="#"
              className="text-white font-bold"
              onClick={() => {
                setIsSingInForm(!isSingInForm);
              }}
            >
              {isSingInForm ? "Sign up now" : "Sign In now"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
