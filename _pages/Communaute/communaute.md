---
permalink: /communaute/
layout: general
title-main: Communauté
iconecommunaute: ""
submenu:
  - { hook: "mission", title: "1. Mission de la communauté IGO" }
  - { hook: "structure", title: "2. Structure de la communauté IGO" }
  - { hook: "financement", title: "3. Sources de financement" }
  - { hook: "licence", title: "4. Licence" }
  - { hook: "droitauteur", title: "5. Droits d'auteur" }
  - { hook: "principes", title: "6. Principes et mécanismes de prise des décisions" }
  - { hook: "charte", title: "7. Charte du comité technique" }
  - { hook: "codage", title: "8. Convention et règles de codage" }
  - { hook: "depot", title: "9. Dépôt du code source et outils de communications" }
  - { hook: "amendement", title: "10. Amendement de ce présent acte constitutif" }
  - { hook: "annexe1", title: "Annexe 1: Charte du comité technique" }
  - { hook: "annexe2", title: "Annexe 2: Foire aux Questions" }
---

# Acte constitutif

<a id="mission"></a>
## 1. Mission [<span class="octicon octicon-link"></span>](#mission)

Supporter le développement d’IGO afin d’assurer le respect des hauts standards internationaux en matière de géomatique et de répondre aux besoins des utilisateurs, notamment en diffusant les données géographiques produites par le gouvernement du Québec.

<a id="structure"></a>
## 2. Structure[<span class="octicon octicon-link"></span>](#structure)

La communauté est composée de contributeurs, d’utilisateurs et d'un *comité technique* (CT). Le CT assure le leadership technique du projet dans son ensemble et s'assure de la bonne compréhension des besoins des utilisateurs et de leur satisfaction. Les développeurs, les utilisateurs et tout autre contributeur qui participent aux projets sont des acteurs aussi importants que les membres du comité. 

### 2.1. Comité technique (CT)

Le CT assure le leadership technique des activités de la communauté.

#### 2.1.1. Composition
Le CT est composé de développeurs experts, de super-utilisateurs, de gestionnaires et de spécialistes en infrastructure qui participent à la conception, à la validation et à la réalisation de la solution. Le CT doit compter parmi ses membres votants, au moins un validateur de code.

#### 2.1.2. Responsabilités du CT
- Rédiger, modifier et amender la charte du CT et s'assurer de son respect par les membres de ce comité.
- Tenir un calendrier d'évolution et le transmettre à la communauté pour information.
- Identifier, collecter et consolider les besoins des utilisateurs.
- Représenter la communauté auprès des organismes publics non membres et les partenaires extérieurs (incluant les fournisseurs de services, le cas échéant).
- Étudier les demandes de changement et coordonner leurs réalisations par les contributeurs.
- Gérer les droits d'accès au code.
- Désigner les validateurs de code et les moyens techniques requis pour les projets de développement.
- S'assurer d'une production adéquate de documentation et d'une architecture commune.
- Rédiger les conventions et règles de codage.
- Établir un mécanisme de gestion des versions en lien avec la communauté d'utilisateurs.
- Suivre les déploiements de la solution et recueillir le retour sur expérience des utilisateurs.
- Animer la communauté, la tenir informée et faire en sorte de la garder dynamique.
- Produire, au besoins, des rapports du projet.

#### 2.1.3. Coordonnateur du CT
Le coordonnateur du CT est nommé par les membres du CT sous une formule de présidence tournante. Ses responsabilités sont les suivantes :
- organiser les rencontres du CT;
- publier les comptes rendus des réunions du CT.

### 2.2. Contributeurs
Nous entendons ici par contributeur, toute personne du domaine métier ou technique qui participe aux activités de la communauté. Les contributeurs incluent les :
- développeurs : ce sont en  général des programmeurs qui participent à la programmation du code du logiciel. **Un validateur de code est un profil particulier de développeur**. Les développeurs sont tenus de respecter les conventions, l'architecture commune et règles de codage;
- super-utilisateurs et utilisateurs : ce sont les utilisateurs de la solution (simples utilisateurs, pilotes, testeurs, etc.);
- architectes et intégrateurs;
- tout autre type de contributeurs.

