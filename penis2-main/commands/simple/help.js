const Discord = module.require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args, prefix) => {
    let embed = {
        title: "help, список доступных команд",
        description: "!ping \n !hi \n !sosal + [egor : buryat : duha] \n !pic + [bird : cat : dog : fox : kangaroo : koala : panda : racoon] \n !gif + [face-palm : hug : pat : wink] \n !game + [rock : paper : scissors]",
        color: 16777215,
        author: {
            name : "Penis2 bot"
        },
        image : {
            url : "https://i.pinimg.com/originals/b8/9e/da/b89eda355c80aef91b861a70d1468291.jpg"
        }
    }
    message.channel.send({embeds: [embed]})
}

module.exports.help = {
    name: "help" // Название команды
};
