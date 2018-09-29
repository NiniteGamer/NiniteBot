////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Help_CMD");
///////////////////////////////////////////////////////////////////////////////

//Update this sometime to the better way of doing embeds

exports.run = async (client, message, args) => {
    //if (!message.member.hasPermission("ADMINISTRATOR")) return message.author.send("__**MUSIC COMMANDS**__ \n!play, !pause, !resume, !queue, !search,!skip \n__**FUN COMMANDS**__ \n!meme, !johnny, !dan, !quote, !ping \n__**BASIC COMMANDS**__ \n!ninitebot, !help", { code: 'md' });
    //if (message.author.send("__**ADMIN COMMANDS**__\n!purge <amount>, !mimic <message>, !help-mimic, !volume\n__**MUSIC COMMANDS**__ \n!play, !pause, !resume, !queue, !search, !volume, !skip, !fskip, \n__**FUN COMMANDS**__ \n!meme, !johnny, !dan, !quote, !ping \n__**BASIC COMMANDS**__ \n!ninitebot, !help", { code: 'md' }));
    logger.info("The help command has been ran!")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.author.send({
        embed: {
            color: 3447003,
            author: {
                name: "Ninitebot Help",
                icon_url: client.user.avatarURL
            },
            description: "!help",
            fields: [{
                name: "BASIC COMMANDS",
                value: "!ninitebot, !help, !info, !help-meme"
            },
            {
                name: "FUN COMMANDS",
                value: "!meme, !dan, !quote, !urban, !johnny, !self-help, !ping"
            },
            {
                name: "LEVEL COMMANDS",
                value: "!level, !points"
            },
            {
                name: "MUSIC COMMANDS",
                value: "!play, !pause, !resume, !queue, !search, !skip"
            }
            ]
        }
    });

    let image = 'https://cdn2.iconfinder.com/data/icons/flat-design-basic-set-9/24/secure-shield-protect-blue-512.png'

    if (message.member.hasPermission("ADMINISTARTOR")) return message.author.send({
        embed: {
            color: 3447003,
            author: {
                name: "Ninitebot Admin Help",
                icon_url: client.user.avatarURL
            },
            description: "!help",
            fields: [{
                name: "__BASIC COMMANDS__",
                value: "!ninitebot, !help, !serverinfo, !info, !help-meme, !help-mimic"
            },
            {
                name: "__ADMIN COMMANDS__",
                value: "!invite, !mimic <text>, !purge <amount>"
            },
            {
                name: "__LEVEL COMMANDS__",
                value: "!level, !points, !reset_level_points @<user>"
            },
            {
                name: "__FUN COMMANDS__",
                value: "!meme, !dan, !quote, !urban, !johnny, !self-help, !ping, !ascii"
            },
            {
                name: "__MUSIC COMMANDS__",
                value: "!play, !pause, !resume, !queue, !search, !skip, !fskip, !volume <0 - 200)"
            }
            ]
        }
    })
}
