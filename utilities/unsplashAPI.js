const unsplash = require("unsplash-js");
const axios = require("axios");


const accessKey = `${process.env.UNSPLASH_ACCESS_KEY}`;
const apiUrl = 'https://api.unsplash.com';

module.exports.getPhotos = async (searchQuery) => {
    const response = await axios.get(`${apiUrl}/search/photos`, {
        headers: {
            'Authorization': `Client-ID ${accessKey}`
        },
        params: {
            query: searchQuery,
            orientation: 'landscape', // Set to 'portrait' for vertical photos,
        }
    });
    const photos = response.data.results;
    return photos;
}
