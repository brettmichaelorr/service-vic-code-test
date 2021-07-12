import * as React from "react";
import "./style/main.scss";
import { WeatherList } from "./components/weather-list/WeatherList";
import { DataProvider } from "./StateManagement";

const App = () => (
  <DataProvider>
    <div className="App">
      <WeatherList />
    </div>
  </DataProvider>
);

export default App;
