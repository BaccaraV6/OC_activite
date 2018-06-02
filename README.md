# Présentation du projet !

BOT Discord !

Bot avec une simple commande permettant d'afficher les règles d'un Discord.

# Info

J'ai volontairement enlevé mon " Token " pour des raisons de sécurité. Le token de votre bot est secret, si une personne vient à le récupérer, elle pourra se servir de votre bot à mauvaise escient.

# Comment l'utiliser ?
Vous devez avoir un minimum de connaissance en JS pour pouvoir utiliser le bot. Vous devez au préalable, avoir un dossier contenant les ressource necessaire à ce bot. 

Bibliothèque utilisé : 

Discord.js ( npm install discord.js ) 

behest ( facultatif : C'est pour la suite de mon propre bot ) ( npm i behest ) 

signale ( npm i signale ) 

n'hésitez pas à installer les bibliothèques avant de lire la suite

Afin de pouvoir utiliser le code pour votre bot, faite ce qui suis.

Dans un premier temps, il vous aurez besoins d'un compte Discord
https://discordapp.com/register : inscrivez vous.

https://discordapp.com/download : Télécharger l'application " Discord ".

Ensuite, rendez vous ici : https://discordapp.com/developers/applications/me

Nous allons commencer par créer votre bot, afin de lui donner un nom, une description et une image.
Cliquez sur " Nouvelle application "

Dans " Nom de l'application " choisissez le nom que vous voulez donner à votre BOT, ajoutez y une description, et une image. L'image et la description sont facultatifs.

Cliquez sur créer en bas à droite sur " Créer une app " et attendez un peu.

Cliquez sur " Créer un utilisateur Bot " et confirmer dans la fenêtre qui suit.

Ici vous verrez votre " Token " ( Jeton en Français ). Ce Token, est l'identifiant unique de votre bot, il est secret et doit le rester sous peine de voir votre bot utiliser par d'autre personne.

Cliquez sur " Révéler " et copier votre token est coller le à la place de "Le_token_de_votre_bot" dans " Index.js ".

Votre bot est prêt, mais vous ne l'avez toujours pas inviter sur votre discord.

Nous allons créer votre serveur. Allumer votre logiciel Discord sur votre bureau, connectez vous et cliquez sur le " + " tout à gauche et cliquez sur " Créer un serveur ".
Choisissez le nom de votre serveur, l'image de votre serveur et la région ou vous vivez. ( Normalement, c'est mis par défaut, vous n'avez pas besoins de toucher. Dans tout les cas c'est modifiable par la suite, ne vous en faite pas.)

Vous voilà sur votre discord. Vous allez avoir une pop up avec un lien de partage Discord, c'est un lien pour inviter vos ami.
Sur votre gauche, vous avez les salons. les vocaux et les textuels.
Pour permettre à votre bot d'envoyer les logs des commandes, nous aurons besoins d'un channel " textuel "

Cliquez sur le " + " à droite de " Salons textuels "
Donnez un nom à votre channel.

Dans mon cas, j'ai mis " log-bot " : Les tirets ( - ) dans les salons textuels sont obligatoire. Discord les obligent, je ne sais pas pourquoi :D.

Nous allons avoir besoins de l'identifiant du salon, faite un clique droit dessus et cliquez sur " Copier l'identifiant "

Collez l'identifiant dans " l'index.js " à la place de " id_channel " à la ligne 22.

Voilà ! Je vous laisse tester le bot en tapant " !cmd " sur un channel textuel de votre choix. ( Sachant que log-bot sert de vérification, je vous déconseille d'écrire sur ce channel).
