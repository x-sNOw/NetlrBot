const Discord = require('discord.js');

module.exports = (client, member) =>{
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'welcome');
	
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	member.send(`Welcome to the server ${member} hope you enjoy your time here!`);
	
	let sicon = member.user.displayAvatarURL;
	let serverembed = new Discord.RichEmbed()
		.setColor("#ff0000")
		.setThumbnail(sicon)
		.addField("Here comes a new challenger!",`A new member has joined to our server ${member}`)
		.addField("Where should i start ?","You must check the rules channel.");

	channel.send(serverembed);

}
