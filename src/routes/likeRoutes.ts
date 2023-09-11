import { Router } from "express";
import { addLike } from "../controller/likeController";

const router = Router();

router.post('/', addLike);

export default router;