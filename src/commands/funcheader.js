const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x27363E")
    .setImage('https://i.ibb.co/Gs0BHYw/regras-Torneio.png')
    .setFooter('Robin & YongFree');
    msg.channel.send({ embed });
};

    module.exports = {
        name: "regrasheader",
        help: "Retorna uma foto de sobre as regras",
        execute,
      };

