---
permalink: /documentation/
layout: general
title-main: Documentation
iconedocumentation: ""
submenu:
  - { hook: "utilisateur",    title: "Pour les utilisateurs" }
  - { hook: "developpeur", title: "Pour les développeurs" }
  - { hook: "gabarit", title: "Gabarits et autres" }
---

# Documentation

## Découpage de la solution
* Coté Client :
  - [IGO2 Lib](https://github.com/infra-geo-ouverte/igo2-lib) : librairie des fonctionnalités client. Une démonstration de chacun des composants est disponible [ici](https://infra-geo-ouverte.github.io/igo2-lib/#/home).
  - [IGO2 Assemblage](https://github.com/infra-geo-ouverte/igo2) : assemblage de la librairie permettant de créer l'application, IGO2 par défaut.Un assemblage personnalisé peut aussi être construit directement à partir de la librairie IGO2 Lib.
  - Fichiers de configuration des contextes (format JSON)
* Coté Serveur (optionnel):
  - [API de contexte](https://github.com/infra-geo-ouverte/igo2-api): Rend la configuration des contextes disponible au niveau serveur, à installer. Permet la gestion des contextes  au niveau d’une base de données ce qui rend possible la création et la modification des contextes par un utilisateur. 
* **Services  accessibles**  
  * API de recherche(services de recherche ouverts) 
    * [iCherche Geocode](https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/geocode) : formatage et géocodage d'adresses basé sur Adresses Québec 
    * [iCherche Territoire](https://geoegl.msp.gouv.qc.ca/apis/territoires/docs) : Recherche par élément spatial et filtrage  (supporte plusieurs éléments du découpage territorial  québécois)  
    
## [Technologies utilisées et supportées](http://www.igouverte.org/documentation/techno/)
## Présentations IGO sur SlideShare 
    * http://www.slideshare.net/igouverte
    * http://www.igouverte.org/documentation/techno/
# Technologies utilisées
La solution d’IGO2 est  modulaire et adaptable à l’environnement dans laquelle elle est déployée.
## Voici la liste des librairies utilisées par IGO2 (obligatoires):
* Angular 
* Angular Material
* OpenLayers 
* NodeJS (seulement pour le développement)

 Technologies supportant la gestion des contextes d’utilisation :
* Configuration par fichier : JSON
**ou**
* [API de gestion des contextes](https://github.com/infra-geo-ouverte/igo2-api) : Développé en NodeJs, supporte PostgreSQL ou  SQLite pour les données 
Langage de programmation : Typescript, html, Sass
## Services supportés par IGO2 

* Services cartographiques web respectant la norme OGC : WMS, WFS, WMTS, TMS 
* Outil d’itinéraire : OpenStreetMap Routing Machine (OSRM)
* Service de recherche : Icherche, OSM 

## Exemple d’environnements technologiques utilisant IGO2 
* Exemple avec configuration locale des contextes (fichiersJSON) (lien vers IGO2_archiJson.png)
* Exemple avec configuration des contextes au niveau serveur (lien vers image IGO2_archiAuthentification.png)
      
Solutions de diffusion des données géospatiales possibles :
* MapServer, Geoserver, ArcGIS Server...
Solutions de gestion des données  possibles  :
* PostgreSQL/PostGIS,  SQLite ou Oracle...
