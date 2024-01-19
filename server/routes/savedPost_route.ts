import { Router } from "express";
import * as savedPost from "../controllers/savedPost_controller";
const router = Router();

router.get("/:iduser",savedPost.getPost);
router.post("/save",savedPost.addSave);
router.delete("/remove/:userId/:postId",savedPost.removeSaved)


export default router