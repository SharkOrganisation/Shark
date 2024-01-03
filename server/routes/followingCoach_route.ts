import { Router } from "express";
import * as followingCoach from "../controllers/followingCoach_controller";
const router = Router();

router.post("/follow/:idCoach/:userId",followingCoach.newFollow)
router.get("/coachFollowers/:idCoach",followingCoach.coachFollowers)
router.get("/userFollowers/:iduser",followingCoach.userFollowers)
router.delete("/remove/:idCoach/:iduser",followingCoach.removeFollow)


export default router