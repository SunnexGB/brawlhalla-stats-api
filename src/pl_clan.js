const axios = require('axios')
const { defurl } = require('../configuration/config')
const getpatch = require('../filters/Patchs.js')
const clan_list = async (clanid) => {
  const patch = await getpatch()
  return axios.get(`${defurl}clanPlayers?name=${clanid}&patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing clan player info:', error)
      throw error
    })
}
module.exports = clan_list