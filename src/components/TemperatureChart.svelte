<div class="chart-container">
    <canvas class="temperature-chart" id="myChart" width={50} height={13}></canvas>
</div>

<script lang="ts">
    import type { HourlyForecast } from '../models/HourlyForecast';
    import { createChart } from '../utils/helpers';
    export let hourlyForecast: HourlyForecast[];

    $: if(hourlyForecast.length !== 0) {
        createChart(hourlyForecast);
    }

</script>
    
<style>
    .chart-container{
        display: flex;
        flex-direction: column;
        background: rgba(24,24,27, 0.6);
        padding:20px;
        border-radius: 10px;
        margin: 10px 0;
        border: 1px solid #eee;
        font-size: 25px;
        font-weight: 200;
        width: 200%;
        height: 80%;
        margin-left: 20%;
        margin-top: 200px;
    }

</style>