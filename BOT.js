const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('hi!');
  }
  if (msg.content === 'ไก่') {
    msg.reply('มึงไก่! กูโหด');
  }
  if (msg.content === `LOL`) {
	msg.reply('NOOB');
   }
  if (msg.content === '!bot') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=594440696866275328&permissions=8&scope=BOT');
  }
  if (msg.content === 'ขอscr') {
    msg.reply('ไม่ให้');
  }
});

client.login('NTk0NDQwNjk2ODY2Mjc1MzI4.XYzHvw.G09im4h1zrk5fs4vTMrTTX-cvZE');