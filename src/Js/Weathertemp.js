import React from "react";
import { useEffect, useState } from "react";
import axios from "./weather";

function Weathertemp() {
  const [weatherCurrent, setWeather] = useState([]);

  const API_WEATHER_KEY = "5b7cf8b564a6667d8ab3c45c36464d96";
  const lang = "en";
  const units = "metric";
  const weatherRequest = `/data/2.5/onecall?lat=40.776676&lon=-73.971321&appid=${API_WEATHER_KEY}&units=${units}&lang=${lang}`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(weatherRequest);
      console.log(request)
      setWeather(request.data);
      return request;
    }
    fetchData();
  });

  const weatherChannel = () => {
    let day_temp = weatherCurrent.daily?.[0].temp.max
      ? Math.floor(weatherCurrent.daily?.[0].temp.max)
      : weatherCurrent.daily?.[0].temp.max;
    let night_temp = weatherCurrent.daily?.[0].temp.min
      ? Math.floor(weatherCurrent.daily?.[0].temp.min)
      : weatherCurrent.daily?.[0].temp.min;
    let icon = weatherCurrent.daily?.[0].weather[0].icon;
    let hourly_temp = weatherCurrent.hourly?.[0].feels_like
      ? Math.floor(weatherCurrent.hourly?.[0].feels_like)
      : weatherCurrent.hourly?.[0].feels_like;

    return (
      <div className="weather">
        <div className="weatherDaily">
          <div className="all_day">
            <img
              src={`http://openweathermap.org/img/wn/${icon ? icon : ""}.png`}
              alt=""
            />
            <p>{hourly_temp}°C</p>
          </div>
          <div className="dailyTemp">
            <p>{day_temp}°</p>
            <p>{night_temp}°</p>
          </div>
        </div>
        <p>{weatherCurrent.timezone}</p>
      </div>
    );
    // });
  };

  return weatherChannel();
}

export default Weathertemp;
