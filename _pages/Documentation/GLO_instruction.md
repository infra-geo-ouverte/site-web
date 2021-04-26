---
permalink: 
layout: general
iconedocumentation: ""
submenu:
  -
    hook: "introduction"
    title: "Introduction"
  -
    hook: "mode"
    title: "Mode d’utilisation"
    submenu:
        -
            hook: "http_rest_get"
            title: "HTTPs en mode GET"
        -
            hook: "soap"
            title: "SOAP"
  -
    hook: "type"
    title: "Type de recherche"
  -
    hook: "reponse"
    title: "Réponse (JSON)"
    submenu:
        -
            hook: "rep_adresse"
            title: "Recherche d'adresse"
        -
            hook: "rep_lieu"
            title: "Recherche de lieu"
        -
            hook: "rep_borne_kilo"
            title: "Recherche de borne kilométrique"
        -
            hook: "rep_coord_gps"
            title: "Recherche par coordonnée"
        -
            hook: "rep_reverse_geocoding"
            title: "Recherche inversée par coordonnée"
  - 
    hook: "exemple"
    title: "Exemple"
    submenu:
        -
            hook: "adresse"
            title: "Recherche d'adresse"
        -
            hook: "lieu"
            title: "Recherche de lieu"
        -
            hook: "borne_kilo"
            title: "Recherche de borne kilométrique"
        -
            hook: "coord_gps"
            title: "Recherche par coordonnée"
        -
            hook: "reverse_geocoding"
            title: "Recherche inversée par coordonnée"
  -
    hook: "version"
    title: "Historique des versions du service Web ( GLO )"
    submenu:
        -
            hook: "v1"
            title: "Version #1"
        -
            hook: "v2"
            title: "Version #2"
        -
            hook: "v3"
            title: "Version #3"
        -
            hook: "v5"
            title: "Version #5"
        -
            hook: "v6"
            title: "Version #6"
---

# Service web de "GéoLOcalisation (GLO)"

<a id="introduction"></a>
## Introduction [<span class="octicon octicon-link"></span>](#introduction)

Afin de faciliter le positionnement sur le territoire Québécois, le Ministère de la Sécurité Publique du Québec (MSP) à mis en place un service Web dédié à cette fin. Ce service de «  géolocalisation  » est entièrement interopérable et permet de localiser des adresses, des codes postaux, des rues, des municipalités, des  MRC , des toponymes, des édifices publics (écoles, hôpitaux,  CLSC , CPE), des entreprises et même des bornes kilométriques situées sur le réseau routier du Ministère des Transports ( MTQ ).  L’innovation de ce service repose sur sa haute fiabilité, son utilisation multiplateforme ainsi que sur la fréquence de ses mises à jour.


### Sécurité d’accès

Le contrôle d’accès au service Web se fait via une clé d’utilisation (semblable à celle requise pour utiliser l’API de Google Maps ). Cette clé permet au  MSP  de contrôler les accès et par le fait même, le contenu de sa base de données. Les clés permettent également d’autoriser ou d’empêcher l’utilisation de certains types de recherche selon l’organisation ou l’utilisateur qui tente de se connecter.  Les clés d’accès sont émises par le  MSP  et sont contrôlées en fonction d’une suite d’adresses IP reliée au domaine Internet du requérant.Pour obtenir une clé, il suffit d’en faire la demande auprès du ministère via l’adresse de courriel suivante: [geomsp@msp.gouv.qc.ca](mailto:geomsp@msp.gouv.qc.ca).

### NOTE  IMPORTANTE

#### Ce service ne doit pas être utilisé en mode lot. IL EST UN SERVICE EN LIGNE. Il est INTERDIT de lancer des appels par un programme, service, module quelconque qui permettrait de géocoder des milliers adresses. Si le besoin de votre organisation est de géocoder quelques centaines ou milliers d’adresses, veuillez communiquer avec nous pour l’utilisation du service  GLO  utilisable en mode lot, qui est beaucoup plus efficace. Si un organisme utilise le  GLO  pour un géocodage en lot, son accès lui sera retiré sans préavis.  
  
  
<a id="mode"></a>
### Mode d’utilisation [<span class="octicon octicon-link"></span>](#mode)

<a id="http_rest_get"></a>
####1) HTTPs en mode GET
La première façon d’utiliser le service est par un simple appel URL (REST) en mode GET, directement dans un fureteur Internet.Cette méthode est plus simple, car elle ne nécessite pas de programmation (création d’un message ou d’un client en format SOAP).Cette méthode retourne l’information sous plusieurs formes possibles.


Voici un exemple d’appel en mode HTTPs.

Pour la version 5:  
https://geoegl.msp.gouv.qc.ca/services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg=900913&format=xml

Pour la version 6 :  
https://geoegl.msp.gouv.qc.ca/services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg_sortie=900913&format=JSON

Liste des paramètres:

| Variable | Valeurs possibles | Obligatoire |
| ---- | ---- | ---- |
| Texte   | Chaîne de caractères pour la recherche | Oui|
| cle     | Clé d’accès émise par le MSP  | Oui |
| type    | 'adresse'<br>'lieu'<br>'borne'<br>'gps'<br>'hq | Oui – « adresse »  par défaut |
| epsg    | Système de référence des coordonnées en sortie.<br>Les valeurs possibles sont ceux supporté par PostGIS v2.0.1 | Oui¹<br>(système de coordonnée de la source par défaut) |
| indDebut | Permet de spécifier l’index de départ de la réponse, (optionnel, 0 par défaut)  | Non<br>(0 par défaut) |
| indFin | Permet de spécifier l’index de fin de la réponse, (optionnel 79 par défaut)  | Non<br>(79 par défaut) |
| format | Permet de spécifier le type de format de sortie du fichier :<br>- XML<br>- HTML<br>- JSON²<br>- EXCEL²<br>- JSONP²  | Oui<br>(XML par défaut) |
| epsg_entree² | Le code EPSG des coordonnées en entrée.<br>Les valeurs possibles sont ceux supporté par PostGIS v2.0.1 | Non |
| epsg_sortie² | Le code EPSG des coordonnées en sortie.<br>Les valeurs possibles sont ceux supporté par PostGIS v2.0.1.  Le paramètre "epsg" et "epsg_sortie" sont égaux dans la version 6 | Non<br>(32198 par défaut)|
| groupe² | Permet de regrouper les adresses positionnées aux mêmes coordonnées et possédant les mêmes attributs.  1=regrouper  0=pas grouper | Non<br>(0 par défaut) |
| callback² | Nom de la méthode à utiliser (côté client) lors du retour de la réponse.<br>Ce paramètre est lié au format 'JSONP' | Non |
| param_output² | Liste des attributs séparé par une virgule qui seront compris dans la réponse du service.<br>L'utilisation de "\*" permet de choisir tous les attributs possibles.<br>Les attributs listés après "\*" seront écartés.<br>Pour le contenu de 'placeListe', les possibilités sont :<br>regadmin, regtourisme, agglomeration, mrc, toponyme, mun et placeliste pour l'ensemble des lieux.<br><br><b>DISPONIBLE SEULEMENT POUR LES RECHERCHES DE TYPE 'adresse'</b> | Non<br>(* par défaut) |

<span style="color:red">
¹ Avec la version 5 seulement  
² Avec la version 6 seulement

</span>

Exemple qui retourne les 49 premiers enregistrements seulement

Pour la version 5:  
https://geoegl.msp.gouv.qc.ca/services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=49&epsg=32198&format=xml

Exemple qui retourne les enregistrements mais dont les coordonnées sont dans le système de projection de Google :

Pour la version 5:  
https://geoegl.msp.gouv.qc.ca/services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg=900913&format=xml  

Pour la version 6 :  
https://geoegl.msp.gouv.qc.ca/services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg=900913&format=xml  
ou  
https://geoegl.msp.gouv.qc.ca/services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg_sortie=900913&format=xml  

Exemple qui ne retourne que l'attribut 'addresseLibre' :  
Pour la version 6 :  
https://geoegl.msp.gouv.qc.ca/services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg_sortie=900913&format=json&param_output=adresselibre  

Exemple qui retourne l'ensemble des attributs exempté 'addresseLibre' :  
Pour la version 6 :  
https://geoegl.msp.gouv.qc.ca/services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg_sortie=900913&format=json&param_output=*,adresselibre

