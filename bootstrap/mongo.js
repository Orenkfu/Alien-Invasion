const config = require('./config');
const mongoose = require('mongoose');
console.log(config.mongo_url);
mongoose.connect(config.mongo_url)
.then(result => {
    console.log(result);
})
.catch((e) => {
    console.log(`Failed to connect to Mongo DB; Error: ${e}`);
})