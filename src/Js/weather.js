import axios from "axios";

//https://api.openweathermap.org/data/2.5/weather?lat=40.730610&lon=-73.935242&appid=39f0a180b0ffa917968ef3a74f562dce
//39f0a180b0ffa917968ef3a74f562dce

const axiosWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
});

export default axiosWeather;
