import { Request, Response } from "express";
import Blog from '../models/blogModel'

export const createBlog = async (req:Request, res:Response) => {
    try {
        const {title, content, author} = req.body;
        const newBlog = new Blog({title, content, author});
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json(
            {error:'Internal Server Error'}
        );
    }
}

export const getBlog = async (req:Request, res:Response) => {
    try {
        res.json(
            await Blog.find()
            );
    } catch (error) {
        console.error("Error fetching blogs :", error)
        res.status(500).json({
            error:'Internal server error'
        })
    }
}