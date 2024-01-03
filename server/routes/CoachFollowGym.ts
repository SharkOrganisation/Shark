import { Router } from "express";
import * as coachFollowGym from "../controllers/CoachFollowGym";
const router = Router();

router.get("/gymFollowbyCoach/:idgym", coachFollowGym.gymFollowers);
router.get("/coachFollowerGym/:idCoach", coachFollowGym.coachGymFollowers);
router.post("/follow/:gymId/:idCoach", coachFollowGym.newFollow);
router.delete("/remove/:idgym/:idCoach", coachFollowGym.removeFollow);

export default router;
