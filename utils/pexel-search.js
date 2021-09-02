//packages required
require('dotenv').config();
const { createClient } = require('pexels');

//create instance of createClient from pexels with authorization through an api key
const client = createClient(process.env.pexels_api_key);

//returns an array of photo URL's
//required query string input when calling: getImages('string')
const getImages = async (query) => {

    const request = await client.photos.search({query});

    return request.photos;
 
};


//returns one photo
const getOneImage = async (imageID) => {
    const request = await client.photos.show({ id: imageID });
    return request;
 }

module.exports = { getOneImage, getImages };