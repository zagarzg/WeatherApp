import type { HourlyForecast } from "../models/HourlyForecast";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export function getTime(dateInUnix: number) {
    let date = new Date(dateInUnix*1000);
    let dateString = date.toLocaleTimeString();
    let myArray = dateString.split(" ");
    const dateArray = dateString.split(":");

    const time = { value: dateArray[0] + ":" + dateArray[1], indicator: myArray[1]}
    return time;
}

export function getDate(dateInUnix: number){
    let date = new Date(dateInUnix*1000)
    let formatedDate = date.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric'});

    return formatedDate;
}

export function mapLabelsAndData(hourlyArray: HourlyForecast[]){
    let newArray= [];

    hourlyArray.forEach( (element: HourlyForecast) => {
        let date = new Date(element.dt*1000);
        let time = date.toLocaleTimeString('hr', {hour: '2-digit', minute:'2-digit'});
        let temp = Math.round(element.temp);
        newArray.push({ time, temp });
    });

    return newArray;
}

export function createChart(hourlyForecast: HourlyForecast[]) {

    let data: any;
    let config: any;

    let labels: string[];
    let temperatures: string[];

    if(hourlyForecast) {
            labels = mapLabelsAndData(hourlyForecast).map((element) => element.time);
            temperatures = mapLabelsAndData(hourlyForecast).map((element) => element.temp);

            data = {
                labels: labels,
                datasets: [{
                    data: temperatures,
                    label: "Temperatures",
                    fill: true,
                    backgroundColor: 'rgba(0, 157, 255, 0.6)'
                }]
            }

            config = {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    borderColor: 'rgb(255,250,119)',
                    plugins: {
                        legend: {
                            labels: {
                                color: 'rgb(255,250,119)',
                            }
                        },
                        title: {
                            display: true,
                            text: 'Temperatures for next 24hours',
                            color: 'rgb(255,250,119)',
                            fullSize: false,
                            padding: 0,
                            align: 'start'
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                borderColor: 'rgba(31, 210, 237, 0.3)',
                                color: ['rgba(31, 210, 237, 0.3)'],
                            },
                            ticks: {
                                color: "rgb(255,250,119)",
                                fontSize: 18,
                                beginAtZero: true
                            }
                        },
                        y: {
                            grid: {
                                borderColor: 'rgba(31, 210, 237, 0.3)',
                                color: ['rgba(31, 210, 237, 0.3)']
                            },
                            ticks: {
                                color: "rgb(255,250,119)",
                                fontSize: 18,
                                beginAtZero: true,
                                callback: function(value, index, ticks) {
                                    return value + '°C';
                                }
                            }
                        }
                    }
                }
            }

            const canvas = <HTMLCanvasElement> document.getElementById("myChart");
            const ctx = canvas.getContext("2d");

            return new Chart(ctx,config)
}}