<a id="soap"></a>
####2) SOAP  
La deuxième façon est d’appeler le service Web en utilisant un langage de programmation (Java, .Net, PHP,  etc …) et le protocole SOAP. Il requiert la création d’une requête (ou message) SOAP avec les paramètres requis. 
Les différents paramètres ainsi que les méthodes exposées par le service Web sont définies dans le fichier  WSDL (Web Service Definition Language](https://www.w3.org/TR/wsdl "Web Service Definition Language")

Version 5 :  
https://geoegl.msp.gouv.qc.ca/services/glo/V5/gloServeur.php?WSDL  
Version 6 :  
https://geoegl.msp.gouv.qc.ca/services/glo/V6/gloServeur.php?WSDL  

Voici les méthodes présentement supportées par le service :

*     Geocoder() : Pour les recherches d’adresses, de lieux ou des éléments du réseau d’Hydro-Québec.¹
*     GeocoderBorne() : Pour les recherches de type 'borne'
*     GeocoderGPS() : Pour les recherches de type 'gps'
*     GeocoderReverseGeocoding()² : Pour les recherches inversées par coordonnées.
*     GeocoderLieu()² : Pour les recherches de type 'lieu'

¹ La recherche de lieu se fait avec 'GeocoderLieu' dans la version 6.  
² Depuis la version 6 

<a id="type"></a>
### Type de recherche [<span class="octicon octicon-link"></span>](#type)

Le service Web supporte cinq types de recherche :

| Type de recherche | Code |
| ---- | ---- |
| Par adresse (combinaison de code postal, no. civique, rue ou ville)         | adresse |
| Par lieux d‘intérêts (restaurant, entreprise, école, etc…)                  | lieu  |
| Par borne kilométrique (borne et no. de route)                              | borne |
| Par coordonnées GPS (lat, lon) ou (lon, lat), UTM, MTM, format Bell         | gps   |
| Infrastructure d’Hydro-Québec (poteau, barrage, centrale, etc…)             | hq    |
| Recherche inversée par coordonnée (reverse geocoding)                       | reverse |  

<br>

Certaines recherches peuvent être limitées à une clientèle bien précise (ex : La recherche sur les éléments du réseau d’Hydro-Québec est disponible seulement par les intervenants en sécurité civile).  Cette gestion est  effectué  via la clé d’accès décrite ci haut.  

Le service de recherche considère uniquement une seule chaîne de caractères par requête (paramètre <texte> ). Par contre, cette chaîne peut comporter plusieurs valeurs (ex : 1715 rue  Merlac , Québec). Contrairement à l’engin de recherche de Google, l’ordre dans lequel les paramètres sont placés dans la chaîne à une importance sur la performance et qualité des résultats obtenus.  

Depuis la version 5 du  GLO , il est possible de passer une chaine de caractères ne correspondant à aucun pattern pour la recherche par adresse. Une recherche de similarité phonétique est alors déclenchée.  

Ex: 2525 Québec Laurier  G1V   2L2  boulevard

La fonction cherche donc les mots demandés.Ces mots peuvent être coupés au début ou avec des fautes d’orthographe à l’intérieur des mots. Les mots sont alors affectés d’un poids et ceux le plus près de 100% sont retournés.

Cette nouvelle fonctionnalité est un peu plus lente que la recherche par pattern qui est beaucoup plus rapide.

<a id="reponse"></a>
### Réponse (JSON)[<span class="octicon octicon-link"></span>](#reponse)
<a id="rep_adresse"></a>
####1. Adresse  

```JSON
{
entree: "G1M 2L1",
geocoderReponseListe: [
{
  adresseLibre: "Code postal : G1M2L1",
  noCiviqDebut: null,
  noCiviqFin: null,
  nomRue: null,
  placeListe: [{
      type: "Région administrative",
      nom: "Capitale-Nationale",
      code: "03"
    }, {
      type: "Région touristique",
      nom: "Région de Québec",
      code: "04"
    }, {
      type: "Agglomération",
      nom: "Agglomération de Québec"
    }, {
      type: "MRC",
      nom: "Québec",
      code: "23"
    }, {
      type: "Toponyme",
      nom: "Domaine-Saint-Charles",
      distance: 0.1
    }, {
      type: "Municipalité",
      nom: "Québec",
      code: "23027"
  }],
  metadonnee: {
    classe: "Adresse Québec version 09",
    source: "AQ",
    date: "2015/04/07 00:00:00"
  },
  CP: {
    codePostal: "G1M2L1",
    Copyright: "Marque officielle de la Societe canadienne des postes",
    estValide: true
  },
  localisation: {
    point: {
      x: "-212066.364694469",
      y: "317000.733309207",
      SRS: {
        nom: "EPSG",
        codeEPSG: "32198",
        WKT: "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
      }
    },
    enveloppe: {
      Xmin: null,
      Ymin: null,
      Xmax: null,
      Ymax: null,
      SRS: {
        nom: "",
        codeEPSG: 0,
        WKT: ""
      }
    }
  },
  geocodeMatchCode: null,
  noCiviq: null,
  noCiviqDebutDroite: 0,
  noCiviqFinDroite: 0,
  noCiviqDebutGauche: 0,
  noCiviqFinGauche: 0,
  codeMuncp: "23027",
  noMatricule: null,
  noSeqAdrCivique: null,
  noCivqSuffx: "",
  noApprt: 0,
  noApprtSuffx: "",
  statut: {
    etat: "Officiel",
    description: "Valide",
    commentaire: "Centroïde du code postal"
  },
  idStat: "59418"
},
{
  adresseLibre: "1685 Rue De Merlac, Québec",
  noCiviqDebut: null,
  noCiviqFin: null,
  nomRue: "Rue De Merlac",
  placeListe: [{
      type: "Région administrative",
      nom: "Capitale-Nationale",
      code: "03"
    }, {
      type: "Région touristique",
      nom: "Région de Québec",
      code: "04"
    }, {
      type: "Agglomération",
      nom: "Agglomération de Québec"
    }, {
      type: "MRC",
      nom: "Québec",
      code: "23"
    }, {
      type: "Toponyme",
      nom: "Domaine-Saint-Charles",
      distance: 0.1
    }, {
      type: "Municipalité",
      nom: "Québec",
      code: "23027"
  }],
  metadonnee: {
    classe: "Adresse Québec version 09",
    source: "AQ",
    date: "2015/04/07 00:00:00"
  },
  CP: {
    codePostal: "G1M2L1",
    Copyright: "Marque officielle de la Societe canadienne des postes",
    estValide: true
  },
  localisation: {
    point: {
      x: "-212029.399202871",
      y: "317022.878817326",
      SRS: {
        nom: "EPSG",
        codeEPSG: "32198",
        WKT: "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
      }
    },
    enveloppe: {
      Xmin: null,
      Ymin: null,
      Xmax: null,
      Ymax: null,
      SRS: {
        nom: "",
        codeEPSG: 0,
        WKT: ""
      }
    }
  },
  geocodeMatchCode: "100",
  noCiviq: "1685",
  noCiviqDebutDroite: 0,
  noCiviqFinDroite: 0,
  noCiviqDebutGauche: 1681,
  noCiviqFinGauche: 1695,
  codeMuncp: "23027",
  noMatricule: "458600378010000000",
  noSeqAdrCivique: "1457598",
  noCivqSuffx: "null",
  noApprt: 0,
  noApprtSuffx: "0",
  statut: {
    etat: "Officiel",
    description: "Valide",
    commentaire: null
  },
  idStat: "1cbe225a984536bee05358f2298ed5fe"
},
  ...
],
nombreResultat: 10,
RemarqueListe: [ ]
}
```  

* `entree` : Chaine de caractère entrée en paramètre.
* `geocoderReponseListe` : Liste des adresses sous cette forme:`[{adresseLibre}, {nomRue}, {noCiviq}, {noCiviqDebutDroite}, {noCiviqFinDroite}, {noCiviqDebutGauche}, {noCiviqFinGauche}, {codeMuncp}, {noMatricule}, {noSeqAdrCivique}, {noCivqSuffx}, {noApprt}, {noApprtSuffx}, {idStat}, {placeListe}, {metadonnee}, {CP}, {localisation}, {statut}, {noCiviqDebut},{noCiviqFin}, {geocodeMatchCode}]`
  * `adresseLibre` : Chaine de caractère identifiant l'adresse pouvant prendre plusieurs formes.  
                      Pour une adresse normale : {Numéro civique} {odonyme}, {Nom dela municipalité}  
                      Pour une municipalité : {Nom de la municipalité} - {désignation} ({région administrative})  
                      Pour un arrondissement : {Nom} (Arrondissement de {nom de la municipalité})  
                      ... 
  * `nomRue` : Odonyme.
  * `noCiviq` : Numéro civique.
  * `noCiviqDebutDroite` : Numéro civique minimale à droite du segment de route auquel l'adresse est associé.
  * `noCiviqFinDroite` : Numéro civique maximale à droite du segment de route auquel l'adresse est associé.
  * `noCiviqDebutGauche` : Numéro civique minimale à gauche du segment de route auquel l'adresse est associé.
  * `noCiviqFinGauche` : Numéro civique maximale à gauche du segment de route auquel l'adresse est associé.
  * `codeMuncp` : Code de municipalité.
  * `noMatricule` : Numéro de matricule. 
  * `noSeqAdrCivique` : identifiant unique des adresses du référentiel du DGE.
  * `noApprt` : Numéro d'appartement.
  * `noApprtSuffx` : Suffixe d'appartement. 
  * `idStat` : identifiant unique du MSP
  * `placeListe` : Liste de lieu relié à l'adresse représenté sous cette forme : `[{type}, {nom}, {code}, {distance}]`
      * `type` : Descriptif du lieu. Les valeurs possibles sont : 'Lieu', 'Municipalité', 'MRC', 'Région administrative', 'Région touristique', 'Toponyme', 'Agglomération'
      * `nom` : Nom du lieu.
      * `distance` : Distance du toponyme, s'il y a lieu.
      * `code` : Code représentant le lieu, s'il y a lieu.
  * `metadonnee` : Métadonnée sous la forme :  `{classe}, {source}, {date}`
      * `classe` : Descriptif de la donnée.
      * `source` : Descriptif du producteur de la donnée.
      * `date` : Date de la dernière mise à jour.
  * `CP` : Code postal sous la forme : `{codePostal},{Copyright},{estValide}`
      * `codePostal` : le code postal.
      * `Copyright` : Description des droits d'auteurs de Poste Canada.
      * `estValide` : Confirme ou non que le code postal est contenu dans Adresse Québec.
  * `localisation` : Localisation de l'adresse sous la forme : `{point}, {enveloppe}`
      * `point` : Coordonnée de la localisation sous la former : `{x},{y},{SRS}`
          * `x` : Coordonnée X de la localisation.
          * `y` : Coordonnée X de la localisation.
          * `SRS` : Système de coordonnée du point sous la forme :
            `{nom},{codeEPSG},{WKT}`
              * `nom`: Nom de l'instance définissant le système de coordonnée.
              * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
              * `WKT`: système de coordonnée en format WKT (Well Known Text).
      * `enveloppe` : étendue rectangulaire de l'entité sous la forme : `{Xmin}, {Ymin}, {Xmax}, {Ymax}, {SRS}`
          * `Xmin` : Coordonnée minimum en X.
          * `Ymin` : Coordonnée minimum en Y.
          * `Xmax` : Coordonnée maximum en X.
          * `Ymax` : Coordonnée maximum en Y.
          * `SRS` : Système de coordonnée de l'étendue sous la forme : `{nom},{codeEPSG},{WKT}`
              * `nom`: Nom de l'instance définissant le système de coordonnée.
              * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
              * `WKT`: système de coordonnée en format WKT (Well Known Text).
  * `statut` : statut sous la forme : `{etat},{description},{commentaire}`
      * `etat` : Valeurs possibles : 'Officiel' et 'Non-Officiel'.
      * `description` : Description de l'état. Valeurs possibles : 'Valide', 'Supprimé', 'Ajouté', 'Modification sur description seulement', 'Modification sur géométrie seulement', 'Modification sur géométrie et description','Résultat dérivé de l'historique'.
      * `commentaire` : Commentaire supplémentaire pouvant contenir diverse informtaion comme l'ancien nom de rue ou une explication des modifications apportées à l'adresse.
  * `noCiviqDebut` : N'EST PLUS MAINTENU. Sera supprimé lors de la prochaine version.
  * `noCiviqFin` : N'EST PLUS MAINTENU. Sera supprimé lors de la prochaine version.
  * `geocodeMatchCode` : N'EST PLUS MAINTENU. Sera supprimé lors de la prochaine version.
* `nombreResultat` : Nombre total d'adresse retournée par le service.
* `RemarqueListe` : Liste de recherche alternative possible.


<a id="rep_lieu"></a>
####2. Lieu 

```JSON
{
  entree: "pizzeria paquet",
  geocoderReponseListe: [
  {
    adresseLibre: "(MRQ) - 251A, rue Saint-Pierre",
    nomRue: "Saint-Pierre",
    placeListe: [
      {
        type: "Lieu",
        nom: "Pizzéria Chez Paquet Inc."
      },
      {
        type: "Municipalité",
        nom: "Saint-Raymond"
      },
      {
        type: "Région Administrative",
        nom: "Capitale-Nationale"
      },
      {
        type: "MRC",
        nom: "Portneuf"
      }
    ],
    metadonnee: {
      classe: "",
      source: "MRQ",
      date: "2010-11-09"
    },
    CP: {
      codePostal: "G1L1R1",
      Copyright: "Marque officielle de la Societe canadienne des postes",
      estValide: true
    },
    localisation: {
      point: {
        x: "-253862.396031291",
        y: "327269.032328114",
        SRS: {
          nom: "EPSG",
          codeEPSG: "32198",
          WKT: "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
        }
      },
      enveloppe: {
        Xmin: null,
        Ymin: null,
        Xmax: null,
        Ymax: null,
        SRS: {
          nom: "",
          codeEPSG: 0,
          WKT: ""
        }
      }
    },
    geocodeMatchCode: null,
    noCiviq: "251",
    noCiviqDebutDroite: null,
    noCiviqFinDroite: null,
    noCiviqDebutGauche: null,
    noCiviqFinGauche: null,
    codeMuncp: null,
    noMatricule: null,
    noSeqAdrCivique: null,
    noCivqSuffx: null,
    noApprt: null,
    noApprtSuffx: null,
    statut: {
      etat: null,
      description: null,
      commentaire: null
    },
    idStat: null
  },
  {},
  {},
  {},
  {},
  {}
  ],
  nombreResultat: 6,
  RemarqueListe: [ ]
}
```
La réponse est la même qu'une recherche d'adresse. 

<a id="rep_borne_kilo"></a>
####3. Borne Kilométrique 

```JSON
{
  borneReponseListe: [
  {
    detail: "Route 40 Est - Sortie 254 - Affichage: Route 363, Saint-Alban, Saint-Marc-des-Carrières, Route Dussault",
    localisation: {
      point: {
        x: "-267342.792338539",
        y: "300379.376077055",
        SRS: {
          nom: "EPSG",
          codeEPSG: "32198",
          WKT: "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
        }
      },
      enveloppe: {
        Xmin: null,
        Ymin: null,
        Xmax: null,
        Ymax: null,
        SRS: {
          nom: "",
          codeEPSG: 0,
          WKT: ""
        }
      }
    },
    metadonnee: {
      classe: "Repères kilométriques MTQ",
      source: "MTQ",
      date: "2014/12/15 00:00:00"
    }
  },
  {
    ...
  }
  ],
  nombreResultat: 2,
  RemarqueListe: [ ],
  entree: "SORTIE_254_40"
}
```

* `borneReponseListe` : Liste des bornes sous cette forme: `[{detail}, {localisation}, {metadonnee}]`  
  * `detail` : Chaine de caractère identifiant bornes pouvant prendre plusieurs formes selon la recherche.
  * `localisation` : Localisation de l'adresse sous la forme : `{point}, {enveloppe}`
  * `point` : Coordonnée de la localisation sous la former : `{x},{y},{SRS}`
      * `x` : Coordonnée X de la localisation.
      * `y` : Coordonnée X de la localisation.
      * `SRS` : Système de coordonnée du point sous la forme : `{nom},{codeEPSG},{WKT}`
          * `nom`: Nom de l'instance définissant le système de coordonnée.
          * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
          * `WKT`: système de coordonnée en format WKT (Well Known Text).
  * `enveloppe` : étendue rectangulaire de l'entité sous la forme : `{Xmin}, {Ymin}, {Xmax}, {Ymax}, {SRS}`
      * `Xmin` : Coordonnée minimum en X.
      * `Ymin` : Coordonnée minimum en Y.
      * `Xmax` : Coordonnée maximum en X.
      * `Ymax` : Coordonnée maximum en Y.
      * `SRS` : Système de coordonnée de l'étendue sous la forme : `{nom},{codeEPSG},{WKT}`
          * `nom`: Nom de l'instance définissant le système de coordonnée.
          * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
          * `WKT`: système de coordonnée en format WKT (Well Known Text).
  * `metadonnee` : Métadonné sur le lieu sous la forme : `{classe}, {source}, {date}`
      * `classe` : Description de la donnée.
      * `source` : Nom désignant la source de la donnée.
      * `date` : Date de la dernière mise à jour.
* `nombreResultat` : Nombre total de lieu retourné par le service.
* `RemarqueListe` : Liste de recherche alternative possible.
* `entree` : Chaine de caractère entrée en paramètre.

<a id="rep_coord_gps"></a>
####4. Coordonnées GPS  

```JSON
{
  entree: {
    x: -68.223274883333,
    y: 49.0859605,
    SRS: {
      nom: "EPSG",
      codeEPSG: "4269",
      WKT: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs "
    }
  },
  patternCoordInput: "degrés minutes décimales",
  rayonIncertitude: "",
  coteCertitude: "",
  formatCoordInput: "dd mm.mmm",
  localisation: {
    municipalite: "Pointe-Lebel",
    regionAdministrative: "Côte-Nord",
    mrc: "Manicouagan",
    agglomeration: "",
    localite: "Pointe Paradis",
    distance: 0.7,
    metadonnee: null,
    regionTouristique: "Manicouagan",
    point: {
      x: "20112.8015548701",
      y: "564966.596538928",
      SRS: {
        nom: "EPSG",
        codeEPSG: "32198",
        WKT: "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
      }
    },
    placeListe: [{
      type: "Municipalité",
      nom: "Pointe-Lebel",
      code: "96025"
    }, {
      type: "Région administrative",
      nom: "Côte-Nord",
      code: "09"
    }, {
      type: "MRC",
      nom: "Manicouagan",
      code: "96"
    }, {
      type: "Toponyme",
      nom: "Pointe Paradis",
      distance: 0.7
    }, {
      type: "Région touristique",
      nom: "Manicouagan",
      code: "16"
    }],
  },
  nombreResultat: 1,
  RemarqueListe: [ ]
}
```

* `entree` : Chaine de caractère entrée par l'utilisateur sous la forme : `{'x'},{y},{SRS}`
    * `x` : Coordonnée X de la localisation.
    * `y` : Coordonnée X de la localisation.
    * `SRS` : Système de coordonnée du point sous la forme : `{nom},{codeEPSG},{WKT}`
      * `nom`: Nom de l'instance définissant le système de coordonnée.
      * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
      * `WKT`: système de coordonnée en format WKT (Well Known Text).
* `patternCoordInput` : Pattern des coordonnées en entrée. Les valeurs possibles sont : 'UTM fuseau "code_fuseau"', 'MTM fuseau "code_fuseau"', 'degrés décimaux', 'degrés minutes décimales', 'Degrés minutes secondes', 'BELL-E911-SSF', 'Metre Metre' 
* `rayonIncertitude` : Rayon d'incertitude pour le pattern 'BELL-E911-SSF'
* `coteCertitude` : Cote d'incertitude sur le rayon pour le pattern 'BELL-E911-SSF'
* `formatCoordInput` : Description du pattern. Les valeurs possibles sont : 'X, Y','dd.ddd','dd mm.mmm','dd mm ss.s','Lat: dd mm ss.s Long: dd mm ss.s UNC: CONF:'
* `localisation` : Localisation du point sous la forme : `{point}, {municipalite},{regionAdministrative},{mrc},{agglomeration},{localite},{regionTouristique},{distance},{metadonnee},{placeListe}`
  * `point` : Coordonnée de la localisation sous la former : `{x},{y},{SRS}`
      * `x` : Coordonnée X de la localisation.
      * `y` : Coordonnée X de la localisation.
      * `SRS` : Système de coordonnée du point sous la forme : `{nom},{codeEPSG},{WKT}`
          * `nom`: Nom de l'instance définissant le système de coordonnée.
          * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
          * `WKT`: système de coordonnée en format WKT (Well Known Text).
  * `municipalite` : Nom de la municipalité contenant le point.
  * `regionAdministrative` : Région administrative contenant le point.
  * `mrc` : MRC contenant le point.
  * `agglomeration` : Agglomération contenant le point.
  * `regionTouristique` : Région touristique contenant le point.
  * `localite` : Nom du lieu le plus près du point provenant de la Commission de la toponymie.
  * `distance` : Distance du lieu le plus près.
  * `metadonnee` : Métadonnée.
  * `placeListe` : Liste de lieu relié à l'adresse représenté sous cette forme : `[{type}, {nom}]`
      * `type` : Descriptif du lieu. Les valeurs possibles sont : 'Lieu', 'Municipalité', 'MRC', 'Région administrative', 'Région touristique', 'Toponyme', 'Agglomération'
      * `nom` : Nom du lieu.
      * `distance` : Distance du toponyme s'il y a lieu.
      * `code` : Code représentant le lieu.
* `nombreResultat` : Nombre total d'adresse retournée par le service.
* `RemarqueListe` : Liste de recherche alternative possible.

<a id="rep_reverse_geocoding"></a>
####5. Recherche inversée par coordonnée

```JSON
{
  entree: {
    x: -68.223274888889,
    y: 49.0859605,
    SRS: {
      nom: "EPSG",
      codeEPSG: "4269",
      WKT: "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs "
    }
  },
  geocoderReponseListe: [
  {
    distance: 648.82904027354,
    adresseLibre: "1529 Rue Granier, Pointe-Lebel",
    nomRue: "Rue Granier",
    placeListe: [
      {
        type: "Municipalité",
        nom: "Pointe-Lebel"
      }
    ],
    metadonnee: {
      classe: "Adresse Québec version 09",
      source: "AQ",
      date: "2015/04/07 00:00:00"
    },
    CP: {
      codePostal: "G0H1N0",
      Copyright: "Marque officielle de la Societe canadienne des postes",
      estValide: null
    },
    localisation: {
      point: {
        x: "19779.5323438489",
        y: "565523.293066587",
        SRS: {
        nom: "EPSG",
        codeEPSG: "32198",
        WKT: "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs "
      }
      },
      enveloppe: {
        Xmin: null,
        Ymin: null,
        Xmax: null,
        Ymax: null,
        SRS: {
        nom: "",
        codeEPSG: 0,
        WKT: ""
      }
      }
    },
    geocodeMatchCode: "100",
    noCiviq: "1529",
    noCiviqDebutDroite: 1356,
    noCiviqFinDroite: 1510,
    noCiviqDebutGauche: 1351,
    noCiviqFinGauche: 1533,
    codeMuncp: null,
    noMatricule: "513952963700000000",
    noSeqAdrCivique: "4267163",
    noCivqSuffx: "null",
    noApprt: 0,
    noApprtSuffx: "0",
    statut: {
    etat: null,
    description: null,
    commentaire: null
    },
    idStat: "90048045"
  },
    ...
  ,
  nombreResultat: 78,
  RemarqueListe: [ ]
}
```
* `entree` : Chaine de caractère entrée par l'utilisateur sous la forme : `{x},{y},{SRS}`
    * `x` : Coordonnée X de la localisation.
    * `y` : Coordonnée X de la localisation.
    * `SRS` : Système de coordonnée du point sous la forme : `{nom},{codeEPSG},{WKT}`
      * `nom`: Nom de l'instance définissant le système de coordonnée.
      * `codeEPSG`: identifiant unique du système de coordonnée défini par l'instance.
      * `WKT`: système de coordonnée en format WKT (Well Known Text).
* `geocoderReponseListe` : Liste des adresses sous cette forme: `[{distance}, {adresseLibre}, {nomRue}, {noCiviq}, {noCiviqDebutDroite}, {noCiviqFinDroite}, {noCiviqDebutGauche}, , {noCiviqFinGauche}, {codeMuncp}, {noMatricule}, {noSeqAdrCivique}, {noCivqSuffx}, {noApprt}, {noApprtSuffx}, {idStat}, {placeListe}, {metadonnee}, {CP}, {localisation}, {statut}, {noCiviqDebut},{noCiviqFin}, {geocodeMatchCode}]`
  * `distance` : distance entre le point et l'adresse.
  * `adresseLibre` : Chaine de caractère identifiant l'adresse pouvant prendre plusieurs formes.  
                      Pour une adresse normale : {Numéro civique} {odonyme}, {Nom dela municipalité}  
                      Pour une municipalité : {Nom de la municipalité} - {désignation} ({région administrative})  
                      Pour un arrondissement : {Nom} (Arrondissement de {nom de la municipalité})  
                      ...
  * `nomRue` : Odonyme.
  * `noCiviq` : Numéro civique.
  * `noCiviqDebutDroite` : Numéro civique minimale à droite du segment de route auquel l'adresse est associé.
  * `noCiviqFinDroite` : Numéro civique maximale à droite du segment de route auquel l'adresse est associé.
  * `noCiviqDebutGauche` : Numéro civique minimale à gauche du segment de route auquel l'adresse est associé.
  * `noCiviqFinGauche` : Numéro civique maximale à gauche du segment de route auquel l'adresse est associé.
  * `codeMuncp` : Code de municipalité.
  * `noMatricule` : Numéro de matricule.
  * `noSeqAdrCivique` : identifiant unique des adresses du référentiel du DGE.
  * `noApprt` : Numéro d'appartement.
  * `noApprtSuffx` : Suffixe d'appartement.
  * `idStat` : identifiant unique du MSP
  * `placeListe` : Liste de lieu relié à l'adresse représenté sous cette forme : `[{type}, {nom}]`
      * `type` : Descriptif du lieu. Les valeurs possibles sont : 'Lieu', 'Municipalité', 'MRC', 'Région administrative'
      * `nom` : Nom du lieu.
  * `metadonnee` : Métadonnée sous la forme : `{classe}, {source}, {date}`
      * `classe` : Descriptif de la donnée.
      * `source` : Descriptif du producteur de la donnée.
      * `date` : Date de la dernière mise à jour.
  * `CP` : Code postal sous la forme : `{codePostal},{Copyright},{estValide}`
      * `codePostal` : le code postal.
      * `Copyright` : Description des droits d'auteurs de Poste Canada.
      * `estValide` : Confirme ou non que le code postal est contenu dans Adresse Québec.
  * `localisation` : Localisation de l'adresse sous la forme : `{point}, {enveloppe}`
      * `point` : Coordonnée de la localisation sous la former : `{x},{y},{SRS}`
        * `x` : Coordonnée X de la localisation.
        * `y` : Coordonnée X de la localisation.
        * `SRS` : Système de coordonnée du point sous la forme : `{nom},{codeEPSG},{WKT}`
            * `nom` : Nom de l'instance définissant le système de coordonnée.
            * `codeEPSG` : identifiant unique du système de coordonnée défini par l'instance.
            * `WKT` : système de coordonnée en format WKT (Well Known Text).
    * `enveloppe` : étendue rectangulaire de l'entité sous la forme : `{Xmin}, {Ymin}, {Xmax}, {Ymax}, {SRS}`
      * `Xmin` : Coordonnée minimum en X.
      * `Ymin` : Coordonnée minimum en Y.
      * `Xmax` : Coordonnée maximum en X.
      * `Ymax` : Coordonnée maximum en Y.
      * `SRS` : Système de coordonnée de l'étendue sous la forme : `{nom},{codeEPSG},{WKT}`
          * `nom` : Nom de l'instance définissant le système de coordonnée.
          * `codeEPSG` : identifiant unique du système de coordonnée défini par l'instance.
          * `WKT` : système de coordonnée en format WKT (Well Known Text).
  * `statut` : Numéro civique.
  * `noCiviqDebut` : N'EST PLUS MAINTENU. Sera supprimé lors de la prochaine version.
  * `noCiviqFin` : N'EST PLUS MAINTENU. Sera supprimé lors de la prochaine version.
  * `geocodeMatchCode` : N'EST PLUS MAINTENU. Sera supprimé lors de la prochaine version.
* `nombreResultat` : Nombre total d'adresse retournée par le service.
* `RemarqueListe` : Liste de recherche alternative possible.


<a id="exemple"></a>
### Exemple [<span class="octicon octicon-link"></span>](#exemple)
Voici des exemples de chaîne qui peuvent être soumise au service :
<a id="adresse"></a>
####1. Adresse

  a) À partir d'un **code postal** seulement

  Ex : <span style="color:blue">**G1M 2L1**</span>  (**avec ou sans espace**)

  = ►   Retourne toutes les adresses (no. civique, la rue ainsi que la ville) qui se retrouvent à l’intérieur du code postal.

  ```
		1681 Rue De  Merlac , Québec
		1685 Rue De  Merlac , Québec
		1691 Rue De  Merlac , Québec
		1695 Rue De  Merlac , Québec
		1701 Rue De  Merlac , Québec
		1705 Rue De  Merlac , Québe
		1711 Rue De  Merlac , Québec
		1715 Rue De  Merlac , Québec
		1721 Rue De  Merlac , Québec
		1725 Rue De  Merlac , Québec
  ```

  b) À partir d’un **code postal et un numéro civique**

  Si le numéro civique existe, Ex :  <span style="color:blue">**G1M 2L1, 1715**</span>

  = ►   Retourne seulement l’adresse qui correspond au numéro civique.

  ```
		1715 Rue De  Merlac , Québec
  ```

  Si le numéro civique n’existe pas,   Ex : <span style="color:blue">**G1M 2L1, 1714**</span>

  = ►   Retourne les adresses en utilisant les tranches de numéros civiques (gauche ou droite) qui se retrouvent à l’intérieur du code postal.

  ```
		1701 Rue De  Merlac , Québec
		1705 Rue De  Merlac , Québec
		1711 Rue De  Merlac , Québec
		1715 Rue De  Merlac , Québec
		1721 Rue De  Merlac , Québec
		1725 Rue De  Merlac , Québec
  ```

  Si le numéro civique ne se retrouve pas dans aucune tranche d’adresse

  = ►   La requête par  <span style="font-size:10.0pt;">**code postal** est effectuée.

  c) À partir d’un **code postal, un numéro civique et un nom de rue**

  Si la combinaison numéro civique et rue existe, Ex:  <span style="color:blue">**J9P 4X2, 511 Sabourin**</span>

  = ►   Retourne seulement l’adresse qui correspond au numéro civique.

  ```
  	511 Boulevard Sabourin,  Vald’Or
  ```

  Si le numéro civique n’existe pas,   Ex:   <span style="color:blue">**J9P4X2 , 510 Sabourin**</span>

  = ►   Retourne les adresses en utilisant les tranches de numéros civiques (gauche ou droite) qui se retrouvent sur la rue spécifiée et à l’intérieur du code postal.

  ```
		511 Boulevard Sabourin,  Vald’Or
		517 Boulevard Sabourin,  Vald’Or
		519 Boulevard Sabourin,  Vald’Or
		525 Boulevard Sabourin,  Vald’Or
    ...
  ```

  Si aucun résultat n’est trouvé
  = ►   La requête par  **nom de rue et un numéro civique** est effectuée.

  d) À partir d’un **code postal et un nom de rue**

  Si la combinaison code postal et nom de rue existe, Ex:  <span style="color:blue"> **G0S2S0, Fortier**</span>

  = ► Retourne toutes les adresses (no. civique, la rue ainsi que la ville) qui se retrouvent sur cette rue à l’intérieur du code postal spécifié.

