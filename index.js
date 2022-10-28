const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"] })
const config = require('./config.json')
const fetch = require('node-fetch')

client.login(config.token)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) return console.log('Нет команд')

    console.log(`${jsfile.length} команд загружено`)
    jsfile.forEach((f, i) => {
        console.log(`./commands/${f} `, i)
        let props = require(`./commands/${f}`)
        client.commands.set(props.help.name, props)
    })
})

client.on('ready', () =>{
    console.log(`${client.user.tag} logged`);
})

client.on('messageCreate', message => {
    let prefix = config.prefix
    if (!message.content.startsWith(prefix) || message.author.bot) return
    
    let messageArray = message.content.split(' ')
    let command = messageArray[0] 
    let args = messageArray.slice(1)
    console.log(messageArray)
    console.log(command)
    console.log(args)
    let command_file = client.commands.get(command.slice(prefix.length))
    if (command_file) {
        console.log(command)
        command_file.run(client, message, args, prefix)}
})

