import * as coachController from '../controllers/coach.controller'

const route = require('express').Router()


route.get('/getOne/:id',coachController.getOneCoachById)


export default route