#### 2.2.1. Validateurs de code
Ce sont des programmeurs expérimentés et habilités à valider le travail des autres programmeurs. Ils approuvent et intègrent le code soumis au projet, puis s'assurent d'une documentation minimale au besoin. Les validateurs de code sont désignés par le CT. Un validateur de code doit être expert et s’engage à travailler pour garantir une meilleure stabilité du projet. Au moins un validateur de code doit faire partie du CT avec droit de vote. Pour plus d’information, voir [la section Principes et mécanisme de prise des décisions](#principes).

##### Exigences
- Être un programmeur expérimenté avec une excellente connaissance du logiciel.

##### Statut
- Le CT vote et approuve l'élection des validateurs de code.
- Le statut du validateur de code peut être révoqué à tout moment par le CT et, par conséquent, celui-ci peut perdre les privilèges qui lui sont conférés.

##### Privilèges
- Permission de contribuer au dépôt du code source directement dans le tronc commun du logiciel sans modération préalable.

##### Responsabilités
- S'assurer de l'intégrité des contributions (provenance, propriété intellectuelle, brevets, licence, etc.).
- Respecter les règles de codage.
- S'assure d'une documentation adéquate des changements effectués.

<a id="financement"></a>
##3. Sources de financement  [<span class="octicon octicon-link"></span>](#financement)
 
Les sources de la communauté se traduisent par une participation financière et/ou matérielle et/ou humaine.

<a id="licence"></a>
##4. Licence  [<span class="octicon octicon-link"></span>](#licence)

- Consulter la [LICENCE](https://github.com/infra-geo-ouverte/igo/blob/master/LICENCE.txt)

<a id="droitauteur"></a>
##5. Droits d'auteur   [<span class="octicon octicon-link"></span>](#droitauteur)

À la lumière des définitions données dans les termes de la licence :
« concédant » : le titulaire du droit d'auteur sur le logiciel, ou toute personne dûment autorisée par ce dernier à accorder la présente licence;
« contributeur » : le titulaire du droit d'auteur ou toute personne autorisée par ce dernier à soumettre au concédant une contribution. **Un contributeur dont sa contribution est incorporée au logiciel est considéré comme un concédant en regard de sa contribution**.

<a id="principes"></a>
##6. Principes et mécanismes de prise des décisions   [<span class="octicon octicon-link"></span>](#principes)

###6.1. Chercher le consensus
Il est préférable que les décisions soient prises à la suite d'un consensus entre les différents membres du CT. Le vote servira dans ce cas à officialiser ce consensus.

###6.2. Membre votant
Est considéré comme membre votant, un membre qui apporte une contribution substantielle (financière et/ou matérielle et\ou humaine) pour la communauté.

###6.3. Membre observateur
Un membre  « observateur » est un contributeur qui n'a pas le droit de vote.

###6.4. Poids du vote
Un membre = une voix ;

###6.5. Mécanisme de vote
- Les motions sont inscrites sur une  liste de discussion et les votes se font en public, sauf dans les cas exigeant la confidentialité.
- Le vote est habituellement ouvert pour une période relativement courte (ex. : trois jours ouvrables).
- La notation suivante pour le vote est adoptée : +1, 0, -1: 
	1. +: signifie « je suis d'accord et je m'engage à supporter cette décision et à collaborer à sa réalisation »;
	2. 0: signifie « je m'abstiens »;
	3. -1: signifie « j'ai une objection ». Ceci est considéré comme étant un veto. Dans ce cas, la personne votante est dans l'obligation de fournir une motion de rechange.
- Une proposition est acceptée si elle reçoit au moins +2 (incluant l'auteur) et aucun veto (-1).
- Si une proposition reçoit un veto (-1) et qu'il est impossible de satisfaire toutes les parties après révision et discussion, la proposition peut être soumise pour un second vote ultime et dans ce cas, un vote positif de la majorité absolue de tous les membres du comité est requis pour que la proposition soit acceptée. Dans ce cas, le veto ne s'applique plus.
- Le résultat du vote est compilé et publié.

###6.6. Gestion des demandes de changements (RFC) 
Le processus de demande de changement (RFC) doit suivre le processus suivant: 
- discussions préliminaires sur la liste de discussion; 
- production d'un document de demande de changement dans le dépôt du projet à partir des gabarits fournis (raison d'être, conditions, moyens, règle, composantes, etc.); 
- recherche de consensus;
- discussion du CT par rapport à de la demande de changement; 
- vote du CT au besoin;
- publication des documents de demande de changement sur le site GitHub d'IGO.

###6.7. Gestion des révisions 
- Dépôt d'un plan de livraison.
- Plan livraison -> gel de fonctionnalités -> version bêtas -> RC (candidate release) -> livraison. 
- Rôle de responsable de livraison (doit être un validateur de code). 

###6.8. Cycle de révisions : 
- Le cycle des révisions est basé sur la feuille de route (“roadmap”);

<a id="charte"></a>
##7. Charte du comité technique    [<span class="octicon octicon-link"></span>](#charte)

Se référer à [l'annexe 1](#annexe1)

<a id="codage"></a>
##8. Convention et règles de codage [<span class="octicon octicon-link"></span>](#codage)
La convention de codage est un document interne rédigé par le CT. On peut s’en servir ou se servir de tout autre document que le CT juge utile. Cette convention doit être respectée par les développeurs et vise à uniformiser le code et les méthodes de travail (ex. : règles d'écriture du code source, d'architecture, du modèle de données, etc.).

<a id="depot"></a>
##9. Dépôt du code source et outils de communications     [<span class="octicon octicon-link"></span>](#depot)
Dépôts du code source : [https://github.com/infra-geo-ouverte/igo](https://github.com/infra-geo-ouverte/igo)
 et [https://github.com/infra-geo-ouverte/puppet-igo](https://github.com/infra-geo-ouverte/puppet-igo)

Outils de communication : si vous avez d'autres questions, n'hésitez pas à communiquer avec nous à l'adresse suivante : info(a)igouverte.org ou à vous inscrire à la [liste courriel](http://listes.securitepublique.gouv.qc.ca/sympa/info/igo-publique).

<a id="amendement" ></a>
##10. Amendement de ce présent acte constitutif [<span class="octicon octicon-link"></span>](#amendement)

Toute personne qui souhaite participer à la communauté IGO est tenue de respecter cet acte constitutif. Le CT se réserve le droit d’amender cet acte à tout moment sauf dans la partie Licence du logiciel IGO où les termes de la  [licence](https://github.com/infra-geo-ouverte/igo/blob/master/LICENCE.txt) dominent.  


<a id="annexe1" ></a>
##Annexe 1: Charte du CT [<span class="octicon octicon-link"></span>](#annexe1)

###1. Mission 
Le comité technique («CT») est chargé d'assurer le leadership technique pour la gestion d’IGO et il prend les décisions concernant les questions liées aux aspects techniques. Il constitue le comité ultime d'appel des décisions techniques.

###2. Responsabilités du CT
- Rédiger, modifier et amender la charte du CT et s'assurer de son respect par les membres de ce comité.
- Tenir un calendrier d'évolution et le transmettre à la communauté pour information.
- Identifier, collecter et consolider les besoins des utilisateurs.
- Représenter la communauté auprès des organismes publics non membres et les partenaires extérieurs (incluant les fournisseurs de services, le cas échéant).
- Étudier les demandes de changement et coordonner leurs réalisations par les contributeurs.
- Gérer les droits d'accès au code.
- Désigner les validateurs de code et les moyens techniques requis pour les projets de développement.
- S'assurer d'une production adéquate de documentation et d'une architecture commune.
- Rédiger les conventions et règles de codage.
- Établir un mécanisme de gestion des versions en lien avec la communauté d'utilisateurs.
- Suivre les déploiements de la solution et recueillir le retour sur expérience des utilisateurs.
- Animer la communauté, la tenir informée et faire en sorte de la garder dynamique.
- Produire, au besoins, des rapports du projet.

###3. Comité initial    
Le CT actuel a pour mandat d'assurer le leadership technique de la communauté. Voici les membres actuels :
- Luc Lessard (MSP);
- Nicolas Gignac (MSP);
- François Gourdeau (MSP);
- Steve Toutant (INSPQ);
- Marie-Claude Couture (FADQ);
- Olivier Bégin (MTQ);
- Michel Champagne (MTQ);
- À déterminer (CELL);
- Anne Morel (MCC).

###4. Coordonnateur du CT
Après chaque élection, le CT propose un de ses membres pour agir à titre de coordonnateur du CT sous une présidence tournante. En cas de plusieurs candidats, le choix du candidat se fait selon le mécanisme de vote de la communauté IGO. Les responsabilités du  coordonnateur du CT sont :
- d'organiser les rencontres du CT;
- de publier les comptes rendu des réunions du CT.

###5. Réunions 
- Les réunions se déroulent au moins à tous les mois.
- Le CT maintient un ordre du jour ouvert sur la liste de diffusion.
- Une réunion spéciale du CT peut être convoquée si un de ses membres en fait la demande sur la liste de diffusion au moins 2 jour avant l'heure de réunion.
- La tenue d'une réunion est conditionnelle à la participation d'au moins 50% des membres du CT.

###6. Motions 
Avant d'être soumises à un vote, les motions doivent être présentées et discutées publiquement à la recherche d'un consensus sur la liste de diffusion des développeurs, pour un minimum de deux jours ouvrables.

###7. Délégation du droit du vote 
Un membre du CT qui se trouve dans l'impossibilité d'assister à une réunion peut mandater un représentant de son opinion qui votera en son nom.

###8. Candidatures aux CT 
Tout contributeur technique actif ou super-utilisateur peut soumettre sa candidature pour devenir membre du CT.

###9. Amendement
L'amendement de cette présente charte du CT est proposé dans une motion spéciale qui, pour être acceptée, doit être approuvée selon les principes et les mécanismes de prise de décisions de la communauté.

<a id="annexe2"></a>
##Annexe 2: Foire aux Questions [<span class="octicon octicon-link"></span>](#annexe2)          

###Comment un développeur peut-il devenir un validateur de code ?
Les validateurs de code sont des développeurs expérimentés. Il est possible de devenir validateur de code en réalisant les étapes suivantes :
- Contribuer régulièrement à la validation de code en envoyant des ajouts ou des modifications par l’intermédiaire du système de suivi de bogues.
- Faire réviser et endosser ces modifications par un ou des validateurs de code pour inclusion officielle dans le logiciel. Cela permet de gagner la confiance des autres validateurs de code.
- Confirmer le désir de devenir validateur de code et de respecter les règles d'engagement.
- Se faire attribuer le titre de validateur de code par un vote du CT.
- Être un validateur de code actif et respecter les règles d'engagement. Dans le cas contraire, la personne peut se faire révoquer sa qualité de validateur de code par le CT et, par conséquent, perdre les privilèges qui lui sont conférés.

###Comment gagner la confiance des autres validateurs de code ? 
- Avoir une bonne compréhension de l'architecture, des outils et des méthodes de fonctionnement du projet.
- Écrire du code de qualité.
- Avoir de bonnes aptitudes de communication.
- Avoir l'intention de rester actif à moyen et à long terme.
- Être disposé à suivre une formation ou à subir « un examen par les pairs » pour acquérir la qualité de validateur de code d'une façon accélérée.  

###Numérotage des révisions 

- Version = x.y.z (majeur.mineur.patch).
- Mineur pair = stable (ex: 5.4, 5.6).
- Mineur impair = développement (ex: 5.5). 
- Patch = résolutions bogues = 5.4.1, 5.4.2, etc.
