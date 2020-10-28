const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Funcionamento da partida - Estrutura:')
    .setDescription('Para que tudo ocorra de maneira pratica e sem conflitos, é importante que todos de cada equipe estejam conectados no servidor do discord. Lembrando que por ser remoto o respeito e colaboração é importante, para que todos possam se divertir.')
    .setThumbnail('https://i.pinimg.com/originals/08/13/c3/0813c3bdf00c45d9d89fbe5b087398b6.gif')
    .addFields(
        { name: '(1) Do começo', value: 'O torneio contará com um número mínimo de equipes participantes igual a 6;'},
        { name: '(2) Divisão e jogo', value: 'As partidas do torneio estão divididas entre os dias do evento, sendo que todas as partidas iniciais até a etapa semifinal serão compostas de somente 1 jogo;' },
        { name: '(3) Em seus lugares?', value: 'As partidas começaram com os administradores adicionando as equipes na sala personalizada em seus respectivos lugares, ou seja, cada equipe do seu lado (direito ou esquerdo);'},
        { name: '(4) Vamos ao duelo!', value: 'A guardar o a liberação de inicio da partida, que será alertado pelo Robin no chat “iniciar-partida” do discord;'},
        { name: '(5) GG!', value: 'Os capitães de cada equipe têm a responsabilidade de informar os organizadores do torneio, sobre o início da partida, ou seja, quando todos estiverem em campos, mandar um alert “todos em campo” no chat de sua equipe no discord. O mesmo vale para quando terminar a partida, enviar um alert com o aviso “partida-vitória”, caso o seu time for o vitorioso e “partida-derrota” caso seu time for o derrotado.'}
    )
    .setFooter('Robin & YongFree');
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "game01",
        help: "Retorna uma foto de sobre as regras",
        execute,
      };
