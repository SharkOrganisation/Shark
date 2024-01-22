import * as gymController from '../controllers/gym.controller'

const route = require('express').Router()


route.get('/getOne/:id',gymController.getOneGymById)
route.get("/getAllGyms",gymController.getAllGyms)
route.put('/updateGym/:id',gymController.updateGym)

export default route