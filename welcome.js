module.exports = (client) => {
  const channelId = '762389456266854400' // welcome channel
  const targetChannelId = '762377363257557006' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Hey <@${
      member.id
    }>, welcome to Tetracita! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()} and have some fun with us!`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}