```
		295 Rue Fortier, Saint-Isidore
		299 Rue Fortier, Saint-Isidore
		300 Rue Fortier, Saint-Isidore
		301 Rue Fortier, Saint-Isidore
		302 Rue Fortier, Saint-Isidore
    ...
```
  Si aucun résultat n’est trouvé

  = ►   La requête par  **code postal** est effectuée.

  e) À partir d’un **numéro civique et un nom de rue**

  Si la combinaison numéro civique + rue existe, Ex : **<span style="color:  blue">100, Blais**</span>

  = ►   Retourne toutes les adresses (no. civique, la rue et la ville) pour toutes les villes du Québec qui ont une rue et un numéro civique correspondant.

  ```
      100 1e rang Blais Sud, Saint-Tharcisius
      100 Boulevard Blais Est, Berthier-sur-Mer
      100 Chemin des Blais, Sainte-Émélie-de-l'Énergie
      100 Rue Blais, Amqui
      100 Rue Lionel-Blais, Saint-Côme
      100 Rue Noël-Blais, Granby
  ```

  Si aucune combinaison numéro civique + rue existe…

  = ►   Retourne toutes les adresses en utilisant les tranches de numéros civiques (gauche ou droite) et le nom de la rue pour toutes les villes du Québec.

  Si aucun résultat…

  = ►   La requête par **nom de rue** est effectuée (le numéro civique est alors ignoré).

  f) À partir d’un **numéro civique, un nom/numéro de rue, et une ville**

  Si une combinaison existe,

  Ex:<span style="color:blue">**72 Fortier,  Amqui**</span>

  Ex:<span style="color:blue">**450 116<sup>e</sup>, Shawinigan**</span>

  = ►   Retourne seulement l’adresse qui correspond au numéro civique.

  ```
    72 rue Fortier,  Amqui
  ```

  ```
    450 116e Avenue, Shawinigan
  ```

  Note : 
  Pour la version 5, il n’est pas nécessaire le générique d'odonyme ('rue', 'route', 'rang', 'avenue', etc.)
  Pour la version 6, le générique d'odonyme est pris en compte.

  Si aucune combinaison numéro civique + rue + ville existe…

  = ►   Retourne toutes les adresses en utilisant les tranches de numéros civiques (gauche ou droite) et le nom de la rue pour la ville spécifié.

  Si aucun résultat…

  = ►   La requête par **nom de rue et numéro civique** est effectuée.

  g) À partir d’un   **nom de rue et une ville**

  Si la combinaison nom de rue et ville existe, Ex:<span style="color:blue">**Fortier, St-Isidore**</span>

  = ►   Retourne toutes les adresses (no. civique, la rue ainsi que la ville) qui se retrouvent sur cette rue à l’intérieur de la ville spécifié.

