////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Fskip_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    //Gets the messages sender's id for accountability

    if (!message.member.hasPermission("ADMINISTRATOR") || message.member.id !== ops.ownerID) return message.author.send(`This command is unavailable`)

    let admin = message.author.tag;

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(`There currently isn\'t any music playing in the guild!`);

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry you aren/'t currently connected to the same voice channel!`);


    if (message.member.hasPermission("ADMINISTRATOR")) {
        ops.active.set(message.guild.id, fetched)

        return fetched.dispatcher.emit('end')
    }

    message.channel.send(`${admin} has forced skipped ${fetched.queue[0]}`)
    logger.info(`${message.author.tag} has ran the !fskip command on guild ${message.guild.name}`);
}