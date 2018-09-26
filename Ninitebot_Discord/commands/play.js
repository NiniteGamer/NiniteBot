let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const ytdl = require('ytdl-core');

//A basic logger to track info,warnings,debug
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Play_CMD");

// The queue system modifies the current play command
// First, we need to a new Map(); to the server.js & pass it through the command


exports.run = async (client, message, args, ops) => {
    //Gets the messages sender's id for accountability
    console.log("**DEBUG** " + ops.active)
    
    var sender = message.member.id
    
    
    //Current senders ID's
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel');
    
    //Check if author input a url
    if (!args[0]) return message.channel.send('Sorry, please input a url following the command.');
    
    //Validate Info
    let validate = await ytdl.validateURL(args[0]);  
    
    if (!validate) {
        
        let commandFile = require(`./search.js`);
        return commandFile.run(client, message, args, ops);
        
        
        
    }
    
    let info = await ytdl.getInfo(args[0]);
    
    console.log(ops.active);
    
    let data = ops.active.get(message.guild.id) || {};
    
    if (!data.connection) data.connection = await message.member.voiceChannel.join(); //If there isn't a connection, create one
    
    if (!data.queue) data.queue = []; //If there isn't a queue array, create one
    
    data.guildID = message.guild.id;
    
    data.queue.push({
        
        songTitle: info.title,
        
        requester: message.author.tag,
        url: args[0],
        announceChannel: message.channel.id
    });
    
    // If there isn't a dispatcher already created, run the play funcion
    if (!data.dispatcher) play(client, ops, data);
    else {
        
        // Send added to queue message
        message.channel.send(`Added To Queue: ${info.title} | Requested By: ${message.author.tag}`);
        
    }
    
    //Finally, update the map
    ops.active.set(message.guild.id, data);
}

async function play(client, ops, data) {

    client.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested By: ${data.queue[0].requester}`);
    
    data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, {filter: 'audioonly'}));
    data.dispatcher.guildID = data.guildID;
    

    data.dispatcher.once('end', function() {
       
        end(client, ops, this);
    })
}

function end(client, ops, dispatcher) {

    let fetched = ops.active.get(dispatcher.guildID);
    

    fetched.queue.shift();
    

    if (fetched.queue.length > 0) {

        ops.active.set(dispatcher.guildID, fetched);
        

        play(client, ops, fetched); 
    } else {
        
        
        ops.active.delete(dispatcher.guildID);
        
        // Leave the voice chanel
        let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel; //This get the voiceChannel of the bot in the guild
        if(vc) vc.leave(); //If it's in a voice channel, leave it
        
    }
}