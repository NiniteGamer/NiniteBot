//You may use this base bot for free

//NOTES
//Working on Discord Intergration (Most likely will not be done until late stage of development (Plan on atleast starting intergration in either late alpha or early beta))
//Currently working on the giveaway command
//Working on a interactive website or application currently deciding
//Working on a wiki page for manually editing the bot
//Currently working on intergration with other bots (Currently there is some intergration with Revlobot) This is only temporary until I work out how some commands are done.
//I will make custom interations of this bot if asked to do so.
//Working on a point system, but it'll not be ready until release.
//END OF NOTES

//Current version is DEV 0.2 (ALPHA)

//

//DO NOT CHANGE
var tmi = require("tmi.js");
var canentergiveaway = false;
var startgiveaway = false;
var giveawayarray = [];
var WinnerIs = "";
var timeout1;
var giveawayitem = "";
var giveawaystopper = null;
//Configuration

//Connection Configuration
//Don't forget to change everything to a example before release
var BotsUsername = ""; // Capitalization doesn't matter!
var Channel = "theninitegamer"; //The channel you want the bot in!
var oAuthCode = ""; //www.twitchapps.com/tmi/
var OptionChannel = "#theninitegamer"; //Leave the # there or it'll fail to connect!
//End of Connection Configuration

//Main Configuration (Can't come up with a better name!)
var giveawaymessage = "testing";
var blacklist = ["titties", "dicks",  "lul", "lols"];
var BLTimeout = 1;
var BLReason = "Please do not use a blacklisted word";
var LinkTimeout = 300;
var LinkReason = "Please do not post links in chat";
var submessage = "Thank you for subscriping!, welcome to the wilderness!"
var about = "Please enter your about here!"
var twitterhandle = "https://twitter.com/NiniteGamer";
var bothasloaded = true;
var twitterintro = 'testing';
//End of main configuration

//Commands Configuration
var emoteonlycommand = true;
var giveaways = true;
var debugmode = true; // For developers only (DO NOT INCLUDE IN RELEAESE)
var linkcheckenabled = true;
var gambleforsub = true;
var helpmodonly = false;
//End of Commands Configuration

//End of Configuration

//DO NOT CHANGE ANYTHING BELOW THIS LINE! UNLESS INSTURCTED BY ME (THENINITEGAMER).
//I DO NOT OFFER SUPPORT TO MODIFIED FILES
var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: BotsUsername,
        password: oAuthCode
    },
    channels: [OptionChannel]
};

var client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("connected", function (address, port) {
	console.log("Wilderness_Bot Loaded");
	if (bothasloaded == true) {
		client.say(Channel, "Wilderness_Bot has loaded!");
	};
});

//RIP Revlo You will be missed.
client.on("subscription", function (channel, username, method) {
	client.say(Channel, username + " " + submessage);
	if (gambleforsub == true) {
		setTimeout(function(){
			console.log('Gambling Enabled for the next 2 minutes!');
			client.say(Channel, "!gamble on");
			client.say(Channel, "Gambling enabled for the next 2 minutes!");
			setTimeout(function(){
				console.log('Gambling disabled!');
				client.say(Channel, "The gambling period is over!");
				client.say(Channel, "!gamble off");
			}, 10 * 12 * 1000);	
		}, 0 * 0 * 0);		
	};
});



client.on("resub", function (channel, username, months, message) {
	//
});

