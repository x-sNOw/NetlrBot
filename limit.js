exports.run = (client, message, args) =>{
	const auth = message.member;
	if (!message.guild.me.hasPermission("CONNECT")) return message.channel.send(`I need the CONNECT permission to execute this command...`);
        if (!message.guild.me.hasPermission("SPEAK")) return message.channel.send(`I need the SPEAK permission to execute this command...`);
	if (!auth.hasPermissions("MANAGE_CHANNELS")) return message.channel.send("Make sure you have the correct perms before running this command...")
	const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply('I couldn\'t find your voice channel...');
	if(args[0] === "1") return message.reply("Minimum number to set is 2");
	if(!args[0]) {
		return message.channel.send("You didn't provide a number");
	};
	if(args[0] === "0") return message.channel.send("Setting Channel to unlimited users");
	if(isNaN(args[0])) return message.channel.send("Try to input a number instead");
	voiceChannel.setUserLimit(args[0]).then(vc => console.log(`User limit has been changed to ${args} in ${vc.name} by ${auth}`)).catch(console.error);
};

