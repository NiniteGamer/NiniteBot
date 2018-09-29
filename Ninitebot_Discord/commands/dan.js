////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args) => {

    return message.channel.send(`Daniel is the worst human being, and his memes are old`, {
        tts: true
    })
    console.log(message.author.tag + " has used the !dan command.")
    logger.info(`${message.author.tag} has ran the !dan command on guild ${message.guild.name}`);
}