import React from "react";

const BackgroundWeather = ({ bg, alt }) => {
  return (
    <div>
      <img
        src={bg}
        alt="Background Image"
        className="object-cover h-screen w-full absolute z-0 "
      />
    </div>
  );
};

export default BackgroundWeather;
