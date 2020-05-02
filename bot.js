const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzA2MTM1NjM3MTQwNzAxMTk0.Xq12GQ.sKRedNe7_NqWUgAz34U4GzJTVFk);//BOT_TOKEN is the Client Secret
