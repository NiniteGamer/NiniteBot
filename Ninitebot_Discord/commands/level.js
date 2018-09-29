////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const sql = require("sqlite");
const logger = myLoggers.getLogger("Level_CMD");
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////// SQL Stuff //////////////////////////////////
sql.open("./score.sqlite");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !level command on guild ${message.guild.name}`);

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) return message.reply("Your current level is 0!");
        message.reply(`Your current level is ${row.level}`);
    });

}