```
    Boulevard Fortier, Saint-Isidore-de-Clifton
    101 Boulevard Fortier, Saint-Isidore-de-Clifton
    105 Boulevard Fortier, Saint-Isidore-de-Clifton
    106 Boulevard Fortier, Saint-Isidore-de-Clifton
    109 Boulevard Fortier, Saint-Isidore-de-Clifton
    110 Boulevard Fortier, Saint-Isidore-de-Clifton
    111 Boulevard Fortier, Saint-Isidore-de-Clifton
    115 Boulevard Fortier, Saint-Isidore-de-Clifton
    116 Boulevard Fortier, Saint-Isidore-de-Clifton
    ...
    200 Boulevard Fortier, Saint-Isidore-de-Clifton
    Rue Fortier, Saint-Isidore
    295 Rue Fortier, Saint-Isidore
    300 Rue Fortier, Saint-Isidore
    ...
```

  h) À partir d’**un seul mot** qui n’est pas un code postal (rue, municipalité,  MRC  ou région administrative)

  Ex :<span style="color:blue">**Fortier**</span> ou <span style="color:blue">**Québec**</span> ou <span style="color:blue">**Vallée-du-Richelieu**</span> ou <span style="color:blue">**Chaudière-Appalaches**</span> (**important de mettre des traits d’unions dans les noms**)

  = ►   Retourne un résultat provenant de toutes les bases de données disponibles soit: les territoires administratifs, le rues, les toponymes

  ```
  La Vallée-du-Richelieu (MRC)
  ```

  i) Dans les cas où le résultat pour tous les patterns précédents donne « aucun résultat ». La recherche passe ensuite dans une recherche **phonétique** en utilisant les outils de similarités de textes fournient par PostgreSQL (https://www.postgresql.org/docs/9.3/static/pgtrgm.html). Le script doit d'abord avoir détecté un numéro civique ou un code postal pour permettre un temps de réponse respectable.

  Ex : <span style="color:blue">**2525 laurire quebce**</span>

  = ►  Retourne  

  ```
  2525 Boulevard Laurier, Québec
  ```

  j) Dans les cas où le résultat pour tous les patterns précédents donne « aucun résultat ». La recherche passe par une recherche **textuelle**

  Ex : <span style="color:blue">**2525 boul Laurier Québec G1V 2L2**</span>

  = ►  Retourne un résultat provenant de la base de données d’adresses du MSP. La recherche se fait dans un champ qui contient l’adresse au complet, le code postal, le nom de ville. TOUS LES MOTS sont recherchés et doivent exister dans ce champ.

  ```
  2525 Boulevard Laurier, Québec
  ```

