import  express  from "express";
import {  addReview,getGymReview } from "../controllers/review.controller";
const router=express.Router()

router.post("/add", addReview)
router.get("/get/:id" , getGymReview )

export default router