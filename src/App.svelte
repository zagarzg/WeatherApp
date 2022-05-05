<script lang="ts">
</script>

<main>
	<nav class="nav-bar">
        <h1>
            <img class="logo" src="images/weather_logo.svg" title="logo" alt="logo">
            WeatherApp
        </h1>
        <div class="place-container">
            <div class="time-zone" id="time-zone">Asia/Kolkata</div>
            <div id="country" class="country">IN</div>
        </div>
    </nav>
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
</style>