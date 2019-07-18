---
permalink: /documentation/techno/
layout: general
iconedocumentation: ""
---

# Technologies utilisées
La solution d’IGO2 est  modulaire et adaptable à l’environnement dans laquelle elle est déployée.
## Voici la liste des librairies utilisées par IGO2 (obligatoires):
* [Angular](https://github.com/angular/angular) 
* [Angular Material](https://github.com/angular/material2)
* [OpenLayers](https://github.com/openlayers/openlayers) 
* NodeJS (seulement pour le développement)

 Technologies supportant la gestion des contextes d’utilisation :
* Configuration par fichier : JSON  
   **ou**
* [API de gestion des contextes](https://github.com/infra-geo-ouverte/igo2-api) : Développé en NodeJs, supporte PostgreSQL ou  SQLite pour les données

Langage de programmation : Typescript, html, Sass

## Supportés par IGO2 

### Services
* Services cartographiques web respectant la norme OGC : WMS, WFS, WMTS, TMS 
* Outil d’itinéraire : OpenStreetMap Routing Machine (OSRM)
* Service de recherche : Icherche, OSM 

### Solutions de diffusion des données géospatiales possibles :
* MapServer, Geoserver, ArcGIS Server...
### Solutions de gestion des données  possibles  :
* PostgreSQL/PostGIS,  SQLite ou Oracle...

## Exemple d’environnements technologiques utilisant IGO2 
* [Exemple avec configuration locale des contextes avec fichiers JSON](https://raw.githubusercontent.com/infra-geo-ouverte/site-web/gh-pages/assets/img/IGO2_archiJson.png)
* [Exemple avec configuration des contextes au niveau serveur](https://raw.githubusercontent.com/infra-geo-ouverte/site-web/gh-pages/assets/img/IGO2_archi_Authentification.png)
      


