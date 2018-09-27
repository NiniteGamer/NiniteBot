
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
    
    return message.channel.send({embed: {
            color: 3447003,
            author: {
                name: "Invite"
            
            },
            title: "click me",
            url: "https://discordapp.com/api/oauth2/authorize?client_id=493457035590107136&permissions=8&redirect_uri=https%3A%2F%2Fninitegamer.github.io%2FNiniteBot%2F&response_type=code&scope=identify%20email%20guilds%20rpc.api%20rpc%20gdm.join%20guilds.join%20rpc.notifications.read%20bot%20messages.read%20connections"
        }
    })
}