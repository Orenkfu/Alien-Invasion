const express = require('express');
const config = require('../Alien-Invasion/config');
const app = express();
require('./startup')(app);
app.listen(config.port, () => {
    require('dns').lookup(require('os').hostname(), (err, add, fam) => {
        console.log(`
        Server running in address: ${add}.
        Application port: ${config.port}
        region: ${config.region}
        environment: ${config.NODE_ENV}
        current time: ${new Date().toLocaleString()}`);
    });
})