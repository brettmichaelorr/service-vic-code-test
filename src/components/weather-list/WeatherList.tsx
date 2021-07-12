import * as React from "react";
import { WeatherListState } from "../../typings/interfaces";
import { CityCodes } from "./city-codes";
import { OpenWeatherAPI } from "../../services";
import { WeatherListItem } from "../weather-list-item";
import "./WeatherList.style.scss";
import DisplayToggle from "../display-toggle/DisplayToggle";
import Moment from "moment";

export class WeatherList extends React.Component<{}, WeatherListState> {
  updateTimeout = 10000;

  constructor(props: {}) {
    super(props);
    this.state = {
      cityWeather: [],
      loading: false,
    };
  }

  async componentDidMount() {
    await this.fetchAustralianCityWeather();
    window.setInterval(
      () => this.fetchAustralianCityWeather(),
      this.updateTimeout
    );
  }

  async fetchAustralianCityWeather() {
    this.setState({ loading: true, cityWeather: [] });

    for (const city of Object.values(CityCodes)) {
      try {
        const result = OpenWeatherAPI.unwrap(
          await OpenWeatherAPI.fetchWeatherForCity(city)
        );

        this.setState({
          cityWeather: [...this.state.cityWeather, result],
        });
      } catch (err) {
        this.setState({
          error: err,
        });
      }
    }
    this.setState({ loading: false, lastUpdated: new Date() });
  }

  render() {
    return (
      <div id="weather-list">
        <header>
          ServiceVic Code Test
          <DisplayToggle />
        </header>
        <main>
          {this.state.lastUpdated && (
            <p className="last-updated">
              Last updated on{" "}
              {Moment(this.state.lastUpdated).format(
                "dddd, MMMM Do YYYY, h:mm:ss a"
              )}
              . Updates every {this.updateTimeout / 1000} seconds.
            </p>
          )}
          {this.state.loading ? (
            <div className="lds-loader">
              <div className="lds-dual-ring"></div>
            </div>
          ) : (
            <>
              <div className="list">
                {this.state.cityWeather.map((weather, key) => (
                  <WeatherListItem key={key} weather={weather} />
                ))}
              </div>
              {this.state.error && <p>{this.state.error}</p>}
            </>
          )}
        </main>
        <footer>
          <p>
            This code test is <strong>Brett Orr</strong>'s application for the
            VPS6 and VPS5 roles at ServiceVic.
          </p>
        </footer>
      </div>
    );
  }
}
