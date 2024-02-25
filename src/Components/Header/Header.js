import React from "react";
import LogoImage from "../../Assets/Images/Logo/netflix-full-logo.png";
import Avatar from "../../Assets/Images/avatar.png";
import { signOut } from "firebase/auth";
import { auth } from "../../Utils/FirbaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactToastify, {
  showErrorToast,
  showSuccessToast,
} from "../../Utils/ReactToastify";
import { TOGGLE_IS_GPT_VALUE } from "../../Redux/Slices/GPTSlice";
import { languages } from "../../Utils/LanguageConstatnts";
import { SET_LANGUAGES } from "../../Redux/Slices/ConfigSlice";

const Header = () => {
  const userData = useSelector((store) => store?.user);
  const isGPT = useSelector((store) => store?.gpt?.isGPT);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(TOGGLE_IS_GPT_VALUE());
    signOut(auth)
      .then(() => {
        showSuccessToast("Logout Successful");
        navigate("/login");
      })
      .catch((error) => {
        showErrorToast("Logout Failed");
      });
  };

  const selectHandler = (e) => {
    dispatch(SET_LANGUAGES(e?.target?.value));
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full p-2 sm:p-2 z-10 flex items-center justify-between">
        <div>
          <img src={LogoImage} alt="Netflix-Logo" className="w-[150px]" />
        </div>

        <div className="flex items-center gap-4 mr-3">
          {isGPT && (
            <select
              name=""
              id=""
              onChange={(e) => selectHandler(e)}
              className="bg-black text-white py-1 px-2 text-sm rounded-lg"
            >
              {languages.map((language) => (
                <option key={language} value={language.value}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-400 text-slate-800 px-2 py-1 rounded-sm font-semibold cursor-pointer"
            onClick={() => dispatch(TOGGLE_IS_GPT_VALUE())}
          >
            {isGPT ? "Home" : "GPT"}
          </button>
          <h1 className="text-white text-xl">{userData?.displayName}</h1>
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
