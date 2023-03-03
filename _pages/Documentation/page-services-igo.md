---
permalink: /documentation/page-services-igo/
layout: general
title-main: Services
iconedocumentation: ""
---

# Services Web et API offerts dans IGO

Les services Web et [API (interface de programmation d’applications)](http://granddictionnaire.com/ficheOqlf.aspx?Id_Fiche=26508293) disponibles via l'Infrastructure géomatique ouverte ([IGO](http://www.igouverte.org/)) sont documentés dans cette page. Les [conditions d'utilisation sont détaillées ici ](#a-quelles-sont-les-conditions-dutilisations-de-ces-services-). Ces services sont offerts soit aux ministères/organismes et leur réseau dans leurs applications grand public, aux détenteurs de licences d'Adresses Québec, aux partenaires du MSP (par ex. : centres d’urgence 9-1-1) ou aux organismes publics du gouvernement du Québec dans leurs applications internes. Chaque client est responsable de mettre à jour ses systèmes en fonction des améliorations et nouveautés de ces services.

<a id="1"></a>
# 1. Tableau comparatif des accès aux [services/API](#2)

| **API & services Web disponibles**      | **Utilisation autorisée dans les applications grand public des ministères/organismes et réseau**| **Utilisation autorisée aux détenteurs de licences d'[Adresses Québec](http://adressesquebec.gouv.qc.ca/)**  | **Utilisation autorisée dans l'intranet-[RITM](https://www.quebec.ca/gouvernement/faire-affaire-gouvernement/services-organisations-publiques/services-de-plateformes-technologiques/communications-informatiques-et-multimedias/reseau-integre-telecommunication-multimedia-ritm)** | 
| ------------- |:-------------:| -----:|----:|
| 1. [iCherche/géocode](#2.1)|&#x2713;|&#x2713;|&#x2713;|
| 2. [TerrAPI](#2.2)|&#x2713;|&#x2713;|&#x2713;|
| 3. [Service de fond de carte (WMTS) tuilé - Carte de base (Publique) du gouvernement du Québec](http://igouverte.org/documentation/services-web-ogc-igo/#carte_publique)|&#x2713;|&#x2713;|&#x2713;|
| 4. [Service de fond de carte (WMTS) tuilé - Service d'imagerie du gouvernement du Québec](http://igouverte.org/documentation/services-web-ogc-igo/#imagerie)|&#x2713;[&#42;](#nbt)|-|&#x2713;[&#42;](#nbt)|
| 5. [Service web de cartes (WMS & WFS)](http://igouverte.org/documentation/services-web-ogc-igo/#ServicesWeb)|&#x2713;|-|&#x2713;|
| 6. Outil de [calcul d’itinéraire](#2.3)|&#x2713;|&#x2713;|&#x2713;|
| 7. Outil de [géocodage en lot](#2.4) avec fichier CSV|-|&#x2713;|&#x2713;|
| 8. [Recherche de lots rénovés](#2.5)|- |- |&#x2713;|



<a name="nbt">&#42;</a> : Accessible aux membres du regroupement ACRIgéo

<a id="2"></a>
# 2. Description des services/API

<a id="2.1"></a>
#### 2.1. iCherche/géocode (API de géocodage) :
+ Permet la géolocalisation par adresse,  [code postal](https://www.canadapost.ca)<sup><abbr title="marque officielle">MO</abbr></sup>, territoire administratif, lieu, etc. Il se fonde, entre autres, sur les données d'[Adresses Québec](http://adressesquebec.gouv.qc.ca/).
+ Permet de formater des adresses selon la base de données d'Adresse Québec.
   &nbsp;
  [Accéder à la documentation d'iCherche](https://geoegl.msp.gouv.qc.ca/apis/icherche/docs)

<a id="2.2"></a>
#### 2.2. TerrAPI (API de géocodage inversé et de recherche spatiale) :
+ Permet le géocodage inversé, par exemple :
  + Obtenir l'adresse la plus proche d'une coordonnée;
  + Obtenir toutes les adresses situées à moins de X mètres d'une coordonnée, en ordre de distance à celle-ci;
  + Localiser un territoire (ex.: une municipalité) à partir d'une coordonnée.
+ Permet la recherche spatiale à partir d'un découpage territorial ou d'une géométrie fournie sous forme de geojson, par exemple :
  + Retourner toutes les adresses contenues dans un polygone donné;
  + Retourner la liste des territoires qui intersectent le ou les territoires choisis (ex.: obtenir les municipalités contenues dans un bassin versant, obtenir la région touristique d'une municipalité, etc.);
  + Valider si deux territoires s'intersectent (ex.: valider si la municipalité de Sainte-Thérèse intersecte la MRC de Thérèse-De-Blainville).
+ Supporte des recherches basées sur les découpages territoriaux, par exemple : 
  + Retourner tous les territoires correspondants à un type avec des possibilités de filtrage (ex.: obtenir la liste des municipalités commençant par 'Mat' et la trier en ordre alphabétique);
  + Obtenir tous les territoires contenus dans un autre (ex.: retourner toutes les municipalité de la région administrative 04);
  + Retourner le territoire correspondant à l'identifiant spécifié (ex.: obtenir la région administrative avec le code 01, obtenir la municipalité avec le code 23027, etc.)

  &nbsp;
  [Accéder à la documentation de TerrAPI](https://geoegl.msp.gouv.qc.ca/apis/terrAPI/docs)

<a id="2.3"></a>
#### 2.3. Service de calcul d’itinéraire :
+ Permet de calculer des itinéraires, des temps de déplacement et des distances entre deux points selon le réseau routier;
+ Permet de gérer des itinéraires optimisés (ex.: meilleur parcours entre deux points) avec des requêtes en lot possibles;
+ Alimenté par les données de réseau routier [AQréseau+](https://www.donneesquebec.ca/recherche/dataset/adresses-quebec/resource/0d5df103-f856-4183-9a15-eb06fce9c8bf) d’Adresses Québec; 
+ Basé sur la solution [OSRM](http://project-osrm.org/).
&nbsp;
  [Accéder à la documentation du service d'itinéraire](http://igouverte.org/documentation/doc_itineraire/)
<a id="2.4"></a>
#### 2.4. Service de géocodage en lot :
+ Permet de  géocoder des points à partir d’une liste d’adresses ou de codes postaux contenus dans un fichier tabulaire/texte (ex.: CSV);
+ Basé sur le service de géocodage iCherche et les données d'Adresses Québec.
&nbsp;
  [Accéder à la documentation du service de géocodage en lot](https://geoegl.msp.gouv.qc.ca/apis/icherche/docs/enlot)

<a id="2.5"></a>
#### 2.5. Service de recherche de lots cadastraux :
+  Permet de localiser un lot par numéro de lot du cadastre rénové du Québec. Ce service est offert par le service de la géomatique de la [Commission de protection du territoire agricole du Québec](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1).

<a id="3"></a>
# 3. Foire aux questions (FAQ)

##### **3.1. Quelles sont les conditions d'utilisations de ces services ?** 
+ L'utilisateur doit inclure la mention des droits d’auteur du Gouvernement du Québec sur chaque copie de la totalité ou d’une partie de ces services de données. La mention à inscrire est « © Gouvernement du Québec » avec un hyperlien vers cette page : [http://www.droitauteur.gouv.qc.ca/copyright.php](http://www.droitauteur.gouv.qc.ca/copyright.php).

+ Le ministère de la Sécurité publique du Québec (MSP) et ses partenaires gouvernementaux dans IGO ne peuvent garantir l’exactitude des services de données et ils ne peuvent être tenus responsables des conclusions obtenues à la suite de l’utilisation de ceux-ci. Le MSP et ses partenaires gouvernementaux dans IGO n’assumeront aucune responsabilité à l’égard de tout dommage subi par l’utilisateur ou ses employés, agents, représentants ou sous-traitants à la suite de l’utilisation de ces services de données.

##### **3.2. Quel est le degré de support offert pour ces services ?**
+ Les services sont disponibles 24 heures par jour, 7 jours sur 7, à l’exception des périodes d’interruption planifiées ou non. À moins d’une situation urgente, les interruptions planifiées sont annoncées un minimum de 3 jours ouvrables à l'avance. Pour être ajouté à la liste de diffusion informant des avis d’interruption ou de tout changement apporté aux services, veuillez adresser votre demande en utilisant le formulaire [Contactez-nous](http://igouverte.org/#footer) de ce site.
+ Un support est assuré du lundi au vendredi, soit de 8h30 à 16h30 lors des heures normales, à l’exception des jours fériés. S’il y a un problème majeur à l’extérieur de ces heures ouvrables, la demande sera traitée à la prochaine période de 8h30 à 16h30 du lundi au vendredi, à l’exception des jours fériés.

##### **3.3. Que faire si le service n'est plus disponible ou que son état est indisponible ?**
+ Le service est disponible 24 heures par jour, 7 jours sur 7, à l’exception des périodes  d’interruption planifiées ou non. De manière exceptionnelle, si le service est non disponible pour une longue période, des services de relève pourraient être rendus disponibles. Cependant, aucune garantie n’est donnée quant à leur disponibilité.
+ Pour être ajouté à la liste de diffusion informant des avis d’interruption ou de tout changement apporté aux services, veuillez adresser votre demande en utilisant le formulaire [Contactez-nous](http://igouverte.org/#footer) de ce site.


##### **3.4. Si j'ai d’autres questions sur ces services, avec qui puis-je communiquer ?** 
+ N’hésitez pas à communiquer avec nous à l’adresse courriel suivante : info@igouverte.org ou utilisez le formulaire [Contactez-nous](http://igouverte.org/#footer) de ce site.
