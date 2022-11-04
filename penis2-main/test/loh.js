/*class Manager {
    constructor(huy) {
        this.huy = huy
    }

    changeCarName(name) {
        this.name = name;
    }
}

class Car extends Manager {
    constructor(color, name) {
        super();
        this.color = color;
        this.name = name;
    }

    log() {
        console.log(this.name);
    }
}

let redCar = new Car("blue", "huy");
redCar.log();
redCar.changeCarName("egor");
redCar.log();
-------------------------------------------------------------------
fs.readdir('./commands', (err, files) => {
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) return console.log('Нет команд')

    jsfile.forEach((f, i) => {
        console.log(`./commands/${f} `)
        let props = require(`./commands/${f}`)
        client.commands.set(props.help.name, props)
    })
    console.log(`${jsfile.length} команд загружено`)
})
-------------------------------------------------------------------
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"] })
const config = require('./config.json')
const fetch = require('node-fetch')
const { dir } = require('console')

fs.readdirSync("./commands/").forEach(dir => fs.readdirSync(`./commands/${dir}`)
    .forEach(file => {

    let jsfile = require(`./commands/${dir}/${file}`)
    console.log(jsfile)
    console.log(`./commands/${dir}/${file} `)
        let props = require(`./commands/${dir}/${file}`)
        client.commands.set(props.help.name, props)
        console.log(`${jsfile.length} команд загружено`)
    }))
    console.log(`${jsfile.length} команд загружено`)
-------------------------------------------------------------------    
    fs.readdirSync("./commands/").forEach(dir => fs.readdirSync(`./commands/${dir}`)
    .forEach(file => {

    let jsfile = require(`./commands/${dir}/${file}`)
    console.log(jsfile)
    console.log(`./commands/${dir}/${file} `)
        let props = require(`./commands/${dir}/${file}`)
        client.commands.set(props.help.name, props)
        console.log(`${jsfile.length} команд загружено`)
    }))
-------------------------------------------------------------------    
    */
