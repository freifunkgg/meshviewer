# Funktion dieses Projektes
Groß-Gerauer Freifunkknoten werden eigentlich auf der FFKT-Map gelistet.
Dieser Meshviewer-Fork nutzt die Kitzinger [`meshviewer.json`](https://map.freifunk-kitzingen.de/data/meshviewer.json) und selektiert anhand der enthaltenen Domaininformationen die Groß-Gerauer Knoten. Nur diese werden dann angezeigt.

### Demo
Standalone: https://freifunkgg.github.io/meshviewer/

### Eine eigene Groß-Gerauer Map selber mit Docker hosten
Einfach das hier ausführen:

```
docker run --name meshviewer-server-gg \
         --detach \
         --restart always\
         -p 8080:80 \
         --env MeshviewerRepo="https://github.com/freifunkgg/meshviewer" \
         --env LoopHookCMD="curl --create-dirs --insecure\
                            -o /var/www/html/data/meshviewer.json https://map.freifunk-kitzingen.de/data/meshviewer.json" \
         ffmd/meshviewer-server:latest
```
Danach kann eine eigene Groß-Gerauer Map auf dem eigenen Server (oder sogar PC) über http://Servername:8080 aufgerufen (http://localhost:8080) werden.

Das ganze basiert auf dem generischer Dockerfile "All in One Meshviewer-Server" von den Magdeburger Freifunkern:
https://github.com/FreifunkMD/meshviewer-server-docker

## Allgemeine Map-Build-Anleitung (macOS)
### Install macOS
```
brew install npm
brew install yarn
yarn
```
### Bauen
```
gulp
```

### Lokal testen
```
tiny-server build
```

---

### Meshviewer

Meshviewer is an online visualization app to represent nodes and links on a map for Freifunk open mesh network.
This is a fork of https://github.com/ffrgb/meshviewer.
