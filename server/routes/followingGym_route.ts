import { Router } from "express";
import * as followingGym from "../controllers/followingGym_controller";
const router = Router();

router.post("/follow/:gymId/:userId", followingGym.newFollow);
router.delete("/remove/:idgym/:iduser", followingGym.removeFollow);
router.get("/gymFollowers/:idgym", followingGym.getFollowers);
router.get("/userFollowers/:iduser",followingGym.userFollowers)
export default router;
