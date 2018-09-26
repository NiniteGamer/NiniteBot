////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const ascii = require('ascii-art');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    
    //Logs the user who used the command
    logger.info(message.author.tag + " has used the ascii command with the text of " + args[0]);
    
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        
        //The `rendered` variable now contains our output
        rendered = rendered.trimRight();
        
        if (rendered.length > 2000) return message.channel.send('Sorry, that message is too long!');
        
        message.channel.send(rendered, {
            code: 'md'
        });
             
    });
    
}