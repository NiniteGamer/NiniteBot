/// REQUIRED LIBRARIES ///
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    disableEveryone: true
});
const CONFIG = require("./storage/config.json")
const TOKEN = CONFIG.token;
const PREFIX = CONFIG.defaultPrefix;
const SERVERNAME = CONFIG.serverName;
var util = require('util')

var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

client.commands = new Discord.Collection()
fs.readdir("./storage/cmds", (err, files) => {
    if (err) console.log(err)
    
    let jsfiles = files.filter(f =>f.split(".").pop() == "js")
    if(jsfiles.length <= 0) return console.log(`Error > No commands to load`)
    console.log(`CMDS > Loading ${jsfiles.length} commands`)
    jsfiles.forEach((f, i) => {
        let props = require(`./storage/cmds/${f}`)
        console.log(`CMDLOAD > ${i+1}/${jsfiles.length} ${f} loaded`)
        client.commands.set(props.help.name, props)
    })
})
//////////////////////////

client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "Bot things?",
      type: 0
    }
  })
  client.user.setStatus("dnd")
    console.log(`I have successfully logged into: ${SERVERNAME}`)
})

client.on("message", (message) => {
    
    if (message.author.bot) return
    if (message.channel.type === "dm") {
        //return message.channel.send(`Stop trying to slide into my dms`)
    }
    if (!message.content.startsWith(PREFIX)) return
    let messageArray = message.content.split(" ")
    let command = message.content.toLowerCase().substring(PREFIX.length).split(" ")[0]
    console.log(command)
    let args = messageArray.slice(1)
    console.log(args)
    
    let mimicmessagebegin = message.content
    let mimicmessage = mimicmessagebegin.substring(7)
    console.log(mimicmessage)
    
     
    let cmd = client.commands.get(command)
    if(cmd) {
        cmd.run(client, message, args, PREFIX, mimicmessage)
    } else {
        return message.channel.send(`Unknown command`)
    }
});

//Bot Login Token
client.login(TOKEN);
