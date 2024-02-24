import React from "react";
import LogoImage from "../../Assets/Images/Logo/netflix-full-logo.png";
import Avatar from "../../Assets/Images/avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../../Utils/FirbaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactToastify, {
  showErrorToast,
  showSuccessToast,
} from "../../Utils/ReactToastify";

const Header = () => {
  const userData = useSelector((store) => store?.user);
  const navigate = useNavigate();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        showSuccessToast("Logout Successful");
        navigate("/login");
      })
      .catch((error) => {
        showErrorToast("Logout Failed");
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full p-2 sm:p-2 z-10 flex items-center justify-between">
        <div>
          <img src={LogoImage} alt="Netflix-Logo" className="w-[150px]" />
        </div>

        <div className="flex items-center gap-4 mr-3">
          <h1 className="text-white text-xl">
            {userData?.displayName}
          </h1>
          <div className="w-[40px] h-[40px] rounded-full">
            {userData?.photoURL ? (
              <img
                src={userData?.photoURL}
                className="object-contain rounded-full"
                alt=""
              />
            ) : (
              <img
                src={Avatar}
                className="object-contain rounded-full"
                alt=""
              />
            )}
          </div>
          <button
            className="bg-redPrimary text-slate-300 px-2 py-1 rounded-sm font-semibold"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
      <ReactToastify />
    </>
  );
};

export default Header;
