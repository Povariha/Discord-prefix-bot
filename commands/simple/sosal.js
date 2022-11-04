const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {
    let name = args
    name = name.toString()
    switch (name){
        case 'egor':
            message.channel.send('<:IGOR:875608550574026853>')
            message.channel.send('<:STULnikiti:875608148155699221>')
            break
        case 'buryat':
            message.channel.send('<:BUR9T:875609060693651466>')
            message.channel.send('<:STULnikiti:875608148155699221>')
            break
        case 'duha':
            message.channel.send('<:duhaPRO:613671350682255360>')
            message.channel.send('<:STULnikiti:875608148155699221>')
            break
}}

module.exports.help = {
    name: "sosal"
}
