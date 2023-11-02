import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ImSpinner8 size={40} className="text-5xl animate-spin" />
    </div>
  );
};

export default Loading;
