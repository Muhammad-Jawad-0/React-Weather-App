import { Search, MapPin, Wind } from "react-feather";
import "./App.css";
import getWeather from "./Api/api";
import { useState } from "react";
import dateFormat from "dateformat";
import ERROR from "./assets/error2.png";
import ERROR1 from "./assets/error1.png";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  };

  const renderDate = () => {
    let CurrentDate = new Date();
    return dateFormat(CurrentDate, "dddd, mmmm dS, h:MM TT");
  };

  return (
    <>
      <div className="app">
        <h1>Weather App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City Name"
          />
          <button onClick={() => getWeatherByCity()}>
            <Search></Search>
          </button>
        </div>

        {/* {weather && weather.weather && (
          <div className="content">
            <div className="location d-flex">
              <MapPin></MapPin>
              <h2>
                {weather.name} <span>({weather.sys.country})</span>
              </h2>
            </div>
            <p className="datetext">{renderDate()}</p>

            <div className="weatherdesc d-flex flex-c">
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
              <h3>{weather.weather[0].description}</h3>
            </div>

            <div className="tempstats d-flex flex-c">
              <h1>
                {weather.main.temp} <span>&deg;C</span>
              </h1>
              <h3>
                Feels Like {weather.main.feels_like} <span>&deg;C</span>
              </h3>
            </div>

            <div className="windstats d-flex">
              <Wind></Wind>
              <h3>Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;</h3>
            </div>
          </div>
        )}

        {!weather.weather && (
          <div className="content">
            <h4>No Data Found !</h4>
            <img src={ERROR1} alt="" />
          </div>
        )} */}

        {weather && weather.weather ? (
          <div className="content">
            <div className="location d-flex">
              <MapPin></MapPin>
              <h2>
                {weather.name} <span>({weather.sys.country})</span>
              </h2>
            </div>
            <p className="datetext">{renderDate()}</p>

            <div className="weatherdesc d-flex flex-c">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
              <h3>{weather.weather[0].description}</h3>
            </div>

            <div className="tempstats d-flex flex-c">
              <h1>
                {weather.main.temp} <span>&deg;C</span>
              </h1>
              <h3>
                Feels Like {weather.main.feels_like} <span>&deg;C</span>
              </h3>
            </div>

            <div className="windstats d-flex">
              <Wind></Wind>
              <h3>
                Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;
              </h3>
            </div>
          </div>
        )
        :
        !weather.weather && (
          <div className="content">
            <h4>No Data Found !</h4>
            <img src={ERROR1} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
