<script lang="ts">
	import Day from './components/Day.svelte';
	import { onMount } from "svelte";
	import { getWeatherData } from './services/forecastService';
	import { apiData } from './store/store';

	onMount(async() => {
		await getWeatherData();
	})

</script>

<main>
	<nav class="nav-bar">
        <h1>
            <img class="logo" src="images/weather_logo.svg" title="logo" alt="logo">
            WeatherApp
        </h1>
        <div class="place-container">
            <div class="time-zone" id="time-zone">{$apiData.timezone}</div>
            <div id="country" class="country">IN</div>
        </div>
    </nav>
	<div class="details-container"></div>
	<div class="forecast-container">
		{#if $apiData}
			{#each $apiData.daily as day}
				<Day dayForecast={day}></Day>
			{/each}
		{/if}
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap');

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

	.place-container{
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

	.details-container{
		height: 100%;
		width: 100%;
	}
</style>