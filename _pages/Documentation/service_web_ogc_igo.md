---
permalink: /documentation/services-web-ogc-igo/
layout: general
iconedocumentation: ""
---

## Voici la liste des services OGC (WMS, WFS, WMTS, WCS) offerts via IGO:

### [<a id="ServicesWMTS"></a>](#ServicesWMTS) Service de fonds de carte (WMTS) : 
##### Les fonds de carte peuvent être accédés par l'entremise de cet URL de service WMTS : [https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetCapabilities&VERSION=1.0.0](https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetCapabilities&VERSION=1.0.0).

##### A) [<a id="ServicesWMTS-A"></a>](#carte_publique) Service de fond de carte topographique gouvernemental
Le service de fond de carte public se nomme "carte_gouv_qc_public". Il présente un fond de carte (routes, hydrographie, lieux d'intérêt) basé sur des données gouvernementales mises à jour régulièrement.  Deux formats sont offerts :
+ <b>WMTS</b> : Web Map Tile Service et couche nommée "carte_gouv_qc_public " : https://geoegl.msp.gouv.qc.ca/apis/carto/wmts/1.0.0/?SERVICE=WMTS&REQUEST=GetCapabilities
+ <b>TMS</b> : https://geoegl.msp.gouv.qc.ca/carto/tms/1.0.0/carte_gouv_qc_public@EPSG_3857/{z}/{x}/{-y}.png
+ Pour l'utiliser dans l'application mobile **[OSMAnd](https://osmand.net/)**, voici l'URL à utiliser pour configurer le WMTS comme source en ligne dans les fonds de carte : [https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=carte_gouv_qc_public&STYLE=default&TILEMATRIXSET=EPSG_3857&TILEMATRIX={0}&TILEROW={2}&TILECOL={1}&FORMAT=image%2Fpng](https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=carte_gouv_qc_public&STYLE=default&TILEMATRIXSET=EPSG_3857&TILEMATRIX={0}&TILEROW={2}&TILECOL={1}&FORMAT=image%2Fpng) avec le module "[online maps](https://osmand.net/features/online-maps-plugin).

Les données utilisées proviennent de diverses sources:
+ Adresses Québec (AQ);
+ Bibliothèque et Archives nationales du Québec (BAnQ);
+ Canards illimités Canada;
+ Commission de toponymie;
+ Gouvernement du Canada;
+ Hydro-Québec (HQ);
+ Ministère des Affaires municipales et de l'Habitation (MAMH);
+ Ministère de l'Éducation et de l'Enseignement supérieur (MEES);
+ Ministère de l'Environnement, de la Lutte contre les changements climatiques, de la Faune et des Parcs (MELCCFP);
+ Ministère des Ressources naturelles et des Forêts (MRNF);
+ Ministère de la Sécurité publique (MSP);
+ Ministère de la Santé et des Services sociaux (MSSS);
+ Ministère des Transports (MTQ);
+ Open Street Map (OSM);
+ Sociétés des musées du Québec;
+ Ville de Blainville;
+ Ville de Longueuil;
+ Ville de Montréal;
+ Ville de Québec;
+ Ville de Repentigny;
+ Ville de Rimouski;
+ Ville de Rouyn-Noranda;
+ Ville de Saguenay;
+ Ville de Shawinigan;
+ Ville de Sherbrooke.

##### B) [<a id="ServicesWMTS-B"></a>](#imagerie)Service de fond de carte d'imagerie du gouvernement du Québec
Le service de fond de carte d'imagerie se nomme "orthos". Il s'agit d'une mosaïque d'images aériennes acquises dans le cadre du partenariat d'acquisition d'orthophographies gouvernemental.
+ <b>Conditions d'utilisation</b> : Le service WMTS peut être utilisé uniquement par le personnel des ministères et des organismes du gouvernement du Québec (ministères et organismes faisant partie du périmètre de l’ACRIgéo) pour des fins professionnelles, dans des sites intranet, extranet et Internet gouvernementaux. Le service d'imagerie peut être utilisé dans des sites Internet gouvernementaux. Le service WMTS est licencié au même titre que les données d’origines et il ne peut être utilisé que par le gouvernement du Québec. Celui-ci n’est pas autorisé à vendre, à prêter, à donner, à échanger ou prendre copie afin de transmettre à un tiers les Données. Le lien du service WMTS (URL source) ne peut en aucun temps être partagé aux organisations membres des réseaux ACRIgéo ni à toute autre organisation ou personne externe au gouvernement du Québec. Le service est mis à jour régulièrement.


### [<a id="ServicesWeb"></a>](#ServicesWeb) Service cartographiques WMS/WFS : 

##### A) [<a id="ServicesWeb-A"></a>](#donneesqc)Aperçu des couches disponibles dans Données Québec
+ Visualisation : [https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/)

##### B) [<a id="ServicesWeb-B"></a>](#servmsp)Service WMS du ministère de la Sécurité publique (MSP)
+ Service WMS : [https://geoegl.msp.gouv.qc.ca/apis/wss/complet.fcgi?](https://geoegl.msp.gouv.qc.ca/apis/wss/complet.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

##### C) [<a id="ServicesWeb-C"></a>](#vigilance)Surveillance des crues
+ Visualisation : [https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=crue](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=crue)<br/>
+ Service WMS : [https://geoegl.msp.gouv.qc.ca/apis/wss/vigilance.fcgi?](https://geoegl.msp.gouv.qc.ca/apis/wss/vigilance.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

##### D) [<a id="ServicesWeb-D"></a>](#foretouverte)Forêt Ouverte  
+ Visualisation : [https://www.foretouverte.gouv.qc.ca](https://www.foretouverte.gouv.qc.ca)<br/>
+ Service WMS : [https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi?service=WMS&version=1.3.0&request=GetCapabilities](https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

##### E) [<a id="ServicesWeb-E"></a>](#transport)Transports  
+ Visualisation : [https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=mtq](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=mtq)<br/>  
+ Service WMS : [https://ws.mapserver.transports.gouv.qc.ca/swtq?service=WMS&version=1.3.0&request=GetCapabilities](https://ws.mapserver.transports.gouv.qc.ca/swtq?service=WMS&version=1.3.0&request=GetCapabilities) 

##### F) [<a id="ServicesWeb-F"></a>](#cptaq)CPTAQ  
+ Visualisation : [http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1)<br/>  
+ Service WMS : [https://carto.cptaq.gouv.qc.ca/cgi-bin/cptaq?service=WMS&version=1.3.0&request=GetCapabilities](https://carto.cptaq.gouv.qc.ca/cgi-bin/cptaq?service=WMS&version=1.3.0&request=GetCapabilities)  

##### G) [<a id="ServicesWeb-G"></a>](#glace)Cartes de glace  
+ Visualisation : [https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=glace](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=glace)<br/>
+ Service WMS/WCS : [https://geoegl.msp.gouv.qc.ca/ws/radarsat.fcgi?service=WMS&version=1.3.0&request=GetCapabilities](https://geoegl.msp.gouv.qc.ca/ws/radarsat.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)