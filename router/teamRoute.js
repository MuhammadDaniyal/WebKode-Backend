const router = require('express').Router()
const teamController = require('../controllers/teamController')
const multer = require("multer")

const upload = multer();

/** POST METHOD */
router.route('/team').post(upload.single('profileImage'), teamController.registerMember)

/** GET METHOD */
router.route('/team').get(teamController.getMembers)


module.exports = router