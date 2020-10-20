const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x27363E")
    .setImage('https://i.ibb.co/DprCvZC/regrasserver2.png')
    .setFooter('Robin & YongFree');
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rules01",
        help: "Retorna uma Messagem de aviso",
        execute,
      };