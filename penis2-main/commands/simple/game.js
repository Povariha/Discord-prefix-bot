const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix) => {
    let gameWays = ['rock', 'paper', 'scissors'];
        const move = gameWays[Math.round(Math.random() * 3)]
        const _move = move.toString()
        const _args = args.toString()
        console.log(_move, _args)
            if (_args === _move){
                message.channel.send(move +', ничья')
            }
            else if ((_args === 'paper' && _move === 'rock') || (_args === 'scissors' && _move === 'paper') || (_args === 'rock' && _move === 'scissors')){
                message.channel.send(move +', я проиграл я ибал твою мать')
            }
            else if ((_args === 'rock' && _move === 'paper') || (_args === 'paper' && _move === 'scissors') || (_args === 'scissors' && _move === 'rock')){
                message.channel.send(move +', я выиграл я ибал твою мать')
            }
}

module.exports.help = {
    name: "game" // Название команды
};

