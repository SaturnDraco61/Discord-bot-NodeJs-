const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Regulamento do torneio!')
    .setDescription("Regras escritas por Robin e YongFree.")
    .setThumbnail('https://i.pinimg.com/originals/e9/51/c9/e951c992214c77307af860f7dc7db5c3.gif')
    .addFields(
        { name: 'Note - Regras do Jogador ➥', value: 'Os jogadores devem ter o espírito esportivo sempre, ou seja, todos devem seguir as regras estabelecidas pela própria desenvolvedora do jogo, Riot Games'},
        { name: '(1) ➥', value: 'Trate os oficiais do torneio, os outros jogadores e os espectadores com respeito  tenha espírito esportivo durante todo o evento.' },
        { name: '(2) ➥', value: 'Seja pontual e esteja sempre preparado para o início das partidas 15 minutos antes'},
        { name: '(3) ➥', value: 'Informe quaisquer infrações (das regras ou política do evento) que presenciar a um juiz ou organizador do torneio.'},
        { name: '(4) ➥', value: 'Deixe a sua conta League of Legends preparada no servidor regional adequado (brasileiro), separando os campeões e as runas que você pode vir a utilizar no torneio.'},
        )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rulet01",
        help: "Retorna uma Messagem de aviso",
        execute,
      };

