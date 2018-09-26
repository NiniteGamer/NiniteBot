/*

    The mimic command is a test of ability with discord.js, it's more for fun then any thing

*/
let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
const CONFIG = require("../storage/config.json")
const PREFIX = CONFIG.PREFIX
const myLoggers = require('log4js');


//A basic logger to track info,warnings,debug
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Default");

module.exports.run = async (client, message, args) => {
 async function mimic() {
      
    let author = message.member.id
    
    if (author = '159412988539830272') {
        author = "NiniteGamer"
    } else if (author = '296418120569061378') {
        author = "Dan Halen"
    }
     
    let mimicmessagebegin = message.content
    let mimicmessage = mimicmessagebegin.substring(7)
    console.log(mimicmessage)
    logger.debug(mimicmessage)
     
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **ERROR&& *You have insufficient permissions. Requires \'ADMINISTRATOR\'`)
      
    let amount = args
    
     mimicmessage = String(args)
     console.log(mimicmessage)
     logger.debug(mimicmessage)
     mimicmessage = mimicmessage.replace(/,/g, ' ');
     console.log(mimicmessage)
     logger.debug(mimicmessage)
     
    console.log(author + " has used the !mimic command, with the message of " + mimicmessage)
    logger.info(author + " has used the !mimic command, with the message of " + mimicmessage)
    
    if (amount == undefined) {
      message.channel.send(`:x: Please Specify a message. **Proper Usage:** \'${prefix}mimic <message>\'`)
      return
    }
     
    message.channel.send(mimicmessage)
     
    }
    //Runs the mimic function
    mimic();
    //Deletes the command message to try to hide the fact that the author ran it
    if (message.content.startsWith("!mimic")) {
      message.delete(1); //Supposed to delete message
   }
}

module.exports.help = {
    name: "mimic"
}