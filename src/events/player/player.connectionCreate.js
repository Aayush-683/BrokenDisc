module.exports = {
  name: "connectionCreate",
  execute(bot, queue, connection) {
    const embed = bot.say.baseEmbed(queue)
      .setAuthor(`${bot.user.username}`, bot.user.displayAvatarURL())
      .setDescription(`👍 Joined ${connection.channel.toString()} and 📄 bound to ${queue.metadata.channel.toString()}`);

    return queue.metadata.reply({ embeds: [embed] }).catch(console.error);
  }
};