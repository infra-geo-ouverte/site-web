#IGO – documentation
##Table des matières  
(mis à jour le 4/16/2015 2:18:35 PM)

**Éditer le contenu en markdown** (édition de base du texte de contenu seulement)


[<span>Accéder au fichier</span>](#acceder)

[<span>Structure du Markdown</span>](#structure)

[<span>Modifier du texte existant</span>](#modifier)

[<span>Ajouter un fichier</span>](#ajouter)

[<span>Enlever un fichier</span>](#enlever)

[<span>Inclure le fichier de la branche temporaire au gh-pages</span>](#inclure)

**Éditer le site web** (programmeur web)

[<span>Structure des dossiers</span>](#structure)

[<span>Technologie utilisée</span>](#techno)

[<span>Github</span>](#github)

[<span>Jekyll</span>](#jekyll)

[<span>Markdown</span>](#markdown)


##Éditer le contenu en markdown 
(édition de base du texte de contenu seulement, directement dans Github)

<a id="acceder"></a>
###Accéder au fichier

Pour accéder aux fichiers vous devez avoir accès au compte Github IGO: [https://github.com/infra-geo-ouverte/site-web](https://github.com/infra-geo-ouverte/site-web "Github IGO")

Le site web live est dans la branche gh-pages.  
Les fichiers markdown sont dans le dossier gh_pages

<a id="structure"></a>
###Structure du Markdown

**Ne pas changer le texte entre les lignes --- en haut de la page**.  Le contenu de cette partie sert à placer le texte dans le code du site web.  Si vous devez le modifier, référez-vous à la section du programmeur web.

Pour la mise en page de fichiers Markdown voir [<span>l'annexe A</span>](#annexea) ou [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/ "reference markdown")

<a id="modifier"></a>
###Modifier du texte existant

Rappel : Ne pas changer le texte entre les lignes --- en haut de la page.  
Vous devez choisir un fichier à modifier et cliquer sur l’icône d’édition (crayon) 

Le texte est prêt à être modifié.
Ne pas changer le texte entre les lignes --- en haut de la page, le contenu de cette partie sert à placer le texte dans le code du site web.  Si vous devez le modifier référez-vous à la section du programmeur web.

Vous éditez le texte à la suite de la section ---
Une fois terminé voici comment le sauvegarder :
Dans le bas de la page il y a une section Commit changes, veuillez entrer un titre pour la correction (vos initiales, nom significatif) ex : kb – changer le titre
Vous pouvez mettre plus de commentaires au besoin dans la section suivante.

Vous aurez alors 2 choix de boutons :
-	Commit directly to the gh-pages branch : cela implémentera directement la correction dans le site live
-	Create a new branch ... mettra vos corrections dans une nouvelle branche (un peu comme un nouveau dossier) en attendant d’être approuvé et ajouté au site.
Appuyez ensuite sur commit changes, cela sauvegardera vos changements.

<a id="ajouter"></a>
###Ajouter un fichier

Dans le breadcrumb de la page cliquez sur le +  
Nommez votre fichier dans la case prévue à cette fin.
 
Écrire votre fichier, vous référez à la documentation markdown si nécessaire.
Pour ajouter le fichier dans le site web une entête devra être ajouté entre --- variables ---
Vous référez à la documentation développeur si nécessaire.
Ajouter un titre comme pour l’édition et faire commit new file comme pour l’édition.

<a id="enlever"></a>
###Enlever un fichier

Sélectionner le fichier à enlever.
Cliquer sur la poubelle et ajouter l’information/raison puis faire un commit. 

<a id="inclure"></a>
###Inclure le fichier de la branche temporaire au gh-pages
Cliquez sur pull request  
Sélectionner base : gh-pages, si able to merge faire le create pull request en bas de page.  Sinon vérifier les erreurs.
Ensuite faire un merge pour envoyer le fichier dans la branche gh-pages
Deleter la branche

NOTE : Pour le développeur : si vous travaillez sur les fichiers localement avec un clone du site, vous devrez faire un pull pour avoir les modification dans vos fichiers.
Vérifier dans setting si github page a été publié correctement ou s’il y a des erreurs.

##Éditer le site web (programmeur web)

<a id="structure"></a>
###Structure des dossiers [<span>Voir l'annexe B</span>](#annexeb)
Si l'intention est de faire plusieurs changements ou des changements majeur il est recommandé de garder le dépot local dans le geodev5 .. \apps\igo_siteweb  à jour en "pullant"/ récupérent les mises à jour de Github.

<a id="techno"></a>
###Technologie utilisée

- **Github:** 
Github est utilisé pour héberger le site web, l’application et tous leurs dossiers.  Il y a un dépot pour le site web (site-web) et un pour l'application IGO (igo).

- **Jekyll:** 
Jekyll est utilisé pour la gestion du contenu du site web.  Il s’agit d’un cms pour un site static qui permet d'utiliser le markdown pour le contenu.  Voir le site web : [http://jekyllrb.com/](http://jekyllrb.com/ "Jekyll")

- **HTML** : Le site est en HTML5 et CSS3


- **Bootstrap:**
Bootstrap est utilisé pour certains modules du site.  Pour l’apparence avec du css et du js.  Le cdn du css est incorporé dans le fichier head.html tandis que le js est dans le footer.  JQuery est aussi inclu dans le footer.

	**Modules Bootstrap utilisés** : [http://getbootstrap.com/](http://getbootstrap.com/ "Bootstrap")

		•	Grille (pour tout le site pour le responsive (mobile) // section css du site Bootstrap)
	
		•	Navigation principale et autres (section component)
	
		•	Modal (page accueil pour les 4 boutons // section Javascript)
	
		•	Accordeon (page FAQ // section JavaScript - collapse)
	
		•	Boutons (tous le site //section css)
	
		•	Tooltip (icones réseaux sociaux footer // section JavaScript)


- **Scss et css:** 
Le scss et css servent à modifier l’apparence du site.
Voici l’architecture : 

- **Font :** 
Les fonts utilisées sont : **Muli** pour le site en général, **Ubuntu** pour la bannière.  Les 2 fonts se retrouvent dans Google fonts et sont inclues dans le fichier _variables.scss et importées dans le css/main.scss.  Elles sont incorporées en utilisant le @.

	Font Awsome et octicons ont aussi été utilisées pour les icônes.  Font Awsome est intégrée dans le fichier head.html avec le cdn, octicon est aussi incorporé dans le head mais le fichier font se retrouve dans le dossier font.

<a id="github"></a>
####Github

Adresse: [https://github.com/infra-geo-ouverte/site-web/tree/gh-pages](https://github.com/infra-geo-ouverte/site-web/tree/gh-pages "Github site igo")

Assurez-vous d'avoir la branche gh-page active, c'est là que se trouve tous les fichiers du site live.  Les changements mineurs peuvent être fait directement dans github.  Les changements majeurs ou à être approuvés devraient être fait dans une branche de développement ex: dev-initial-page.  Cependant les changements ne pourront être visualisé sans installer Jekyll localement avec un développement sur un localhost.  

Il est recommendé d'avoir une personne avec le site installé localement si des changements majeurs au site web sont nécessaire.  Sinon il est beaucoup plus facile et rapide de faire les changements directement sur le site live dans Github.

<a id="jekyll"></a>
###Jekyll

Installation
Voir le site web de Jekyll pour l'installation : [http://jekyllrb.com/docs/installation/](http://jekyllrb.com/docs/installation/ "Jekyll installation")

Jekyll n'est pas fait pour Windows àa la base.  La procédure pour installation sur un poste Windows se retrouve ici: [http://jekyll-windows.juthilo.com/](http://jekyll-windows.juthilo.com/ "Jekyll windows")

Une fois Jekyll installé, cloner le site dans un dossier local ou si le dossier de base est tenu à jour les fichiers se retrouvent ici: geodev5 ..\apps\igo_siteweb.  

Dans la boite de commande windows il faut faire des actions afin que le site soit construit correctement.  Lors d'un changement, avant de l'envoyer sur Github, faire un `jekyll build`.

<a id="markdown"></a>
###Markdown

Dans les fichiers .md il faut respecter la partie entête (front matter) afin que les fichiers soient lu par Jekyll et Github. Le permalink est le lien relatif à la page du fichier.  Le layout fait référence au layout utilisé dans le dossier _layout.  
Le titre et autres attributs sont utilisé pour les différents liens dans les layout et pages html. 

Le fichier le plus important est le fichier de configuration config.yml.  C'est dans ce fichier que se retrouve les liens vers le baseurl, titre, description, le type de markdown, et différentes autres configurations.  Pour plus d'informations vous référez aun notes dans le fichier.


**URL et configuration du domaine**

Ajouter un CNAME pour lier le site à un nom de domaine acheté:
Pour l'administrateur/responsable du nom de domaine:

1- Dans cpanel (panneau d'admin du domain name provider (dns) (si le dns host utilise cpanel) aller dans Domains puis dans Simple DNS Zone Editor, add a cname Record: 

name ex: igo (cela donnera igo.nom de domaine acheté), 

CNAME: infra-geo-ouverte.github.io  (pour faire le lien avec le site github)

Add a new file, named CNAME (with all caps!), to the root directory of the Pages branch (gh-pages).  In the new file, add a single line that specifies the bare subdomain for your custom domain. For example, use blog.example.com, not https://blog.example.com. Note that there can only be one domain in the CNAME file.

2- Dans github - ajouter un fichier CNAME a la racine du gh-page avec le lien igo.nomdedomaine (name du cname) comme seule ligne de code à l'intérieur (le fichier doit se nommer CNAME en majuscule. (je vais le faire)
voir dans setting, l'url du site est maintenant changé pour le CNAME
 
3- Changer le baseurl dans le fichier config 

local /gh-pages/  dans github "/site-web" c'est le nom du projet
baseurl pour site sur github: "/nomduprojet"  pour un site avec un cname mettre juste "/"
baseurl: "/site-web"

4- url pour développement en local : [http://localhost]
url: "[http://localhost]"



<a id="annexea"></a>
##Annexe A
##Mise en page de fichiers Markdown

Réf.: [https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markdown")

Ou utiliser un éditeur de Markdown.  Il y en a plusieurs de disponible en ligne gratuitement.  J'ai utilisé MarkdownPad : [http://markdownpad.com/](http://markdownpad.com/ "Markdown pad")

<a id="annexeb"></a>
##Annexe B
##Structure des dossiers

###Arborescence des dossiers
**Le _ qui précède le nom des dossiers ou fichiers est important, ne pas les enlever.**

_includes : fichier qui contient le code html des sections du site à l'exclusion du contenu principal qui lui se retrouve dans les layout.  Il est ajouté aux layout avec du code par exemple: {% include header.html %}

	header.html : entête du site incluant le menu de navigation, le bouton github et le logo.
	banniere.html : bannière de la page d'accueil.
	footer.html : pied de page du site incluant les liens js.
	head.html : contient les instruction de la section head avec les liens vers le css, les meta et og pour les réseaux sociaux.
	reseau_sociaux.html : code pour faire le lien vers le share des différents réseaux.

**_site : fichiers généré par Github/Jekyll, il s'agit des fichiers convertis du site web.  Ne pas modifier ces fichiers.**

_sass : fichiers scss pour l'apparence du site.  Ils sont par section.  Des fichiers ont été créés pour IE8, modifier les deux fichiers si nécessaire.  Jekyll possède un préprocesseur de sass donc pas besoin de le convertir dans un logiciel externe.

	_igo-content.scss : css du contenu en général
	_igo-content-ie8.scss
	_igo-footer.scss : css du pied de page
	_igo-accueil-ie8.scss
	_igo-general.scss : css des balises de base, structure de base du site
	_igo-header-ie8.scss
	_variables.scss : variables et mixins qui se retrouvent dans le site, utilisé par les autres fichiers scss
	_igo-general-ie8.scss
	_igo-header.scss : css de l'entête
	_igo-accueil.scss : css du contenu la page d'accueil incluant la banniere
	_layout.scss  pas certaine à enlever???
	_syntax-highlighting.scss : fichier à vérifier??? fait par jekyll/github au démarrage
	_base.scss : fichier à enlever??? fait par jekyll/github au démarrage
	_igo-footer-ie8.scss

_layouts : fichier html pour le contenu principal des pages

	default.html : pour la page d'accueil
	faq.html : pour la page faq
	general.html : pour les autres pages

_pages : fichiers markdown contenant le contenu du site

	Accueil : le fichier projet a été coupé pour mettre des sections dans les boutons.

		projet.md
		modele.md
		benefices.md
		partenaires.md
		realisation.md

	Demo
		demo.md

	English
		igo_english.md

	Contribuer
		contribuer.md
		licence.txt

	FAQ : un fichier par question
		faq2.md
		faq8.md
		faq6.md
		faq7.md
		faq5.md
		faq4.md
		faq3.md
		faq1.md
		faq9.md
		faq.md

	Documentation
		doc_service.md
		module
		techno.md
		architecture.md
		doc_module.md
			module_importer_fichier_geometrique.md
			module.md
			module_exporter_fichier_forme.md
			module_exporter_gpx.md
		doc_panorama.md
		documentation.md
		panorama

	Installation
		installation.md

	Communaute
		communaute.md

_config.yml : fichier de configuration de base de jekyll, ne pas effacer.  

assets : dossiers pour les fonts, le js et les images

	fonts
		octicons: fonts/ icones de Github

	script
		modernizr.custom.88836.js : pour IE8  enlever si j'ai mis le cdn??? 
		jquery-1.11.1.min.js enlever si j'ai mis le cdn???
		bootstrap.min.js enlever si j'ai mis le cdn???
		main.js : fichier principal pour le js propre au site IGO
		animation_banniere.js

	img  (ménage à faire)
		Capture.PNG
		carteflou.jpg
		logo-med.svg
		banniere_carte2.jpg
		banniere_carte.jpg
		GitHub-Mark-Light-32px.png
		social_home.PNG
		logo13.svg
		icons
		logo_igo.png
		dessin.svg
		logo13.png
		logo-med.png
		logo_igonoir.png

css

	main.scss : fichier resultant de la compilation des scss, il sera transformé en css dans le dossier _site, le laisser dans ce dossier css
	bootstrap.css enlever si j'ai mis le cdn???
	bootstrap.min.css enlever si j'ai mis le cdn???
	main_ie8.scss
	print.scss : css pour impression d'une page

IGO-gh-pages : gitignore

README.md : readme du Github

sitemap.xml : pour le sitemap, ne fonctionne pas???

feed.xml : fichier fait par jekyll lors du build

