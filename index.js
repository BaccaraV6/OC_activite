const Discord = require("discord.js");
const client = new Discord.Client();
const behest = require("behest");
const botSignale = require("signale");

console.log(rules);

client.on("ready", () => {
  client.user.setPresence({ game: { name: "!cmd : Voir mes commandes" } });
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.login(`${token}`);

client.on("message", message => {
  if (message.content === "!cmd") {
    message.channel
      .send(rules.getEmbed(client))
      .then(() => botSignale.success("Commande CMD demandée"));
    client.channels
      .get("id_channel")
      .send(
        "La commande CMD a bien été éxécuté par " + message.author.username
      );
  }
});
