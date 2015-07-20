---
permalink: /documentation/glo/
layout: general
iconedocumentation: ""
submenu:  
  - hook: "introduction"
    title: "Introduction"
  - hook: "type"
    title: "Type de recherche",
  - hook: "chaine"
    title: "Chaîne de caractères de recherche"
  -  hook: "mode"
    title: "Deux modes d’utilisation"
  -  hook: "requete"
    title: "Structure des requêtes SOAP (XML)"
  -  hook: "reponse"
    title: "Structure des réponses SOAP (XML)"
  -  hook: "version"
    title: "Versions du service Web ( GLO )" 
---

#Service web de "GéoLOcalisation (GLO)"

<a id="introduction"></a>
##Introduction [<span class="octicon octicon-link"></span>](#introduction)

Afin de faciliter le positionnement sur le territoire Québécois, le Ministère de la Sécurité Publique du Québec (MSP) à mis en place un service Web dédié à cette fin.Ce service de «  géolocalisation  » est entièrement interopérable et permet de localiser des adresses, des codes postaux, des rues, des municipalités, des  MRC , des toponymes, des édifices publics (écoles, hôpitaux,  CLSC , CPE), des entreprises et même des bornes kilométriques situées sur le réseau routier du Ministère des Transports ( MTQ ).  L’innovation de ce service repose sur sa haute fiabilité, son utilisation multiplateforme ainsi que sur la fréquence de ses mises à jour.


###Sécurité d’accès

Le contrôle d’accès au service Web se fait via une clé d’utilisation (semblable à celle requise pour utiliser l’API de Google  Maps ).  Cette clé permet au  MSP  de contrôler les accès et par le fait même, le contenu de sa base de données.Les clés permettent également d’autoriser ou d’empêcher l’utilisation decertains types de recherche selon l’organisation ou l’utilisateur qui tente de se connecter.  Les clés d’accès sont émises par le  MSP  et sont contrôlées en fonction d’une suite d’adresses IP reliée au domaine Internet du requérant.Pour obtenir une clé, il suffit d’en faire la demande auprès du ministère via l’adresse de courriel suivante: [geomsp@msp.gouv.qc.ca](mailto:geomsp@msp.gouv.qc.ca).

### NOTE  IMPORTANTE

#### Ce service ne doit pas être utilisé en mode lot. IL EST UN SERVICE EN LIGNE. Il est INTERDIT de lancer des appels par un programme, service, module quelconque qui permettrait de géocoder des milliers adresses. Si le besoin de votre organisation est de géocoder quelques centaines ou milliers d’adresses, veuillez communiquer avec nous pour l’utilisation du service  GLO  utilisable en mode lot, qui est beaucoup plus efficace. Si un organisme utilise le  GLO  pour un géocodage en lot, son accès lui sera retiré sans préavis.

<a id="type"></a>
### Type de recherche [<span class="octicon octicon-link"></span>](#type)

Le service Web supporte cinq types de recherche :

| | Type de recherche | Code |
| ---- | ---- | ---- |
| 1 | Par adresse (combinaison de code postal, no. civique, rue ou ville)         |adresse |
| 2 | Par lieux d‘intérêts (restaurant, entreprise, école, etc…)                  |lieu  |
| 3 | Par borne kilométrique (borne et no. de route)                              |borne |
| 4 | Par coordonnées GPS (lat, lon) ou (lon, lat), UTM, MTM, format Bell         |gps   |
| 5 | Infrastructure d’Hydro-Québec (poteau, barrage, centrale, etc…)             |hq    |

Certaines recherches peuvent être limitées à une clientèle bien précise (ex : La recherche sur les éléments du réseau d’Hydro-Québec est disponible seulement par les intervenants en sécurité civile).  Cette gestion est  effectué  via la clé d’accès décrite ci haut.

<a id="chaine"></a>
### Chaîne de caractères de recherche [<span class="octicon octicon-link"></span>](#chaine)

