let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const BOTVERSION = CONFIG.botVersion;

//A basic logger to track info,warnings,debug
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Default");

module.exports.run = async (client, message, args) => {
    return message.channel.send("You called, you can type !help for all available commands, My current version is " + BOTVERSION)
}

module.exports.help = {
    name: "ninitebot"
}