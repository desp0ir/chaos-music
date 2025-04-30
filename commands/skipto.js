const { canModifyQueue } = require("../util/chaosbotutil");

module.exports = {
  name: "şunaatla",
  aliases: ["st"],
  description: "seçilen sayıdakine atlar",
  execute(message, args) {
    if (!args.length) return message.reply(`kullanım: ${message.client.prefix}${module.exports.name} <liste no>`);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Liste yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.songs = queue.songs.slice(args[0] - 2);
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ şu şarkıya atladı ${args[0] - 1}`).catch(console.error);
  }
};