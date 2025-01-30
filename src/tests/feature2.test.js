test('Affiche les prévisions météo pour les 3 prochains jours', async () => {
    const forecastData = await fetchForecast('Paris');
    expect(forecastData.length).toBe(3); // 3 jours de prévisions
});