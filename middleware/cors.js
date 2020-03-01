// on this project, we are not particularly concerned
// with CORS.

const whitelist = ['*']

module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", whitelist.join(','));
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}