import { Router } from "express";
import { addComments,getComments } from "../controller/commentController";

const router = Router();

router.post('/', addComments);
router.get('/:blogId', getComments);

export default router;