Le service de recherche considère uniquement une seule chaîne de caractères par requête (paramètre <texte> ). Par contre, cette chaîne peut comporter plusieurs valeurs (ex : 1715 rue  Merlac , Québec). Contrairement à l’engin de recherche de Google, l’ordre dans lequel les paramètres sont placés dans la chaîne à une importance sur la performance et qualité des résultats obtenus.

Depuis la version 5 du  GLO , il est possible de passer une chaine de caractères ne correspondant à aucun pattern pour la recherche par adresse. Une recherche de similarité phonétique est alors déclenchée.

Ex: 2525 Québec Laurier  G1V   2L2  boulevard

La fonction cherche donc les mots demandés.Ces mots peuvent être coupés au début ou avec des fautes d’orthographe à l’intérieur des mots. Les mots sont alors affectés d’un poids et ceux le plus près de 100% sont retournés.

Cette nouvelle fonctionnalité est un peu plus lente que la recherche par pattern qui est beaucoup plus rapide.

<span style="background-color:lime;">**LES  VERSIONS  1, 2 ET 3 NE SONT PLUS SUPPORTÉES.**<span />  

Voici des exemples de chaîne qui peuvent être soumise au service (les informations retournées seront décrites en détail à la section du présent document):

1. Adresse  

  a) À partir d'un **code postal** seulement  

  Ex : <span style="color:blue">**G1M 2L1**</span>  (**avec ou sans espace**)

  = ►   Retourne toutes les adresses (no. civique, la rue ainsi que la ville) qui se retrouvent à l’intérieur du code postal.

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


  b) À partir d’un **code postal et un numéro civique**  


  Si le numéro civique existe, Ex :  <span style="color:blue">**G1M 2L1, 1715**</span>

  =  ►   Retourne seulement l’adresse qui correspond au numéro civique.

		1715 Rue De  Merlac , Québec


  Si le numéro civique n’existe pas,   Ex : <span style="color:blue">**G1M 2L1, 1714**</span>

  =  ►   Retourne les adresses en utilisant les tranches de numéros civiques (gauche ou droite) qui se retrouvent à l’intérieur du code postal.


		1701 Rue De  Merlac , Québec
		1705 Rue De  Merlac , Québec
		1711 Rue De  Merlac , Québec
		1715 Rue De  Merlac , Québec
		1721 Rue De  Merlac , Québec
		1725 Rue De  Merlac , Québec


  Si le numéro civique ne se retrouve pas dans aucune tranche d’adresse

  =  ►   La requête par  <span style="font-size:10.0pt;">**code postal** est effectuée.


  c) À partir d’un **code postal, un numéro civique et un nom de rue**  

  Si la combinaison numéro civique et rue existe, Ex:  <span style="color:blue">**J9P 4X2, 511 Sabourin**</span>

  =  ►   Retourne seulement l’adresse qui correspond au numéro civique.

		511 Boulevard Sabourin,  Vald’Or


  Si le numéro civique n’existe pas,   Ex:   <span style="color:blue">**J9P4X2 , 510 Sabourin**</span>

  =  ►   Retourne les adresses en utilisant les tranches de numéros civiques (gauche ou droite) qui se retrouvent sur la rue spécifiée et à l’intérieur du code postal.

		511 Boulevard Sabourin,  Vald’Or
		517 Boulevard Sabourin,  Vald’Or
		519 Boulevard Sabourin,  Vald’Or
		525 Boulevard Sabourin,  Vald’Or
    ...

  Si aucun résultat n’est trouvé
  =  ►   La requête par  **nom de rue et un numéro civique** est effectuée.


  d) À partir d’un **code postal et un nom de rue**  


  Si la combinaison code postal et nom de rue existe, Ex:  <span style="color:blue"> **G0S2S0, Fortier**</span>


  = ► Retourne toutes les adresses (no. civique, la rue ainsi que la ville) qui se retrouvent sur cette rue à l’intérieur du code postal spécifié.

		295 Rue Fortier, Saint-Isidore
		299 Rue Fortier, Saint-Isidore
		300 Rue Fortier, Saint-Isidore
		301 Rue Fortier, Saint-Isidore
		302 Rue Fortier, Saint-Isidore
    ...

  Si aucun résultat n’est trouvé

  =  ►   La requête par  **code postal** est effectuée.


  e) À partir d’un **numéro civique et un nom de rue**  


  Si la combinaison numéro civique + rue existe, Ex : **<span style="color:  blue">100, Blais**</span>

  =  ►   Retournetoutes les adresses (no. civique, la rue et la ville) pour toutes les villes du Québec qui ont une rue et un numéro civique correspondant.

      100 1e rang Blais Sud, Saint-Tharcisius
      100 Boulevard Blais Est, Berthier-sur-Mer
      100 Chemin des Blais, Sainte-Émélie-de-l'Énergie
      100 Rue Blais, Amqui
      100 Rue Lionel-Blais, Saint-Côme
      100 Rue Noël-Blais, Granby

  Si aucune combinaison numéro civique + rue existe…

  =  ►   Retourne toutes les adresses en utilisant les tranches de numéros civiques (gauche ou droite) et le nom de la rue pour toutes les villes du Québec.

  Si aucun résultat…

  =  ►   La requête par **nom de rue** est effectuée (le numéro civique est alors ignoré).


  f) À partir d’un **numéro civique, un nom/numéro de rue, et une ville**

  Si une combinaison existe,

  Ex:<span style="color:blue">**100 Fortier,  Amqui**</span>

  Ex:<span style="color:blue">**450 6<sup>e</sup>, Shawinigan**</span>

  =  ►   Retourne seulement l’adresse qui correspond au numéro civique.  

    ```
    100 rue Fortier,  Amqui
    ```
    ```
    450 6e Avenue, Shawinigan
    ```  

  Note :
  Il n’est pas nécessaire d’écrire 'rue', 'route', 'rang', 'avenue', etc.  
  *La version 6 prend en compte les génériques*

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

  =  ►   Retourne un résultat provenant de toutes les bases de données disponibles soit: les territoires administratifs, le rues, les toponymes

      La Vallée-du-Richelieu (MRC)

  i) Une fonctionnalité de recherche textuelle a été ajoutée dans les cas où le résultat pour tous les patterns précédents donne « 0 » ou « aucun résultat ».  

		 Ex : 2525  boul  Laurier Québec  G1V   2L2  

  = ►  Retourne un résultat provenant de la base de données d’adresses. La recherche se fait dans le champ <  RECHERCHE_TEXTUELLE  > qui contient l’adresse au complet, le code postal, le nom de ville. TOUS LES MOTS sont recherchés et doivent exister dans ce champ.

      ```
      2525 Boulevard Laurier, Québec
      ```

