const axios = require('axios');
const { defurl } = require('../configuration/config');
const getpatch = require('../filters/Patchs.js');
const topcharacter = async (characterName) => {
  try {
    const patch = await getpatch();
    
    const legendstatsresponse = await axios.get(`${defurl}legendstats?legend=${characterName}&patch=${patch}`);
    const legendid = legendstatsresponse.data.legend_id;

    const bestplayersresponse = await axios.get(`${defurl}legendTop?name=${legendid}&patch=${patch}`);
    
    return bestplayersresponse.data;
  } catch (error) {
    console.error('Error showing best players info:', error);
    throw error;
  }
};

module.exports = topcharacter;
