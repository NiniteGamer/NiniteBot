let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)
module.exports.run = async (client, message, args) => {
    
    var sender = message.member.id
    
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    
    message.channel.send('God help me', {
        files: [
            "\Johnny_Flesh.jpg"
        ]   
    })
    console.log(sender + " has used the !johnny command.")
}

module.exports.help = {
    name: "johnny"
}