<a id="lieu"></a>
####2. Lieu  

Version 5 :  

À partir de **plusieurs mots clé** (l'ordre n'a pas d'importance)  

Retourne un résultat provenant de la base de données de Lieux d’intérêt. La recherche se fait un champ qui contient plusieurs informations concernant ce lieu : son nom,des mots clé, l’adresse s’il y a lieu, le nom de ville. TOUS LES MOTS sont recherchés et doivent exister dans ce champ.  


<span style="color:blue">**Lac Poulin**</span>  

  ```
    Sucrerie Carol Busque (Saint-Benoît-Labre)
      (MSP) - 25 Rte Lac Poulin
    Poulin, Barrage (Lac-Drolet)
      (CEHQ) - Adresse confidentielle Cod e p
    Busque & Laflamme Inc. (Beauce-Sartigan)
      (MDEIE) - 51 Route du Lac-Poulin, Saint-Benoît-Labre
    Pharmacie Uniprix - Élizabeth Poulin Et Jean-François Trudel (Saint-Georges (V)) (Chaudière-Appalaches)
      (MSSS) - 14650, boulevard Lacroix
    Clinique Dr Harnois Et Poulin (Alma (V)) (Saguenay - Lac-Saint-Jean)  
    ...
  ```
<span style="color:blue">**Mcdo Lévis**</span>  

  ```
    ** Mcdonald'S* Demenage 44 Kennedy** (LEVIS)
      (Lévis) - 65 KENNEDY
    Restaurant Mcdonald'S (CHARNY)
      (Lévis) - 8000 EGLISES DES (AVE)
    Mcdonald J (LEVIS)
      (Lévis) - 5 VIGIE DE LA
    Restaurant Mcdonald'S (LEVIS)
      (Lévis) - 44 KENNEDY
    Restaurant Mcdonald'S (LEVIS)
      (Lévis) - 7400 A RIVE SUD DE LA (BD)
    Restaurant Mcdonald'S (LEVIS)
      (Lévis) - 5303 LOUIS H LAFONTAINE
    Restaurant Mcdonald'S (ST-ROMUALD)
      (Lévis) - 855 4E AVENUE
    Restaurant Mcdonald'S (ST-NICOLAS)
      (Lévis) - 580 116 (RTE)
    Mcdonald'S (Charny) (Lévis)
      (MTO) - 8000, av. des Églises
  ```
Version 6 : 

À partir de similarité entre le texte entré et la contenu du champ < RECHERCHE_TEXTUELLE >. Un poids plus grand est apporté au nom du lieu comparé aux informations supplémentaires compris dans le champs < RECHERCHE_TEXTUELLE >. 
Contrairement à la version 5, la version 6 est plus souple et trouve ses résultats selon la similarité des mots.   
La recherche est limité à 80 résultats.

<span style="color:blue">**Lac Poulin**</span>  

```
    Lac-Poulin (Lac Des Poulin ( Poulin, Lac ) )
        (CTOP) - Chaudière-Appalaches
    Lac-Poulin (Lac Des Poulins ( Poulin, Lac ) )
        (CTOP) - Chaudière-Appalaches
    Lac-Poulin (Lac Poulin )
        (CTOP) - Chaudière-Appalaches
    Mont-Valin (Lac Poulin De Courval ( Poulin-De Courval, Lac ) )
        (CTOP) - Saguenay-Lac-Saint-Jean
    Québec (Lac Poulin ( Alain, Lac ) )
        (CTOP) - Capitale-Nationale
    Lac-Croche (Lac Poulin ( Paulin, Lac ) )  
    ...
  ```
<span style="color:blue">**Mcdo Lévis**</span>  

```
  Lévis (Bpd De Lévis *- Lévis)
    (MSG) - 44, route du Président-Kennedy
  Lévis (Uqar : Campus De Lévis - Lévis)
    (MSG) - 55, rue du Mont-Marie
  Lévis (Société De Développement Économique De Lévis (Cld) - Lévis)
    (MSG) - 13, rue Saint-Louis (Lévis) bureau 302
  LÉVIS (Bpd De Lévis *- Lévis)
    (RGS) - Bureau de la publicité des droits de Lévis
    Les promenades Lévis
    44, route Kennedy
    LÉVIS (Québec)
  Lévis (Cle De Lévis (020) *- Lévis)
    (MSG) - 1200, boulevard Alphonse-Desjardins bureau 200
  Lévis (Hôtel-Dieu De Lévis - Lévis)
    (MSG) - 143, rue Wolfe
    ...
```
  
<span style="color:blue">**Mcdonald Lévis**</span>  

```
    Lévis (Mcdonald ®)
        (MRQ) - 44, route du Président-Kennedy
    LEVIS (Restaurant Mcdonald'S)
        (Lévis) - 7400 A RIVE SUD DE LA (BD)
    LEVIS (** Mcdonald'S* Demenage 44 Kennedy**)
        (Lévis) - 65 KENNEDY
    LEVIS (Mcdonald J)
        (Lévis) - 5 VIGIE DE LA
    LEVIS (Restaurant Mcdonald'S)
        (Lévis) - 5303 LOUIS H LAFONTAINE
    ST-ROMUALD (Restaurant Mcdonald'S)
        (Lévis) - 855 4E AVENUE
    LEVIS (Restaurant Mcdonald'S)
        (Lévis) - 44 KENNEDY
    Lévis (Mcdonald ®)
        (MRQ) - 12, rue Baribeau
    Lévis (Mcdonald'S (St-Romuald))
        (MTO) - 855 Av. 4
    ST-NICOLAS (Restaurant Mcdonald'S)
        (Lévis) - 580 116 (RTE)
    Lévis (Mcdonald ®)
        (MRQ) - 7400, boulevard de la Rive-Sud
    Lévis (Restaurant Mcdonald'S)
        (MRQ) - 527, rue Trudelle
    Lévis (Mcdonald ®)
        (MRQ) - 5303, rue Louis-H.-La Fontaine
    Lévis (Mcdonald'S (Charny))
        (MTO) - 8000, av. des Églises
    CHARNY (Restaurant Mcdonald'S)
        (Lévis) - 8000 EGLISES DES (AVE)
    Lévis (Mcdonald'S (Saint-Nicolas))
        (MTO) - 580, rte 116
```

<a id="borne_kilo"></a>
####3. Borne Kilométrique  

Note : avec un espace ou une virgule comme séparation  

a) À partir d'une **valeur de kilométrage et d’un numéro de route**  
Ex :  <span style="color:blue">**108, 73**</span>  

