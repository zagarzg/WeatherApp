import type { WeatherDetails } from "./WeatherDetails";

export interface HourlyForecast {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: {};
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: WeatherDetails[];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
}