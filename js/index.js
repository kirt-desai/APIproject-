document.addEventListener('DOMContentLoaded', () => {
    fetchCurrentWeather();
});

const apiKey = 'your_open-meteo_api_key';
const baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true';

function fetchCurrentWeather() {
    fetch(`${baseUrl}&current_weather=true`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayCurrentWeather(data.current_weather);
        })
        .catch(error => console.error('Error fetching current weather:', error));
}

function fetchWeatherForecast() {
    fetch(`${baseUrl}&daily=temperature_2m_max,temperature_2m_min`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeatherForecast(data.daily);
        })
        .catch(error => console.error('Error fetching weather forecast:', error));
}

function displayCurrentWeather(data) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="current-weather">
            <h2>Current Weather</h2>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Condition: ${data.weathercode}</p>
        </div>
    `;
}

function displayWeatherForecast(data) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="weather-forecast">
            <h2>Weather Forecast</h2>
            ${data.time.map((date, index) => `
                <div class="forecast-item">
                    <h3>${date}</h3>
                    <p>Max Temperature: ${data.temperature_2m_max[index]}°C</p>
                    <p>Min Temperature: ${data.temperature_2m_min[index]}°C</p>
                </div>
            `).join('')}
        </div>
    `;
}
