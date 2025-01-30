test('Affiche la météo actuelle pour une ville', async () => {
    const weatherData = await fetchWeather('Paris');
    expect(weatherData).toHaveProperty('temperature');
    expect(weatherData).toHaveProperty('weather_descriptions');
});