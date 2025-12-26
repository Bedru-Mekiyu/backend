import { Router } from "express";
import { createPost, deletePost, getposts, updatePost } from "../controllers/post.controller.js";

const router=Router();


router.route('/create').post(createPost)
router.route('/getPosts').post(getposts)
router.route('/update/:id ').patch(updatePost)
router.route('/delete/:id ').delete(deletePost)

export{router}