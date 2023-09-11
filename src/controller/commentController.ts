import { Request, Response } from "express";
import Blog from '../models/blogModel';


export const addComments = async(req:Request, res:Response) => {
    try {
        const {blogId, text, user} = req.body;
        const blog = await Blog.findById(blogId);

        if (! blog) {
            return res.status(404).json({
                error:'Blog not found'
            });
        }
        const newComment = {text, user};
        blog.comments.push(newComment);
        await blog.save();
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error adding comments:', error);
        res.status(500).json({
            error:'Internal server error'
        });
    }
};