```
Route 73 (Droite) km 108 à Saint-Isidore
Route 73 (Gauche) km 108 à Saint-Isidore
```
Note : Pour les bornes à chaque 100 mètres dans la région de Montréal, la syntaxe est la suivante : 66.9 40 = borne du 900e mètres au 66<sup>e </sup>kilomètre de la route 40.  

b) À partir d’un **numéro de sortie et d'un numéro de route ou nom de municipalité**

  i. numéro de sortie d’autoroute seulement  
  ii. numéro de sortie d’autoroute et d’un numéro de route  
  iii. descriptif "aut" (autoroute) et numéro de l'autoroute
  iv. nom de municipalité seulement  
  v. numéro de sortie d’autoroute et d’un nom de municipalité (Version 6)

Ex:  
<span style="color:blue">**SORTIE 315**</span>  

```
Route 40 Est - Sortie 315 - Affichage: 1re Avenue
Route 40 Ouest - Sortie 315 - Affichage: 1re Avenue
```
<span style="color:blue">**SORTIE 8 13**</span>  

```
Route 13 Nord - Sortie 8 - Affichage: Boul. H.-Bourassa, boul. Gouin
Route 13 Sud - Sortie 8 - Affichage: Boul. Gouin, boul. H.-Bourassa, Boul. Hymus
```

