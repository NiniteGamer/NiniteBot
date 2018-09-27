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

exports.run = async (client, message, args, ops, BOTGAME) => {
    
    let statusmessagebegin = message.content
    let statusmessage = statusmessagebegin.substring(8)
    args = statusmessage;
    console.log(args);
    
    if(message.member.hasPermission("ADMINISTRATOR")) {
        
        try {
            BOTGAME = args;
            gamechanger(BOTGAME);
            return message.author.send(`The bots game was set to ${BOTGAME}`);
            
        } catch (e) {
            return message.author.send(`Couldn/'t change the bots game`)
        }
        
    } else {
        return message.author.send("You do not have access to that command!");
    }
    
    function gamechanger(BOTGAME) {
        client.user.setPresence({ game: { name: BOTGAME }, status: 'dnd'});
    }
    
}