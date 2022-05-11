import { get } from 'svelte/store';
import { apiData } from '../store/store';

export async function getWeatherData() {
		navigator.geolocation.getCurrentPosition(async (success) => {
        const { latitude, longitude } = success.coords;

        const ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${process.env.API_KEY}`;
        const response = await fetch(ENDPOINT);
        let data = await response.json()
        data.daily = data.daily.slice(0, 7);
        data.hourly = data.hourly.slice(0,24);

        apiData.set(data);
    });
}
