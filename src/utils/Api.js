const API_KEY = "a95b2a3164237d4e5692f3d006484d8b";

const makeIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getDataWeather = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
    visibility,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIconUrl(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    visibility,
  };
};

export { getDataWeather };
