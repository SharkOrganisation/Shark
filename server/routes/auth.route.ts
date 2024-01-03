import * as authController from '../controllers/auth.controller'


const route = require('express').Router()

route.post('/addUser/:role',authController.signUp)

export default route