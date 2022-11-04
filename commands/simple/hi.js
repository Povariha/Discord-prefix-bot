const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {
    let embed = {
        title: "Прив))",
        description: "егор гомосек O_o \n и сосал",
        color: 9885551,
        author: {
            name: message.guild.name
        },
    };
    message.channel.send({embeds: [embed]});
}

module.exports.help = {
    name: "hi" // Название команды
};
