const router = require('express').Router()
const registationController = require('../controllers/registationController')

/** POST METHOD */
router.route('/register').post(registationController)

/** GET METHOD */
router.route('/register-users').get()


module.exports = router