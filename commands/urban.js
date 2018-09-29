////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const urban = require('relevant-urban'); // This is for fetching results
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

  // First, we need to verify that they wrote text
  if (!args[0]) return message.channel.send(`***Please specify some text!***`);
  // This will return and send a message, (args[0] is the first word after the command)

  let res = await urban(args.join(' ')).catch(e => { // This uses await, so the response will be held in the `res` variable
    // Although, if an error is found (word not found), this .catch() will run
    return message.channel.send('***Sorry, that word was not found!***');
  });

  // Now, we can send the response to chat
  message.channel.send({
    embed: {
      color: 3447003,
      title: res.word,
      url: res.urbanURL,
      description: `**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`,
      fields: [{
        name: 'Author',
        value: res.author,
        inline: true
      },
      {
        name: 'Rating',
        value: `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`,
        inline: true
      }
      ],
      timestamp: new Date(),
    }
  }); // We can now test it!

}

