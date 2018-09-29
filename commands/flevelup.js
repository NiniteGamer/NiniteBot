////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const prefix = CONFIG.PREFIX;
const myLoggers = require('log4js');
const sql = require("sqlite");
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

//Make it so they can level up anyone in the guild

////////////////////////////////// SQL Stuff //////////////////////////////////
sql.open("./score.sqlite");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !flevelup command on guild ${message.guild.name}`);

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have access to this command!");

    let level = parseInt(args[0])

    if (level == undefined) {
        message.channel.send(`:x: Please Specify a number. **Proper Usage:** \'${prefix}flevelup <INT-amount>\'`)
        return
    }

    if (isNaN(level)) {
        message.channel.send(`:x: Please Specify a number as your args. **Proper Usage:** \'${prefix}fkevelup <INT-amount>\'`)
        return
    }

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        sql.run(`UPDATE scores SET level = ${level}`);
    });

    message.channel.send(`${message.author.tag} has set their level to ${level}`)

}