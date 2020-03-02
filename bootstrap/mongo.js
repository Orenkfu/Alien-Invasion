const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(config.mongo_url, {useUnifiedTopology: true, useNewUrlParser: true })
.then(result => {
    console.log("Mongoose client successfully connected to database driver.");    
})
.catch((e) => {
    console.error(`Failed to connect to Mongo DB; Error: ${e}`);
})