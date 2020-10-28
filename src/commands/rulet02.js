const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Regras do server - Administração;')
    .setDescription("Leia atentamente as regras do servidor e as siga, caso contrário você será expulso do torneio!")
    .addFields(
        { name: 'Note - Regras de Equipe ➥', value: 'Cada equipe deve ter cinco integrantes oficiais e opcionalmente 1 substituto\nCada jogadorsó poderá estar inscrito em uma única equipe. A equipe poderá realizar a substituição de jogador apenas antes de cada início de jogo, devendo avisar a organização sobre a substituição. Além das responsabilidades comuns a todas as equipes, os integrantes devem:'},
        { name: '(1) ➥', value: ' Informar os nomes, nicknames.' },
        { name: '(2) ➥', value: 'Estar presentes no servidor discord com antecedência ao início da partida.'}
        )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rulet02",
        help: "Retorna uma Messagem de aviso",
        execute,
      };
