import { Router } from "express";
import { addLike,getLike } from "../controller/likeController";

const router = Router();

router.post('/', addLike);
router.get('/', getLike);
export default router;

