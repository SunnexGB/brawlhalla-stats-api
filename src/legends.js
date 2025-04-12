const axios = require('axios')
const { defurl } = require('../configuration/config')
const getpatch = require('../filters/Patchs.js')
const legends_info = async (playerId) => {
  const patch = await getpatch()
  return axios.get(`${defurl}playerLegends?name=${playerId}&patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing player legends info:', error)
      throw error
    })
}
module.exports = legends_info