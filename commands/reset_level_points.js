////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const sql = require("sqlite");
const logger = myLoggers.getLogger("Reset_Level_Points_CMD");
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////// SQL Stuff //////////////////////////////////
sql.open("./score.sqlite");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !reset_level_points on ${rUser} on guild ${message.guild.name}`);

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    rUser = rUser.id
    if (!rUser) message.channel.send("Can't find user!");

    let level = 0;
    let points = 0;

    sql.get(`SELECT * FROM scores WHERE userId ="${rUser}"`).then(row => {
        sql.run(`UPDATE scores SET level = ${level}, points = ${points}`);
    });

}