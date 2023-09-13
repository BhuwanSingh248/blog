import { Router } from "express";
import { createBlog, getBlog } from "../controller/blogController";

const router = Router();

router.post('/', createBlog);
router.get('/', getBlog);

export default router