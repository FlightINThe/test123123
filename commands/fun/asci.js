const discord = require("discord.js");
const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
    name: "ascii",
    aliases: [],
    category: "fun",
    usage: "ascii <text>",
    description: "Gibt den bereitgestellten Text im ASCII-Format zurück.",
    run: async (client, message, args) => {

   let text = args.join(" ");
   if(!text) {
return message.channel.send(`Bitte geben Sie Text für die ASCII-Konvertierung an!`)
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send(`Bitte geben Sie Text mit maximal 20 Zeichen ein, da die Konvertierung nicht gut ist!`)
}
 // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

    }
};