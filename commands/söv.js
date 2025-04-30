const {MessageEmbed} = require(`discord.js`);

module.exports = {
  name: "söv",
  description: "yardım",
  execute(client, message, args) {
  

    let user = message.mentions.users.first();
          
    if (!user) return message.reply(`Kime sövmem gerektiğini söylemelisin!`);
    if (user.bot === true) return message.reply(`Kendime mi söveyim orospu evladı?`);

  var s = [
      `${user}Ananın damında hafriyat çalışması yapayım.`,
      `${user}Ananı çölde kırk yil abaza kalmiş eeşşekler siksin, 
      ananın damına otoban döşerim, Allaha küfretme allah adamın damına koyar, 
      anneni kullaniyim, at taşşağındaki kelebek bile senden daha delikanlıdır, 
      onun harman savuruya arkan kavurma kavuruyo,
       damım varsa sen koy götün varsa ben koyayım .`,
      `${user}Umarım götün pazara düşer ve o göte kimse para vermezde fakirligin ne oldugunu anlarsın.`,
      `${user}Amına kodumun kara taşaklısı!`,
      `${user}Ananın amına beton dökerim bütün mahalle abaza kalır!`,
      `${user}Seni boğaz köprüsünde sikerim, hem avrupayı seyredersin hem anadoluyu...`,
      `${user}Ana rahminde baba yarrağına göt veren ibne.`,
      `${user}Senin ebenin yoğurtlu amına hücum ediiim.`,
      `${user}Ananın amında çin ordusu manevra yapsın.`,
      `${user}Götünün sudaki yansımasını sikiiim`,
      `${user}Anneni döl çukurunda sandalsız sandal sefasına çıkartırım.`,
      `${user}Superonlinedan 200 mb web alanı alır ananın amına portal açar günde 20.000 hit çaktırırım.`,
      `${user}Ağzına salıncak kurar, sallana sallana sıçarım.adet yerine tükürdüğüm.`,
      `${user}Senin götünü rehin alır her an sikerim, değil sen swat gelse kurtaramaz.`,
      `${user}Belli bir ücret karşılığı cinsel ilişkide bulunan bayanın oğlu.. şu anda oraya ulaşabilirsem anneniz sizi doğururken kendisine yardımcı olan bayan sağlık görevlisinin cinsel organını size gösterebilirim.`,
      `${user}Demir çubuğun ucunu kızdırıp soğuk tarafını götüne sokmak lazım`,
      `${user}Senin süülaleni siikeyim piiç oğlu piiç.bütün hepinizin annasını yarrrak kampında toplayıp alayını üst üste koyup amlarını yarayım!!!ben amm suratlı satanistim, senin annanın boğazını keser cesedine tecavüz ederim! annanın ammına çam ağacı dikerim, mahalleli abaza kalır orosspu çocuğu! annanın kulaklarından tutarım dibine kadar sokarım! lan senin anani siiker siiker öldürürüm sonra tabuta koyar, tabutuna atiririm lan orosspu çocuğu!`,
      `${user}Önce bi 70lik rakı alırım o rakıyı dibinde 1-2 duble kalana kadar içerim daha sonra sülaleni o şişenin içine sokarım sallarım sallarım iyice karıştıktan sonra ters ceviririm damlayanı sikerim.`,
      `${user}Senin sülaleni seninle beraber bir şişeye doldururum,ağzını kapatırım, şişeyi çalkalarım, çalkalarım, ters çevirip aralarım şişenin ağzını, damlayana geçiririm, damlayana geçiririm..`
    ];
    var su = s[Math.floor((Math.random() * s.length))];
  
    const chaos = new MessageEmbed()
    .setDescription(`${su}`)
    .setColor("RANDOM")
    return message.channel.send(chaos)
  
  }};
