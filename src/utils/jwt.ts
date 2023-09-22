import jwt from 'jsonwebtoken';

class JWT {
    private static secret = "blog-post";

    static generateToken(payload:object):string{
        return jwt.sign(payload, JWT.secret, {expiresIn:'1h'});
    }

    static varifyToken(token:string):any{
        try{
            return jwt.verify(token, JWT.secret);
        } catch (error) {
            throw new Error('Invalid Token Supplied');
        }
    }
}

export default JWT;

