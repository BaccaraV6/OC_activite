exports.getEmbed = client => {
  return {
    embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Règlement du DISCORD",
      url: "",
      description: "Voici les règles du Discord ",
      fields: [
        {
          name: "Règle 1",
          value: "Publier votre propre Discord. :satellite:"
        },
        {
          name: "Règle 2",
          value:
            "Afficher du contenu pornographique ou des propos grossiers. :underage:"
        },
        {
          name: "Règle 3",
          value:
            "Faire de la vente ou de la publicité (ex : serveur Discord, chaine YouTube, page Facebook...) :tv:"
        },
        {
          name: "Règle 4",
          value:
            "Exprimer des propos racistes ou commentaires discriminants, religieux, politiques etc... :scales: "
        },
        {
          name: "Règle 5",
          value:
            "Partager des photos, vidéos, articles ou rumeurs de nature à choquer un groupe de personne (Sujets d'attentats, fausses rumeurs...) :hand_splayed:"
        },
        {
          name: "Règle 6",
          value:
            "Faire de la vente ou de la publicité (ex : serveur Discord, chaine YouTube, page Facebook...) :tv:"
        },
        {
          name: "Règle 7",
          value:
            "Abuser du système de réponse des bots sur tous les channels :robot: "
        },
        {
          name: "Règle 8",
          value:
            "Mentionner une personne inutilement ou à répétition :point_left: "
        },
        {
          name: "Règle 9",
          value: "Insulter d'autres membres. :angry: "
        },
        {
          name: " Règle 10",
          value:
            "Publier des informations personnelles (nom, adresse, courriel, numéro de téléphone, etc.) :id: "
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "©Baccara"
      }
    }
  };
};
