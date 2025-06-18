const router = require('express').Router()
const authController = require('../controllers/authController')

// register
router.post('/register', authController.registerController)
// login
router.post('/login',    authController.loginController)
// 🔴 google login
router.post('/google',   authController.googleLoginController)

module.exports = router
