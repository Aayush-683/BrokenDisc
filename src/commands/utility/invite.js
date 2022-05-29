const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Invite the bot to your server",
  category: "utility",
  execute(bot, interaction) {
    const embed = bot.say.baseEmbed(interaction)
      .setAuthor({name: `${bot.user.tag}`})
      .setDescription(`[Click to invite me to your server.](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=applications.commands%20bot)`)
      .setTimestamp();
    const row = new MessageActionRow().addComponents([
      new MessageButton()
      .setLabel("Invite Link")
      .setStyle("LINK")
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=applications.commands%20bot`)
    ]);


    return interaction.reply({ ephemeral: true, embeds: [embed], components: [row] });
  }
};
