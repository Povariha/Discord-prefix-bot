const Discord = module.require("discord.js");
const fs = require("fs");
const fetch = require('node-fetch')

module.exports.run = async (client, message, args, prefix) =>{
    let res = fetch('https://some-random-api.ml/animu/face-palm') 
		.then(res => res.json()) 
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
			message.channel.send({embeds: [embed]}); 	
    })
};

module.exports.help = {
    name: 'facepalm' 
}