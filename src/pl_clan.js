const axios = require('axios');
const { defurl } = require('../configuration/config');
const getpatch = require('../filters/Patchs.js');
const update_clan = require('./update_clan');
const clan_list = async (clanid) => {
  try {
    const patch = await getpatch();
    const response = await axios.get(`${defurl}clanPlayers?name=${clanid}&patch=${patch}`);
    const clanPlayersData = response.data;
    const updateResult = await update_clan(clanid);
    return { clanPlayersData, updateResult };
  } catch (error) {
    console.error('Error showing clan player info:', error);
    throw error;
  }
};
module.exports = clan_list;
