////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Ping_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args) => {
    logger.info(`${message.author.tag} has ran the !ping command on guild ${message.guild.name}`);
    return message.channel.send(`Pong!`)
}
