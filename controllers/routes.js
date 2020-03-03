/**
 * For a simple project, we can define our API
 * routes in a single file. For a larger API,
 * split the routers to multiple route controllers
 * and load them through this module
 */

/**
 * The routing layer will not access the DAL, but rather use controllers to expose business logic methods for each route.
 */
const controller = require('./alien-controller');
const router = require('express').Router();

//Simple app middleware to log any incoming requests.
router.all(/.*/, require('../middleware/request-logger'));


router.post('/aliens', async (req, res, next) => {
    console.log(req.body);
    let result = await controller.createAlien(req.body)
        .catch(e => {
            return res.status(500).send();
        });
    console.log(result);
    return res.status(200).send();
})

//Get all aliens - Alien types separated in key value pairs.
router.get('/aliens', async (req, res, next) => {
    let aliens = await controller.getAliensHashmap();
    console.log(aliens);
    return res.status(200).send(aliens);
})


router.get('/aliens/:paramValue', async (req, res, next) => {
    let query = req.query.param;
    let v = req.params.paramValue;
    console.log(query);
    let result = {};
    switch (query) {
        case 'parent':
            result = await controller.getByParent(v);
            break;
        case 'type':
            result = await controller.getAliensByType(v);
            break;
        case 'id':
            result = await controller.getAlienById(v);
            break;
        default:
            result = await controller.getAlienById(v);
            break;
    }
    console.log(result);
    return res.status(200).send(result);
})
module.exports = router;