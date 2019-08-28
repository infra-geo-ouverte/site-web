---
permalink: /documentation/services-web-ogc-igo/
layout: general
iconedocumentation: ""
---

## Voici la liste des services OGC (WMS, WFS, WMTS, WCS) offerts via IGO:

<a id="a"></a>
#### A) [<span class="octicon octicon-link"></span>](#a)WMTS - Fond de carte : 
##### Les fonds de carte peuvent être accédés par l'entremise de cet URL de service WMTS : [https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetCapabilities&VERSION=1.0.0](https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetCapabilities&VERSION=1.0.0).
<a id="a1"></a>
##### [<span class="octicon octicon-link"></span>](#a1) Le service de fond de carte public se nomme "carte_gouv_qc_public". Il présente un fond de carte (routes, hydrographie, lieux d'intérêt) basé sur des données gouvernementales mises à jour régulièrement.  
+ Pour l'utiliser dans l'application mobile **[OSMAnd](https://osmand.net/)**, voici l'URL à utiliser pour configurer le WMTS comme source en ligne dans les fonds de carte : [https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=carte_gouv_qc_public&STYLE=default&TILEMATRIXSET=EPSG_3857&TILEMATRIX={0}&TILEROW={2}&TILECOL={1}&FORMAT=image%2Fpng](https://geoegl.msp.gouv.qc.ca/carto/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=carte_gouv_qc_public&STYLE=default&TILEMATRIXSET=EPSG_3857&TILEMATRIX={0}&TILEROW={2}&TILECOL={1}&FORMAT=image%2Fpng) avec le module "[online maps](https://osmand.net/features/online-maps-plugin).
<a id="a2"></a>
##### [<span class="octicon octicon-link"></span>](#a2)Le service de fond de carte - Imagerie du gouvernement du Québec se nomme "orthos". Il s'agit d'une mosaïque d'images aériennes acquises dans le cadre du partenariat d'acquisition d'orthophographies gouvernemental.
+ Le service WMTS peut être utilisé uniquement par le personnel des ministères et des organismes du gouvernement du Québec (ministères et organismes faisant partie du périmètre de l’ACRIgéo) pour des fins professionnelles, dans des sites intranet, extranet et Internet gouvernementaux. Le service d'imagerie peut être utilisé dans des sites Internet gouvernementaux. Le service WMTS est licencié au même titre que les données d’origines et il ne peut être utilisé que par le gouvernement du Québec. Celui-ci n’est pas autorisé à vendre, à prêter, à donner, à échanger ou prendre copie afin de transmettre à un tiers les Données. Le lien du service WMTS (URL source) ne peut en aucun temps être partagé aux organisations membres des réseaux ACRIgéo ni à toute autre organisation ou personne externe au gouvernement du Québec. Le service est mis à jour régulièrement.

<a id="b"></a>
##### B) [<span class="octicon octicon-link"></span>](#b)WMS/WFS - Données Québec ([https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/)) : [https://geoegl.msp.gouv.qc.ca/ws/igo_gouvouvert.fcgi?](https://geoegl.msp.gouv.qc.ca/ws/igo_gouvouvert.fcgi?)

<a id="c"></a>
##### C) [<span class="octicon octicon-link"></span>](#c)WMS/WFS - Débit niveau ([https://geoegl.msp.gouv.qc.ca/adnv2/](https://geoegl.msp.gouv.qc.ca/adnv2/)) : [https://geoegl.msp.gouv.qc.ca/ws/adnInternetV2.fcgi?](https://geoegl.msp.gouv.qc.ca/ws/adnInternetV2.fcgi?)

<a id="d"></a>
##### D) [<span class="octicon octicon-link"></span>](#d)WMS - Inventaire Forestier ([https://geoegl.msp.gouv.qc.ca/igo/mffpecofor/](https://geoegl.msp.gouv.qc.ca/igo/mffpecofor/)) : [https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi?service=WMS&version=1.3.0&request=GetCapabilities](https://geoegl.msp.gouv.qc.ca/ws/mffpecofor.fcgi?service=WMS&version=1.3.0&request=GetCapabilities)

<a id="e"></a>
##### E) [<span class="octicon octicon-link"></span>](#e)WMS - Transports ([https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=mtq](https://geoegl.msp.gouv.qc.ca/igo2/apercu-qc/?context=mtq)) : [https://ws.mapserver.transports.gouv.qc.ca/swtq?service=WMS&version=1.3.0&request=GetCapabilities](https://ws.mapserver.transports.gouv.qc.ca/swtq?service=WMS&version=1.3.0&request=GetCapabilities) 

<a id="f"></a>
##### F) [<span class="octicon octicon-link"></span>](#f)WMS - CPTAQ ([http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1](http://www.cptaq.gouv.qc.ca/index.php?id=378&no_cache=1)) : [https://carto.cptaq.gouv.qc.ca/cgi-bin/cptaq?service=WMS&version=1.3.0&request=GetCapabilities](https://carto.cptaq.gouv.qc.ca/cgi-bin/cptaq?service=WMS&version=1.3.0&request=GetCapabilities)  

<a id="g"></a>
##### G) [<span class="octicon octicon-link"></span>](#g)WMS - BDGA ([https://www.donneesquebec.ca/recherche/fr/dataset/base-de-donnees-geographiques-et-administratives-a-lechelle-de-1-1-000-000](https://www.donneesquebec.ca/recherche/fr/dataset/base-de-donnees-geographiques-et-administratives-a-lechelle-de-1-1-000-000)) : [https://geoegl.msp.gouv.qc.ca/ws/bdga.fcgi?service=WMS&version=1.3.0&request=GetCapabilities](https://geoegl.msp.gouv.qc.ca/ws/bdga.fcgi?service=WMS&version=1.3.0&request=GetCapabilities) 

<a id="h"></a>
##### H) [<span class="octicon octicon-link"></span>](#h)WMS-WCS - Carte de glace : [https://geoegl.msp.gouv.qc.ca/ws/radarsat.fcgi?](https://geoegl.msp.gouv.qc.ca/ws/radarsat.fcgi?) 

<a id="i"></a>
##### I) [<span class="octicon octicon-link"></span>](#i)WMS-WFS - Statistiques régionales de criminalités au Québec  : [https://geoegl.msp.gouv.qc.ca/ws/dpop.fcgi?](https://geoegl.msp.gouv.qc.ca/ws/dpop.fcgi?) 
