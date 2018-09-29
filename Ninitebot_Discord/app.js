////////////////////////////// Required Packages //////////////////////////////
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    disableEveryone: true
});
const sql = require("sqlite");
const CONFIG = require("./storage/config.json");
const TOKEN = CONFIG.token;
const PREFIX = CONFIG.defaultPrefix;
const SERVERNAME = CONFIG.serverName;
const PURGETIMER = CONFIG.purgeMessageTimer;
const BOTSTATUS = CONFIG.botStatus;
const BOTGAME = CONFIG.botGame;
const BOTVERSION = CONFIG.botVersion;
const LOGGERID = CONFIG.loggerID;
const active = new Map();
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

sql.open("./score.sqlite");

//////////////////////////////// LOGGING SYSTEM ///////////////////////////////

parseInt(LOGGERID);
console.log(LOGGERID);
CONFIG.loggerID = (LOGGERID + 1);

fs.writeFileSync('./storage/config.json', JSON.stringify(CONFIG, null, 2), function (err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(CONFIG, null , 2));
    console.log('writing to ' + CONFIG);
})

myLoggers.configure({
    appenders: { mylogger: { type: "file", filename: `logs/debug_logs${LOGGERID}.log` } },
    categories: { default: { appenders: ["mylogger"], level: "ALL" } }
});
const logger = myLoggers.getLogger("MAIN");

///////////////////////////////////////////////////////////////////////////////

/////////////////////////////// LISTENER EVENTS ///////////////////////////////

client.on("ready", () => {
    client.user.setPresence({
        game: {
            name: BOTGAME,
            type: 0
        }
    })
    client.user.setStatus(BOTSTATUS)

    console.log(`I have successfully logged into: ${SERVERNAME}`)
    logger.info(`I have successfully logged into: ${SERVERNAME}`)


})

client.on("message", (message) => {
    if (message.author.bot) return

    let args = message.content.slice(PREFIX.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        } else {
            let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
            if (curLevel > row.level) {
                row.level = curLevel;
                sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
                message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
            }
            sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
        });
    });

    if (!message.content.startsWith(PREFIX)) return;

    try {

        let ops = {
            ownerID: "159412988539830272",
            active: active
        }


        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, ops, cmd, BOTGAME);

    } catch (e) {

        console.log(e.stack);
        logger.error(e.stack);

    }
    process.on('uncaughtException', function (err) {
        console.error(err);
        console.log("Node NOT Exiting...");
        logger.warn(err)
        logger.warn("Node NOT Exiting...")
    });


});

///////////////////////////////////////////////////////////////////////////////

//Bot Login Token
client.login(TOKEN);
