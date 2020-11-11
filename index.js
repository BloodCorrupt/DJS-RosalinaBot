const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const welcome = require('./welcome')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is ready!')

  welcome(client)
  command(client, 'serverinfo', (message) => {
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  })
  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!')
  })
})
client.login(process.env.BOT_TOKEN)
