require('../bootstrap/mongo');
const mongoose = require('mongoose');

mongoose.connection.dropCollection(process.argv[2])
.then(() => {
    mongoose.disconnect();
})