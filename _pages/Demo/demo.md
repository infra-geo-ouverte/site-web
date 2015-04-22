---
permalink: /demo/
layout: general
title-main: Démonstration
iconedemo: ""
---

Voici le lien de démonstration pour voir le navigateur en action : http://pregeoegl.msp.gouv.qc.ca/gouvouvert/ et avec un exemple d'XML pour une configuration de base :

<navigateur authentification="false" 
            titre="I.G.O. - Données ouvertes - Gouvernement du Québec"
            baseUri="/gouvouvert/public/" 
            serviceUri="../services/" 
            apiUri="../api/" 
            libUri="../librairie/">
    <presentation>
           <panneaux>
                <panneau classe="PanneauCarte" titre="" />
                 <panneau id="InfoPanneau" classe="PanneauInfo" />
                 <panneau classe="PanneauEntete" image="images/bandeau/bandeau_donnees_ouv_goloc.png"/>

                <panneau classe="PanneauMenu" ouvert="true" >
                    <element-accordeon classe="Arborescence" ouvert="true"/>
                    <element-accordeon classe="Localisation" id="localisation">
                        <element classe="RechercheAdresse"/>
                        <element classe="RechercheLieu"/>
                        <element classe="RechercheGPS"/>
                        <element classe="RechercheBorne"/>
                    </element-accordeon>
                    <element-accordeon classe="Impression" ouvert="true"/>
                </panneau>

            </panneaux>
         <outils>
            <groupe-outils>
                <outil classe="OutilZoomEtendueMaximale"/>
                <outil classe="OutilZoomRectangle" type="avant"/>
                <outil classe="OutilZoomRectangle" type="arriere"/>
                <outil classe="OutilDeplacement"/>
            </groupe-outils>
            <groupe-outils>
                <outil classe="OutilHistoriqueNavigation" type="precedent"/>
                <outil classe="OutilHistoriqueNavigation" type="suivant"/>
            </groupe-outils>
             <groupe-outils>
                <menu titre="Zoom sur une région">
                    <outil classe="OutilZoomPreselection" type="region-adm" titre="Par région administrative"/>
                    <outil classe="OutilZoomPreselection" type="mrc" titre="Par MRC"/>
                    <outil classe="OutilZoomPreselection" type="mun" titre="Par municipalité"/>
                </menu>
            </groupe-outils>
            <groupe-outils>
                <outil classe="OutilMesure" type="lineaire"/>
                <outil classe="OutilMesure" type="surface"/>
            </groupe-outils>
            <groupe-outils>
                <outil classe="OutilInfo" />
            </groupe-outils>
	    <groupe-outils>
                <outil classe="OutilAide"/>
                <outil classe="OutilDeplacerCentre" />
            </groupe-outils>
            <groupe-outils position="droite" division="false">
                <outil classe="OutilAjoutWMS"/>
            </groupe-outils>
            <groupe-outils position="droite">
                <outil classe="OutilPartagerCarte"/>
            </groupe-outils>
        </outils>
    </presentation>
    <contexte code="gouvouvert" centre="-7994004,6034079" zoom="7"></contexte>
    <couches>
        <groupe-couches groupe="Fond de carte">
            <couche  
                    titre="Gouvernement du Québec" 
                    url="/cgi-wms/mapcache.fcgi/tms/" 
                    nom="carte_gouv_qc_ro@EPSG_3857" 
                    fond="true" protocole="TMS" 
                    active="vrai"
                    zoomMax="17"
                    impressionUrl="/cgi-wms/carte_gouv_qc.fcgi?" 
                    impressionNom="CARTE_GOUV_QC" 
                    droit= "&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&lt;td&gt;&lt;a target=&quot;_blank&quot; href=&quot;http://www.droitauteur.gouv.qc.ca/copyright.php&quot;&gt;&lt;img width=&quot;70/&quot; height=&quot;21&quot; src=&quot;/gouvouvert/public/images/quebec/gouv_qc_logo.gif&quot;&gt;&lt;/a&gt;&lt;/td&gt;&lt;td&gt;&lt;a target=&quot;_blank&quot; href=&quot;http://www.droitauteur.gouv.qc.ca/copyright.php&quot; class=&quot;styleAttributionTable&quot;&gt;&amp;copy; Gouvernement du Qu&#233;bec&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;"
            /> 
            <couche titre="OpenStreetMap" protocole="OSM"/>
            <couche titre="OpenStreetMap-Humanitaire" protocole="OSM" nom="humanitaire"/> 
            <couche titre="Fond blanc" protocole="Blanc"/>  
        </groupe-couches>
        <groupe-couches>
            <couche url="http://geoegl.msp.gouv.qc.ca/cgi-wms/igo_gouvouvertqc.fcgi?" protocole="WMS" mode="getCapabilities"/>
        </groupe-couches>
    </couches>

</navigateur>

 
