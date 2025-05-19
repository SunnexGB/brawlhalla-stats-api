const axios = require('axios');
const { defurl } = require('../configuration/config.js');
const getpatch = require('../filters/Patchs.js');
const update_player = require('./update_player');
const duoranked = async (playerId) => {
  try {
    const patch = await getpatch();
    const response = await axios.get(`${defurl}player2v2?name=${playerId}&patch=${patch}`);
    const playerData = response.data;
    const updateResult = await update_player(playerId);
    return { mainResult: playerData, updateResult };
  } catch (error) {
    console.error('Error showing 2v2 info:', error);
    throw error;
  }
};
module.exports = duoranked;