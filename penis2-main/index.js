const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"] })
const config = require('./config.json')
const fetch = require('node-fetch')
const { dir } = require('console')

client.login(config.token)
client.commands = new Discord.Collection()

fs.readdirSync("./commands/").forEach(dir => fs.readdirSync(`./commands/${dir}`)
    .forEach(file => {

    let jsfile = require(`./commands/${dir}/${file}`)
    console.log(`./commands/${dir}/${file} `)
        let props = require(`./commands/${dir}/${file}`)
        client.commands.set(props.help.name, props)
        
    }))



client.on('ready', () =>{
    console.log(`${client.user.tag} logged`);
})

client.on('messageCreate', message => {
    let prefix = config.prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return
    
    let messageArray = message.content.split(' ')
    let command = messageArray[0] 
    let args = messageArray.slice(1)
    let command_file = client.commands.get(command.slice(prefix.length))
    if (command_file) {
        command_file.run(client, message, args, prefix)}
})