2. Lieu  

	À partir de **plusieurs mots clé** (ordre n’a pas d’importance)  

	Ex :   <span style="color:blue">**LacPoulin**</span> ou <span style="color:blue">**Mcdo Lévis**</span>  

	Retourne un résultat provenant de la base de données de Lieux d’intérêt. La recherche se fait dans le champ <  RECHERCHE_TEXTUELLE  > qui contient plusieurs informations concernant ce lieu : son nom,des mots clé, l’adresse s’il y a lieu, le nom de ville. TOUS LES MOTS sont recherchés et doivent exister dans ce champ.


3. Borne Kilométrique  

	Note : avec un espace ou une virgule comme séparation

	a) À partir d'une **valeur de kilométrage et d’un numéro de route**  

	Ex :  <span style="color:blue">**108, 73**</span>

	Note : Pour les bornes à chaque 100 mètres dans la région de Montréal, la syntaxe est la suivante : 66.9 40 = borne du 900e mètres au 66<sup>e </sup>kilomètre de la route 40.

	b) À partir d’un  

    i. numéro de sortie d’autoroute seulement  
    ii. numéro de sortie d’autoroute et d’un numéro de route  
    iii. numéro de sortie d’autoroute et d’un nom de municipalité  
    iv. nom de municipalité seulement  


		Ex:  <span style="color:blue">**SORTIE 315**</span>
		<span style="color:blue">**SORTIE 315 40**</span>
		<span style="color:blue">**SORTIE 315 Québec**</span>
		<span style="color:blue">**SORTIE Québec**</span>  

	c) À partir d'une **valeur de mile du  CN**  
	Ex :   <span style="color:blue">**CN, 50**</span>

	d) À partir d’un **numéro d’une aide flottante de la garde côtière canadienne**  
	Ex : <span style="color:blue">**GCC H47**</span>


