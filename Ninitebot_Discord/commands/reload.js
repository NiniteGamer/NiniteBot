let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require(`../storage/config.json`);
const myLoggers = require('log4js');

//A basic logger to track info,warnings,debug
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Reload-CMD");

module.exports.run = async (client, message, args, ops, cmd) => {

    logger.info(message.author.id + " has used the reload command with the args of" + args[0]);
    
    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry, only the owner can user this command.');
    
    if(args[0] == '*') {
        delete require.cache[require.resolve(`./${cmd}.js`)];
        logger.info(message.author.tag + " has reloaded all commands");
        return message.channel.send(`Successfully reloaded all commands`);
    } else {
        try {
            delete require.cache[require.resolve(`./${args[0]}.js`)];
        } catch (e) {
            return message.channel.send(`Unable to reload: ${args[0]}`);
        } 
    }

    logger.info(message.author.tag + " has reloaded " + args[0]);
    message.channel.send(`Succesfully reloaded command: ${args[0]}`);
    
}

//What you want the user to type in to activate the command
module.exports.help = {
    name: "reload"
}