---
permalink: /documentation/architecture/
layout: general
title-main: Architecture
iconedocumentation: ""
---

L'espace public IGO sera utilisé pour partager des informations concernant le projet public sur github et jekyll (lien à ajouter).

## Étapes à franchir avant de mettre IGO public :

|                                           Étape                                                    | Responsabilité       | Date    | Statut    |
|:--------------------------------------------------------------------------------------------------:|:--------------------:| -------:|-------:|
|1. Valider que le gouvervenement détient les droits d'auteurs du code reliés au GOLOC-IGO dans tous les contrats antérieurs avec les externes  | INSPQ, FADQ  | Février | |
|2. Choisir la licence libre du Québec pour le projet IGO : LiLiQ-R faible                                              | Comité de Direction  | Février | |
|3. Choisir la règle des droits d'auteur des contribution : appartiennent aux propriétaires, pas exclusivement au gouvernement | Comité de Direction  | Février | |
|4. Finaliser les règles de la communauté IGO | CELL  | Mars | |
|5. Créer un courriel IGO commun : igo@msp.gouv.qc.ca | MSP  | Mars | |
|6. Créer une liste courriel publique d'IGO : igo-public@listes.securitepublique.gouv.qc.ca  | MSP  | Mars | |
|7. Créer un compte github IGO et mettre le contenu du code source IGO-igo de Gitlab à l'intérieur  | MSP  | Mars-Avril | |
|8. Créer le contenu général du site web public d'IGO (voir table des matières)  | IGO  | Mars-Avril | |
|9. Terminer le contenu de la documentation technique d'IGO (Navigateur, installation, modules, demo.xml)  | IGO  | Mars-Avril | |
|10. Créer un site web jeykyll avec gabarit  | MSP  | Mars-Avril | |
|11. Publier la nouvelle sur osgeo-qc, blogue du MSP et liste courriel logiciels-libres@listes.securitepublique.gouv.qc.ca  | MSP  | Avril | |


## Table des matières du futur site web :
* Projet
* English
* Démo
* Installation
* Documentation
* Technologies utilisées
* Schéma de l'architecture
* Licences et droits d'auteurs
* Communauté et contacts
* FAQ
* Modules


## Voici la liste des modules IGO : 
1.     Module Navigateur (incluant la description de chaque outil de navigation)
2.     Module Pilotage
  * Service
3.     Module Arborescence
  *       services WMS (liste)
4.     Module Localisation
  *      service GLO (recherche par adresse, lieu, GPS, borne)
  *     service rechercher par lot de la CPTAQ (recherche par cadastre rénové)
5.     Module Requête Spatiale (incluant l’outil d’analyse spatiale)
  *       service « Lancer la requête »
6.     Module Édition (incluant les outils de dessin et de sélection)
  *      service enregistrer des éléments géométriques
  *      service enregistrer un regroupement
7.     Module Impression
  *       service créer un fichier PDF
8.     Module GPX
9.     Module Fichier de forme / Shapefile
10.  Module Obtenir informations service WMS (GetInfo) (incluant l’outil d’information)
  *      services WMS qui permettent l’obtention d’informations (liste)
11.  Module Partager carte (incluant l’outil Partager carte)
  *      service Partager carte
12.  Module Ajouter service WEB (incluant l’outil Ajout WMS)
  *      service Ajouter WMS
13. Module Itinéraire
  * Service OSRM
