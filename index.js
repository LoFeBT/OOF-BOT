var Discord = require('discord.js');
var bot = new Discord.Client();
var isReady = true;

bot.on('message', message => {
  if (isReady && message.content === 'OOF')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('./OOF.mp3');
     dispatcher.on("end", end => {
       setTimeout(function(){
          voiceChannel.leave()
          }, 500);       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});




bot.login(process.env.BOT_TOKEN);
