---
permalink: /documentation/doc_itineraire/
layout: general
iconedocumentation: ""
---

# Comment utiliser le service d'itinéraire du gouvernement du Québec hébergé au MSP.

=====================

## Référence pour l'API
L'outil d'itinéraire développé dans le cadre d'IGO, est en fait l'API d'Open Source Routing Machinne (OSRM) appliqué au réseau routier du MTQ.

Voir cette [référence en **anglais seulement** du Server API d'Open Source Routing Machine (OSRM) pour utiliser et intégrer le service dans vos applications Web.](https://github.com/Project-OSRM/osrm-backend/blob/master/docs/http.md)

IMPORTANT : Il s'agit de changer l'URL de l'hôte : http://router.project-osrm.org par celui du service du MSP : https://geoegl.msp.gouv.qc.ca/services/itineraire/.

=====================

### Exemple :

Calcul du chemin le plus court entre deux coordonnées :

> https://geoegl.msp.gouv.qc.ca/services/itineraire/route/v1/driving/-73.535056,45.523849;-71.295712,46.715801?geometries=geojson&overview=simplified

+ Pour de l'information sur les paramètres de cette requête, voir la documentation du [service d'itinéraire](http://project-osrm.org/docs/v5.22.0/api/#route-service) de OSRM.

+ Le GEOJSON retourné ressemblera à ceci:
> {code: "Ok",
waypoints: [
{hint: "8tsCgCgXBIBbAQAAXwAAAAwCAAC3AQAA12yaQh1BqUEZKOlCD13DQlsBAABfAAAADAIAALcBAADYAAAAZvad-x6otgKw8Z37iaO2AgQAHxMrWkKj",
location: [-73.53385,45.525022],
name: "Voie"},{
hint: "zNsIgP___38MAAAADAAAAMIBAAAfAAAALsnRQQAAAADeyXlEmr2FQgwAAAAMAAAAwgEAAB8AAADYAAAAOyDA-wvTyAIgHcD7mdPIAiAALwwrWkKj",
location: [-71.294917,46.715659],
name: "Autoroute Jean-Lesage"}],
routes: [{legs: [{steps: [ ],weight: 11237.7,distance: 237639.7,
summary: "",duration: 11237.7}],weight_name: "routability",
geometry: {coordinates: [[-73.53385,45.525022],[-73.53457,45.519146],[-73.514253,45.521409],[-73.52041,45.531643],[-73.476121,45.57806],[-73.426201,45.568635],
[-73.244366,45.593356],[-73.137768,45.595153],[-73.024261,45.63215],[-72.989346,45.634088],[-72.838908,45.671556],[-72.670915,45.780425],[-72.516683,45.909308],
[-72.486187,45.910916],[-72.314734,46.054557],[-72.283542,46.066764],[-72.060971,46.213971],[-72.057422,46.243324],[-71.649043,46.519472],[-71.633148,46.542853],
[-71.598145,46.552893],[-71.505911,46.620631],[-71.302776,46.69647],[-71.292497,46.717802],[-71.283267,46.721867],[-71.27743,46.716383],[-71.280421,46.727231],
[-71.294917,46.715659]],
type: "LineString"},weight: 11237.7,distance: 237639.7,duration: 11237.7}]}
