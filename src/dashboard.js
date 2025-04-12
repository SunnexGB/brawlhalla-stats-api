const axios = require('axios')
const { defurl } = require('../configuration/config.js')
const getpatch = require('../filters/Patchs.js')
const char_winrate = async () => {
  const patch = await getpatch()
  return axios.get(`${defurl}tauxVictoire?patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing character winrates:', error)
      throw error
    })
}
const playrate = async () => {
  const patch = await getpatch()
  return axios.get(`${defurl}tauxJeux?patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing character playrates:', error)
      throw error
    })
}
const variation_hero = async () => {
  const patch = await getpatch()
  return axios.get(`${defurl}variationHebdo?patch=${patch}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing weekly winrate changes:', error)
      throw error
    })
}
module.exports = { char_winrate, playrate, variation_hero }
