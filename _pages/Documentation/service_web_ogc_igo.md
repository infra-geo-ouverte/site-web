---
permalink: /documentation/services-web-ogc-igo/
layout: general
iconedocumentation: ""
---

## Voici la liste des services OGC (WMS, WFS, WMTS, WCS) offerts via IGO:

### Services de fonds de carte tuilés : 

<a id="ServiceFond"></a>
##### A) Service de fond de carte topographique gouvernemental
Le service de fond de carte public se nomme "carte_gouv_qc_public". Il présente un fond de carte (routes, hydrographie, lieux d'intérêt) basé sur des données gouvernementales mises à jour régulièrement.  Deux formats sont offerts :
+ <b>WMTS</b> : couche nommée "carte_gouv_qc_public" : [https://geoegl.msp.gouv.qc.ca/apis/carto/wmts/1.0.0/?SERVICE=WMTS&REQUEST=GetCapabilities](https://geoegl.msp.gouv.qc.ca/apis/carto/wmts/1.0.0/?SERVICE=WMTS&REQUEST=GetCapabilities)
+ <b>TMS</b> : format d'appel des tuiles https://geoegl.msp.gouv.qc.ca/carto/tms/1.0.0/carte_gouv_qc_public@EPSG_3857/{z}/{x}/{-y}.png
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

<a id="ServiceImagerie"></a>
##### B) Service de fond de carte d'imagerie du gouvernement du Québec
Le service de fond de carte d'imagerie se nomme "orthos". Il s'agit d'une couverture continue d'images satellitaires et aériennes acquises par le gouvernement du Québec ainsi que dans le cadre du partenariat d'acquisition d'orthophographies gouvernemental.<br/>
<b>Conditions d'utilisation</b> : Le service WMTS peut être utilisé uniquement par le personnel des ministères et des organismes du gouvernement du Québec (ministères et organismes faisant partie du périmètre de l’ACRIgéo) pour des fins professionnelles, dans des sites intranet, extranet et Internet gouvernementaux. Le service d'imagerie peut être utilisé dans des sites Internet gouvernementaux. Le service WMTS est licencié au même titre que les données d’origines et il ne peut être utilisé que par le gouvernement du Québec. Celui-ci n’est pas autorisé à vendre, à prêter, à donner, à échanger ou prendre copie afin de transmettre à un tiers les Données. Le lien du service WMTS (URL source) ne peut en aucun temps être partagé aux organisations membres des réseaux ACRIgéo ni à toute autre organisation ou personne externe au gouvernement du Québec. Le service est mis à jour régulièrement.<br/>
Deux formats sont offerts :
+ <b>WMTS</b> : couche nommée "orthos" : [https://geoegl.msp.gouv.qc.ca/apis/carto/wmts/1.0.0/?SERVICE=WMTS&REQUEST=GetCapabilities](https://geoegl.msp.gouv.qc.ca/apis/carto/wmts/1.0.0/?SERVICE=WMTS&REQUEST=GetCapabilities)
+ <b>TMS</b> : format d'appel des tuiles https://geoegl.msp.gouv.qc.ca/carto/tms/1.0.0/orthos@EPSG_3857/{z}/{x}/{-y}.png

<a id="ServicesCarto"></a>
### Services cartographiques WMS/WFS : 

##### A) Aperçu des couches disponibles dans Données Québec
+ Visualisation : [https://www.carte-igo.donneesquebec.ca/igo2/apercu-qc/](https://www.carte-igo.donneesquebec.ca/igo2/apercu-qc/)

##### B) Service WMS du ministère de la Sécurité publique (MSP)
+ Service WMS : [https://geoegl.msp.gouv.qc.ca/apis/wss/complet.fcgi?](https://geoegl.msp.gouv.qc.ca/apis/wss/complet.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

##### C) Surveillance des crues
+ Visualisation : [https://www.carte-igo.donneesquebec.ca/igo2/apercu-qc/?context=crue](https://www.carte-igo.donneesquebec.ca/igo2/apercu-qc/?context=crue)<br/>
+ Service WMS : [https://geoegl.msp.gouv.qc.ca/apis/wss/vigilance.fcgi?](https://geoegl.msp.gouv.qc.ca/apis/wss/vigilance.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

##### D) Forêt Ouverte  
+ Visualisation : [https://www.foretouverte.gouv.qc.ca](https://www.foretouverte.gouv.qc.ca)<br/>
+ Service WMS : [https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi?service=WMS&version=1.3.0&request=GetCapabilities](https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

##### E) Transports  
+ Visualisation : [https://www.carte-igo.donneesquebec.ca/igo2/apercu-qc/?context=mtq](https://www.carte-igo.donneesquebec.ca/igo2/apercu-qc/?context=mtq)<br/>  
+ Service WMS : [https://ws.mapserver.transports.gouv.qc.ca/swtq?service=WMS&version=1.3.0&request=GetCapabilities](https://ws.mapserver.transports.gouv.qc.ca/swtq?service=WMS&version=1.3.0&request=GetCapabilities) 

##### F) CPTAQ  
+ Visualisation : [https://demeter.cptaq.gouv.qc.ca/](https://demeter.cptaq.gouv.qc.ca/)<br/>  
+ Service WMS : [https://carto.cptaq.gouv.qc.ca/cgi-bin/v2/cptaq?SERVICE=WMS&VERSION=1.3.0&REQUEST=Getcapabilities](https://carto.cptaq.gouv.qc.ca/cgi-bin/v2/cptaq?SERVICE=WMS&VERSION=1.3.0&REQUEST=Getcapabilities)  

##### G) Cartes de glace  
+ Service WMS/WCS : [https://geoegl.msp.gouv.qc.ca/apis/wss/historiqueglace.fcgi?service=wms&version=1.3.0&request=getcapabilities](https://geoegl.msp.gouv.qc.ca/apis/wss/historiqueglace.fcgi?service=wms&version=1.3.0&request=getcapabilities)