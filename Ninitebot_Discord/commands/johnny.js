let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
const myLoggers = require('log4js');

myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Johnny_CMD");

module.exports.run = async (client, message, args) => {
    
    var sender = message.member.id
    
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    
    message.channel.send('My lord and savior', {
        files: [
            "\Johnny_Flesh.jpg"
        ]   
    })
    console.log(sender + " has used the !johnny command.")
    logger.info(sender + " has used the !johnny command.")
}

module.exports.help = {
    name: "johnny"
}