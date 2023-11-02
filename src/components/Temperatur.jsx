import React from "react";

const Temperatur = ({ iconTemp, dataDesc, dataTemp }) => {
  return (
    <div className="my-8">
      <div className="flex justify-center items-center">
        <div className="text-8xl leading-none font-semibold">
          {parseInt(dataTemp)}
        </div>
        <div className="text-4xl">{iconTemp}</div>
      </div>
      <div className="capitalize text-center">{dataDesc}</div>
    </div>
  );
};

export default Temperatur;
