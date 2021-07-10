const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const dotenv = require('dotenv').config();
const token = process.env.BOT_TOKEN;
dotenv.load;

// Bot startup
bot.on('ready', () => {
  // Sets the game.activity
  bot.user.setActivity("Rifles vs. Greens");
  console.log('Time to kill some greenies!');
});

// Prefix for commands
const prefix = ".";

// Bot detects a newcomer to the server
bot.on('guildMemberAdd', (member) => {
  const newRole = member.guild.roles.cache.find(role => role.name === "Newfag");
  member.roles.add(newRole).catch(console.error);
  console.log(' A new user has joined the Discord server! \\o/ ');
  console.log("Done in case greentan doesn't manage to change the role, with error checking");
});

// Defaults message => msg
bot.on('message', (msg) => {
    
    // Defining the prefix
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
  
    // Command for posting random greentan memes
    if (command === "meme") {
      if (msg.member.roles.cache.some(role => role.name === 'Blue')) {
         const imageFolderLocation = "./images/";
        
        /* Original method of grabbing images, forced to commit this crime for Glitch's sake
         const blueMemes = [
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506745291509.jpg?v=1590025784976",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485916961951.png?v=1590025785210",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499051254661.gif?v=1590025785355",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1512344400357.png?v=1590025785515",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1512344031962.png?v=1590025785666",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506751413749.png?v=1590025785983",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499055682832.png?v=1590025786170",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499053729119.png?v=1590025786421",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499048697525.jpg?v=1590025786694",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485918504159.png?v=1590025786934",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589861552932.png?v=1590025787246",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589400057779.jpg?v=1590025787515",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589389784156.png?v=1590025787732",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1588994610313.jpg?v=1590025787977",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1588992641505.png?v=1590025788188",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506750426661.png?v=1590025788489",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506742819643.jpg?v=1590025788909",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506742711017.jpg?v=1590025789221",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506749376765.png?v=1590025789276",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506742385542.jpg?v=1590025789604",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499062026153.png?v=1590025789632",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499059938772.jpg?v=1590025789869",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499048865626.jpg?v=1590025790233",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485919691992.jpg?v=1590025790387",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485918190901.png?v=1590025790658",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589864294946.jpg?v=1590025790912",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485917406864.jpg?v=1590025791095",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485918914232.png?v=1590025791387",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589404012659.jpg?v=1590025791628",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589403144152.jpg?v=1590025791822",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589390835443.png?v=1590025792078",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589383334167.png?v=1590025792326",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1506742225097.jpg?v=1590025792571",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499063526345.png?v=1590025792839",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1588998300781.png?v=1590025793371",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485918305852.jpg?v=1590025794069",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485917576942.png?v=1590025794156",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589406307948.png?v=1590025794395",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499049739834.jpg?v=1590025794532",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1485917490123.png?v=1590025795510",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499061271222.jpg?v=1590025795559",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1499325888225.png?v=1590025795955",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F641793%20-%20Ace_of_Spades%20blue-tan%20comic%20green-tan.jpg?v=1590025798354",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F1589386319801.png?v=1590025800794",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2FZNfnqB3.jpg?v=1604551600297",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2FkFAtP8o.png?v=1604551643103",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2FnEZ8Ray.jpg?v=1604551643227",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2FloZFBkZ.jpg?v=1604551643625",
            "https://cdn.glitch.com/4c08fe81-d8d0-4ede-b32e-9531407d5191%2F9a8653df5390a7372fa19da7c1da2e7245ec92c2.jpg?v=1604552872451"];
         */
        
         fs.readdir(imageFolderLocation, (err, imageArray) => {

         if (err) {
            console.error('Error with the image filesystem');
         }

         let randomIndex = Math.floor(Math.random() * imageArray.length);
         let randomMeme = imageArray[randomIndex];

         msg.channel.send({
            files: ['./images/' + randomMeme]
         });
    });

    return;
    };
  };
  
    const blueRole = msg.guild.roles.cache.find(role => role.name === 'Blue');
    const newRole = msg.guild.roles.cache.find(role => role.name === 'Newfag');
    const greenRole = msg.guild.roles.cache.find(role => role.name === 'Green');
  
    // Command that sets up the Blue role
    if (command === "blue") {
          if (msg.channel.id === '712502613022605322' || '741394157343342592') {
            // Checks for insufficient permission
            if (msg.member.roles.cache.some(role => role.name === "Newfag", "Owner", "Admin", "Mod", "Dev", "Server Host", "Oldfag")) {
              msg.member.roles.add(blueRole).catch(console.error);
              msg.delete({timeout: 3000})
              console.log('Someone is now part of the Blue team!');
              msg.reply('you are now part of the Blue team!  Welcome aboard soldier! <:kkonablue:387280493139197972>')
                .then(msg => {
                  msg.delete({timeout: 5000})
                })
                .catch(console.error);
              msg.member.roles.remove(newRole);
              console.log('Removed the Newfag role');
              
            // When the member has the Blue role already
            } else if (msg.guild.roles.cache.has(blueRole)) {
                msg.delete({timeout: 3000})
                msg.reply("hey numbnuts, you're already part of the Blue team <:bluedab:386360093916004374>")
                  .then(msg => {
                  msg.delete({timeout: 5000})
                })
                .catch(console.error);
              
            // When the member has the Green role already
            } else if (msg.guild.roles.cache.has(greenRole)) {
                msg.delete({timeout: 3000})
                msg.reply("listen man, I wish you can be on our team, but you have to let the Owner know first")
                  .then(msg => {
                  msg.delete({timeout: 5000})
                })
                .catch(console.error);
              
            // When the member has no role
            } else {
                msg.delete({timeout: 3000})
                msg.reply("it seems you can't use this command, try asking the Owner about the issue")
                  .then(msg => {
                  msg.delete({timeout: 5000})
                })
                .catch(console.error);
                return;
            }
    } return;
  };
});
// Bot token
// Located in .env
bot.login(token);