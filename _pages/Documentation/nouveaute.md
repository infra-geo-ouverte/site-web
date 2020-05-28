---
permalink: /nouveaute/
layout: general
iconenouveaute: ""
---

![](RackMultipart20200527-4-1ayu9sx_html_34f0b98b7ab7e074.png)**IGO Version 1.3 (2020-05-11)**

**Nouvelles fonctionnalités et améliorations**

_Ce document présente les principales améliorations et correctifs. Tous les changements sont détaillés au niveau technique dans le journal des modifications sur le dépôt GitHub du projet igo2-lib :_ [_https://github.com/infra-geo-ouverte/igo2-lib/blob/master/CHANGELOG.md_](https://github.com/infra-geo-ouverte/igo2-lib/blob/master/CHANGELOG.md)

_Démonstration de la dernière version disponible d&#39;IGO :_ [_https://infra-geo-ouverte.github.io/igo2/_](https://infra-geo-ouverte.github.io/igo2/)

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

- **Outil de gestion des couches de la carte**
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