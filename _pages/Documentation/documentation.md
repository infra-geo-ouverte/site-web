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
    
## Technologies utilisées et supportées
 [Détail des librairies utilisées et des services supportés](http://www.igouverte.org/documentation/techno/) 
## Présentations IGO 
* [http://www.slideshare.net/igouverte](http://www.slideshare.net/igouverte)
    
## Capsules Vidéo
Démonstrations de l'installation et de certaines configurations de base.
* [Installation](https://geoegl.msp.gouv.qc.ca/igouverte/videos/1-installationLocale.webm)
* [Ajout de Contexte](https://geoegl.msp.gouv.qc.ca/igouverte/videos/2-ajouterContexte.webm)
* [Ajout de Catalogue](https://geoegl.msp.gouv.qc.ca/igouverte/videos/3-ajouterCatalogue3.webm)
