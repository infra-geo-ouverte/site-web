---
permalink: /documentation/glo/
layout: general
iconedocumentation: ""
submenu:
  -
    hook: "introduction"
    title: "Introduction"
  -
    hook: "type"
    title: "Type de recherche"
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
    hook: "mode"
    title: "Deux modes d’utilisation"
    submenu:
        -
            hook: "http_rest_get"
            title: "HTTP"
        -
            hook: "soap"
            title: "SOAP"
  -
    hook: "requete"
    title: "Structure des requêtes SOAP (XML)"
    submenu:
        -
            hook: "requetev5"
            title: "Version #5"
        -
            hook: "requetev6"
            title: "Version #6"
  -
    hook: "reponse"
    title: "Structure des réponses SOAP (XML)"
    submenu:
        -
            hook: "reponsev5"
            title: "Version #5"
        -
            hook: "reponsev6"
            title: "Version #6"
  -
    hook: "version"
    title: "Versions du service Web ( GLO )"
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

#Service web de "GéoLOcalisation (GLO)"

<a id="introduction"></a>
##Introduction [<span class="octicon octicon-link"></span>](#introduction)

Afin de faciliter le positionnement sur le territoire Québécois, le Ministère de la Sécurité Publique du Québec (MSP) à mis en place un service Web dédié à cette fin.Ce service de «  géolocalisation  » est entièrement interopérable et permet de localiser des adresses, des codes postaux, des rues, des municipalités, des  MRC , des toponymes, des édifices publics (écoles, hôpitaux,  CLSC , CPE), des entreprises et même des bornes kilométriques situées sur le réseau routier du Ministère des Transports ( MTQ ).  L’innovation de ce service repose sur sa haute fiabilité, son utilisation multiplateforme ainsi que sur la fréquence de ses mises à jour.


###Sécurité d’accès

Le contrôle d’accès au service Web se fait via une clé d’utilisation (semblable à celle requise pour utiliser l’API de Google  Maps ).  Cette clé permet au  MSP  de contrôler les accès et par le fait même, le contenu de sa base de données.Les clés permettent également d’autoriser ou d’empêcher l’utilisation decertains types de recherche selon l’organisation ou l’utilisateur qui tente de se connecter.  Les clés d’accès sont émises par le  MSP  et sont contrôlées en fonction d’une suite d’adresses IP reliée au domaine Internet du requérant.Pour obtenir une clé, il suffit d’en faire la demande auprès du ministère via l’adresse de courriel suivante: [geomsp@msp.gouv.qc.ca](mailto:geomsp@msp.gouv.qc.ca).

### NOTE  IMPORTANTE

#### Ce service ne doit pas être utilisé en mode lot. IL EST UN SERVICE EN LIGNE. Il est INTERDIT de lancer des appels par un programme, service, module quelconque qui permettrait de géocoder des milliers adresses. Si le besoin de votre organisation est de géocoder quelques centaines ou milliers d’adresses, veuillez communiquer avec nous pour l’utilisation du service  GLO  utilisable en mode lot, qui est beaucoup plus efficace. Si un organisme utilise le  GLO  pour un géocodage en lot, son accès lui sera retiré sans préavis.

<a id="type"></a>
### Type de recherche [<span class="octicon octicon-link"></span>](#type)

Le service Web supporte cinq types de recherche :

| | Type de recherche | Code |
| ---- | ---- | ---- |
| 1 | Par adresse (combinaison de code postal, no. civique, rue ou ville)         |adresse |
| 2 | Par lieux d‘intérêts (restaurant, entreprise, école, etc…)                  |lieu  |
| 3 | Par borne kilométrique (borne et no. de route)                              |borne |
| 4 | Par coordonnées GPS (lat, lon) ou (lon, lat), UTM, MTM, format Bell         |gps   |
| 5 | Infrastructure d’Hydro-Québec (poteau, barrage, centrale, etc…)             |hq    |
| 6 | Recherche inversée par coordonnée (reverse geocoding)                       | reversegeocoding |  


