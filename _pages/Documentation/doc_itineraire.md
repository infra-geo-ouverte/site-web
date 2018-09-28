---
permalink: /documentation/doc_itineraire/
layout: general
iconedocumentation: ""
---

# Comment utiliser le service d'itinéraire du gouvernement du Québec hébergé au MSP.

=====================

## Référence pour l'API
Voir cette [référence en **anglais seulement** du Server API d'Open Source Routing Machine (OSRM) pour utiliser et intégrer le service dans vos applications Web.](https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md) 

IMPORTANT : Il s'agit de changer l'URL de l'hôte : http://router.project-osrm.org par celui du service du MSP : https://geoegl.msp.gouv.qc.ca/services/itineraire/.

=====================

### Exemple avec "viaroute"

Calcul du chemin le plus court entre deux coordonnées et d'une liste ordonnée de point intermédiaire.

> https://geoegl.msp.gouv.qc.ca/services/itineraire/nearest/v1/driving/-71.7719940621812,45.444943646257855?number=1

Paramètres:
- Pour choisir le mode de transport : &graph=valeur  
  Liste des valeurs: voiture
- Formatter le résulat en [JSONP](http://en.wikipedia.org/wiki/JSONP) : &JSONP=FonctionCallback
- Obtenir les information de navigation: &instructions=false|true
- Obtenir une route alternative: &alt=false|true
- Désactiver la compression : &compression=false|true  (La compression [Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm) de l'API google est utilisé par défaut.)

Le JSON retourné ressemblera à ceci:
> {"status":0, 
"status_message": "Found route between points", 
"route_geometry": [[46.548358, -71.099907],[46.549629, -71.096738],[46.551233, -71.092805],[46.553778,-71.086544],[46.555336,-71.082701],[46.556366, -71.080120],[46.551462,-71.083229],[46.551127, -71.083415],[46.550785, -71.083571],[46.550443,-71.083693],[46.550099, -71.083777],[46.549512, -71.083865],[46.547862,-71.084074],[46.546633, -71.084228],[46.546099, -71.084272],[46.545747,-71.084269],[46.545055, -71.084179],[46.544552, -71.084043],[46.544036,-71.083842],[46.543550, -71.083579],[46.541323, -71.082138],[46.540213,-71.081447],[46.539554, -71.081100],[46.539054, -71.080870],[46.538427,-71.080617],[46.539500, -71.077874],[46.542587, -71.070270],[46.542621,-71.070216],[46.542696, -71.070177],[46.542765, -71.070176],[46.542818,-71.070209],[46.542882, -71.070257],[46.543063, -71.070551],[46.543154,-71.070653],[46.543246, -71.070655],[46.543634, -71.070154],[46.543674,-71.070046],[46.543673, -71.069988],[46.543492, -71.069556],[46.543357,-71.069321],[46.543105, -71.069040],[46.543357, -71.069321],[46.543492,-71.069556],[46.543673, -71.069988],[46.543674, -71.070046],[46.543634,-71.070154],[46.543246, -71.070655],[46.543154, -71.070653],[46.543063,-71.070551],[46.542882, -71.070257],[46.542765, -71.070176],[46.542696,-71.070177],[46.542621, -71.070216],[46.542587, -71.070270],[46.540462,-71.075523],[46.540071, -71.076457],[46.539500, -71.077874],[46.538427,-71.080617],[46.537205, -71.080196]], 
"route_instructions":[["10","Rang Saint-Laurent",1756,0,6557,"1756m","NE",60],["4","Route du Président-Kennedy",2103,5,117,"2103m","SW",203],["6","Rue Poulin",1175,24,4233,"1175m","NE",60],["5","Rue Poulin",1175,40,4233,"1175m","NW",323],["8","Route du Président-Kennedy",139,57,0,"139m","S",166],["15","",0,58,0,"","N",0.0]],
"route_summary":{"total_distance":6351,"total_time":15141,"start_point":"Rang Saint-Laurent","end_point":"Route du Président-Kennedy"}, 
"alternative_geometries": [], 
"alternative_instructions":[],"alternative_summaries":[], "route_name":["Rang Saint-Laurent","Route du Président-Kennedy"],
"alternative_names":[["",""]],
"via_points":[[46.548358,-71.099907],[46.543012,-71.070463],[46.537205,-71.080196]], "via_indices":[0,59,95],
"alternative_indices":[], 
"hint_data":{"checksum":-460876609,  "locations":["2tgJALngCQDHBQAAOgAAAKYAAAAAAAAALwUAAJMqBwCGRcYC_RnD-wAA2SU","-N8JAFzlCQCyAQAAAwAAAAQAAABpAwAArQAAAJwwBwCkMMYCAY3D-wwA2SU","998JABjhCQA3BgAAPwAAACcBAAAOAAAAjwMAAH4vBwD1GcYC_GbD-wEAAAA"] }}
