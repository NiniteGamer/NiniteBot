//Configuration
var OptionChannel = "#theninitegamer"
var Channel = "theninitegamer"
var giveawaymessage = "testing"

var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "wilderness_bot",
        password: "oauth:p3wct2amll766cmlurxvhq23krlpqc"
    },
    channels: [OptionChannel]
};

var client = new tmi.client(options);

// Connect the client to the server..
client.connect();

client.on("connected", function (address, port) {
	client.say(Channel, "Wilderness_Bot has loaded!");
	client.say(Channel, "!test");
});

client.on("subscription", function (channel, username, method) {
	client.say(Channel, "$username, has just joined the Wilderness!");
	setInterval(function(){
		console.log('Gambling Enabled for the next 2 minutes!');
	}, 10 * 12 * 1000);
});

client.on("resub", function (channel, username, months, message) {
	//
});

client.on("chat", function (channel, userstate, message, self) {
	
	if (self) return;
	
	if (message == "!testing") {
		client.say(Channel, "TESTING");
	};
	
	if (message == "!about") {
		client.say(Channel, "Welcome to my Channel");
	};
	
	if (message == "!giveaway") {
		console.log(message);
		client.say(Channel, giveawaymessage);
	};
	
	if (message == "!testsub") {
		client.say(Channel, "$message, test");
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

client.on("hosted", function (channel, username, viewers) {
	client.say(Channel, "$username with $viewers has started hosting you!");
});