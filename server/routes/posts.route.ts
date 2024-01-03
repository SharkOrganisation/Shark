import  express  from "express";
import { addpost,getGympost,getCoachpost,deletepost } from "../controllers/posts.controller";
const router=express.Router()

router.post("/add", addpost)
router.get("/Gymposts" , getGympost )
router.get("/Coachposts",getCoachpost)
router.delete("/:id",deletepost )
export default router