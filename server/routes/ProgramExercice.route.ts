import  express  from "express";
import { addProgramEx,getProgramEx,getProgramExByEx } from "../controllers/ProgramExercice.controller";
const router=express.Router()


router.post('/add',addProgramEx)
router.get('/get',getProgramEx)
router.get('/get/:idEx',getProgramExByEx)
export default router