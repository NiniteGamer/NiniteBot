////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !oldinfo command on guild ${message.guild.name}`);

    if(message.author.id !== ops.ownerID) return;

        return message.channel.send({
         embed: {
             color: 3447003,
             author: {
                 name: "Ninitebot Info",
                 icon_url: client.user.avatarURL
             },
             description: "Welcome to !info you can find more information about commands at !help",
             fields: [{
                 name: ":spy: Owner:",
                 value: "NiniteGamer#8172",
                 inline: true
             },
             {
                 name: ":robot: Version:",
                 value: "0.9.0",
                 inline: true
             },
             {
                 name: ":books: Library:",
                 value: "discord.js",
                 inline: true
             },
             {
                 name: ":shield: Guilds",
                 value: `${client.guilds.size}`,
                 inline: true
             },
             {
                 name: ":notebook_with_decorative_cover: Channels",
                 value: `${client.channels.size}`,
                 inline: true
             },
             {
                 name: ":busts_in_silhouette: Users",
                 value: `${client.users.size}`,
                 inline: true
             },
             {
                 name: ":mailbox_with_mail: Invite",
                 value: "[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=493457035590107136&permissions=8&redirect_uri=https%3A%2F%2Fninitegamer.github.io%2FNiniteBot%2F&response_type=code&scope=identify%20email%20guilds%20rpc.api%20rpc%20gdm.join%20guilds.join%20rpc.notifications.read%20bot%20messages.read%20connections)",
                 inline: true
             },
             {
                 name: ":dollar: Pateron",
                 value: "[Click Here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
                 inline: true
             },
             {
                 name: ":door: Ninitebot Server",
                 value: "[Click Here](https://discord.gg/J69DphN)",
                 inline: true
             }
             ],
             timestamp: new Date(),
         }
 
     });
}
    