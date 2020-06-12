# Funktion dieses Projektes
Groß-Gerauer Freifunkknoten werden eigentlich auf der FFKT-Map gelistet.
Dieser Meshviewer-Fork nutzt die Kitzinger `meshviewer.json` und selektiert anhand der enthaltenen Doamininformationen die Groß-Gerauer Knoten. Nur diese werden dann angezeigt. 

### Demo
Standalone: https://gg.indie-freifunk.net/map/#!/de/map

### Eine eigene Groß-Gerauer Map selber mit Docker hosten
Einfach das hier ausführen:

```
docker run --name meshviewer-server \
         --detach \
         --rm \
         -p 8080:80 \
         --env MeshviewerRepo="https://github.com/FreifunkMD/Meshviewer --branch ffmd-Babel+Batman" \
         --env LoopHookCMD="curl --create-dirs \
                            -o /var/www/html/data/batman/meshviewer.json https://yanic.batman15.ffffm.net/meshviewer.json \
                            -o /var/www/html/data/babel/meshviewer.json https://regensburg.freifunk.net/data/meshviewer.json; \
                            chmod o=x /var/www/html/data/babel /var/www/html/data/batman" \
         ffmd/meshviewer-server:latest
```
Danach kann eine eigene Groß-Gerauer Map auf dem eigenen Server (oder sogar PC) über http://Servername:8080 aufgerufen (http://localhost:8080) werden. 

Das ganze basiert auf dem generischer Dockerfile "All in One Meshviewer-Server" von den Magdeburger Freifunkern:  
https://github.com/FreifunkMD/meshviewer-server-docker

## Dokumentation
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
