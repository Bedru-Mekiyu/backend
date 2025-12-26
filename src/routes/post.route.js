import { Router } from "express";
import { createPost, deletePost, getposts, updatePost } from "../controllers/post.controller.js";

const router = Router();

router.route('/create').post(createPost);
router.route('/').get(getposts);           // Changed to GET and root path (standard)
router.route('/:id').patch(updatePost);    // Removed space in :id
router.route('/:id').delete(deletePost);   // Removed space

export default router; // Changed to default export to match import style