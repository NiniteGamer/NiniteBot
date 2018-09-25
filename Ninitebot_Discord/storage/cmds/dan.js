let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
module.exports.run = async (client, message, args) => {
    
    var sender = message.member.id
    
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    return message.channel.send(`Daniel is the worst human being, and his memes are old`, {
        tts: true
    })
    console.log(sender + " has used the !dan command.")
}

module.exports.help = {
    name: "dan"
}