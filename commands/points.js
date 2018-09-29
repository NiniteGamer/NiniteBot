////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const sql = require("sqlite");
const logger = myLoggers.getLogger("Points_CMD");
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////// SQL Stuff //////////////////////////////////
sql.open("./score.sqlite");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !points command on guild ${message.guild.name}`);

    sql.get(`SELECT * FROM scores WHERE userid = "${message.author.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
        message.reply(`you currently have ${row.points} points, good going!`);
    })

}