4. Coordonnées GPS  

	a) À partir de coordonnées en Degrés décimaux

	Ex: <span style="color:blue">**48.843439, -67.930932**</span>

	= ► Retourne

		Dans la municipalité de (Bas-Saint-Laurent), à 13.9Km de Baie-des-Sables

	b) À partir de coordonnées en Degrés minutes secondes 

	Ex :  <span style="color:blue">**48 22 23, -67 34 21**</span>

	= ► Retourne

		Dans la municipalité de Saint-Léon-le-Grand (Bas-Saint-Laurent), à 5.1Km de Saint-Léon-le-Grand

	c) À partir de coordonnées en Degrés minutes décimales

	Ex :  <span style="color:blue">**48 22.843, -67 34.932**</span>

	= ► Retourne

		Dans la municipalité de Saint-Léon-le-Grand (Bas-Saint-Laurent), à 5.7Km de Saint-Léon-le-Grand


	d) À partir de coordonnées en UTM-fuseau  

	Ex :  <span style="color:blue">**UTM-18 1018490.56282, 5434191.46593**

	= ► Retourne

		Dans la municipalité de (Bas-Saint-Laurent), à 13.9Km de Baie-des-Sables

	e) À partir de coordonnées en  MTM-fuseau

	Ex :   <span style="color:blue">**MTM7  493344.550863, 5414859.14264**</span>

	= ► Retourne

		Dans la municipalité de (Bas-Saint-Laurent), à 13.9Km de Baie-des-Sables

	f) À partir du format de Bell ( Lat :  dd.ddd  Long: dd.ddd UNC:  CONF :)  


	Ex: <span style="color:blue">**Lat: 46 49 50.041N Long: 71 11 26.753W UNC:100  CONF :90**

	= ► Retourne

		__certitude de 90% dans un rayon de 100m__ Dans la municipalité de (Chaudière-Appalaches), à 2.3Km de Québec


	**Notes pour la recherche par GPS:**

	On peut inscrire dans l'ordre  Lat /Long ou Long/ Lat  avec, ou sans le signe négatif. De plus, on peut utiliser le **point** ou **l'espace** pour séparer les degrés/minutes/secondes.  

	Le couple de coordonnées **doit absolument** être séparé par une virgule;  

	Cette fonctionnalité de recherche donne le nom du territoire municipal dans lequel la coordonnée à été captée et donne également la distance a vol d'oiseau de la localité la plus proche.  

<a id="mode"></a>
### Deux modes d’utilisation [<span class="octicon octicon-link"></span>](#mode)

1) La première façon d’utiliser le service est par un simple appel URL, directement dans un fureteur Internet.Cette méthode est plus simple, car elle ne nécessite pas de programmation (création d’un message ou d’un client en format SOAP).Cette méthode retourne l’information sous forme XML.


Voici un exemple d’appel en mode HTTP.

