const axios = require('axios')
const { defurl } = require('../configuration/config.js')
const getpatch = require('../filters/Patchs.js')
const data2v2 = async (listTier, listRegion, page = 1, order = "desc",sort = "rating") => {
  try {
    const patch = await getpatch()
    return axios.post(`${defurl}leaderboard2v21`, {
      listTier: listTier,
      listRegion: listRegion,
      order: order,
      page: page,
      patch: patch,
      sort: sort
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error showing 2v2 leaderboard data:', error)
      throw error
    })
  } catch (error) {
    console.error('Error getting patch:', error)
    throw error
  }
}
module.exports = data2v2