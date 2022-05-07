import type { WeatherDetails } from "./WeatherDetails";

export interface DailyForecast {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moonphase: number;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    };
    feels_like: {};
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherDetails[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;
}