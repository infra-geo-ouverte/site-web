---
permalink: /documentation/techno/
layout: general
iconedocumentation: ""
---

# Technologies utilisées
La solution d’IGO2 est  modulaire et adaptable à l’environnement dans lequelle elle est déployée.
## Voici la liste des librairies utilisées par IGO2 (obligatoires):
* [Angular](https://github.com/angular/angular) 
* [Angular Material](https://github.com/angular/material2)
* [OpenLayers](https://github.com/openlayers/openlayers) 
* [NodeJS](https://nodejs.org/en/about/) (seulement pour le développement)

 Technologies supportant la gestion des contextes d’utilisation :
* Configuration par fichier : JSON  
   **ou**
* [API de gestion des contextes](https://github.com/infra-geo-ouverte/igo2-api) : Développé en NodeJs, supporte [PostgreSQL](https://www.postgresql.org/) ou  [SQLite](https://www.sqlite.org/index.html) pour les données

Langage de programmation : Typescript, html, [Sass](https://sass-lang.com/)

## Supportés par IGO2 

### Services
* Services cartographiques web respectant la norme OGC : [WMS](https://www.opengeospatial.org/standards/wms), [WFS](https://www.opengeospatial.org/standards/wfs), [WMTS](https://www.opengeospatial.org/standards/wmts)
* Autres services cartographiques supportés: [TMS](https://wiki.openstreetmap.org/wiki/TMS)
* Outil d’itinéraire : [OpenStreetMap Routing Machine (OSRM)](http://project-osrm.org/)
* Service de recherche : [iCherche Geocode](https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/geocode), [iCherche Territoire](https://geoegl.msp.gouv.qc.ca/apis/territoires/docs), [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/) 

### Solutions de diffusion des données géospatiales possibles :
* [MapServer](https://mapserver.org/), [GeoServer](http://geoserver.org/), ArcGIS Server...
### Solutions de gestion des données  possibles  :
* PostgreSQL/PostGIS,  SQLite ou Oracle...

## Exemple d’environnements technologiques utilisant IGO2 
* [Exemple avec configuration locale des contextes avec fichiers JSON](https://raw.githubusercontent.com/infra-geo-ouverte/site-web/gh-pages/assets/img/IGO2_archiJson.png)
* [Exemple avec configuration des contextes au niveau serveur](https://raw.githubusercontent.com/infra-geo-ouverte/site-web/gh-pages/assets/img/IGO2_archi_Authentification.png)
      


