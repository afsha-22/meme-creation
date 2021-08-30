require('dotenv').config();
const { createClient } = require('pexels');

//create instance of createClient from pexels with authorization through an api key
const client = createClient(process.env.pexels_api_key);

module.exports = client;