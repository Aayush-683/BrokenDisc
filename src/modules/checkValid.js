const config = require("../../config.json");
const logger = require("../modules/Logger");

function checkValid() {
  const nodeV = parseFloat(process.versions.node);
  const npmV = parseFloat(process.versions.node);

  if (nodeV < 16) {
    throw Error("[ERROR]: This bot requires version 16.6 of nodejs! Please upgrade to version 16.6 or more.");
  }

  if (npmV < 7) {
    throw Error("[ERROR]: Please upgrade npm to version 7 or more.");
  }

  if (!config.botToken || config.botToken === "") {
    throw Error("[ERROR]: Bot Token must be required.");
  }

  if (!config.supportServer || config.supportServer === "") {
    logger.warn("config", "Support Server is required for discord support.");
  }

  if (!config.owners[0]) {
    logger.warn("config", "ownerId is required for bot-owner only commands.");
  }
}

checkValid();