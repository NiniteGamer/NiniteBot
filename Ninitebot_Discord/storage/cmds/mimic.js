let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
const CONFIG = require("../config.json")
const PREFIX = CONFIG.PREFIX

module.exports.run = async (client, message, args) => {
 async function mimic() {
      
    var author = message.member.id
     
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **ERROR&& *You have insufficient permissions. Requires \'ADMINISTRATOR\'`)
      
    let amount = args
    
    let mimicmessage = String(args)
     console.log(mimicmessage)
     mimicmessage = mimicmessage.replace(/,/g, ' ');
     console.log(mimicmessage)
     
    
    if (amount == undefined) {
      message.channel.send(`:x: Please Specify a message. **Proper Usage:** \'${prefix}mimic <message>\'`)
      return
    }
     
    message.channel.send(mimicmessage)
     
    }
    mimic();
    if (message.content.startsWith("!mimic")) {
      message.delete(1); //Supposed to delete message
   }
}

module.exports.help = {
    name: "mimic"
}