import type { CurrentWeather } from "./CurrentWeather";
import type { DailyForecast } from "./DailyForecast";
import type { HourlyForecast } from "./HourlyForecast";

export interface Forecast {
    alerts: [],
    current: CurrentWeather,
    daily: DailyForecast[],
    hourly: HourlyForecast[],
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number
}