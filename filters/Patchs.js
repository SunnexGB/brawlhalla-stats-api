const axios = require('axios');
const { patch } = require('../configuration/config.js');

const getpatch = async () => {
    try {
        const response = await axios.get(patch);
        const patches = response.data;

        const currentpatch = patches.find(patch => patch.current);
        if (!currentpatch) {
            throw new Error('No current patch found');
        }

        return currentpatch.id;
    } catch (error) {
        console.error('Error showing current patch:', error);
        throw error;
    }
};

getpatch().catch(error => {
    console.error('Error get patch:', error);
});

module.exports = getpatch;
