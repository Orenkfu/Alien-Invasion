const config = {
    mongo_url: process.env.mongo_url || "mongodb+srv://dev:12345@cluster0-g6s07.mongodb.net/test?retryWrites=true&w=majority",
    NODE_ENV: process.env.NODE_ENV || "development",
    region: process.env.region || 'eu-west-1',
    port: process.env.PORT || 3001
}
Object.freeze(config);
module.exports = config;