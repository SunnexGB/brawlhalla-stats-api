const axios = require('axios');
const { defurl } = require('../configuration/config');
const update_player = require('./update_player');
const search_player = async (nickname, listTier, listRegion) => {
  try {
    const response = await axios.post(`${defurl}searchPlayer1`, {
      listTier,
      listRegion,
      search: nickname
    });
    const playerData = response.data;
    if (playerData?.id) {
      const updateResult = await update_player(playerData.id);
      return {
        searchResult: playerData,
        updateResult
      };
    }
    return { searchResult: playerData };
  } catch (error) {
    console.error('Error searching player:', error);
    throw error;
  }
};
module.exports = search_player;
