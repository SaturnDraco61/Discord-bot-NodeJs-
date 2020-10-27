
// Dependencias
const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const client = require('discord.js');


dotenv.config(); // Dotenv - token e prefix

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((filename) => filename.endsWith(".js")); // conexão com os comandos

  for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
  }

console.log(bot.commands); // fim da conexão com os comandos

bot.login(process.env.TOKEN); // login com o token



bot.on("ready", function () {
  bot.user.setActivity('Apenas mensagens | by: Robin');
   console.log(`Estou conectado como ${bot.user.username}`);
 });



  //Verificação de status do servidor



  // carregamento do prefix
  bot.on("message", (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;
  
    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift();
  
    try {
      bot.commands.get(command).execute(bot, msg, args);
    } catch (e) {
      console.error(e);
      return msg.reply("Ops! Eu ainda não conheço esse comando!");
    }
  });

 