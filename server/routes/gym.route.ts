import * as gymController from '../controllers/gym.controller'

const route = require('express').Router()

route.get('/getOne/:id',gymController.getOneGymById)
route.get("/getAllGyms",gymController.getAllGyms)
route.put('/updateGym/:id',gymController.updateGym)
route.put("/verifyGym/:id",gymController.verifyGym)
route.put("/unverifyGym/:id",gymController.unVerifyGym)
export default route