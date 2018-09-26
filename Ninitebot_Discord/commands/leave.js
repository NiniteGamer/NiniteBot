let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const play = require(`./play.js`)

//A basic logger to track info,warnings,debug
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Default");

exports.run = async (client, message, args, ops) => {

    //Gets the messages sender's id for accountability
    var sender = message.member.id
    
    //Current senders ID's
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    logger.info(sender + " has ran the !leave command")
    
    // This command leaves a voiceChannel, if it is connected to one
    
    // Check if author is connected to a voice channel
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel.');
    
    // Check if the bot is connected to a voice channel
    if (!message.guild.me.voiceChannel) return message.channel.send('Sorry, the bot isn\'t connected to the guild.');
    
    // Check if the author and the bot are in the same channel, admin have override privilige
/*    if(message.member.hasPermission("ADMINISTRATOR")) {
        message.guild.me.voiceChannel.leave();
        return;
    } else if (message.guild.me.voiceChannelID !== message.member.voiceChannel.ID) {
        return message.channel.send('Sorry, you aren\'t connected to the same voice channel');
    }*/
    
    // Leave Channel
    message.guild.me.voiceChannel.leave();
    
    // Send Message
    message.channel.send('Leaving Channel....');
    
}

module.exports.help = {
    name: "leave"
}
//
