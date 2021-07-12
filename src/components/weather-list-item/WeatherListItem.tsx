import * as React from "react";
import { OpenWeatherAPIResponse } from "../../typings/open-weather-api";
import { OpenWeatherAPI } from "../../services";
import "./WeatherListItem.style.scss";
import { useContext } from "react";
import { DataContext } from "../../StateManagement";
import { TemperatureDisplay } from "../../typings/interfaces";

export const WeatherListItem = (props: { weather: OpenWeatherAPIResponse }) => {
  const details = props.weather.weather[0];
  const { degreesDisplay } = useContext(DataContext);

  return (
    <div className="weather-list-item">
      <div className="main">
        <span className="city-name">{props.weather.name}</span>
        <div className="temperature">
          <span className="current">
            {ConvertTemp(props.weather.main.temp, degreesDisplay)}&#xb0;
            {degreesDisplay}
          </span>
          <div className="daily-range">
            <span className="min">
              {ConvertTemp(props.weather.main.temp_min, degreesDisplay)}&#xb0;
              {degreesDisplay}
            </span>
            &nbsp;&mdash;&nbsp;
            <span className="max">
              {ConvertTemp(props.weather.main.temp_max, degreesDisplay)}&#xb0;
              {degreesDisplay}
            </span>
          </div>
        </div>
      </div>

      <div className="pictographic">
        <img
          src={OpenWeatherAPI.generateIconURL(details.icon)}
          alt={details.description}
        />
        <span>{details.main}</span>
      </div>
    </div>
  );
};

const ConvertTemp = (
  temperature: number,
  format: TemperatureDisplay
): string => {
  if (format === "C") {
    return (temperature - 273.15).toFixed(1);
  } else {
    return ((temperature - 273.15) * 1.8 + 32).toFixed(0);
  }
};
