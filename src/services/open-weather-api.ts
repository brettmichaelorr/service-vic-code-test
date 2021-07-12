import axios, { AxiosResponse } from "axios";
import { OpenWeatherAPIResponse } from "../typings/open-weather-api";

export class OpenWeatherAPI {
  private static API_KEY = "6e99f12862fcd9ab2fb42497ede23dab";

  static async fetchWeatherForCity(
    cityId: number
  ): Promise<AxiosResponse<OpenWeatherAPIResponse>> {
    const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${this.API_KEY}`;
    return axios.get<OpenWeatherAPIResponse>(url);
  }

  static unwrap<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  static generateIconURL(iconPart: string): string {
    return `http://openweathermap.org/img/wn/${iconPart}@2x.png`;
  }
}
