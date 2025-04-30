const { MessageEmbed } = require("discord.js");
const sendError = require("../util/chaosbotutil");

module.exports = {
        name: "döngülist",
        description: "Toggle music loop",
  execute (client, message, args) {
        const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Loop is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        };
        return sendError("There is nothing playing in this server.", message.channel);
    },
};
