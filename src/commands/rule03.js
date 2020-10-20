const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
    .setColor("0x410000")
    .setTitle('Divulgações e Vendas')
    .addFields(
        { name: '(1) ➥', value: 'Não é permitido a divulgação de outros grupos de discord neste grupo ou nos status;'},
        { name: '(2) ➥', value: 'Não é permitido a divulgação em massa de qualquer coisa no privado de membros;' },
        { name: '(3) ➥', value: 'Não é permitido a divulgação de links para sites que contém Malware/vírus, clickbait ou tenha a intenção de prejudicar o coleguinha;'},
        { name: '(4) ➥', value: 'Não é permitido a divulgação de grupos (Whatsapp, Facebook...) e Perfis privados (Tipo blogueirinha);'},
        { name: '(5) ➥', value: 'Não é permitido a divulgação de conteúdo relacionado a Cheats, Hackers ou programas de terceiros;'}, 
        { name: '(6) ➥', value: 'Não divulgar vários links, apenas um por vez'},
    )
    
    msg.channel.send({ embed });
};

    module.exports = {
        name: "rules03",
        help: "Retorna uma Messagem de aviso",
        execute,
      };