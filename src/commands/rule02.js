const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Respeite os usuários')
    .addFields(
        { name: '(1) ➥', value: 'Qualquer tipo de desrespeito com outro membro não será tolerado;'},
        { name: '(2) ➥', value: 'Não serão tolerados ataques gratuitos e xingamentos. Discutir é diferente de insultar;' },
        { name: '(3) ➥', value: 'Não é permitido qualquer tipo de preconceito como homofobia, lesbofobia, machismo, transfobia, racismo, gordofobia, xenofobia e etc;'},
        { name: '(4) ➥', value: 'Não é permitido a publicação de qualquer tipo de conteúdo pornográfico, semipornográfico, sexualização infantil e etc;'},
        { name: '(5) ➥', value: 'Não é permitido qualquer tipo de intolerância religiosa;'}, 
        { name: '(6) ➥', value: 'Não é permitido publicar conteúdo GORE, surras, mutilação, sofrimento, etc;'},
        { name: '(7) ➥', value: 'Não é permitido conteúdo de maus-tratos com animais;'},
        { name: '(8) ➥', value: 'Proibido Brigas.'},       
    )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rules02",
        help: "Retorna uma Messagem de aviso",
        execute,
      };