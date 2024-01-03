import  express  from "express";
import { addpost,getGympost,getCoachpost,deletepost } from "../controllers/posts.controller";
const router=express.Router()

router.post("/add", addpost)
router.get("/Gymposts/:gymId" , getGympost )
router.get("/Coachposts/:coachId",getCoachpost)
router.delete("/removeposts/:id",deletepost )
export default router