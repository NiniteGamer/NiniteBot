////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Ninitebot_CMD");
const BOTVERSION = CONFIG.botVersion;
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args) => {
    logger.info(`${message.author.tag} has ran the !ninitebot command on guild ${message.guild.name}`);
    return message.channel.send("You called, you can type !help for all available commands, My current version is " + BOTVERSION)
}