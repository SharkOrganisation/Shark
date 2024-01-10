import  express  from "express";
import { addProgramEx,getProgramEx } from "../controllers/ProgramExercice.controller";
const router=express.Router()


router.post('/add',addProgramEx)
// router.get('/get/:idEx',getProgramExByEx)
router.get('/getOne/:id',getProgramEx)
export default router