/*const Discord = module.require("discord.js");
const fs = require("fs");
const fetch = require('node-fetch')

module.exports.run = async (client, message, args, prefix) =>{
    let res = fetch('https://some-random-api.ml/animu/' + args) //Извлекаем json от сайта
		.then(res => res.json()) // Просматриваем текст
		.then(json => {
			let embed = {
                title: "Прив))",
                description: "егор гомосек O_o",
                color: 15062253,
                Image: {
                    url: json.link,
                },
                author: {
                    name: message.guild.name
                },}
			message.channel.send({embeds: [embed]}); // Отсылаем сообщение	
    })
};

module.exports.help = {
    name: 'gif' // название команды
}*/