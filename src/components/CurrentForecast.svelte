<script lang="ts">
    import type { CurrentWeather } from "../models/CurrentWeather";
    import { getDate, getTime } from "../utils/helpers";
    export let currentForecast: CurrentWeather;

    $: currentTime = getTime(currentForecast.dt);
    $: sunriseTime = getTime(currentForecast.sunrise);
    $: sunsetTime = getTime(currentForecast.sunset);

    $: currentDate = getDate(currentForecast.dt);

</script>

<div class="current-info">
    <div class="date-container">
        <div class="time" id="time">
            {currentTime.value} <span id="am-pm">{currentTime.indicator}</span>
        </div>
        <div class="date" id="date">
            {currentDate}
        </div>

        <div class="others" id="current-weather-items">
            <div class="weather-item">
                <div class="temp"><img class="day-night" src="images/humidity.png" title="day icon" alt=icon>Humidity</div>
                <div>{currentForecast.humidity} %</div>
            </div>
            <div class="weather-item">
                <div class="temp"><img class="day-night" src="images/pressure-gauge.png" title="day icon" alt=icon>Pressure</div>
                <div>{currentForecast.pressure/10} kPa</div>
            </div>
            <div class="weather-item">
                <div class="temp"><img class="day-night" src="images/wind-direction.png" title="day icon" alt=icon>Wind Speed</div>
                <div>{Math.round(currentForecast.wind_speed * 3.6)} kph</div>
            </div>
            <div class="weather-item">
                <div class="temp"><img class="day-night" src="images/sunrise.png" title="day icon" alt=icon>Sunrise</div>
                <div>{sunriseTime.value}</div>
            </div>
            <div class="weather-item">
                <div class="temp"><img class="day-night" src="images/sunset.png" title="day icon" alt=icon>Sunset</div>
                <div>{sunsetTime.value}</div>
            </div>
        </div>
    </div>
</div>
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');

    .current-info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .date-container{
        font-weight: 100;
    }
    .date-container .time{
        font-size: 70px;
    }

    .date-container #am-pm{
        font-size: 30px;
    }

    .date-container .date{
        font-size: 30px;
    }

    .current-info .others{
        display: flex;
        flex-direction: column;
        background: rgba(24,24,27, 0.6);
        padding:20px;
        border-radius: 10px;
        margin: 10px 0;
        border: 1px solid #eee;
        font-size: 25px;
        font-weight: 200;
        width: 130%;
    }

    .current-info .others .weather-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .temp{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 200;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .day-night {
        height: 30px;
        margin-right: 10px;
    }
</style>