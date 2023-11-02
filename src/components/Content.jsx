import React from "react";
import City from "./City";
import Temperatur from "./Temperatur";

const Content = (props) => {
  const {
    iconWeather,
    dataName,
    dataCounytry,
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
      <City
        iconWeather={iconWeather}
        dataName={dataName}
        dataCounytry={dataCounytry}
        dataDateUTC={dataDateUTC}
        dataDateMonth={dataDateMonth}
        dataDateYear={dataDateYear}
      />
      <Temperatur dataTemp={dataTemp} dataDesc={dataDesc} iconTemp={iconTemp} />
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
