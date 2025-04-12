const axios = require('axios')
const { defurl } = require('../configuration/config')
const getpatch = require('../filters/Patchs.js')
const main_info = async (playerId) => {
  const patch = await getpatch()
  return axios.get(`${defurl}playerMain?name=${playerId}&patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing main player info:', error)
      throw error
    })
}
module.exports = main_info