import { OpenWeatherAPIResponse } from "./open-weather-api";

export interface WeatherListState {
  cityWeather: OpenWeatherAPIResponse[];
  loading: boolean;
  error?: string[];
  lastUpdated?: Date;
}

export type TemperatureDisplay = "C" | "F";
export interface DataContextType {
  degreesDisplay: TemperatureDisplay;
  changeDegrees: (val: TemperatureDisplay) => void;
}
