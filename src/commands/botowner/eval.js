const { codeBlock } = require("@discordjs/builders");
const { inspect } = require("util");

module.exports = {
  name: "eval",
  description: "Execute a piece of javascript code",
  category: "botowner",
  ownerOnly: true,
  usage: "<code>",
  options: [{
    name: "code",
    description: "The code you want to execute",
    type: "STRING",
    required: true
  }],
  async execute(bot, interaction) {
    await interaction.deferReply({ ephemeral: true });

    const code = interaction.options.getString("code", true);

    try {
      let evaled = await eval(code);

      const type = typeof evaled;
      evaled = inspect(evaled, {
        depth: 0,
        maxArrayLength: null
      });

      if (type === "object") evaled = JSON.stringify(evaled);

      const embed1 = bot.say.baseEmbed(interaction)
        .setTitle("Eval Command")
        .setDescription(`Eval Type: \`${type}\``);

      const embed2 = bot.say.baseEmbed(interaction)
        .setTitle("Eval Input")
        .setDescription(`${codeBlock("js", code)}`);

      const embed3 = bot.say.baseEmbed(interaction)
        .setTitle("Eval Output")
        .setDescription(`${codeBlock("js", evaled)}`);

      return interaction.editReply({ embeds: [embed1, embed2, embed3] });
    } catch (error) {
      const err = error instanceof Error ? error.message : "An unknown error occurred";

      const wrEmbed = bot.say.baseEmbed(interaction)
        .setTitle("Something went wrong")
        .setDescription(codeBlock(clean(err)));

      return interaction.editReply({ embeds: [wrEmbed] });
    }
  }
};

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
    return text;
}