////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("ServerInfo_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !serverinfo command on guild ${message.guild.name}`);

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);


    return message.channel.send(serverembed);
}