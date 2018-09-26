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
    
    if (!fetched) return message.channel.send(`There currently isn\'t any music playing in the guild!`);
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry you aren/'t currently connected to the same voice channel!`);
    
    let userCount = message.member.voiceChannel.members.size;
    
    let required = Math.ceil(userCount/2);
    
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required}, requied!`);
    
    fetched.queue[0].voteSkips.push(message.member.id);
    
    ops.active.set(message.guild.id, fetched);
    
    if (fetched.queue[0].voteSkips.length >= required) {
        
        message.channel.send('Successfully skipped song');
        
        return fetched.dispatcher.emit('end');
    }
    
    message.channel.send('Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required!');
}