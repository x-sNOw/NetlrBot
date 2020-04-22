const Discord = require('discord.js');
exports.run = (client, message, args) =>{
	const mainhelp = new Discord.RichEmbed()
	.setColor("#228B22")
	.setTitle("**Help**")
	.addField("**>>ping**: ", "checks the bot's ping")
	.addField("**>>uptime**: ", "tells you for how much the bot was on")
	.addField("**>>limit (Mod-Only)**: ", "sets a userlimit to the voice channel you're in")
	.addField("**>>help**: ", "use cl/help <command> or just cl/help")
	.setFooter("made by x_sNOw#2447");
	
	const pinghelp = new Discord.RichEmbed()
	.setColor("#228B22")
	.setTitle("**Help**")
	.setDescription("tells you the bot's ping")
	.addField("**usage**: ", "cl/ping")
	.setFooter("made by x_sNOw#2447");

	const uptimehelp = new Discord.RichEmbed()
	.setColor("#228B22")
	.setDescription("tells you for how long the bot's been up")
	.addField("**usage**: ", "cl/uptime")
	.setFooter("made by x_sNOw#2447")

	const limithelp = new Discord.RichEmbed()
	.setColor("#228B22")
	.setTitle("**Help**")
	.setDescription("sets a userlimit to the Voice Channel you're in")
	.addField("**parameter 0**: ", "resets the voice channel's user limit to unlimited")
	.addField("**parameter**: ", "input any number and it should set the user limit to the number you inputed")
	.addField("**usage**: ", "cl/limit <parameter>")
	.setFooter("made by x_sNOw#2447")

	if(!args[0]) return message.channel.send(mainhelp)
	if(args[0] === "limit") return message.channel.send(limithelp)
	if(args[0] === "uptime") return message.channel.send(uptimehelp)
	if(args[0] === "ping") return message.channel.send(pinghelp)
	if(args[0] === "help") return message.channel.send("A-Are you serious...")
	else return message.channel.send("You did not input a correct parameter, run to cl/help to see the available parameters");
}
