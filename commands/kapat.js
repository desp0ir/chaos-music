module.exports = {
        name: 'susknk',
   async execute(client, message, args) {
       const { channel } = message.member.voice;
       const serverQueue = message.client.queue.get(message.guild.id);
        try {
            if (!channel) return message.channel.send('**Sese gir!**');
            if (!channel.permissionsFor(bot.user).has(['CONNECT', 'SPEAK', 'VIEW_CHANNEL'])) {
                return message.channel.send("**Eksik perm!**");
            };
            if (!message.guild.me.voice.channel) return message.channel.send('❌ **ses kanalında değilim!**');

            if (serverQueue || serverQueue.playing) {
                serverQueue.connection.dispatcher.end();
                 channel.leave();
                return message.channel.send("**✅ kanaldan çıktı!**");
            } else {
                await channel.leave();
                return message.channel.send("**✅ kanaldan çıktı!**");
            }
        } catch {
            serverQueue.connection.dispatcher.end();
            await channel.leave();
            return message.channel.send("**✅ kanaldan çıktı!**");
        }
    }
}