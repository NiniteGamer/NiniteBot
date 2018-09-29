/*

    The mimic command is a test of ability with discord.js, it's more for fun then any thing

*/
////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Mimic_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    async function mimic() {

        let mimicmessagebegin = message.content
        let mimicmessage = mimicmessagebegin.substring(7)
        console.log(mimicmessage)
        logger.debug(mimicmessage)

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **ERROR&& *You have insufficient permissions. Requires \'ADMINISTRATOR\'`)

        let amount = args

        mimicmessage = String(args)
        console.log(mimicmessage)
        logger.debug(mimicmessage)
        mimicmessage = mimicmessage.replace(/,/g, ' ');
        console.log(mimicmessage)
        logger.debug(mimicmessage)

        console.log(message.author.tag + " has used the !mimic command, with the message of " + mimicmessage)
        logger.info(`${message.author.tag} has ran the !mimic with the args of ${mimicmessage} on guild ${message.guild.name}`);

        if (amount == undefined) {
            message.channel.send(`:x: Please Specify a message. **Proper Usage:** \'${prefix}mimic <message>\'`)
            return
        }

        message.channel.send(mimicmessage)

    }
    //Runs the mimic function
    mimic();
    //Deletes the command message to try to hide the fact that the author ran it
    if (message.content.startsWith("!mimic")) {
        message.delete(1); //Supposed to delete message
    }
}