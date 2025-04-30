const Discord = require('discord.js')
const {PREFIX} = require('../config.json')
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message, args) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\`${PREFIX}oynat <şarkı-adı>\` : **Bir Şarkıyı Oynatır.**
\`${PREFIX}atla\` : **Sıradaki Şarkıyı atlar.**
\`${PREFIX}döngü\` : **O Anki şarkıyı Hep tekrarlar.**
\`${PREFIX}durdur\` : **O anki Şarkıyı Durdurur.**
\`${PREFIX}devam\` : **Duran Şarkıyı Devam Ettirir.**
\`${PREFIX}sıra\` : **O Anki Sırayı Gösterir.**
\`${PREFIX}np\` : **O Anki Oynatılan Şarkıyı Söyler.**
\`${PREFIX}karıştır\` : **O Anki Oynatılan Listeyi Karar.**
\`${PREFIX}susknk\`: **Şarkıyı Kapatıp Odadan Çıkar**
\`${PREFIX}döngülist\`: **Şarkıyı Kapatıp Odadan Çıkar**
\`${PREFIX}şunaatla\`: **Numarasını yazdığınız şarkıya atlar**

`)
                      )    
}
}
