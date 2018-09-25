let Discord = module.require(`discord.js`)
const fs = module.require(`fs`)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
    

module.exports.run = async (client, message, args) => {

    var sender = message.member.id
    
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    var memes = ['\MEME1.jpeg','\MEME2.jpeg','\MEME3.jpeg'];
    console.log("The memes array is " + memes.length);

    var memerandom = getRandomInt(0,memes.length);

    var selectedmeme = memes[memerandom];

    console.log(sender + " has used the !meme command")
    message.channel.send('MEMESSSSSSS', {

      files: [
        selectedmeme
      ]

    })
    .catch(error => message.channel.send(`*Error: ${error}`))
}

module.exports.help = {
    name: "meme"
}