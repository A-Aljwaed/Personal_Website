FROM node:23.3.0



# Arbeitsverzeichnis im Container angeben (es ist ein Pfad im Container, nicht auf deinem Host-System)
WORKDIR /app

# package.json und package-lock.json in das Arbeitsverzeichnis kopieren
COPY package.json . 
COPY package-lock.json . 

# Installation der Abhängigkeiten
RUN npm install

# Den Rest der Dateien in das Arbeitsverzeichnis kopieren
COPY . .

# Exponiere Port 3000, damit die React-App zugänglich ist
EXPOSE 3000




CMD ["npm","run","start-watch"]

