const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Regras do server - Administração;')
    .setDescription("Leia atentamente as regras do servidor e as siga, caso contrário você será expulso do torneio!")
    .addFields(
        { name: 'Note - Mapas e modo de jogo ➥', value: ''},

        { name: '(1) ➥', value: 'Todas as partidas do torneio serão realizadas no mapa Summoner’s Rift , com confrontos 5x5 modo alternado. As regras e condições de vitória padrão se aplicam a todos os jogos. Os organizadores e participantes do torneio não têm permissão para alterar as regras e condições de vitória do mapa/partida para criar um tipo de jogo alternativo. A seleção e os banimentos de personagens devem ser conduzidos da mesma forma que são conduzidas no cliente do jogo (Modo Competitivo).' },

        { name: '(2)', value: 'Para o funcionamento das partidas, é necessário a colaboração de todos os participantes, pois ao serem adicionados as partidas personalizadas, haverá um que irá iniciar a partida, sendo assim queremos seja honesto perante a essa responsabilidade.'},

        { name: '(3)', value: 'Comunicar tudo o que for preciso aos membros de sua equipe.'},

        { name: '(4)', value: 'Representar as opiniões da equipe como um todo, de modo imparcial. Uma vez iniciado o torneio, o capitão da equipe só poderá ser alterado com a permissão dos oficiais do campeonato, geralmente apenas nos casos em que  o capitão atual não puder mais participar do torneio.'}
        )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rulet04",
        help: "Retorna uma Messagem de aviso",
        execute,
      };
