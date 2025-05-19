const axios = require('axios');
const { defurl } = require('../configuration/config');
const update_clan = (clanid) => {
  const updateClanUrl = `${defurl}updatec?name=${clanid}`;
  return axios.get(updateClanUrl)
    .then(response => {
      console.log('Response', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Update error:', error);
      throw error;
    });
};
module.exports = update_clan;