Pour la version 5:

	[Le lien ne fonctionne pas](http://geoegl.msp.gouv.qc.ca/Services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=<votre clé>&indDebut=0&indFin=10&epsg=900913&format=xml "Lien")

Liste des paramètres:

| | Variable | Valeurs possibles | Obligatoire |
| ---- | ---- | ---- | ---- |
| 1 | Texte   | Chaîne de caractères pour la recherche* | Oui|
| 2 | cle     | Clé d’accès émise par le MSP  | Oui |
| 3 | type    | adresse, lieu, borne, gps, hq A partir de la version 5, le type est obligatoire | Oui – « adresse »  par défaut |  
| 4 | epsg    | Système de référence des coordonnées en sortie, (code EPSG de la donnée source par défaut) | Oui – système de coordonnées source par défaut |
| 5 | indexDebut | Permet de spécifier l’index de départ de la réponse, (optionnel, 0 par défaut)  | Non - 0 par défaut |
| 6 | indexFin | Permet de spécifier l’index de fin de la réponse, (optionnel 79 par défaut)  | Non - 79 par défaut |
| 7 | version | Paramètre qui n’est plus utilisé.  | ---- |
| 8 | format | Permet de spécifier le type de format de sortie du fichier. Pour le moment XML. (seront possible HTML, CSV ou autre un jour)  | Oui – XML par défaut |


<span style="color:red">Si la chaîne de texte  comprends  des caractères non supportés par l’URL (les accents et les espaces entre autres), ces derniers doivent être encodés avant d’être soumis au service.En PHP, il existe une fonction pour effectuer automatiquement cette opération ( urlencode ).</span>

Exemple qui retourne les 49 premiers enregistrements seulement

Pour la version 5:

	[Lien à ajouter](http://glo.com "Lien à ajouter")

Exemple qui retourne les enregistrements mais dont les coordonnées sont dans le système de projection de Google

Pour la version 5:

	[Lien à ajouter](http://glo.com "Lien à ajouter")


2) La deuxième façon est d’appeler directement le service Web en utilisant un langage de programmation (Java, .Net, PHP,  etc …). Il requiert la création d’une requête (ou message) SOAP avec les paramètres requis. Les différents paramètres ainsi que les méthodes exposées par le service Web sont définies dans le fichier  WSDL  [Wen SErvice Definition Language](http://www.w3.org/TR/wsdl "Wen SErvice Definition Language")  


pour la version 5 du service

	[Le lien ne fonctionne pas](http://geoegl.msp.gouv.qc.ca/Services/glo/V5/gloServeur.php?WSDL)


Voici les méthodes présentement supportées par le service :

*     Geocoder() – _Pour les recherches d’adresses, de lieux ou des éléments du réseau d’Hydro-Québec_
*     GeocoderBorne()  
*     GeocoderGPS()  


**Note** : les recherches par coordonnées GPS et par borne kilométrique sont traitées dans des méthodes séparées, car elles requièrent une réponse et une structure particulière.

<a id="requete"></a>
###Structure des requêtes SOAP (XML) [<span class="octicon octicon-link"></span>](#requete)


Pour les requêtes d’adresse, de lieux ou d’éléments du réseau d’Hydro-Québec, la structure SOAP pour le message à envoyer prends la forme suivante :

**Version 5 :**

	<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <geo:GeocoderRequete>
	         <GLOCleAcces>votre clé</GLOCleAcces>
	         <texte>">1715 rue Merlac Québec</texte>
	         <type>adresse</type>
	         <codeEPSG>32198</codeEPSG>
	         <index>
	            <debut>0</debut>
	            <fin>10</fin>
	         </index>
	      </geo:GeocoderRequete>
	   </soapenv:Body>
	</soapenv:Envelope>

Tout comme pour le mode par appel URL, les trois paramètres obligatoires sont :

	le clé d’accès (<GLOCleAcces>);
	le type : adresse, lieu, hq;
	le texte à géocoder (<texte>)


**VERSION 5 :**


Pour les deux autres types de géocodage (par borne ou coordonnées GPS), la structure est exactement la même excepté que le nom de la requête :

Requête par borne kilométrique:

```xml
	<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <geo:BorneRequete>
	...
	      </geo:BorneRequete>
	   </soapenv:Body>
	</soapenv:Envelope>

Requête par coordonnées GPS :

	<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <geo:GPSRequete>
	             ...
	      </geo:GPSRequete>
	   </soapenv:Body>
	</soapenv:Envelope>
```

<a id="reponse"></a>
####Structure des réponses SOAP (XML) [<span class="octicon octicon-link"></span>](#reponse)

La réponse en format XML qui est retournée par le service (ou via l’URL) peut être facilement décortiquée par l’application appelante.Chaque type de requête retourne généralement; le nombre d’enregistrement, une liste d’attributs pour chacune des occurrences de la réponse correspondant à la chaîne de caractères reçue en paramètre.On retrouve aussi les coordonnées de la localisation de l’information obtenue de l’entrepôt de donné du  MSP . Enfin, on trouvera quelques métadonnées qualifiant la donnée.

Extrait de la réponse XML d’une recherche d’adresse (par code postal soit «  <span style="color:blue">**G1M2L1**</span>  »):
**Version 5 :**

```xml
	<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://geoegl.msp.gouv.qc.ca/">
	   <SOAP-ENV:Body>
	      <ns1:GeocoderReponse>
	         <nombreResultat>1</nombreResultat>
	         <geocoderReponseListe>
	            <borneDetail>
	               <adresseLibre>1715 Rue De Merlac, Québec</adresseLibre>
	               <geocodeMatchCode>100</geocodeMatchCode>
	               <noCiviq>1715</noCiviq>
	               <codeMuncp>23027</codeMuncp>
	               <noMatricule>448690783110000000</noMatricule>
	               <noSeqAdrCivique>1457606</noSeqAdrCivique>
	               <nomRue>Rue De Merlac</nomRue>
	               <noCivqSuffx/>
	               <noApprt>0</noApprt>
	               <noApprtSuffx>0</noApprtSuffx>
	               <noCiviqDebutDroite>0</noCiviqDebutDroite>
	               <noCiviqFinDroite>0</noCiviqFinDroite>
	               <noCiviqDebutGauche>1701</noCiviqDebutGauche>
	               <noCiviqFinGauche>1725</noCiviqFinGauche>
	               <placeListe>
	                  <borneDetail>
	                     <type>Municipalité</type>
	                     <nom>Québec</nom>
	                  </borneDetail>
	               </placeListe>
	               <CP>
	                  <codePostal>G1M2L1</codePostal>
	                  <Copyright>Marque officielle de la Societe canadienne des postes</Copyright>
	               </CP>
	               <localisation>
	                  <point>
	                     <x>-212089.70453172</x>
	                     <y>316975.67564502</y>
	                     <SRS>
	                        <codeEPSG>32198</codeEPSG>
	                        <nom>EPSG</nom>
	                        <WKT>+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs</WKT>
	                     </SRS>
	                  </point>
	                  <enveloppe>
	                     <SRS>
	                        <codeEPSG>0</codeEPSG>
	                        <nom/>
	                        <WKT/>
	                     </SRS>
	                  </enveloppe>
	               </localisation>
	               <metadonnee>
	                  <classe>Adresse Québec version 09</classe>
	                  <source>AQ</source>
	                  <date>2012/11/08 00:00:00</date>
	               </metadonnee>
	            </borneDetail>
	         </geocoderReponseListe>
	      </ns1:GeocoderReponse>
	   </SOAP-ENV:Body>
	</SOAP-ENV:Envelope>
```

*cote de précision*

| 100 | Le géocodage a réussis à associer l’adresse au rôle d’évaluation |
| 50 | Le géocodage a positionner l’adresse entre le minimum et le maximum de la tranche d’adresse du segment par extrapolation mathématique |
| 35 | Le géocodage a positionner l’adresse au centre du segment de la rue (absence de minimum/maximum) |


<a id="version"></a>
####Versions du service Web ( GLO )  [<span class="octicon octicon-link"></span>](#version)

Version 1 : Version initiale

Version 2 : 14 octobre 2009

La différence majeure entre les deux versions se retrouve au niveau des recherches par adresse.Le géocodage est maintenant plus précis c’est à dire que le positionnement peut se faire directement sur le numéro civique (grâce au rôle d’évaluation) et non plus sur une tranche d’adresse seulement comme c’était le cas avec la version #1 du service :

Ancien champs de la version #1:
```xml
	<  noCiviqDebut  >
	<  noCiviqFin  >
```

Remplacés par les nouveaux champs de la version #2:
```xml
	<  geocodeMatchCode  >
	<  noCiviq  >
	<  noCiviqDebutDroite  >
	<  noCiviqFinDroite  >
	<  noCiviqDebutGauche  >
	<  noCiviqFinGauche  >
```

Version 3 : décembre 2010

La version 3 du  GLO  comprend l’ajout des champs suivants:  CODE_MUNCP ,  NO_MATRICULE ,  NO_SEQ_ODONM  du  DGE .   Cette version comprend également l’ajout d’une recherche d'adresse textuelle améliorée supplémentaire qui donne des résultats si aucun pattern n’est respecté. La recherche par Lieux d’intérêt est également grandement améliorée.

Champs de la version #3:
```xml
	<  geocodeMatchCode  >
	<  noCiviq  >
	<  noCiviqDebutDroite  >
	<  noCiviqFinDroite  >
	<  noCiviqDebutGauche  >
	<  noCiviqFinGauche  >
	<  code_muncp  >
	<  no_matricule  >
	<  no_seq_adr_civique  >
```

**Version 5 : novembre 2012**

Cette version comprend également l’ajout d’une recherche d'adresse de similarité phonétique améliorée supplémentaire qui donne des résultats si aucun pattern n’est respecté.

Champs de la version #5:

	ajout en sortie du tag :  
  <span style="background:lime;mso-highlight:lime">**<RemarqueListe/>** </span>

 Correspond aux suggestions de similarité phonétique suggérées si aucun résultat n’est trouvé.

 ajout en sortie dans le résultat XML:  

```xml
	 <borneDetail>  
     <noCiviqDebut/>
     <noCiviqFin/>  
     ...
	 <CP>
	     <codePostal>G1V2L2</codePostal>
	     <Copyright> Marque officielle de la Societe canadienne des postes</Copyright>
	 </CP>
   ...
  <localisation>
      <point>
           <x>-7934466.89847387</x>
           <y>5904997.4000787</y>
           <SRS>
               <nom>spatialreferencing.org</nom>
               <codeEPSG>900913</codeEPSG>
               <WKT>
                    +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +units=m +k=1.0 +nadgrids=@null +no_defs
              </WKT>
            </SRS>
       </point>
      <enveloppe>
           <Xmin/>
           <Ymin/>
           <Xmax/>
           <Ymax/>
           <SRS>
               <nom/>
               <codeEPSG>0</codeEPSG>
               <WKT/>
           </SRS>
      </enveloppe>
  </localisation>
```

**<u> Ajout janvier 2014 </u>**

ajout en sortie du tag :  
<span style="background:lime;mso-highlight:lime">`<statut/> `</span>  

Correspond aux informations sur les municipalités.  
etat	: Officiel ou Non officiel.  
description   : Valide, Supprimé.  
commentaire   : correspondant à une Ancienne limite ou la ville correspondant Maintenant.

Correspond également aux informations sur les adresses.
etat           : Officiel ou Non officiel.
description    : Ajouté, Modification sur description seulement, Modification sur géométrie seulement, Modification sur géométrie et description.
commentaire    : commentaire quelconque.  


Version 6 BETA janvier 2015:

Parmi les améliorations :
- le générique et l'orientation de l'odonyme est maintenant utilisé pour préciser la rechercher par adresse.
- un option permettant le regroupement des adresses pour une même coordonnées. Permettant ainsi d'avoir un seul résutltat pour "1 place ville-marie montréal" par exemple
- amélioration de la recherche par intersection. La municipalité n'est plus obligatoire et l'intersection par numéro de route et autoroute est maintenant possible.
- un retour en JSON (excel devrait être possible dans un futur proche)
- une recherche de 'reverse geocoding' (recherche d'adresse par coordonnée)
- plus de possibilités pour la recherche par GPS en définissant le code EPSG en entrée (paramètre: epsg_entree).
- recherche par GPS retourne mainteannt la mrc, région administrative(plus clairement) et la localité qui fait référence au toponyme le plus près (avant bdga_habit_point_p)
- optimisation du code qui permet un amélioration de la vitesse de la requête d'environ 200% dans la plupart des cas
