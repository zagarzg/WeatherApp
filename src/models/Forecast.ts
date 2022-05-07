import type { CurrentWeather } from "./CurrentWeather";
import type { DailyForecast } from "./DailyForecast";

export interface Forecast {
    alerts: [],
    current: CurrentWeather,
    daily: DailyForecast[],
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number
}