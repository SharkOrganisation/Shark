import * as userControllers from '../controllers/user.controller'

const route = require('express').Router()


route.get('/getOne/:id',userControllers.getOneUserById)
route.put('/update/:id',userControllers.updateInfoUser)

export default route