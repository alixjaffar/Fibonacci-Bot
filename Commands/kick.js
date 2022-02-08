module.exports = {
    name: 'kick',
    description: "This command kicks people.",
    execute(message, args, Discord) {
        if(message.member.roles.cache.has('933749640497610791')) {
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`<@${member.id}> has been kicked.`);
            }else{
                message.channel.send(`<@${member.id}> could not be kicked.`);
            }
        
        } else {
            return message.channel.send('You do not have the permission to run this command.');
        }
    }
}
 