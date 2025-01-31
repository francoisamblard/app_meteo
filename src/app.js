// Clé API
const apiKey = 'f1283f29f24a6fb386f194344768db66';

// Fonction pour récupérer la météo
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            document.getElementById('weatherResult').innerHTML = `<p>Erreur: ${data.error.info}</p>`;
        } else {
            const weather = data.current;
            document.getElementById('weatherResult').innerHTML = `
                <h2>Météo à ${data.location.name}, ${data.location.country}</h2>
                <p>Température: ${weather.temperature}°C</p>
                <p>Conditions: ${weather.weather_descriptions[0]}</p>
                <p>Humidité: ${weather.humidity}%</p>
                <p>Vitesse du vent: ${weather.wind_speed} km/h</p>
            `;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Erreur lors de la récupération des données météo.</p>`;
        console.error('Erreur:', error);
    }
}