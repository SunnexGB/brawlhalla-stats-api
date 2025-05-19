const axios = require('axios');
const { defurl } = require('../configuration/config');
const update_player = async (playerId) => {
  const updateUrl = `${defurl}updatep?name=${playerId}`;
  try {
    const response = await axios.get(updateUrl);
    console.log('Response:', response?.data);
    return response.data;
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};
module.exports = update_player;
