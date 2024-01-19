import * as coachController from '../controllers/coach.controller'

const route = require('express').Router()


route.get('/getOne/:id',coachController.getOneCoachById)
route.get('/getAll',coachController.getAllCoachs)
route.put('/uptadeInfoCoach/:id',coachController.updateCoach)


export default route