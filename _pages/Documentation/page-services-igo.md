---
permalink: /documentation/page-services-igo/
layout: general
title-main: Services
iconedocumentation: ""
---

# Services Web et API offerts dans IGO

Les services Web et [API (interface de programmation d’applications)](http://granddictionnaire.com/ficheOqlf.aspx?Id_Fiche=26508293) disponibles via l'Infrastructure géomatique ouverte ([IGO](http://www.igouverte.org/)) sont documentés dans cette page. Les [conditions d'utilisation sont détaillées ici ](#a-quelles-sont-les-conditions-dutilisations-de-ces-services-). Ces services sont offerts soit aux ministères/organismes et leur réseau dans leurs applications grand public, aux détenteurs de licences d'Adresses Québec, aux partenaires du MSP (par ex. : centres d’urgence 9-1-1) ou aux organismes publics du gouvernement du Québec dans leurs applications internes. Chaque client est responsable de mettre à jour ses systèmes en fonction des améliorations et nouveautés de ces services.

<a id="1"></a>
# 1. Tableau comparatif des accès aux services/API 

| **API & services Web disponibles**      | **Utilisation autorisée dans les applications grand public des ministères/organismes et réseau**| **Utilisation autorisée aux détenteurs de licences d'[Adresses Québec](http://adressesquebec.gouv.qc.ca/)**  | **Utilisation autorisée dans l'intranet-[RITM](http://www.cspq.gouv.qc.ca/faire-affaire-avec-le-cspq/famille-de-services/sous-famille-de-services/services/service/reseau-integre-de-telecommunications-multimedia-ritm/)** | 
| ------------- |:-------------:| -----:|----:|
| 1. [<span class="octicon octicon-link">iCherche/géocode </span>](#2.1)(remplacera le [GLO](http://igouverte.org/documentation/glo/))|&#x2713;|&#x2713;|&#x2713;|
| 2. [<span class="octicon octicon-link"></span>](#1.2)Territoire-API|&#x2713;|&#x2713;|&#x2713;|
| 3. [<span class="octicon octicon-link"></span>](#1.3)Service web de cartes (WMS & WFS) |&#x2713;|-|&#x2713;|
| 4. [<span class="octicon octicon-link"></span>](#1.4)Service de fond de carte (WMTS) tuilé - Carte de base (Publique) du gouvernement du Québec|&#x2713;|&#x2713;|&#x2713;|
| 5. [<span class="octicon octicon-link"></span>](#1.5)Service de fond de carte (WMTS) tuilé - Service d'imagerie du gouvernement du Québec|&#x2713;[^1]|-|&#x2713;[^1]|
| 6. [<span class="octicon octicon-link"></span>](#1.6)Outil de [gestion d’itinéraire]|&#x2713;|&#x2713;|&#x2713;|
| 7. [<span class="octicon octicon-link"></span>](#1.7)Outil de [géocodage en lot] avec fichier CSV|-|&#x2713;|&#x2713;|
| 8. [<span class="octicon octicon-link"></span>](#1.8)Recherche de lots rénovés|- |- |&#x2713;|

[^1]: périmètre acrigéo

<a id="2"></a>
# 2. [<span class="octicon octicon-link"></span>](#2) Description des services/API

<a id="2.1"></a>
#### 2.1. [<span class="octicon octicon-link"></span>](#2.1)*iCherche/géocode* (API) permet :
+ la [géolocalisation par adresse](https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/geocode),  [code postal](https://www.canadapost.ca)<sup><abbr title="marque officielle">MO</abbr></sup>, territoire administratif, [lieu](https://gitlab.forge.gouv.qc.ca/geomatique/espace_public_description_projet_igo/wikis/icherche-lieu). Il se fonde, entre autres, sur les données d'[Adresses Québec](http://adressesquebec.gouv.qc.ca/). Il remplacera à terme le service de géolocalisation [GLO](http://igouverte.org/documentation/glo/) qui ne sera plus amélioré à partir de 2017, mais supporté jusqu'à la fin 2019. ICherche est plus performant (par ex. : autocomplétion) que le GLO et plus précis dans ses résultats trouvés.
+ Il permet indirectement de formater des adresses selon la base de données d'Adresse Québec.

<a id="2.2"></a>
#### 2.2. [<span class="octicon octicon-link"></span>](#2.2)*Territoire-API* permet de :
+ Lister les territoires : Retourne tous les territoires correspondants à un type avec des possibilités de filtrage (ex: "obtenir la liste des municipalités commençant par 'Meg' et la trier").
+ Rechercher par ID : retourne le territoire correspondant à l'identifiant spécifié (ex : "Obtenir la région administrative avec l'identifiant ou le geocode 01).
+ Rechercher par territoire : retourne la liste des territoires qui intersectent le ou les territoires choisis (ex: "obtenir les municipalités contenues dans un territoire de CLSC ou de savoir quelle est la région touristique d'une municipalité").
+ Valider l'intersection : valide si deux territoires s'intersectent (ex: "valider si la municipalité de Sainte-Thérèse intersecte la MRC de Thérèse-De-Blainville")
+ Localiser : raccourci pour plusieurs recherches de territoire intersectant des points XY ou un geojson, avec possibilité de spécifier plusieurs types (gécodage inversé); ce service peut également retourner les éléments (comme la municipalité, l'adresse,...) qui sont à une distance donnée du point XY.

<a id="2.3"></a>
#### 2.3. [<span class="octicon octicon-link"></span>](#2.3)Service de fonds de cartes ([WMTS](https://fr.wikipedia.org/wiki/Web_Map_Tile_Service)) tuilés.
+ Voici la [liste des services WMTS disponibles](http://igouverte.org/documentation/services-web-ogc-igo/)

<a id="2.4"></a>
#### 2.4. [<span class="octicon octicon-link"></span>](#2.4)*Le service de calcul et de gestion d’itinéraire* (API) permet :
+ de gérer des [itinéraires optimisés](http://igouverte.org/documentation/doc_itineraire/) (ex. meilleur parcours entre deux points) avec des requêtes en lot possibles. Il repose sur les données de la base géographique routière (BGR) de Transports Québec et d'Adresse Québec. Le service est basé sur la solution [OSRM](http://project-osrm.org/).

<a id="2.5"></a>
#### 2.5. [<span class="octicon octicon-link"></span>](#2.5)*Le service de géocodage en lot* permet :
+ de  [géocoder des points, à partir d’une liste d’adresses ou de codes postaux contenus dans un fichier tabulaire/texte (par ex. : csv)](https://geoegl.msp.gouv.qc.ca/GeocodageLot/). Le fichier doit minimalement contenir un champ contenant l'adresse complète ou le  [code postal](https://www.canadapost.ca)<sup><abbr title="marque officielle">MO</abbr></sup>. 

<a id="2.6"></a>
#### 2.6. [<span class="octicon octicon-link"></span>](#2.6)*La recherche de lots rénovés* permet :
+  de trouver la localisation par numéro de lots rénovés au Québec. Ce service est offert par le service de la géomatique de la [Commission de protection du territoire agricole du Québec](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1). Cette fonctionnalité est encore basée sur GLO et sera transférée vers iCherche/geocode à terme, une version est déjà disponible pour tests. (Contacter info@igouverte.com)

<a id="3"></a>
# 3. [<span class="octicon octicon-link"></span>](#3) Partage d'expertise
#### Les partenaires IGO peuvent échanger de l'expertise dans le développement des solutions géomatiques basées sur IGO[^2].
##### Par exemple :
+ [<span class="octicon octicon-link"></span>](#3.1) Développement de solutions de suivi de flottes véhiculaires

[^2]: Contacter les partenaires IGO pour plus de détails.

<a id="4"></a>
# 4. [<span class="octicon octicon-link"></span>](#4)Foire aux questions (FAQ)

##### **A) [<span class="octicon octicon-link"></span>](#A) Quelles sont les conditions d'utilisations de ces services ?** 
+ L'utilisateur doit inclure la mention des droits d’auteur du Gouvernement du Québec sur chaque copie de la totalité ou d’une partie de ces services de données. La mention à inscrire est « © Gouvernement du Québec » avec un hyperlien vers cette page : [http://www.droitauteur.gouv.qc.ca/copyright.php](http://www.droitauteur.gouv.qc.ca/copyright.php).

+ Le ministère de la Sécurité publique du Québec (MSP) et ses partenaires gouvernementaux dans IGO ne peuvent garantir l’exactitude des services de données et ils ne peuvent être tenus responsables des conclusions obtenues à la suite de l’utilisation de ceux-ci. Le MSP et ses partenaires gouvernementaux dans IGO n’assumeront aucune responsabilité à l’égard de tout dommage subi par l’utilisateur ou ses employés, agents, représentants ou sous-traitants à la suite de l’utilisation de ces services de données.

##### **B) Quelles sont les URL des serveurs hôte pour tous ces services ?** 
+ Si vous êtes à l'extérieur du gouvernement, le serveur hôte en production sera : { https://geoegl.msp.gouv.qc.ca } (et préproduction : { https://pregeoegl.msp.gouv.qc.ca }) et si vous êtes physiquement dans un bâtiment du gouvernement du Québec dans le réseau intranet (RITM), en production ce sera : { http://www.geomsp.qc } (et préproduction : { http://rc.geomsp.qc }). Ces adresses de serveurs hôte doivent être utilisées comme URL et elles doivent remplacer la valeur pour : {serveur} dans la documentation des différents services ou API.

##### **C) Que faire si le service n'est plus disponible ou que son état est indisponible ?**
+ Le service est disponible 24 heures par jour, 7 jours sur 7, à l'exception des périodes nécessitant des mises à jour annoncées d'avance. De manière exceptionnelle, si le service est non disponible, vous pouvez utiliser le serveur hôte de préproduction (voir réponse à la question B) qui est une image similaire à la production. Cependant, aucune garantie n'est donnée car il est possible que ce serveur soit utilisé pour l'évolution des services.

##### **D) Quel est le degré de soutien de ces services ?**
+ Ils sont disponibles 24 heures par jour, 7 jours sur 7, à l'exception des périodes de mises à jour qui seront annoncées un minimum de 3 jours ouvrables en avance. Un soutien est assuré du lundi au vendredi, soit de 8 h 30 à 16 h 30 lors de ces heures normales, à l’exception des jours fériés. S'il y a un problème majeur à l'extérieur de ces heures ouvrables, la demande sera traitée à la prochaine période de 8 h 30 à 16 h 30 du lundi au vendredi, à l’exception des jours fériés.

##### **E) Si j'ai d’autres questions sur ces services avec qui puis-je communiquer ?** 
+ N’hésitez pas à communiquer avec nous à l’adresse courriel suivante : info@igouverte.org ou consulter le site igouverte.org et cliquez sur : [Contact dans le site Web d'IGO](http://igouverte.org/#footer).
