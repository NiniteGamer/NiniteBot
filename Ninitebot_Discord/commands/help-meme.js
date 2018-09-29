////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("HelpMeme-CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args) => {

    logger.info(`${message.author.tag} has ran the !help-meme command on guild ${message.guild.name}`);

    message.author.send("The !meme command is used when you want to post a terrible meme. :x: *More terrible memes will be added in the future*")

    return
}