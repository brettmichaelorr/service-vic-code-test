export class OpenWeatherAPI {
  private API_KEY = "6e99f12862fcd9ab2fb42497ede23dab";

  generateIconURL(iconPart: string): string {
    return `http://openweathermap.org/img/wn/${iconPart}@2x.png`;
  }
}
