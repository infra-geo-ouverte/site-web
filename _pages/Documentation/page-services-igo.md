---
permalink: /documentation/page-services-igo/
layout: general
title-main: Services
iconedocumentation: ""
---

# Services Web et API offerts dans IGO

Cetta page présente les services Web et [API (interface de programmation d’applications)](http://granddictionnaire.com/ficheOqlf.aspx?Id_Fiche=26508293) disponibles via l'Infrastructure géomatique ouverte (IGO). 

IMPORTANT : Veuillez prendre note des [conditions d'utilisation](#2) des services. L'utilisation des services est autorisée pour les ministères et organismes du gouvernement du Québec ainsi que les organisations participant au partage de données gouvernementales.

<a id="1"></a>
# 1. Description des services/API

<a id="1.1"></a>
#### 1.1. iCherche/géocode (API de géocodage) :
+ Permet la géolocalisation par adresse,  [code postal](https://www.canadapost.ca)<sup><abbr title="marque officielle">MO</abbr></sup>, territoire administratif, lieu, etc. Il se fonde, entre autres, sur les données d'[Adresses Québec](http://adressesquebec.gouv.qc.ca/).
+ Permet de formater des adresses selon la base de données d'Adresse Québec.
+ [Accéder à la documentation d'iCherche](https://icherche.geo.msp.gouv.qc.ca/docs)

<a id="1.2"></a>
#### 1.2. TerrAPI (API de géocodage inversé et de recherche spatiale) :
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
+ [Accéder à la documentation de TerrAPI](https://terrapi.geo.msp.gouv.qc.ca/docs)

<a id="1.3"></a>
#### 1.3. Service de calcul d’itinéraire :
+ Permet de calculer des itinéraires, des temps de déplacement et des distances entre deux points selon le réseau routier;
+ Permet de gérer des itinéraires optimisés (ex.: meilleur parcours entre deux points) avec des requêtes en lot possibles;
+ Alimenté par les données de réseau routier [AQréseau+](https://www.donneesquebec.ca/recherche/dataset/adresses-quebec/resource/0d5df103-f856-4183-9a15-eb06fce9c8bf) d’Adresses Québec; 
+ Basé sur la solution [OSRM](http://project-osrm.org/).
+ [Accéder à la documentation du service d'itinéraire](http://igouverte.org/documentation/doc_itineraire/)

<a id="1.4"></a>
#### 1.4. Service de géocodage en lot :
+ Permet de  géocoder des points à partir d’une liste d’adresses ou de codes postaux contenus dans un fichier tabulaire/texte (ex.: CSV);
+ Basé sur le service de géocodage iCherche et les données d'Adresses Québec.
+ [Accéder à la documentation du service de géocodage en lot](https://icherche.geo.msp.gouv.qc.ca/docs/enlot)

<a id="1.5"></a>
#### 1.5. Service de recherche de lots cadastraux :
+  Permet de localiser un lot par numéro de lot du cadastre rénové du Québec. Ce service est offert par le service de la géomatique de la [Commission de protection du territoire agricole du Québec](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1).


<a id="2"></a>
# 2. Conditions d'utilisation

#### **2.1. Utilisations autorisées** 

+ L'utilisation des services est autorisée pour les ministères et organismes du gouvernement du Québec ainsi que les organisations participant au partage de données gouvernementales.

#### **2.2. Droits d'auteur** 
+ L'utilisateur doit inclure la mention des droits d’auteur du Gouvernement du Québec sur chaque copie de la totalité ou d’une partie de ces services de données. La mention à inscrire est « © Gouvernement du Québec » avec un hyperlien vers cette page : [http://www.droitauteur.gouv.qc.ca/copyright.php](http://www.droitauteur.gouv.qc.ca/copyright.php).

#### **2.3. Informations complémentaires** 

+ Le ministère de la Sécurité publique du Québec (MSP) et ses partenaires gouvernementaux dans IGO ne peuvent garantir l’exactitude des services de données et ils ne peuvent être tenus responsables des conclusions obtenues à la suite de l’utilisation de ceux-ci. Le MSP et ses partenaires gouvernementaux dans IGO n’assumeront aucune responsabilité à l’égard de tout dommage subi par l’utilisateur ou ses employés, agents, représentants ou sous-traitants à la suite de l’utilisation de ces services de données.

+ Les services sont disponibles 24 heures par jour, 7 jours sur 7, à l’exception des périodes d’interruption planifiées ou non. À moins d’une situation urgente, les interruptions planifiées sont annoncées un minimum de 3 jours ouvrables à l'avance.

+ Un support est assuré du lundi au vendredi, soit de 8h30 à 16h30 lors des heures normales, à l’exception des jours fériés. S’il y a un problème majeur à l’extérieur de ces heures ouvrables, la demande sera traitée à la prochaine période de 8h30 à 16h30 du lundi au vendredi, à l’exception des jours fériés.

+ Pour être ajouté à la liste de diffusion informant des avis d’interruption ou de tout changement apporté aux services, veuillez adresser votre demande en utilisant le formulaire [Contactez-nous](http://igouverte.org/#footer) de ce site.


#### **2.4. Nous joindre** 
+ N’hésitez pas à communiquer avec nous à l’adresse courriel suivante : info@igouverte.org ou utilisez le formulaire [Contactez-nous](http://igouverte.org/#footer) de ce site.
