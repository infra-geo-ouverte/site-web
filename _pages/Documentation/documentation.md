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
  - IGO2 Lib (https://github.com/infra-geo-ouverte/igo2-lib) : librairie des fonctionnalités client. Une démonstration de chacun des composants est disponible ici (https://infra-geo-ouverte.github.io/igo2-lib/#/home).
  - IGO2 Assemblage (https://github.com/infra-geo-ouverte/igo2) : assemblage de la librairiepermettant de créer l'application, IGO2 par défaut.Un assemblage personnalisé peut aussi être construit directement à partir de la librairie IGO2 Lib.
  - Fichiers de configuration des contextes (format JSON)
* Coté Serveur (optionnel):
  - API de contexte (https://github.com/infra-geo-ouverte/igo2-api): Rend la configuration des contextes disponible au niveau serveur, à installer. Permet la gestion des contextes  au niveau d’une base de données ce qui rend possible la création et la modification des contextes par un utilisateur. 
* Services  accessibles  
  - API de recherche(services de recherche ouverts) 
        - iCherche Geocode (https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/geocode) : formatage et géocodage d'adresses basé sur Adresses Québec 
        -  iCherche Territoire (https://geoegl.msp.gouv.qc.ca/apis/territoires/docs) : Recherche par élément spatial et filtrage  (supporte plusieurs éléments du découpage territorial  québécois)  








Cet espace comprend toute la documentation et les gabarits communs d'IGO.


<a id="presentation"></a>
## Présentations IGO sur SlideShare : [<span class="octicon octicon-link"></span>](#presentation)
* [http://www.slideshare.net/igouverte](http://www.slideshare.net/igouverte)

## Technologies et services offerts :
* [Technologies utilisées](/documentation/techno)
* [Service web de géolocalisation - GLO](/documentation/glo).

## IGO1

### Architecture et modules pour IGO1 :
* [architecture](https://github.com/infra-geo-ouverte/igo/blob/master/doc/IGO-CIBLE-v2014_aveclogo.png)
* [modules](/documentation/module).

<a id="utilisateur"></a>
### IGO1. Guide pour les utilisateurs d'IGO-Navigateur : [<span class="octicon octicon-link"></span>](#utilisateur)
[Guide d'utilisation du navigateur IGO](https://github.com/infra-geo-ouverte/igo/blob/master/doc/guide/IGO_Navigateur_guide.docx)

<a id="developpeur"></a>
### IGO1. Informations pour les développeurs et intégrateurs : [<span class="octicon octicon-link"></span>](#developpeur)
[Documentation des balises XML d'IGO-Navigateur](https://github.com/infra-geo-ouverte/igo/blob/master/doc/xml/DocumentationXML.markdown)

<a id="gabarit"></a>
### IGO1. Gabarit pour documenter un : [<span class="octicon octicon-link"></span>](#gabarit)
* [module](/documentation/doc_module)
* [service](/documentation/doc_service)
* [panorama](/documentation/doc_panorama).
