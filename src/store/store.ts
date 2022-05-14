import { writable } from 'svelte/store';
import type { Forecast } from '../models/Forecast';

export const apiData = writable<Forecast>({
    alerts: [],
    current: {
        clouds: 0,
        dew_point: 0,
        dt: 0,
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        sunrise: 0,
        sunset: 0,
        temp: 0,
        uvi: 0,
        visibility: 0,
        weather: [{
            description: '',
            icon: '',
            id: 0,
            main: 'string',
        }],
        wind_deg: 0,
        wind_speed: 0,
    },
    daily: [],
    hourly: [],
    lat: 0,
    lon: 0,
    timezone: '',
    timezone_offset: 0
});

