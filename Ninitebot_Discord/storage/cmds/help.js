let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
module.exports.run = async (client, message, args) => {
    return message.author.send("Here's the commands !purge <amount>, !meme, !johnny, !dan, !quote, !ping")
}

module.exports.help = {
    name: "help"
}