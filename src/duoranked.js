const axios = require('axios')
const { defurl } = require('../configuration/config.js')
const getpatch = require('../filters/Patchs.js')
const duoranked = async (playerId) => {
  const patch = await getpatch()
  return axios.get(`${defurl}player2v2?name=${playerId}&patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing 2v2 info:', error)
      throw error
    })
}
module.exports = duoranked