const axios = require('axios');
const { defurl } = require('../configuration/config');

const search_clan = (clanName) => {
  return axios.get(`${defurl}searchClan`, {
    params: { name: clanName }
  })
    .then(response => {
      const clanData = response.data;
      if (clanData?.id) {
        return update_clan(clanData.id)
          .then(updateResponse => ({
            searchResult: clanData,
            updateResult: updateResponse
          }));
      }
      return { searchResult: clanData };
    })
    .catch(error => {
      console.error('Error searching clan:', error);
      throw error;
    });
};
module.exports = search_clan;
