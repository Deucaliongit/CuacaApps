import React from "react";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloud,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

const Form = ({ inputValue, onInput, onSubmit, animate }) => {
  return (
    <form
      className={`${
        animate ? "animate-shake" : "animate-none"
      } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-lg mb-8`}
    >
      <div className="h-full relative flex justify-between items-center p-2">
        <input
          onChange={onInput}
          value={inputValue}
          className="flex flex-1 bg-transparent outline-none text-white pl-6 h-full"
          type="text"
          placeholder="Search by city or Country"
        />
        <button onClick={onSubmit} className="px-2">
          <IoMdSearch
            className="cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-400 hover:text-white text-gray-400"
            size={30}
          />
        </button>
      </div>
    </form>
  );
};

export default Form;
