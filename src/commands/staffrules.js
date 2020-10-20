const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Regras do server;')
    .setDescription("Leia atentamente as regras do servidor e as siga, caso contrário você será expulso do torneio!")
    .addFields(
        { name: '(1) ➥', value: 'Denúncias sem fundamentos não serão aceitadas. (Deve-se haver provas, como prints ou gravações)'},
        { name: '(2) ➥', value: 'Proibido ficar marcando a staff sem motivo.' },
    )
    
    msg.channel.send({ embed });
};


    module.exports = {
        name: "aviso",
        help: "Retorna uma Messagem de aviso",
        execute,
      };