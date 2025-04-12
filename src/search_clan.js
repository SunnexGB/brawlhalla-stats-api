const axios = require('axios')
const { defurl } = require('../configuration/config')
const searchClan = (clanName) => {
  return axios.get(`${defurl}searchClan`, {
    params: {
      name: clanName
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error searching clan:', error)
    throw error
  })
}
module.exports = searchClan