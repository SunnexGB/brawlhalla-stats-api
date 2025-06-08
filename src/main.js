const axios = require('axios');
const { defurl } = require('../configuration/config');
const getpatch = require('../filters/Patchs.js');
const update_player = require('./update_player');
const main_info = async (playerId) => {
  try {
    const patch = await getpatch();
    const [mainRes, legendsRes] = await Promise.all([
      axios.get(`${defurl}playerMain?name=${playerId}&patch=${patch}`),
      axios.get(`${defurl}playerLegends?name=${playerId}&patch=${patch}`)
    ]);
    const playerData = mainRes.data;
    const legendsData = legendsRes.data;
    const totalsec = legendsData.reduce(
      (sum, legend) => sum + (legend.matchtime || 0),
      0
    );
    const hours   = Math.floor(totalsec / 3600);
    const minutes = Math.floor((totalsec % 3600) / 60);
    const seconds = totalsec % 60;

    const inGame = `${hours}h ${minutes}m ${seconds}s`;
    const updateresult = await update_player(playerId);
    return {
      mainResult: playerData,
      legends:    legendsData,
      inGame,
      updateresult
    };
  } catch (error) {
    console.error('Error showing main player info:', error);
    throw error;
  }
};
module.exports = main_info;