/**
 * For a simple project, we can define our API
 * routes in a single file. For a larger API,
 * split the routers to multiple route controllers
 * and load them through this module
 */
const db = require('./db/mock-db');
const realDb = require('./db/mongo-dal');
const router = require('express').Router();
router.all(/.*/, (req, res, next) => {
    console.log(`${new Date().toISOString()} --- Request Path: ${req.path}`);
    next();
});

router.post('/aliens', async (req, res, next) => {
    let result = await realDb.createAlien(req.body)
    .catch( e => {
        return res.status(500).send();
    });
    console.log(result);
    return res.status(200).send();
    
})
router.get('/aliens', (req, res, next) => {
    
    console.log("HEy aliens");
    return res.status(200).send({ 
        commanders: db["alien-commanders"],
        warriors: db["alien-warriors"],
        chiefs: db["alien-chief-commanders"]
    });
})
module.exports = router;