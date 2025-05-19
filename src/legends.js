const axios = require('axios');
const { defurl } = require('../configuration/config');
const getpatch = require('../filters/Patchs.js');
const update_player = require('./update_player');
const legends_info = async (playerId) => {
  try {
    const patch = await getpatch();
    const response = await axios.get(`${defurl}playerLegends?name=${playerId}&patch=${patch}`);
    const playerData = response.data;
    const updateResult = await update_player(playerId);
    return { mainResult: playerData, updateResult };
  } catch (error) {
    console.error('Error showing player legends info:', error);
    throw error;
  }
};
module.exports = legends_info;