Certaines recherches peuvent être limitées à une clientèle bien précise (ex : La recherche sur les éléments du réseau d’Hydro-Québec est disponible seulement par les intervenants en sécurité civile).  Cette gestion est  effectué  via la clé d’accès décrite ci haut.  

Le service de recherche considère uniquement une seule chaîne de caractères par requête (paramètre <texte> ). Par contre, cette chaîne peut comporter plusieurs valeurs (ex : 1715 rue  Merlac , Québec). Contrairement à l’engin de recherche de Google, l’ordre dans lequel les paramètres sont placés dans la chaîne à une importance sur la performance et qualité des résultats obtenus.  

Depuis la version 5 du  GLO , il est possible de passer une chaine de caractères ne correspondant à aucun pattern pour la recherche par adresse. Une recherche de similarité phonétique est alors déclenchée.  

Ex: 2525 Québec Laurier  G1V   2L2  boulevard

La fonction cherche donc les mots demandés.Ces mots peuvent être coupés au début ou avec des fautes d’orthographe à l’intérieur des mots. Les mots sont alors affectés d’un poids et ceux le plus près de 100% sont retournés.

Cette nouvelle fonctionnalité est un peu plus lente que la recherche par pattern qui est beaucoup plus rapide.

<span style="background-color:lime;">**LES  VERSIONS  1, 2 ET 3 NE SONT PLUS SUPPORTÉES.**<span />

Voici des exemples de chaîne qui peuvent être soumise au service (les informations retournées seront décrites en détail à la section du présent document):

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

  = ►   Retournetoutes les adresses (no. civique, la rue et la ville) pour toutes les villes du Québec qui ont une rue et un numéro civique correspondant.

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
  Il n’est pas nécessaire d’écrire 'rue', 'route', 'rang', 'avenue', etc.
  **La version 6 prend en compte les génériques**

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

  i) Dans les cas où le résultat pour tous les patterns précédents donne « aucun résultat ». La recherche passe ensuite dans une recherche **phonétique** en utilisant les outils de similarités de textes fournient par PostgreSQL (http://www.postgresql.org/docs/9.3/static/pgtrgm.html). Le script doit d'abord avoir détecté un numéro civique ou un code postal.

  Ex : <span style="color:blue">**2525 laurire quebce**</span>

  = ►  Retourne  

  ```
  2525 Boulevard Laurier, Québec
  ```

  j) Dans les cas où le résultat pour tous les patterns précédents donne « aucun résultat ». La recherche passe par une recherche **textuelle**

  Ex : <span style="color:blue">**2525 boul Laurier Québec G1V 2L2**</span>

  = ►  Retourne un résultat provenant de la base de données d’adresses. La recherche se fait dans le champ < RECHERCHE_TEXTUELLE > qui contient l’adresse au complet, le code postal, le nom de ville. TOUS LES MOTS sont recherchés et doivent exister dans ce champ.

  ```
  2525 Boulevard Laurier, Québec
  ```

<a id="lieu"></a>
####2. Lieu  

Version 5 :  

