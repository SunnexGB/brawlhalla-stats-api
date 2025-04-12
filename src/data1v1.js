const axios = require('axios')
const { defurl } = require('../configuration/config.js')
const getpatch = require('../filters/Patchs.js')
const data1v1 = async (listTier, listRegion, page = 1, order = "desc",sort = "rating") => {
  try {
    const patch = await getpatch()
    return axios.post(`${defurl}leaderboard0.2`, {
      listTier: listTier,
      listRegion: listRegion,
      order: order,
      page: page,
      patch: patch,
      sort: sort
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing 1v1 leaderboard data:', error)
      throw error
    })
  } catch (error) {
    console.error('Error getting patch:', error)
    throw error
  }
}
module.exports = data1v1