<span style="color:blue">**SORTIE aut 20**</span>  

```
Route 20 Est - Sortie 102 - Affichage: Sainte-Julie, Saint-Amable, Saint-Bruno-de-Montarville
Route 20 Ouest - Sortie 102 - Affichage: Sainte-Julie, Saint-Amable, Saint-Bruno
Route 20 Ouest - Sortie 105 - Affichage: Route 229, McMasterville, St-Basile-le-Grand, St-Mathieu-de-Beloeil
Route 20 Est - Sortie 105 - Affichage: Route 229, McMasterville, St-Basile-le-Grand, St-Mathieu-de-Beloeil
...
```

<span style="color:blue">**SORTIE Québec**</span>  

```
Route 40 Ouest - Sortie 300 - Affichage: Chemin du Lac
Route 40 Est - Sortie 302 - Affichage: Route Jean-Gauvin
Route 40 Ouest - Sortie 302 - Affichage: Route Jean-Gauvin
Route 40 Ouest - Sortie 304 - Affichage: Av. Le Gendre
Route 40 Est - Sortie 304 - Affichage: Av. Le Gendre
Route 40 Ouest - Sortie 305 - Affichage: Aut. 540, Aut. Duplessis, pont Pierre-Laporte, aéroport Jean-Lesage
...
```

<span style="color:blue">**SORTIE 8 Québec**</span>  

```
Route 540 Sud - Sortie 8 - Affichage: Boul. Hochelaga
Route 740 Nord - Sortie 8 - Affichage: Boul. Père-Lelièvre
Route 740 Sud - Sortie 8 - Affichage: Boul. Père-Lelièvre
```

Note : il est possible de spécifier la direction de la sortie (Nord, Sud, Est et Ouest) comme ceci : "SORTIE 5-n 5"

c) À partir d'une **valeur de mile du  CN**  
Ex :   <span style="color:blue">**CN, 50**</span>  

```
Repère 50 (mi) à Alexandria (Via)  
Repère 50 (mi) à Bala  
Repère 50 (mi) à Beachburg  
Repère 50 (mi) à Bedford  
Repère 50 (mi) à Cascapedia  
Repère 50 (mi) à Chandler  
...
```

d) À partir d’un **numéro d’une aide flottante de la garde côtière canadienne**  
Ex : <span style="color:blue">**GCC H47**</span>  

```
Aide flottante H47 - Bouée lumineuse H47; RECIF DU NORD OUEST ILE DU BIC
```  

e) À partir d'un **texte contenu sur un panneau d'affichage**
  i. avec un texte seulement
  ii. avec un numéro de route et un texte

Ex: <span style="color:blue">**PANNEAU st-raymond**</span>  

```
Route 85 Sud - Sortie 47 - Affichage: Rue Raymond, St-Elzéar-de-Témiscouata, Saint-Louis-du-Ha! Ha!
Route 5 Nord - Sortie 3 - Affichage: Boul. St-Raymond, boul. du Casino, Pontiac
Route 40 Ouest - Sortie 281-N - Affichage: Route 365, Pont-Rouge, Saint-Raymond
```  

Ex: <span style="color:blue">**PANNEAU 40 st-raymond**</span>  
Version 5 :

```
Route 40 Est - Sortie 236 - Affichage: Route 159, Saint-Casimir, Ste-Anne-de-la-Pérade, Saint-Prosper, Saint-Tite
Route 73 Sud - Sortie 115 - Affichage: Route 218, St-Lambert-de-Lauzon, Saint-Henri, Saint-Gilles, Saint-Bernard
Route 40 Ouest - Sortie 236 - Affichage: Route 159, Ste-Anne-de-la-Pérade, Saint-Prosper, Saint-Stanislas, Saint-Tite
...
```

Version 6 :  

```
Route 40 Ouest - Sortie 281-N - Affichage: Route 365, Pont-Rouge, Saint-Raymond
Route 40 Ouest - Sortie 321 - Affichage: Rue Labelle, boul. Raymond, Ste-Brigitte-de-Laval
Route 40 Est - Sortie 281 - Affichage: Route 365, Pont-Rouge, Saint-Raymond, Neuville
Route 40 Est - Sortie 321 - Affichage: Boul. Raymond, rue Labelle, Ste-Brigitte-de-Laval
```

<a id="coord_gps"></a>
####4. Coordonnées GPS  

a) À partir de coordonnées en Degrés décimaux  

Ex: <span style="color:blue">**48.843439, -67.930932**</span>  
Possibilitées avec la version 6 :  
<span style="color:blue">**48,843439, -67,930932**  
**48,843439 -67,930932**  
**48,843439 67,930932**  
**48.843439 -67.930932**  
**48.843439 67.930932**  
**-67.930932 48.843439**  
**67.930932 48.843439**  
</span>
ainsi de suite...

```
Dans la municipalité de (Bas-Saint-Laurent), à 13.9Km de Baie-des-Sables
```

b) À partir de coordonnées en Degrés minutes secondes

Ex :  <span style="color:blue">**48 22 23, -67 34 21**</span>  
Possibilitées avec la version 6 :  
<span style="color:blue">
**48 22 23. -67 34 21**  
**48 22 23. 67 34 21**  
**-67 34 21 48 22 23**  
**67 34 21 48 22 23**  
</span>
ainsi de suite...

```
Dans la municipalité de Saint-Léon-le-Grand (Bas-Saint-Laurent), à 5.1Km de Saint-Léon-le-Grand
```

c) À partir de coordonnées en Degrés minutes décimales

Ex :  <span style="color:blue">**48 22.843, -67 34.932**</span>  
Possibilitées avec la version 6 :  
<span style="color:blue">
**48 22.843 -67 34.932**  
**48 22.843 67 34.932**  
**67 34.932 48 22.843**  
**-67 34.932 48 22.843**  
</span>
ainsi de suite...  

```
Dans la municipalité de Saint-Léon-le-Grand (Bas-Saint-Laurent), à 5.7Km de Saint-Léon-le-Grand
```

d) À partir de coordonnées en UTM-fuseau

Ex :  <span style="color:blue">**UTM-18 1018490.56282, 5434191.46593**</span>  
Possibilitées avec la version 6 :  
<span style="color:blue">
**UTM-18 1018490.56282 5434191.46593**  
**UTM-18 1018490,56282 5434191,46593**  
**utm-18 1018490,56282 5434191,46593**  
**utm18 1018490,56282 5434191,46593**  
ainsi de suite...  

```
Dans la municipalité de (Bas-Saint-Laurent), à 13.9Km de Baie-des-Sables
```

e) À partir de coordonnées en  MTM-fuseau

Ex :   <span style="color:blue">**MTM7  493344.550863, 5414859.14264**</span>  
Possibilitées avec la version 6 :  
<span style="color:blue">
**MTM-7 493344.550863 5414859.14264**  
**MTM-7 493344,550863 5414859,14264**  
**mtm-7 493344,550863 5414859,14264**  
**MTM7 493344,550863 5414859,14264**
</span>
ainsi de suite ...  

```
Dans la municipalité de (Bas-Saint-Laurent), à 13.9Km de Baie-des-Sables
```

