module.exports = (req, res, next) => {
    console.log(`${new Date().toISOString()} --- Request Path: ${req.path} --- Request Method: ${req.method}`);
    console.log(req.body);
    next();
}