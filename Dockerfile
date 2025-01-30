# Utiliser une image Node.js comme base
FROM node:16-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application
COPY package.json .
COPY src/ ./src/

# Installer les dépendances
RUN npm install

# Exposer le port 3000
EXPOSE 3000

# Démarrer l'application
CMD ["npx", "serve", "src"]