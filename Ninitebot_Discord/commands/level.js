////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const sql = require("sqlite");
///////////////////////////////////////////////////////////////////////////////
sql.open("./score.sqlite");
//////////////////////////////////// LOGGER ///////////////////////////////////
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if(!row) return message.reply("Your current level is 0!");
        message.reply(`Your current level is ${row.level}`);
    });
    
}