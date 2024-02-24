/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Login from "../LogIn/Login";
import HomePage from "../HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/FirbaseConfig";
import { ADD_USER, REMOVE_USER } from "../../Redux/Slices/UserSlice";

const MainBody = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  useEffect(() => {
    // Firebase API when auth state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid, accessToken, phoneNumber } =
          user;
        const userData = {
          displayName,
          email,
          photoURL,
          uid,
          accessToken,
          phoneNumber,
        };
        dispatch(ADD_USER(userData));
      } else {
        dispatch(REMOVE_USER());
      }
    });
  }, []);

  return (
    <div className="font-[Poppins]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default MainBody;
