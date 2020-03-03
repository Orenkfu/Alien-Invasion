const express = require('express');
const config = require('./config');
const app = express();
require('./startup')(app);
app.use(express.static('views'));
app.listen(config.port, () => {
    require('dns').lookup(require('os').hostname(), (err, add, fam) => {
        console.log(`Server running in address: ${add}.
Application port: ${config.port}
Region: ${config.region}
Environment: ${config.NODE_ENV}
Current time: ${new Date().toLocaleString()}`);
    });
});