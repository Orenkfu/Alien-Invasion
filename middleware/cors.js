// on this project, we are not particularly concerned
// with CORS. so a simple allow all will suffice. edit the whitelist array to specify specific CORS destinations, or install the CORS library.

//list of allowed addresses. ( * meaning everything is allowed ).
const whitelist = ['*']

module.exports = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", whitelist.join(','));
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}