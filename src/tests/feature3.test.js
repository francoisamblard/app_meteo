test('Sauvegarde et affiche les villes favorites', () => {
    saveFavoriteCity('Paris');
    saveFavoriteCity('Lyon');
    const favorites = getFavoriteCities();
    expect(favorites).toContain('Paris');
    expect(favorites).toContain('Lyon');
});