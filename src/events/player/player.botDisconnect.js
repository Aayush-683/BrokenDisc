module.exports = {
  name: "botDisconnect",
  execute(bot, queue) {
    return bot.say.queueMessage(queue, "Music has been stopped as I was disconnected from the voice channel.", "RED");
  }
};