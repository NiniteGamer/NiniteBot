let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
module.exports.run = async (client, message, args) => {
    return message.channel.send(`Pong!`)
}
