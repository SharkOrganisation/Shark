import * as gymController from '../controllers/gym.controller'

const route = require('express').Router()


route.get('/getOne/:id',gymController.getOneGymById)

export default route