
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.PREFIX;
const PURGETIMER = CONFIG.purgeMessageTimer;
const myLoggers = require('log4js');

myLoggers.configure({
    appenders: { mylogger: { type:"file", filename: "logs/debug_logs.log" } },
    categories: { default: { appenders:["mylogger"], level:"ALL" } }
});
const logger = myLoggers.getLogger("Purge_CMD");

module.exports.run = async (client, message, args, ops) => {
  async function purge() {
      
    var sender = message.member.id
    
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
      
    logger.info(sender + " has ran the !purge command")
    
      
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **ERROR&& *You have insufficient permissions. Requires \'ADMINISTRATOR\'`)
      
    let amount = parseInt(args[0])

    if (amount == undefined) {
      message.channel.send(`:x: Please Specify a number. **Proper Usage:** \'${prefix}purge <INT-amount>\'`)
      return
    }

      
    if (isNaN(amount)) {
    message.channel.send(`:x: Please Specify a number as your args. **Proper Usage:** \'${prefix}purge <INT-amount>\'`)
    return
    }
    
    if (message.author.id !== ops.ownerID) {
        if (amount > 40 && amount >0) amount = 40;
    } else {
        if (amount > 99 && amount > 0) amount = 99;
    }
      
    const fetched = await message.channel.fetchMessages({
      limit: parseInt(amount + 1)
    })

    let actualamount = fetched.size
      
    console.log((fetched.size) + ' messages found, deleting...')
    logger.info((fetched.size) + ' messages found, deleting...')
      
    message.channel.bulkDelete(fetched).catch(error => message.channel.send(`*Error: ${error}`))
      
    logger.debug(PURGETIMER)  
    
    message.channel.send(`:wastebasket: I have deleted \'${actualamount}\' messages for ${message.author.tag}.`).then(sentMessage => {
        sentMessage.delete(PURGETIMER);
    });

  }

  purge();
}

module.exports.help = {
    name: "purge"
}