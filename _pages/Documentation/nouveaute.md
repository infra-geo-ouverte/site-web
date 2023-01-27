---
permalink: /nouveaute/
layout: general
iconenouveaute: ""
---

_Ce document présente les principales améliorations et correctifs des dernières version d'IGO. Tous les changements sont détaillés dans le journal des modifications sur le dépôt GitHub du projet igo2-lib :_ [_https://github.com/infra-geo-ouverte/igo2-lib/blob/master/CHANGELOG.md_](https://github.com/infra-geo-ouverte/igo2-lib/blob/master/CHANGELOG.md)

_Démonstration de la dernière version disponible d&#39;IGO :_ [_https://infra-geo-ouverte.github.io/igo2/_](https://infra-geo-ouverte.github.io/igo2/)

<a id="version_1_14"></a>
## IGO Version 1.14 (2022-12-15) [<span class="octicon octicon-link"></span>](#version_1_14)

**Nouvelles fonctionnalités et améliorations**

- **Impression**
  - Permettre l'impression de PDF géoréférencés ([#1149](https://github.com/infra-geo-ouverte/igo2-lib/pull/1149))

- **Outil de dessin**
  - Création d'un cercle avec un rayon prédéfinie ([#1090](https://github.com/infra-geo-ouverte/igo2-lib/pull/1090))
  - Étiquette prédéfinie selon la géométrie ([#1092](https://github.com/infra-geo-ouverte/igo2-lib/pull/1092))

- **PWA**
  - Module pwa (progressive web app) permettant l'installation d'une version applicative d'IGO2 ([#625](https://github.com/infra-geo-ouverte/igo2/pull/625))
  - *Une PWA est une application construit à partir d'un site web. De cette façon, IGO2 peut-être installé sur un ordinateur ou un téléphone de la même façon que les
    applications mobiles.

- **Paramètres d'URL**
  - Forcer le langage de l'application par paramètre d'URL ([#881](https://github.com/infra-geo-ouverte/igo2-lib/pull/881))

<a id="version_1_13"></a>
## IGO Version 1.13 (2022-10-14) [<span class="octicon octicon-link"></span>](#version_1_13)

**Nouvelles fonctionnalités et améliorations**

- **Synchronisation de couches**
  - Refactorisation de la fonction de synchronisation de couches ([#1107](https://github.com/infra-geo-ouverte/igo2-lib/pull/1107))

- **Outil de dessin**
  - Application du style par élément ([#1065](https://github.com/infra-geo-ouverte/igo2-lib/pull/1065))
  - Ajout d'un modal permettant la modification du style ([#1065](https://github.com/infra-geo-ouverte/igo2-lib/pull/1065))
  - Permettre la création de plusieurs couches de dessin ([#1081](https://github.com/infra-geo-ouverte/igo2-lib/pull/1081))

- **Mises à jour**
  - Mise à jour de l’ensemble des librairies (Angular 14, OpenLayers 6.15.1, rxjs 7...) ([#1094](https://github.com/infra-geo-ouverte/igo2-lib/pull/1094))

<a id="version_1_12"></a>
## IGO Version 1.12 (2022-06-23) [<span class="octicon octicon-link"></span>](#version_1_12)

**Nouvelles fonctionnalités et améliorations**

- **Filtre attributaire**
  - Il est maintenant possible de peupler une valeur de filtre attributaire par un domaine de valeurs ([#1044](https://github.com/infra-geo-ouverte/igo2-lib/pull/1044))
  - Il est maintenant possible de programmer un filtre attributaire par autocomplétions ([#1044](https://github.com/infra-geo-ouverte/igo2-lib/pull/1044))

- **Outil de dessin**
  - Possibilité d'éditer les étiquettes par la table d’entités, de permettre le changement de la police ainsi que sa taille ([#1059](https://github.com/infra-geo-ouverte/igo2-lib/pull/1059))

- **Édition**
  - Différentes configurations ont été ajoutées à l’outil d’édition de couches permettant notamment de désactiver l’ajout, la modification ou la suppression d’entités sur une couche ciblée ([#1048](https://github.com/infra-geo-ouverte/igo2-lib/pull/1048))

- **Vue tabulaire**
  - Un bouton permettant de zoomer ponctuellement sur les entités sélectionnées ([#796](https://github.com/infra-geo-ouverte/igo2/pull/796))

- **Catalogue**
  - Il est maintenant possible de forcer un lien vers les métadonnées ou encore de forcer un résumé sur une ou plusieurs couches lorsque celles-ci proviennent de services externes ([#1077](https://github.com/infra-geo-ouverte/igo2-lib/pull/1077))

- **Interrogation sur la carte**
  - Lorsque la limite du nombre d'entités interrogeables est atteinte, un message averti l’utilisateur comme de quoi il est possible qu’il y est plus d’entités dans sa sélection ([#1055](https://github.com/infra-geo-ouverte/igo2-lib/pull/1055))

- **Recherche**
  - Par configuration, on peut moduler l'affichage du détail du résultat ([#1054](https://github.com/infra-geo-ouverte/igo2-lib/pull/1054))

<a id="version_1_11"></a>
## IGO Version 1.11 (2022-03-30) [<span class="octicon octicon-link"></span>](#version_1_11)

**Nouvelles fonctionnalités et améliorations**

- **Filtre attributaire**
  - Il est maintenant possible de personnaliser le titre des sections attributaires-temporels ([#981](https://github.com/infra-geo-ouverte/igo2-lib/pull/981))
  - Des options pour réinitialiser et désactiver le filtre attributaire-temporel sont maintenant disponibles ([#982](https://github.com/infra-geo-ouverte/igo2-lib/pull/982))

- **Carte**
  - Possibilité d'afficher un info-bulle sur la carte ([#979](https://github.com/infra-geo-ouverte/igo2-lib/pull/979))
  - Bouton permettant de revenir à un "extent" prédéfini (carte et contexte) ([#957](https://github.com/infra-geo-ouverte/igo2-lib/pull/957))

- **Édition**
  - Possibilité d'éditer des couches par l'intermédiaire de la vue tabulaire ([#996](https://github.com/infra-geo-ouverte/igo2-lib/pull/996))

- **Vue tabulaire**
  - Il est maintenant possible d'associer le comportement du query aux couches liées wms-wfs ([#995](https://github.com/infra-geo-ouverte/igo2-lib/pull/995))

- **Catalogue**
  - Correction de problèmes liés à l'affichage des légendes et données de catalogue provenant de services arcgirest ([#966](https://github.com/infra-geo-ouverte/igo2-lib/pull/966))

- **Itinéraire**
  - Le contexte actif est ajouté à l'url de partage (si non-authentifié) ([#998](https://github.com/infra-geo-ouverte/igo2-lib/pull/998))

- **Recherche**
  - La fenêtre d’information ne s’ajoute plus à l’ajout de la couche (seulement à la sélection). ([#1020](https://github.com/infra-geo-ouverte/igo2-lib/pull/1020))

<a id="version_1_10"></a>
## IGO Version 1.10 (2021-10-13) [<span class="octicon octicon-link"></span>](#version_1_10)

**Nouvelles fonctionnalités et améliorations**

- **Recherche**
  - La position du curseur permet maintenant d’afficher la municipalité, la MRC et la région administrative du point ([#941](https://github.com/infra-geo-ouverte/igo2-lib/pull/941))

- **Outil d’importation/exportation**
  - L’exportation multiple en format CSV (compatible Excel) permet maintenant l’exportation d’un seul fichier regroupant toutes les entités ainsi que la séparation de ce même fichier par couches ([#949](https://github.com/infra-geo-ouverte/igo2-lib/issues/949))

- **Filtre spatial**
  - Une liste comprenant l’ensemble des résultats est maintenant affichée à la recherche ([#954](https://github.com/infra-geo-ouverte/igo2-lib/pull/954))

- **Mises à jour**
  - Mise à jour de la librairie des messages (angular2-notifications -> ngx-toastr) ([#928](https://github.com/infra-geo-ouverte/igo2-lib/pull/928))

<a id="version_1_9"></a>
## IGO Version 1.9 (2021-09-20) [<span class="octicon octicon-link"></span>](#version_1_9)

**Nouvelles fonctionnalités et améliorations**

- **Itinéraire**
  - Les couches de données résultantes (arrêts et tracé) sont maintenant liées avec l’outil de carte ([#896](https://github.com/infra-geo-ouverte/igo2/pull/896))

- **Dessin**
  - Améliorations mineures à l’interface de l’outil ([#649](https://github.com/infra-geo-ouverte/igo2/issues/649))
  - Les dessins et les étiquettes peuvent maintenant être modifiés ([#897](https://github.com/infra-geo-ouverte/igo2-lib/pull/897))
  - Les couches de données résultantes (dessins) sont maintenant liées avec l’outil de carte ([#896](https://github.com/infra-geo-ouverte/igo2-lib/pull/896))

- **Mesure**
  - Les couches de données résultantes (mesure à la carte) sont maintenant liées avec l’outil de carte ([#896](https://github.com/infra-geo-ouverte/igo2/pull/896))

- **Filtre attributaire**
  - Possibilité d'ajouter un filtre temporel par année ([#907](https://github.com/infra-geo-ouverte/igo2-lib/pull/907))

- **Outils avancés**
  - Permet de comparer spatialement plusieurs couches à l'aide d'un « swipe » horizontal([#900](https://github.com/infra-geo-ouverte/igo2-lib/pull/900))
  - Permet d'obtenir et de copier les coordonnées du centre de la carte selon différentes projections ([#900](https://github.com/infra-geo-ouverte/igo2-lib/pull/900))

- **Mises à jour**
  - Mise à jour de l’ensemble des librairies (Angular 12, OpenLayers 6.7...)

<a id="version_1_8"></a>
## IGO Version 1.8 (2021-07-07) [<span class="octicon octicon-link"></span>](#version_1_8)

**Nouvelles fonctionnalités et améliorations**

- **Gestion des couches de la carte**
  - Ajout d’un bouton pour zoomer sur l’étendue de la carte ([#518](https://github.com/infra-geo-ouverte/igo2/issues/518))
  - Fixer la barre d’outils en haut de la liste des couches ([#509](https://github.com/infra-geo-ouverte/igo2/issues/509))
  -	Bouton pour sélectionner/désélectionner toutes les couches visibles directement en haut de la liste des couches ([#887](https://github.com/infra-geo-ouverte/igo2-lib/pull/887))

- **Filtre attributaire**
  - Configurer des filtres attributaires avec une liste déroulante ([#876](https://github.com/infra-geo-ouverte/igo2-lib/pull/876))

- **Impression**
  - Afficher la légende sur la même page que la carte ([#547](https://github.com/infra-geo-ouverte/igo2/issues/547)) 

- **Outil de mesure**
  - Afficher les mesures de distance des segments de polygone ([#455](https://github.com/infra-geo-ouverte/igo2/issues/455)) 

- **Aide et documentation**
  - Quand on ouvre un contexte avec un message associé, les messages d’information déjà présents sont remplacés ([#507](https://github.com/infra-geo-ouverte/igo2/issues/507)) 
  - Afficher plusieurs messages à l’ouverture d’un contexte ou d’une couche ([#865](https://github.com/infra-geo-ouverte/igo2-lib/pull/865))

- **Recherche**
  - Configurer la symbologie des résultats de recherche ([#870](https://github.com/infra-geo-ouverte/igo2-lib/pull/870))

- **Carte**
  -	Configurer le style de la barre d’échelle ([#859](https://github.com/infra-geo-ouverte/igo2-lib/pull/859))

- **Authentification**
  - Support de Azure Active Directory B2C ([#872](https://github.com/infra-geo-ouverte/igo2-lib/pull/872))

<a id="version_1_7"></a>
## IGO Version 1.7 (2021-04-28) [<span class="octicon octicon-link"></span>](#version_1_7)

**Nouvelles fonctionnalités et améliorations**

- **Filtre attributaire**
  -	Possibilité d’ajouter des filtres sous forme de case à cocher ou de boutons radio et de les combiner ([#831](https://github.com/infra-geo-ouverte/igo2-lib/pull/831))
  - Possibilité de combiner avec le filtre temporel pour filtrer les entités par date ([#831](https://github.com/infra-geo-ouverte/igo2-lib/pull/831))
  - Ajout d’un attribut permettant la gestion de l’ordre d’apparence ([#831](https://github.com/infra-geo-ouverte/igo2-lib/pull/831))
  - Ajout d’un attribut permettant d’identifier les groupes à l’aide de sous-titre  ([#831](https://github.com/infra-geo-ouverte/igo2-lib/pull/831))

- **Interrogation sur la carte**
  - Bouton pour agrandir et diminuer directement disponible de l’entête ([#600](https://github.com/infra-geo-ouverte/igo2/pull/600))
  - Amélioration du rendu pour les tableaux html et lorsque la table de résultats est présente ([#600](https://github.com/infra-geo-ouverte/igo2/pull/600))
  - Couleur de sélection, de survol et de base maintenant pilotable pour le getInfo

- **Impression**
  - Ajout des attributions gouvernementales ([#832](https://github.com/infra-geo-ouverte/igo2-lib/pull/832))
  - Ajout de la barre d’échelle ([#832](https://github.com/infra-geo-ouverte/igo2-lib/pull/832))

- **Aide et documentation**
  - Guide disponible selon le profil d’authentification ([#833](https://github.com/infra-geo-ouverte/igo2-lib/pull/833))

- **Recherche**
  - Afficher l’UNC (intervalle de confiance) pour les coordonnées BELL
  - Détection du « + » pour la recherche d’intersection
  - Recherche multiple avec le caractère "\|" ([#594](https://github.com/infra-geo-ouverte/igo2/pull/594))
  - Possibilité d’afficher tous les résultats de recherche sur la carte dans les paramètres de recherche ([#825](https://github.com/infra-geo-ouverte/igo2-lib/pull/825))
  - Couleur de sélection, de survol et de base maintenant pilotable pour la recherche
  - Zoom sur l’étendue des résultats lors d'une recherche par url (avec paramètre search=...)

- **Catalogue**
  - Plus de limitation aux niveaux des couches provenant de services externes avec plus de deux sous-groupes ([#835](https://github.com/infra-geo-ouverte/igo2-lib/pull/835))
  - Formulaire d’ajout de services web (wms, wmts et arcgis) ([#835](https://github.com/infra-geo-ouverte/igo2-lib/pull/835))
  - Indicateurs pour les catalogues externes([#835](https://github.com/infra-geo-ouverte/igo2-lib/pull/835))

- **Message informatif**
  - Ajout d’une date de début et de fin de message ([#839](https://github.com/infra-geo-ouverte/igo2-lib/pull/839))

<a id="version_1_6"></a>
## IGO Version 1.6 (2021-02-01) [<span class="octicon octicon-link"></span>](#version_1_6)

**Nouvelles fonctionnalités et améliorations**

- **Aide et documentation**
  -	Possibilité d'ajouter un lien vers un guide d’utilisation dans l’outil « À propos » ([#790](https://github.com/infra-geo-ouverte/igo2-lib/pull/790))
  - Ajout d’un tour interactif pour l’outil « Carte »
  - Ajout d’un tour interactif pour l’outil « Contextes »
  - Aide à l’outil de recherche (indiquer des exemples) ([#306](https://github.com/infra-geo-ouverte/igo2/issues/306))

- **Outil de dessin**
  - Ajout d’un outil de dessin ([#391](https://github.com/infra-geo-ouverte/igo2/issues/391))

- **Impression**
  - Corriger l’affichage des titres trop longs ([#724](https://github.com/infra-geo-ouverte/igo2-lib/issues/724))
  - Ajout d'un sous-titre ([#805](https://github.com/infra-geo-ouverte/igo2-lib/pull/805))

- **Filtre spatial**
  - Pouvoir ajouter un buffer autour d’une zone prédéfinie ou dessinée
  - Ajouter les coordonnées (latitude et longitude) des points extraits

- **Catalogue**
  - Possibilité de définir un alias pour renommer une couche d'un catalogue composite ([#787](https://github.com/infra-geo-ouverte/igo2-lib/pull/787))
  - Afficher le contenu de la balise « abstract » si aucun hyperlien de métadonnées n’est défini ([#514](https://github.com/infra-geo-ouverte/igo2/issues/514))

<a id="version_1_5"></a>
## IGO Version 1.5 (2020-10-09) [<span class="octicon octicon-link"></span>](#version_1_5)

**Nouvelles fonctionnalités et améliorations**

- **Global**
  -	Quand l’enregistrement sélectionné est trop petit pour être visible à l’échelle actuelle de la carte, afficher un marqueur pour indiquer l’emplacement

- **Aide et documentation**
  - Possibilité d'afficher une page d’accueil au contenu configurable ([#689](https://github.com/infra-geo-ouverte/igo2-lib/pull/689))
  - Ajout d’un tour guidé configurable ([#382](https://github.com/infra-geo-ouverte/igo2/issues/382))

- **Table des enregistrements**
  - Montrer les enregistrements des couches vectorielles contenues dans la carte ([#390](https://github.com/infra-geo-ouverte/igo2/issues/390))
  - Afficher le résultat de la sélection d’une couche dans la table ([#445](https://github.com/infra-geo-ouverte/igo2/issues/445))

- **Interrogation sur la carte**
  - Afficher les images directement dans la fenêtre d’information

- **Gestion des couches de la carte**
  - Afficher ou masquer plusieurs couches à la fois dans la sélection multiple ([#453](https://github.com/infra-geo-ouverte/igo2/issues/453))
  - Pouvoir définir des filtres temporel dans les filtres attributaires avancés ([#705](https://github.com/infra-geo-ouverte/igo2-lib/pull/705))

- **Itinéraire**
  - Lien pour afficher l’outil d’itinéraire vers un résultat de recherche ([#711](https://github.com/infra-geo-ouverte/igo2-lib/pull/711))

- **Catalogue**
  - Pouvoir ajouter des services ArcGIS REST dans les catalogues composites ([#709](https://github.com/infra-geo-ouverte/igo2-lib/pull/709))

- **Authentification**
  - Ajout de l'authentification Microsoft Azure

- **Mises à jour**
  - Mise à jour de l’ensemble des librairies ([#696](https://github.com/infra-geo-ouverte/igo2-lib/issues/696))

<a id="version_1_4"></a>
## IGO Version 1.4 (2020-08-03) [<span class="octicon octicon-link"></span>](#version_1_4)

**Nouvelles fonctionnalités et améliorations**

- **Global**
  -	Détection des fureteurs dont la version n’est pas supportée ([#399](https://github.com/infra-geo-ouverte/igo2/issues/399))
  -	Stockage des préférences de l’utilisateur ([#443](https://github.com/infra-geo-ouverte/igo2/issues/443))

- **Carte**
  -	Ajout d’un mode de localisation permettant le suivi de la position en temps réel ([#648](https://github.com/infra-geo-ouverte/igo2-lib/pull/648))

- **Contextes**
  -	Pouvoir exporter et importer un contexte dans une instance IGO qui n'utilise pas l'api de contexte ([#388](https://github.com/infra-geo-ouverte/igo2/issues/388))
  -	À l’ouverture d’un contexte, retirer les couches dont l'accès est interdit et avertir l'utilisateur ([#321](https://github.com/infra-geo-ouverte/igo2/issues/321))
  -	Pouvoir filtrer la liste des contextes par profil d’utilisateur et niveau de partage (instances utilisant l’api de contexte seulement) ([#447](https://github.com/infra-geo-ouverte/igo2/issues/447))
  -	Pouvoir masquer un contexte (instances utilisant l’api de contexte seulement) ([#680](https://github.com/infra-geo-ouverte/igo2-lib/pull/680))
  -	L’utilisateur peut retirer un contexte qui lui a été partagé de façon permanente
  -	Possibilité de traduire en anglais le message (toast) qui s’affiche à l’ouverture d’un contexte ([#433](https://github.com/infra-geo-ouverte/igo2/issues/433))

- **Interrogation sur la carte**
  -	Pouvoir agrandir/réduire la taille de la fenêtre des résultats d’interrogation sur la carte ([#442](https://github.com/infra-geo-ouverte/igo2/issues/442))

- **Paramètres URL**
  -	Ajout d'un fichier de données géolocalisées à la volée par paramètre d'URL ([#415](https://github.com/infra-geo-ouverte/igo2/issues/415))

- **Outil d’importation/exportation**
  -	Exportation en fichier CSV compatible avec Excel (fichier CSV avec séparateur point-virgule) ([#452](https://github.com/infra-geo-ouverte/igo2/issues/452))
  -	Exporter plusieurs couches à la fois ([#692](https://github.com/infra-geo-ouverte/igo2-lib/pull/692))
  -	Exporter les couches dans l’étendue de la carte (WFS et vecteurs) ([#657](https://github.com/infra-geo-ouverte/igo2-lib/pull/657))
  -	Conserver les dernières options choisies ([#657](https://github.com/infra-geo-ouverte/igo2-lib/pull/657))
  -	Afficher un hyperlien pour les couches téléchargeables avec un lien externe ([#661](https://github.com/infra-geo-ouverte/igo2-lib/pull/661))

- **Impression**
  -	Impression de carte sur appareil mobile ([#685](https://github.com/infra-geo-ouverte/igo2-lib/pull/685))

- **Filtre spatial**
  -	Lier l’exportation des résultats du filtre spatial à l’outil d’exportation ([#439](https://github.com/infra-geo-ouverte/igo2/issues/439))

**Correctifs**

- **Recherche**
  -	Supprimer le résultat précédent de la carte lors d'une nouvelle recherche ([#473](https://github.com/infra-geo-ouverte/igo2/issues/473)) ([#475](https://github.com/infra-geo-ouverte/igo2/issues/475))
  -	Pouvoir ouvrir le lien Google Maps quand le résultat est une municipalité ([#409](https://github.com/infra-geo-ouverte/igo2/issues/409))

- **Contextes**
  -	Si un contexte est invalide, avertir l’utilisateur et afficher le contexte par défaut

- **Outil d’importation/exportation**
  -	L’exportation en format GOX supporte les géométries de type MultiLineString ([#660](https://github.com/infra-geo-ouverte/igo2-lib/pull/660))
  -	Pouvoir exporter les enregistrements même si le service WFS n’est pas visible sur la carte ([#661](https://github.com/infra-geo-ouverte/igo2-lib/pull/661))

<a id="version_1_3"></a>
## IGO Version 1.3 (2020-05-11) [<span class="octicon octicon-link"></span>](#version_1_3)

**Nouvelles fonctionnalités et améliorations**

- **Catalogue**
  - Le titre du catalogue est conservé dans le titre lorsqu&#39;on bascule à l&#39;intérieur du catalogue
  - Possibilité de créer des catalogues en combinant plusieurs sources différentes ([#559](https://github.com/infra-geo-ouverte/igo2-lib/pull/559)) :
    - Regrouper différentes sources dans un même catalogue
    - Créer un groupe à l&#39;intérieur du catalogue en regroupant différentes couches
    - Filtrer les couches de la source en listant le nom des couches ou en utilisant une expression

- **Contextes**
  - Pouvoir filtrer la liste des contextes ([#432](https://github.com/infra-geo-ouverte/igo2/issues/432))
  - Pouvoir trier les contextes en ordre alphabétique ([#624](https://github.com/infra-geo-ouverte/igo2-lib/pull/624))
  - Créer un contexte directement dans l&#39;onglet des contextes (bouton de la barre de profil déplacé - version authentifiée seulement) ([#624](https://github.com/infra-geo-ouverte/igo2-lib/pull/624))

- **Filtres sur les couches**
  - Possibilité de spécifier les opérateurs permis pour chaque champ d&#39;une couche et nouveaux opérateurs disponibles ([#608](https://github.com/infra-geo-ouverte/igo2-lib/pull/608))

- **Interrogation sur la carte**
  - Lorsque le service interrogé ne retourne pas de géométrie, ajouter un marqueur sur la carte pour indiquer l&#39;emplacement du clic ([#617](https://github.com/infra-geo-ouverte/igo2-lib/issues/617))

- **Gestion des couches de la carte**
  - Amélioration à l&#39;ergonomie ([#397](https://github.com/infra-geo-ouverte/igo2/issues/397)) :
    - Les outils de gestion d&#39;une couche (opacité, ordre, suppression, filtres attributaires et temporels) s&#39;affichent dans une barre d&#39;outil en bas du panneau ([#357](https://github.com/infra-geo-ouverte/igo2-lib/issues/357))
    - Onglet « Légende » qui permet un affichage simplifié de la légende des couches visibles sur la carte (#507)
    - Un bouton « Opacité » permet de faire apparaître le slider pour gérer l&#39;opacité des couches ( [#451](https://github.com/infra-geo-ouverte/igo2-lib/issues/451))
    - Faire des actions su plusieurs couches en même temps (monter, descendre, supprimer) ([#307](https://github.com/infra-geo-ouverte/igo2/issues/307))
    - Affichage des filtres attributaires dans un panneau distinct
  - Ajuster le délai pour ne pas voir apparaître le message « Aucune couche n&#39;est présentement active sur la carte » au chargement des contextes ([#438](https://github.com/infra-geo-ouverte/igo2/issues/438))

- **Outil d&#39;importation/exportation**
  - Regroupement en grappes (_clusters_) de données importées à l&#39;aide d&#39;un fichier de style (nécessite une configuration préalable) ([#616](https://github.com/infra-geo-ouverte/igo2-lib/pull/616))
  - Exporter l&#39;information descriptive en format GPX ([#622](https://github.com/infra-geo-ouverte/igo2-lib/issues/622))

- **Sources de données**
  - Les couches ajoutées à la carte par le catalogue, la recherche ou les contextes ont les mêmes attributs, si un api est spécifié pour les obtenir (exemple : filtre temporel) ([#344](https://github.com/infra-geo-ouverte/igo2/issues/344))
  - Le format du GetInfo est obtenu selon les informations fournies par la source de données, pour s&#39;assurer que le format utilisé soit supporté ([#582](https://github.com/infra-geo-ouverte/igo2-lib/pull/582))

**Correctifs**

- **Contextes**
  - Le fait qu&#39;une couche soit interrogeable ou non est conservé dans le contexte

- **Filtre temporel**
  - Meilleure gestion des dates (correction du problème lors de la conversion en UTC, format d&#39;affichage en français, indicateur de la date sélectionnée dans le calendrier) (corrige en partie [#534](https://github.com/infra-geo-ouverte/igo2-lib/issues/534))
  - Les dates affiches ne se réinitialisent pas tant que le filtre est actif sur la couche (corrige [#359](https://github.com/infra-geo-ouverte/igo2/issues/359))

- **Sources de données**
  - Meilleure gestion quand une source de données est en erreur (les autres couches de la carte ne sont pas affectées)