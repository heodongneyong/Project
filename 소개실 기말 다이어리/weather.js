const apiKey = '9530833dbd615d17b16442941e325b65';  // Enter your OpenWeatherMap API key here

document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

document.getElementById('save-btn').addEventListener('click', function() {
    const entryText = document.getElementById('entry-text').value;
    const entryDate = document.getElementById('entry-date').value;
    if (entryText && entryDate) {
        saveDiaryEntry(entryDate, entryText);
        document.getElementById('entry-text').value = ''; // Clear the text area
        document.getElementById('entry-date').value = ''; // Clear the date input
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weather-display');
            if (data.cod === 200) {
                const weatherInfo = `
                    <p>City: ${data.name}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                weatherDisplay.innerHTML = weatherInfo;
            } else {
                weatherDisplay.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function saveDiaryEntry(date, text) {
    const diaryList = document.getElementById('diary-list');
    const entryDiv = document.createElement('div');
    entryDiv.className = 'diary-entry';
    entryDiv.innerHTML = `
        <p><strong>${date}</strong></p>
        <p>${text}</p>
        <button onclick="deleteEntry(this)">Delete</button>
    `;
    diaryList.appendChild(entryDiv);
}

function deleteEntry(button) {
    const entryDiv = button.parentNode;
    entryDiv.parentNode.removeChild(entryDiv);
}