f) À partir du format de Bell ( Lat :  dd.ddd  Long: dd.ddd UNC:  CONF :)

Ex: <span style="color:blue">**Lat: 46 49 50.041N Long: 71 11 26.753W UNC:100  CONF :90**  

```
__certitude de 90% dans un rayon de 100m__ Dans la municipalité de (Chaudière-Appalaches), à 2.3Km de Québec
```

**Notes pour la recherche par GPS:**  

On peut inscrire dans l'ordre  Lat /Long ou Long/ Lat  avec, ou sans le signe négatif. De plus, on peut utiliser le **point** ou **l'espace** pour séparer les degrés/minutes/secondes.  

Le coordonnées doit **absolument** être séparé par une **virgule**.  
**La version 6 permet une plus grand flexibilité dans la manière d'inscrire la paire de coordonnée.**  

Cette fonctionnalité de recherche donne la municipalité, le toponyme le plus près et la distance à vol d'oiseau de ce dernier.  
La version 6 retourne aussi la région administrative et la MRC.  

<a id="reverse_geocoding"></a>
####5. Recherche inversée par coordonnée

* Les formats permis sont ceux défini dans la recherche par <a href="#coord_gps">coordonnée GPS<a/>

Ex: <span style="color:blue">**48 22 23, -67 34 21**</span>  

= ► Retourne  

```
  143 4e Rang, Saint-Léon-le-Grand
  155 4e Rang, Saint-Léon-le-Grand
  121 4e Rang, Saint-Léon-le-Grand
  140 4e Rang, Saint-Léon-le-Grand
  95 4e Rang, Saint-Léon-le-Grand
  149 Chemin de la Branche-Nord, Saint-Léon-le-Grand
  245 Route de la Branche-Nord, Saint-Zénon-du-Lac-Humqui
  282 Route de la Branche-Nord, Saint-Zénon-du-Lac-Humqui
  ...
  471 Route 195, Saint-Léon-le-Grand
  27 Rue des Bouleaux, Sainte-Irène
  372 Chemin Nord de la Rivière-Humqui, Saint-Léon-le-Grand
  329 5e-et-6e Rang, Sainte-Irène
```

*cote de précision (geocodeMatchCode)*

| Code | Description |
| ---- | ---- |
| 100 | Le géocodage a réussis à associer l’adresse au rôle d’évaluation |  
| 50 | Le géocodage a positionner l’adresse entre le minimum et le maximum de la tranche d’adresse du segment par extrapolation mathématique |  
| 35 | Le géocodage a positionner l’adresse au centre du segment de la rue (absence de minimum/maximum) |  


<a id="version"></a>
###Historique des versions du service Web ( GLO )  [<span class="octicon octicon-link"></span>](#version)  

<span style="background-color:lime;">**LES  VERSIONS  1, 2 ET 3 NE SONT PLUS SUPPORTÉES.**<span />

<a id="v1"></a>
**Version 1 : Version initiale**

<a id="v2"></a>
**Version 2 : 14 octobre 2009**

La différence majeure entre les deux versions se retrouve au niveau des recherches par adresse.  
Le géocodage est maintenant plus précis c’est à dire que le positionnement peut se faire directement  
sur le numéro civique (grâce au rôle d’évaluation) et non plus sur une tranche d’adresse seulement  
comme c’était le cas avec la version #1 du service :  

Ancien champs de la version #1:

```xml
< noCiviqDebut />  
< noCiviqFin />
```

Remplacés par les nouveaux champs de la version #2:  

```xml
< geocodeMatchCode />  
< noCiviq />  
< noCiviqDebutDroite />  
< noCiviqFinDroite />  
< noCiviqDebutGauche />  
< noCiviqFinGauche/ >  
```
<a id="v3"></a>
**Version 3 : décembre 2010**  

La version 3 du  GLO comprend l’ajout des champs suivants:
CODE_MUNCP ,  NO_MATRICULE ,  NO_SEQ_ODONM  du  DGE .  
Cette version comprend également l’ajout d’une recherche d'adresse textuelle améliorée supplémentaire qui donne des résultats si aucun pattern n’est respecté. La recherche par Lieux d’intérêt est également grandement améliorée.

Champs de la version #3:  

```xml
< geocodeMatchCode />  
< noCiviq />  
< noCiviqDebutDroite />  
< noCiviqFinDroite />  
< noCiviqDebutGauche />  
< noCiviqFinGauche />  
< code_muncp />  
< no_matricule />  
< no_seq_adr_civique />  
```

<a id="v5"></a>
**Version 5 : novembre 2012**

Cette version comprend également l’ajout d’une recherche d'adresse de similarité phonétique améliorée supplémentaire qui donne des résultats si aucun pattern n’est respecté.

Champs supplémentaire de la version #5:

RemarqueListe:

```xml
<GeocoderReponse>
  <RemarqueListe>
    <borneDetail>
      <texte>*Texte spécifiant la remarque*</texte>
      <vieu>*Texte de la recherche pouvant être remplacé par le noeud 'nouveau'*</vieu>
      <nouveau>*Texte pouvant remplacer le texte contenu dans le noeud 'vieu'*</nouveau>
      <requeteGLO>*Le texte donné en entrée*</requeteGLO>
    </borneDetail>
    ...
  <RemarqueListe/>
<GeocoderReponse/>
```

noCiviqDebut et noCiviqFin:

```xml
<GeocoderReponse>
  <geocoderReponseListe>
    <borneDetail>
      <noCiviqDebut/>
      <noCiviqFin/>
      ...
    <borneDetail/>
  <geocoderReponseListe/>
<GeocoderReponse/>
```

CP:

```xml
<GeocoderReponse>
  <geocoderReponseListe>
    <borneDetail>
          <CP>
            <codePostal>G1V2L2</codePostal>
            <Copyright> Marque officielle de la Societe canadienne des postes</Copyright>
          </CP>
          ...
      <borneDetail/>
    <geocoderReponseListe/>
<GeocoderReponse/>

```

**<u> Ajout janvier 2014 </u>**  

statut:  

```xml
<GeocoderReponse>
  <geocoderReponseListe>
    <borneDetail>
      <statut>
        <etat/>
        <description/>
        <commentaire/>
      <statut/>
    <borneDetail/>
  <geocoderReponseListe/>
<GeocoderReponse/>
```

Correspond aux informations sur les municipalités.  
etat  : Officiel ou Non officiel.  
description   : Valide, Supprimé.  
commentaire   : correspondant à une Ancienne limite ou la ville correspondant Maintenant.  

Correspond également aux informations sur les adresses.  
etat           : Officiel ou Non officiel.  
description    : Ajouté, Modification sur description seulement, Modification sur géométrie seulement, Modification sur géométrie et description.  
commentaire    : commentaire quelconque.  

<a id="v6"></a>
**Version 6 janvier 2015:**

Parmi les améliorations :  

* le générique et l'orientation de l'odonyme est maintenant utilisé pour préciser la rechercher par adresse.  
* un option permettant le regroupement des adresses pour une même coordonnées. Par exemple, permet ainsi d'avoir un seul résutltat pour "1 place ville-marie montréal".  
* amélioration de la recherche par borne avec le mot clé "panneau". Ex: "panneau 40 st-raymond" permettant de donner tous les panneaux sur la route #40 contenant le mot "st-raymond".  
* ajout du centroîde du code postal comme premier résultat lors d'une recherche par code postal seul.
* amélioration de la recherche par intersection. La municipalité n'est plus obligatoire et l'intersection par numéro de route et autoroute est maintenant possible.  
* un retour en JSON.  
* une recherche de 'reverse geocoding' (recherche d'adresse par coordonnée).  
* plus de possibilités pour la recherche par GPS en définissant le code EPSG en entrée (paramètre: epsg_entree).  
* recherche par GPS et Adresse retourne mainteannt la mrc, région administrative ( plus clairement, car elle était comprise entre paranthèse dans le noeud 'municipalite' ), la municipalité, la région touristique, l'agglomération et la localité qui fait référence au toponyme le plus près fourni par la Commission de la toponymie du Québec.
* optimisation du code qui permet de doubler la vitesse dans la plupart des cas.  
* le résultat de la recherche par lieu est maintenant obtenu par une recherche par similarité. Le module de postgreSQL, "pg_trgm" est utilisé.
* faciliter la possibilitée d'ajout d'information pour des besoins spécifiques par l'attribut 'placeListe'.


Changement dans les paramètres d'entrée :  

* le code EPSG en entrée peut maintenant être fourni par "epsg_entree". L'ancien paramètre "epsg" est encore maintenu mais fait maintenant référence au nouveau paramètre "epsg_sortie".
* Ajout d'un paramètre ('param_output') permettant de choisir les attributs de l'adresse contenuent dans la réponse du service.
