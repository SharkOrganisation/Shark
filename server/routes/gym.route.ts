import * as gymController from '../controllers/gym.controller'

const route = require('express').Router()

route.get('/getOne/:id',gymController.getOneGymById)
route.get("/getAllGyms",gymController.getAllGyms)
route.put('/updateGym/:id',gymController.updateGym)
route.get('/getByRegion/:region',gymController.getGymsByRegion)

export default route