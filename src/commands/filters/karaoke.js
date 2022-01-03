module.exports = {
  name: "karaoke",
  description: "Toggles the karaoke filter.",
  category: "filters",
  async execute(bot, interaction) {
    const queue = bot.player.getQueue(interaction.guild.id);

    if (!queue || !queue.playing)
      return bot.say.errorMessage(interaction, "I’m currently not playing in this guild.");

    if (!bot.utils.modifyQueue(interaction)) return;

    await queue.setFilters({
      kakaoke: !queue.getFiltersEnabled().includes("karaoke")
    });

    return bot.say.successMessage(interaction, `${queue.getFiltersEnabled().includes("karaoke") ? "Applied" : "Removed"} the kakaoke filter.`);
  }
};