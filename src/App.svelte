<script lang="ts">
	import DayCard from './components/DayCard.svelte';
	import { onDestroy, onMount } from "svelte";
	import { getWeatherData } from './services/forecastService';
	import { apiData } from './store/store';
	import CurrentForecast from './components/CurrentForecast.svelte';
	import TemperatureChart from './components/TemperatureChart.svelte';

	onMount(async() => {
		await getWeatherData();
	});

</script>

<main>
	<nav class="nav-bar">
        <h1>
            <img class="logo" src="images/weather_logo.svg" title="logo" alt="logo">
            WeatherApp
        </h1>
        <div class="place-container">
			<img class="location" src="images/white-location.png" title="location" alt="location">
            <div class="time-zone" id="time-zone">{$apiData.timezone}</div>
        </div>
    </nav>
	<div class="details-container">
		<CurrentForecast currentForecast={$apiData.current}></CurrentForecast>
		<TemperatureChart hourlyForecast={$apiData.hourly}></TemperatureChart>
	</div>
	<div class="forecast-container">
		{#if $apiData.daily.length == 0}
			<h1>Loading...</h1>
		{:else}
			{#each $apiData.daily as day}
				<DayCard dayForecast={day}></DayCard>
			{/each}
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
    	flex-direction: column;
    	background-image: url('/images/weather_bg.jpg');
    	font-family: 'Poppins', sans-serif;
		height: 100%;
		width: 100%;
	}

	.nav-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		display: flex;
		align-items: center;
		color: #eee;
		font-size: 30px;
	}	

	.logo {
		height: 60px;
		margin: 20px;
	}

	.location {
		height: 40px;
		margin-right: 15px;
		color: #eee;
	}

	.details-container{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 100px;
		color:#fff;
		width: 100%;
		height: 50%;
	}

	.place-container{
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: end;
		color: #eee;
		margin: 20px;
	}

	.place-container .time-zone{
		font-size: 30px;
		font-weight: 100;
	}

	.place-container .country{
		font-size: 12px;
		font-weight: 700;
	}

	.forecast-container {
		height: 300px;
		background: rgba(24,24,27,0.6);
		position: fixed;
		bottom: 0;
		display: flex;
		color:white;
		width: 100%;
		border-top: 5px solid rgb(255, 250, 119);;
		align-items: center;
		justify-content: center;
		overflow-y: hidden;
	}

</style>