const axios = require('axios')
const { defurl } = require('../configuration/config')
const searchPlayer = (nickname, listTier, listRegion) => {
  return axios.post(`${defurl}searchPlayer1`, {
    listTier: listTier,
    listRegion: listRegion,
    search: nickname
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Error searching player:', error)
    throw error
  })
}
module.exports = searchPlayer