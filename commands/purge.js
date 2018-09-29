
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.PREFIX;
const PURGETIMER = CONFIG.purgeMessageTimer;
const myLoggers = require('log4js');

const logger = myLoggers.getLogger("Purge_CMD");

module.exports.run = async (client, message, args, ops) => {
    async function purge() {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: **ERROR&& *You have insufficient permissions. Requires \'ADMINISTRATOR\'`)

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
            if (amount > 40 && amount > 0) amount = 40;
        } else {
            if (amount > 99 && amount > 0) amount = 99;
        }

        const fetched = await message.channel.fetchMessages({
            limit: parseInt(amount + 1)
        })

        let actualamount = fetched.size

        console.log(`${fetched.size} messages found, deleting on ${message.guild.name}, command was ran by ${message.author.tag}`);
        logger.info(`${fetched.size} messages found, deleting on ${message.guild.name}, command was ran by ${message.author.tag}`);

        message.channel.bulkDelete(fetched).catch(error => message.channel.send(`*Error: ${error}`))

        logger.debug(PURGETIMER)

        message.channel.send(`:wastebasket: I have deleted \'${actualamount}\' messages for ${message.author.tag}.`).then(sentMessage => {
            sentMessage.delete(PURGETIMER);
        });

    }

    purge();
}