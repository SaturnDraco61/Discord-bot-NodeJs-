const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .addFields(
        { name: 'Note - Regras do Capitão ➥', value: 'Todas as equipes devem escolher um jogador para desempenhar o papel de capitão da equipe. Os capitães representarão a equipe perante os oficiais do torneio. Além das responsabilidades comuns a todos os jogadores, os capitães devem:'},
        { name: '(1) ➥', value: 'Comunicar-se com os oficiais do torneio em nome da equipe.' },
        { name: '(2) ➥', value: 'Dar a palavra final nas decisões da equipe durante o torneio.'},
        { name: '(3) ➥', value: 'Comunicar tudo o que for preciso aos membros de sua equipe.'},
        { name: '(4) ➥', value: 'Representar as opiniões da equipe como um todo, de modo imparcial. Uma vez iniciado o torneio, o capitão da equipe só poderá ser alterado com a permissão dos oficiais do campeonato, geralmente apenas nos casos em que  o capitão atual não puder mais participar do torneio.'}
        )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rulet03",
        help: "Retorna uma Messagem de aviso",
        execute,
      };
