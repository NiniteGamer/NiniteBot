
////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Info-CMD");
///////////////////////////////////////////////////////////////////////////////
exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the !info command on guild ${message.guild.name}`);


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var pataron = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'https://youtu.be/HWQR-hAJrKU?t=11s', 'https://www.youtube.com/watch?v=SQoA_wjmE9w']
    logger.debug(pataron.length);
    console.log(pataron.length);
    
    //On command run it randomly selects a link to play when people hit click me on pateron
    var pateronrandom = getRandomInt(0, pataron.length);

    var selectedpateron = pataron[pateronrandom];

    selectedpateron.toString();
    logger.debug(selectedpateron);
    console.log(selectedpateron);

    let bicon = client.user.displayAvatarURL;
    let botinfoembed = new Discord.RichEmbed()
    .setColor ('#f44242')
    .setThumbnail(bicon)
    .addField("Bot Name", client.user.username, true)
    .addField(":spy: Owner:", "NiniteGamer#8172", true)
    .addField(":robot: Version:", "0.9.5", true)
    .addField(":books: Library:", "discord.js", true)
    .addField(":shield: Guilds", client.guilds.size, true)
    .addField(":notebook_with_decorative_cover: Channels", client.channels.size, true)
    .addField(":busts_in_silhouette: Users", client.users.size, true)
    .addField(":mailbox_with_mail: Invite", "[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=493457035590107136&permissions=8&redirect_uri=https%3A%2F%2Fninitegamer.github.io%2FNiniteBot%2F&response_type=code&scope=identify%20email%20guilds%20rpc.api%20rpc%20gdm.join%20guilds.join%20rpc.notifications.read%20bot%20messages.read%20connections)", true)
    .addField(":dollar: Pateron", `[Click Here](${selectedpateron})`, true) //(https://www.youtube.com/watch?v=dQw4w9WgXcQ)
    .addField(":door: Ninitebot Server", "[Click Here](https://discord.gg/J69DphN)", true)
    .addField("Bot Birthday", client.user.createdAt)

    return message.channel.send(botinfoembed);
}