À partir de **plusieurs mots clé** (l'ordre n'a pas d'importance)  

Retourne un résultat provenant de la base de données de Lieux d’intérêt. La recherche se fait dans le champ <  RECHERCHE_TEXTUELLE  > qui contient plusieurs informations concernant ce lieu : son nom,des mots clé, l’adresse s’il y a lieu, le nom de ville. TOUS LES MOTS sont recherchés et doivent exister dans ce champ.  


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

À partir de similarité entre le texte entré et la contenu du champ < RECHERCHE_TEXTUELLE >. Un poids plus grand est apporté au nom du lieu 
comparé aux informations supplémentaires compris dans le champs < RECHERCHE_TEXTUELLE >. 
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

<span style="color:blue">**PANNEAU 40 st-raymond**</span>  
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

<a id="mode"></a>
### Deux modes d’utilisation [<span class="octicon octicon-link"></span>](#mode)

<a id="http_rest_get"></a>
####1) HTTP  
La première façon d’utiliser le service est par un simple appel URL (REST) en mode GET, directement dans un fureteur Internet.Cette méthode est plus simple, car elle ne nécessite pas de programmation (création d’un message ou d’un client en format SOAP).Cette méthode retourne l’information sous plusieurs formes possibles.


Voici un exemple d’appel en mode HTTP.

Pour la version 5:  
http://geoegl.msp.gouv.qc.ca/Services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg=900913&format=xml

Pour la version 6 :  
http://geoegl.msp.gouv.qc.ca/Services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg_sortie=900913&format=JSON

Liste des paramètres:

| | Variable | Valeurs possibles | Obligatoire |
| ---- | ---- | ---- | ---- |
| 1 | Texte   | Chaîne de caractères pour la recherche | Oui|
| 2 | cle     | Clé d’accès émise par le MSP  | Oui |
| 3 | type    | adresse, lieu, borne, gps, hq A partir de la version 5, le type est obligatoire | Oui – « adresse »  par défaut |
| 4 | epsg    | Système de référence des coordonnées en sortie  Les valeurs possibles sont ceux supporté par PostGIS v2.0.1 | Oui – système de coordonnées source par défaut |
| 5 | indexDebut | Permet de spécifier l’index de départ de la réponse, (optionnel, 0 par défaut)  | Non - 0 par défaut |
| 6 | indexFin | Permet de spécifier l’index de fin de la réponse, (optionnel 79 par défaut)  | Non - 79 par défaut |
| 7 | version | Paramètre qui n’est plus utilisé.  | ---- |
| 8 | format | Permet de spécifier le type de format de sortie du fichier.  XML  HTML  JSON**  EXCEL**  JSONP**  | Oui – XML par défaut |
| 9 | epsg_entree** | Le code EPSG des coordonnées en entrée.  Les valeurs possibles sont ceux supporté par PostGIS v2.0.1 | Non |
| 10 | epsg_sortie** | Le code EPSG des coordonnées en sortie.  Les valeurs possibles sont ceux supporté par PostGIS v2.0.1.  Le paramètre "epsg" et "epsg_sortie" sont égaux dans la version 6 | Non (32198 par défaut)|
| 11 | groupe** | Permet de regrouper les adresses positionnées aux mêmes coordonnées et possédant les mêmes attributs.  1=regrouper  0=pas grouper | Non  (0 par défaut) |
| 12 | callback** | Nom de la méthode à utiliser (côté client) lors du retour de la réponse. Ce paramètre est lié au format 'JSONP' | Non |

<span style="color:red">
* Si la chaîne de texte  comprends  des caractères non supportés par l’URL (les accents et les espaces entre autres), ces derniers doivent être encodés avant d’être soumis au service.En PHP, il existe une fonction pour effectuer automatiquement cette opération ( urlencode ).  
** Avec la version 6 seulement

</span>

Exemple qui retourne les 49 premiers enregistrements seulement

Pour la version 5:  
http://geoegl.msp.gouv.qc.ca/Services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=49&epsg=32198&format=xml

Exemple qui retourne les enregistrements mais dont les coordonnées sont dans le système de projection de Google :

Pour la version 5:  
http://geoegl.msp.gouv.qc.ca/Services/glo/V5/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg=900913&format=xml

Pour la version 6 :  
http://geoegl.msp.gouv.qc.ca/Services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg=900913&format=xml
ou
http://geoegl.msp.gouv.qc.ca/Services/glo/V6/gloServeurHTTP.php?type=adresse&texte=2525%20laurier%20qu%E9bec&cle=votre_clé&indDebut=0&indFin=10&epsg_sortie=900913&format=xml

<a id="soap"></a>
####2) SOAP  
La deuxième façon est d’appeler directement le service Web en utilisant un langage de programmation (Java, .Net, PHP,  etc …). Il requiert la création d’une requête (ou message) SOAP avec les paramètres requis. 
Les différents paramètres ainsi que les méthodes exposées par le service Web sont définies dans le fichier  WSDL (Web Service Definition Language](http://www.w3.org/TR/wsdl "Web Service Definition Language")

pour la version 5 du service:  
http://geoegl.msp.gouv.qc.ca/Services/glo/V5/gloServeur.php?WSDL
Version 6 :
http://geoegl.msp.gouv.qc.ca/Services/glo/V6/gloServeur.php?WSDL  

Voici les méthodes présentement supportées par le service :

*     Geocoder() – _Pour les recherches d’adresses, de lieux ou des éléments du réseau d’Hydro-Québec_
*     GeocoderBorne()
*     GeocoderGPS()
*     GeocoderReverseGeocoding()**  
*     GeocoderLieu()**

** Depuis la version 6 


<a id="requete"></a>
###Structure des requêtes SOAP (XML) [<span class="octicon octicon-link"></span>](#requete)

Tout comme pour le mode par appel URL, les trois* paramètres obligatoires sont :

* la clé d’accès (GLOCleAcces)

* le texte à géocoder (texte)

    *   pour les lieux, le texte doit être préfixé du terme « lieu » (verison antérieure à 6);
    *   pour les élément d’Hydro-Québec, le texte doit être préfixé du terme « HQ »;
    *   pour les adresses, aucun préfixe n’est requis.
    *   pour les bornes. les préfixes 'sortie', 'panneau', 'CN' et 'GCC' sont possibles en utilisant le bon pattern.
    *   pour les recherches par coordonnées GPS. Certains patterns sont possibles et la version 6 est plus permissive.  
 * le type de requête (adresse, lieu, borne, GPS)

*le paramètre "type" n'est pas requis pour les requêtes borne, GPS dans la version 5. Dans la version 6, le paramère "type" n'est  
pas requis en mode SOAP considérant que vous utilisez la bonne fonction.  

<a id="requetev5"></a>
**Version 5 :**  
Requête par adresse:

```xml
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
```
Pour les deux autres types de géocodage, la structure est exactement la même excepté que le nom de la requête :

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
```
Requête par coordonnées GPS:  

```xml
	<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <geo:GPSRequete>
	             ...
	      </geo:GPSRequete>
	   </soapenv:Body>
	</soapenv:Envelope>
```
<a id="requetev6"></a>
**Version 6 :**

Requête par adresse:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
	<soapenv:Body>
		<geo:GeocoderRequete>
			<GLOCleAcces>?</GLOCleAcces>
			<texte>?</texte>
			<type>?</type>
			/*Optional*/
			<codeEPSG>?</codeEPSG>
			/*Optional*/
			<codeEPSGEntree>?</codeEPSGEntree>
			/*Optional*/
			<codeEPSGSortie>?</codeEPSGSortie>
			/*Optional*/
			<index>
				/*Optional*/
				<debut>?</debut>
				/*Optional*/
				<fin>?</fin>
			</index>
			/*Optional*/
			<groupe>?</groupe>
		</geo:GeocoderRequete>
	</soapenv:Body>
</soapenv:Envelope>
```

Requête par coordonnées GPS :

```xml
		<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
	<soapenv:Body>
		<geo:GPSRequete>
		<GLOCleAcces>?</GLOCleAcces>
		<texte>?</texte>
		<codeEPSGEntree>?</codeEPSGEntree>
		<codeEPSGSortie>?</codeEPSGSortie>
	</geo:GPSRequete>
</soapenv:Body>
</soapenv:Envelope>
```

Requête par borne kilométrique:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
	<soapenv:Body>
		<geo:BorneRequete>
		<GLOCleAcces>?</GLOCleAcces>
		<texte>?</texte>
		<codeEPSG>?</codeEPSG>
		/*Optional*/
		<index>
			/*Optional*/
			<debut>?</debut>
			/*Optional*/
			<fin>?</fin>
		</index>
	</geo:BorneRequete>
</soapenv:Body>
</soapenv:Envelope>
```  

Requête par coordonnée (reverse geocoding):  

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
	<soapenv:Body>
		<geo:ReverseGeocodingRequete>
			<GLOCleAcces>?</GLOCleAcces>
			<texte>?</texte>
			<codeEPSGEntree>?</codeEPSGEntree>
			<codeEPSGSortie>?</codeEPSGSortie>
			/*Optional*/
			<index>
				/*Optional*/
				<debut>?</debut>
				/*Optional*/
				<fin>?</fin>
			</index>
			/*Optional*/
			<groupe>?</groupe>
	</geo:ReverseGeocodingRequete>
</soapenv:Body>
</soapenv:Envelope>
```  

Requête par lieu :

```xml
	<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
	   <soapenv:Header/>
	   <soapenv:Body>
	      <geo:LieuRequete>
	             ...
	      </geo:LieuRequete>
	   </soapenv:Body>
	</soapenv:Envelope>
```


<a id="reponse"></a>
####Structure des réponses SOAP (XML) [<span class="octicon octicon-link"></span>](#reponse)

La réponse en format XML qui est retournée par le service (ou via l’URL) peut être facilement décortiquée par l’application appelante.  
Chaque type de requête retourne généralement; le nombre d’enregistrement, une liste d’attributs pour chacune des occurrences de la
réponse correspondant à la chaîne de caractères reçue en paramètre.On retrouve aussi les coordonnées de la localisation de l’information
obtenue de l’entrepôt de donné du  MSP . Enfin, on trouvera quelques métadonnées qualifiant la donnée.

Extrait de la réponse XML d’une recherche d’adresse (par code postal soit «  <span style="color:blue">**G1M2L1**</span>  »):  

<a id="reponsev5"></a>
**Version 5** :  
Requête par adresse:  

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

Requête par borne kilométrique:

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
<soapenv:Body>
	<ns1:BorneReponse>
		<nombreResultat>1</nombreResultat>
			<detail>Aide flottante H47 - Bouée lumineuse H47; RECIF DU NORD OUEST ILE DU BIC</detail>
			<localisation>
				<point>
					<x>-32054.965270581</x>
					<y>489924.2759782</y>
					<SRS>
						<codeEPSG>32198</codeEPSG>
						<nom>EPSG</nom>
						<WKT>+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs</WKT>
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
				<classe>Repères kilométriques  MTQ</classe>
				<source>MTQ</source>
				<date>2014/12/15 00:00:00</date>
			</metadonnee>
		</borneDetail>
		</borneReponseListe>
	</ns1:BorneReponse>
</soapenv:Body>
</soapenv:Envelope>
```

Requête par coordonnées GPS :

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
<soapenv:Body>
	<ns1:GPSReponse>
		<nombreResultat>1</nombreResultat>
		<patternCoordInput>degrés minutes décimales</patternCoordInput>
		<formatCoordInput>dd mm.mmm</formatCoordInput>
		<coteCertitude>0</coteCertitude>
		<rayonIncertitude>0</rayonIncertitude>
		<localisation>
			<municipalite>Saint-Léon-le-Grand (Bas-Saint-Laurent)</municipalite>
			<localite>Saint-Léon-le-Grand</localite>
			<distance>5.7</distance>
			<point>
				<x>67709.232742384</x>
				<y>487286.2746338</y>
				<SRS>
					<codeEPSG>32198</codeEPSG>
					<nom>EPSG</nom>
					<WKT>+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs</WKT>
				</SRS>
			</point>
		</localisation>
	</ns1:GPSReponse>
</soapenv:Body>
</soapenv:Envelope>
```

<a id="reponsev6"></a>
**Version 6**:

Requête par adresse:  

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
<soapenv:Body>
	<ns1:GeocoderReponse>
		<nombreResultat>1</nombreResultat>
		<geocoderReponseListe>
				<adresseLibre>2525 Boulevard Laurier, Québec</adresseLibre>
				<geocodeMatchCode>100</geocodeMatchCode>
				<noCiviq>2525</noCiviq>
				<codeMuncp>23027</codeMuncp>
				<noMatricule>458147961610000000</noMatricule>
				<noSeqAdrCivique>3933017</noSeqAdrCivique>
				<nomRue>Boulevard Laurier</nomRue>
				<noCivqSuffx/>
				<noApprt>0</noApprt>
				<noApprtSuffx>0</noApprtSuffx>
				<noCiviqDebutDroite>0</noCiviqDebutDroite>
				<noCiviqFinDroite>0</noCiviqFinDroite>
				<noCiviqDebutGauche>2505</noCiviqDebutGauche>
				<noCiviqFinGauche>2535</noCiviqFinGauche>
				<placeListe>
						<type>Municipalité</type>
						<nom>Québec</nom>
					</borneDetail>
				</placeListe>
				<CP>
					<codePostal>G1V2L2</codePostal>
					<Copyright>Marque officielle de la Societe canadienne des postes</Copyright>
				</CP>
				<localisation>
					<point>
						<x>-211697.30075628</x>
						<y>312653.86267632</y>
						<SRS>
							<codeEPSG>32198</codeEPSG>
							<nom>EPSG</nom>
							<WKT>+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs</WKT>
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
					<date>2014/12/02 00:00:00</date>
				</metadonnee>
			</borneDetail>
		</geocoderReponseListe>
</ns1:GeocoderReponse>
</soapenv:Body>
</soapenv:Envelope>
```
Requête par borne kilométrique:  

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
<soapenv:Body>
	<ns1:BorneReponse>
		<nombreResultat>1</nombreResultat>
				<detail>Aide flottante H47 - Bouée lumineuse H47; RECIF DU NORD OUEST ILE DU BIC</detail>
				<localisation>
					<point>
						<x>-32054.965270581</x>
						<y>489924.2759782</y>
						<SRS>
							<codeEPSG>32198</codeEPSG>
							<nom>EPSG</nom>
							<WKT>+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs</WKT>
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
					<classe>Repères kilométriques  MTQ</classe>
					<source>MTQ</source>
					<date>2014/12/15 00:00:00</date>
				</metadonnee>
			</borneDetail>
		</borneReponseListe>
</ns1:BorneReponse>
</soapenv:Body>
</soapenv:Envelope>
```

Requête par coordonnées GPS :  

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:geo="http://geoegl.msp.gouv.qc.ca/">
<soapenv:Header/>
<soapenv:Body>
	<ns1:GPSReponse>
		<nombreResultat>1</nombreResultat>
		<patternCoordInput>degrés minutes décimales</patternCoordInput>
		<formatCoordInput>dd mm.mmm</formatCoordInput>
		<coteCertitude>0</coteCertitude>
		<rayonIncertitude>0</rayonIncertitude>
		<localisation>
			<municipalite>Saint-Léon-le-Grand (Bas-Saint-Laurent)</municipalite>
			<localite>Saint-Léon-le-Grand</localite>
			<distance>5.7</distance>
			<point>
				<x>67709.232742384</x>
				<y>487286.2746338</y>
				<SRS>
					<codeEPSG>32198</codeEPSG>
					<nom>EPSG</nom>
					<WKT>+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs</WKT>
				</SRS>
			</point>
		</localisation>
	</ns1:GPSReponse>
</soapenv:Body>
</soapenv:Envelope>
```

*cote de précision (geocodeMatchCode)*

| Code | Description |
| ---- | ---- |
| 100 | Le géocodage a réussis à associer l’adresse au rôle d’évaluation |  
| 50 | Le géocodage a positionner l’adresse entre le minimum et le maximum de la tranche d’adresse du segment par extrapolation mathématique |  
| 35 | Le géocodage a positionner l’adresse au centre du segment de la rue (absence de minimum/maximum) |  


<a id="version"></a>
####Versions du service Web ( GLO )  [<span class="octicon octicon-link"></span>](#version)

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
etat	: Officiel ou Non officiel.  
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
* recherche par GPS retourne mainteannt la mrc, région administrative ( plus clairement, car elle était comprise entre paranthèse dans le noeud 'municipalite' ) et la localité qui fait référence au toponyme le plus près.
* optimisation du code qui permet de doubler la vitesse dans la plupart des cas.  
* le résultat de la recherche par lieu est maintenant obtenu par une recherche par similarité. Le module de postgreSQL, "pg_trgm" est utilisé.

Changement dans les paramètres d'entrée :  

* le code EPSG en entrée peut maintenant être fourni par "epsg_entree". L'ancien paramètre "epsg" est encore maintenu mais fait maintenant référence au nouveau paramètre "epsg_sortie".
