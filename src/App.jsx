import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";
import Bottom from "./components/Bottom";
import bg1 from "../src/assets/bg11.webp";
import rainy from "./assets/rainy.jpg";
import claoudy from "./assets/claoudy.jpg";
import sunset from "./assets/sunset1.jpg";

import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloud,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";

import {
  BsCloudHazeFill,
  BsFillCloudHaze2Fill,
  BsEye,
  BsWater,
  BsThermometer,
  BsCloudDrizzleFill,
  BsWind,
} from "react-icons/bs";

import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";
import Loading from "./components/Loading";
import BackgroundWeather from "./components/BackgroundWeather";
import { getDataWeather } from "./utils/Api";

function App() {
  const APIKey = "a95b2a3164237d4e5692f3d006484d8b";

  const [data, setDataWeather] = useState(null);
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const [location, setLocation] = useState("jakarta");
  const [inputValue, setInputValue] = useState("");
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iconUrl, setIconUrl] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const makeIconUrl = (iconUrl) =>
    `https://openweathermap.org/img/wn/${iconUrl}@2x.png`;

  useEffect(() => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=metric`;
    setTimeout(() => {
      axios.get(url).then((res) => {
        setDataWeather(res.data);
        setLoading(false);
      });
    }, 1000);
  }, [location]);

  console.log(data);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(inputValue);
    if (inputValue !== "") {
      setLocation(inputValue);
    }

    if (inputValue === "") {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    const input = document.querySelector("input");

    input.value = "";
    e.preventDefault();
  };

  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     const fetchWeatherData = async () => {
  //       try {
  //         const data = await getDataWeather(location);
  //         setDataWeather(data);
  //         setLoading(false);
  //         setShouldFetchData(false);
  //       } catch (err) {
  //         setLoading(false);
  //         setErrMsg(err);
  //       }
  //     };
  //     fetchWeatherData();
  //   }, 1500);
  // }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrMsg("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [errMsg]);

  if (!data) {
    return (
      <div>
        <div>
          <BackgroundWeather bg={bg1} />
          <div className="w-full h-screen flex items-center justify-center">
            <Loading />
          </div>
        </div>
      </div>
    );
  }

  const date = new Date();
  return (
    <div className="w-full h-screen">
      <BackgroundWeather bg={bg1} />
      {data && (
        <div className="w-full h-screen absolute top-0 left-0 bg-black/30">
          <div className="w-full h-screen absolute z-10 flex flex-col items-center justify-center px-4 md:px-0">
            <form
              className={`${
                animate ? "animate-shake" : "animate-none"
              }h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-lg mb-8`}
            >
              <div className="h-full relative flex justify-between items-center p-2">
                <input
                  onChange={(e) => handleInput(e)}
                  className="flex flex-1 bg-transparent outline-none text-white pl-6 h-full"
                  type="text"
                  placeholder="Search by city or Country"
                />

                <button onClick={(e) => handleSubmit(e)} className="px-2">
                  <IoMdSearch
                    className="cursor-pointer hover:scale-110 ease-in duration-300 hover:shadow-gray-400 hover:text-white text-gray-400"
                    size={30}
                  />
                </button>
              </div>
            </form>
            <div className="w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-lg rounded-lg py-12 px-6">
              {loading ? (
                <div className="w-full h-full flex justify-center items-center">
                  <ImSpinner8 size={40} className="text-5xl animate-spin" />
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-x-5">
                    <div>
                      <img src={makeIconUrl(data.weather[0].icon)} alt="img" />
                    </div>
                    <div>
                      <div className="text-xl font-semibold">
                        {data.name}, {data.sys.country}
                      </div>
                      <div>
                        {date.getUTCDate()}/{date.getMonth()}/
                        {date.getUTCFullYear()}
                      </div>
                    </div>
                  </div>
                  <div className="my-20">
                    <div className="flex justify-center items-center">
                      <div className="text-8xl leading-none font-light">
                        {parseInt(data.main.temp)}
                      </div>
                      <div className="text-4xl">
                        <TbTemperatureCelsius />
                      </div>
                    </div>
                    <div className="capitalize text-center">
                      {data.description}
                    </div>
                  </div>
                  <div className="max-w-[378px] flex flex-col gap-y-6 mx-auto">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-2">
                        <div>
                          <BsEye />
                        </div>
                        <div className="text-sm">
                          Visibility
                          <span className="ml-2">
                            {data.visibility / 1000} km
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <div>
                          <BsThermometer />
                        </div>
                        <div className="text-sm flex">
                          Feels Like
                          <div className="flex">
                            <span className="ml-2">
                              {parseInt(data.main.feels_like)}
                            </span>
                            <TbTemperatureCelsius />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-2">
                        <div>
                          <BsWater />
                        </div>
                        <div className="text-sm">
                          Humidity
                          <span className="ml-2">{data.main.humidity} %</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <div>
                          <BsWind />
                        </div>
                        <div className="text-sm flex">
                          Wind
                          <span className="ml-2">{data.wind.speed} m/s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <Header />
            <Content />
            <Bottom /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
