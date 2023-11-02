import React from "react";

const ErrorBox = ({ errData }) => {
  console.log(errData);
  return (
    <div>
      {errMsg && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] lg-top-10 p-2 top-2 bg-pink-50 absolute border-b-4 border-red-400 mb-10 text-center">
          {errData}
        </div>
      )}
    </div>
  );
};

export default ErrorBox;
