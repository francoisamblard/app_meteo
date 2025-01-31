// Clé API (à passer via une variable d'environnement)
const apiKey = process.env.API_KEY;

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = process.env.API_KEY || 'f1283f29f24a6fb386f194344768db66'; // Utilisez votre clé API
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

// Fonction pour sauvegarder une ville favorite
function saveFavorite() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(city)) {
            favorites.push(city);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            displayFavorites();
        }
    }
}

// Fonction pour afficher les villes favorites
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = favorites.map(city => `<li>${city}</li>`).join('');
}

// Afficher les villes favorites au chargement de la page
displayFavorites();