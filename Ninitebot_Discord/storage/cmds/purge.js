
let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
const CONFIG = require("../config.json")
const PREFIX = CONFIG.PREFIX
module.exports.run = async (client, message, args) => {
  async function purge() {
      
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

    if (amount > 40 && amount > 0) amount = 40;
      
      const fetched = await message.channel.fetchMessages({
          limit: parseInt(amount + 1)
      })

      
    console.log((fetched.size) + ' messages found, deleting...')

    message.channel.bulkDelete(fetched).catch(error => message.channel.send(`*Error: ${error}`))

    message.channel.send(`:wastebasket: I have deleted \'${amount}\' messages for you.`).then(sentMessage => {
        sentMessage.delete(5000);
    });

  }

  purge();
}

module.exports.help = {
    name: "purge"
}