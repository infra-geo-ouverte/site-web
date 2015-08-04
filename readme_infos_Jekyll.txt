Notes concernant l'installation de Jekyll:  
Vérifier que vous avez les bonnes versions pour l'installation des différents modules.  Pour les utilisateurs d'Ubuntu, le paquet qui vient avec par défaut n'est peut-être pas à jour.

1- Installation: Voir les instructions particulières pour Windows: http://jekyll-windows.juthilo.com/
S'il y a un problème d'encodage entrer chcp 65001 dans la ligne de commande
S'il y a un problème pour installer un gem: mettre la source http au lieu de https:
gem sources -r http://rubygems.org
gem sources -a https://rubygems.org
Il faut installer Redcarpet, c'est ce qui a été utilisé pour le format de markdown

pour ubuntu 14.04:
sudo apt-get install ruby ruby-dev make gcc nodejs
sudo gem install jekyll --no-rdoc --no-ri
sudo gem install github-pages --no-rdoc --no-ri 
apres le 'jekyll serve' répond de la bonne façon

2- Références générales:
http://jekyllrb.com/docs/installation/  - site officiel de jekyll
http://jekyll-windows.juthilo.com/1-ruby-and-devkit/  - Installation de jekyll sur Windows
https://www.andrewmunsell.com/tutorials/jekyll-by-example - Tutoriel

3- Pour faire fonctionner Jekyll localement  il faut l'installer comme dans le tutoriel ci-dessous.  
Sinon les liens ne fonctionnent pas.  
Ou ajuster url: "[http://localhost]" dans le _config.yml
http://christopheducamp.com/2013/12/21/demarrer-avec-pages-github/  - Tutoriel pour installer Jekyll avec localhost et utiliser le lien: http://localhost:4000/IGO-gh-pages//
Vous pourrez ensuite accéder au site local à l'adresse: localhost:4000  (on doit avoir mis Jekyll en mode serve pour visualiser le site sur le localhost, voir note 5)

4- Référence pour Github:
https://help.github.com/articles/user-organization-and-project-pages/ 

5- Démarrer un site déjà fait / mise à jour
Ouvrir la boite de commande
accéder au répertoire local (cd t:\lien du dossier)
Faire un build et un serve ou autres commande dépendant de ce qu'on veut faire

/********************************************************************/

FICHIERS:

_config.yml : fichier de configuration Jekyll, lire la documentation à l'intérieur du ficier avant de changer quoi que ce soit.
En principe, seulement le localhost devrait être ajouté ou enlevé dépendant de l'environnement de travail.

