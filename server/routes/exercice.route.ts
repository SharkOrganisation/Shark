import * as exerciceController from '../controllers/exercice.controller'

const route = require('express').Router()


route.get('/getOne/:name',exerciceController.getExerciceByName)


export default route