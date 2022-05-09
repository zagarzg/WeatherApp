<script lang="ts">
import type { DailyForecast } from "../models/DailyForecast";
export let dayForecast: DailyForecast;

function getDayName(forecast: DailyForecast) {
    const dayOfWeek = new Date(forecast.dt*1000);
    return dayOfWeek.toLocaleString('en-us', {  weekday: 'long' });
}

const day = getDayName(dayForecast);
</script>
{#if dayForecast}
<div class="weather-forecast-item">
    <div class="day">{day}</div>
    <img src={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`} alt="weather icon" class="w-icon">
    <div class="temp">
        <img class="day-night" src="images/sun.png" title="day icon" alt="temp icon">
        {Math.round(dayForecast.temp.day)}&#176; C</div>
    <div class="temp">
        <img class="day-night" src="images/night.png" title="day icon" alt="temp icon">
        {Math.round(dayForecast.temp.night)}&#176; C</div>
</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');

	.day-night {
        height: 30px;
        margin-right: 10px;
    }

    .weather-forecast-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        /* border: 3px solid rgb(255, 250, 119); */
        padding-bottom: 15px;
        border-radius: 10px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        background: rgba(0,0,0,0.2);
        width: 200px;
    }

    .weather-forecast-item .day{
        width: 100%;
        padding: 5px 15px;
        background: rgb(0, 157, 255);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        text-align: center;
        font-size: 20px;
    }

    .weather-forecast-item .temp{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 200;
        font-size: 20px;
        margin-bottom: 10px;
    }
</style>