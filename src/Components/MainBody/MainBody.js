/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Login from "../LogIn/Login";
import HomePage from "../HomePage/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/FirbaseConfig";
import { ADD_USER, REMOVE_USER } from "../../Redux/Slices/UserSlice";
import ProtectedRoutes from "../../Utils/ProtectedRoutes";

const MainBody = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: (
        <ProtectedRoutes>
          <Login />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoutes>
          <HomePage />
        </ProtectedRoutes>
      ),
    },
  ]);

  useEffect(() => {
    // Firebase API when auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        localStorage.setItem("accessToken", accessToken);
      } else {
        dispatch(REMOVE_USER());
        localStorage.clear();
      }
    });

    // Unsubscribe when component unmount
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="font-[Poppins]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default MainBody;
