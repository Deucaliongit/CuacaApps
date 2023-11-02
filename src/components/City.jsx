import React from "react";

const City = ({
  iconWeather,
  dataName,
  dataCounytry,
  dataDateUTC,
  dataDateMonth,
  dataDateYear,
}) => {
  return (
    <div className="w-full flex items-center gap-x-5">
      <div>
        <img src={iconWeather} alt="img" />
      </div>
      <div>
        <div className="text-xl font-semibold">
          {dataName}, {dataCounytry}
        </div>
        <div>
          {dataDateUTC}/{dataDateMonth}/{dataDateYear}
        </div>
      </div>
    </div>
  );
};

export default City;
