let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
const myLoggers = require('log4js');

myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("HelpMimic-CMD");

module.exports.run = async (client, message, args) => {
    //Checks if the user asking is a Administrator, if they're not it will say the command doesn't exist
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.author.send(`This command is unavailable`)
    else(message.author.send("The !mimic makes the bot say whatever you type after !mimic, You must have admin level privilages to use the command. Proper usage is !mimic <message>"))
}

module.exports.help = {
    name: "help-mimic"
}