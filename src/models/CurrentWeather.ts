import type { WeatherDetails } from "./WeatherDetails";

export interface CurrentWeather {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    temp: number,
    uvi: number,
    visibility: number,
    weather: WeatherDetails[],
    wind_deg: number,
    wind_speed: number,
}