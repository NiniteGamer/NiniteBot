exports.run = async (client, message, args, ops) => {
    //Gets the messages sender's id for accountability
    var sender = message.member.id
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.author.send(`This command is unavailable`)
    
    //Current senders ID's
    if (sender = '159412988539830272') {
        sender = "NiniteGamer"
    } else if (sender = '296418120569061378') {
        sender = "Dan Halen"
    }
    
    let admin = message.author.tag;
    
    let fetched = ops.active.get(message.guild.id);
    
    if (!fetched) return message.channel.send(`There currently isn\'t any music playing in the guild!`);
    
    if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry you aren/'t currently connected to the same voice channel!`);
    

    if (message.member.hasPermission("ADMINISTRATOR")) {
        ops.active.set(message.guild.id, fetched)
    
        return fetched.dispatcher.emit('end') 
    }

    message.channel.send(`${admin} has forced skipped ${fetched.queue[0]}`) 
}