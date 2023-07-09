const router = require('express').Router()
const registationController = require('../controllers/registationController')

/** POST METHOD */
router.route('/registeration').post(registationController.teamRegisteration)

/** GET METHOD */
router.route('/registeration').get(registationController.getAllTeams)


module.exports = router