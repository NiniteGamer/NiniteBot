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
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    //Gets the messages sender's id for accountability
    var sender = message.member.id
    
    //Current senders ID's
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    let fetched = ops.active.get(message.guild.id);
    
    if(!fetched) return message.channel.send(`There currently isn\'t any music playing in this guild`);
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry you aren't in the same channel as the music bot`);
    
    if(!fetched.dispatcher.paused) return message.channel.send('This music is already playing');
    
    fetched.dispatcher.resume();
    
    message.channel.send(`Successfully resumed ${fetched.queue[0].songTitle}`);
}