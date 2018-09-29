////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("HelpMimic-CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args) => {

    logger.info(`${message.author.tag} has ran the !help-mimic command on guild ${message.guild.name}`);

    //Checks if the user asking is a Administrator, if they're not it will say the command doesn't exist
    if (!message.member.hasPermission("ADMINISTRATOR") || message.member.id !== ops.ownerID) return message.author.send(`This command is unavailable`)
    else (message.author.send("The !mimic makes the bot say whatever you type after !mimic, You must have admin level privilages to use the command. Proper usage is !mimic <message>"))
}