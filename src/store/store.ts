import { writable } from 'svelte/store';
import type { Forecast } from '../models/Forecast';

export const apiData = writable<Forecast>({
    alerts: [],
    current: {},
    daily: [],
    lat: 0,
    lon: 0,
    timezone: '',
    timezone_offset: 0
});

