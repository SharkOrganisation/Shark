import { Router } from "express";
import * as userPlan from "../controllers/UserPlan_controller";
const router = Router();

router.get("/:userId", userPlan.getUserPlan);
router.post("/sendPlan",userPlan.getUserPlan);
router.put("/:id",userPlan.updatePlan);



export default router