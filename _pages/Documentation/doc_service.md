## Pour chaque service développé, remplir brièvement ces informations :

|   Type d'information  |                                       Description                                |
|:-------------------------------------------------------------------------------------------------------:|:---------------:|
|1. Alias  |  Inscrire le nom physique du service.  Exemple : ObtenirDossierActif |
|2. Conditions d’utilisation    |  * Expliquer les conditions d’utilisation s’il y a lieu. * Exemples : Ce service est accessible aux utilisateurs xxxxx seulement. * Ce service est accessible au système xxxxxx seulement. Ce service est accessible par tous les systèmes, etc.  |
|3. Raison d'être  |  Raison d'être du service du noyau et brève description de son comportement du point de vue utilisateur. |
|4. Raison d'être  |  Information servant de paramètres pour l'obtention du service du noyau, règles de validation de ces paramètres et autres conditions relatives aux composantes du noyau utilisateur participant au service du noyau. |
|5. Postconditions |  Information produite par le service du noyau, modifications des composantes du noyau utilisateur participant au service du noyau, conditions d'erreurs possibles et façon dont elles sont indiquées, disponibilité des résultats : asynchrones ou synchrones. |
|6. Règles d’intégrité |  Règles d'intégrité qui s'appliquent au service du noyau, particulièrement lorsque le service dépend d'autres services, ou si la contrainte d'intégrité dépend des comportements réunis de plusieurs services. S’applique habituellement aux mises à jour de données. |
|7. Dynamique du service |  Description utilisateur du processus produisant le service. Indiquer, lorsque pertinent les algorithmes et les règles de calcul ainsi que les validations. Exemple : Le numéro de client est obligatoire (12S). |
|8. Perspective locale | Présentation de la façon dont d’autres composantes collaborent (par l’intermédiaire de leurs services) à l’exécution de ce service du noyau sous forme de liste. |
|9. Liste des services et composantes | Liste des services d’autres composantes du noyau ou de composantes d’interface utilisateur déclenchés par ce service. |