const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yazı"
];

module.exports = {
  name: "yazıtura",
  description: "yardım",
  execute(client, message, args) {

  message.channel.send(message.author.toString() + " Para Döndü: " + (hd[Math.floor(Math.random() * hd.length)]));
}};