import express from 'express';

export const programRoute = express.Router();
import {createprogram,deletedProgram,getAllProgram,getOneProgram} from "../controllers/program.controller"


programRoute.post('/create/program',createprogram)
programRoute.delete('/delete/program/:id',deletedProgram)
programRoute.get('/get/program',getAllProgram)
programRoute.get('/getOne/program/:id',getOneProgram)
