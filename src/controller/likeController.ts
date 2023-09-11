import { Request, Response } from "express";
import Like from '../models/likeModel';

export const addLike = async (req:Request, res:Response) => {
    try {
        const {blogId, user} = req.body;
        const newLike = new Like({
            blog:blogId, user
        });
        await newLike.save();
        res.status(201).json(newLike)
    } catch (error) {
        console.error('Error adding like:', error);
        res.status(500).json({error:'internal server error'});
    }
};

