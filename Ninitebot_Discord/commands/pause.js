////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Pause_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !pause command on guild ${message.guild.name}`);

    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched) return message.channel.send(`There currently isn\'t any music playing in this guild`);
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry you aren't in the same channel as the music bot`);
    
    if(fetched.dispatcher.paused) return message.channel.send('This music is already pushed');
    
    fetched.dispatcher.pause();
    
    message.channel.send(`Successfully paused ${fetched.queue[0].songTitle}`);

    logger.warn(Error)

}