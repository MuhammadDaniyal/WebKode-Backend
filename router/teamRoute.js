const router = require('express').Router()
const teamController = require('../controllers/teamController')

/** POST METHOD */
router.route('/team').post(teamController.registerMember)

/** GET METHOD */
router.route('/team').get(teamController.getMembers)


module.exports = router