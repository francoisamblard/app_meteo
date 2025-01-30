# Weather App

## What is it?
Une application web simple qui affiche la météo d'une ville en utilisant l'API Weatherstack.

## Features
1. Afficher la météo actuelle d'une ville.
2. Afficher les prévisions météo pour les 3 prochains jours.
3. Sauvegarder des villes favorites.

## How to build
1. Clonez le dépôt : `git clone https://github.com/votre-utilisateur/weather-app.git`
2. Installez les dépendances : `npm install`
3. Construisez l'image Docker : `docker build -t app_meteo .`

## How to test
1. Exécutez les tests : `npm test`

## How to run locally
1. Démarrez l'application : `docker run -p 3000:3000 -e API_KEY=votre-clef-api app_meteo`
2. Ouvrez `http://localhost:3000` dans votre navigateur.

## CI/CD
- Les tests sont exécutés à chaque push ou pull request.
- Les images Docker sont construites et poussées sur Docker Hub à chaque merge ou release.