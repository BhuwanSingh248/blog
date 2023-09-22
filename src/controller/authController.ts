import express, {Request, Response} from 'express';
import bcrypt from 'bcrypt';

import User from '../models/user';
import JWT from '../utils/jwt';

export const login = async (req:Request, res:Response) => {
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username});
        if (!user){
            return res.status(401).json({message:'Authentication Failed'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({message:"Authentication Failed"});
        }
        const token = JWT.generateToken({userId:user._id});
        res.status(200).json({token})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Authentication Failed"});
    }
};

export const register = async (req:Request, res:Response) => {
    const {username, password, name, email} = req.body;
    try {
        const existingUser = await User.findOne({username});
        console.log(existingUser);
        if (existingUser){
            return res.status(400).json({message:"Username already exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, password:hashedPassword, name, email});
        await user.save();
        res.status(201).json({message:"User Created"});
    } catch(error) {
        console.error(error);
        res.status(500).json({message:"Registration Failed"});
    }
};

