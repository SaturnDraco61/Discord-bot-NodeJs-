const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .addFields(
        { name: 'Note - Mapas e modo de jogo ➥', value: ''},

        { name: '(1) ➥', value: 'Todas as partidas do torneio serão realizadas no mapa Summoner’s Rift , com confrontos 5x5 modo alternado. As regras e condições de vitória padrão se aplicam a todos os jogos. Os organizadores e participantes do torneio não têm permissão para alterar as regras e condições de vitória do mapa/partida para criar um tipo de jogo alternativo. A seleção e os banimentos de personagens devem ser conduzidos da mesma forma que são conduzidas no cliente do jogo (Modo Competitivo).'},

        { name: '(2) ➥' , value: 'Para o funcionamento das partidas, é necessário a colaboração de todos os participantes, pois ao serem adicionados as partidas personalizadas, haverá um que irá iniciar a partida, sendo assim queremos seja honesto perante a essa responsabilidade.'},

        )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rulet04",
        help: "Retorna uma Messagem de aviso",
        execute,
      };
