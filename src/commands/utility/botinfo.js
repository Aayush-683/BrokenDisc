const config = require("../../../config.json");
const { version: djsVersion, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "botinfo",
  description: "Shows info about the bot",
  category: "utility",
  async execute(bot, interaction) {
    const util = bot.utils;
    const uptime = util.formatDuration(bot.uptime);
    const createdAt = `<t:${bot.user.createdTimestamp}:R>`
    const users = bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0);

    const embed = bot.say.baseEmbed(interaction)
      .setAuthor(`${bot.user.username}’s Information`, bot.user.displayAvatarURL())
      .addField("General Info",
        `**Bot Id:** ${bot.user.id}
        **Bot Tag:** ${bot.user.tag}
        **Created At :** ${createdAt}
        **Developer:** [•OofyOofOof•#2018](https:\/\/youtube.com\/c\/BlackKnight683)
        **Github Repo:** __[BlackKnight683/BrokenDisc](https:\/\/github.com\/BlackKnight683\/BrokenDisc)__
        **Prefix:** \/`
      )
      .addField("Bot Stats",
        `**Users:** ${util.formatNumber(users)}
        **Servers:** ${util.formatNumber(bot.guilds.cache.size)}
        **Channels:** ${util.formatNumber(bot.channels.cache.size)}
        **Command Count:** ${util.formatNumber(bot.commands.size)}`
      )
      .addField("System Info",
        `**RAM Usage:**  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
        **Bot Uptime:** ${uptime}
        **Node Version:** ${process.version}
        **Platform:** ${util.toCapitalize(process.platform)}`
      );

    const button1 = new MessageButton()
      .setLabel("Support")
      .setStyle("LINK")
      .setURL(`${config.supportServer}`);

    const button2 = new MessageButton()
      .setLabel("Invite")
      .setStyle("LINK")
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=applications.commands%20bot`);

    const row = new MessageActionRow().addComponents([button1, button2]);


    return interaction.reply({ ephemeral: true, embeds: [embed], components: [row] });
  }
};