client.on("chat", function (channel, userstate, message, self) {
	
	var userloop = userstate.username
	
	if (self) return;
	
	console.log(`giveawayitem is equal to ${giveawayitem}`);

	if (message == "!about") {
		client.say(Channel, about);
	};

	if (message == "!twitter") {
		client.say(Channel, `${twitterintro}, ${twitterhandle}`)
	}

	//Checks to make sure you want this command enabled!
	if (emoteonlycommand == true) {
		
		if (message == "!emoteonlyon") {
			client.say(Channel, "Emote only mode enabled!");
			client.emoteonly(Channel);
		};

		if (message == "!emoteonlyoff") {
			client.say(Channel, "Emote only mode has been disabled!");
			client.emoteonlyoff(Channel);
		};	
	};


	//Checks if giveaways are true
	if (giveaways == true) {
		if (message == "!giveaway") {
			console.log(message);
			client.say(Channel, giveawaymessage);
		};

		if (message == "!giveaway start" && userstate.mod == true) {
			client.say(Channel, `A giveaway for ${giveawayitem} has been started please type !giveaway enter to enter!`);
			canentergiveaway = true;
			timeout1 = setTimeout(selectionbegin, 60000); //The time is based in milliseconds (1000 milliseconds to 1 second)
		};

		if (message.includes("!giveawayitem") ) {
			var stored = message;
			console.log(stored);
			var cmd1 = stored.substr(14);
			console.log(cmd1);
			//console.log(stored);
			giveawayitem = cmd1;
			console.log("giveawayitem is equal to " + giveawayitem);

			client.say(Channel, `The giveaway item has been set to ${giveawayitem}`);
		};

		console.log("gachtcmd is equal to " + giveawayitem);

		//This was the hardest part for some reason :(

		//I'm hating this so much !!!!!!
		if (canentergiveaway == true) {
			if (message == "!giveaway enter") {
				giveawayarray.push(userstate.username);
				client.say(Channel, userstate.username + " you've entered the giveaway!");
				console.log(giveawayarray);
			};


			console.log(startgiveaway);
			//I have no clue why this is a function, but it doesn't matter!
			var entriesclosed = function() {
				client.say(Channel, "The winner is being picked now entries are closed!");
				//console.log("startgiveaway is equal to "+startgiveaway);			
			};

			var startinggiveaway = function() {
				clearTimeout(timeout1);
				startgiveaway = true;
				if (startgiveaway == true) {
					console.log("Starting Selection!");
					var pickaWinner = function() {
						WinnerIs = giveawayarray[Math.floor(Math.random() * giveawayarray.length)];
					};
					pickaWinner(WinnerIs);
					console.log(WinnerIs);
					client.say(Channel, "The winner is " + WinnerIs + "!");
				};
				startgiveaway = false;
				canentergiveaway = false;			
			};

			var selectionbegin = function() {
				entriesclosed();
				startinggiveaway();
				clearTimeout(timeout1);
			}



			console.log("startgiveaway is equal to "+startgiveaway);

			

			if (message == "!giveaway stop" && userstate.mod == true) {
				var giveawaystopper = userstate.username;
				client.say(Channel, `The giveaway for ${giveawayitem} has been stopped by ${giveawaystopper} no winner will be picked!`);
				canentergiveaway = false;
				clearTimeout(timeout1);
			};
		};
	};
	
	//Attempts to purge the user who uses a blacklisted word!
	if (message) {
		console.log(message);
		blacklist.forEach(function(value){
			if (message == value) {
				console.log(value);
				client.timeout(Channel, userstate.username, BLTimeout, BLReason);
			};
		});
	};
	//How I tested the auto gambling when someone subs!
	if (debugmode == true) {
		if (message == "!testsub" && userstate.mod == true) {
			console.log(userstate.mod);
			client.say(Channel, userstate.username+ " " +submessage); //Remember to change userstate.username to username!
			setTimeout(function(){
					console.log('Gambling Enabled for the next 2 minutes!');
					client.say(Channel, "!gamble on");
					client.say(Channel, "Gambling enabled for the next 2 minutes!");
				setTimeout(function(){
					console.log('Gambling disabled!');
					client.say(Channel, "The gambling period is over!");
					client.say(Channel, "!gamble off");
				}, 10 * 12 * 1000);	
			}, 0 * 0 * 0);
		};
	};

	if (linkcheckenabled == true) {
		if (message) {
			var linkcheck = message.includes("www.");
			console.log(linkcheck);
			if (linkcheck == true && userstate.mod == false) {
				client.timeout(Channel, userstate.username, LinkTimeout, LinkReason);
			};
		};
	};
	
	if (message == "!brb") {
		client.say(Channel, "I GOTTA GO LIKE RIGHT NOW, BUT I'LL BE BACK! - " + userstate.username);
		var usernamebrb = userstate.username;
		console.log(usernamebrb);
	};

	if (message == "!back") {
		client.say(Channel, "I'm back! - " + userstate.username);
		var usernameback = userstate.username;
		console.log(usernameback);
	}
	
	if (message == "!wilderness_bot") {
		client.say(Channel, "My creator is TheNiniteGamer!");
	};

	if (message == "!help") {
		if (helpmodonly == true) {
			if (userstate.mode == true) {
				client.say(Channel, "!brb, !giveaway enter, !emoteonlyon, !emoteonlyoff, !about, !wilderness_bot");
			};
		} else if (helpmodonly == false) {
			client.say(Channel, "!brb, !giveaway enter, !about, !wilderness_bot");
		};
	};
});

client.on("hosted", function (channel, username, viewers) {
	client.say(Channel, "$username with $viewers has started hosting you!");
});

client.on("notice", function (channel, msgid, message) {
	if (msgid == "no_permission") {
		console.log("Wilderness_Bot: I do not have permission to preform that command!");
	};
});

client.on("clearchat", function (channel) {
	client.say(Channel, "Chat was cleared by a moderator!")
});
