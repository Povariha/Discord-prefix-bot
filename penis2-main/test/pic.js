const Discord = module.require("discord.js");
const fs = require("fs");
const fetch = require('node-fetch')

module.exports.run = async (client, message, args, prefix) =>{
    res = fetch('https://some-random-api.ml/img/' + args)
        .then(res => res.json()) 
		.then(json => {
			let embed = {
                title: "Прив))",
                description: "егор гомосек O_o",
                color: 5269392,
                image: {
                    url: json.link,
                },
                author: {
                    name: message.guild.name
                },}
			message.channel.send({embeds: [embed]}); 
    })
};

module.exports.help = {
    name: 'pic' 
}