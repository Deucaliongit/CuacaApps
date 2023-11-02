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
import Form from "./components/Form";

function App() {
  const APIKey = "a95b2a3164237d4e5692f3d006484d8b";

  const [data, setDataWeather] = useState(null);
  const [shouldFetchData, setShouldFetchData] = useState(true);
  const [location, setLocation] = useState("jakarta");
  const [inputValue, setInputValue] = useState("");
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [iconWeather, setIconWeather] = useState("");

  const makeIconUrl = (iconUrl) =>
    `https://openweathermap.org/img/wn/${iconUrl}@2x.png`;

  useEffect(() => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=metric`;

    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setDataWeather(res.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setLoading(false);
        setErrMsg(err);
      });
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrMsg;
    }, 2000);
    return () => clearTimeout(timer);
  }, [errMsg]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log(inputValue);
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
          <div className="w-full h-screen absolute top-0 left-0 bg-black/30 flex justify-center items-center">
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
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30">
        <div className="w-full h-screen absolute z-10 flex flex-col items-center justify-center px-4 md:px-0">
          {errMsg && (
            <div className="w-full max-w-[90vw] lg:max-w-[450px] lg-top-10 p-2 top-2 bg-pink-50 absolute border-b-4 border-red-400 mb-10 text-center">{`${errMsg.response.data.message}`}</div>
          )}
          <Form
            inputValue={inputValue}
            onInput={handleInput}
            onSubmit={handleSubmit}
            animate={animate}
          />
          <div className="w-full bg-black/20 max-w-[450px] min-h-[384px] text-white backdrop-blur-lg rounded-lg py-12 px-6">
            {loading ? (
              <Loading />
            ) : (
              <Content
                iconWeather={makeIconUrl(data.weather[0].icon)}
                dataName={data.name}
                dataCounyty={data.sys.country}
                dataDateUTC={date.getUTCDate()}
                dataDateMonth={date.getMonth()}
                dataDateYear={date.getUTCFullYear()}
                dataTemp={data.main.temp}
                iconTemp={<TbTemperatureCelsius />}
                dataDesc={data.description}
                iconEye={BsEye}
                dataVisibility={data.visibility / 1000}
                iconFeels={<BsThermometer />}
                dataFeels={data.main.feels_like}
                iconHumidity={<BsWater />}
                dataHumidity={data.main.humidity}
                iconSpeed={<BsWind />}
                dataSpeed={data.wind.speed}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
