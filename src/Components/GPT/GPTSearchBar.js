import React from "react";
import { useSelector } from "react-redux";
import langObj from "../../Utils/LanguageConstatnts";

const GPTSearchBar = () => {
  const lang = useSelector(store => store?.config?.lang);
  return (
    <div className="w-[500px] bg-black p-4 rounded-lg grid grid-cols-12 gap-3">
      <input type="text" placeholder={langObj[lang]?.gptPlaceholder} className="col-span-9 bg-transparent text-white text-lg placeholder:text-gray-400 outline-none border border-gray-400 px-2 py-1 rounded-md" />
      <button className="col-span-3 bg-redPrimary px-2 py-1 text-sm font-normal text-center rounded-lg cursor-pointer hover:bg-red-700 duration-300">{langObj[lang]?.search}</button>
    </div>
  );
};

export default GPTSearchBar;
