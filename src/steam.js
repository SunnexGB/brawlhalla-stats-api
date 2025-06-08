const fs = require('fs');
const axios = require('axios');
const { steamapiurl } = require('../configuration/config');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../configuration/.env') });
const readline = require('readline');
const askapisteam = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question('Please enter your Steam API key: ', (apiKey) => {
      rl.question('Do you want to save this API key in your .env file? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
          fs.appendFileSync('.env', `\nSTEAM_API_KEY=${apiKey}`, 'utf8');
        }
        rl.close();
        resolve(apiKey);
      });
    });
  });
};
const Sreamidm = async (vanity) => {
  let apiKey = process.env.STEAM_API_KEY;

  if (!apiKey) {
    apiKey = await askapisteam();
  }
  try {
    const url = `${steamapiurl}${apiKey}&vanityurl=${vanity}`;
    const response = await axios.get(url);
    const data = response.data;

    if (data.response.success === 1) {
      return data.response.steamid;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw error;
  }
};
const steambhdata = async (steamId) => {
  try {
    const brawlhallaUrl = `https://api.brawlhalla.fr/angularwebapp2/playerMainSteam?name=${steamId}`;
    const response = await axios.get(brawlhallaUrl);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching Brawlhalla data: ' + error.message);
  }
};
module.exports = { Sreamidm, steambhdata };

//Forget it, i wrote first part code and then went to drink tea and forgot about other part code. It will be like a hint for curious people.