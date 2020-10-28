const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .addFields(
        { name: '(3) ➥' , value: 'Comunicar tudo o que for preciso aos membros de sua equipe.'},

        { name: '(4) ➥', value: 'Representar as opiniões da equipe como um todo, de modo imparcial. Uma vez iniciado o torneio, o capitão da equipe só poderá ser alterado com a permissão dos oficiais do campeonato, geralmente apenas nos casos em que  o capitão atual não puder mais participar do torneio. '}
        )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rulet05",
        help: "Retorna uma Messagem de aviso",
        execute,
      };



