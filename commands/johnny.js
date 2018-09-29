////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Johnny_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args) => {

    logger.info(`${message.author.tag} has ran the !johnny command on guild ${message.guild.name}`);

    message.channel.send('My lord and savior', {
        files: [
            "\Johnny_Flesh.jpg"
        ]
    })
    console.log(sender + " has used the !johnny command.")
    logger.info(sender + " has used the !johnny command.")
}