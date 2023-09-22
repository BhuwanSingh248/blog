import express, {Request, Response, NextFunction} from 'express';
import JWT from '../utils/jwt';

const authenticationToken = (req:Request, res:Response, next:NextFunction) => {
    const token = (req.headers['authorization'] as string)?.split(' ')[1];
    if (!token) {
        res.status(401).json({message:"Authentication required"});
    }
    try {
        const decode = JWT.varifyToken(token);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(403).json({message:'Invalid Token'});
    }
};

export default authenticationToken

