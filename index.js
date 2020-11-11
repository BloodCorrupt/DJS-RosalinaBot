const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const welcome = require('./welcome.js')
const command = require('./command.js')

client.on('ready', () => {
  console.log('The client is ready!')

  welcome(client)
  })
  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!')
  })
  })
  command(client, 'RicoMilosSSet', (message) => {
	if (message.member.hasPermission('ADMINISTRATOR')) {
    const content = message.content.replace('/RicoMilosSSet ', '')
    // "!status hello world" -> "hello world"

    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
	}
  })
  
  command(client, 'RicoMilosStatus', (message) => {
	if (message.member.hasPermission('ADMINISTRATOR')) {
    const content = message.content.replace('/RicoMilosStatus ', '')
    // "!status hello world" -> "hello world"

    client.user.setPresence({
      status: content,
    })
	}
  })
  
  command(client, 'membercount', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })
//  command(client, 'dm', (message) => {
//	client.users.fetch(message.author).then((user) => {
//    user.send('Hello World!')
//	})
//  })
   
client.login(process.env.BOT_TOKEN)
