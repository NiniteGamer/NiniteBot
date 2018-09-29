////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = (client, message, args, ops) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.author.send(`This command is unavailable`)

    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send("There currently isn't any music playing in this guild!");

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry, you currently aren\'t in the same channel as the music bot`);

    if (isNaN(args[0] || args[0] > 200 || args[0] < 0)) return message.channel.send('Please insput a number between 0-200');

    fetched.dispatcher.setVolume(args[0] / 100);

    message.channel.send(`Successfully set the volume of ${fetched.queue[0].songTitle} to ${args[0]}`);

}