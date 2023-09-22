import JWT from './src/utils/jwt';

declare global {
    namespace Express {
        interface Request {
            user?:JWT;
        }
    }
}