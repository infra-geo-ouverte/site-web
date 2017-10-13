---
permalink: /documentation/page-services-igo-msp/
layout: general
title-main: Services Web
iconedocumentation: ""
---

# Services Web et A.P.I. offerts dans IGO au MSP

Les services Web et [A.P.I. (interface de programmation d’applications)](http://granddictionnaire.com/ficheOqlf.aspx?Id_Fiche=26508293) offerts au [ministère de la Sécurité publique du Québec (MSP)](https://geoegl.msp.gouv.qc.ca/blogue/) par l'Infrastructure géomatique ouverte ([IGO](http://www.igouverte.org/)) sont documentés dans cette page. Les [conditions d'utilisation sont détaillées au bas de ce tableau ](#a-quelles-sont-les-conditions-dutilisations-de-ces-services-). Ces services sont offerts soit aux ministères/organismes et leur réseau dans leurs applications grand public, aux détenteurs de licences d'Adresses Québec, aux partenaires du MSP (par ex. : centres d’urgence 9-1-1) ou aux organismes publics du gouvernement du Québec dans leur application interne. Chaque client est responsable de mettre à jour ses systèmes en fonction des améliorations et nouveautés de ces services.

<a id="1"></a>
# 1. [<span class="octicon octicon-link"></span>](#1)Tableau comparatif des accès aux services/A.P.I. 

| **A.P.I. & services Web offerts par IGO-MSP**      | **Accès grand public aux applications des ministères/organismes et réseau**| **Accès aux détenteurs de licences d'[Adresse Québec](http://adressesquebec.gouv.qc.ca/)**  | **Accès seulement dans l'intranet-[RITM](http://www.cspq.gouv.qc.ca/faire-affaire-avec-le-cspq/famille-de-services/sous-famille-de-services/services/service/reseau-integre-de-telecommunications-multimedia-ritm/)ou extranet aux ministères et organismes du gouvernement du Québec [(à la demande)](http://igouverte.org/documentation/page-services-igo-msp/#footer)**  | **[Sur demande seulement](http://igouverte.org/documentation/page-services-igo-msp/#footer)** | 
| ------------- |:-------------:| -----:|----:|----:|
| 1. [ICherche géocode](#21-icherche-géocode-api-permet-) (remplacera le [GLO](http://igouverte.org/documentation/glo/))|X|X|X|$|
| 2. [ICherche XY](#22-icherche-xy-api-permet-)|X|-|X|$|
| 3. [ICherche par ID](#23-icherche-par-id-api-permet-) |X|-|X|$|
|  4. [Hébergement ](#24-lhébergement-du-navigateur-igo2-sans-sécurité-permet-) du [navigateur IGO2](http://igouverte.org/information/2017/08/04/IGO2_lancement/) |X |- |X |$|
| 5. Hébergement du [navigateur IGO2 *avec* sécurité ](#2.5)|- |- |X|$|
| 6. [Hébergement de données géomatiques et diffusion Web](#2.6)|-|-|X|$|
| 7. [Intégration de services Web dans le navigateur IGO2](#2.7)|-|-|X|$|
| 8. [Développement sur mesure](#28-le-développement-doutils-sur-mesure-permet-)|-|-|-|$|
| 9. [Service web de cartes (WMS & WFS)](#2.9)  |X|X|X|$|
| 10. [Service de fonds de cartes (WMTS) tuilés](#2.10)|X, seulement le fond de carte du gouvernement du Québec (carte_gouv_public)|X|X|$|
| 11. Outil de [gestion d’itinéraire](#2.11)|X|X |X |$|
| 12. Outil de [géocodage en lot](#2.12) avec fichier CSV|-|X|X |$|
| 13. [Sécuriser les services Web](#2.13)|- |- |X |$|
| 14. [Suivi de flottes véhiculaires avec GPS](#2.14)|- |- |X |$|
| 15. [Recherche de lots rénovés](#2.15)|- |- |X |$|

<a id="2"></a>
# 2. [<span class="octicon octicon-link"></span>](#2) Description des services/A.P.I.

<a id="2.1"></a>
#### 2.1. [<span class="octicon octicon-link"></span>](#2.1)*ICherche géocode* (A.P.I.) permet :
+ la [géolocalisation par adresse](https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/geocode),  © code postal, territoire administratif, [lieu](https://gitlab.forge.gouv.qc.ca/geomatique/espace_public_description_projet_igo/wikis/icherche-lieu) et offre des requêtes en lot. Il se fonde, entre autres, sur les données d'[Adresses Québec](http://adressesquebec.gouv.qc.ca/). Il remplacera à terme le service de géolocalisation [GLO](http://igouverte.org/documentation/glo/) qui ne sera plus amélioré à partir de 2017, mais supporté jusqu'à la fin 2019. ICherche est plus performant (par ex. : autocomplétion) que le GLO et plus précis dans ses résultats trouvés.

<a id="2.2"></a>
#### 2.2. [<span class="octicon octicon-link"></span>](#2.2)*ICherche XY* (A.P.I.) permet :
+ de rechercher par XY en permettant la [géolocalisation par XY](https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/xy). Il retourne les éléments qui intersectent le point XY passé en arguments. Ce service peut également retourner les éléments qui sont à une distance donnée du point XY. Comme la municipalité, la MRC, l’adresse, le code postal, etc. le plus près du XY.

<a id="2.3"></a>
#### 2.3. [<span class="octicon octicon-link"></span>](#2.3)*ICherche par ID* (A.P.I.) permet :
+ de rechercher par [identifiant la géolocalisation associée](https://gitlab.forge.gouv.qc.ca/geomatique/api/wikis/id). Il retourne les éléments qui intersectent l'élément "source" dont l'identifiant (ID) est spécifié, par ex. : obtenir les municipalités contenues dans un territoire de CLSC ou de savoir quelle est la région touristique d’une municipalité, etc.

<a id="2.4"></a>
#### 2.4. [<span class="octicon octicon-link"></span>](#2.4)*L'hébergement du navigateur IGO2* sans sécurité permet :
+ de tirer profit d’une multitude de données géographiques grâce à une interface cartographique accessible par un navigateur Web et adaptée à un appareil mobile avec la version IGO 2.0 (https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/). 
Voici des exemples d'applications IGO disponible pour le grand public :
- Données Québec : [https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/)
- Données Québec - Transports : [https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=mtq](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=mtq)
- Commission de protection du territoire agricole du Québec : [http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1)
- Inventaire forestier : [https://geoegl.msp.gouv.qc.ca/igo/mffpecofor/](https://geoegl.msp.gouv.qc.ca/igo/mffpecofor/)

<a id="2.5"></a>
#### 2.5. [<span class="octicon octicon-link"></span>](#2.5)*L'hébergement du navigateur IGO2 avec sécurité* permet :
+ de sécuriser les services et la gestion de profils par utilisateur dans le navigateur IGO2. Cette solution est basée sur le logiciel libre appelé [Kong](https://getkong.org/).

<a id="2.6"></a>
#### 2.6. [<span class="octicon octicon-link"></span>](#2.6)*L'hébergement et l'intégration de données géomatiques* permettent :
+ la diffusion Web sous forme de standard OGC comme : [WMS](https://fr.wikipedia.org/wiki/Web_Map_Service) & [WFS](https://fr.wikipedia.org/wiki/Web_Feature_Service) en hébergeant ces données dans l'infrastructure géomatique ouverte (IGO) du MSP.

<a id="2.7"></a>
#### 2.7. [<span class="octicon octicon-link"></span>](#2.7)*L'intégration de services Web dans un navigateur IGO2* permet :
+ l'intégration de services Web externes dans un navigateur IGO2 hébergé au MSP. Le navigateur IGO2 sera hébergé au MSP alors que les services Web intégrés seront assumés par le client.

<a id="2.8"></a>
#### 2.8. [<span class="octicon octicon-link"></span>](#2.8)*Le développement d'outils sur mesure* permet :
+ la programmation et l'ajout d'outils spécifiques n'étant pas disponibles en ce moment dans les services (par ex. : ICherche, navigateur IGO2).

<a id="2.9"></a>
#### 2.9. [<span class="octicon octicon-link"></span>](#2.9)Hébergement de services OGC : [WMS](https://fr.wikipedia.org/wiki/Web_Map_Service) et [WFS](https://fr.wikipedia.org/wiki/Web_Feature_Service)
+ Voici la [liste des services OGC disponibles](http://igouverte.org/documentation/services-web-ogc-igo/#b)

<a id="2.10"></a>
#### 2.10. [<span class="octicon octicon-link"></span>](#2.10)Service de fonds de cartes ([WMTS](https://fr.wikipedia.org/wiki/Web_Map_Tile_Service)) tuilés.
+ Voici la [liste des services WMTS disponibles](http://igouverte.org/documentation/services-web-ogc-igo/#a)

<a id="2.11"></a>
#### 2.11. [<span class="octicon octicon-link"></span>](#2.11)*Le service de calcul et de gestion d’itinéraire* (A.P.I.) permet :
+ de gérer des [itinéraires optimisés](https://gitlab.forge.gouv.qc.ca/geomatique/itineraire/wikis/home) (ex. meilleur parcours entre deux points) avec des requêtes en lot possibles. Il repose sur les données de la base géographique routière (BGR) de Transports Québec et d'Adresse Québec. Le service est basé sur la solution [OSRM](http://project-osrm.org/).

<a id="2.12"></a>
#### 2.12. [<span class="octicon octicon-link"></span>](#2.12)*Le service de géocodage en lot* permet :
+ de  [géocoder des points, à partir d’une liste d’adresses ou de codes postaux contenus dans un fichier tabulaire/texte (par ex. : csv)](https://geoegl.msp.gouv.qc.ca/GeocodageLot/). Le fichier doit minimalement contenir un champ contenant l'adresse complète ou le © code postal. 

<a id="2.13"></a>
#### 2.13. [<span class="octicon octicon-link"></span>](#2.13)*Sécuriser sur les services Web* permet :
+ de gérer les permissions des usagers sur les services Web (interne et externe). Cette interface A.P.I. est basée sur la solution [Kong](https://getkong.org/).

<a id="2.14"></a>
#### 2.14. [<span class="octicon octicon-link"></span>](#2.14)Le *suivi de flottes véhiculaires* permet :
+ de faire le suivi des flottes véhiculaires munies de GPS afin d'afficher la localisation X,Y envoyée en temps réel.

<a id="2.15"></a>
#### 2.15. [<span class="octicon octicon-link"></span>](#2.15)La recherche de lots rénovés permet :
+  de trouver la localisation par numéro de lots rénovés au Québec. Ce service est offert par le service de la géomatique de la [Commission de protection du territoire agricole du Québec](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1).

<a id="3"></a>
# 3. [<span class="octicon octicon-link"></span>](#3)Foire aux questions (FAQ)

<a id="3.1"></a>
# 3.1. [<span class="octicon octicon-link"></span>](#3.1)Section générale

##### **A) Quelles sont les conditions d'utilisations de ces services ?** 
+ L'utilisateur doit inclure la mention des droits d’auteur du Gouvernement du Québec sur chaque copie de la totalité ou d’une partie de ces services de données. La mention à inscrire est « © gouvernement du Québec » avec un hyperlien vers cette page : [https://www.droitauteur.gouv.qc.ca/copyright.php](https://www.droitauteur.gouv.qc.ca/copyright.php).

+ Le ministère de la Sécurité publique du Québec (MSP) et ses partenaires gouvernementaux dans IGO ne peuvent garantir l’exactitude des services de données et ils ne peuvent être tenus responsables des conclusions obtenues à la suite de l’utilisation de ceux-ci. Le MSP et ses partenaires gouvernementaux dans IGO n’assumeront aucune responsabilité à l’égard de tout dommage subi par l’utilisateur ou ses employés, agents, représentants ou sous-traitants à la suite de l’utilisation de ces services de données.

##### **B) Quelles sont les URL des serveurs hôte pour tous ces services ?** 
+ Si vous êtes à l'extérieur du gouvernement, le serveur hôte en production sera : { https://geoegl.msp.gouv.qc.ca } (et préproduction : { https://pregeoegl.msp.gouv.qc.ca }) et si vous êtes physiquement dans un bâtiment du gouvernement du Québec dans le réseau intranet (RITM), en production ce sera : { http://www.geomsp.qc } (et préproduction : { http://rc.geomsp.qc }). Ces adresses de serveurs hôte doivent être utilisées comme URL et elles doivent remplacer la valeur pour : {serveur} dans la documentation des différents services ou A.P.I.

##### **C) Que faire si le service n'est plus disponible ou que son état est indisponible ?**
+ Le service est disponible 24 heures par jour, 7 jours sur 7, à l'exception des périodes nécessitant des mises à jour annoncées d'avance. Par contre, si le service est non disponible, vous pouvez utiliser le serveur hôte de préproduction (voir réponse à la question B) qui est une image similaire à la production.

##### **D) Quel est le degré de soutien de ces services ?**
+ Ils sont disponibles 24 heures par jour, 7 jours sur 7, à l'exception des périodes de mises à jour qui seront annoncées 3 jours ouvrables en avance. Un soutien est assuré du lundi au vendredi, soit de 8 h 30 à 16 h 30 lors de ces heures normales, à l’exception des jours fériés. S'il y a un problème majeur à l'extérieur de ces heures ouvrables, la demande sera traitée à la prochaine période de 8 h 30 à 16 h 30 du lundi au vendredi, à l’exception des jours fériés.

##### **E) Que faire si je veux m'abonner aux annonces de mises à jour sur les services ?** 
+ Pour ce faire, il serait opportun pour chaque client d'un de ces services de s'inscrire à cette liste courriel afin d’être mis au courant des annonces et arrêts des services faits en avance : [http://listes.securitepublique.gouv.qc.ca/sympa/subscribe/igo-publique](http://listes.securitepublique.gouv.qc.ca/sympa/subscribe/igo-publique)

##### **F) Si j'ai d’autres questions sur ces services avec qui puis-je communiquer ?** 
+ N’hésitez pas à communiquer avec nous à l’adresse courriel suivante : info(a)igouverte.org ou consulter le site igouverte.org et cliquez sur : [Contact dans le site Web d'IGO](http://igouverte.org/#footer).

<a id="3.2"></a>
## 3.2. [<span class="octicon octicon-link"></span>](#3.2)Clientèle des centres d'urgence (CU) 9-1-1 du Québec

##### **A) Qui contacter en cas de questions concernant ces services pour les CU-911 ?** 
+ N’hésitez pas à communiquer avec nous à l’adresse courriel suivante : msp911(a)msp.gouv.qc.ca

##### **B) Pourquoi utiliser l'application extranet qui inclut le navigateur IGO et IGO2 ?**
+ C’est gratuit
+ Près de 400 couches sont disponibles
+ Utilisation d’un moteur de recherche performant 
+ Outil d’itinéraire intégré
+ Partage de contexte cartographique
+ Adapté pour appareil mobile (IGO2)
+ Fonds de cartes rapides et performants
+ Aucune programmation et aucun logiciel à installer

##### **C) Si je veux avoir accès au guide de formation, à qui dois-je m’adresser ?**
+ Vous pouvez accéder au guide de formation en cliquant sur le "I" dans l’application Extranet IGO 9-1-1. Vous pouvez également vous adresser à msp911(a)msp.gouv.qc.ca pour obtenir de l’information au sujet de la formation IGO 9-1-1.

##### **D)  Quels sont les avantages d’utiliser les services Web de carte – WMS ?**
+ C’est gratuit
+ Près de 400 couches sont disponibles individuellement et à la pièce
+ Données le plus à jour possible et symbologie standardisée à tous les CU-911

##### **E)  Quels sont les avantages d’utiliser les services Web de fonds de carte - WMTS ?**
+ C’est gratuit
+ Près de 50 couches sont disponibles dans un même fond de carte
+ Très rapides et performants
+ Données toujours à jour et symbologie standardisée à tous les CU-911

##### **F)  Quels sont les avantages d’utiliser les services Web géolocalisation - GLO ?**
+ C’est gratuit
+ Utilisation d’un moteur de recherche performant 
+ Données toujours à jour et standardisées à tous les CU-911.

##### **F) Quels sont les avantages d’utiliser les services d'itinéraire ?**
+ C’est gratuit
+ Utilisation d’un outil de gestion de parcours très performant
+ Données toujours à jour et standardisées à tous les CU-911.

##### **G) Comment obtenir les données brutes?**
+ Pour obtenir des données brutes, vous pouvez vous adresser à ces entités, soit :
Données Québec : un portail commun de données ouvertes résultant d’une collaboration entre le gouvernement du Québec et plusieurs municipalités afin de fournir aux citoyens une seule porte d’entrée aux jeux de données ouvertes du Québec. Nous vous invitons à consulter le site Web : [www.donneesquebec.ca](www.donneesquebec.ca)
+ Adresses Québec : une géobase routière qui couvre tout le Québec. Elle offre un réseau routier complet comprenant les odonymes officiels, les adresses par tranches et par points, l'information permettant la gestion de parcours, les codes postaux et un contexte cartographique. Nous vous invitons à consulter le site Web : [www.adressesquebec.gouv.qc.ca](www.adressesquebec.gouv.qc.ca)
+ Géoboutique du ministère de l’Énergie et des Ressources naturelles : permet de fournir des services d’informations géographiques utiles à ses clientèles publiques et privées dans le domaine de la connaissance, de l'aménagement, de la gestion de la mise en valeur et de la protection du territoire québécois et de ses ressources. Nous vous invitons à consulter le site Web : [www.geoboutique.mern.gouv.qc.ca](www.geoboutique.mern.gouv.qc.ca)

##### **H) Mon centre d'urgence 9-1-1 utilise déjà les services de géomatique par le biais de son fournisseur de répartition assistée par ordinateur. Quels sont les avantages à utiliser les services offerts par IGO ?**
+ Vous aurez accès à des informations relatives à toute la province ainsi qu’à de l’information spécifique par des partenaires (ex. : Hydro-Québec) 

##### **I) Je n’ai pas pu me connecter à IGO 911, à qui dois-je m’adresser?**
+ Écrire à MSP911(a)msp.gouv.qc.ca

##### **J) Est-ce que je peux accéder à l’application cartographique de l’extranet adapté pour appareil mobile?**
+ Oui avec le même lien dans l’extranet, il faut choisir le profil: « IGO2-Mobile-9-1-1 ».

##### **K) Commentaires ou suggestions d’amélioration?** 
+ Écrire à MSP911(a)msp.gouv.qc.ca 
