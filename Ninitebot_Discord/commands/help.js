////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Help_CMD");
///////////////////////////////////////////////////////////////////////////////

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.author.send("__**MUSIC COMMANDS**__ \n!play, !pause, !resume, !queue, !search,!skip \n__**FUN COMMANDS**__ \n!meme, !johnny, !dan, !quote, !ping \n__**BASIC COMMANDS**__ \n!ninitebot, !help", {code: 'md'});
    else(message.author.send("__**ADMIN COMMANDS**__\n!purge <amount>, !mimic <message>, !help-mimic, !volume\n__**MUSIC COMMANDS**__ \n!play, !pause, !resume, !queue, !search, !volume, !skip, !fskip, \n__**FUN COMMANDS**__ \n!meme, !johnny, !dan, !quote, !ping \n__**BASIC COMMANDS**__ \n!ninitebot, !help", {code: 'md'}));
    logger.info("The help command has been ran!")
}
