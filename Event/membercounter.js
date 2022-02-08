module.exports = async (client) =>{
    const guild = client.guilds.cache.get('933749640103333899');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('937531629801463828');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 10000);
}