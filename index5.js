const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const { name } = data;
                const { temp, humidity } = data.main;
                const { description } = data.weather[0];
                const { speed } = data.wind;

                document.getElementById('city-name').textContent = name;
                document.getElementById('temp').textContent = `Temperature: ${temp}°C`;
                document.getElementById('description').textContent = `Condition: ${description}`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById('wind').textContent = `Wind Speed: ${speed} m/s`;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => alert('Error fetching data!'));
}
