let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
const myLoggers = require('log4js');

myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("HelpMeme-CMD");

module.exports.run = async (client, message, args) => {
    var sender = message.member.id
    
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    logger.info(sender + " has used the HelpMeme-Command.")
    
    message.author.send("The !meme command is used when you want to post a terrible meme. :x: *More terrible memes will be added in the future*")
    
    return
}

module.exports.help = {
    name: "help-meme"
}