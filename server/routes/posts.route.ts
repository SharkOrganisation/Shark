import  express  from "express";
import { addpost,getGympost,getCoachpost } from "../controllers/posts.controller";
const router=express.Router()

router.post("/add", addpost)
router.get("/Gymposts" , getGympost )
router.get("/Coachposts",getCoachpost)

export default router