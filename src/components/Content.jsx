import React from "react";
import ErrorBox from "./ErrorBox";

const Content = (props) => {
  const {
    iconWeather,
    dataName,
    dataCounyty,
    dataDateUTC,
    dataDateMonth,
    dataDateYear,
    dataTemp,
    iconTemp,
    dataDesc,
    iconEye,
    dataVisibility,
    iconFeels,
    dataFeels,
    iconHumidity,
    dataHumidity,
    iconSpeed,
    dataSpeed,
  } = props;
  return (
    <div>
      <div className="w-full flex items-center gap-x-5">
        <div>
          <img src={iconWeather} alt="img" />
        </div>
        <div>
          <div className="text-xl font-semibold">
            {dataName}, {dataCounyty}
          </div>
          <div>
            {dataDateUTC}/{dataDateMonth}/{dataDateYear}
          </div>
        </div>
      </div>
      <div className="my-8">
        <div className="flex justify-center items-center">
          <div className="text-8xl leading-none font-semibold">
            {parseInt(dataTemp)}
          </div>
          <div className="text-4xl">{iconTemp}</div>
        </div>
        <div className="capitalize text-center">{dataDesc}</div>
      </div>
      <div className="max-w-[378px] flex flex-col gap-y-6 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <div>{iconEye}</div>
            <div className="text-sm">
              Visibility
              <span className="ml-2">{dataVisibility} km</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>{iconFeels}</div>
            <div className="text-sm flex">
              Feels Like
              <div className="flex">
                <span className="ml-2">{parseInt(dataFeels)}</span>
                {iconTemp}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <div>{iconHumidity}</div>
            <div className="text-sm">
              Humidity
              <span className="ml-2">{dataHumidity} %</span>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div>{iconSpeed}</div>
            <div className="text-sm flex">
              Wind
              <span className="ml-2">{dataSpeed} m/s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
