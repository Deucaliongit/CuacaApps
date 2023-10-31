import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Loading = () => {
  return (
    <div>
      <div>
        <ImSpinner8 className="text-5xl text-white animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
