const dotenv = require("dotenv")
dotenv.config({path: './config.env'})
const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    // cloud_name: process.env.CLOUD_NAME, 
    // api_key: "v0vQKVaV2lnXj7dkjrLmdX48_0A",  
    // api_secret: 434824617451519 
    cloud_name: 'emedi', 
    api_key: '434824617451519', 
    api_secret: 'v0vQKVaV2lnXj7dkjrLmdX48_0A'
  });

  module.exports = cloudinary