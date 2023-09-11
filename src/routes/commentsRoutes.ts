import { Router } from "express";
import { addComments } from "../controller/commentController";

const router = Router();

router.post('/', addComments);

export default router;