Dossiers:
-includes: templates partiels comme le header, footer...
_layouts: fichier html, différents layouts pour différents type de page, c'est là qu'on met les html autour du contenu des .md
_posts ou _pages: pour les markdown ou html/textile, (pages pour le site, post s'il y a un blogue)

Quand on change quelque chose dans le _config.yml il faut refaire un jekyll build dans la console.
Faire un jekyll serve dans la boite de commandes pour que la mise à jour du site se fasse au fur et à mesure (contenu)

jekyll serve --watch  : pour faire le build automatiquement à chaque fois,  ctrl-c pour arrêter/sortir


CRÉER UN THEME

Créer un nouveau fichier dans le dossier _layouts nommez le default.html. Ceci sera le layout par défaut utilisé par la majorité des pages. 

Jekyll a trois variable globales principales qui sont toujours disponible pour le "templating" avec Liquid  ---  site, page, and content ---.

---------------  _config.yml ----------------------------------

Référence pour les notes qui suivent: : https://github.com/ChristopheDucamp/christopheducamp.github.io/blob/master/_drafts/2014-08-07-creer-un-blog-avec-jekyll-et-pages-github.md

Ceci est votre fichier de configuration Jekyll, contenant tous les réglages pour votre site web Jekyll. Le truc génial concernant _config.yml est 
que vous pouvez aussi spécifier là toutes vos propres variables à extraire via les fichiers de gabarit sur l'ensemble du site web.

Par exemple,  dans le tutoriel ils utilisent les variables personnalisées dans le _config.yml de Jekyll Now pour permettre aux icônes SVG d'être facilement incluses dans le footer :

Voici _config.yml:

# Includes an icon in the footer for each user name you enter
footer-links:
  github: barryclark
  twitter: baznyc
Et voici /_layouts/default.html:

<footer class="footer">
  {% if site.footer-links.github %}<a href="http://github.com/{{ site.footer-links.github }}">{% include svg-icons/github.html %}</a>{% endif %}
  {% if site.footer-links.twitter %}<a href="http://twitter.com/{{ site.footer-links.twitter }}">{% include svg-icons/twitter.html %}</a>{% endif %}
</footer>
Exemple d’icônes de footer en SVGExemple d’icônes de footer en SVG

La variable est produite vers l’URL de twitter comme ceci http://twitter.com/{{ site.footer-links.twitter }}, de manière à ce que l’icône dans le footer fasse un lien vers votre profil Twitter. 
Une autre chose que j’aime vraiment à propos des variables est que vous pouvez les utiliser pour y ajouter facultativement des morceaux d’UI.
Ainsi, une icône de pied de page ne s’affichera pas si vous n’entrez rien dans la variable.


______________ SASS  _________________

Dans le dossier css mettre le main.scss qui traitera les scss, Jekyll compile le sass automatiquement, mettre la liste des fichiers partiels dans le @import

Ajouter dans le fichier config:
sass:
    sass_dir: _sass 

mettre les fichiers scss dans un dossier _sass et jekyll les traiteras lui-même	

#IMPORTANT  l'ordre dans lequel on import nos fichiers est important, il faut aller chercher les variables et mixins en premier pour pouvoir les utiliser dans les fichiers de code
# Exemple: @import "variables", "base", "layout", "syntax-highlighting", "igo" ;
# _base.scss utilise seulement les variables qui sont dans main.scss ???

Support Préprocesseur

Jekyll supporte désormais Sass et CoffeeScript sans quelque besoin de plug-ins ou de fichiers Grunt. 
Vous pouvez inclure vos fichiers .sass, .scss et .coffee n’importe où dans votre répertoire de site web, et Jekyll les traitera, en produisant un fichier .css dans ce même répertoire.

Pour vous assurer que vos fichiers .sass, .scss et .coffee soient traités, démarrez le fichier avec deux lignes de trois tirets, comme ceci :

---
---
$color-coffee: #644C37;
Si vous utilisez @imports pour diviser votre Sass en partiels, alors vous devrez faire savoir cela à Jekyll en ajoutant le marquage qui suit dans votre fichier _config.yml file.

sass:
  sass_dir: _scss
Vous pouvez aussi spécifier ici le style produit ici :

sass:
  sass_dir: _scss
  style: :compressed
  
---------------- Images --------------------------

Je stocke mes images dans un répertoire /images/ et n’ai pas encore connu quelque problème de performance. Si votre site web est hébergé sur GitHub Pages, alors les images seront servies par le réseau de contenu super rapide de GitHub. 
Je n’ai pas trouvé le besoin de les stocker ailleurs à cette heure, mais si je voulais migrer mes images vers un endroit comme CloudFront, alors le fait de pointer simplement tous mes liens images vers un répertoire sur ce serveur serait suffisamment aisé.

J’aime la simplicité de sauvegarder une image vers le dossier /images/ et puis de faire un lien vers elle dans le contenu. Le Markdown pour inclure une image dans le contenu est simple :

![Description Image](/images/my-image.jpg)

FICHIERS Markdown

Les fichiers .md doivent être placés dans le dossier _pages ou _posts (voir la nomenclature de post au besoin date - )
Avec le build Jekyll va transformer les fichiers pour faire des html du site, le tout sera créé dans le dossier _site.
*Ne pas modifier les fichiers du dossier _site, ce sont les fichiers créés par Jekyll qui seront utilisé pour publié le site.

La page d'accueil incluera le .md qui aura dans le front matter 
---
permalink: /
---

Le front matter est obligatoire, c'est avec ça que jekyll monte les pages.
On peut mettre différentes variables que nous pourrons aller récupérer ensuite.
Ne pas oublier les 3 var de base: site, page et content
ex:
{{ site.title }} 
{% for page in site.pages %}
